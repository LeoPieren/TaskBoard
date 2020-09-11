function callPython() {
    eel.hello()
}

function createTask() {
    var name = document.getElementById("taskName").value
    var description = document.getElementById("taskDescription").value
    eel.createTask(name, description)
}