import React, { useState } from "react";
import styles from "../../css/dashboard/dashboard.module.scss";
import EditDashboard from "./EditDashboard";
import DashboardPanel from "./DashboardPanel";

export default function Dashboard(props) {
  return (
    <div
      className={`${props.showDashboard ? `${styles.showDashboard}` : ""} ${
        styles.dashboard
      }`}
    >
      {props.showEdit ? (
        <EditDashboard
          user={props.user}
          showEdit={props.showEdit}
          setShowEdit={props.setShowEdit}
        />
      ) : (
        <DashboardPanel
          user={props.user}
          showDashboard={props.showDashboard}
          setShowDashboard={props.setShowDashboard}
          showEdit={props.showEdit}
          setShowEdit={props.setShowEdit}
        />
      )}
    </div>
  );
}
