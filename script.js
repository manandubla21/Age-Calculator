let ipt = document.querySelector("#ipt")

let btn = document.querySelector("#submit")
console.log(ipt.placeholder);

let main = document.querySelector(".main")

btn.addEventListener("click", function () {
    let IDate = ipt.value
    console.log(IDate);

    const day = IDate.slice(8)
    const month = IDate.slice(5, 7)
    const year = IDate.slice(0, 4)


    const today = new Date();
    const Tday = today.getDate();
    const Tmonth = today.getMonth() + 1;
    const Tyear = today.getFullYear();

    const TDate = `${Tday}-${Tmonth}-${Tyear}`;
    console.log(TDate);

    if (day < 1 || month < 1 || year < 1) {
        alert("Enter some Date!")
    }
    else if (year > Tyear || (year == Tyear && month > Tmonth) || (year == Tyear && month == Tmonth && day > Tday)) {
        alert("Entered Date is Wrong!")
    }
    else {
        function YourAge() {
            let yearsOld = Tyear - year - 1;
            let monthsOld = 12 - month + Tmonth - 1;

            if (month < 8) {
                if (month % 2 == 0) {
                    if (month == 2) {
                        daysInAMonth = 28;
                    }
                    daysInAMonth = 30;
                }
                else {
                    daysInAMonth = 31;
                }
            }
            else{
                if (month % 2 == 0) {
                    daysInAMonth = 31;
                }
                else {
                    daysInAMonth = 30;
                }
            }
            // let daysInMonth = 
            let dayOld = daysInAMonth - day + Tday - 1;

            console.log(yearsOld);
            console.log(monthsOld);
            console.log(dayOld);

            if (yearsOld < 1 && year == Tyear) {
                //alert("Beta Phele Chlna toh Lagja Computer chla raha hai")
                if (Tmonth == month) {
                    dayOld = Tday - day;
                }
                let div = document.createElement("div")
                div.className = "age"
                div.innerHTML = `You are ${dayOld} days old`
                main.appendChild(div)
            }
            else if (yearsOld < 1) {
                //alert("Beta Phele Chlna toh Lagja Computer chla raha hai")
                let div = document.createElement("div")
                div.className = "age"
                div.innerHTML = `You are ${monthsOld} months and ${dayOld} days old`
                main.appendChild(div)
            }
            else {
                let div = document.createElement("div")
                div.className = "age"
                div.innerHTML = `You are ${yearsOld} years, ${monthsOld} months and ${dayOld} days old`
                main.appendChild(div)
            }

            document.querySelector("#ipt").addEventListener("click", function () {
                document.querySelector(".age").remove()
            })
        }
    }

    YourAge();
})
