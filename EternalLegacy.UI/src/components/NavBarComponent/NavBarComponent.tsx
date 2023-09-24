import {useAuth0} from "@auth0/auth0-react";
import {
    ActionIcon,
    Box, Burger, Button, Center,
    Group,
    Header,
    Text,
    useMantineColorScheme
} from "@mantine/core";
import useStyles from "./styles.ts";
import {IconMoonStars, IconSun} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";
import UserMenuComponent from "../UserMenuComponent";
import {useLegacy} from "../../contexts/LegacyContext.tsx";


const NavBarComponent = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const {viewingLegacy} = useLegacy();
    const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);
    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();

    const {classes} = useStyles();

    return (
        <Header height={60} px="md">
            <Group position="apart" sx={{ height: '100%' }}>
                <Group>
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
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>ETERNAL LEGACY</Text>
                </Group>

                <Group className={classes.hiddenMobile}>
                    {!isAuthenticated && <Button onClick={() => loginWithRedirect({
                        authorizationParams: {
                            redirect_uri: window.location.origin
                        }
                    })} variant="default">Log in</Button>}
                    {isAuthenticated && <UserMenuComponent /> }
                </Group>

                <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
            </Group>
        </Header>
    );
}

export default NavBarComponent;