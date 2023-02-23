import Button from "@mui/material/Button"
import { TaskItem, FullListButtonsProps } from "../../interfaces"

const FullListButtons = ({ item, setSelectedList, selectedList, setOpen, setEditableItem }: FullListButtonsProps) => {

    const selectHandler = (id: string): void => {
        // console.log("selectHandler id ", id);
        setSelectedList([...selectedList, id])
    }

    const editHandler = (item: TaskItem): void => {
        // console.log("editHandler item ", item);
        setOpen(true);
        setEditableItem(item);
    }

    const deleteHandler = (id: string): void => {
        // console.log("deleteHandler id ", id);
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
            >
                Select
            </Button>
            <Button
                type="submit"
                variant="contained"
                onClick={() => editHandler(item)}
                disabled={item.done}
            >
                Edit
            </Button>
            <Button
                type="submit"
                variant="contained"
                color="error"
                onClick={() => deleteHandler(item.id)}
            >
                Delete
            </Button>
        </div>
    )
}

export default FullListButtons;