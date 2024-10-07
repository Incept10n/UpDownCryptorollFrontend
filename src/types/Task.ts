import { TaskState } from "./HelperTypes";

export class Task {
    id: number;
    name: string;
    reward: number;
    status: TaskState;

    constructor(id: number, name: string, reward: number, status: TaskState) {
        this.id = id;
        this.name = name;
        this.reward = reward;
        this.status = status;
    }
}
