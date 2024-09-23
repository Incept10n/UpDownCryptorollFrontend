export class Formatter {
    static formatMoney = (money: number) => {
        const profitStr = money.toFixed(2);

        if (profitStr.length > 9) {
            return money.toExponential(2);
        }

        return money.toFixed(2);
    };
}
