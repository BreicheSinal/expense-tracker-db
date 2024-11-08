axios.defaults.baseURL = "http://localhost/expense-tracker-db/BE-EXP/php/";

addBttn.addEventListener("click", function () {
  const dateInput = date.value;
  const typeInput = type.value;
  const nameInput = name.value;
  const amountInput = amount.value;
  const noteInput = note.value;
  const editPath = "../assets/icons/edit.png";
  const deletePath = "../assets/icons/delete.png";

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

      const row1 = document.createElement("tr");
      const row2 = document.createElement("tr");

      row1.innerHTML = `
        <td>${response.data.date}</td>
        <td>${response.data.type}</td>
        <td>${response.data.name}</td>
        <td>$ ${response.data.amount}</td>
        <td>${response.data.note}</td>
        <td><button class="tableBttn edit full-width""> <img src="${editPath}" width="20px" height="20px"/> </button></td>
        <td><button class="tableBttn delete full-width"> <img src="${deletePath}" width="20px" height="20px"/> </button></td>
      `;

      row2.innerHTML = `
        <td colspan="7"><hr class="colorHr"></td>
      `;

      transactionsList.appendChild(row2);
      transactionsList.appendChild(row1);
    })
    .catch(function (error) {
      console.error("Error details:", error);
      resMsg.innerHTML = "Error Saving Transaction";
    });
});
