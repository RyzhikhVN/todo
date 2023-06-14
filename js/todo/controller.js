import Model from "./model.js"
import View from "./view.js"

const model = new Model()
//Передаем все задачи в конструктор View
const view = new View(model.tasks)


// по submit делаем, что бы кнопкой enter тоже добавлялась 
view.elemRender.form.addEventListener("submit", function (e) {
    e.preventDefault()
    const newTask = model.addTask(view.elemRender.input.value)
    view.renderHtml(newTask)
    view.clearInput()
})

// работаем с check и id в tasks
view.elemRender.listTask.addEventListener("click", function (e) {

    if (e.target.getAttribute("type") === "checkbox") {

        const elemId = e.target.closest(".todo-item").dataset.id
        const taskId = model.complTasks(elemId)

        // поменяем статус на done или active
        model.doneTask(taskId)
        view.veryfyTask(taskId)
    }

    // удаление по кнопке
    if (e.target.hasAttribute("data-dell")) {
        const removeId = e.target.closest(".todo-item").dataset.id
        const removeEl = model.complTasks(removeId)
        model.remoteTask(removeEl)
        view.removeElement(removeEl)
    }
})



