import {useDispatch, useSelector} from "react-redux";
import {selectAllTodos} from "../../../selectors/ToDo";
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, ButtonGroup} from "@mui/material";
import {styled} from '@mui/material/styles';
import {tableCellClasses} from '@mui/material/TableCell';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import {changeToDoStatus, removeToDo} from "../../../actions/ToDo";
import {ToDo} from "../../../reducers/ToDo";
import {Link} from "react-router-dom";

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
export default function Index() {
    const dispatch = useDispatch();
    const todos = useSelector(selectAllTodos);


    const remove = (toDo: ToDo) => {
        if (window.confirm('are you sure')) {
            dispatch(removeToDo(toDo));
        }
    }
    const changeStatus = (toDo: ToDo) => {
        dispatch(changeToDoStatus(toDo));
    }


    return (
        <TableContainer>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="right">Name</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map((toDo) => (
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

                                        {toDo.Status ? <DoneIcon/> : <RemoveDoneIcon/> }
                                    </Button>
                                    <Button variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={(event) => remove(toDo)}><DeleteForeverIcon/></Button>
                                </ButtonGroup>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}