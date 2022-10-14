const forms = document.querySelectorAll(".needs-validation");
const senha = document.querySelector("#senha");
const password = document.querySelector("#confirmPassword");
const meses = document.querySelector("#meses");
const days = document.querySelector("#dias");
const years = document.querySelector("#SelectYears");
Array.from(forms).forEach((form) => {
    form.addEventListener(
        "submit",
        (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                if (password) {
                    validatePassword();
                }
            }

            form.classList.add("was-validated");
        },
        false
    );
});

function validatePassword() {
    if (senha.value != password.value) {
        password.setCustomValidity("was-validated");
    } else {
        password.setCustomValidity("");
    }
}

meses.addEventListener("change", () => {
    $(".ano").empty();
    dias(meses);
    ano();
    console.log(days.value);
});

days.addEventListener("change", () => {
    $(".ano").empty();
    ano();
    console.log(days.value);
});

const dias = (mes) => {
    if (
        mes.value === "01" ||
        mes.value === "03" ||
        mes.value === "05" ||
        mes.value === "07" ||
        mes.value === "08" ||
        mes.value === "10" ||
        mes.value === "12"
    ) {
        document.querySelector(".number30").style.display = "block";
        document.querySelector(".number31").style.display = "block";
    } else if (mes.value === "02") {
        document.querySelector(".number30").style.display = "none";
        document.querySelector(".number31").style.display = "none";
    } else {
        document.querySelector(".number30").style.display = "block";
        document.querySelector(".number31").style.display = "none";
    }
}

const ano = () => {
    $(".ano").empty();
    if (meses.value === "02" && days.value === "29") {
        for (let index = 1985; index <= 2022; index++) {
            if (index % 4 == 0 && (index % 100 != 0 || index % 400 == 0)) {
                years.options[years.options.length] = new Option(index, index);
            }
        }
    } else {
        for (let index = 1985; index <= 2022; index++) {
            years.options[years.options.length] = new Option(index, index);
        }
    }
}

const activeButton = () =>{
  const yes =  document.getElementById("sim")
  const no = document.getElementById("nao")
 
    yes.addEventListener("change",() =>{
        document.querySelector("#btn-submitForm").disabled = false;
      })
      
    no.addEventListener("change",() =>{
        document.querySelector("#btn-submitForm").disabled = true;
    })
  }
  
activeButton();