function dateFormatad(date) {
    const dates = new Date(date);

    const day = dates.getDate().toString().padStart(2, '0');
    const month = (dates.getMonth() + 1).toString().padStart(2, '0');
    const hours = dates.getHours().toString().padStart(2, '0');
    const minutes = dates.getMinutes().toString().padStart(2, '0');

    const formatter = `${day}/${month} às ${hours}:${minutes}`;

    return formatter;
}

export { dateFormatad }
