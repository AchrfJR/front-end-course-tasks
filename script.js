// Automatically trigger age calculation whenever inputs change
document.getElementById("day").addEventListener("input", calculateAndDisplayAge);
document.getElementById("month").addEventListener("input", calculateAndDisplayAge);
document.getElementById("year").addEventListener("input", calculateAndDisplayAge);

function calculateAndDisplayAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if (isValidDate(day, month, year)) {
        const birthDate = new Date(`${year}-${month}-${day}`);
        const age = calculateAge(birthDate);
        displayAge(age);
    } else {
        displayEmptyAge();
    }
}

function isValidDate(day, month, year) {
    const date = new Date(`${year}-${month}-${day}`);
    return date && date.getDate() == day && month >= 1 && month <= 12;
}

function calculateAge(birthDate) {
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // days in the previous month
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
}

function displayAge(age) {
    document.querySelectorAll(".age-output")[0].textContent = age.years;
    document.querySelectorAll(".age-output")[1].textContent = age.months;
    document.querySelectorAll(".age-output")[2].textContent = age.days;
}

function displayEmptyAge() {
    document.querySelectorAll(".age-output")[0].textContent = '--';
    document.querySelectorAll(".age-output")[1].textContent = '--';
    document.querySelectorAll(".age-output")[2].textContent = '--';
}
