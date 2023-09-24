import {useAuth0} from "@auth0/auth0-react";
import {
    ActionIcon,
    Burger,
    Button,
    Center,
    Group,
    Header,
    Menu,
    Modal,
    Select,
    Text,
    Textarea,
    TextInput,
    useMantineColorScheme
} from "@mantine/core";
import useStyles from "./styles.ts";
import {
    IconHourglassEmpty,
    IconMoonStars,
    IconPhotoSquareRounded,
    IconPlus,
    IconSun,
    IconUser
} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";
import UserMenuComponent from "../UserMenuComponent";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {createLegacy} from "../../services/legacy.service.ts";
import {LegacyType} from "../../models/legacyType.ts";
import {DateType} from "../../models/dateType.ts";


const NavBarComponent = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);
    const [createOpened, setCreateOpened] = useState<boolean>(false);
    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();
    const { classes } = useStyles();
    const navigate = useNavigate();

    const [legacyName, setLegacyName] = useState<string>("");
    const [legacyDateType, setLegacyDateType] = useState<DateType>(DateType.neither);
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
                    <Text style={{fontWeight: 'bold', fontSize: 25}} onClick={() => navigate('/')}>ETERNAL LEGACY</Text>
                </Group>

                <Group className={classes.hiddenMobile}>
                    {isAuthenticated && <Menu shadow="md">
                        <Menu.Target>
                            <Button><IconPlus />Create New Item</Button>
                        </Menu.Target>
                        <Modal
                            opened={createOpened}
                            onClose={() => setCreateOpened(false)}
                            title="New Legacy"
                        >
                            <br />
                            <TextInput placeholder={"Legacy Name..."} value={legacyName} onChange={(e) => setLegacyName(e.target.value)}/>
                            <br />
                            <Textarea placeholder={"Description..."} />
                            <br />
                            <Select style={{flex: 1}} data={["Nothing", "Year", "Month", "Day"]} onChange={(e) => {
                                switch(e) {
                                    case 'Year':
                                        setLegacyDateType(DateType.year);
                                        break;
                                    case 'Nothing':
                                        setLegacyDateType(DateType.neither);
                                        break;
                                    case 'Month':
                                        setLegacyDateType(DateType.month);
                                        break;
                                }
                            }} placeholder={"Group By..."} />
                            <br />
                            <Center>
                            <Button onClick={() => {
                                createLegacy({
                                    legacyId: 0,
                                    name: legacyName,
                                    legacyType: LegacyType.Presentation,
                                    published: true,
                                    dateType: legacyDateType,
                                    openDate: new Date(),
                                }).then(x => {
                                    navigate(`/edit/${x.legacyId}`)
                                }).finally(() => {
                                    setLegacyName("")
                                    setCreateOpened(false);
                                    setLegacyDateType(DateType.neither)
                                })
                            }}>Create</Button>
                            </Center>
                        </Modal>
                        <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item icon={<IconPhotoSquareRounded size={14} />} onClick={() => setCreateOpened(true)}>Presentation</Menu.Item>
                            <Menu.Item icon={<IconUser size={14} />} >Memorial</Menu.Item>
                            <Menu.Item icon={<IconHourglassEmpty size={14} />} >Time Capsule</Menu.Item>
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