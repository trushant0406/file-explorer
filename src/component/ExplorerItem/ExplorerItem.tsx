import React from "react";
import { DirectoryTypes } from "../utils/types";
// Define the props for the ExplorerItem component
interface ExplorerItemProps {
  type: keyof typeof DirectoryTypes;
  name: string;
}

const ExplorerItem: React.FC<ExplorerItemProps> = ({ type, name }) => {
  // Define the directory type mapping
  const directoryType = {
    file: "/src/assets/file.png",
    folder: "/src/assets/folder.png",
    create_folder: "/src/assets/add_new_button.png",
  };

  return (
    <div className="p-4 flex flex-col items-center gap-3 cursor-pointer">
      <img src={directoryType[type]} alt="thumb" height="100px" width="100px" />
      <p>{name}</p>
    </div >
  );
};

export default ExplorerItem;
