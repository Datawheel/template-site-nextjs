import {useMemo} from "react";
import {
  BackgroundImage, Flex, Paper, Stack, Text, Image, Badge,
  Box,
} from "@mantine/core";
import Link from "next/link";

function TileItem(props) {
  const {
    background, isLarge = false, isRect = false, link = "#", title, id, subtitle, onClick = () => false,
  } = props;

  return (
    <Link
      prefetch={false}
      href={link}
      style={{textDecoration: "none"}}
      onClick={onClick}
    >
      <Paper
        miw={200}
        radius={isRect ? 0 : "md"}
        sx={(theme) => ({
          textDecoration: "none",
          boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.3)",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
          [theme.fn.smallerThan("md")]: {
            width: "100%",
          },
        })}
      >
        <BackgroundImage
          pos="relative"
          radius={isRect ? 0 : "md"}
          src={background}
          sx={{
            // filter: "grayscale(100%)",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: isLarge ? "cover" : "100%",
            transition: "all 1s",
            zIndex: 2,
            "&::before": {
              borderRadius: isRect ? 0 : 4,
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "block",
              content: "\"\"",
              zIndex: "-1",
              backgroundImage: `
              linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.1) 100%);
            `,
            },
            "&:hover": {
              backgroundSize: isLarge ? "cover" : "110%",
            },
          }}
        >
          <Flex
            justify="center"
            align="flex-end"
            h={200}
            p={20}
            sx={{
              // filter: "grayscale(0%)",
            }} 
          >
            <Stack noWrap align="center" spacing={5}>
              <Text
                c="white"
                fw={700}
                fz={24}
                lh={1.2}
                lineClamp={2}
                mb={0}
                align="center"
              >
                {title}
              </Text>
              <Badge variant="filled" c={"black"}>{subtitle}</Badge>
            </Stack>
          </Flex>
        </BackgroundImage>
      </Paper>
    </Link>
  );
}

export default TileItem;
