import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../contact/Contact";
import Home from "../pages/home/Home";
import ProductList from "../productList/ProductList";
import Login from "../login/Login";
import Search from "../search/Search";
import CategoryList2 from "../categoryList/CategoryList2";
import ProductDetails from "../product/ProductDetails";
import ProductCategory from "../product/ProductCategory";
import AddProduct from "../pages/admin/product/AddProduct";
import Card from "../card/Cardd";
import BasketList from "../basket/BasketList";
import FavoriteList from "../favorite/FavoriteList";
import AddProductDetail from "../pages/admin/product/AddProductDetail";
import AddCategory from "../pages/admin/category/AddCategory";
import CategoryList from "../pages/admin/category/CategoryList";
import UpdateCategory from "../pages/admin/category/UpdateCategory";
import AdminProductList from "../pages/admin/product/AdminProductList";
import UpdateProduct from "../pages/admin/product/UpdateProduct";
import AdminCommentList from "../pages/admin/comment/AdminCommentList";
import Error404 from "../errorPages/Error404";
import AdminContactList from "../pages/admin/contact/AdminContactList";
import AdminAboutList from "../pages/admin/about/AdminAboutList";
import AdminAboutUpdate from "../pages/admin/about/AdminAboutUpdate";
import AdminAboutAdd from "../pages/admin/about/AdminAboutAdd";
import AdminWacthAdd from "../pages/admin/wacth/AdminWacthAdd";
import AdminTvAdd from "../pages/admin/tv/AdminTvAdd";
import AdminPhoneAdd from "../pages/admin/phone/AdminPhoneAdd";
import AdminPhoneHeaddAdd from "../pages/admin/phoneHead/AdminPhoneHeaddAdd";
import AdminPcAdd from "../pages/admin/pc/AdminPcAdd";
import AdminManWomenAdd from "../pages/admin/manWomen/AdminManWomenAdd";
import AdminPcList from "../pages/admin/pc/AdminPcList";
import AdminPcUpdate from "../pages/admin/pc/AdminPcUpdate";
import AdminWacthList from "../pages/admin/wacth/AdminWacthList";
import AdminUpdateWacth from "../pages/admin/wacth/AdminUpdateWacth";
import AdminTvList from "../pages/admin/tv/AdminTvList";
import AdminHeadPhoneList from "../pages/admin/phoneHead/AdminHeadPhoneList";
import AdminUpdateHeadPhone from "../pages/admin/phoneHead/AdminUpdateHeadPhone";
import AdminUpdatePhone from "../pages/admin/phone/AdminUpdatePhone";
import AdminPhoneList from "../pages/admin/phone/AdminPhoneList";
import AdminManWomenList from "../pages/admin/manWomen/AdminManWomenList";
import AdminUpdateManWomen from "../pages/admin/manWomen/AdminUpdateManWomen";
import AdminTvUpdate from "../pages/admin/tv/AdminTvUpdate";
import ProductBrand from "../product/ProductBrand";
import AdminBrandList from "../pages/admin/brand/AdminBrandList";
import AdminBrandUpdate from "../pages/admin/brand/AdminBrandUpdate";
import AdminBrandAdd from "../pages/admin/brand/AdminBrandAdd";
import AdminColorList from "../pages/admin/color/AdminColorList";
import AdminColorAdd from "../pages/admin/color/AdminColorAdd";
import AdminColorUpdate from "../pages/admin/color/AdminColorUpdate";
import AdminNumberList from "../pages/admin/number/AdminNumberList";
import AdminNumberUpdate from "../pages/admin/number/AdminNumberUpdate";
import AdminNumberAdd from "../pages/admin/number/AdminNumberAdd";
import AdminSizeList from "../pages/admin/size/AdminSizeList";
import AdminSizeAdd from "../pages/admin/size/AdminSizeAdd";
import AdminUpdateSize from "../pages/admin/size/AdminUpdateSize";
import Admin from "../pages/admin/admin/Admin";

export default function Paths() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route
        path="/products/list"
        element={<ProductList></ProductList>}
      ></Route>
      <Route
        path="/productcategory/list/:id"
        element={<ProductCategory></ProductCategory>}
      ></Route>
      <Route
        path="/products/details/:id"
        element={<ProductDetails></ProductDetails>}
      ></Route>
      <Route
        path="/admin/products/add"
        element={<AddProduct></AddProduct>}
      ></Route>
      <Route
        path="/categories/list"
        element={<CategoryList2></CategoryList2>}
      ></Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/search" element={<Search></Search>}></Route>
      <Route path="/cart" element={<Card></Card>}></Route>
      <Route path="/basketlist" element={<BasketList></BasketList>}></Route>
      <Route
        path="/favoriteList"
        element={<FavoriteList></FavoriteList>}
      ></Route>
      <Route
        path="/admin/products/detailadd"
        element={<AddProductDetail></AddProductDetail>}
      ></Route>

      <Route
        path="/admin/products/list"
        element={<AdminProductList></AdminProductList>}
      ></Route>
      <Route
        path="/admin/products/update/:id"
        element={<UpdateProduct></UpdateProduct>}
      ></Route>

      <Route path="/admin/categories/add" element={<AddCategory />} />
      <Route path="/admin/categories/list" element={<CategoryList />} />
      <Route
        path="/admin/categories/update/:id"
        element={<UpdateCategory></UpdateCategory>}
      ></Route>

      <Route
        path="/admin/comments/list"
        element={<AdminCommentList></AdminCommentList>}
      ></Route>

      <Route
        path="/admin/contacts/list"
        element={<AdminContactList></AdminContactList>}
      ></Route>

      <Route
        path="/admin/abouts/list"
        element={<AdminAboutList></AdminAboutList>}
      ></Route>
      <Route
        path="/admin/abouts/update/:id"
        element={<AdminAboutUpdate></AdminAboutUpdate>}
      ></Route>
      <Route
        path="/admin/abouts/add"
        element={<AdminAboutAdd></AdminAboutAdd>}
      ></Route>

      <Route
        path="/admin/wacths/add"
        element={<AdminWacthAdd></AdminWacthAdd>}
      ></Route>
      <Route
        path="/admin/wacths/list"
        element={<AdminWacthList></AdminWacthList>}
      ></Route>
      <Route
        path="/admin/wacths/update/:id"
        element={<AdminUpdateWacth></AdminUpdateWacth>}
      ></Route>

      <Route path="/admin/tvs/add" element={<AdminTvAdd></AdminTvAdd>}></Route>
      <Route
        path="/admin/tvs/list"
        element={<AdminTvList></AdminTvList>}
      ></Route>
      <Route
        path="/admin/tvs/update/:id"
        element={<AdminTvUpdate></AdminTvUpdate>}
      ></Route>

      <Route
        path="/admin/phones/add"
        element={<AdminPhoneAdd></AdminPhoneAdd>}
      ></Route>
      <Route
        path="/admin/phones/list"
        element={<AdminPhoneList></AdminPhoneList>}
      ></Route>
      <Route
        path="/admin/phones/update/:id"
        element={<AdminUpdatePhone></AdminUpdatePhone>}
      ></Route>

      <Route
        path="/admin/headphones/add"
        element={<AdminPhoneHeaddAdd></AdminPhoneHeaddAdd>}
      ></Route>
      <Route
        path="/admin/headphones/list"
        element={<AdminHeadPhoneList></AdminHeadPhoneList>}
      ></Route>
      <Route
        path="/admin/headphones/update/:id"
        element={<AdminUpdateHeadPhone></AdminUpdateHeadPhone>}
      ></Route>

      <Route path="/admin/pcs/add" element={<AdminPcAdd></AdminPcAdd>}></Route>
      <Route
        path="/admin/pcs/list"
        element={<AdminPcList></AdminPcList>}
      ></Route>
      <Route
        path="/admin/pcs/update/:id"
        element={<AdminPcUpdate></AdminPcUpdate>}
      ></Route>

      <Route
        path="/admin/manwomens/add"
        element={<AdminManWomenAdd></AdminManWomenAdd>}
      ></Route>
      <Route
        path="/admin/manwomens/list"
        element={<AdminManWomenList></AdminManWomenList>}
      ></Route>
      <Route
        path="/admin/manwomens/update/:id"
        element={<AdminUpdateManWomen></AdminUpdateManWomen>}
      ></Route>

      <Route
        path="/productbrand/list/:id"
        element={<ProductBrand></ProductBrand>}
      ></Route>
      <Route
        path="/admin/brands/list"
        element={<AdminBrandList></AdminBrandList>}
      ></Route>
      <Route
        path="/admin/brands/update/:id"
        element={<AdminBrandUpdate></AdminBrandUpdate>}
      ></Route>
      <Route
        path="/admin/brands/add"
        element={<AdminBrandAdd></AdminBrandAdd>}
      ></Route>

      <Route
        path="/admin/colors/list"
        element={<AdminColorList></AdminColorList>}
      ></Route>
      <Route
        path="/admin/colors/add"
        element={<AdminColorAdd></AdminColorAdd>}
      ></Route>
      <Route
        path="/admin/colors/update/:id"
        element={<AdminColorUpdate></AdminColorUpdate>}
      ></Route>

      <Route
        path="/admin/numbers/list"
        element={<AdminNumberList></AdminNumberList>}
      ></Route>
      <Route
        path="/admin/numbers/update/:id"
        element={<AdminNumberUpdate></AdminNumberUpdate>}
      ></Route>
      <Route
        path="/admin/numbers/add"
        element={<AdminNumberAdd></AdminNumberAdd>}
      ></Route>

      <Route
        path="/admin/sizes/list"
        element={<AdminSizeList></AdminSizeList>}
      ></Route>
      <Route
        path="/admin/sizes/add"
        element={<AdminSizeAdd></AdminSizeAdd>}
      ></Route>
      <Route
        path="/admin/sizes/update/:id"
        element={<AdminUpdateSize></AdminUpdateSize>}
      ></Route>
<Route path="/admin" element={<Admin></Admin>}></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
    </Routes>
  );
}
