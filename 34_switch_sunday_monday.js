let day = "friday";
switch (true) {
    case (day === "sunday" || "saturday"):
        console.log("this is holiday");
        break
    case (day === "monday" || "tuesday" || "wednesday" || "thrusday"):
        console.log("this is workday");
        break
    case (day === "friday"):
        console.log("this is weekend");
        break
    default:
        console.log("this is out of content ");




}