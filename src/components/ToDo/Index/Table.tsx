import {useDispatch, useSelector} from "react-redux";
import {filterTodos, selectTodosUsingPagination} from "src/selectors/ToDo";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    ButtonGroup,
    TableFooter, TablePagination, TextField
} from "@mui/material";
import {styled} from '@mui/material/styles';
import {tableCellClasses} from '@mui/material/TableCell';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import {changeToDoStatus, removeToDo} from "../../../actions/ToDo";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {ToDo, TodoState} from "src/types/Types";

const StyledTableCell = styled(TableCell)(({theme}: { theme: any }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}: { theme: any }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const getFilteredTodos = (state: TodoState, query: string) => {
    return filterTodos(state)(query);
};
const getPaginatedTodos = (todos: ToDo[], page: number, rowsPerPage: number) => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return selectTodosUsingPagination({todos})(startIndex, endIndex);
};

export default function Index() {
    const dispatch = useDispatch();
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>('');
    const total = useSelector((state: TodoState) => {
        return getFilteredTodos(state, filter);
    });
    const todos = useSelector((state: TodoState) => {
        const filteredTodos = getFilteredTodos(state, filter);
        return getPaginatedTodos(filteredTodos, page, rowsPerPage);
    });

    const remove = (toDo: ToDo) => {
        if (window.confirm('are you sure')) {
            dispatch(removeToDo(toDo));
        }
    }
    const changeStatus = (toDo: ToDo) => {
        dispatch(changeToDoStatus(toDo));
    }
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        if (page !== 0) {
            setPage(0);
        }
        setRowsPerPage(parseInt(event.target.value, 10));


    };
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };


    return (
        <TableContainer>
            <Table sx={{minWidth: 650}} aria-label="simple table" data-testid="todo-index">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={4}>
                            <TextField fullWidth label="Filter" onChange={(event) => setFilter(event.target.value)}/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell align="right">Name</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.length === 0 ? (
                        <TableRow>
                            <TableCell align="center" colSpan={4}>No todos added. Please add some</TableCell>
                        </TableRow>
                    ) : (
                        todos.map((toDo: ToDo) => (
                            <StyledTableRow
                                key={toDo.ID}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <StyledTableCell align="right">{toDo.Name}</StyledTableCell>
                                <StyledTableCell align="right">{toDo.Description}</StyledTableCell>
                                <StyledTableCell align="right">{toDo.Status ? 'Open' : 'Closed' +
                                    ''}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                                        <Button component={Link}
                                                to={`/todos/edit/${toDo.ID}`}
                                                variant="outlined"
                                                color="info"
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
                                            <EditIcon/>
                                        </Button>
                                        <Button variant="outlined"
                                                color="info"
                                                size="small"
                                                sx={{
                                                    borderTopLeftRadius: 0,
                                                    borderBottomLeftRadius: 0
                                                }}
                                                onClick={(event) => changeStatus(toDo)}
                                        >

                                            {toDo.Status ? <DoneIcon/> : <RemoveDoneIcon/>}
                                        </Button>
                                        <Button variant="outlined"
                                                color="error"
                                                size="small"
                                                data-testid={`remove-${toDo.ID}`}
                                                onClick={(event) => remove(toDo)}><DeleteForeverIcon/></Button>
                                    </ButtonGroup>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    )}
                </TableBody>
                <TableFooter
                >
                    <TableRow>
                        <TablePagination
                            count={total.length}
                            page={page}
                            rowsPerPageOptions={[5, 10, 20]}
                            rowsPerPage={rowsPerPage}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>

        </TableContainer>
    )
}