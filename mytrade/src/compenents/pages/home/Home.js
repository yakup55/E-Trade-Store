import React from "react";
import { useSelector } from "react-redux";
import CategoryList from "../../categoryList/CategoryList";
import ProductList2 from "../../productList/ProductList2";
import ProductHomeList from "../../productList/ProductHomeList";
import Product2Home from "../../product/Product2Home";
import Footer from "../../footer/Footer"
import BrandList from "../../brandList/BrandList";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
export default function Home() {
  const { theme } = useSelector((state) => state.app);
  return (
    <div>
        <ProductHomeList></ProductHomeList>
   
      <CategoryList></CategoryList>
      <BrandList></BrandList>
    
      
    </div>
  );
}
