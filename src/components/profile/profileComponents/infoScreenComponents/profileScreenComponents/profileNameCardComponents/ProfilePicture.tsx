const ProfilePicture = () => {
    return (
        <div className="bg-[#d9d9d9] rounded-[7px] w-[92px] h-[92px] relative">
            <div
                className="w-[25px] h-[25px] bg-[#777777] rounded-full 
                            absolute left-[50%] -translate-x-1/2 top-[14px]"
            />
            <div
                className="w-[47px] h-[47px] bg-transparent rounded-full 
                           border-[#777777] border-t-[23.5px]
                           absolute left-[50%] -translate-x-1/2 bottom-[-6px]"
            />
        </div>
    );
};

export default ProfilePicture;
