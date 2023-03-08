import Form from "../../components/ToDo/Form/Form";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectTodoById} from "src/selectors/ToDo";
import {updateHandler} from "src/components/ToDo/Form/handlers";
import {ToDo} from "src/types/Types";

export default function Edit() {
    const {id} = useParams<{ id: string }>();
    const todo: ToDo | undefined = useSelector(selectTodoById(parseInt(id ?? "")))
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