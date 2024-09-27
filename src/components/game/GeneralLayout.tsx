import CardUpDownBackground from "./mainGameplayComponents/componenets/common/CardUpDownBackground";
import DoTechicalAnalysisButton from "./tradingViewWidgets/DoTechicalAnalysisButton";

const GeneralLayout = () => {
    return (
        <div
            className="absolute xl:pl-[64px] pl-0 top-[110px]
                           flex xl:justify-start justify-center w-full 
                           xl:pt-[70px] sm:pt-[40px] pt-[10px] z-[-20]"
        >
            <div
                className="xl:w-[40%] h-[75vh] relative 
                               xl:block hidden z-[-20] mr-[54px]"
            />
            <div
                className="xl:w-[52%] w-[90%] xl:ml-[33px] ml-0 relative
                               flex flex-col "
            >
                <div
                    className="flex xl:flex-row xl:justify-start 
                                   flex-col justify-center"
                >
                    <CardUpDownBackground className="z-[-10] w-[100%] lg:h-[400px] h-[250px]" />
                    <div
                        className="flex lg:flex-row flex-col justify-between items-center
                                        space-x-[20px]"
                    >
                        <CardUpDownBackground
                            className="z-[-10] xl:ml-[14px] ml-[0px] xl:mt-[0] mt-[21px]
                                   xl:w-[236px] md:w-[335px] w-[90%] xl:h-[400px] h-[147px] flex-none"
                        />
                        <div
                            className="w-[75%] lg:h-[60%] h-[65px] lg:mt-0 mt-[30px] bg-red-200
                                           bg-opacity-50 xl:hidden block"
                        ></div>
                        <div className="flex flex-none">
                            <DoTechicalAnalysisButton />
                        </div>
                    </div>
                </div>
                <div className="w-[68%] h-[150px] bg-red-200 bg-opacity-50 xl:block hidden"></div>
            </div>
        </div>
    );
};

export default GeneralLayout;
