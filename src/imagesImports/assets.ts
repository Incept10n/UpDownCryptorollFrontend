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
import dollar from "/gameplayImages/Dollar.svg";
import questionMarkBitcoin from "/gameplayImages/questionMark/questionMarkBitcoin.svg";
import questionMarkEthereum from "/gameplayImages/questionMark/questionMarkEth.svg";
import questionMarkTon from "/gameplayImages/questionMark/questionMarkTon.svg";
import livePriceDollarSignBitcoin from "/gameplayImages/dollarSign/LivePriceDollarSignBitcoin.svg";
import livePriceDollarSignEth from "/gameplayImages/dollarSign/LivePriceDollarSignEth.svg";
import livePriceDollarSignTon from "/gameplayImages/dollarSign/LivePriceDollarSignTon.svg";
import stockCardContent from "/homePagePictures/stockCardContent.svg";
import futureGameCard from "/homePagePictures/futureGamesCard.svg";
import telegrammIcon from "/socialMediaIcons/TelegramIcon.svg";
import twitterIcon from "/socialMediaIcons/TwitterIcon.svg";
import vkIcon from "/socialMediaIcons/VkIcon.svg";
import goBackIcon from "/gameplayImages/BackIcon.svg";
import bookIcon from "/profilePictures/bookIcon.svg";
import homeIcon from "/profilePictures/homeIcon.svg";
import rewardIcon from "/profilePictures/rewardIcon.svg";
import worldIcon from "/profilePictures/worldIcon.svg";
import pencilIcon from "/profilePictures/pencilIcon.svg";
import doubleArrowRight from "/profilePictures/arrowsRight.svg";
import russianFlag from "/profilePictures/flag/russianFlag.svg";
import usFlag from "/profilePictures/flag/usFlag.svg";
import whiteClosePopupIcon from "/profilePictures/whiteClosePopupIcon.svg";
import checkRing from "/profilePictures/checkRing.svg";
import trophy from "/profilePictures/trophy.svg";
import singleArrowRight from "/profilePictures/singleArrowRightRewards.svg";
import taskCompletedCheckmark from "/profilePictures/taskCompletedCheckmark.svg";
import copyIcon from "/popupImages/CopyIcon.svg";
import returnIcon from "/popupImages/Return.svg";

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
        dollar: dollar,
        questionMark: {
            bitcoin: questionMarkBitcoin,
            ethereum: questionMarkEthereum,
            ton: questionMarkTon,
        },
        livePriceDollarSign: {
            bitcoin: livePriceDollarSignBitcoin,
            ethereum: livePriceDollarSignEth,
            ton: livePriceDollarSignTon,
        },
        socialMedia: {
            tg: telegrammIcon,
            twitter: twitterIcon,
            vk: vkIcon,
        },
        goBack: goBackIcon,
        book: bookIcon,
        home: homeIcon,
        reward: rewardIcon,
        world: worldIcon,
        pencil: pencilIcon,
        doubleArrow: doubleArrowRight,
        countryFlag: {
            us: usFlag,
            ru: russianFlag,
        },
        whiteClosePopup: whiteClosePopupIcon,
        checkRing: checkRing,
        trophy: trophy,
        singleArrowRight: singleArrowRight,
        taskCompletedCheckmark: taskCompletedCheckmark,
        copy: copyIcon,
        return: returnIcon,
    },
    images: {
        coin: coinPic,
        inputFormCoin: inputCoinPic,
        main: {
            bg: mainBg,
        },
        makePredictionBg: makePredictionBg,
        tonConnectPopupBg: tonConnectPopupBg,
        stockCardContent: stockCardContent,
        futureGameCardContent: futureGameCard,
    },
};
