import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, TextField } from '@mui/material';
import { FormData } from '../utils/types';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

interface ModalProps {
    open: boolean;
    handleClose: () => void;
    onCreateButtonClick: (formData: FormData) => void;
}

const RenameModal: React.FC<ModalProps> = ({ open, handleClose, onCreateButtonClick }) => {
    const [formData, setFormData] = useState<FormData>({
        type: 'file',
        name: ''
    });

    const handleOnChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <>
            {open &&
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='!mb-2'>
                            Rename File/Folder
                        </Typography>
                        <FormControl>
                            <TextField
                                className='!mb-2'
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                value={formData.name}
                                name="name"
                                onChange={handleOnChnage}
                            />
                            <Button variant="contained" onClick={() => onCreateButtonClick({ ...formData })}>
                                Rename
                            </Button>
                        </FormControl>
                    </Box>
                </Modal>
            }
        </>

    );
}

export default RenameModal;