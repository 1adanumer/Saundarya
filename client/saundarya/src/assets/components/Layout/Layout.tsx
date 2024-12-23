
import Navbar from "../Navbar/Navbar";  
import Footer from "../Footer/Footer";


import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
