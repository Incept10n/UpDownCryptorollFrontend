const HomeBgGradient = () => {
    return (
        <div className="z-[-20]">
            <div
                className="fixed bg-[#6be0c2] bg-opacity-[49%]
                           w-[317px] h-[318px] blur-[200px] rounded-full z-[-20]
                           top-[-111px] left-[142px]"
            ></div>
            <div
                className="fixed bg-[#6be0c2] bg-opacity-[49%]
                           w-[370px] h-[370px] blur-[200px] rounded-full z-[-20]
                           bottom-[50px] right-[116px] min-[820px]:block hidden"
            ></div>
        </div>
    );
};

export default HomeBgGradient;
