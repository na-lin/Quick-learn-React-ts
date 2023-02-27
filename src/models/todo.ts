// Describe how a Todo looks like
class Todo {
  id: string;
  text: string;
  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}
export default Todo;
