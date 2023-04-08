const $ = document;
const keys = $.querySelectorAll(".key");
const display_input = $.querySelector(".display .input");
const display_output = $.querySelector(".display .output");
let input = "";

for (let key of keys) {
    const value = key.dataset.value;

    key.addEventListener("click", () => {
        if (value === "clear") {
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        } else if (value === "backspace") {
            input = input.slice(0, -1);
            display_input.innerHTML = cleanInput(input);
        } else if (value === "=") {
            let result = eval(input);
            display_output.innerHTML = result;
        } else {
            input += value;
            display_input.innerHTML = cleanInput(input);
        }
    });
}

function cleanInput(input) {
    let input_array = input.split("");
    let input_array_length = input_array.length;

    for (let i = 0; i < input_array_length; i++) {
        if (input_array[i] == "*") {
            input_array[i] = ` <span class="operator">x</span> `;
        } else if (input_array[i] == "/") {
            input_array[i] = ` <span class="operator">/</span> `;
        } else if (input_array[i] == "+") {
            input_array[i] = ` <span class="operator">+</span> `;
        } else if (input_array[i] == "-") {
            input_array[i] = ` <span class="operator">-</span> `;
        }
    }
    return input_array.join("");
}
