import {BespokeExplore} from "@datawheel/bespoke/explore";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Container} from "@mantine/core";
import useExploreProps from "../../hooks/useExploreProps";

function ExplorePage() {
  const {locale, query} = useRouter();

  const initialReportId = !isNaN(query.report) ? parseInt(query.report) : undefined;

  const exploreProps = useExploreProps();

  return (
    <Container fluid pt="3rem" pb={0}>
      <BespokeExplore {...exploreProps} initialReportId={initialReportId} />
    </Container>
  );
}

export const getStaticProps = async ({locale = "en"}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

ExplorePage.hideFooter = true;

export default ExplorePage;
