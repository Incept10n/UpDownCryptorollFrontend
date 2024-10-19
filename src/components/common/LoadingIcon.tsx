const LoadingIcon = ({
    width,
    height,
    borderWidth,
}: {
    width: string;
    height: string;
    borderWidth: string;
}) => {
    return (
        <div
            className="loadingAnimation"
            style={{
                width: width,
                height: height,
                borderWidth: borderWidth,
            }}
        ></div>
    );
};

export default LoadingIcon;
