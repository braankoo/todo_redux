import Form from 'src/components/ToDo/Form/Form';
import {createHandler} from "src/components/ToDo/Form/handlers";
import {ToDo} from "../../types/Types";

export default function Create() {
    const emptyToDo: ToDo = {Name: "", Description: "", Status: true};

    return (
        <div>
            <Form ToDo={emptyToDo} dataTestId="todo-create" onSubmit={createHandler} />
        </div>
    )
}