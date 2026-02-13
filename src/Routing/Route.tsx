
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import Catalogue from "../Pages/Catalogue";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import GetQuote from "../Pages/GetQuote";
import Album from "../Pages/Album";
import PageNotFound from "../Pages/PageNotFound";

const RouteComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/getquote" element={<GetQuote />} />
                <Route path="/album" element={<Album />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
export default RouteComponent;
