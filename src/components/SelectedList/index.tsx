import { Fragment } from 'react';
import { List, ListItem, Button, Typography, ListItemText, Divider, Rating } from '@mui/material';
import { setArrToLocalStorage } from '../../utils';
import { listDefaultStyle, savedSelectedList } from '../../helpers';
import { TaskItem, SelectedListProps } from '../../interfaces';
import './index.css';

const SelectedList = ({ favoriteList, selectedList, setSelectedList }: SelectedListProps) => {

    const removeHandler = (id: string) => {
        const nextSelectedList = selectedList.filter(itemId => itemId !== id);
        setSelectedList(nextSelectedList);
        setArrToLocalStorage(savedSelectedList, nextSelectedList);
    }

    if (!favoriteList.length) {
        return (<div>
            <h2>Selected task list</h2>
            <List sx={{ bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="Empty Task List"
                    />
                </ListItem>
            </List>
        </div>
        )
    }

    return (
        <div>
            <h2>Selected task list</h2>
            <List sx={listDefaultStyle}>
                {
                    favoriteList.map((item: TaskItem) => {
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
                                                        onClick={() => removeHandler(item.id)}
                                                        disabled={item.done}
                                                        size="large"
                                                        color="inherit"
                                                        className='button-default'
                                                    >
                                                        Remove from Selected
                                                    </Button>
                                                </span>
                                            </Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="middle" component="li" />
                            </div>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default SelectedList;