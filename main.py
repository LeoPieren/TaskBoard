import atexit
import eel
import sqlite3


try:
    db = sqlite3.connect("www\\tasks.db")
    cursor = db.cursor()
except:
    print(Exception)
    exit()

def exitHandler():
    print("closing connection")
    try:
        cursor.close()
        db.close()
    except Exception as e:
        print(e)
        print("connection couldnt be closed")
    print("connection closed")
atexit.register(exitHandler)

@eel.expose
def createTable():
    statement="""CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY,
    name text NOT NULL, 
    description text, 
    status int NOT NULL); """
    try:
        cursor.execute(statement)
        db.commit()
    except:
        print(Exception)
    print("table created")

@eel.expose
def dropTable():
    cursor.execute("DROP TABLE tasks")
    print("table dropped")

@eel.expose
def readDatabase():
    cursor.execute("SELECT * FROM tasks")
    rows = cursor.fetchall()
    for row in rows:
        print(row)

@eel.expose
def writeTaskToDB(name, description):
    #cursor.execute("INSERT INTO tasks VALUES(name, :name, description, :description, status, 1)", {"name": name, "description": description})
    cursor.execute("INSERT INTO tasks VALUES(null, ?, ?, 1)", (name, description))
    db.commit()
    print("Task: \n{} {}\nerfolgreich eingetragen".format(name, description))

if __name__ == "__main__":
    createTable()


eel.init("www")
eel.start("index.html")