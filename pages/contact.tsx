import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import classNames from "classnames";
import { VariantType } from "notistack";
import React, { useState } from "react";
import { validationErrors } from "../data/contact.data";
import styles from "./contact.module.css";

function Contact() {
  type ErrorState = {
    error: boolean;
    helperText?: string;
  };

  const [nameError, setNameError] = useState<ErrorState>({
    error: false,
    helperText: "",
  });
  const [emailError, setEmailError] = useState<ErrorState>({
    error: false,
    helperText: "",
  });
  const [messageError, setMessageError] = useState<ErrorState>({
    error: false,
    helperText: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setNameError({ error: false, helperText: "" });
    setEmailError({ error: false, helperText: "" });
    setMessageError({ error: false, helperText: "" });
  };

  const handleSubmit = () => {
    if (name === "") {
      setNameError({ error: true, helperText: validationErrors.name });
    }

    if (email === "") {
      setEmailError({
        error: true,
        helperText: validationErrors.email,
      });
    }

    if (message === "") {
      setMessageError({
        error: true,
        helperText: validationErrors.message,
      });
    }

    if (
      name?.trim().length > 0 &&
      email?.trim().length > 0 &&
      message.trim().length > 0
    ) {
      const variant: VariantType = "success";
      // enqueueSnackbar(notifications.success, { variant });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          className={classNames(styles.flex, styles.contactUsSectionContainer)}
        >
          <Typography className={styles.contactUsSectionText}>
            Contact Us
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box className={styles.contactUsFormContainer}>
          <Paper elevation={3} sx={{ padding: "1rem" }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              value={name}
              helperText={nameError.helperText}
              fullWidth
              required
              error={nameError.error}
              variant="standard"
              onChange={(e) => {
                e.target.value.trim().length > 0
                  ? setNameError({ error: false, helperText: "" })
                  : setNameError({
                      error: true,
                      helperText: validationErrors.name,
                    });

                setName(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="email"
              value={email}
              helperText={emailError.helperText}
              fullWidth
              required
              error={emailError.error}
              variant="standard"
              onChange={(e) => {
                e.target.value.trim().length > 0
                  ? setEmailError({ error: false, helperText: "" })
                  : setEmailError({
                      error: true,
                      helperText: validationErrors.email,
                    });
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="phoneNumber"
              label="Phone Number"
              type="number"
              value={phoneNumber}
              fullWidth
              variant="standard"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              margin="dense"
              id="message"
              label="Message"
              value={message}
              helperText={messageError.helperText}
              type="text"
              fullWidth
              required
              error={messageError.error}
              multiline
              rows={10}
              variant="outlined"
              onChange={(e) => {
                e.target.value.trim().length > 0
                  ? setMessageError({ error: false, helperText: "" })
                  : setMessageError({
                      error: true,
                      helperText: validationErrors.message,
                    });

                setMessage(e.target.value);
              }}
            />
            <Box
              className={classNames(styles.flex, styles.submitButtonContainer)}
            >
              <Button
                variant="outlined"
                className={styles.submitButton}
                onClick={handleReset}
                sx={{ marginRight: "1rem" }}
              >
                Reset
              </Button>
              <Button
                variant="outlined"
                className={styles.submitButton}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact;
