import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import {
    MantineProvider,
    ColorScheme,
    ColorSchemeProvider
} from '@mantine/core';
import ErrorBoundary from "./ErrorBoundary.tsx";
import NavBarComponent from "./components/NavBarComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingComponent from "./components/LoadingComponent";
import NotFoundScreen from "./screens/NotFoundScreen/NotFoundScreen.tsx";
import DashboardScreen from "./screens/DashboardScreen";
import LandingScreen from "./screens/LandingScreen";
import LegacyPreviewScreen from "./screens/LegacyPreviewScreen/LegacyPreviewScreen.tsx";

const App = () => {
    const { isLoading, error, isAuthenticated } = useAuth0();
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    if (error) {
        return <ErrorBoundary />
    }

    if (isLoading) {
        return <LoadingComponent />;
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: !isAuthenticated ? <DashboardScreen /> : <LandingScreen />,

        },
        {
            path: "/:id",
            element: <LegacyPreviewScreen />
        },
        {
            path: "/:id",
            element: <LegacyPreviewScreen />
        },
        {
            path: "*",
            element: <NotFoundScreen />
        }
    ]);
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <NavBarComponent />
                <div className={'contentWrapper'}>
                    <RouterProvider router={router} />
                </div>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}
export default App
