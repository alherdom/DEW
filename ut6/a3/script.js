document.addEventListener("DOMContentLoaded", function () {
  // Create the form
  var form = document.createElement("form");
  form.setAttribute("id", "myForm");

  // Create and add fields to the form
  var labelSubject = document.createElement("label");
  labelSubject.textContent = "Asunto: ";
  var inputSubject = document.createElement("input");
  inputSubject.setAttribute("type", "text");
  inputSubject.setAttribute("name", "subject");
  inputSubject.setAttribute("required", "required");
  form.appendChild(labelSubject);
  form.appendChild(inputSubject);
  form.appendChild(document.createElement("br"));

  // Create and add fields to the form
  var labelEmail = document.createElement("label");
  labelEmail.textContent = "Email: ";
  var inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("required", "required");
  form.appendChild(labelEmail);
  form.appendChild(inputEmail);
  form.appendChild(document.createElement("br"));

  // Create and add fields to the form
  var labelName = document.createElement("label");
  labelName.textContent = "Nombre: ";
  var inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("required", "required");
  form.appendChild(labelName);
  form.appendChild(inputName);
  form.appendChild(document.createElement("br"));

  // Create and add fields to the form
  var labelLastName = document.createElement("label");
  labelLastName.textContent = "Apellido: ";
  var inputLastName = document.createElement("input");
  inputLastName.setAttribute("type", "text");
  inputLastName.setAttribute("name", "lastName");
  inputLastName.setAttribute("required", "required");
  form.appendChild(labelLastName);
  form.appendChild(inputLastName);
  form.appendChild(document.createElement("br"));

  // Create and add fields to the form
  var labelMessage = document.createElement("label");
  labelMessage.textContent = "Mensaje: ";
  var textareaMessage = document.createElement("textarea");
  textareaMessage.setAttribute("name", "message");
  textareaMessage.setAttribute("required", "required");
  form.appendChild(labelMessage);
  form.appendChild(textareaMessage);
  form.appendChild(document.createElement("br"));

  // Create a submit button
  var submitButton = document.createElement("input");
  submitButton.setAttribute("formaction", "https://www.bing.com");
  submitButton.setAttribute("id", "myButton");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Enviar");

  // Add the button to the form
  form.appendChild(submitButton);

  // Add the form to the body of the document
  document.body.appendChild(form);
});
