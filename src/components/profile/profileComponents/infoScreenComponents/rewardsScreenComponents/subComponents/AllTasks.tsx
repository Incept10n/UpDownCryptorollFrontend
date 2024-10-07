import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { fetchUserTasks } from "../../../../../../helperFunctions/fetchFunctions";
import { useTonAddress } from "@tonconnect/ui-react";
import { Task } from "../../../../../../types/Task";
import TaskCard from "./TaskCard";

const AllTasks = () => {
    const { t } = useTranslation();
    const walletAddress = useTonAddress(false);
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchUserTasks(walletAddress).then((result) => {
            setTasks(result);
        });
    }, []);

    const getTaskText = (taskId: number) => {
        return t(`task${taskId}`);
    };

    // TODO: add 'collected state to figma design' (i think of something like gray checkmark)
    // TODO: add display of this state to the TaskCard

    return (
        <div className="flex flex-col space-y-[10px] items-center mt-[39px]">
            {tasks.map((task) => (
                <TaskCard
                    text={getTaskText(task.id)}
                    reward={task.reward}
                    taskState={task.status}
                    key={task.id}
                />
            ))}
        </div>
    );
};

export default AllTasks;
