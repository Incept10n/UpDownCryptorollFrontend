import MobileHeader from "./matchhistoryComponents/header/MobileHeader";
import DesktopHeader from "./matchhistoryComponents/header/DesktopHeader";

const MatchHistoryHeader = () => {
    return (
        <>
            <div
                className="grid grid-cols-5 grid-rows-2 gap-[6px] 2xl:gap-x-[20px] mx-[20px] 
                           lg:grid-cols-[60px_repeat(10,_1fr)]"
            >
                <MobileHeader />
                <DesktopHeader />
            </div>
        </>
    );
};

export default MatchHistoryHeader;
