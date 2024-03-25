
const form = document.getElementById('expense-form');
const nameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');


let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense(name, amount) {
    expenses.push({ name, amount });
    localStorage.setItem('expenses', JSON.stringify(expenses));
    loadExpenses();
}

function loadExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            ${expense.name}: $${expense.amount}
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(div);
    });
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    loadExpenses();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addExpense(nameInput.value, amountInput.value);
    nameInput.value = '';
    amountInput.value = '';
});

loadExpenses();
