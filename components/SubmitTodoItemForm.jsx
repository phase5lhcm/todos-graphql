import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const SubmitTodoItemForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <TextField
                fullWidth
                variant='filled'
                color='primary'
                multiline
                rows={3}
                margin='normal'
                name="text"
            />
            <Button variant='contained' color='primary' type='submit'>
                Submit
            </Button>
        </form>
    );
};

export default SubmitTodoItemForm;
