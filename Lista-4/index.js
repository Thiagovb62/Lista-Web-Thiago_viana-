let charactersCount = document.querySelector(".charCount");
let textArea = document.querySelector(".comment");
let charactersCount2 = document.querySelector(".charCount2");
let txtArea2 = document.querySelector("#textarea");

textArea.addEventListener("keyup", () => {
    let valueLength = textArea.value.length;

    charactersCount.innerHTML = valueLength;

    const charactersColor = (value) => {

        try {
            value > 80 ?
                charactersCount.classList.add("active") :
                charactersCount.classList.remove("active");

            value > 140 ?
                charactersCount.classList.add("error") :
                charactersCount.classList.remove("error");

            if (value > 140) {
                valuExtra = 140 - valueLength;
                charactersCount.innerHTML = valuExtra;
            }
        } catch (err) {
            console.log(err)
        }
    }

    const buttonDisabled = (value) => {
        try {
            value == 0 || value >= 140 ?
                document.querySelector("#btn-submitTzeet").disabled = true :
                document.querySelector("#btn-submitTzeet").disabled = false;

        } catch (err) {

        }

    }
    charactersColor(valueLength);
    buttonDisabled(valueLength);


})


txtArea2.addEventListener("keyup", () => {
    let valueLength = txtArea2.value.length;

    charactersCount2.innerHTML = valueLength;

    const charactersColor = (value) => {

        try {
            value > 80 ?
                charactersCount2.classList.add("active") :
                charactersCount2.classList.remove("active");

            value > 140 ?
                charactersCount2.classList.add("error") :
                charactersCount2.classList.remove("error");

            if (value > 140) {
                valueExtra = 140 - valueLength;
                charactersCount2.innerHTML = valueExtra;
            }
        } catch (err) {
            console.log(err)
        }
    }

    const buttonDisabled = (value) => {
        try {
            value == 0 || value >= 140 ?
                document.querySelector("#btn-submitTzeet2").disabled = true :
                document.querySelector("#btn-submitTzeet2").disabled = false;

        } catch (err) {

        }

    }
    charactersColor(valueLength);
    buttonDisabled(valueLength);


})
