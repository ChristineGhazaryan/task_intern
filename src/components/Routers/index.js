import { useRoutes } from "react-router-dom"
import Layout from '../Layout'
import Login from "../Login"
import Invoices from "../Invoices"

const Routers = () => {
    return useRoutes([
        {
            path: '*',
            element: <h1>Page not found</h1>
        },
        {
            path: '',
            element: <Layout />,
            children: [
                { path: '', element: <Login /> },
                { path: 'invoices', element: <Invoices /> }
            ]
        }
    ])
}

export default Routers