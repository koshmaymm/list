import Button from "@mui/material/Button";
import { TaskItem, FullListButtonsProps } from "../../interfaces";

const FullListButtons = ({ item, setSelectedList, selectedList, setOpen, setEditableItem, removeTask }: FullListButtonsProps) => {

    const selectHandler = (id: string): void => {
        setSelectedList([...selectedList, id])
    }

    const editHandler = (item: TaskItem): void => {
        setOpen(true);
        setEditableItem(item);
    }

    const deleteHandler = (id: string): void => {
        removeTask(id);
    }

    const findElement = (item: TaskItem): boolean => {
        const find = !!selectedList.find(elem => elem === item.id)
        return find;
    }

    return (
        <div className='buttons-wrapper'>
            <Button
                color="secondary"
                variant="contained"
                onClick={() => selectHandler(item.id)}
                disabled={item.done || findElement(item)}
                size="large"
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
        </div>
    )
}

export default FullListButtons;