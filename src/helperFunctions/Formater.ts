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
        const dateObj = new Date(dateString);

        const hour = dateObj.getHours().toString().padStart(2, "0");
        const minute = dateObj.getMinutes().toString().padStart(2, "0");

        return `${hour}:${minute}`;
    };
}
