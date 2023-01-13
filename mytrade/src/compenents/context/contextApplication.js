import { createContext, useEffect, useState } from "react";
import ProductService from "../../services/productService";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const productService = new ProductService();

  const [products, setProducts] = useState([]);
 
  const [categories, setCategories] = useState([]);
  const [carts,setCarts]=useState([])
  const [comments, setComments] = useState([]);
  const [abouts,setAbouts]=useState([]);
  const [productDetails,setProductDetails]=useState([]);
  const [manwomens,setManWomens]=useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [contacts,setContacts]=useState([]);
  const [snacbar, SetSnacbar] = useState({
    isOpen: false,
    message: "Selam..",
    severity: "success",
  });
  useEffect(() => {
    productService.getProductWithDetail().then((resp) => setProducts(resp));
  }, []);
  const values = {
    products,
    setProducts,
    categories,
    setCategories,
    carts,setCarts,
    isLogin,
    setIsLogin,
    snacbar,
    SetSnacbar,
    comments,
    setComments,
    productDetails,
    setProductDetails,
    contacts,
    setContacts,
    abouts,
    setAbouts,
    manwomens,
    setManWomens
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
