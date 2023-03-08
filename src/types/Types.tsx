interface ToDo {
    Name: string;
    Description?: string;
    Status: boolean;
    ID?: number
}

interface TodoState {
    todos: ToDo[];
}

export type {ToDo, TodoState}