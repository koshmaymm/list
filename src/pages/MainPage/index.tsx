
import { useEffect, useState, useCallback } from 'react';
import AddNewTaskForm from '../../components/AddNewTaskForm';
import DemoModal from '../../components/DemoModal';
import FullList from '../../components/FullList';
import SelectedList from '../../components/SelectedList';
import { TaskItem } from '../../interfaces';
import "./index.css";

const MainPage = () => {
    const [tasksList, setTaskList] = useState<TaskItem[]>([]);
    const [selectedList, setSelectedList] = useState<string[]>([]);
    const [favoriteList, setFavoriteList] = useState<TaskItem[]>([]);
    const [editableItem, setEditableItem] = useState<TaskItem | null>(null);
    const [open, setOpen] = useState(false);

    const setFilteredListBySelect = useCallback(() => {
        let arr: TaskItem[] = [];
        for (let i = 0; i < selectedList.length; i++) {
            const checkedItem = tasksList.find(({ id }) => id === selectedList[i]);
            if (!!checkedItem) {
                arr.push(checkedItem);
            }
        }
        if (arr.length) {
            setFavoriteList(arr.sort((a: TaskItem, b: TaskItem) => Number(b.priority) - Number(a.priority)));
        }
    }, [tasksList, selectedList]);


    useEffect(() => {
        setFilteredListBySelect();
    }, [tasksList, selectedList, setFilteredListBySelect])

    return (
        <div className="main-page">
            <AddNewTaskForm
                tasksList={tasksList}
                setTaskList={setTaskList}
            />
            <DemoModal
                open={open}
                setOpen={setOpen}
                editableItem={editableItem}
                setEditableItem={setEditableItem}
            />
            <div className='list-wrapper'>
                <FullList
                    tasksList={tasksList}
                    setTaskList={setTaskList}
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                    setOpen={setOpen}
                    setEditableItem={setEditableItem}
                />
                <SelectedList
                    favoriteList={favoriteList}
                    setTaskList={setTaskList}
                />
            </div>
        </div>
    )
}

export default MainPage;