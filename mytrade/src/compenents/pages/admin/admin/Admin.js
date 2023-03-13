import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Button, TextField, Typography } from "@mui/material";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
const style = {
  width: "100%",
  maxWidth: 1500,
  bgcolor: "background.paper",
};
export default function Option() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div>
      {user.isLogin === false && (
        <Container>
          <Button
            style={{ marginBottom: 5 }}
            variant="contained"
            color="secondary"
          >
            {user.userName}
          </Button>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Product" />
              <Button
                onClick={() => navigate("/admin/products/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Product Detail" />
              <Button
                onClick={() => navigate("/admin/products/detailadd")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Category" />
              <Button
                onClick={() => navigate("/admin/categories/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Brand" />
              <Button
                onClick={() => navigate("/admin/brands/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Color" />
              <Button
                onClick={() => navigate("/admin/colors/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
              <Button
                onClick={() => navigate("/admin/abouts/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Comment" />
              <Button
                onClick={() => navigate("/admin/comments/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
              <Button
                onClick={() => navigate("/admin/contacts/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Shoes Number" />
              <Button
                onClick={() => navigate("/admin/numbers/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Size" />
              <Button
                onClick={() => navigate("/admin/sizes/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Head Phone Detail" />
              <Button
                onClick={() => navigate("/admin/headphones/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Man Women Detail" />
              <Button
                onClick={() => navigate("/admin/manwomens/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pc Detail" />
              <Button
                onClick={() => navigate("/admin/pcs/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Phone Detail" />
              <Button
                onClick={() => navigate("/admin/phones/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Tv Detail" />
              <Button
                onClick={() => navigate("/admin/tvs/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Wacth Detail" />
              <Button
                onClick={() => navigate("/admin/wacths/list")}
                variant="contained"
                color="error"
                startIcon={<PrivacyTipIcon></PrivacyTipIcon>}
              >
                Detay
              </Button>
            </ListItem>
         
          </List>
        </Container>
      )}

      {user.isLogin === true && (
        <Typography mt={30} variant="h4" align="center">
          Lütfen Giriş Yapınız Yada Kayıt Olunuz
        </Typography>
      )}
    </div>
  );
}
