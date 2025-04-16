import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {IconAlertTriangle} from "@tabler/icons-react";
import CustomError from "../components/layout/CustomError";

function Error500() {
  const {t} = useTranslation("errors");
  return (
    <CustomError
      icon={IconAlertTriangle}
      statusCode="500"
      title={t("500.title")}
      subtitle={t("500.subtitle")}
      action={t("500.action")}
    />
  );
}

export default Error500;

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "errors"])),
    },
  };
}
