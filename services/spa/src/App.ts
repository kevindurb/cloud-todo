import { Service } from 'typedi';
import { TodoListController } from './controllers/TodoListController';

@Service()
export class App {
  constructor(private todoListController: TodoListController) {}

  show() {
    this.todoListController.showList();
  }
}
