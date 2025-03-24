// script.js

// student info
const studInfo = document.getElementById('studentInfo');
studInfo.textContent = "Student: 12345678 - John Doe";

// pizza class
class Pizza {
    constructor(size, crust, toppings, addInstructions) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.addInstructions = addInstructions;
    }

    describe() {
        return `You ordered a ${this.size} pizza with ${this.crust} crust and ${this.toppings.length > 0 ? this.toppings.join(", ") : "no toppings"}. Additional instructions: ${this.addInstructions || "None"}`;
    }
}

//form
var zaform = document.getElementById('pizzaForm')
zaform.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(t => t.value);
    const addInstructions = document.getElementById('add').value;

    const pizzaOrder = new Pizza(size, crust, toppings, addInstructions);

    const orderSum = document.getElementById('orderSummary');
    orderSum.textContent = pizzaOrder.describe();
});
