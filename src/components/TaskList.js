import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTasks, reset } from "../features/tasks/taskSlice";
import Spinner from "./Spinner";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {tasks, isError, message, isLoading} = useSelector((state) => state.task)

    useEffect(() => {
        if(isError) console.log(isError)
        // if(isSuccess) navigate('/alltasks')
        dispatch(getTasks())
        return () => dispatch(reset())
    }, [dispatch, isError, message, navigate])


    return (
        isLoading ? <Spinner /> :
        <section className="content">
            {tasks.length > 0 && (
                <div className="tasks">
                    {tasks.map(task => <TaskItem key={task._id} task={task}/>)}
                </div>
            )}
        </section>
    )
}

export default TaskList