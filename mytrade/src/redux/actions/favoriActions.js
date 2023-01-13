export const ADD_FAVORI_PRODUCT = "ADD_FAVORI_PRODUCT";

export default function AddFavoriProduct(favoriItem) {
  return function (dispacth) {
    return dispacth({ type: ADD_FAVORI_PRODUCT, payload: favoriItem });
  };
}
