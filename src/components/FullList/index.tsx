import { List } from '@mui/material';
import FullListItem from '../FullListItem';
import EmptyList from '../EmptyList';
import { TaskItem, FullListProps } from '../../interfaces';
import { listDefaultStyle } from '../../helpers';
import './index.css';

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