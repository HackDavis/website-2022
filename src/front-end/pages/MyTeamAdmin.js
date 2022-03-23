import React from 'react';
import { RecoilRoot } from 'recoil';
import Section_Desktop_Navbar from "../components/section_desktop_navbar";
import { MyTeamAdminContent } from '../components/myteamadmin/MyTeamAdminContent';

export function MyTeamAdmin() {
  return (
    <>
      <Section_Desktop_Navbar />
      <MyTeamAdminContent />
    </>
  );
}
