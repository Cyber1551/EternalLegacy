import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LegacyComponent from "../../components/LegacyComponent";
import { ILegacy } from "../../models/legacy";
import { LegacyType } from "../../models/legacyType";
import LoadingComponent from "../../components/LoadingComponent";
//import {Avatar, Button, Group, Notification, Paper, Text, TypographyStylesProvider} from '@mantine/core';

const DashboardScreen = () => {
    const { user } = useAuth0();
    console.log(user);

    //TODO: This will be deleted after api integration
    const legacys: ILegacy[] = [{ legacyId: 1, legacyType: LegacyType.TimeCapsule, name: 'test', published: false },
    { legacyId: 2, legacyType: LegacyType.Presentation, name: 'test2', published: false },
    { legacyId: 2, legacyType: LegacyType.Presentation, name: 'test2', published: false },
    { legacyId: 2, legacyType: LegacyType.Presentation, name: 'test2', published: false },
    { legacyId: 2, legacyType: LegacyType.Presentation, name: 'test2', published: false },
    { legacyId: 2, legacyType: LegacyType.Presentation, name: 'test2', published: false },
    { legacyId: 2, legacyType: LegacyType.Presentation, name: 'test2', published: false },
    { legacyId: 2, legacyType: LegacyType.Presentation, name: 'test2', published: false },
    { legacyId: 2, legacyType: LegacyType.Presentation, name: 'test2', published: false },
    { legacyId: 2, legacyType: LegacyType.Presentation, name: 'test2', published: false },
    { legacyId: 2, legacyType: LegacyType.Presentation, name: 'test2', published: false }]

    return (
        <div style={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: 700 }}>
            {legacys.map((legacy) => {
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