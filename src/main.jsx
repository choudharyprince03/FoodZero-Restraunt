import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'; 
import "./index.css" ; 
import { Provider } from "react-redux";
// import store from "./store/store.js";   
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Landingpage from './pages/Landingpage';
import Reservation from './pages/ReservationPage.jsx';
import Menupage from './pages/Menupage';
// import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
// import Login from "./pages/Login.jsx";
// import SignUp from "./pages/SignUp.jsx";
// import Account from "./pages/Account.jsx";


const root = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />}>
                <Route path='/' element={<Landingpage />} />
                {/* <Route path='/' element={<Comingsoon />} /> */}
                <Route path='/reservation' element={<Reservation />} /> 
                <Route path='/about' element={<About />} />
                <Route path='/menu' element={<Menupage />} />
                {/* <Route path="/cart" element={<Cart />} /> */}
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/account" element={<Account />} /> */}
        </Route>
    )
)

createRoot(document.getElementById('root')).render
(
    <StrictMode>
        
            <RouterProvider router = {root} />
      
    </StrictMode>

    
)