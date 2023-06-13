export default class Model {
    constructor() {
        this.tasks = []
        this.loadStorage()
    }


    // проверка localStorage на наличие данных
    loadStorage() {
        const data = localStorage.getItem("tasks")

        data ? this.tasks = JSON.parse(data) : null
    }

    // сохраняем задачи в хранилище
    saveStorage() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
    }

    // добавление задач, добавление статуса
    addTask(text) {
        let id = 1

        // let dataE = Object.keys(this.tasks)
        // for (let idE of dataE) {
        //    id = idE
        // }

        if (this.tasks.length > 0) {
            this.tasks.length + 1
            id = this.tasks[this.tasks.length - 1]['id'] + 1
        }

        let task = {
            id: id,
            status: "active",
            text: text
        }
        this.tasks.push(task)
        this.saveStorage()
        return task
    }

    doneTask(task) {
        if (task.status === "done") {
            task.status = "active"
        } else {
            task.status = "done"
        }
        this.saveStorage()
    }



    // поиск id задачи в tasks
    complTasks(taskId) {

        const task = this.tasks.find(function (i) {
            if (i.id === parseInt(taskId)) {
                return true
            }
        })
        return task
    }

    // удаление задач
    remoteTask(ind) {
        const index = this.tasks.indexOf(ind)

        // console.log("удалить из массива заявок индекс =", index)

        this.tasks.splice(index, 1) // уд. 1 элем ,начиная с index 
        this.saveStorage()
        return ind
    }
}

