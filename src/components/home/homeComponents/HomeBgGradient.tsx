const HomeBgGradient = () => {
    return (
        <div className="z-[-20]">
            <div
                className="absolute bg-[#6be0c2] bg-opacity-[49%]
                           md:w-[317px] w-full h-[318px] blur-[200px] rounded-full z-[-20]
                           md:top-[-111px] md:left-[142px] top-[-20%] left-0"
            ></div>
            <div
                className="absolute bg-[#6be0c2] bg-opacity-[49%]
                           w-[370px] h-[370px] blur-[200px] rounded-full z-[-20]
                           bottom-[50px] right-[116px] min-[820px]:block hidden"
            ></div>
        </div>
    );
};

export default HomeBgGradient;
