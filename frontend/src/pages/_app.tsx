import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/theme";
import "../styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/style.scss";
import Nprogress from "nprogress";
import axios from "axios";
import { HTTP_URI, TOKEN_NAME } from "utils/constants";
import Router from "next/router";
import { useApollo } from "apollo";
import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import cookie from "js-cookie";
import "aos/dist/aos.css";
import AOS from "aos";
import "animate.css";
// import "bulma/css/bulma.min.css";

if (process.browser) {
  require("bootstrap/dist/js/bootstrap");
}

axios.defaults.baseURL = HTTP_URI;
axios.defaults.withCredentials = true;
// axios.defaults.headers.common["cookie"] = cookie.get(TOKEN_NAME);
axios.defaults.headers.common["authorization"] = cookie.get(TOKEN_NAME) || "";

axios.create({
  baseURL: HTTP_URI,
  withCredentials: true,
  // withCredentials: true,
});

Router.events.on("routeChangeStart", () => {
  Nprogress.start();
});
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const client = useApollo(pageProps.apollo);
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Arise Igala</title>
      </Head>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </ApolloProvider>
    </Fragment>
  );
}

export default MyApp;
