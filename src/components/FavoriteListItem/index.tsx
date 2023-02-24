import { ListItem, Divider, ListItemText, Typography, Rating, Button } from '@mui/material';
import { Fragment } from 'react';
import { FavoriteListItemProps, TaskItem } from '../../interfaces';
import "./index.css";

const FavoriteListItem = ({
    item,
    editTask
}: FavoriteListItemProps) => {

    const unselectTask = (item: TaskItem) => {
        editTask({ ...item, isSelected: false })
    }

    return (
        <div key={item.id}>
            <ListItem alignItems="flex-start">
                <ListItemText
                    className='task-item'
                    primary={item.description}
                    secondary={
                        <Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                            >
                                Status: {item.done ? "Done" : "Pending"}
                            </Typography>
                            <Typography sx={{ display: 'inline' }} component="legend">Priority</Typography>
                            <span className='rating-wrapper'>
                                <Rating name="disabled" value={Number(item.priority)} disabled max={10} className='rating' />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={() => unselectTask(item)}
                                    size="large"
                                    color="inherit"
                                    className='button-default'
                                >
                                    Remove from selected
                                </Button>
                            </span>
                        </Fragment>
                    }
                />
            </ListItem>
            <Divider variant="middle" component="li" />
        </div>
    )
}

export default FavoriteListItem;