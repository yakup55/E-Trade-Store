import {useSelector } from "react-redux";
import Product from "../product/Product";
export default function FavoriteList() {
  const { products } = useSelector((state) => state.product);
  const { favori } = useSelector((state) => state.favori);
  
  console.log(favori);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Favorite List </h2>
      {products.map((product) => (
       favori.includes(product.productId) &&  <Product key={product.productId} product={product}></Product>
      ))}
    </div>
  );
}
