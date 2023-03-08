import {Box, Button, ButtonGroup, TextField, Alert, Grid} from "@mui/material";
import React, {FormEvent, useState} from "react";
import {useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {Dispatch} from "redux";
import {ToDo} from "src/types/Types";


type FormProps = {
    ToDo: ToDo
    dataTestId: string,
    onSubmit: (
        event: React.FormEvent<HTMLFormElement>,
        dispatch: Dispatch,
        toDo: ToDo,
        setName: React.Dispatch<string>,
        setDescription: React.Dispatch<string>,
        setSubmitted: React.Dispatch<boolean>,
        setMessage: React.Dispatch<string>
    ) => void
};
export default function Form({ToDo, dataTestId, onSubmit}: FormProps) {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>(ToDo?.Name || '');
    const [description, setDescription] = useState<string>(ToDo?.Description || '');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [message, setMessage] = useState<string>(ToDo?.Description || '');
    const toDoClone = (name: string, description: string): ToDo => {
        return {
            ID: ToDo.ID,
            Name: name,
            Description: description,
            Status: ToDo.Status
        }
    };

    return (
        <form
            onSubmit={(event: FormEvent<HTMLFormElement>) =>
                onSubmit(
                    event,
                    dispatch,
                    toDoClone(name, description),
                    setName,
                    setDescription,
                    setSubmitted,
                    setMessage
                )
            }
            data-testid={dataTestId}>
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
            >
                <br/>
                <Grid container>
                    <Grid item md={10}>
                        {submitted &&
                            <Grid item md={4}>
                                <Alert
                                    severity="success"
                                    icon={false}
                                    sx={{pt: 0, pb: 0, fontSize: 11}}
                                >{message}</Alert>
                            </Grid>}
                    </Grid>
                    <Grid item md={1}>
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
                                data-testid="submit"
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
                                data-testid="submit-button"
                            >
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Box>
        </form>

    )
}