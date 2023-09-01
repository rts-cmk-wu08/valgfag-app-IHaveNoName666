import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <header>
                <p>Sej header</p>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Sej footer</p>
            </footer>
        </>
    )
}

export default Layout;