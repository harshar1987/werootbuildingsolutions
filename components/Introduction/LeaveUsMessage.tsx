import CloseIcon from "@mui/icons-material/Close";
import { DialogActions } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { ContactForm } from "components/Shared/ContactForm";
import React from "react";
import styles from "./LeaveUsmessage.module.css";

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

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    onClose();
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
        <ContactForm onSubmit={handleSubmit} />
      </DialogContent>
      {/* <DialogActions sx={{ paddingRight: 3 }}>
        <Button
          variant="outlined"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogActions> */}
    </StyledDialog>
  );
}
