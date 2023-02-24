
import { useEffect, useState, useCallback } from 'react';
import AddNewTaskForm from '../../components/AddNewTaskForm';
import EditTaskItemModal from '../../components/EditTaskItemModal';
import FullList from '../../components/FullList';
import SelectedList from '../../components/SelectedList';
import { savedSelectedList, savedTasksList } from '../../helpers';
import { TaskItem } from '../../interfaces';
import { setArrToLocalStorage } from '../../utils';
import "./index.css";

const MainPage = () => {
    const [tasksList, setTaskList] = useState<TaskItem[]>([]);
    const [selectedList, setSelectedList] = useState<string[]>([]);
    const [favoriteList, setFavoriteList] = useState<TaskItem[]>([]);
    const [editableItem, setEditableItem] = useState<TaskItem | null>(null);
    const [open, setOpen] = useState(false);

    const removeFromSelected = (id: string) => {
        const nextList = selectedList.filter(taskId => taskId !== id);
        setSelectedList(nextList);
        setArrToLocalStorage(savedSelectedList, nextList);
    }

    const removeTask = (id: string) => {
        const nextList = tasksList.filter(task => task.id !== id);
        setTaskList(nextList);
        setArrToLocalStorage(savedTasksList, nextList);
        removeFromSelected(id);
    }

    const getStorageLists = () => {
        const tempAllTasks = localStorage.getItem(savedTasksList);
        const tempSelectedTasks = localStorage.getItem(savedSelectedList);
        setTaskList(tempAllTasks ? JSON.parse(tempAllTasks) : []);
        setSelectedList(tempSelectedTasks ? JSON.parse(tempSelectedTasks) : []);
    }

    const setFilteredListBySelect = useCallback(() => {
        let arr: TaskItem[] = [];
        for (let i = 0; i < selectedList.length; i++) {
            const checkedItem = tasksList.find(({ id }) => (id === selectedList[i]));
            if (!!checkedItem && !checkedItem.done) {
                arr.push(checkedItem);
            }
        }
        if (arr.length) {
            setFavoriteList(arr.sort((a: TaskItem, b: TaskItem) => Number(b.priority) - Number(a.priority)));
        } else {
            setFavoriteList([]);
        }
    }, [tasksList, selectedList]);

    useEffect(() => {
        setFilteredListBySelect();
    }, [tasksList, selectedList, setFilteredListBySelect])

    useEffect(() => {
        getStorageLists();
    }, [])

    return (
        <div className="main-page">
            <EditTaskItemModal
                open={open}
                setOpen={setOpen}
                editableItem={editableItem}
                setEditableItem={setEditableItem}
                tasksList={tasksList}
                setTaskList={setTaskList}
                removeFromSelected={removeFromSelected}
            />
            <AddNewTaskForm
                tasksList={tasksList}
                setTaskList={setTaskList}
            />
            <div className='list-wrapper'>
                <FullList
                    tasksList={tasksList}
                    setTaskList={setTaskList}
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                    setOpen={setOpen}
                    setEditableItem={setEditableItem}
                    removeTask={removeTask}
                />
                <SelectedList
                    favoriteList={favoriteList}
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                />
            </div>
        </div>
    )
}

export default MainPage;