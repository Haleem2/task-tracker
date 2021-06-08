import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from "rxjs";
import { Task } from "../Task";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/jspn'
  })
}

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private apiUrl = "http://127.0.0.1:8000/api/tasks";
  constructor(private http:HttpClient) {}
  getTasks() {
    return this.http.get<{data: Task[]}>(this.apiUrl);
  }
  deleteTask(task:Task): Observable<Task>{
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task:Task): Observable<Task>{
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task);
  }
  addTask(task:Task):Observable<Task>{
    const url =`${this.apiUrl}`;
    return this.http.post<Task>(url,task);
  }
}
