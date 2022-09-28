import { Service } from 'typedi';
import { TodoRepository } from '../models/TodoModel';
import { TodoListView } from '../views/TodoListView';

@Service()
export class TodoListController {
  constructor(
    private todoListView: TodoListView,
    private todoRepository: TodoRepository,
  ) {}

  async showList() {
    this.todoListView.showItems(await this.todoRepository.getAll());
  }
}
