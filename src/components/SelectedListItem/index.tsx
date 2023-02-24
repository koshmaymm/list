import { ListItem, Divider, ListItemText, Typography, Rating, Button } from '@mui/material';
import { Fragment } from 'react';
import { savedSelectedList } from '../../helpers';
import { SelectedListItemProps } from '../../interfaces';
import { setArrToLocalStorage } from '../../utils';

const SelectedListItem = ({
    item,
    selectedList,
    setSelectedList
}: SelectedListItemProps) => {

    const removeHandler = (id: string) => {
        const nextSelectedList = selectedList.filter(itemId => itemId !== id);
        setSelectedList(nextSelectedList);
        setArrToLocalStorage(savedSelectedList, nextSelectedList);
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
}

export default SelectedListItem;