import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    const { user } = useSelector(st => st.invoice)
    return <>
        <header>
            <nav>
                <ul className="menu">
                    <li>{user.Name} | </li>
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
