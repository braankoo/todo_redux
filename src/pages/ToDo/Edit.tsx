import Form from "../../components/ToDo/Form/Form";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAllTodos} from "../../selectors/ToDo";
import {ToDo} from "../../reducers/ToDo/reducer";
import {updateHandler} from "../../components/ToDo/Form/functions";

export default function Edit() {
    const todos = useSelector(selectAllTodos);
    const {id} = useParams<{ id: string }>();
    const todo: ToDo | undefined = todos.find((toDo) => toDo.ID === parseInt(id || '', 10));
    if (todo === undefined) {
        return (<div>ToDo does not exists </div>);
    }
    return (
        <Form
            ToDo={todo}
            dataTestId="todo-edit"
            onSubmit={updateHandler}
        />
    )
}