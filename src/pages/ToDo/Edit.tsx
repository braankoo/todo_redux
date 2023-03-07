import Form from "../../components/ToDo/Form";
import store from "../../store";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAllTodos} from "../../selectors/ToDo";

export default function Edit() {
    const todos = useSelector(selectAllTodos);
    const {id} = useParams<{ id: string }>();
    const todo = todos.find((toDo) => toDo.ID === parseInt(id || '', 10));
    if (!todo) {
        return (<div>ToDo does not exists </div>);
    }
    return (
        <Form
            initialValues={{name: todo.Name, description: todo.Description}}
        />
    )
}