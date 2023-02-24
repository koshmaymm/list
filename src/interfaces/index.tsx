export interface TaskItem {
    description: string;
    priority: string | number;
    done: boolean;
    id: string;
}

export interface AddNewTaskFormProps {
    tasksList: TaskItem[];
    setTaskList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}

export interface FullListProps {
    tasksList: TaskItem[];
    setTaskList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
    selectedList: string[];
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEditableItem: React.Dispatch<React.SetStateAction<TaskItem | null>>;
    removeTask: (id: string) => void;
}

export interface FullItemListProps {
    item: TaskItem;
    setTaskList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
    selectedList: string[];
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEditableItem: React.Dispatch<React.SetStateAction<TaskItem | null>>;
    removeTask: (id: string) => void;
}

export interface FullListButtonsProps {
    item: TaskItem;
    setTaskList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
    selectedList: string[];
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEditableItem: React.Dispatch<React.SetStateAction<TaskItem | null>>;
    removeTask: (id: string) => void;
}
export interface SelectedListProps {
    favoriteList: TaskItem[];
    selectedList: string[];
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface EditTaskItemModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    editableItem: TaskItem | null;
    setEditableItem: React.Dispatch<React.SetStateAction<TaskItem | null>>;
    tasksList: TaskItem[];
    setTaskList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
    removeFromSelected: (id: string) => void;
}