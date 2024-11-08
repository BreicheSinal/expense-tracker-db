axios.defaults.baseURL = "http://localhost/expense-tracker-db/BE-EXP/php/";

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
    })
    .catch(function (error) {
      console.error("Error details:", error);
      resMsg.innerHTML = "Error Saving Transaction";
    });
});
