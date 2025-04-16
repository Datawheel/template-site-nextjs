import {useEffect} from "react";
import {useRouter} from "next/router";

function CMSRedirectTemporalPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/cms/welcome");
  }, []);

  return "";
}

CMSRedirectTemporalPage.hideNav = true;
CMSRedirectTemporalPage.hideFooter = true;

export default CMSRedirectTemporalPage;
