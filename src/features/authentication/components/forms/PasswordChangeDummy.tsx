import { assets } from "../../../../imagesImports/assets";

const PasswordChangeDummy = ({
    handleOnClickEdit,
}: {
    handleOnClickEdit: () => void;
}) => {
    return (
        <div className="relative mt-[15px]">
            <div className="flex justify-start items-center">
                <input
                    type="password"
                    className="text-[1.9rem] upDownTextWhite bg-transparent outline-none 
                               sm:w-[210px] w-[90%]"
                    maxLength={13}
                    value={"******"}
                    disabled={true}
                />
                <div className="flex justify-end w-full">
                    <img
                        src={assets.icons.pencil}
                        alt="edit icon"
                        className="w-[30px] h-[30px] hover:cursor-pointer"
                        onClick={handleOnClickEdit}
                    />
                </div>
            </div>
            <div className="h-[1px] w-full bg-white "></div>
        </div>
    );
};

export default PasswordChangeDummy;
