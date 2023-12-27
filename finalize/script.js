document.addEventListener('DOMContentLoaded', function() {
    flatpickr('#date', {
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      minDate: 'today',
      defaultDate: 'today',
    });
  });
  
  function submitForm() {
    var cafeName = document.getElementById('cafeName').value;
    var location = document.getElementById('location').value;
    var date = document.getElementById('date').value;
  
    // Send data to Google Apps Script for form submission
    google.script.run.withSuccessHandler(function(response) {
      // Handle the success response if needed
      alert(response);
    }).doPost({
      cafeName: cafeName,
      location: location,
      date: date,
    });
  
    // Inform the user that the form has been submitted
    alert("Form submitted successfully!");
  }
  