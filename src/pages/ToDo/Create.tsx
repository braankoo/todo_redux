import Form from 'src/components/ToDo/Form/Form';
import {createHandler} from "src/components/ToDo/Form/functions";

export default function Create() {
    return (
        <div>
            <Form dataTestId="todo-create" onSubmit={createHandler}/>
        </div>
    )
}