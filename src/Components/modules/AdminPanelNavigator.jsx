import { FaRegRectangleList } from "react-icons/fa6";
import { MdOutlineArticle } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineSimCard } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import PanelButton from "./PanelButton";

export default function AdminPanelNavigator({
  selectedPanel,
  setSelectedPanel,
}) {
  return (
    <ul className="flex flex-col gap-4">
      <PanelButton
        title={"مشخصات"}
        panelName={"profile"}
        setSelectedPanel={setSelectedPanel}
        selectedPanel={selectedPanel}
        icon={<FaRegRectangleList className="w-6 h-6" />}
      />

      <PanelButton
        title="ایجاد مقاله"
        setSelectedPanel={setSelectedPanel}
        selectedPanel={selectedPanel}
        panelName="createArticle"
        icon={<TfiWrite className="w-5 h-5" />}
        link={"/admin/panel/create-article"}
      />

      <PanelButton
        title="مدیریت مقالات"
        setSelectedPanel={setSelectedPanel}
        selectedPanel={selectedPanel}
        panelName="manageArticles"
        icon={<MdOutlineArticle className="w-6 h-6" />}
        link={"/admin/panel/manage-weblog"}
      />
      <PanelButton
        title={"مدیریت شماره ها"}
        setSelectedPanel={setSelectedPanel}
        selectedPanel={selectedPanel}
        panelName={"manageNumbers"}
        icon={<MdOutlineSimCard className="w-6 h-6" />}
      />
      <PanelButton
        title={"مدیریت اپراتور ها"}
        setSelectedPanel={setSelectedPanel}
        selectedPanel={selectedPanel}
        panelName={"manageOperators"}
        icon={<MdOutlineSimCard className="w-6 h-6" />}
      />

      <PanelButton
        title={"مدیریت ادمین"}
        setSelectedPanel={setSelectedPanel}
        selectedPanel={selectedPanel}
        panelName={"manageAdmins"}
        icon={<GrUserManager className="w-6 h-6" />}
      />
    </ul>
  );
}
