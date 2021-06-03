import { Component, OnInit } from "@angular/core";
import { Task } from "../../Task";
import { TASKS } from "../../mock-tasks";
import { TaskService } from "src/app/services/task.service";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskServices: TaskService) {}

  ngOnInit() {
    this.taskServices.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task: Task) {
    this.taskServices
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskServices.updateTaskReminder(task).subscribe();
  }
  addtask(task: Task) {
    this.taskServices.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
