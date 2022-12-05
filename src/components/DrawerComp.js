import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const DrawerComp = (props) => {
  const { updateLoggedUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handeDrawer = (val) => {
    console.log(val);
    if (val === "LOGIN") navigate("/login");
    else if (val === "SIGNUP") navigate("/register");
    else if (val === "CAPSULES") navigate("/homepage");
    else if (val === "LOGOUT") {
      updateLoggedUser({});
      navigate("/");
    }
  };

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {props.PAGE.map((page, i) => (
            <ListItemButton key={i} onClick={() => setOpenDrawer(!openDrawer)}>
              <ListItemIcon>
                <ListItemText>
                  <button
                    style={{
                      border: "none",
                      fontSize: "20px",
                      backgroundColor: "white",
                    }}
                    onClick={() => handeDrawer(page)}
                  >
                    {page}
                  </button>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ color: "white", marginLeft: "auto" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
