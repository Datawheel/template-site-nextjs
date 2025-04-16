import {
IconFileAlert, IconSearch,
} from "@tabler/icons-react";

import {
Container, Flex, Title, TextInput, useMantineTheme, Text,
} from "@mantine/core";
import {BespokeExploreModal} from "@datawheel/bespoke/explore";
import useExploreProps from "../../hooks/useExploreProps";

function ErrorSplash({
statusCode, icon, title, subtitle, action,
}) {
const theme = useMantineTheme();
const IconElement = icon || IconFileAlert;
const exploreProps = useExploreProps("en");

return (
    <Container size="xs">
    <Flex
        mih="80vh"
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
    >
        <IconElement
        size={60}
        color={theme.colors.accent}
        />
        <Text color={theme.colors.accent}>{statusCode}</Text>
        <Title align="center" order={1}>{title}</Title>
        <Text align="center">{subtitle}</Text>
        {action && (
        <BespokeExploreModal
            showIcon={false}
            exploreProps={exploreProps}
        >
            <TextInput
            placeholder={action}
            icon={<IconSearch />}
            readOnly
            size="lg"
            w={400}
            maw="100%"
            />
        </BespokeExploreModal>
        )}
    </Flex>
    </Container>
);
}

export default ErrorSplash;
