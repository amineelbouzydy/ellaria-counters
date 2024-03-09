import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleSubMenu = (e) => {
    e.stopPropagation();
    setOpenSubMenu(!openSubMenu);
  };
  const menuOptions = [
    {
      text: "Accueil",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: 'Compteurs de personnes',
      icon: <PeopleAltIcon />,
      subOptions: [
        { text: 'Nano', path: '/products/nano' },
        { text: 'Ultima Ai', path: '/products/ultima-ai' },
        { text: 'Ultima Go', path: '/products/ultima-go' },
        { text: 'Ultima Prime', path: '/products/ultima-prime' },
        { text: 'Boost Bi', path: '/products/boost-bi' }
      ]
    },
    {
      text: "A propos",
      icon: <InfoIcon />,
      path: "/a-propos",
    },
    {
      text: "Avis",
      icon: <CommentRoundedIcon />,
      path: "/avis",
      
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="navbar-links-container">
        <Button id="fade-button">
          <Link
            key={menuOptions[0].text}
            to={menuOptions[0].path}
            className="acceuil-link"
          >
            {menuOptions[0].text}
          </Link>
        </Button>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Compteurs de personnes
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem component={Link} to="/products/nano" onClick={handleClose}>
            Nano
          </MenuItem>
          <MenuItem
            component={Link}
            to="/products/ultima-ai"
            onClick={handleClose}
          >
            Ultima Ai
          </MenuItem>
          <MenuItem
            component={Link}
            to="/products/ultima-go"
            onClick={handleClose}
          >
            Ultima Go
          </MenuItem>
          <MenuItem
            component={Link}
            to="/products/ultima-prime"
            onClick={handleClose}
          >
            Ultima Prime
          </MenuItem>
          <MenuItem
            component={Link}
            to="/products/boost-bi"
            onClick={handleClose}
          >
            BoostBi
          </MenuItem>
        </Menu>
        {menuOptions.slice(2).map((item) => (
          <Button key={item.text}>
            <Link to={item.path }>{item.text}</Link>
          </Button>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
      >
        <List>
  {menuOptions.map((item) => (
    <React.Fragment key={item.text}>
      <ListItem disablePadding>
        {/* Conditionally render ListItemButton without Link for items with subOptions */}
        {item.subOptions ? (
          <ListItemButton onClick={(e) => item.subOptions && toggleSubMenu(e)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {item.subOptions && (openSubMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
          </ListItemButton>
        ) : (
          <ListItemButton
            component={Link}
            to={item.path}
            onClick={() => setOpenMenu(false)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        )}
      </ListItem>
      {item.subOptions && openSubMenu && (
        <List disablePadding>
          {item.subOptions.map((subItem) => (
            <ListItem key={subItem.text} disablePadding>
              <ListItemButton
                component={Link}
                to={subItem.path}
                onClick={() => setOpenMenu(false)}
              >
                <ListItemIcon>{subItem.icon}</ListItemIcon>
                <ListItemText primary={subItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
      <Divider />
    </React.Fragment>
  ))}
</List>

      </Box>
    </Drawer>
    </nav>
  );
};

export default Navbar;
