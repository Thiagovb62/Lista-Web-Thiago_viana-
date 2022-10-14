
const emailTextInput = document.getElementById("Email");
const passwordTextInput = document.getElementById("Password");
const forms = document.querySelectorAll(".needs-validation");

Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});

const activeBtn = () => {

    document.addEventListener("input", () => {
        if(emailTextInput.value.length > 0 && passwordTextInput.value.length > 0){
            document.getElementById("btn-submitForm").disabled = false;
        }
        else{
        
            document.getElementById("btn-submitForm").disabled = true;
        }
    })

};
activeBtn();


