import { useTranslation } from "react-i18next";
import Task from "./Task";
import { TaskState } from "../../../../../../types/HelperTypes";

const AllTasks = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col space-y-[10px] items-center mt-[39px]">
            <Task
                text={t("task1")}
                reward={1500}
                taskState={TaskState.NotCompleted}
            />
            <Task
                text={t("task2")}
                reward={1500}
                taskState={TaskState.Completed}
            />
            <Task
                text={t("task3")}
                reward={1500}
                taskState={TaskState.Completed}
            />
            <Task
                text={t("task4")}
                reward={1000}
                taskState={TaskState.NotCompleted}
            />
            <Task
                text={t("task5")}
                reward={1000}
                taskState={TaskState.NotCompleted}
            />
            <Task
                text={t("task6")}
                reward={3900}
                taskState={TaskState.NotCompleted}
            />
        </div>
    );
};

export default AllTasks;
