import {ILegacy} from "../models/legacy.ts";
import {createContext, ReactElement, useContext, useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {getLegacies, getLegacyById, getLegacyContentForLegacy} from "../services/legacy.service.ts";
import {ILegacyContent} from "../models/legacyContent.ts";

export interface ILegacyContext {
    legacies: Array<ILegacy>,
    viewingLegacyContent: Array<ILegacyContent>
    viewingLegacy: ILegacy | undefined,
    changeViewingLegacy: (id: number) => void;
}

const LegacyContext = createContext<ILegacyContext>({
    legacies: [],
    viewingLegacyContent: [],
    viewingLegacy: undefined,
    changeViewingLegacy: () => {}
});

export const LegacyProvider = (props: {children: ReactElement}) => {

    const {user} = useAuth0();
    const [legacies, setLegacies] = useState<Array<ILegacy>>([]);
    const [viewingLegacyContent, setViewingLegacyContent] = useState<Array<ILegacyContent>>([]);
    const [viewingLegacy, setViewingLegacy] = useState<ILegacy | undefined>(undefined)



    useEffect(() => {
        if (user && user.email) {
            getLegacies(user.email).then(leg => {
                setLegacies(leg);
                console.log(leg);
            })
        }
    }, [user]);

    useEffect(() => {
        if (viewingLegacy) {
            getLegacyContentForLegacy(viewingLegacy.legacyId).then(content => {
                setViewingLegacyContent(content)
            })
        }
    }, [viewingLegacy]);

    const changeViewingLegacy = (id: number)=> {
        getLegacyById(id).then(leg => {
            console.log(leg)
            setViewingLegacy(leg)
        })

    }

    return <LegacyContext.Provider value={{
        legacies,
        viewingLegacyContent,
        viewingLegacy,
        changeViewingLegacy
    }}>
        {props.children}
    </LegacyContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLegacy = () => {
    const context = useContext<ILegacyContext>(LegacyContext);
    if (context === undefined) {
        throw new Error("Must be used within the legacy provider");
    }
    return context;
}