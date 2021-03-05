import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder } from '@angular/forms'
import { Component } from '@angular/core';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {
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

