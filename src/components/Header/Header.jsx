import { Link } from "react-router-dom";
import {Nav} from "../Nav/Nav";


export const Header = () => {
    return (
        <header>
           
            <Link to={"/"}><img src="../public/images/logo.jpg" alt="logo" width="100" height="100"/> <h1>Tu tienda de lavarropas</h1> </Link>
             <Nav />
            
           
        </header>

    );



};