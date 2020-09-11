import eel

@eel.expose
def hello():
    print("yo")

@eel.expose
def createTask(name, description):
    print(name)
    print(description)



eel.init("www")
eel.start("index.html")