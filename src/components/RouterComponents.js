import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import News from "./News";
import Contact from "./Contact";
import NewsDetails from "./NewsDetails";
import Error from "./PageNotFound";
import Register from "./Register";
import Login from "./Login";
// import AddingSuppliment from"./admin/AddCategoryComponent";
// import Dashboard from "./admin/DashboardComponent";
// import RouteMiddleware from "./middleware/RouteMiddleware";

function RouterComponent(){
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>

            <Route path ="/about" element={<About/>}/>

            <Route path="/news" element={<News/>}/>
            <Route path="/news-details/:id" element={<NewsDetails/>}/>

            <Route path="/contact" element={<Contact/>}/>

            <Route path="/Register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>




            {/* <Route path="/admin" element={<RouteMiddleware/>}>
                <Route path="/admin" element={<Dashboard/>}/>
                <Route path="/add-category" element={<AddingSuppliment/>}/>
            </Route> */}


            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}
export default RouterComponent;
 