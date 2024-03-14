// inputs
const inputDay = document.querySelector(".day");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");
const convertBtn = document.querySelector(".submit-btn");

// outputs
let isvalid = false;
const outputDay = document.querySelector(".output-day");
const outputMonth = document.querySelector(".output-month");
const outputYear = document.querySelector(".output-year");

//invalid msg
const invalidDay = document.querySelector(".invalid-day");
const invalidMonth = document.querySelector(".invalid-month");
const invalidYear = document.querySelector(".invalid-year");

const date = new Date();
const today = date.getDate();
const year = date.getFullYear();
const currentMonth = date.getMonth() + 1;

inputDay.addEventListener("input", (e) => {
  if (+inputDay.value > 31) {
    isvalid = false;
    invalidDay.textContent = `Must be a valid day`;
    return;
  } else {
    isvalid = true;
    invalidDay.textContent = ``;
  }
});
inputMonth.addEventListener("input", (e) => {
  if (+inputMonth.value > 12) {
    invalidMonth.textContent = `Must be a valid month`;
    isvalid = false;
    return;
  } else {
    invalidMonth.textContent = ``;
    isvalid = true;
  }
});
inputYear.addEventListener("input", (e) => {
  if (+inputYear.value > year) {
    invalidYear.textContent = `Must be in the past`;
    isvalid = false;
    return;
  } else {
    invalidYear.textContent = ``;
    isvalid = true;
  }
});

convertBtn.addEventListener("click", () => {
  if (isvalid) {
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    console.log(birthday);
    let birthdayobj = new Date(birthday);
    let ageDiff = Date.now() - birthdayobj;
    let ageDate = new Date(ageDiff);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 1;
    outputDay.textContent = ageDay;
    outputMonth.textContent = ageMonth;
    outputYear.textContent = ageYears;
  } else {
    alert("Error");
  }
});
