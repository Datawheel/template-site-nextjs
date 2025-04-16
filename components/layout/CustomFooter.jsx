import {useMemo} from "react";
import {
  createStyles, Container, Group, Anchor, Stack, Text, useMantineTheme, Flex, Box,
} from "@mantine/core";
import {IconBrandTwitter, IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin, IconBrandYoutube} from "@tabler/icons-react";
import Image from "next/image";
import {useTranslation} from "next-i18next";
import clientLogo from "../logos/dw.svg";

const useStyles = createStyles((theme) => ({
  footer: {
    width: "100%",
    margin: "2rem 0",
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    [theme.fn.smallerThan("xs")]: {
      margin: "2rem 0",
    },
  },

  container: {

  },

  client: {
    [theme.fn.smallerThan("xs")]: {
      alignItems: "center"
    },
  },

  inner: {
    flexDirection: "row",
    alignItems: "flex-end",
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse"
    },
  },

  left: {
    width: "50%",
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      alignItems: "center",
      textAlign: "center"
    },
  },
  
  right: {
    height: "100%",
    width: "50%",
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      alignItems: "center",
      textAlign: "center"
    },
  },
  menuLink: {
    lineHeight: 1,
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "color .5s ease",
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center"
    }
  },
  socialLink: {
    display: "flex",
    flexDirection: "row",
    gap: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem"
  },
}));

function CustomFooter() {
  const {classes} = useStyles();
  const {t} = useTranslation("common");
  const theme = useMantineTheme();

  const socialLinks = useMemo(
    () => [
      {
        key: "tw", href: "https://twitter.com/xxx", label: "@xxx", icon: IconBrandTwitter,
      },
      {
        key: "fb", href: "https://www.facebook.com/xxx", label: "xxx", icon: IconBrandFacebook,
      },
      {
        key: "ln", href: "https://www.linkedin.com/company/xxx", label: "xxx", icon: IconBrandLinkedin,
      },
      {
        key: "ig", href: "https://www.instagram.com/xxx", label: "@xxx", icon: IconBrandInstagram,
      },
      {
        key: "yt", href: "https://www.youtube.com/channel/xxx", label: "xxx", icon: IconBrandYoutube,
      },
    ],
    [],
  );

  const socialItems = useMemo(() => socialLinks.map((link) => (
    <Anchor
      key={link.key}
      href={link.href}
      target="_blank"
      className={classes.socialLink}
    >
      <link.icon color={theme.colors["accent"]} />
    </Anchor>
  )), [socialLinks]);

  const menuLinks = useMemo(() => [
    {href: "/", label: t("links.home")},
    {href: "/method", label: t("links.method")},
    {href: "/explore", label: t("links.explore")},
    {href: "https://datawheel.us", label: t("links.about"), external: true}
  ], []);

  const menuItems = useMemo(() => menuLinks.map((link) => (
    <Anchor
      key={link.label}
      href={link.href}
      className={classes.menuLink}
      target={link.external?"_blank":""}
    >
      <span>
        {link.label}
      </span>
    </Anchor>
  )), [menuLinks]);

  return (
    <Box className={classes.footer}>
      <Container className={classes.container} size="xl">
        <Stack spacing="md" mb="2rem" className={classes.client}>
          <Anchor href="https://xxx.xx" target="_blank">
            <Image alt="Client logo" src={clientLogo} height={40} />
          </Anchor>
          <Text c={theme.colors["accent"]} fw={700} size="sm">Client Site Name</Text>
        </Stack>
        <Flex className={classes.inner}>
          <Stack className={classes.left} spacing="xl">
            <Stack spacing={3}>
              <Text size="sm">Street 1234 - Cambridge. USA</Text>
              <Text size="sm">(+1) 555 2344-234</Text>
              <Text size="sm">
                <Anchor
                    href={"mailto:xxxx@xxxx"}
                    target="_blank"
                  >xxxx@xxx.xx
                </Anchor>
              </Text>
              <Text size="sm">
                <Anchor
                    href="https://xxx"
                    target="_blank"
                  >www.xxx.xx
                </Anchor>
              </Text>
            </Stack>
            <Group spacing={0}>
              {socialItems}
            </Group>
          </Stack>
          
          <Stack className={classes.right} spacing={3} justify="flex-end">
            <Group mb="xl" position="right">
              {menuItems}
            </Group>
            <Text size="sm" ta="right">{t("footer.text")}</Text>
            <Text size="sm" ta="right">© {new Date().getFullYear()} xxx</Text>
            <Text size="sm" ta="right">Desarrollado por: <Anchor className={classes.whiteLink} href="https://datawheel.us" target="_blank">
                Datawheel
              </Anchor>
            </Text>
          </Stack>
          
        </Flex>
        
      </Container>
    </Box>
  );
}

export default CustomFooter;
