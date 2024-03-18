const inputdate = document.getElementById("date")
const btn = document.getElementById("button")
const ageresult = document.getElementById("age")


btn.addEventListener("click", () => {
    if (inputdate.value == "") {
        alert("enter your birth date")
    }
    else {
        const dob = new Date(inputdate.value);
        const dob_year = dob.getFullYear();
        const now = new Date();
        const new_year = now.getFullYear();
        const age = new_year - dob_year;
        console.log(age)

        ageresult.innerHTML = `your age is ${age}`

    }
})