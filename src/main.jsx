import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Buyer from "./pages/Buyer.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Admin from "./pages/admin/Admin.jsx"; 
import Supplier from "./pages/Supplier.jsx";
import BuyerRegister from "./pages/BuyerRegister.jsx";
import Contact from "./pages/Contact.jsx";
import SupplierRegister from "./pages/SupplierRegister.jsx";
import GetAQuote from "./pages/GetaQuote.jsx";
import SupplierTable from "./components/admin/SupplierTable.jsx";
import BuyerTable from "./components/admin/BuyerTable.jsx";
import Category from "./pages/admin/Category.jsx";
import SubCategory from "./pages/admin/SubCategory.jsx";
import Catalog from "./pages/admin/Catalog.jsx";
import Inquiry from "./pages/admin/Inquiry.jsx";
import Specification from "./pages/admin/Specification.jsx";
import ProductList from "./pages/admin/ProductList.jsx";
import ProductView from "./pages/admin/ProductView.jsx";
import ProductListOutlet from "./pages/admin/ProductListOutlet.jsx";
import ProductEditPage from "./components/admin/ProductEditPage.jsx";
import ProductEdit from "./pages/admin/ProductEdit.jsx";
import ContactUs from "./pages/admin/ContactUs.jsx";
import BuyerAdmin from "./pages/Buyer-admin/BuyerAdmin.jsx";
import BuyerDashboard from "./pages/Buyer-admin/BuyerDashboard.jsx";
import CreateRFQ from "./pages/Buyer-admin/CreateRFQ.jsx";
import NewOrder from "./pages/admin/NewOrder.jsx";
import OrderHistory from "./pages/admin/OrderHistory.jsx";
import MyRFQ from "./pages/Buyer-admin/MyRFQ.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* User Routes */}
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/buyer-register" element={<BuyerRegister/>} />
        <Route path="/supplier-register" element={<SupplierRegister/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/quote" element={<GetAQuote/>}/>
      </Route>

      {/* Admin Panel with Nested Routes */}
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path="suppliers" element={<SupplierTable/>}/>
        <Route path="buyer" element={<BuyerTable/>} />
        <Route path="category" element={<Category/>}/>
        <Route path="sub-category" element={<SubCategory/>}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="inquiries" element={<Inquiry/>}/>
        <Route path="specification" element={<Specification/>} />
        <Route path="contact" element={<ContactUs/>}/>
        <Route path="product-list" element={<ProductListOutlet/>} >
           <Route index element={<ProductList/>} />
           <Route path="product-view/:id" element={<ProductView/>} />
           <Route path="product-edit/:id" element={<ProductEdit/>} />
        </Route>
        <Route path="new-order" element={<NewOrder/>}/>
        <Route path="order-history" element={<OrderHistory/>} />
      </Route>

      {/* Buyer admin Panel with nested routes */}

      <Route path="/buyer-admin" element={<BuyerAdmin/>}>
         <Route index element={<BuyerDashboard/>}/>
         <Route path="create-rfq" element={<CreateRFQ/>}/>
         <Route path="my-rfq" element={<MyRFQ/>}/>

      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>
);
