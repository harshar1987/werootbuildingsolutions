import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";
import styles from "./learnmore.module.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
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

const BootstrapDialogTitle = (props: DialogTitleProps) => {
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

export interface LearnMoreDialog {
  title: string;
  content: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

export default function LearnMoreDialog({
  title,
  content,
  open,
  handleClose,
}: LearnMoreDialog) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="learn-more-dialog"
        open={open}
      >
        <BootstrapDialogTitle
          title={title}
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent dividers>{content}</DialogContent>
      </BootstrapDialog>
    </div>
  );
}
