import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import classNames from "classnames";
import { layoutData } from "components/Layout/Layout.data";
import { ContactForm } from "components/Shared/ContactForm";
import React from "react";
import styles from "./contact.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const contactData = {
  contactUs: "Contact Us",
  sendUsEnquiry: "Please send us your enquiry using the form below.",
  address1: "No. 258, 2nd Floor",
  address2: "7th main, BCC Layout",
  address3: "Bengaluru – 560040",
};

function Contact() {
  return (
    <>
      <Box
        className={classNames(styles.flex, styles.contactUsSectionContainer)}
      >
        <Box className={styles.contactUsSectionTextContainer}>
          <Typography className={styles.contactUsSectionText}>
            {contactData.contactUs}
          </Typography>
        </Box>
      </Box>

      <Box className={styles.contactUsFormContainer}>
        <Grid container spacing={3} sx={{display: "flex"}}>
          <Grid item className={styles.contactForm}>
            <Box sx={{ marginBottom: "1rem" }}>
              <Typography>{contactData.sendUsEnquiry}</Typography>
            </Box>
            <Paper elevation={3} sx={{ padding: "1rem" }}>
              <ContactForm />
            </Paper>
          </Grid>
          <Grid item>
            <Box className={classNames(styles.flex, styles.addresses)}>
              <Box className={classNames(styles.flex, styles.addressContainer)}>
                <Box className={styles.flex}>
                  <LocationOnIcon className={styles.addressInfoIcon} />
                </Box>
                <Box className={styles.address}>
                  <Box>
                    <Typography  sx={{ fontSize: "1.5rem" }}>
                      Address
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>{contactData.address1}</Typography>
                    <Typography>{contactData.address2}</Typography>
                    <Typography>{contactData.address3}</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={classNames(styles.flex, styles.addressContainer)}>
                <Box className={styles.flex}>
                  <PhoneIcon className={styles.addressInfoIcon} />
                </Box>
                <Box className={styles.address}>
                  <Box>
                    <Typography sx={{ fontSize: "1.5rem" }}>
                      Phone
                    </Typography>
                  </Box>
                  <Box>
                  <a href={`tel:${layoutData.phoneNumber}`}>
                        <Typography sx={{ textDecoration: "underline" }}>
                          {layoutData.phoneNumber}
                        </Typography>
                      </a>
                  </Box>
                </Box>
              </Box>
              <Box className={classNames(styles.flex, styles.addressContainer)}>
                <Box className={styles.flex}>
                  <EmailIcon className={styles.addressInfoIcon} />
                </Box>
                <Box>
                  <Box className={styles.address}>
                    <Typography sx={{ fontSize: "1.5rem" }}>
                      Email
                    </Typography>
                    <Box>
                      <a href={`mailto:${layoutData.email}`}>
                        <Typography sx={{ textDecoration: "underline" }}>
                          {layoutData.email}
                        </Typography>
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Contact;
