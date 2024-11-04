import { changeTaskState } from "../../../../../../helperFunctions/fetchFunctions";
import { TaskState } from "../../../../../../types/HelperTypes";
import TaskCard from "./TaskCard";
import { useTranslation } from "react-i18next";
import { Task } from "../../../../../../types/Task";
import { getCurrentUsername } from "../../../../../../helperFunctions/jwtTokenFuncions";

const TaskCardLogicWrapper = ({
    task,
    onClick,
    updateUserTasks,
    collectReward,
}: {
    task: Task;
    onClick: () => void;
    updateUserTasks: () => void;
    collectReward: (task: Task) => void;
}) => {
    const { t } = useTranslation();

    const handleTaskOnClick = async () => {
        switch (task.status) {
            case TaskState.Uncompleted:
                await changeTaskState(
                    task.id,
                    TaskState.Uncollected,
                    getCurrentUsername()!,
                );
                onClick();
                break;
            case TaskState.Uncollected:
                await changeTaskState(
                    task.id,
                    TaskState.Completed,
                    getCurrentUsername()!,
                );
                collectReward(task);
                break;
            case TaskState.Completed:
                break;
        }

        updateUserTasks();
    };

    const getTaskText = (taskId: number) => {
        return t(`task${taskId}`);
    };

    return (
        <div onClick={handleTaskOnClick} className="w-full flex justify-center">
            <TaskCard
                text={getTaskText(task.id)}
                reward={task.reward}
                taskState={task.status}
            />
        </div>
    );
};

export default TaskCardLogicWrapper;
