import { combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";
import { appReducer } from "./reducers/appReducer";
import userReducer from "./reducers/userReducer";
import aboutReducer from "./reducers/aboutReducer";
import favoriReducer from "./reducers/favoriReducer";
import commentReducer from "./reducers/commentReducer";
import contactReducer from "./reducers/contactReducer";
import wacthReducer from "./reducers/wacthReducer";
import tvReducer from "./reducers/tvReducer";
import phoneReducer from "./reducers/phoneReducer";
import manWomenReducer from "./reducers/manWomenReducer";
import headPhoneReducer from "./reducers/headPhoneReducer";
import pcReducer from "./reducers/pcReducer";
import brandReducer from "./reducers/brandReducer";
import colorReducer from "./reducers/colorReducer";
import sizeReducer from "./reducers/sizeReducer";
import numberReducer from "./reducers/numberReducer";
import cartReducer from "./reducers/cartReducer";
const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  app: appReducer,
  user: userReducer,
  about: aboutReducer,
  favori: favoriReducer,
  comment: commentReducer,
  contact: contactReducer,
  wacth: wacthReducer,
  tv: tvReducer,
  phone: phoneReducer,
  manwomen: manWomenReducer,
  headphone: headPhoneReducer,
  pc: pcReducer,
  brand: brandReducer,
  color: colorReducer,
  size: sizeReducer,
  number: numberReducer,
  cart:cartReducer
});
export default rootReducer;
