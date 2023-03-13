import { Heading } from "@chakra-ui/react";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TableCell,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBrandList } from "../../redux/actions/brandActions";
import { getCategoryList } from "../../redux/actions/categroyActions";
import { getColorList } from "../../redux/actions/colorActions";
import { getNumberList } from "../../redux/actions/numberActions";
import {
  priceGrowingList,
  priceSinkingList,
  getProductList2,
  productCategoryList,
  productColorList,
  productNumberList,
  productSizeList,
  productPrice1,
  productPrice2,
  productPrice3,
  productPrice4,
} from "../../redux/actions/productActions";
import { getsizeList } from "../../redux/actions/sizeActions";
import Search from "../search/Search";
export default function PriceBrandCtegroyList() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getCategoryList());
    dispacth(getColorList());
    dispacth(getsizeList());
    dispacth(getNumberList());
    dispacth(getBrandList());
  }, []);

  const { colors } = useSelector((state) => state.color);
  const { numbers } = useSelector((state) => state.number);
  const { brands } = useSelector((state) => state.brand);
  const { categories } = useSelector((state) => state.category);
  const { sizes } = useSelector((state) => state.size);

  const sinkingList = () => {
    dispacth(priceSinkingList());
  };
  const growingList = () => {
    dispacth(priceGrowingList());
  };
  const colorList = (id) => {
    dispacth(productColorList(id));
  };
  const productList2 = (id) => {
    dispacth(getProductList2(id));
  };
  const categoryList = (id) => {
    dispacth(productCategoryList(id));
  };

  const numberList = (id) => {
    dispacth(productNumberList(id));
  };
  const sizeList = (id) => {
    dispacth(productSizeList(id));
  };
  const price1 = () => {
    dispacth(productPrice1());
  };
  const price2 = () => {
    dispacth(productPrice2());
  };
  const price3 = () => {
    dispacth(productPrice3());
  };
  const price4 = () => {
    dispacth(productPrice4());
  };
  return (
    <>
      <Heading>Filtreler</Heading>
        <Search></Search>
    <Container>
  <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Fiyata Göre Sırala
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              onClick={() => sinkingList()}
              value="Azalan sırada "
              control={<Radio />}
              label="Azalan sırada "
            />
            <FormControlLabel
              onClick={() => growingList()}
              value="Artan sırada "
              control={
                <Radio
                  sx={{
                    fontSize: 28,
                  }}
                />
              }
              label="Artan sırada "
            />
            <FormControlLabel
              onClick={() => price1()}
              value="0-500 "
              control={<Radio />}
              label="0-500 "
            />
            <FormControlLabel
              onClick={() => price2()}
              value="500-1500 "
              control={<Radio />}
              label="500-1500 "
            />
            <FormControlLabel
              onClick={() => price3()}
              value="1500-3000 "
              control={<Radio />}
              label="1500-3000 "
            />
            <FormControlLabel
              onClick={() => price4()}
              value="3000 üstü"
              control={<Radio />}
              label="3000 üstü "
            />
          </RadioGroup>
        </FormControl>
      <FormControl>
         <FormLabel id="demo-radio-buttons-group-label">Markalar</FormLabel>
        <FormGroup>
          {brands.map((brand) => (
            <FormControlLabel
              onClick={() => productList2(brand.brandId)}
              control={<Checkbox />}
              label={brand.brandName}
            ></FormControlLabel>
          ))}
        </FormGroup>
      </FormControl>

       <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Kategoriler
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
          >
            {categories.map((category) => (
              <FormControlLabel
                onClick={() => categoryList(category.categoryId)}
                value={category.categoryName}
                control={<Radio />}
                label={category.categoryName}
              />
            ))}
          </RadioGroup>
        </FormControl>

          <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Renkler
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
          >
            {colors.map((color) => (
              <FormControlLabel
                onClick={() => colorList(color.colorId)}
                value={color.colorName}
                control={<Radio />}
                label={color.colorName}
              />
            ))}
          </RadioGroup>
        </FormControl>

          

         <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Boyuta göre
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
          >
            {sizes.map((size) => (
              <FormControlLabel
                onClick={() => sizeList(size.sizeId)}
                value={size.sizeName}
                control={<Radio />}
                label={size.sizeName}
              />
            ))}
          </RadioGroup>
        </FormControl>
        
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Numrasına göre
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
          >
            {numbers.map((number) => (
              <FormControlLabel
                onClick={() => numberList(number.numberId)}
                value={number.shoesNumber}
                control={<Radio />}
                label={number.shoesNumber}
              />
            ))}
          </RadioGroup>
        </FormControl>
    </Container>
    </>
  );
}
