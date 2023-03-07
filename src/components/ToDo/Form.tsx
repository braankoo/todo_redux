import {Box, Button, ButtonGroup, TextField} from "@mui/material";
import {FormEvent, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {addToDo} from "../../actions/ToDo";
import {Link} from "react-router-dom";
import {selectAllTodos} from "../../selectors/ToDo";


type FormProps = {
    initialValues?: { name: string; description: string };
};
export default function Form({initialValues}: FormProps) {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>(initialValues?.name || '');
    const [description, setDescription] = useState<string>(initialValues?.description || '');
    const todos = useSelector(selectAllTodos);
    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(
            addToDo(
                {
                    Name: name,
                    Description: description,
                    Status: true,
                    ID: todos.length
                }
            )
        );
    };

    return (
        <form onSubmit={(event: FormEvent<HTMLFormElement>) => submitForm(event)}>
            <TextField id="name"
                       name="name"
                       label="Name"
                       variant="standard"
                       fullWidth
                       value={name}
                       required
                       onChange={(event) => setName(event.target.value)}/>
            <TextField id="description"
                       name="description"
                       label="Description"
                       variant="standard"
                       value={description}
                       fullWidth
                       onChange={(event) => setDescription(event.target.value)}/>
            <Box
                mt={1}
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button
                        variant="outlined"
                        color="primary"
                        type="submit"
                        size="small"
                        sx={{
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            borderRight: 0,
                            '&:hover': {
                                borderRight: 1,
                                marginRight: '-1px'
                            }
                        }}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        type="submit"
                        size="small"
                        component={Link}
                        to={`/todos`}
                        sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>
            </Box>
        </form>
    )
}