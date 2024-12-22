import { Link } from 'react-router-dom';
import { assets } from '../../../imagesImports/assets';
import { useContext, useEffect, useState } from 'react';
import {
    ApplicationContext,
    GameCoice,
} from '../../../context/ApplicationContext';

const UpDownLogo = () => {
    const { currentGame, setCurrentGame } = useContext(ApplicationContext)!;
    const [lastPlayedGame, setLastPlayedGame] = useState<GameCoice>(
        GameCoice.None,
    );

    useEffect(() => {
        if (currentGame !== GameCoice.None) {
            setLastPlayedGame(currentGame);
        }
    }, [currentGame]);

    const handleOnGoBack = () => {
        setCurrentGame(lastPlayedGame);
    };

    return (
        <Link to="/play" onClick={handleOnGoBack}>
            <img
                src={assets.icons.logo}
                alt="logo"
                className="md:w-[67.13px] md:h-[38.52px] w-[46.3px] h-[26.56px]"
            />
        </Link>
    );
};

export default UpDownLogo;
