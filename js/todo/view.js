export default class View {
    // в tasks передали все данные
    constructor(tasks) {

        for (let item of tasks) {
            this.renderHtml(item)
        } // или
        // tasks.forEach((item)=> {this.renderHtml(item)})
    }

    // родитель элемента
    elemRender = {
        form: document.getElementById("formTask"),
        input: document.getElementById("newTask"),
        listTask: document.getElementById("listTask")
    }

    // создание элемента
    renderHtml(task) {

        const input = task.status === "done" ? "completed" : ''
        const check = task.status === "done" ? "checked" : ''

        console.log(task.id)

        const viewElem = ` <li class="todo-item" data-id="${task.id}">
                                <label class="todo-item-label" >
                                    <input class="checkbox "   type="checkbox" ${check}/>
                                    <span class="${input}" > ${task.text}</span>
                                    <button class="btn btn-secondary btn-sm" data-dell >Удалить</button>
                                </label>
                            </li> `;
        this.elemRender.listTask.insertAdjacentHTML('beforeend', viewElem)
    }

    clearInput() {
        this.elemRender.input.value = ''
    }

    // проверка статуса - перечеркиваем задачу
    veryfyTask(elem) {
        const elemTask = this.elemRender.listTask.querySelector(`[data-id="${elem.id}"]`)

        const status = elemTask.querySelector("span")

        if (elem.status == "done") {
            status.classList.add("completed")
        } else {
            status.classList.remove("completed")
        }
    }

    // кнопка Удалить задачу
    removeElement(task) {
        const element = this.elemRender.listTask.querySelector(`[data-id ="${task}"]`)
        element.remove()
    }
}






