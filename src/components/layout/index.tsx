import { ReactNode } from "react";

interface LayoutProps {
    children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="app">
            {/* <Header /> */}
            <main className="main">{children}</main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout