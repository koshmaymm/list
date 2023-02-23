import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { AddNewTaskFormProps, TaskItem, FullListProps } from '../../interfaces';
import Button from '@mui/material/Button';
import FullListButtons from '../FullListButtons';
import './index.css';

const FullList = ({
    tasksList,
    setTaskList,
    selectedList,
    setSelectedList,
    setOpen,
    setEditableItem
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
            <List sx={{ bgcolor: 'background.paper' }}>
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
                                />
                            </div>
                        )
                    })
                }
                {/* <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="middle" component="li" /> */}


            </List>
        </div>
    )
}

export default FullList;