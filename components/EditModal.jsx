import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EditModal = ({ onSubmit, onClose, isOpen }) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <form onSubmit={onSubmit}>
                <DialogContent>
                    <DialogContentText></DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        name='updatedText'
                        fullWidth
                        variant='standard'
                    />
                </DialogContent>
                <DialogActions>
                    <Button type='submit'>Save</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default EditModal;
