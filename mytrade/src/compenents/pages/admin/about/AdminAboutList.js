import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteAbouts,
  getAboutsList,
} from "../../../../redux/actions/aboutActions";
import { openSnacbar } from "../../../../redux/actions/appActions";

export default function AdminAboutList() {
  const { abouts } = useSelector((state) => state.about);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAboutsList());
  }, []);
  const handleAboutDeleted = (id) => {
    dispatch(deleteAbouts(id));
    dispatch(
      openSnacbar({
        message: `About has been deleted`,
        severity: "success",
      })
    );
    navigate("/admin/abouts/list");
  };
  return (
    <Container>
      <br></br>
      <Button
        style={{ margin: "auto", display: "block" }}
        variant="contained"
        onClick={() => navigate("/admin/abouts/add")}
      >
        Add About
      </Button>
      <br></br>
      <h2 style={{ textAlign: "center" }}>Admin About List({abouts.length})</h2>
      <br></br>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>About Detail</TableCell>
              <TableCell>About Image</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {abouts.map((about) => (
              <TableRow>
                <TableCell>{about.aboutId}</TableCell>
                <TableCell>{about.aboutDetails}</TableCell>
                <TableCell>
                  <img
                    style={{ width: 200, height: 100 }}
                    src={`${about.aboutImage}`}
                  ></img>
                </TableCell>
                <TableCell>
                  <Button
                    style={{ backgroundColor: "green", color: "black" }}
                    onClick={() =>
                      navigate(`/admin/abouts/update/${about.aboutId}`)
                    }
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    style={{ backgroundColor: "red", color: "black" }}
                    onClick={() => handleAboutDeleted(about.aboutId)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </TableBody>
      </TableContainer>
      <br></br>
      <br></br>
    </Container>
  );
}
