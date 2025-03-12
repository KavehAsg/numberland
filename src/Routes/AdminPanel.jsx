import { useState } from "react";

import AdminPanelNavigator from "../Components/templates/AdminPanelNavigator";
import CreateArticle from "../Components/templates/CreateArticle";
import ManageWeblog from "../Components/templates/ManageWeblog";
import { Outlet } from "react-router-dom";

export default function AdminPanel() {
  const [selectedPanel, setSelectedPanel] = useState("profile");

  return (
    <div className="bg-white w-full sm:w-[95%] lg:w-[90%] max-w-[1400px] my-16 shadow-custom rounded-xl p-8 flex gap-10">
      <AdminPanelNavigator
        selectedPanel={selectedPanel}
        setSelectedPanel={setSelectedPanel}
      />

      {/* <CreateArticle /> */}
      {/* <ManageWeblog /> */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
