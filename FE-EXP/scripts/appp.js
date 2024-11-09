/*axios.defaults.baseURL = "http://localhost/expense-tracker-db/BE-EXP/php/";

const editPath = "../assets/icons/edit.png";
const deletePath = "../assets/icons/delete.png";

window.addEventListener("load", fetchTransactions);

function deleteTransaction(id) {
  console.log(id); // correct
  axios
    .post("deleteTransaction.php", {
      id: id,
    })
    .then(function (response) {
      console.log("Response:", response.data);

      fetchTransactions();
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting the transaction.");
    });
}

function totalBudget(transactions) {
  let totalTransactions = 0;
  let expense = 0;
  let income = 0;

  if (transactions.length === 0) {
    total.innerHTML = "$ 0";
  } else {
    transactions.forEach((transaction) => {
      if (transaction.type_transaction === "expense") {
        expense += transaction.amount;
      } else if (transaction.type_transaction === "income") {
        income += transaction.amount;
      }
    });

    totalTransactions = income - expense;

    total.innerHTML = `$ ${totalTransactions.toLocaleString()}`;
  }
}

function fetchTransactions() {
  axios
    .post("getTransactions.php", {})
    .then(function (response) {
      console.log("Response:", response.data);

      transactionsList.innerHTML = "";

      totalBudget(response.data);

      response.data.forEach(function (transaction) {
        const row1 = document.createElement("tr");
        const row2 = document.createElement("tr");

        row1.innerHTML = `
          <td>${transaction.date_transaction}</td>
          <td>${transaction.type_transaction}</td>
          <td>${transaction.name_transaction}</td>
          <td>$ ${transaction.amount}</td>
          <td>${transaction.note}</td>
          <td>
          <button class="tableBttn edit full-width" onclick="editTransaction(${transaction.id})">
          <img src="${editPath}" width="20px" height="20px"/>
          </button>
          </td>
          <button class="tableBttn delete full-width" onclick="deleteTransaction(${transaction.id})">
          <img src="${deletePath}" width="20px" height="20px"/> 
          </button>
          </td>
        `;

        row2.innerHTML = `
          <td colspan="7"><hr class="colorHr"></td>
        `;

        transactionsList.appendChild(row2);
        transactionsList.appendChild(row1);
      });
    })
    .catch(function (error) {
      console.error("Error details:", error);
      resMsg.innerHTML = "Couldn't Load Transactions";
    });
}

addBttn.addEventListener("click", function () {
  const dateInput = date.value;
  const typeInput = type.value;
  const nameInput = name.value;
  const amountInput = amount.value;
  const noteInput = note.value;

  if (!dateInput || !typeInput || !nameInput || !amountInput || !noteInput) {
    resMsg.innerHTML = "All fields are required!";
    return;
  }
  axios
    .post("storeTransaction.php", {
      date: dateInput,
      type: typeInput,
      name: nameInput,
      amount: amountInput,
      note: noteInput,
    })
    .then(function (response) {
      console.log("Response:", response.data);
      resMsg.innerHTML = "Transaction Saved Successfully!";

      fetchTransactions();
    })
    .catch(function (error) {
      console.error("Error details:", error);
      resMsg.innerHTML = "Error Saving Transaction";
    });
});
*/
