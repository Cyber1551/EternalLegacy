import configJson from './authConfig.json';

const getConfig = () => {
    return {
        domain: configJson.domain,
        clientId: configJson.clientId
    }
}

export default getConfig;