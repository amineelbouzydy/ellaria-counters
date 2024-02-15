import React from "react";
import Logo from "../../Assets/logo.png";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/company/ellaria-systems/" target="_blank" rel="noopener noreferrer">
              <SiLinkedin />
            </a>
            <a href="https://www.facebook.com/ELLARIASYSTEMS" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Quality</span>
            <span>Testimonials</span>
            <span>Work</span>
          </div>
          <div className="footer-section-columns">
            <span>05235-64821</span>
            <span>info@ellariasystems.com</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
      <Box
      sx={{
        backgroundColor: ('#F6F6F6'),
        p: 6,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Ellaria Systems
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
    </div>

  );
};

export default Footer;