import {MantineProvider} from "@mantine/core";
import {DefaultSeo} from "next-seo";

export default function App(props) {
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
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
