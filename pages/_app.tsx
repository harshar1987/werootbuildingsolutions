import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "components/Layout/Layout";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 104, 20, 1)",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
export default MyApp;
