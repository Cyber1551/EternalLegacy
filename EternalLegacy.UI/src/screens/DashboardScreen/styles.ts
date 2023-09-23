import {createStyles} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    comment: {
        padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
        width: '30%',
    },
    exploreBtn: {
        alignSelf: 'center',
        marginTop: 10,
    },
    body: {
        paddingLeft: 54,
        paddingTop: theme.spacing.sm,
        fontSize: theme.fontSizes.sm,
    },

    content: {
        '& > p:last-child': {
            marginBottom: 0,
        },
    },
}));
export default useStyles;