addBttn.addEventListener("click", function () {
  const dateInput = date.value;
  const typeInput = type.value;
  const nameInput = name.value;
  const amountInput = amount.value;
  const noteInput = note.value;

  axios
    .post("BE-EXP/php/storeTransaction.php", {
      date: dateInput,
      type: typeInput,
      name: nameInput,
      amount: amountInput,
      note: noteInput,
    })
    .then(function (response) {
      resMsg.innerHTML = "Transaction Saved Successfully!";
    })
    .catch(function(error){
        resMsg.innerHTML = "Error Saving Transaction";

    })
});
