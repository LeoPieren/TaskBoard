import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder } from '@angular/forms'
import { Component } from '@angular/core';
import { toDo, inProgress, done } from "./data";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'taskBoard';
  tasksToDo = [
    "finish this board",
    "reply to all emails"
  ]
  tasksInProgress = [
    "test 1",
    "test 2"
  ]
  tasksDone = [
    "test 3",
    "test 4"
  ]

  constructor() {

  }

  addTask(taskName){
    this.tasksToDo.push(taskName.viewModel)
    console.log(this.tasksToDo)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}

