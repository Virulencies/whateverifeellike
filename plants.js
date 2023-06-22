var gets_sunshine = false
var ounces_of_water = 9
if (gets_sunshine === true && ounces_of_water >= 10){
    console.log("the plant will thrive")
} else if (gets_sunshine === true || ounces_of_water >= 10) {
    console.log("the plant will be fine")
} else {
   console.log("the plant will die") 
}