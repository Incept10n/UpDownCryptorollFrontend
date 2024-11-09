import { AdditionalInfo } from "./AdditionalInfo";
import { Task } from "./Task";

export class RewardTaskWithAdditionalInfo {
    tasks: Task[];
    additionalInfo: AdditionalInfo[];

    constructor(tasks: Task[], additionalInfo: AdditionalInfo[]) {
        this.tasks = tasks;
        this.additionalInfo = additionalInfo;
    }
}
