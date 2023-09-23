
import useStyles from "./styles.ts";
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import LoadingComponent from "../../components/LoadingComponent";
import {IconCheck} from "@tabler/icons-react";
import {Avatar, Button, Group, Notification, Paper, Text, TypographyStylesProvider} from '@mantine/core';
import {useState} from "react";


// eslint-disable-next-line react-refresh/only-export-components
const DashboardScreen = () => {
    const CommentHtml = {
        postedAt: 'Founder at Recipe App',
        body: "Hellllo, you're logged in <br/> Welcome to the Recipe App. Explore different recipes.",
        author: {
            name: 'Your name',
            image:
                'https://media-exp1.licdn.com/dms/image/D5616AQEk-SiPdqh6Bw/profile-displaybackgroundimage-shrink_350_1400/0/1665989036761?e=1674691200&v=beta&t=wmM4eiijZhh89j3DEv8toSHEFAwyQlkpv-UFn6WJukU',
        },
    };

    const { classes } = useStyles();
    const { user } = useAuth0();
    console.log(user);
    const [showNotification, setShowNotification] = useState(false);
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
                withBorder
                radius='md'
                className={classes.comment}
            >
                {/* <Group>
        <Avatar src={CommentHtml.author.image} alt={''} radius="xl" />
        <div>
          <Text size="sm">{CommentHtml.author.name}</Text>
          <Text size="xs" color="dimmed">
            {CommentHtml.postedAt}
          </Text>
        </div>
      </Group> */}
                <Group>
                    <Avatar
                        src={user?.picture}
                        alt={''}
                        radius='xl'
                    />
                    <div>
                        <Text size='sm'>{user?.name}</Text>
                        <Text
                            size='xs'
                            color='dimmed'
                        >
                            {CommentHtml.postedAt}
                        </Text>
                    </div>
                </Group>
                <TypographyStylesProvider className={classes.body}>
                    <div
                        className={classes.content}
                        dangerouslySetInnerHTML={{ __html: CommentHtml.body }}
                    />
                    <Button
                        onClick={() => {
                            setShowNotification(true);
                        }}
                        className={classes.exploreBtn}
                        size='xs'
                    >
                        Explore Recipes
                    </Button>
                </TypographyStylesProvider>

                {showNotification && (
                    <Notification
                        onClose={() => {
                            setShowNotification(false);
                        }}
                        className={classes.exploreBtn}
                        icon={<IconCheck size={20} />}
                        title="Wow Glad you're exploring"
                    >
                        You can have access to all the recipes and create it.
                    </Notification>
                )}
            </Paper>
        </div>
    );
}


// eslint-disable-next-line react-refresh/only-export-components
export default withAuthenticationRequired(DashboardScreen, {
    onRedirecting: () => <LoadingComponent />,
});