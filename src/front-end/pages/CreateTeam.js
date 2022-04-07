import {React,useEffect} from 'react';
import Section_Navbar from "../components/section_navbar";
import { CreateTeamContent } from '../components/createteam/CreateTeamContent';

export function CreateTeam() {

  return (
    <div>
      <Section_Navbar />
      <CreateTeamContent />
    </div>
  );
};
