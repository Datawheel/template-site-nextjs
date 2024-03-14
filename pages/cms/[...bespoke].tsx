import {BespokeManager} from "@datawheel/bespoke";
import {BespokeManagerServerSideProps} from "@datawheel/bespoke/server";

// needs to match the path defined in the NextJS dynamic route
const pathSegment = "bespoke";

export const getServerSideProps = BespokeManagerServerSideProps({pathSegmentsKey: pathSegment});

export default BespokeManager({
  // title to display in the CMS Application
  title: "Bespoke CMS",
  // the basepath you chose for rendering the reports
  profilePrefix: "/report",
  // the path segment defined on this file. Bby default it assumes it is "bespoke"
  pathSegment,
  // an instance of NotificationProps: https://v6.mantine.dev/others/notifications/?t=props to manage the BespokeNotifications.
  notifications: {
    position: "bottom-right",
  },
});
