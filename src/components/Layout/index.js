import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return <>
        <header>
            <nav>
                <ul>
                    <li><Link to={'/'}>Logout</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </>
}

export default Layout