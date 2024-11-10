const PageNameHeader = ({
    mainText,
    secondaryText,
}: {
    mainText: string;
    secondaryText: string;
}) => {
    return (
        <div>
            <h1
                className="upDownTextWhite md:text-[2.625rem] text-[1.875rem] font-semibold
                           md:text-left text-center"
            >
                {mainText}
            </h1>
            <div className="UpDownGrayText underline text-[1.5rem] md:block hidden">
                {secondaryText}
            </div>
        </div>
    );
};

export default PageNameHeader;
