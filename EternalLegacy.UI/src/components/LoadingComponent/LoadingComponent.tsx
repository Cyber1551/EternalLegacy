import {Box, Center, Loader} from "@mantine/core";

const LoadingComponent = () => {
    return <Box style={{height: '100%', width: '100%'}} styles={(theme) => ({
        background: '#1A1B1E'
    })}><br /><br /><br /><br /><br /><Center><Loader /></Center></Box>
}

export default LoadingComponent;