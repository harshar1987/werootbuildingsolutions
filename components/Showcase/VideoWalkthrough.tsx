import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";
import VideoWalkthrough from "components/Shared/VideoWalkthrough";

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
      <Typography component="h2" sx={{fontSize: "1.25rem", fontWeight: 500}} >
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

export interface VideoWalkthroughDialog {
  title: string;
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

function VideoWalkthroughDialog({
  title,
  children,
  open,
  handleClose,
}: VideoWalkthroughDialog) {
  return (
    <div>
      <StyledDialog
        onClose={handleClose}
        aria-labelledby="3d-walkthrough"
        open={open}
        fullWidth
       
      >
        <StyledDialogTitle
          title={title}
          onClose={handleClose}
        ></StyledDialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </StyledDialog>
    </div>
  );
}

interface IVideoWalkthroughCarouselProps {
  open: boolean;
  title: string;
  handleClose: () => void;
}

const VideoWalkthroughCarousel = ({
  open,
  title,
  handleClose,
}: IVideoWalkthroughCarouselProps) => (
  <VideoWalkthroughDialog open={open} title={title} handleClose={handleClose}>
    <VideoWalkthrough />
  </VideoWalkthroughDialog>
);

export default VideoWalkthroughCarousel;
