import logoPic from "/headerIcons/ProperLogo.svg";
import coinPic from "/headerIcons/Coin.svg";
import inputCoinPic from "/gameplayImages/InputFormCoin.svg";
import profilePricture from "/headerIcons/Pfp.svg";
import btc from "/cryptoCurrencyIcons/Btc.svg";
import eth from "/cryptoCurrencyIcons/Eth.svg";
import ton from "/cryptoCurrencyIcons/Ton.svg";
import arrowDown from "/headerIcons/ArrowDown.svg";
import winLoseArrow from "/gameplayImages/winLoseArrow.svg";
import burgerMenu from "/headerIcons/Menu.svg";
import cross from "/headerIcons/Cross.svg";
import mainBg from "/gameplayImages/sobg.svg";
import makePredictionBg from "/gameplayImages/makePredictionBg.svg";
import tonConnectPopupBg from "/popupImages/tonConnectPopupBg.svg";
import popupCloseButton from "/popupImages/closeBtn.svg";
import loadingIcon from "/headerIcons/loading.svg";

export const assets = {
    icons: {
        logo: logoPic,
        profilePicture: profilePricture,
        coins: {
            btc: btc,
            eth: eth,
            ton: ton,
        },
        arrowDown: arrowDown,
        burgerMenu: burgerMenu,
        cross: cross,
        winLoseArrow: winLoseArrow,
        popupCloseBtn: popupCloseButton,
        loading: loadingIcon,
    },
    images: {
        coin: coinPic,
        inputFormCoin: inputCoinPic,
        main: {
            bg: mainBg,
        },
        makePredictionBg: makePredictionBg,
        tonConnectPopupBg: tonConnectPopupBg,
    },
};
