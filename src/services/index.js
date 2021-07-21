const getData = (data) => {
    let db = JSON.parse(window.localStorage.getItem(data))
    if (db === null) return []
    else return db
}

const setData = (data) => {
    window.localStorage.setItem('tasks', JSON.stringify(data))
}

/************
  ** CRUD
*************/

export const createTask = (title, text) => {
    const tasksDB = getData('tasks')
    const task = { id: Date.now(), title, text, completed: false }
    tasksDB.push(task)
    setData(tasksDB)
}

export const readTask = (id) => {
    const tasksDB = getData('tasks')
    let index = tasksDB.findIndex(todo => todo.id === id)
    return tasksDB[index]
}

export const updateTask = (id, title, text) => {
    const tasksDB = getData('tasks')
    let index = tasksDB.findIndex(todo => todo.id === id)
    tasksDB[index].title = title
    tasksDB[index].text = text
    setData(tasksDB)
}

export const deleteTask = id => {
    const tasksDB = getData('tasks')
    const newtasksDB = tasksDB.filter(todo => todo.id !== id)
    setData(newtasksDB)
}

export const changeStateTask = id => {
    const tasksDB = getData('tasks')
    let index = tasksDB.findIndex(todo => todo.id === id)
    tasksDB[index].completed = !tasksDB[index].completed
    setData(tasksDB)        
}

export const readTasks = () => {
    return getData('tasks')
}
