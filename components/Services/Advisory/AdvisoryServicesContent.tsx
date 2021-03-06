import { Box, Typography } from "@mui/material";
import React from "react";
import { SvgImageProps } from "components/Shared/Models/Model";
import styles from "../Services.module.css";

export const AdvisoryServicesImage = (props: SvgImageProps) => {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M54.414 14c-1.291-1.289-3.537-1.289-4.828 0l-.639.639a1.226 1.226 0 01-.873.361h-.148c-.33 0-.64-.128-.873-.362l-.69-.689a1.232 1.232 0 01.101-1.839l.574-.459c.611-.49.962-1.22.962-2.003 0-.675-.273-1.336-.751-1.813L45.414 6c-1.291-1.289-3.537-1.29-4.828 0L39.23 7.357A4.175 4.175 0 0038 10.345c0 .57.114 1.126.339 1.652a18.688 18.688 0 009.615 9.744l2.021.897a4.16 4.16 0 001.703.362 4.169 4.169 0 002.965-1.228L56 20.415c.645-.645 1-1.502 1-2.415s-.355-1.77-1-2.414L54.414 14zm.172 5l-1.356 1.357a2.215 2.215 0 01-2.442.453l-2.021-.898a16.693 16.693 0 01-8.589-8.703 2.21 2.21 0 01-.178-.887c0-.586.229-1.136.643-1.55L42 7.415c.268-.268.622-.415 1-.415s.732.147 1 .414l1.835 1.835a.562.562 0 01-.047.84l-.573.459A3.214 3.214 0 0044 13.074c0 .864.336 1.676.947 2.288l.69.689a3.216 3.216 0 002.289.949h.148c.864 0 1.677-.337 2.287-.947l.639-.638c.535-.535 1.465-.535 2 0L54.586 17c.268.267.414.622.414 1s-.146.733-.414 1zM19.469 51.439l2.365-1.351c.227.104.455.2.685.286L23.236 53h5.527l.718-2.625c.229-.086.458-.182.685-.286l2.365 1.351 3.908-3.908-1.351-2.365c.104-.227.2-.455.286-.685L38 43.764v-5.527l-2.625-.718a10.57 10.57 0 00-.286-.685l1.351-2.365-3.908-3.908-2.366 1.35c-.226-.104-.454-.2-.684-.286L28.764 29h-5.527l-.718 2.625a9.808 9.808 0 00-.684.286l-2.366-1.35-3.908 3.908 1.351 2.365c-.104.227-.2.455-.286.685L14 38.236v5.527l2.625.718c.086.229.182.458.286.685l-1.351 2.365 3.909 3.908zM16 42.236v-2.473l2.193-.601.161-.524c.143-.462.335-.923.572-1.37l.258-.485-1.13-1.98 1.748-1.748 1.979 1.129.486-.257a8.01 8.01 0 011.37-.572l.524-.161.603-2.194h2.473l.601 2.193.524.161c.46.143.921.335 1.37.572l.486.257 1.979-1.129 1.748 1.748-1.13 1.98.258.485c.237.447.43.908.572 1.37l.161.524 2.194.603v2.473l-2.193.601-.161.524a7.957 7.957 0 01-.572 1.37l-.258.485 1.13 1.98-1.748 1.748-1.98-1.13-.485.258c-.447.237-.908.43-1.37.572l-.524.161L27.236 51h-2.473l-.601-2.193-.524-.161a7.957 7.957 0 01-1.37-.572l-.485-.258-1.98 1.13-1.748-1.748 1.13-1.98-.258-.485a7.879 7.879 0 01-.572-1.37l-.161-.524L16 42.236z" />
      <path d="M26 47c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z" />
      <path d="M60 1H34c-1.654 0-3 1.346-3 3v8H20c-1.39 0-2.551.954-2.89 2.239C10.864 17.552 7 23.921 7 31v5.08c-3.386.488-6 3.401-6 6.92v4c0 3.859 3.141 7 7 7h5V36H9v-5c0-6.068 3.171-11.56 8.354-14.617A2.99 2.99 0 0020 18h11v6c0 1.654 1.346 3 3 3h8.515c.316 1.303.485 2.644.485 4v5h-4v18h1.899A5.009 5.009 0 0136 58h-5.142c-.447-1.721-1.999-3-3.858-3h-4c-2.206 0-4 1.794-4 4s1.794 4 4 4h4c1.859 0 3.411-1.279 3.858-3H36c3.519 0 6.432-2.614 6.92-6H44c3.859 0 7-3.141 7-7v-4c0-3.519-2.614-6.432-6-6.92V31c0-1.352-.143-2.692-.424-4H47v5.804L56.287 27H60c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3zM11 52H9V40H7v11.899A5.01 5.01 0 013 47v-4c0-2.757 2.243-5 5-5h3v14zm16 9h-4c-1.103 0-2-.897-2-2s.897-2 2-2h4c1.103 0 2 .897 2 2s-.897 2-2 2zm22-18v4a5.01 5.01 0 01-4 4.899V40h-2v12h-2V38h3c2.757 0 5 2.243 5 5zM25 14v2h-2v-2h2zm-6 1c0-.551.448-1 1-1h1v2h-1c-.552 0-1-.449-1-1zm8 1v-2h4v2h-4zm34 8c0 .551-.448 1-1 1h-4.287L49 29.196V25H34c-.552 0-1-.449-1-1V4c0-.551.448-1 1-1h26c.552 0 1 .449 1 1v20z" />
    </svg>
  );
}

export const AdvisoryServicesContent = () => {
    return (
      <Box>
        <Typography gutterBottom>
          From{" "}
          <span className={styles.learnMoreTextHighLight}>
            initial discussions with architects and builders to detailed project
            report
          </span>{" "}
          our experts help our clients throughout to take the right decisions.
        </Typography>
        <Typography gutterBottom>
          With our{" "}
          <span className={styles.learnMoreTextHighLight}>proficiency</span> and{" "}
          <span className={styles.learnMoreTextHighLight}>
            domain specific dedicated teams
          </span>{" "}
          we fully comprehend the challenges and dynamics of the construction
          industry and extend thorough benefit to the owners in building their
          dream home.
        </Typography>
      </Box>
    );
  };