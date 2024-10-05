export class Formatter {
    static formatMoney = (money: number) => {
        const profitStr = money.toFixed(2);

        if (profitStr.length > 9) {
            return money.toExponential(2);
        }

        return money.toFixed(2);
    };

    static extractDateFromDateTimeString = (
        dateString: string,
        spaceAfterYear?: boolean,
    ) => {
        const [date, _] = dateString.split("T");
        const [year, month, day] = date.split("-");

        if (spaceAfterYear) {
            return `${year} ${month}/${day}`;
        } else {
            return `${year}/${month}/${day}`;
        }
    };

    static extractTimeFromDateTimeString = (dateString: string) => {
        const [_, time] = dateString.split("T");

        const [hour, minute] = time.split(":");

        return `${hour}:${minute}`;
    };
}
