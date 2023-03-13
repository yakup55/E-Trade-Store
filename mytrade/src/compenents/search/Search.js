import React from "react";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { getListByString } from "../../redux/actions/productActions";
import { SimpleGrid } from "@chakra-ui/react";
export default function Search() {
  const dispacth = useDispatch();
  const handleSearch = (name) => {
    dispacth(getListByString(name));
  };
  return (
   
    <>
      <SimpleGrid mt={2} minChildWidth="120px" spacing="40px">
        <Box
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          ml={2}
          width="250px"
        >
          <TextField
            id="name"
            name="name"
            label="Aranıcak Kelimeyi Giriniz"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Ara"
          ></TextField>
        </Box>
      </SimpleGrid>
    </>
  );
}
