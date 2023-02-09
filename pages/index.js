import {
  Title, Text, Container, List, Divider, Anchor, Code,
} from "@mantine/core";
import {NextSeo} from "next-seo";
// WARNING: be sure you are importing from next-i18next, and not react-i18next, in all your server side pages.
import {useTranslation} from "next-i18next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Home() {
  // You should override this component

  const {t} = useTranslation("common");
  return (
    <>
      <NextSeo
        title={t("homeTitle")}
        description="A NextJS template for Datawheel's projects"
      />
      <Container pt="xl">
        <Title>NextJS 13 Template</Title>
        <Text component="p" italic>NextJS 13 template for Datawheel projects</Text>
        <Title order={2}>Frontend libraries</Title>
        <Divider />
        <List mt="md">
          <List.Item>
            <Anchor href="https://nextjs.org/docs/getting-started">
              NextJS 13
            </Anchor>
            {" "}
            , using
            {" "}
            <Code>pages</Code>
            {" "}
            folder.
          </List.Item>
          <List.Item>
            <Anchor href="https://mantine.dev/guides/next/">Mantine</Anchor>
            {" "}
            components
          </List.Item>
          <List.Item>
            <Anchor href="https://github.com/garmeeh/next-seo">NextSEO</Anchor>
            {" "}
            for search engine optimization
          </List.Item>
        </List>
      </Container>
    </>
  );
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        ["common"],
      ])),
    },
  };
}
