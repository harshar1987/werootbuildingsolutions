import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useSnackbar, VariantType } from "notistack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "./ContactForm.module.css";
import classNames from "classnames";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const validationErrors = {
  name: "Please provide your name",
  email: "Please provide your email id",
  message: "Please provide us your requirements",
};

const notifications = {
  success:
    "Thank you for contacting us. Our representative will get back to you within next working day.",
};

type ErrorState = {
  error: boolean;
  helperText?: string;
};

export type ContactInfo = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type UserEnquiry = {
  contact: ContactInfo;
  buildingType: string;
  description: string;
};

export interface IContactFormProps {
  onSubmit?: (userEnquiry: UserEnquiry) => void;
}
export const ContactForm = ({ onSubmit }: IContactFormProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const [nameError, setNameError] = useState<ErrorState>({
    error: false,
    helperText: "",
  });

  const [emailError, setEmailError] = useState<ErrorState>({
    error: false,
    helperText: "",
  });

  const [descriptionError, setDescriptionError] = useState<ErrorState>({
    error: false,
    helperText: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [buildingType, setBuildingType] = useState("new");

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setDescription("");
    setNameError({ error: false, helperText: "" });
    setEmailError({ error: false, helperText: "" });
    setDescriptionError({ error: false, helperText: "" });
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

    if (description === "") {
      setDescriptionError({
        error: true,
        helperText: validationErrors.message,
      });
    }

    if (
      name?.trim().length > 0 &&
      email?.trim().length > 0 &&
      description.trim().length > 0
    ) {
      const variant: VariantType = "success";
      enqueueSnackbar(notifications.success, { variant });

      const userEnquiry: UserEnquiry = {
        buildingType: buildingType,
        description: description,
        contact: { name: name, email: email, phoneNumber: phoneNumber },
      };

      if (onSubmit) {
        onSubmit(userEnquiry);
      }
    }
  };

  return (
    <>
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
      <FormControl component="fieldset">
        <Box className={styles.flex}>
          <Box
            className={styles.flex}
            sx={{ margin: "1rem 1rem 1rem 0rem", justifyContent: "center" }}
          >
            <Typography>I want to:</Typography>
          </Box>
          <RadioGroup
            row
            aria-label="gender"
            name="row-radio-buttons-group"
            value={buildingType}
            onChange={(e) => setBuildingType(e.target.value)}
          >
            <FormControlLabel
              value={"new"}
              control={<Radio />}
              label="Construct new"
            />
            <FormControlLabel
              value={"reconstruct"}
              control={<Radio />}
              label="Re-Construct"
            />
            <FormControlLabel
              value={"other"}
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </Box>
      </FormControl>
      <TextField
        sx={{ zIndex: 0 }}
        margin="dense"
        id="description"
        label="Description"
        value={description}
        helperText={descriptionError.helperText}
        type="text"
        fullWidth
        required
        error={descriptionError.error}
        multiline
        rows={10}
        variant="outlined"
        onChange={(e) => {
          e.target.value.trim().length > 0
            ? setDescriptionError({ error: false, helperText: "" })
            : setDescriptionError({
                error: true,
                helperText: validationErrors.message,
              });

          setDescription(e.target.value);
        }}
      />
      <Box className={classNames(styles.flex, styles.submitButtonContainer)}>
        <Button
          variant="outlined"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};
