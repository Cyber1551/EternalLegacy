import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LegacyComponent from "../../components/LegacyComponent";
import { ILegacy } from "../../models/legacy";
import { LegacyType } from "../../models/legacyType";
import LoadingComponent from "../../components/LoadingComponent";
import {useLegacy} from "../../contexts/LegacyContext.tsx";
//import {Avatar, Button, Group, Notification, Paper, Text, TypographyStylesProvider} from '@mantine/core';

const DashboardScreen = () => {
    const { user } = useAuth0();
    const {legacies} = useLegacy();
    console.log(user);

    return (
        <div style={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: 700 }}>
            {legacies.map((legacy) => {
                return (
                    <div >
                        <LegacyComponent legacy={legacy} />
                    </div>

                )
            })}
        </div>
    );
}


//eslint - disable - next - line react - refresh / only -export -components
export default withAuthenticationRequired(DashboardScreen, {
    onRedirecting: () => <LoadingComponent />,
});