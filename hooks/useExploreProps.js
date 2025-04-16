import {useTranslation} from "next-i18next";
import {useMemo} from "react";
import TileWrapper from "../components/tiles/TileWrapper";

const useExploreProps = (locale = "en") => {
  // Grab the json object from the common.json file for "explore"
  const cTranslations = useTranslation("common", {keyPrefix: "explore"});

  const exploreTranslations = useMemo(
    () => cTranslations.i18n?.store?.data[locale]?.common?.explore || {},
    [locale, cTranslations],
  );

  return {
    locale,
    profilePrefix: "/report",
    reportTile: TileWrapper,
    translations: exploreTranslations,
  };
};

export default useExploreProps;