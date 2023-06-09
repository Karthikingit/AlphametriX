import React from "react";
import settingsCss from "./SettingsPage.module.css";
import SettingSideBar from "../../components/SettingsComponents/settingSideBar/SettingSideBar";
import MyAccount from "../../components/SettingsComponents/MyAccount/MyAccount";
import SettingsNotifications from "../../components/SettingsComponents/SettingsNotifications/SettingsNotifications";
import { Outlet } from "react-router-dom";

function SettingsPage() {


  return (
    <div className={settingsCss.body}>
      <div className={settingsCss.titleSection}>
        <span className={settingsCss.title}> Settings</span>
      </div>
      <div className={settingsCss.items}>
        <SettingSideBar/>
      <Outlet/>

      </div>
    </div>
  );
}

export default SettingsPage;
