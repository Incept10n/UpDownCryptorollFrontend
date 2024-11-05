const FormError = ({ text }: { text: string }) => {
    return (
        <div
            className="absolute bottom-[-16px] left-0 whitespace-nowrap
                       text-[0.8rem] font-light leading-4 text-[#c26464] tracking-wider"
        >
            {text}
        </div>
    );
};

export default FormError;
