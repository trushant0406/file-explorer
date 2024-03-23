import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DirectoryData, getNestedData } from "../component/utils/utils";
import { Directory } from "../component/Directory/Directory";
import CreateModal from "../component/Modal/CreateModal";
import RenameModal from "../component/Modal/RenameModal";
import { FileType, Folder, FormData, RenameObeject } from "../component/utils/types";

const HomePage = () => {

  const [id, setId] = useState(112); // unique id from database
  const [data, setData] = useState(DirectoryData); // state for data
  const [isOpen, setIsOpen] = useState(false);  // state for modal open/close
  const [isMenueOpen, setIsMenueOpen] = useState(false); // state for menu open/close
  const [selectedItem, setSelectedItem] = useState<FileType | Folder>(); // state for selected item

  // location and pathname
  const location = useLocation();
  const { pathname } = location;
  const nestedArray = pathname.split('/');

  // function to handle creation of new file or folder
  function handleCreateButton(val: FormData) {
    // based on type of file or folder we create new object
    let newItem: FileType | Folder;
    setId((id) => id + 1);
    if (val.type === "folder") {
      newItem = {
        id,
        name: val.name,
        type: "folder",
        path: val.name,
        children: []
      };
    } else {
      newItem = {
        id,
        name: val.name,
        type: "file",
        path: val.name
      };
    }
    // we pass index 1 beacuse first index is alwasy empty.
    const copyData = JSON.parse(JSON.stringify(data));
    if (!getNestedData([copyData], nestedArray, newItem, 1, "add"))
      alert("File or folder already exist");
    else
      setData(copyData);

    setIsOpen(false);
  }

  function handleMenuSelect(val: FormData) {
    // based on type of file or folder we create new object
    const updatedObj: RenameObeject = {
      id: selectedItem?.id || 0,
      newName: val.name
    }
    const copyData = JSON.parse(JSON.stringify(data));
    // we pass index 1 beacuse first index is alwasy empty.
    if (isMenueOpen) {
      if (!getNestedData([copyData], nestedArray, updatedObj, 1, "rename")) {
        alert("File or folder already exist");
      }
      else setData(copyData);
    }
    setIsMenueOpen(false)
  }

  function handleRenameCallback(val: any) {
    setIsMenueOpen(true);
    setSelectedItem(val.item)
  }

  // function to handle delete
  function handleDeletePopup(val: any) {

    const res = window.confirm("Are you sure you want to delete?");
    if (res) {
      const copyData = JSON.parse(JSON.stringify(data));
      // we pass index 1 beacuse first index is alwasy empty.
      getNestedData([copyData], nestedArray, val.item, 1, "remove")
      setData(copyData);
    }

  }

  return (
    <div className="grid grid-cols-10 gap-4 p-4 md:grid-cols-6">
      <Routes>
        <Route path="/home/*" element={<Directory files={data} openModal={() => setIsOpen(true)} openRenameModal={handleRenameCallback} openDeletePopup={handleDeletePopup} />} />
      </Routes>
      {isOpen && <CreateModal open={isOpen} handleClose={() => setIsOpen(false)} onCreateButtonClick={handleCreateButton} />}
      {isMenueOpen && <RenameModal open={isMenueOpen} handleClose={() => setIsMenueOpen(false)} onCreateButtonClick={handleMenuSelect} />}
    </div>
  );
};

export default HomePage;
