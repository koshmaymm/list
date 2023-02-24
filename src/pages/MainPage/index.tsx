
import { useEffect, useState } from 'react';
import AddNewTaskForm from '../../components/AddNewTaskForm';
import EditTaskItemModal from '../../components/EditTaskItemModal';
import FavoriteList from '../../components/FavoriteList';
import FullList from '../../components/FullList';
import { savedTasksList } from '../../helpers';
import { TaskItem } from '../../interfaces';
import { setArrToLocalStorage, setItemTask } from '../../utils';

import "./index.css";

const MainPage = () => {
    const [tasksList, setTaskList] = useState<TaskItem[]>([]);
    const [editableItem, setEditableItem] = useState<TaskItem | null>(null);
    const [open, setOpen] = useState(false);

    const setAndSaveList = (nextList: TaskItem[] | []) => {
        setTaskList(nextList);
        setArrToLocalStorage(savedTasksList, nextList);
    }

    const removeTask = (id: string) => {
        const nextList = tasksList.filter(task => task.id !== id);
        setAndSaveList(nextList);
    }

    const editTask = (nextTask: TaskItem) => {
        const item = setItemTask(nextTask!.description, nextTask.priority, nextTask.done, nextTask!.id, nextTask?.isSelected);
        const nextList = tasksList.map((task) => {
            if (task.id !== nextTask!.id) {
                return task;
            } else {
                return {
                    ...item
                }
            }
        });
        setAndSaveList(nextList);
    }

    const getStorageLists = () => {
        const tempAllTasks = localStorage.getItem(savedTasksList);
        setTaskList(tempAllTasks ? JSON.parse(tempAllTasks) : []);
    }

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
                editTask={editTask}
            />
            <AddNewTaskForm
                tasksList={tasksList}
                setTaskList={setTaskList}
            />
            <div className='list-wrapper'>
                <FullList
                    tasksList={tasksList}
                    setTaskList={setTaskList}
                    setOpen={setOpen}
                    setEditableItem={setEditableItem}
                    removeTask={removeTask}
                    editTask={editTask}
                />
                <FavoriteList
                    tasksList={tasksList}
                    editTask={editTask}
                />
            </div>
        </div>
    )
}

export default MainPage;