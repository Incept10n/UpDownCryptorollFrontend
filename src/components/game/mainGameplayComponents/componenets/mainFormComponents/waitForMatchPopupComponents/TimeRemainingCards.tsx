import { useEffect } from "react";
import { CurrentClock } from "../../../../../../types/CurrentClock";
import TimeCard from "./TimeCard";

const TimeRemainingCards = ({
    currentClock,
}: {
    currentClock: CurrentClock;
}) => {
    useEffect(() => {
        // console.log(currentClock.getSeconds());
    }, [currentClock]);

    return (
        <div className="flex justify-between items-center w-[180px] tonTextGradient">
            <TimeCard
                time={currentClock.getHours() < 0 ? 0 : currentClock.getHours()}
                timeName="hours"
            />
            <TimeCard
                time={
                    currentClock.getMinutes() < 0
                        ? 0
                        : currentClock.getMinutes()
                }
                timeName="minutes"
            />
            <TimeCard
                time={
                    currentClock.getSeconds() < 0
                        ? 0
                        : currentClock.getSeconds()
                }
                timeName="seconds"
            />
        </div>
    );
};

export default TimeRemainingCards;
