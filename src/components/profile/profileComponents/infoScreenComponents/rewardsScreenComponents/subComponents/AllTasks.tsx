import { useContext, useEffect, useState } from "react";
import {
    fetchPlayerInfo,
    fetchUserTasks,
} from "../../../../../../helperFunctions/fetchFunctions";
import { useTonAddress } from "@tonconnect/ui-react";
import { Task } from "../../../../../../types/Task";
import { tgLink, twitterLink, vkLink } from "../../../../../../constants";
import TaskCardLogicWrapper from "./TaskCardLogicWrapper";
import RewardToCollectPopup from "./RewardToCollectPopup";
import { ApplicationContext } from "../../../../../../context/ApplicationContext";
import LoadingIcon from "../../../../../common/LoadingIcon";

const AllTasks = () => {
    const walletAddress = useTonAddress(false);
    const [tasks, setTasks] = useState<Task[]>([]);

    const [displayClaimPopup, setDisplayClaimPopup] = useState(false);
    const [popupTaskReward, setPopupTaskReward] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

    const { setCurrentBalance } = useContext(ApplicationContext)!;

    useEffect(() => {
        updateUserTasks();
    }, []);

    const updateUserTasks = () => {
        fetchUserTasks(walletAddress).then((result) => {
            setTasks(result);
            setIsLoading(false);
        });
    };

    const collectReward = (task: Task) => {
        console.log(
            `collecting task with id: ${task.id} and name: ${task.name}`,
        );
        setDisplayClaimPopup(true);
        setPopupTaskReward(task.reward);
    };

    const claimButtonAction = () => {
        setDisplayClaimPopup(false);
        fetchPlayerInfo(walletAddress).then((playerInfo) => {
            if (playerInfo) {
                setCurrentBalance(playerInfo.currentBalance);
            }
        });
        updateUserTasks();
    };

    return (
        <div
            className="flex flex-col min-[1450px]:space-y-[26px] 
                       space-y-[10px] items-center mt-[39px]"
        >
            {isLoading ? (
                <LoadingIcon width="40px" height="40px" borderWidth="8px" />
            ) : (
                tasks.length !== 0 && (
                    <>
                        <TaskCardLogicWrapper
                            task={tasks[0]}
                            onClick={() => {
                                location.href = tgLink;
                            }}
                            updateUserTasks={updateUserTasks}
                            collectReward={collectReward}
                        />
                        <TaskCardLogicWrapper
                            task={tasks[1]}
                            onClick={() => {
                                location.href = twitterLink;
                            }}
                            updateUserTasks={updateUserTasks}
                            collectReward={collectReward}
                        />
                        <TaskCardLogicWrapper
                            task={tasks[2]}
                            onClick={() => {
                                location.href = vkLink;
                            }}
                            updateUserTasks={updateUserTasks}
                            collectReward={collectReward}
                        />
                        <TaskCardLogicWrapper
                            task={tasks[3]}
                            onClick={() => {
                                console.log("nothing for now");
                            }}
                            updateUserTasks={updateUserTasks}
                            collectReward={collectReward}
                        />
                        <TaskCardLogicWrapper
                            task={tasks[4]}
                            onClick={() => {
                                location.href =
                                    "https://cryptoroll.su/whitepaper";
                            }}
                            updateUserTasks={updateUserTasks}
                            collectReward={collectReward}
                        />
                        <TaskCardLogicWrapper
                            task={tasks[5]}
                            onClick={() => {
                                console.log("nothing for now");
                            }}
                            updateUserTasks={updateUserTasks}
                            collectReward={collectReward}
                        />
                    </>
                )
            )}
            <div
                className={`${displayClaimPopup ? "opacity-100 z-[20]" : "opacity-0 z-[-20]"}
                            transition-all duration-[0.2s] ease-in-out`}
            >
                <RewardToCollectPopup
                    reward={popupTaskReward}
                    claimButtonAction={claimButtonAction}
                />
            </div>
        </div>
    );
};

export default AllTasks;
