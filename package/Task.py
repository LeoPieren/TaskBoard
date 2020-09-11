class Task():

    name=""
    status=""
    description=""


    def __init__(self, name, description):
        self.name = name
        self.status = 1
        self.description = description

    def writeToDb(self):
        print("{}\n{}\n{}".format(self.name, self.status, self.description))
