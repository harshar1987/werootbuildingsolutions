import CloseIcon from "@mui/icons-material/Close";
import { DialogActions } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useSnackbar, VariantType } from "notistack";
import React, { useState } from "react";
import { notifications, validationErrors } from "./LeaveUsMessage.data";
import styles from "./LeaveUsMessage.module.css";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  title: string;
  onClose: () => void;
}

const StyledDialogTitle = (props: DialogTitleProps) => {
  const { title, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      <Typography component="h2" className={styles.dialogTitle}>
        {title}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export interface LeaveUsMessageDialog {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles(() => ({
  paper: { width: "100%" },
}));

export default function LeaveUsMessageDialog({
  open,
  onClose,
}: LeaveUsMessageDialog) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

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

  const handleClose = () => {
    onClose();
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
      handleClose();
      const variant: VariantType = "success";
      enqueueSnackbar(notifications.success, { variant });
    }
  };

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="learn-more-dialog"
      open={open}
      classes={{ paper: classes.paper }}
    >
      <StyledDialogTitle
        title={"Leave us a message"}
        onClose={handleClose}
      ></StyledDialogTitle>
      <DialogContent>
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
          fullWidth
          value={email}
          helperText={emailError.helperText}
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
          fullWidth
          value={phoneNumber}
          variant="standard"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          margin="dense"
          id="message"
          label="Message"
          type="text"
          fullWidth
          value={message}
          helperText={messageError.helperText}
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
      </DialogContent>
      <DialogActions sx={{ paddingRight: 3 }}>
        <Button
          variant="outlined"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}
