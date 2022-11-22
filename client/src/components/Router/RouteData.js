import {lazy} from "react"
import {
    HOME_ROUTE,
    LOGIN_ROUTE,
    USERS_ROUTE,
    GROUPS_ROUTE,
} from '../../utils/consts'

const routes = [
    {
        label: 'Home',
        path: HOME_ROUTE,
        element: lazy( () => import('../../pages/HomePage')),
        exact: true
    },
    {
        label: 'Login',
        path: LOGIN_ROUTE,
        element: lazy( () => import('../../pages/LoginPage')),
        exact: true
    },
    {
        label: 'Users',
        path:  USERS_ROUTE,
        element: lazy( () => import('../../pages/PageUsers')),
        exact: true
    },
    {
        label: 'Groups',
        path: GROUPS_ROUTE,
        element: lazy( () => import('../../pages/PageGroups')),
        exact: true
    }
]

export default routes