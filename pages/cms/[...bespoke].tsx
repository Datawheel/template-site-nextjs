import {BespokeManager} from "@datawheel/bespoke";
import {BespokeManagerServerSideProps} from "@datawheel/bespoke/server";

export const getServerSideProps = BespokeManagerServerSideProps();

export default BespokeManager({
  // title to display in the CMS Application
  title: "Bespoke CMS",
  // the basepath you chose for rendering the reports
  profilePrefix: "/report",
  // the path segment defined on this file. Bby default it assumes it is "bespoke"
  pathSegment: "bespoke",
  // an instance of NotificationProps: https://v6.mantine.dev/others/notifications/?t=props to manage the BespokeNotifications.
  notifications: {
    position: "bottom-right",
  },
});
