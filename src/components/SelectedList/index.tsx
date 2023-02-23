import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { TaskItem, SelectedListProps } from '../../interfaces';
import Rating from '@mui/material/Rating';

const SelectedList = ({ favoriteList, setTaskList, }: SelectedListProps) => {

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
            <List sx={{ bgcolor: 'background.paper' }}>
                {
                    favoriteList.map((item: TaskItem) => {
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
                                                    Status: {item.done ? "Done" : "Pending"}
                                                </Typography>
                                                <Typography component="legend">Priority</Typography>
                                                <Rating name="disabled" value={Number(item.priority)} disabled max={10} />
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