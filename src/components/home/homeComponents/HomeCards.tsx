import GuessThePriceCard from "./homeCards/GuessThePriceCard";
import FutureGamesCard from "./homeCards/FutureGamesCard";

const HomeCards = () => {
    return (
        <div className="2xl:block hidden relative h-[520px]">
            <div className="absolute left-0 top-0 appearAnimation">
                <GuessThePriceCard />
            </div>
            <div className="absolute left-[210px] top-[160px] appearAnimation">
                <FutureGamesCard />
            </div>
        </div>
    );
};

export default HomeCards;
