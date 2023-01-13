import { Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";
import AboutList from "../aboutList/AboutList";
import styles from "./style.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footer() {
  return (
    <Grid item xs={12} md={3}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        direction="row"
      >
        <Typography sx={{ mt: 3 }} variant="caption" align="center">
          <Link
            href="https://www.linkedin.com/in/yakup-yıldırım-7a12b0200/"
            underline="none"
          >
            <IconButton sx={{ width: 40 }}>
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link href="https://github.com/yakup55?tab=repositories" underline="none">
            <IconButton sx={{ width: 40 }}>
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link href="https://www.instagram.com/yakup.0950/" underline="none">
            <IconButton sx={{ width: 40 }}>
              <InstagramIcon />
            </IconButton>
          </Link>
        </Typography>
      </Stack>

      <Stack spacing={3}>
        <Typography sx={{ mt: 3 }} variant="caption" align="center">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a href="mailto:yakup.0950@gmail.com">
                E-posta:yakup.0950@gmail.com
              </a>
            </li>
          </ul>
        </Typography>

        <br />
      </Stack>
    </Grid>
  );
}
