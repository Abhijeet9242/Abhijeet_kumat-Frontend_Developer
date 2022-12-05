import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState("");
  const PAGES = [];
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const gotoLogin = () => {
    navigate("/login");
  };

  const gotoRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <AppBar sx={{ background: "black" }}>
        <Toolbar>
          <RocketLaunchIcon />
          <Typography sx={{ fontSize: "1.8rem" }}>spaceX</Typography>
          {isMatch ? (
            <>
              <DrawerComp PAGE={["LOGIN", "SIGNUP"]} />
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
                  <Tab label={page} key={index} />
                ))}
              </Tabs>

              <Button
                sx={{ marginLeft: "auto", backgroundColor: "grey" }}
                variant="contained"
                onClick={gotoLogin}
              >
                Login
              </Button>
              <Button
                sx={{ marginLeft: "10px", backgroundColor: "grey" }}
                variant="contained"
                onClick={gotoRegister}
              >
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
