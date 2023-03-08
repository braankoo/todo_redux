import {Route, Routes} from 'react-router';
import ToDoCreate from './pages/ToDo/Create';
import ToDoEdit from './pages/ToDo/Edit';
import ToDoIndex from './pages/ToDo/Index';
import NotFound404 from "./pages/NotFound404";

export default function Router() {
    return (
        <Routes>
            <Route path="/todos" element={<ToDoIndex/>}/>
            <Route path="/todos/create" element={<ToDoCreate/>}/>
            <Route path="/todos/edit/:id" element={<ToDoEdit/>}/>
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    );
}

