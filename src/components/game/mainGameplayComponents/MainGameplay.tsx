import GuessPriceForm from "./componenets/GuessPriceForm";
import LivePrice from "./componenets/LivePrice";

const MainGameplay = () => {
    return (
        <div className="flex justify-between w-[1000px]">
            <GuessPriceForm />
            <LivePrice />
        </div>
    );
};

export default MainGameplay;
