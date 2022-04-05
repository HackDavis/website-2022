import React from 'react';
import { useRecoilValue } from 'recoil';
import Section_Desktop_Navbar from "../components/section_desktop_navbar";
import { MyTeamContent } from '../components/myteam/MyTeamContent';
import { PendingMemberRequests } from 'front-end/components/myteam/PendingMemberRequests';
import { isPendingRequestsAtom } from "../../recoil/atoms/isPendingRequestsAtom";

export function MyTeam() {
  const isPendingRequests = useRecoilValue(isPendingRequestsAtom);

  return (
    <>
      <Section_Desktop_Navbar />
      { isPendingRequests
        ? <PendingMemberRequests />
        : <MyTeamContent />
      }
    </>
  );
}