import { useState, useEffect, useCallback } from 'react';
import { List } from '@mui/material';
import FavoriteListItem from '../FavoriteListItem';
import EmptyList from '../EmptyList';
import { TaskItem, FavoriteListProps } from '../../interfaces';
import { listDefaultStyle } from '../../helpers';

const FavoriteList = ({
    tasksList,
    editTask
}: FavoriteListProps) => {

    const [favoriteList, setFavoriteList] = useState<TaskItem[]>([]);

    const setFavoriteListHandler = useCallback(() => {
        const nextList = tasksList.filter((task) => (task.isSelected && !task.done));
        setFavoriteList(nextList);
    }, [tasksList]);

    useEffect(() => {
        setFavoriteListHandler();
    }, [tasksList, setFavoriteListHandler]);

    if (!favoriteList.length) {
        return (<div>
            <h2>Selected task list</h2>
            <EmptyList />
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
                            <FavoriteListItem
                                key={item.id}
                                item={item}
                                editTask={editTask}
                            />
                        )
                    })
                }
            </List>
        </div>
    )
}

export default FavoriteList;