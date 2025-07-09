class DataStore<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T {
    return this.items[index];
  }
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
  getAllItems(): T[] {
    return this.items;
  }
}

interface User {
  name: string;
  id: number;
}

const data = new DataStore<string>();
data.addItem("string");
data.getAllItems();

const user_data = new DataStore<User>();

// generic function
function getValue<K, V>(key: K, value1: V, value2: V): V {
  if (key) {
    return value1;
  }
  return value2;
}

getValue("hello", 1, 2);
