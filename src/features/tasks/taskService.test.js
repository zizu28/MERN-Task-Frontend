import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import taskService from "./taskService";

const mock = new MockAdapter(axios);

describe("taskService", () => {
    afterEach(() => {
        mock.reset();
    })

    it("fetches tasks successfully", async () => {
        const token = "mock-token";
        const tasks = [
            {
                _id: "66d02dc8b551773735b592ca",
                text: "Zulkarnain's first task",
                user: "66cc3725bf108e49ccb0a56f",
                createdAt: "2024-08-29T08:14:00.790Z",
                updatedAt: "2024-08-29T08:14:00.790Z",
                __v: 0
            },
            {
                _id: "66d02dfab551773735b592cf",
                text: "Zulkarnain's second task",
                user: "66cc3725bf108e49ccb0a56f",
                createdAt: "2024-08-29T08:14:50.171Z",
                updatedAt: "2024-08-29T08:14:50.171Z",
                __v:0
            }
        ]

        mock.onGet("/api/tasks/", {headers: { Authorization: `Bearer ${token}`}}).reply(200, tasks)
        
        const response = await taskService.getTasks(token);
        expect(response).toEqual(tasks);
    }) 
})