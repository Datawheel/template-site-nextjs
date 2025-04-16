import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {IconFileAlert} from "@tabler/icons-react";
import CustomError from "../components/layout/CustomError";

function Error404() {
  const {t} = useTranslation("errors");
  return (
    <CustomError
      icon={IconFileAlert}
      statusCode="404"
      title={t("404.title")}
      subtitle={t("404.subtitle")}
      action={t("404.action")}
    />
  );
}

export default Error404;

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "errors"])),
    },
  };
}
