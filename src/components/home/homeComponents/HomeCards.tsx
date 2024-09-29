import GuessThePriceCard from "./homeCards/GuessThePriceCard";
import FutureGamesCard from "./homeCards/FutureGamesCard";

const HomeCards = () => {
    return (
        <div className="2xl:block hidden">
            <div className="absolute right-[55%] top-[10%] appearAnimation">
                <GuessThePriceCard />
            </div>
            <div className="absolute right-[29%] top-[28%] appearAnimation">
                <FutureGamesCard />
            </div>
        </div>
    );
};

export default HomeCards;
