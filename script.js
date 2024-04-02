const form = document.getElementById('jobApplicationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const resumeInput = document.getElementById('resume');
const submitBtn = document.getElementById('submitBtn');

// Regular expressions for validation
const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

// Error messages
const errorMessages = {
  name: 'Name must contain only letters',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number (XXX-XXX-XXXX)',
  address: 'Please enter your address',
  resume: 'Please upload a file (pdf, docx) not exceeding 5MB'
};

// Function to validate form fields
function validateForm() {
  let isValid = true;

  // Name validation
  if (!nameRegex.test(nameInput.value.trim())) {
    document.getElementById('nameError').textContent = errorMessages.name;
    isValid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Email validation
  if (!emailRegex.test(emailInput.value.trim())) {
    document.getElementById('emailError').textContent = errorMessages.email;
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Phone validation
  if (!phoneRegex.test(phoneInput.value.trim())) {
    document.getElementById('phoneError').textContent = errorMessages.phone;
    isValid = false;
  } else {
    document.getElementById('phoneError').textContent = '';
  }

  // Address validation
  if (addressInput.value.trim() === '') {
    document.getElementById('addressError').textContent = errorMessages.address;
    isValid = false;
  } else {
    document.getElementById('addressError').textContent = '';
  }

  // Resume validation
  const allowedExtensions = ['pdf', 'docx'];
  const fileSizeLimit = 5 * 1024 * 1024; // 5MB
  if (resumeInput.files.length === 0 || !allowedExtensions.includes(resumeInput.files[0].name.split('.').pop()) || resumeInput.files[0].size > fileSizeLimit) {
    document.getElementById('resumeError').textContent = errorMessages.resume;
    isValid = false;
  } else {
    document.getElementById('resumeError').textContent = '';
  }

  // Enable/disable submit button based on form validity
  submitBtn.disabled = !isValid;

  return isValid;
}

// Real-time validation on input change
form.addEventListener('input', validateForm);

// Form submission handling
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  if (validateForm()) {
    // Form submission logic goes here
    alert('Form submitted successfully!');
    // Reset form after submission
    form.reset();
    submitBtn.disabled = true;
  }
});
