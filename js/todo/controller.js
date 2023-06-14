import Model from "./model.js"
import View from "./view.js"

const model = new Model()
//Передаем все задачи в конструктор View
const view = new View(model.tasks)


// добавляем элементы
view.elemRender.form.addEventListener("submit", function (e) {
    e.preventDefault()
    const newTask = model.addTask(view.elemRender.input.value)
    view.renderHtml(newTask)
    view.clearInput()
})

// работа с check и id в tasks
view.elemRender.listTask.addEventListener("click", function (e) {

    if (e.target.getAttribute("type") === "checkbox") {
        // нужно обратиться вверх к родителю с id
        const elemId = e.target.closest(".todo-item").dataset.id
        const taskId = model.complTasks(elemId)

        // поменяем статус  done / active
        model.doneTask(taskId)
        // статус done
        view.veryfyTask(taskId)
    }

    // удаление по кнопке
    if (e.target.hasAttribute("data-dell")) {
        const removeId = e.target.closest(".todo-item").dataset.id
        const elemRemove = model.complTasks(removeId)
  
        model.remoteTask(elemRemove)
        view.removeElement(elemRemove)
    }

})


