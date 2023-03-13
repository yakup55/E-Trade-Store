import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function FavoriteList() {
  const { products } = useSelector((state) => state.product);
  const { favori } = useSelector((state) => state.favori);
  const navigate = useNavigate();
  console.log(favori);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Favorite List </h2>

      <Container>
        <TableContainer>
          <TableBody>
            <Table>
              <TableRow>
                <TableCell>Product Image</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Detay</TableCell>
              </TableRow>
              {products.map(
                (product) =>
                  favori.includes(product.productId) && (
                    <TableRow>
                      <TableCell>
                        <img
                          style={{ width: 100, height: 100 }}
                          src={`${product.productImage}`}
                        ></img>
                      </TableCell>
                      <TableCell>{product.productName}</TableCell>
                      <TableCell>{product.productPrice}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() =>
                            navigate(`/products/details/${product.productId}`)
                          }
                        >
                          Detay
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
              )}
            </Table>
          </TableBody>
        </TableContainer>
      </Container>
    </div>
  );
}
