import { ReactNode } from "react";

const HistoryItemContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="col-span-1 row-span-1 flex justify-center items-center">
            {children}
        </div>
    );
};

export default HistoryItemContainer;
