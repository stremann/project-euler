function countSundays(from, to) {
    let sundays = 0;

    for (let year = from; year <= to; year++) {
        for (let month = 0; month < 12; month++) {
            if (new Date(year, month, 1).toString().substring(0, 3) === 'Sun') {
                sundays++;
            }
        }
    }

    return sundays;
}

countSundays(2014, 2017); // 7
countSundays(2017, 2017); // 2
countSundays(1901, 2000); // 171
