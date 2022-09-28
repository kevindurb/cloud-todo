import { Service } from 'typedi';
import { Todo } from '../models/TodoModel';

@Service()
export class TodoListView {
  private $root: HTMLElement;
  constructor() {
    this.$root = document.getElementById('todo-list')!;
  }

  buildTodoItem(todo: Todo) {
    const $container = document.createElement('div');

    const $checkbox = document.createElement('input');
    $checkbox.type = 'checkbox';
    $checkbox.checked = todo.done;
    $container.appendChild($checkbox);

    const $label = document.createElement('label');
    $label.innerText = todo.description;
    $container.appendChild($label);

    return $container;
  }

  showItems(todos: Todo[]) {
    const $items = todos.map((todo) => this.buildTodoItem(todo));

    $items.forEach(($item) => this.$root.appendChild($item));
  }
}
