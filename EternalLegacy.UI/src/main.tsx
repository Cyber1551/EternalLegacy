import ReactDOM from 'react-dom/client'
import {AppState, Auth0Provider} from "@auth0/auth0-react";
import {createBrowserHistory} from 'history';
import App from './App.tsx'
import './index.css'
import getConfig from "./config/config.ts";

const history = createBrowserHistory();
const config = getConfig();

const onRedirectCallback = (appState: AppState | undefined) => {
    history.push(
        appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider domain={config.domain} clientId={config.clientId} onRedirectCallback={onRedirectCallback} >
    <App />
  </Auth0Provider>,
)
