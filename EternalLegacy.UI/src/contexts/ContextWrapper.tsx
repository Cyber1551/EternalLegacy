import {ReactElement} from "react";
import {AppState, Auth0Provider} from "@auth0/auth0-react";
import {createBrowserHistory} from "history";
import getConfig from "../config/config.ts";
import {LegacyProvider} from "./LegacyContext.tsx";


const ContextWrapper = (props: {children: ReactElement}) => {
    const history = createBrowserHistory();
    const config = getConfig();

    const onRedirectCallback = (appState: AppState | undefined) => {
        history.push(
            appState && appState.returnTo ? appState.returnTo : window.location.pathname
        );
    };


    return <Auth0Provider domain={config.domain} clientId={config.clientId} onRedirectCallback={onRedirectCallback}>
        <LegacyProvider>
            {props.children}
        </LegacyProvider>
    </Auth0Provider>
}

export default ContextWrapper;