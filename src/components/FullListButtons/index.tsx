import Button from "@mui/material/Button";
import { TaskItem, FullListButtonsProps } from "../../interfaces";

const FullListButtons = ({ item, setOpen, setEditableItem, removeTask, editTask }: FullListButtonsProps) => {

    const editHandler = (item: TaskItem): void => {
        setOpen(true);
        setEditableItem(item);
    }

    const deleteHandler = (id: string): void => {
        removeTask(id);
    }

    const selectHandler = (item: TaskItem, flag: boolean) => {
        const selectedItem = { ...item, isSelected: flag };
        editTask(selectedItem);
    }

    return (
        <div className='buttons-wrapper'>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                onClick={() => { selectHandler(item, true) }}
                disabled={item.isSelected || item.done}
            >
                Select
            </Button>
            <Button
                type="submit"
                variant="contained"
                onClick={() => editHandler(item)}
                disabled={item.done}
                size="large"
                color="warning"
            >
                Edit
            </Button>
            <Button
                type="submit"
                variant="contained"
                color="error"
                onClick={() => deleteHandler(item.id)}
                size="large"
            >
                Delete
            </Button>
        </div >
    )
}

export default FullListButtons;