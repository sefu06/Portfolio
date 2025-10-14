import { useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import BackButton from './components/BackButton';

export default function Layout({ children }) {
    const location = useLocation();
    const onHome = location.pathname === "/"; // only show Navbar on homepage

    return (
        <>
            {onHome ? <Navbar /> : <BackButton />}
            {children}
        </>
    );
}