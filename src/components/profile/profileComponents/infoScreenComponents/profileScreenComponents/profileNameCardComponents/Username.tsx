import { ChangeEvent, KeyboardEvent } from "react";

const Username = ({
    isEditing,
    userName,
    handleOnChange,
    handleKeyDown,
}: {
    isEditing: boolean;
    userName: string;
    handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (ev: KeyboardEvent<HTMLInputElement>) => void;
}) => {
    return (
        <>
            {!isEditing ? (
                <div className="upDownTextWhite text-[30px]">{userName}</div>
            ) : (
                <div className="flex flex-col">
                    <input
                        className="upDownTextWhite text-[30px] bg-transparent outline-none w-full"
                        value={userName}
                        onChange={handleOnChange}
                        onKeyDown={handleKeyDown}
                    />
                    <div className="w-full h-[1px] bg-[#ccc3c3]"></div>
                </div>
            )}
        </>
    );
};

export default Username;
