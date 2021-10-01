import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";
import styles from "./learnmore.module.css";

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

export default function LeaveUsMessageDialog({
  open,
  onClose,
}: LeaveUsMessageDialog) {
  const handleClose = () => {
    onClose();
  };

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="learn-more-dialog"
      open={open}
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
            fullWidth
            variant="standard"
          />
      </DialogContent>
    </StyledDialog>
  );
}
