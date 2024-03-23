import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { FormData } from '../utils/types';
// Define the style for the modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 410,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  onCreateButtonClick: (formData: FormData) => void;
}


const CreateModal: React.FC<ModalProps> = ({ open, handleClose, onCreateButtonClick }) => {
  const [formData, setFormData] = useState<FormData>({
    type: "file",
    name: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create New
        </Typography>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <FormControlLabel value="file" control={<Radio />} label="File" />
            <FormControlLabel value="folder" control={<Radio />} label="Folder" />
          </RadioGroup>
          <TextField
            className='!mb-2'
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={formData.name}
            name="name"
            onChange={handleChange}
          />
          <Button variant="contained" onClick={() => onCreateButtonClick({ ...formData })}>
            Create
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
}

export default CreateModal;