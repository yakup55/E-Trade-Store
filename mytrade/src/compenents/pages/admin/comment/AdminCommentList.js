import { ConstructionOutlined } from "@mui/icons-material";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import {
  commentActive,
  commentPassive,
  getCommentList,
  getDeleteComment,
} from "../../../../redux/actions/commentActions";

export default function AdminCommentList() {
  const { comments } = useSelector((state) => state.comment);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentList());
  });
  const handleCommentActive=(id)=>{
    dispatch(commentActive(id));
    
    navigate("/admin/comments/list");
  }
  const handleCommentPassive=(id)=>{
    dispatch(commentPassive(id));
    
    navigate("/admin/comments/list");
  }
  const handleCommentDeleted = (id) => {
    dispatch(getDeleteComment(id));
    dispatch(
      openSnacbar({
        message: "Comment hass been deleted",
        severity: "success",
      })
    );
    navigate("/admin/comments/list");
  };
  return (
    <Container>
      <br></br>
      <h2 style={{ textAlign: "center" }}>Admin Comment List({comments.length})</h2>
      <br></br>
      <TableBody>
        <Table>
          <TableRow>
            <TableCell>Comment Id</TableCell>
            <TableCell>Comment Name</TableCell>
            <TableCell>Comment Message</TableCell>
            <TableCell>Comment Status</TableCell>
            <TableCell>Product Id</TableCell>
            <TableCell>Aktif Yap</TableCell>
            <TableCell>Pasif Yap</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Detay</TableCell>
          </TableRow>
          {comments.map((comment) => (
            <TableRow>
              <TableCell>{comment.commentId}</TableCell>
              <TableCell>{comment.commentName}</TableCell>
              <TableCell>{comment.message}</TableCell>
              <TableCell>{comment.commentStatus}</TableCell>
              <TableCell>{comment.productId}</TableCell>

              <TableCell>
                <Button style={{backgroundColor:"yellow",color:"black"}} onClick={()=>handleCommentActive(comment.commentId)}>Aktif</Button>
              </TableCell>
              <TableCell>
              
                <Button style={{backgroundColor:"green",color:"black"}}  onClick={()=>handleCommentPassive(comment.commentId)}>Pasif</Button>
              </TableCell>

              <TableCell>
              
              <Button style={{backgroundColor:"red",color:"black"}} onClick={()=>handleCommentDeleted(comment.commentId)}>Delete</Button>
            </TableCell>
            <TableCell>
              
              <Button style={{backgroundColor:"orange",color:"black"}} onClick={()=>navigate(`/products/details/${comment.productId}`)}>Detay</Button>
            </TableCell>
            </TableRow>
          ))}
        </Table>
        
      </TableBody>
    </Container>
  );
}
