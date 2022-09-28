import { Service } from 'typedi';
import { Store } from '../Store';

export interface Todo {
  description: string;
  done: boolean;
}

export class TodoModel implements Todo {
  constructor(public description: string, public done: boolean) {}

  static fromJSON(data: Todo) {
    return new TodoModel(data.description, data.done);
  }
}

@Service()
export class TodoRepository {
  constructor(private store: Store) {}

  async getAll() {
    const data = (await this.store.get<Todo[]>('todos')) ?? [];
    return data.map((todo) => TodoModel.fromJSON(todo));
  }

  async create(todo: Todo) {
    const todos = await this.getAll();
    await this.store.set('todos', [...todos, todo]);
  }
}
