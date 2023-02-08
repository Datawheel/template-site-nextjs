import {
  Title, Text, Container, List,
} from "@mantine/core";

export default function Home() {
  return (
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
  );
}
