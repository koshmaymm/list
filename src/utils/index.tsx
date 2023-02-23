export const setItemTask = (description: string, priority: string | number, done: boolean, id: string) => {
    return {
        description,
        priority,
        done,
        id
    }
}