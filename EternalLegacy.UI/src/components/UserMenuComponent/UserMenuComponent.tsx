import { useAuth0 } from "@auth0/auth0-react";
import {Avatar, Group, Menu, Text, UnstyledButton} from "@mantine/core";
import {
    IconChevronDown,
    IconLogout,
    IconSettings,
    IconSwitchHorizontal
} from "@tabler/icons-react";
import useStyles from "./styles.ts";
import {useState} from "react";

const UserMenuComponent = () => {
    const { classes, cx } = useStyles();
    const [userMenuOpened, setUserMenuOpened] = useState<boolean>(false);
    const {
        user,
        logout,
    } = useAuth0();
    const logoutWithRedirect = () =>
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });

    return(
        <div>
            <Menu
                width={260}
                position="bottom-end"
                transition="pop-top-right"
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
            >
                <Menu.Target>
                    <UnstyledButton
                        className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                    >
                        <Group spacing={7}>
                            <Avatar src={'https://media-exp1.licdn.com/dms/image/D5616AQEk-SiPdqh6Bw/profile-displaybackgroundimage-shrink_350_1400/0/1665989036761?e=1674691200&v=beta&t=wmM4eiijZhh89j3DEv8toSHEFAwyQlkpv-UFn6WJukU'} alt={'rohan'} radius="xl" size={20} />
                            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                                {user?.name}
                            </Text>
                            <IconChevronDown size={12} stroke={1.5} />
                        </Group>
                    </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Label>Settings</Menu.Label>
                    <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>Account settings</Menu.Item>
                    <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
                        Change account
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item color='red' onClick={() => logoutWithRedirect()} icon={<IconLogout size={14} stroke={1.5} />}>Logout</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default UserMenuComponent;