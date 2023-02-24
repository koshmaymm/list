import { TaskItem } from "../interfaces";

export const setItemTask = (description: string, priority: string | number, done: boolean, id: string, isSelected: boolean) => {
    return {
        description,
        priority,
        done,
        id,
        isSelected
    }
}

export const setArrToLocalStorage = (name: string, arr: string[] | TaskItem[]) => {
    localStorage.setItem(name, JSON.stringify(arr));
}

export const getArrFromLocalStorage = (name: string) => {
    return localStorage.getItem(name);
}