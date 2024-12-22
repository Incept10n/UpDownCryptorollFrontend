import ChooseGameButton from './header/ChooseGameButton';
import MainHeaderButtons from './header/MainHeaderButtons';
import MakePredictionText from './header/MakePredictionText';
import UpDownLogo from './header/UpDownLogo';

const Header = () => {
    return (
        <header className="flex justify-between w-full h-[68px] sm:mt-[40px] mt-[25px] z-[20]">
            <div
                className="flex justify-between items-center font-semibold 
                           sm:space-x-[34px] space-x-[20px]
                           lg:ml-[72px] md:ml-[50px] ml-[27px]"
            >
                <UpDownLogo />
                <ChooseGameButton />
            </div>
            <MakePredictionText />
            <MainHeaderButtons />
        </header>
    );
};

export default Header;
