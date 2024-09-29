import CardUpDownBackground from "./mainGameplayComponents/componenets/common/CardUpDownBackground";

const GeneralLayout = () => {
    return (
        <div
            className="absolute min-[1580px]:pl-[64px] pl-0 top-[110px]
                           flex min-[1580px]:justify-start justify-center w-full 
                           min-[1580px]:pt-[70px] sm:pt-[40px] pt-[10px] z-[-20]"
        >
            <div
                className="min-[1580px]:w-[40%] h-[75vh] relative 
                               min-[1580px]:block hidden z-[-20] mr-[54px]"
            />
            <div
                className="min-[1580px]:w-[52%] w-[90%] min-[1580px]:ml-[33px] ml-0 relative
                               flex flex-col"
            >
                <div
                    className="flex min-[1580px]:flex-row min-[1580px]:justify-start 
                                   flex-col justify-center"
                >
                    <CardUpDownBackground className="z-[-10] w-[100%] lg:h-[400px] h-[335px]" />
                    <div
                        className="flex lg:flex-row flex-col-reverse justify-between items-center
                                        space-x-[20px]"
                    >
                        <CardUpDownBackground
                            className="z-[-10] min-[1580px]:ml-[14px] ml-[0px] 
                                       min-[1580px]:mt-[0] md:mt-[21px] sm:mt-[-30px] mt-[-35px]
                                       min-[1580px]:w-[236px] w-[335px] 
                                       min-[1580px]:h-[400px] h-[147px] flex-none"
                        />
                        <div
                            className="w-[75%] lg:h-[60%] h-[150px] lg:mt-0 
                                       md:mt-[30px] mt-[0] min-[1580px]:hidden block"
                        ></div>
                        <div className="flex flex-none"></div>
                    </div>
                </div>
                <div
                    className="w-[68%] h-[150px] ml-[40px] mt-[8px] 
                               min-[1580px]:block hidden"
                ></div>
            </div>
        </div>
    );
};

export default GeneralLayout;
