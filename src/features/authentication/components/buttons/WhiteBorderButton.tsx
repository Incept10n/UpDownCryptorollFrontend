const WhiteBorderButton = ({
    width,
    height,
    text,
    fontSize,
    paddingX,
    rounded,
    handleOnClick,
}: {
    width: string;
    height: string;
    text: string;
    fontSize: string;
    paddingX?: string;
    rounded?: string;
    handleOnClick: () => void;
}) => {
    return (
        <button
            onClick={handleOnClick}
            className="border-[1px] border-[#ccc3c3] rounded-[5px]
                       font-semibold text-[#ccc3c3] flex-none
                       flex justify-center items-center active:scale-[1.05]"
            style={{
                width,
                height,
                fontSize,
                paddingLeft: `${paddingX}`,
                paddingRight: `${paddingX}`,
                borderRadius: `${rounded}`,
            }}
        >
            {text}
        </button>
    );
};

export default WhiteBorderButton;
