// Partial
interface Todo {
  title: string;
  description: string;
}

const updateTodo = (todo: Partial<Todo>) => {};

// ReadOnly
interface Todo1 {
  title: string;
}

const myTodo: Readonly<Todo1> = { title: "Learn TypeScript" };

// Record
interface PageInfo {
  title: string;
}

const pages: Record<string, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

const pagesNumbers: Record<number, PageInfo> = {
  0: { title: "Home" },
  1: { title: "About" },
  2: { title: "Contact" },
};

// Pick
interface Todo2 {
  id: number;
  title: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo2, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean Room",
  completed: false,
};

// Omit
interface Todo3 {
  id: number;
  title: string;
  completed: boolean;
}

type TodoPreview1 = Omit<Todo3, "id">;

const todo1: TodoPreview1 = {
  title: "Clean Room",
  completed: false,
};
