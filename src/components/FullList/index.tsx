import { List } from '@mui/material';
import FullListItem from '../FullListItem';
import EmptyList from '../EmptyList';
import { TaskItem, FullListProps } from '../../interfaces';
import { listDefaultStyle } from '../../helpers';
import './index.css';

const FullList = ({
    tasksList,
    setTaskList,
    setOpen,
    setEditableItem,
    removeTask,
    editTask
}: FullListProps) => {

    if (!tasksList.length) {
        return (<div>
            <h2>Full task list</h2>
            <EmptyList />
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
                                setOpen={setOpen}
                                setEditableItem={setEditableItem}
                                removeTask={removeTask}
                                editTask={editTask}
                            />
                        )
                    })
                }
            </List>
        </div>
    )
}

export default FullList;