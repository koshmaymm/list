import * as React from 'react';
import { List, ListItem, Divider, ListItemText, Typography } from '@mui/material';
import FullListItem from '../FullListItem';
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
                            <FullListItem
                                key={item.id}
                                item={item}
                                setTaskList={setTaskList}
                                selectedList={selectedList}
                                setSelectedList={setSelectedList}
                                setOpen={setOpen}
                                setEditableItem={setEditableItem}
                                removeTask={removeTask}
                            />
                        )
                    })
                }
            </List>
        </div>
    )
}

export default FullList;