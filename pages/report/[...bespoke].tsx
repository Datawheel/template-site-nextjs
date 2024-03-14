import {BespokeRendererStaticPaths, BespokeRendererStaticProps} from "@datawheel/bespoke/server";
import {BespokeRenderer} from "@datawheel/bespoke";

export default function ReportPage(props) {
  return (
    <BespokeRenderer
        // bespokeStyles={customStyles}
        // translations={translations}
        // siteProps={{
        //     logoSrc: "/images/datawheel-logo.png"
        // }}
        // mantineProviderProps={mantineProviderProps}
      profilePrefix="/report"
      {...props}
    />
  );
}

export const getStaticPaths = BespokeRendererStaticPaths({limit: 10});

export const getStaticProps = BespokeRendererStaticProps();
