var dayData = document.querySelector("#day");
var monthData = document.querySelector("#month");
var yearData = document.querySelector("#year");
var dayInfo = document.querySelector("#container__day--info");
var monthInfo = document.querySelector("#container__month--info");
var yearInfo = document.querySelector("#container__year--info");
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth();
var currentDay = new Date().getDate();
var dayReq = document.querySelector(".day--requirement");
var monthReq = document.querySelector(".month--requirement");
var yearReq = document.querySelector(".year--requirement");
var dayHeader = document.querySelector(".day--header");
var monthHeader = document.querySelector(".month--header");
var yearHeader = document.querySelector(".year--header");
var dayBorder = document.querySelector(".day--border");
var monthBorder = document.querySelector(".month--border");
var yearBorder = document.querySelector(".year--border");
var dayValidity = document.querySelector(".day--validity");
var monthValidity = document.querySelector(".month--validity");
var yearValidity = document.querySelector(".year--validity");
var invalidDayToMonth = document.querySelector(".invalid--daytomonth");
var numberPattern = /^[0-9]+$/;
var calculate = document.querySelector(".container__arrowimg");


// This field is required error message
    // Day
    calculate.addEventListener("click", function() {
        if(dayData.value === "") {
            dayReq.classList.remove("container__date--noerror");
        } else {
            dayReq.classList.add("container__date--noerror");
        }
    })

    // month
    calculate.addEventListener("click", function() {
        if(monthData.value === "") {
            monthReq.classList.remove("container__date--noerror");
        } else {
            monthReq.classList.add("container__date--noerror");
        }
    })

    // year
    calculate.addEventListener("click", function() {
        if(yearData.checkValidity() === false) {
            yearReq.classList.remove("container__date--noerror");
        } else {
            yearReq.classList.add("container__date--noerror");
        }
    })


// must be a valid day error message
calculate.addEventListener("click", function() {
    if((dayData.value !== "") && ((Number(dayData.value) === 0) || (Number(dayData.value) > 31) || (numberPattern.test(dayData.value) === false) || dayData.value.length <= 1)) {
        dayValidity.classList.remove("container__date--noerror");
    } else {
        dayValidity.classList.add("container__date--noerror");
    }
})


// must be a valid month error message
calculate.addEventListener("click", function() {
    if((monthData.value !== "") && ((Number(monthData.value) === 0) || (Number(monthData.value) > 12) || (numberPattern.test(monthData.value) === false) || monthData.value.length <= 1)) {
        monthValidity.classList.remove("container__date--noerror");
    } else {
        monthValidity.classList.add("container__date--noerror");
    }
})


// must be in the past error message
calculate.addEventListener("click", function() {
    if((yearData.value.length > 3) && (((numberPattern.test(yearData.value) === false) && (yearData.value !== "")) || ((Number(yearData.value) === currentYear) && (Number(monthData.value) === currentMonth+1) && (Number(dayData.value) > currentDay)))) {
        yearValidity.classList.remove("container__date--noerror");
    } else if((yearData.value.length > 3) && (((numberPattern.test(yearData.value) === false)  && (yearData.value !== "")) || ((Number(yearData.value) === currentYear) && (Number(monthData.value) > currentMonth+1)))) {
        yearValidity.classList.remove("container__date--noerror");
    } else if((yearData.value.length > 3) && (((numberPattern.test(yearData.value) === false)  && (yearData.value !== "")) || ((Number(yearData.value) > currentYear)))) {
        yearValidity.classList.remove("container__date--noerror");
    } else {
        yearValidity.classList.add("container__date--noerror");
    }
})


// must be a valid date
calculate.addEventListener("click", function() {
    if((Number(dayData.value) === 31 && Number(monthData.value) === 4) || (Number(dayData.value) === 31 && Number(monthData.value) === 6) || (Number(dayData.value) === 31 && Number(monthData.value) === 9) || (Number(dayData.value) === 31 && Number(monthData.value) === 11)) {
        invalidDayToMonth.classList.remove("container__date--noerror");
    } else if ((Number(dayData.value) === 29 && Number(monthData.value) === 2 && Number(yearData.value)%4 !== 0 && (Number(yearData.value)%100 === 0 || Number(yearData.value)%400 !== 0))) {
        invalidDayToMonth.classList.remove("container__date--noerror");
    } else if(Number(dayData.value) > 29 && Number(dayData.value) < 32 && Number(monthData.value) === 2) {
        invalidDayToMonth.classList.remove("container__date--noerror");
    } else {
        invalidDayToMonth.classList.add("container__date--noerror");
    }
})


// calculation
calculate.addEventListener("click", function() {
    if(!dayValidity.classList.contains("container__date--noerror") || !monthValidity.classList.contains("container__date--noerror") || !yearValidity.classList.contains("container__date--noerror") || !dayReq.classList.contains("container__date--noerror") || !monthReq.classList.contains("container__date--noerror") || !yearReq.classList.contains("container__date--noerror") || !invalidDayToMonth.classList.contains("container__date--noerror")) {
        yearInfo.innerHTML = "--";
        monthInfo.innerHTML = "--";
        dayInfo.innerHTML = "--";
    } else if((currentMonth+1) === Number(monthData.value) && currentDay >= Number(dayData.value) && dayData.checkValidity() === true && monthData.checkValidity() === true && yearData.checkValidity() === true && dayData.value <= 31 && monthData.value <= 12 && Number(yearData.value) <= currentYear) {
        yearInfo.innerHTML = currentYear - Number(yearData.value);
        monthInfo.innerHTML = (currentMonth + 1) - Number(monthData.value);
        dayInfo.innerHTML = currentDay - Number(dayData.value);
    } else if(((currentMonth+1) === Number(monthData.value)) && (currentDay < Number(dayData.value)) && (dayData.checkValidity() === true) && (monthData.checkValidity() === true) && (yearData.checkValidity() === true) && (dayData.value <= 31) && (monthData.value <= 12) && (Number(yearData.value) < currentYear)) {
        yearInfo.innerHTML = (currentYear-1) - Number(yearData.value);
        monthInfo.innerHTML = 11;
        dayInfo.innerHTML = currentDay;
    } else if((currentMonth+1) < Number(monthData.value) && (currentDay <= Number(dayData.value) || currentDay > Number(dayData.value)) && dayData.checkValidity() === true && monthData.checkValidity() === true && yearData.checkValidity() === true && dayData.value <= 31 && monthData.value <= 12 && Number(yearData.value) <= currentYear) {
        yearInfo.innerHTML = (currentYear-1) - Number(yearData.value);
        monthInfo.innerHTML = (currentMonth+1) + (12-Number(monthData.value));
        dayInfo.innerHTML = currentDay;
    } else if((currentMonth+1) > Number(monthData.value) && currentDay === Number(dayData.value) && dayData.checkValidity() === true && monthData.checkValidity() === true && yearData.checkValidity() === true && dayData.value <= 31 && monthData.value <= 12 && Number(yearData.value) <= currentYear) {
        yearInfo.innerHTML = currentYear - Number(yearData.value);
        monthInfo.innerHTML = (currentMonth + 1) - Number(monthData.value);
        dayInfo.innerHTML = currentDay - Number(dayData.value);
    } else if((currentMonth+1) > Number(monthData.value) && currentDay > Number(dayData.value) && dayData.checkValidity() === true && monthData.checkValidity() === true && yearData.checkValidity() === true && dayData.value <= 31 && monthData.value <= 12 && Number(yearData.value) <= currentYear) {
        yearInfo.innerHTML = currentYear - Number(yearData.value);
        monthInfo.innerHTML = (currentMonth + 1) - Number(monthData.value);
        dayInfo.innerHTML = currentDay - Number(dayData.value);
    } else if((currentMonth+1) > Number(monthData.value) && currentDay < Number(dayData.value) && dayData.checkValidity() === true && monthData.checkValidity() === true && yearData.checkValidity() === true && dayData.value <= 31 && monthData.value <= 12 && Number(yearData.value) <= currentYear) {
        yearInfo.innerHTML = currentYear - Number(yearData.value);
        monthInfo.innerHTML = (currentMonth + 1) - Number(monthData.value);
        dayInfo.innerHTML = currentDay;
    }
})


// error border and header
calculate.addEventListener("click", function() {
    if(!dayReq.classList.contains("container__date--noerror") || !monthReq.classList.contains("container__date--noerror") || !yearReq.classList.contains("container__date--noerror") || !dayValidity.classList.contains("container__date--noerror") || !monthValidity.classList.contains("container__date--noerror") || !yearValidity.classList.contains("container__date--noerror") || !invalidDayToMonth.classList.contains("container__date--noerror")) {
        dayHeader.classList.add("container__date--errordata");
        monthHeader.classList.add("container__date--errordata");
        yearHeader.classList.add("container__date--errordata");
        dayBorder.classList.add("container__date--errorborder");
        monthBorder.classList.add("container__date--errorborder");
        yearBorder.classList.add("container__date--errorborder");
    } else {
        dayHeader.classList.remove("container__date--errordata");
        monthHeader.classList.remove("container__date--errordata");
        yearHeader.classList.remove("container__date--errordata");
        dayBorder.classList.remove("container__date--errorborder");
        monthBorder.classList.remove("container__date--errorborder");
        yearBorder.classList.remove("container__date--errorborder");
    }
})

