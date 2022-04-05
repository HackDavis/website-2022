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
          setShowEdit={props.setShowEdit}
          setShowDashboard={props.setShowDashboard}
        />
      ) : (
        <DashboardPanel
          user={props.user}
          setShowDashboard={props.setShowDashboard}
          setShowEdit={props.setShowEdit}
        />
      )}
    </div>
  );
}
