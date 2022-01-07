import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../graphql/queries';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    spacing: {
        margin: '0 auto',
    },
});

const Todos = ({ text, id, onDelete, openModal }) => {
    const classes = useStyles();
    return (
        <Card className={classes.spacing}>
            <CardContent>
                <Typography>{text}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => openModal(id)} size='small'>
                    Edit
                </Button>
                <Button onClick={() => onDelete(id)} size='small'>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

const GetTodoItems = ({ onDelete, openModal }) => {
    const { loading, error, data } = useQuery(GET_TODOS);

    if (loading) {
        // console.log('loading todos');
        return 'loading';
    } else if (error) {
        console.log(error.message.toString());
        return error.message.toString();
    } else if (data) {
        return data.todoItems.map((todoItemData) => (
            <Todos
                onDelete={onDelete}
                openModal={openModal}
                key={todoItemData.id}
                {...todoItemData}
            />
        ));
    }
};

export default GetTodoItems;
