import PeoplePage from "../containers/PeoplePage";
import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage";
import PersonPage from "../containers/PersonPage";
import FavoritesPage from "../containers/FavoritesPage";
import SearchPage from "../containers/SearchPage";
import ErrorMessage from "../components/ErrorMessage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/favorites',
        element: <FavoritesPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    }, 
    {
        path: '/fail',
        element: <ErrorMessage/>
    }
]

export default routesConfig;