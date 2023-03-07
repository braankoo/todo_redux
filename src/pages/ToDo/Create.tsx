import Form from '../../components/ToDo/Form/Form';
import {createHandler} from "../../components/ToDo/Form/functions";

export default function Create() {
    return (
        <div>
            <Form dataTestId="todo-create" onSubmit={createHandler}/>
        </div>
    )
}