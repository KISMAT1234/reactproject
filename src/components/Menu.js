import {Link} from "react-router-dom";
function Menu(){
    return <>
     <nav className=" navbar-light bg-light">
      <div className="container">
        <div className="" id="navbarNav">
          <ul className="navbar-nav flex flex-row ">
          <li className="nav-item m-2">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item m-2">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item m-2">
              <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item m-2">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item m-2">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item m-2">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
}
export default Menu;