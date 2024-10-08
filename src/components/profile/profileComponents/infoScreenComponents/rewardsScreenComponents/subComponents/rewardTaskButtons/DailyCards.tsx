import DailyRewardCard from "./DailyRewardCard";

const DailyCards = () => {
    return (
        <div className="grid grid-cols-3 mx-[29px] mt-[53px] gap-[26px] justify-items-center">
            <DailyRewardCard dayNumber={1} moneyReward={200} />
            <DailyRewardCard dayNumber={2} moneyReward={260} />
            <DailyRewardCard dayNumber={3} moneyReward={320} />
            <DailyRewardCard dayNumber={4} moneyReward={380} />
            <DailyRewardCard dayNumber={5} moneyReward={440} />
            <DailyRewardCard dayNumber={6} moneyReward={500} />
        </div>
    );
};

export default DailyCards;
