import { useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { InputBase } from "@mui/material";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "7px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navabr = ({ mode, setMode }) => {
  const [open, setOpne] = useState(false);
  return (
    <AppBar position="sticky" color="primary">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          People
        </Typography>

        <Box sx={{ display: { xs: "flex", sm: "none" }, gap: 1 }}>
          {mode === "light" ? (
            <DarkModeIcon
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
              sx={{ cursor: "pointer" }}
            />
          ) : (
            <LightModeIcon
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
              sx={{ cursor: "pointer" }}
            />
          )}
        </Box>

        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/57.jpg"
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            onClick={() => setOpne(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/57.jpg"
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            onClick={() => setOpne(true)}
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpne(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navabr;
