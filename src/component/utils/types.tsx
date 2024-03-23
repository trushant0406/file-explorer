
export const DirectoryTypes = {
  file: "file",
  folder: "folder",
  create_folder: "create_folder",
};
export type Item = {
  name: string;
  path: string;
  id: number;
};

export type FileType = Item & {
  type: "file";
};

export type RenameObeject = {
  id: number;
  newName: string;
}
export type Folder = Item & {
  type: "folder";
  children: Array<FileType | Folder>;
};

// Define the shape of the menu item
export interface MenuItemType {
  value: string,
  item: FileType | Folder
}

export interface FormData {
  type: "file" | "folder";
  name: string;
}
