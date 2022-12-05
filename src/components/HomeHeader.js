import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PAGES = ["CAPSULES"];

const HomeHeader = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { loggeduser, updateLoggedUser } = useContext(AuthContext);

  const handleLogout = () => {
    updateLoggedUser({});
    navigate("/");
  };

  const handleItem = (val) => {
    console.log(val);
  };

  return (
    <>
      <AppBar sx={{ background: "black" }}>
        <Toolbar>
          <RocketLaunchIcon />
          <Typography sx={{ fontSize: "1.8rem" }}>spaceX</Typography>
          {isMatch ? (
            <>
              <DrawerComp PAGE={["CAPSULES", "LOGOUT"]} />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab label={page} key={0} onClick={() => handleItem(page)} />
                ))}
              </Tabs>

              <Typography
                sx={{ marginLeft: "auto", color: "white" }}
                variant="contained"
              >
                {loggeduser.name}
              </Typography>
              <Button
                sx={{ marginLeft: "10px", backgroundColor: "grey" }}
                variant="contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HomeHeader;
