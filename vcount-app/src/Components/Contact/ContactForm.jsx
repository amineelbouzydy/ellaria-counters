import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(window.location.origin);
    try {
      
    

  uri = window.location.origin+"/send-email";

      
      
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, phone }),
      });
 
      if (response.ok) {
        // Email sent successfully
        console.log("Email sent successfully");
        Swal.fire({
          title: "Email sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#017ddb",
        });
      } else {
        // Error sending email
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "60%",
          mx: "auto",
          mt: "10%",
          mb: "10%",
          p: 2,
          border: "2px solid  #000000",
          borderRadius: "12px",
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          Contactez-Nous
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nom complet "
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            margin="normal"
            required
            type="tel"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#0498CF",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#000",
              },
            }}
          >
            soumettre
          </Button>
        </form>
      </Box>
    </Box>
  );
}