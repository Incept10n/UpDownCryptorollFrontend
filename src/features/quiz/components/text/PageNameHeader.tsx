const PageNameHeader = ({
    mainText,
    secondaryText,
}: {
    mainText: string;
    secondaryText: string;
}) => {
    return (
        <div>
            <h1 className="upDownTextWhite text-[2.625rem] font-semibold">
                {mainText}
            </h1>
            <div className="UpDownGrayText underline text-[1.5rem]">
                {secondaryText}
            </div>
        </div>
    );
};

export default PageNameHeader;
