export class AdditionalInfo {
    taskId: number;
    additionalInfo: any;

    constructor(taskId: number, additionalInfo: any) {
        this.taskId = taskId;
        this.additionalInfo = additionalInfo;
    }
}
