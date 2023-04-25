function requiredReading(numberOfPages, pagerPerHour, numberOfDays) {
    // let numberOfPages = Number(input[0]);
    // let pagerPerHour = Number(input[1]);
    // let numberOfDays = Number(input[2]);

    let totalTime = numberOfPages / pagerPerHour;
    let hoursPerDay = totalTime / numberOfDays;
    console.log(hoursPerDay)
}
requiredReading(300, 10, 3)