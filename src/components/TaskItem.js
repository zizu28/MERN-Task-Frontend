import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskItem = ({task}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTask(task._id))
    }

    return (
        <div className="task">
            <div>
                {new Date(task.createdAt).toLocaleString('en-US')}
            </div>
            <div>
                <h2>{task.text}</h2>
            </div>
            <button className="close" onClick={handleDelete}>X</button>
        </div>
    )   
}

export default TaskItem