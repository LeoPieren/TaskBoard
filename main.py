import eel
from package.Task import Task

@eel.expose
def hello():
    print("yo")

@eel.expose
def createTask(name, description):
    task = Task(name, description)
    task.writeToDb()

eel.init("www")
eel.start("index.html")