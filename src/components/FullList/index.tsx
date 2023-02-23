import * as React from 'react';
import { List, ListItem, Divider, ListItemText, Typography } from '@mui/material';
import FullListButtons from '../FullListButtons';
import { TaskItem, FullListProps } from '../../interfaces';

import './index.css';
import { listDefaultStyle } from '../../helpers';

const FullList = ({
    tasksList,
    setTaskList,
    selectedList,
    setSelectedList,
    setOpen,
    setEditableItem,
    removeTask
}: FullListProps) => {

    if (!tasksList.length) {
        return (<div>
            <h2>Full task list</h2>
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
            <h2>Full task list</h2>
            <List sx={listDefaultStyle}>
                {
                    tasksList.map((item: TaskItem) => {
                        return (
                            <div key={item.id}>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary={item.description}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                >
                                                    Status: {" "}
                                                </Typography>
                                                {item.done ? "Done" : "Pending"}
                                            </React.Fragment>
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
                    })
                }
            </List>
        </div>
    )
}

export default FullList;