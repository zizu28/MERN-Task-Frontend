import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getTasks } from './taskSlice';
import taskService from './taskService';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);

describe("taskClice", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            task: {
                tasks: [],
                isError: false,
                isSuccess: false,
                isLoading: false,
                message: ''
            },
            auth: {
                user: {token: "mock-token"},
                isError: false,
                isSuccess: false,
                isLoading: false,
                message: ''
            }
        });
    })

    afterEach(() => {
        store.clearActions();
    });

    it("calls the task service to get all tasks", async () => {
        const token = "mock-token";
        const tasks = [
            {
                _id:{"$oid":"66d02dfab551773735b592cf"},
                text:"Zulkarnain's second task",
                user:
                    {"$oid":"66cc3725bf108e49ccb0a56f"},
                createdAt: '2024-08-29T08:14:50.171+00:00',
                updatedAt: '2024-08-29T08:14:50.171+00:00',
                __v: 0
            }
        ]

        const getTaskSpy = jest.spyOn(taskService, 'getTasks').mockResolvedValue(tasks);
        await store.dispatch(getTasks(token));
        expect(getTaskSpy).toHaveBeenCalledWith(token);
    })
})