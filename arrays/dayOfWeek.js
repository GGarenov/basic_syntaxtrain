function dayOfWeek(num) {
    let dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        console.log('Invalid day!');
    } else {
        console.log(dayOfWeek[num - 1]);
    }
    
}
    
dayOfWeek(2)