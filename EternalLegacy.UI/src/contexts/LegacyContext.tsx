import {ILegacy} from "../models/legacy.ts";
import {createContext, ReactElement, useContext, useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {getLegacyById, getLegacyByUserEmail, getLegacyContentForLegacy} from "../services/legacy.service.ts";
import {ILegacyContent} from "../models/legacyContent.ts";

export interface ILegacyContext {
    legacies: Array<ILegacy>,
    viewingLegacyContent: Array<ILegacyContent>,
    currentLegacyContentIndex: number,
    viewingLegacy: ILegacy | undefined,
    changeViewingLegacy: (id: number) => void;
    onLegacyContentClick: (index: number) => void;
    refreshList: () => void;
}

const LegacyContext = createContext<ILegacyContext>({
    legacies: [],
    viewingLegacyContent: [],
    currentLegacyContentIndex: 0,
    viewingLegacy: undefined,
    changeViewingLegacy: () => {},
    onLegacyContentClick: () => {},
    refreshList: () => {}
});

export const LegacyProvider = (props: {children: ReactElement}) => {

    const {user} = useAuth0();
    const [legacies, setLegacies] = useState<Array<ILegacy>>([]);
    const [viewingLegacyContent, setViewingLegacyContent] = useState<Array<ILegacyContent>>([]);
    const [viewingLegacy, setViewingLegacy] = useState<ILegacy | undefined>(undefined)
    const [currentLegacyContentIndex, setCurrentLegacyContentIndex] = useState<number>(0);

    useEffect(() => {
        if (user && user.email) {
            getLegacyByUserEmail(user.email).then(leg => {
                console.log(leg)
                setLegacies(leg ?? []);
                console.log(leg);
            })
        }
    }, [user]);

    const refreshList = () => {
        if (user && user.email) {
            getLegacyByUserEmail(user.email).then(leg => {
                console.log(leg)
                setLegacies(leg ?? []);
                console.log(leg);
            })
        }
    }

    useEffect(() => {
        if (viewingLegacy) {
            getLegacyContentForLegacy(viewingLegacy.legacyId).then(content => {
                setViewingLegacyContent(content)
            });
        }
    }, [viewingLegacy]);

    const changeViewingLegacy = (id: number)=> {
        getLegacyById(id).then(leg => {
            console.log(leg)
            setViewingLegacy(leg)
        })
    }

    const onLegacyContentClick = (index: number) => {
        setCurrentLegacyContentIndex(index);
    }

    return <LegacyContext.Provider value={{
        legacies,
        viewingLegacyContent,
        viewingLegacy,
        currentLegacyContentIndex,
        changeViewingLegacy,
        onLegacyContentClick,
        refreshList
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