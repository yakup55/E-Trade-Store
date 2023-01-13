import {
  Alert,
  Avatar,
  Button,
  Chip,
  Divider,
  Input,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddComment,
  getCommentList,
  oneCommentProduct,
} from "../../redux/actions/commentActions";
import SendIcon from "@mui/icons-material/Send";
import { useContext } from "react";
import AppContext from "../context/contextApplication";
import { AccountCircle, Badge } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import ProductCommentAdd from "./productComment/ProductCommentAdd";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function ProductComment() {
  const { comments } = useSelector((state) => state.comment);
  const dispacth = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispacth(oneCommentProduct(id));
  }, []);
  return (
    <div>
      <ProductCommentAdd></ProductCommentAdd>
      <br></br>
      {comments?.map((comment) => (
        // <TextField
        //   label={comment.commentSubject}
        //   InputProps={{
        //     startAdornment: (
        //       <InputAdornment position="start">
        //         <Chip
        //           avatar={
        //             <Avatar
        //               style={{
        //                 backgroundColor: "orange",
        //                 width: 30,
        //                 height: 30,
        //               }}
        //             ></Avatar>
        //           }
        //           label={comment.commentName}
        //         />
        //       </InputAdornment>
        //     ),
        //   }}
        //   variant="standard"
        //   disabled
        //   defaultValue={comment.message}
        //   inputProps={""}

        // />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={comment.commentName}
                style={{ backgroundColor: "black" }}
                src="/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={comment.commentName}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Konu:{`${comment.commentSubject} ?  `}
                  </Typography>
                  <Typography>{comment.message}</Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <Divider variant="inset" component="li" />
        </List>
      ))}
      <br></br>
      <br></br>
      <Typography align="center" variant="caption" display="block" gutterBottom>
        The number of Comments ({comments.length}) has been listed.
      </Typography>
    </div>
  );
}
