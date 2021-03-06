const Form = document.querySelector("form");
const FormElements = {}

const CheckInput = (input) => {
    const inputValue = input.value;
    const inputType = input.type;

    if (inputValue.length === 0 || (inputType === "number" && (isNaN(inputValue) || parseInt(inputValue) < 0))) { return false; } // numeric inputs values must be a number greater than zero
    
    return true;
}

const CheckFormElements = () => {
    /* Insert elements as object property */
    FormElements.card = document.querySelector("#card-number");
    FormElements.cvc = document.querySelector("#cvc");
    FormElements.amount = document.querySelector("#amount");
    FormElements.first_name = document.querySelector("#first-name");
    FormElements.last_name = document.querySelector("#last-name");
    FormElements.city = document.querySelector("#city");
    FormElements.state = document.querySelector("#state");
    FormElements.postal_code = document.querySelector("#postal-code");
    FormElements.message = document.querySelector("#message");

    for (const property in FormElements) {
        const FormItem = FormElements[property];
        
        FormItem.classList.remove("is-valid", "is-invalid"); // remove previous class
        FormItem.classList.add((!CheckInput(FormItem)) ? "is-invalid" : "is-valid"); // assign new class according to validity
    }
}

Form.addEventListener("change", () => CheckFormElements());
Form.addEventListener("submit", (e) => (document.querySelectorAll(".is-valid").length === Object.keys(FormElements).length) ? alert("Is a valid form submission!") : e.preventDefault());
