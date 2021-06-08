import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter();
  name:string;
  day:string;
  reminder:boolean = false;
  showAddTask:boolean;
  subscription: Subscription;
  constructor(private uiService:UiService) {
    this.subscription = uiService
    .onToggle()
    .subscribe((value)=>(this.showAddTask = value))
   }

  ngOnInit() {
  }
  onSubmit(){
    if(!this.name){
      alert('Please add a task name');
      return;
    }
    const newTask = {
      name: this.name,
      day: this.day,
      reminder: this.reminder   
    }
    this.onAddTask.emit(newTask);
    this.name='';
    this.day='';
    this.reminder=false;
  }
}
