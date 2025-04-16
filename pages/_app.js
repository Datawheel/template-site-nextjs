import {BespokeUserProvider} from "@datawheel/bespoke/auth";
import {BespokeExploreProvider} from "@datawheel/bespoke/explore";
import {ColorSchemeProvider, Container, MantineProvider} from "@mantine/core";
import {appWithTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {D3plusContext} from "d3plus-react";
import {DefaultSeo} from "next-seo";
import {useEffect} from "react";
import TagManager from "react-gtm-module";
import nextI18NextConfig from "../next-i18next.config";
import {defaultSEOGenerator} from "../next-seo.config";
import {useCustomTheme} from "../theme/useCustomTheme";
import {useD3plusConfig} from "../theme/useD3plusConfig";
import CustomHeader from "../components/layout/CustomHeader";
import CustomFooter from "../components/layout/CustomFooter";
import CustomLoader from "../components/layout/CustomLoader";

import useRouterLoadingState from "../hooks/useRouterLoadingState";

import "nprogress/nprogress.css";

function App(props) {
  const {Component, pageProps} = props;

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const {isFallback} = useRouter();

  const loading = useRouterLoadingState();

  const {colorScheme, theme, toggleColorScheme} = useCustomTheme();
  
  const d3PlusConfig = useD3plusConfig();

  useEffect(() => {
    // Start GTM
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    if (gtmId && gtmId !== "") {
      TagManager.initialize({gtmId});
    }
  }, []);

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            ...theme,
          }}
        >
          <DefaultSeo {...defaultSEOGenerator(BASE_URL)} />
          <D3plusContext.Provider value={d3PlusConfig}>
            {loading || isFallback
              ? (
                <CustomLoader />
              )
              : (
                <>
                  <BespokeExploreProvider pageSize={12}>
                    {!Component.hideNav && <CustomHeader />}
                    <Container p={0} fluid className="app-container">
                        <BespokeUserProvider>
                          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                          <Component {...pageProps} />
                        </BespokeUserProvider>
                    </Container>
                    {!Component.hideFooter && <CustomFooter />}
                  </BespokeExploreProvider>
                </>
              )}
          </D3plusContext.Provider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
