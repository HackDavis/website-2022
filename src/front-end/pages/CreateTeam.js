import React from 'react';
import Section_Desktop_Navbar from "../components/section_desktop_navbar";
import { CreateTeamContent } from '../components/createteam/CreateTeamContent';
import { RecoilRoot } from 'recoil';

export function CreateTeam() {
  return (
    <>
      <RecoilRoot>
        <Section_Desktop_Navbar/>
        <CreateTeamContent/>
      </RecoilRoot>
    </>
  );
};
