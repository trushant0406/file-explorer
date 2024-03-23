import React from "react";
import { Route, Routes } from "react-router-dom";
import { DirectoryElement } from "./DirectoryElement";
import { FileType, Folder } from "../utils/types";

export interface DirectoryProps {
  files: FileType | Folder;
  openModal: () => void;
  openRenameModal: (val: any) => void;
  openDeletePopup: (val: any) => void;
}export const Directory: React.FC<DirectoryProps> = ({
  files,
  openModal,
  openRenameModal,
  openDeletePopup,
}: DirectoryProps) => {
  // Render the Directory component
  return (
    <Routes>
      <Route
        index
        element={
          <DirectoryElement
            files={files}
            openModal={openModal}
            openRenameModal={openRenameModal}
            openDeletePopup={openDeletePopup}
          />
        }
      />
      {files.type === "folder" &&
        files.children?.map((item) => (
          <Route
            key={item.path}
            path={`${item.path}/*`}
            element={
              <Directory
                files={item}
                openModal={openModal}
                openRenameModal={openRenameModal}
                openDeletePopup={openDeletePopup}
              />
            }
          />
        ))}
    </Routes>
  );
};