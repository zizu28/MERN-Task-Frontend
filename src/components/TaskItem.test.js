import {render} from "@testing-library/react";
import TaskItem from "./TaskItem";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

describe("TaskItem", () => {
    const task = { 
        _id: "66d02dc8b551773735b592ca", 
        text: "Zulkarnain's first task", 
        createdAt: "2024-08-29T08:14:00.790Z" 
    };
    const mockStore = configureStore({
        reducer: (state = {}, action) => {
            return state;
        }
    })  

    it("renders task details correctly", () => {
        const {getByText} = render (
            <Provider store={mockStore}>
                <TaskItem task={task} />
            </Provider>
        )

        expect(getByText(task.text)).toBeInTheDocument();
        expect(getByText(new Date(task.createdAt).toLocaleString('en-US'))).toBeInTheDocument();
    }) 
});