import { ListItem, Divider, ListItemText, Typography } from '@mui/material';
import { Fragment } from 'react';
import { FullItemListProps } from '../../interfaces';
import FullListButtons from '../FullListButtons';

const FullListItem = ({
    item,
    setTaskList,
    setOpen,
    setEditableItem,
    removeTask,
    editTask
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
                setOpen={setOpen}
                setEditableItem={setEditableItem}
                removeTask={removeTask}
                editTask={editTask}
            />
        </div>
    )
}

export default FullListItem;