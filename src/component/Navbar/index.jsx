import { Link } from "react-router-dom";
import "./navbar.css"


function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src="" alt="ppp"/>
                    </Link>
                    <div className="list-wrapper">
                        <img src="img/home4.png" alt="lll"/>
                        <img src="img/law1.png" alt="lllk"/>
                        <img src="" alt="f"/>

                        <ul>
                            <li> 
                               <Link>
                                    Name
                                </Link>
                            </li>
                            <li>
                                <Link > 
                                ABout
                                </Link>
                            </li>
                            <li>
                                <Link  > 
                                ABout
                                </Link>
                            </li>
                            <li>
                                <Link  > 
                                ABout
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
