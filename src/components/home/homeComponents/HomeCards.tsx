import GuessThePriceCard from "./homeCards/GuessThePriceCard";
import FutureGamesCard from "./homeCards/FutureGamesCard";

const HomeCards = () => {
    return (
        <div className="2xl:block hidden">
            <div className="absolute left-[20px] top-[10%] appearAnimation">
                <GuessThePriceCard />
            </div>
            <div className="absolute left-[240px] top-[28%] appearAnimation">
                <FutureGamesCard />
            </div>
        </div>
    );
};

export default HomeCards;
