// Adhitya Rachman Hidayatullah
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  TextField,
} from "@mui/material";
import { useState } from "react";

const ContactForm = ({ addContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const initialState = {
    name: "",
    phone: "",
    email: "",
    photo: "",
  };

  const [newContact, setNewContact] = useState(initialState);

  const handleChange = (name, value) =>
    setNewContact({ ...newContact, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newContact);
    setNewContact(initialState);
  };
  return (
    <>
      <Card sx={{ maxWidth: 500, margin: "auto", backgroundColor: "#f3f1eb" }}>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <FormControl fullWidth margin="normal">
              <TextField
                required
                id="filled-basic"
                variant="filled"
                label="Name"
                name="name"
                value={newContact.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                required
                id="filled-basic"
                variant="filled"
                label="Phone"
                name="phone"
                value={newContact.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                required
                id="filled-basic"
                variant="filled"
                label="Email"
                name="email"
                value={newContact.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                required
                id="filled-basic"
                variant="filled"
                label="Photo Url"
                name="photo"
                value={newContact.photo}
                onChange={(e) => handleChange("photo", e.target.value)}
              />
            </FormControl>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              type="submit"
              color="success"
              style={{ marginLeft: "0.5rem" }}
            >
              ADD NEW
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default ContactForm;
