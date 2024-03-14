import {MantineProvider} from "@mantine/core";
import {DefaultSeo} from "next-seo";
import {BespokeUSerProvider, storeWrapper} from "@datawheel/bespoke";

function App(props) {
  const {Component, pageProps} = props;

  return (
    <>
      <DefaultSeo title="NextJS Template" titleTemplate="%s | NextJS Template" />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <BespokeUserProvider>
          <Component {...pageProps} />
        </BespokeUserProvider>
      </MantineProvider>
    </>
  );
}

export default storeWrapper.withRedux(App);
