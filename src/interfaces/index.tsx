export interface TaskItem {
    description: string;
    priority: string | number;
    done: boolean;
    id: string;
    isSelected: boolean;
}

export interface AddNewTaskFormProps {
    tasksList: TaskItem[];
    setTaskList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}

export interface FullListProps {
    tasksList: TaskItem[];
    setTaskList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEditableItem: React.Dispatch<React.SetStateAction<TaskItem | null>>;
    removeTask: (id: string) => void;
    editTask: (nextTask: TaskItem) => void;
}

export interface FavoriteListProps {
    tasksList: TaskItem[];
    editTask: (nextTask: TaskItem) => void;
}

export interface FavoriteListItemProps {
    item: TaskItem;
    editTask: (nextTask: TaskItem) => void;
}

export interface FullItemListProps {
    item: TaskItem;
    setTaskList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEditableItem: React.Dispatch<React.SetStateAction<TaskItem | null>>;
    removeTask: (id: string) => void;
    editTask: (nextTask: TaskItem) => void;
}

export interface FullListButtonsProps {
    item: TaskItem;
    setTaskList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEditableItem: React.Dispatch<React.SetStateAction<TaskItem | null>>;
    removeTask: (id: string) => void;
    editTask: (nextTask: TaskItem) => void; 
}

export interface EditTaskItemModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    editableItem: TaskItem | null;
    setEditableItem: React.Dispatch<React.SetStateAction<TaskItem | null>>;
    editTask: (nextTask: TaskItem) => void;
}