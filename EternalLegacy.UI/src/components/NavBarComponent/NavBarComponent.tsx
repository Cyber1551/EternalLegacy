import { useAuth0 } from "@auth0/auth0-react";
import {
    ActionIcon,
    Box, Burger, Button,
    Group,
    Header,
    useMantineColorScheme,
    Menu
} from "@mantine/core";
import useStyles from "./styles.ts";
import { IconMoonStars, IconSun, IconSettings, IconMessageCircle, IconPlus } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import UserMenuComponent from "../UserMenuComponent";


const NavBarComponent = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);
    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();

    const { classes } = useStyles();

    return (
        <Header height={60} px="md">
            <Group position="apart" sx={{ height: '100%' }}>
                <Box>
                    <ActionIcon
                        onClick={() => toggleColorScheme()}
                        size="lg"
                        sx={(theme) => ({
                            backgroundColor:
                                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                            color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                        })}
                    >
                        {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                    </ActionIcon>
                </Box>

                <Group className={classes.hiddenMobile}>
                    {!isAuthenticated && <Menu shadow="md">
                        <Menu.Target>
                            <Button><IconPlus />Create New Item</Button>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item icon={<IconSettings size={14} />}>Memorial</Menu.Item>
                            <Menu.Item icon={<IconMessageCircle size={14} />}>Time Capsule</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>}
                    {!isAuthenticated && <Button onClick={() => loginWithRedirect({
                        authorizationParams: {
                            redirect_uri: window.location.origin
                        }
                    })} variant="default">Log in</Button>}
                    {isAuthenticated && <UserMenuComponent />}
                </Group>

                <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
            </Group>
        </Header>
    );
}

export default NavBarComponent;