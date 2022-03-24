import React from 'react';
import { useRecoilValue } from 'recoil';
import Section_Desktop_Navbar from "../components/section_desktop_navbar";
import { MyTeamAdminContent } from '../components/myteamadmin/MyTeamAdminContent';
import { PendingMemberRequests } from 'front-end/components/myteamadmin/PendingMemberRequests';
import { isPendingRequestsAtom } from "../../recoil/atoms/isPendingRequestsAtom";

export function MyTeamAdmin() {
  const isPendingRequests = useRecoilValue(isPendingRequestsAtom);

  return (
    <>
      <Section_Desktop_Navbar />
      { isPendingRequests
        ? <PendingMemberRequests />
        : <MyTeamAdminContent />
      }
    </>
  );
}
