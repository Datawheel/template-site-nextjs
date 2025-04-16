import {useMemo} from "react";
import Link from "next/link";
import {
  createStyles, Header, Container, Group, Burger, Paper, Transition, Text, useMantineTheme,
  Box,
} from "@mantine/core";
import {useDisclosure, useWindowScroll} from "@mantine/hooks";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import Image from "next/image";
import {BespokeExploreModal} from "@datawheel/bespoke/explore";
import ColorSchemeSwitch from "./ColorSchemeSwitch";

import clientLogo from "../logos/dw.svg";
import useExploreProps from "../../hooks/useExploreProps";

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 100,
    border: 0,
    transition: "background-color .5s",
  },

  dropdown: {
    position: "absolute",
    top: "var(--navbar-height)",
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    "button.mantine-UnstyledButton-root": {
      backgroundColor: "var(--accent)",
      borderRadius: "50%",
      height: "30px",
      width: "30px",
      "& path": {
        color: "black"
      }
    },
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  logo: {
    height: "var(--navbar-height)",
    display: "inline-block",
    position: "relative",
    padding: "10px 0px"
  },

  text: {
    [theme.fn.smallerThan("xs")]: {
      fontSize: "0.7rem"
    },
  },

  links: {
    height: "100%",
    "button.mantine-UnstyledButton-root": {
      backgroundColor: "var(--accent)",
      borderRadius: "50%",
      height: "30px",
      width: "30px",
      "& path": {
        color: "black"
      }
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "4px 12px",
    borderRadius: theme.radius.xl,
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    cursor: "pointer",
    color: theme.colors["primary-text"],
    textTransform: "uppercase",
    transition: "color .5s ease",
    display: "flex",
    alignItems: "center",
    height: "100%",
    "&:hover": {
      color: theme.colors["accent"],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      color: theme.colors["accent"],
    },
  },
}));

function CustomHeader() {
  const [opened, {toggle, close}] = useDisclosure(false);
  const {classes, cx} = useStyles();
  const {t} = useTranslation("common");
  const [scroll] = useWindowScroll();
  const router = useRouter();
  const {asPath} = router;
  const theme = useMantineTheme();
  const exploreProps = useExploreProps();

  const isScrolled = useMemo(() => {
    if (typeof window !== "undefined") {
      return scroll.y > 100;
    }
    return false;
  }, [scroll]);

  const links = useMemo(() => [
    {href: "/", label: t("links.home"), new: false},
    {href: "/method", label: t("links.method"), new: false},
    {href: "/explore", label: t("links.explore"), new: false},
  ], []);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.href}
      prefetch={false}
      className={cx(classes.link, {[classes.linkActive]: asPath === link.href})}
    >
      <Box>
        {link.icon && <link.icon size={18} stroke={1.5} />}
        {link.label}
      </Box>
    </Link>
  ));

  return (
    <Header height={60} className={classes.root} style={{backgroundColor: isScrolled ? `${theme.colors["primary-bg"]}` : "rgba(0, 0, 0, 0.2)"}}>
      <Container className={classes.header} size="xl">
        <Group spacing="md" noWrap>
          <Link href="/" className={classes.logo}><Image alt="Client Logo" src={clientLogo} height={40} /></Link>
          <Text className={classes.text} c="accent-shade" tt="uppercase" fw={700}>{t("title")}</Text>
        </Group>
        <Group spacing={5} className={classes.links}>
          <ColorSchemeSwitch />
          {items}
          <BespokeExploreModal exploreProps={exploreProps} />
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <BespokeExploreModal exploreProps={exploreProps}>
                <span className={classes.link}>Buscar</span>
              </BespokeExploreModal>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

export default CustomHeader;
