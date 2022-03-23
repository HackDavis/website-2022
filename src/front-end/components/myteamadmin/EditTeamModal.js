import React from 'react';
import styles from "front-end/css/myteamadmin/EditTeamModal.module.scss";
import { useSetRecoilState} from 'recoil';
import { editTeamAtom } from 'recoil/atoms/editTeamAtom';
import { EditTeamContent} from "front-end/components/myteamadmin/EditTeamContent";
import exitButton from "front-end/images/myteam/x.svg";

export function EditTeamModal() {
  const setIsEditTeam = useSetRecoilState(editTeamAtom);

  return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.buttonContainer}>
            <button className={styles.exitButton} onClick={()=> setIsEditTeam(false)}><img src={exitButton} alt="exit button"/></button>
          </div>
          <div className={styles.editTeamContent}>
            <EditTeamContent/>
          </div>
        </div>
    </div>
  );
}
