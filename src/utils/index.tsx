import { TaskItem } from "../interfaces";

export const setItemTask = (description: string, priority: string | number, done: boolean, id: string) => {
    return {
        description,
        priority,
        done,
        id
    }
}

export const setArrToLocalStorage = (name: string, arr: string[] | TaskItem[]) => {
    localStorage.setItem(name, JSON.stringify(arr));
}

export const getArrFromLocalStorage = (name: string) => {
    return localStorage.getItem(name);
}