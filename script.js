
const shifts = []
const shift = {
    regularHours: null,
    OneHundredAndTwentyFiveBonus: null,
    OneHundredAndFiftyBonus: null
}


const startDate = new Date("1995-12-25T17:20:45");
const endDate = new Date("1995-12-25T22:59:00");

// מחשב הפרש בין תארכיכם בשניות
var differenceInMillisecs = endDate - startDate;

// ממיר מיליסקונדס לדקות 
var differenceInMinutes = differenceInMillisecs / (1000 * 60);
// מחלק כדי לקבל את השעות
differenceInMinutes = differenceInMinutes / 60
// שימוש בעיגול כלפי מטה כדי לקבל מספר שלם של שעות
var hours = Math.floor(differenceInMinutes);
var minutes = Math.round((differenceInMinutes - hours) * 60)
var result = Number(hours + "." + minutes)
console.log(result)
var count = result
if(count > 12) {
    count = result - 12
    shift.OneHundredAndFiftyBonus = count
    shift.OneHundredAndTwentyFiveBonus = 4
    shift.regularHours = 8
}
else if(count > 8 && count < 12) {
    count = result - 8
    shift.OneHundredAndFiftyBonus = 0
    shift.OneHundredAndTwentyFiveBonus = count
    shift.regularHours = 8
}
else {
    shift.OneHundredAndFiftyBonus = 0
    shift.OneHundredAndTwentyFiveBonus = 0
    shift.regularHours = count
}
shifts.push(shift)
console.log(shifts)



