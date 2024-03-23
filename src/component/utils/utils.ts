import { FileType, Folder, RenameObeject } from "./types";

export const DirectoryData: FileType | Folder = {
  name: "recursive",
  path: "home",
  type: "folder",
  id: 1,
  children: [
    {
      name: ".gitignore",
      path: "assessment",
      type: "file",
      id: 2,
    },
    {
      name: "index.html",
      path: "assessment",
      type: "file",
      id: 3,
    },
    {
      name: "package-lock.json",
      path: "assessment",
      type: "file",
      id: 4,
    },
    {
      name: "package.json",
      path: "assessment",
      type: "file",
      id: 5,
    },
    {
      name: "vite.config.js",
      path: "assessment",
      type: "file",
      id: 6,
    },
    {
      name: "src",
      type: "folder",
      path: "src",
      id: 7,
      children: [
        {
          name: "App.css",
          type: "file",
          path: "src",
          id: 8,
        },
        {
          name: "App.jsx",
          path: "src",
          type: "file",
          id: 9,
        },
        {
          name: "index.css",
          path: "src",
          type: "file",
          id: 10,
        },
        {
          name: "main.jsx",
          path: "src",
          type: "file",
          id: 11,
        },
        {
          name: "components",
          type: "folder",
          path: "component",
          id: 12,
          children: [
            {
              name: "Checkbox.jsx",
              path: "component",
              type: "file",
              id: 13,
            },
          ],
        },
        {
          name: "pages",
          type: "folder",
          path: "pages",
          id: 14,
          children: [
            {
              name: "Home.jsx",
              path: "pages",
              type: "file",
              id: 15,
            },
            {
              name: "About.jsx",
              type: "file",
              path: "pages",
              id: 16,
            },
          ],
        },
      ],
    },
  ],
};

export function getNestedData(
  data: Array<FileType | Folder>,
  pathArray: Array<string>,
  newValue: FileType | Folder | RenameObeject,
  index: number,
  actions: "add" | "rename" | "remove"
): boolean {
  if (index > pathArray.length || !data) return false;
    
  if (index === pathArray.length) {
    if (actions == "add") {
      const item = data.find((item) => item.name == (newValue as FileType | Folder ).name);
      if (item) return false;
      data.push(newValue as FileType | Folder);
      return true;
    }

    if (actions == "rename") {
      const item = data.find((item) => item.id == newValue.id) as FileType | Folder;
      const isExist = data.filter((item) => item.name == (newValue as RenameObeject).newName);
      if (isExist.length !== 0) return false;      
      item.name = (newValue as RenameObeject).newName;
      item.path = (newValue as RenameObeject).newName;
      
      return true;
    }

    if (actions == "remove") {
      const ind = data.findIndex((itm) => (itm.id == newValue.id));
      data.splice(ind, 1);
      return true;
    }

    return false;
  }

  const path = pathArray[index];
  const obj = data.find((item: FileType | Folder) => item.path == path);
  if (obj?.type === "folder")
    return getNestedData(obj.children, pathArray, newValue, index + 1, actions);
  return false;
}
