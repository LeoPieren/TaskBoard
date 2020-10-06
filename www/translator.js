function createTask() {
    var name = document.getElementById("taskName").value
    var description = document.getElementById("taskDescription").value
    eel.writeTaskToDB(name, description)
}

function readDatabase() {
    eel.readDatabase()
}

function createTable() {
    eel.createTable()
}

function dropTable() {
    eel.dropTable()
}
