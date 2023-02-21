import { ReactNode } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Footer from "../Footer";
import Header from "../Header";
import './index.css';
interface LayoutProps {
    children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="app">
            <CssBaseline />
            <Header />
            <Container maxWidth={false} className="main">
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout;
