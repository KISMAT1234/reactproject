import 'bootstrap/dist/css/bootstrap.min.css';
import RouterComponent from "./RouterComponents";
import Footer from "./Footer";
import Menu from "./Menu";
// import Error from "./PageNotFound";

function App(){
  return (
    <div>
        <Menu/> 
           <RouterComponent/>
        {/* <Footer/> */}
    </div>
  )
}
export default App;