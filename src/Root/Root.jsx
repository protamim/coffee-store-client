import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Root = () => {
    return (
        <>
            <div style={{fontFamily:'Rancho, cursive'}}>
            <Navbar />
            <Outlet />
            </div>
        </>
    );
};

export default Root;