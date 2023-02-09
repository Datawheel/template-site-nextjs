import {
  Title, Text, Container, List, Divider, Anchor, Code,
} from "@mantine/core";
import {NextSeo} from "next-seo";

export default function Home() {
  // You should override this component
  return (
    <>
      <NextSeo
        title="NextJS Template"
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
