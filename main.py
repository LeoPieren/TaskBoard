import eel

@eel.expose
def hello():
    print("yo")

eel.init("www")
eel.start("index.html")