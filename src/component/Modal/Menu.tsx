import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import { FileType, Folder, MenuItemType } from '../utils/types';
import { MenuItem } from '@mui/material';

export interface BaseMenuProps {
    onMenuSelect: (val: MenuItemType) => void;
    data: FileType | Folder,
}
const ContexMenu = ({ onMenuSelect, data }: BaseMenuProps) => {
    // Handle the change event when a menu item is selected
    function handleChange(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        const cal: MenuItemType = {
            value: event.currentTarget.id.split("@")[0],
            item: data
        }
        // Call the onMenuSelect function with the created MenuItem
        onMenuSelect(cal);
    };
    return (
        <Dropdown>
            <MenuButton><MoreVertIcon /></MenuButton>
            <Menu>
                <MenuItem id={`rename@${data.id}`} onClick={handleChange}>Rename</MenuItem>
                <MenuItem id={`remove@${data.id}`} onClick={handleChange}>Remove</MenuItem>
            </Menu>
        </Dropdown>
    );
}

export default ContexMenu;