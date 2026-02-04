// Select elements
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategorySelect = document.getElementById('expense-category');
const addExpenseBtn = document.getElementById('add-expense-btn');
const expenseList = document.getElementById('expense-list');
const totalExpenseDisplay = document.getElementById('total-expense');

// Array to store expenses
let expenses = [];

// Function to add a new expense
function addExpense() {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategorySelect.value;

    if (name === "" || isNaN(amount) || category === "") {
        alert("Please fill in all fields!");
        return;
    }

    const expense = {
        id: Date.now(),
        name,
        amount,
        category
    };

    expenses.push(expense);
    displayExpenses();
    clearInputs();
}

// Function to display expenses
function displayExpenses() {
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach(expense => {
        total += expense.amount;

        const li = document.createElement('li');
        li.className = 'expense-item';
        li.innerHTML = `
            ${expense.name} - $${expense.amount.toFixed(2)} (${expense.category})
            <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
        `;
        expenseList.appendChild(li);
    });

    totalExpenseDisplay.textContent = total.toFixed(2);
}

// Function to delete an expense
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    displayExpenses();
}

// Function to clear input fields
function clearInputs() {
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
    expenseCategorySelect.value = "";
}

// Event listener
addExpenseBtn.addEventListener('click', addExpense);
