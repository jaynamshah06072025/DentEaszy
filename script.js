function validateForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  if (name === "" || phone === "") {
    alert("Please fill in all fields.");
    return false;
  }
  alert("Appointment booked successfully!");
  return true;
}
