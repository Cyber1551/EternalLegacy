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
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NotFoundScreen from "./screens/NotFoundScreen/NotFoundScreen.tsx";
import DashboardScreen from "./screens/DashboardScreen";
import LandingScreen from "./screens/LandingScreen";
import LegacyPreviewScreen from "./screens/LegacyPreviewScreen/LegacyPreviewScreen.tsx";
import CreateLegacyScreen from "./screens/CreateLegacyScreen";
import LoadingComponent from "./components/LoadingComponent";


const App = () => {
    const { isLoading, error, isAuthenticated } = useAuth0();
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    if (error) {
        return <ErrorBoundary />
    }

    if (isLoading) {
        return <LoadingComponent />
    }

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: !isAuthenticated ? <DashboardScreen /> : <LandingScreen />,
    //     },
    //     {
    //         path: "/:id",
    //         element: <LegacyPreviewScreen />
    //     },
    //     {
    //         path: "/create/memorial",
    //         element: <CreateLegacyScreen type={'memorial'}/>
    //     },
    //     {
    //         path: "/create/timecapsule",
    //         element: <CreateLegacyScreen type={'timecapsule'} />
    //     },
    //     {
    //         path: "*",
    //         element: <NotFoundScreen />
    //     }
    // ]);
    return (
        <BrowserRouter>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <NavBarComponent />
               <Routes>
                    <Route path="/" element={isAuthenticated ? <DashboardScreen /> : <LandingScreen />} />
                    <Route path="/:id" element={<LegacyPreviewScreen />}/>
                    <Route path={"/edit/:id"} element={<CreateLegacyScreen />} />
                    <Route path='*' element={<NotFoundScreen />}/>
                </Routes>
                {/*<div className={'contentWrapper'}>*/}
                {/*    {isLoading ? <LoadingComponent /> : <RouterProvider router={router} />}*/}
                {/*</div>*/}
            </MantineProvider>
        </ColorSchemeProvider>
        </BrowserRouter>
    );
}
export default App
