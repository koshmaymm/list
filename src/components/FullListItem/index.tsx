import { ListItem, Divider, ListItemText, Typography } from '@mui/material';
import { Fragment } from 'react';
import { FullItemListProps } from '../../interfaces';
import FullListButtons from '../FullListButtons';

const FullListItem = ({
    item,
    setTaskList,
    selectedList,
    setSelectedList,
    setOpen,
    setEditableItem,
    removeTask
}: FullItemListProps) => {
    return (
        <div key={item.id}>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={item.description}
                    secondary={
                        <Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                            >
                                Status: {" "}
                            </Typography>
                            {item.done ? "Done" : "Pending"}
                        </Fragment>
                    }
                />
            </ListItem>
            <Divider variant="middle" component="li" />
            <FullListButtons
                item={item}
                setTaskList={setTaskList}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
                setOpen={setOpen}
                setEditableItem={setEditableItem}
                removeTask={removeTask}
            />
        </div>
    )
}

export default FullListItem;