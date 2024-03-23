import React from "react";
import { useNavigate } from "react-router-dom";
import ExplorerItem from "../ExplorerItem/ExplorerItem";
import ContexMenu from "../Modal/Menu";
import { FileType, Folder, MenuItemType } from "../utils/types";

type DirectoryElementProps = {
  files: FileType | Folder;
  openModal: () => void;
  openRenameModal: (val: MenuItemType) => void;
  openDeletePopup: (val: MenuItemType) => void;
};

export const DirectoryElement: React.FC<DirectoryElementProps> = ({
  files,
  openModal,
  openRenameModal,
  openDeletePopup,
}: DirectoryElementProps) => {
  const navigate = useNavigate();

  function handleClick(item: FileType | Folder) {
    if (item.type === "folder") navigate(item.path);
  }

  function handleMenuSelect(val: MenuItemType) {
    if (val.value === "rename") {
      openRenameModal(val);
    } else {
      openDeletePopup(val);
    }
  }

  return (
    <>
      {files.type === "folder" &&
        files.children.map((item) => (
          <React.Fragment key={item.name}>
            <span onDoubleClick={() => handleClick(item)}>
              <div className="flex items-start flex-row-reverse">
                <ContexMenu onMenuSelect={handleMenuSelect} data={item} />
                <ExplorerItem type={item.type} name={item.name} />
              </div>
            </span>
          </React.Fragment>
        ))}
      <span onClick={openModal} role="listitem">
        <ExplorerItem type="create_folder" name="Create" />
      </span>
    </>
  );
};
