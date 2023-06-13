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
        // нужно обратиться вверх к родителю с id
        const elemId = e.target.closest(".todo-item").dataset.id
        const taskId = model.complTasks(elemId)

        // поменяем статус на done или active
        model.doneTask(taskId)
        // подчеркивание елемента со статусом done
        view.veryfyTask(taskId)
    }

    // удаление по кнопке
    if (e.target.hasAttribute("data-dell")) {
        const removeId = e.target.closest(".todo-item").dataset.id
        const removeEl = model.remoteTask(removeId)
        view.removeElement(removeEl)
    }

})

// console.log(model.tasks)
    // model.remoteTask(model.tasks[0])



// model.addTask("сделать портфолио")
// model.addTask("посмотреть вакансии")
// model.addTask("дополнить резюме")
// model.addTask("изучить Git")
// model.addTask("изучить React")

// изменяем задачу
//  model.doneTask(model.tasks[0])

// удаляем задачу
//  model.remoteTask(model.tasks[2])

// отображение модели задач
// console.log(model.tasks)

// сохраняем в хранилище

// view.render(model.tasks)

// дописать saveStorage во всех этапах в model

// model.tasks.status("done")[1]
// view.renderHtml()


