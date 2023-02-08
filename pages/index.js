import {
  Title, Text, Container, List,
} from "@mantine/core";
import {NextSeo} from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="NextJS"
        description="A NextJS template for Datawheel's projects"
      />
      <Container>
        <Title>NextJS 13 Template</Title>
        <Text component="p">This is a NextJs 13 template for Datawheel projects</Text>
        <Text component="p">It includes</Text>
        <List>
          <List.Item>Eslint config and github workflows</List.Item>
          <List.Item>Mantine components</List.Item>
          <List.Item>Dockefile for deployments</List.Item>
        </List>
      </Container>
    </>
  );
}
