document.addEventListener("DOMContentLoaded", function () {
  // Function to create form fields
  function createFormField(labelText, inputType, inputName, isRequired) {
    var label = document.createElement("label");
    label.textContent = labelText + ": ";

    var input = document.createElement("input");
    input.setAttribute("type", inputType);
    input.setAttribute("name", inputName);
    if (isRequired) {
      input.setAttribute("required", "required");
    }

    return { label, input };
  }

  // Create the form
  var form = document.createElement("form");
  form.setAttribute("id", "myForm");

  // Define form fields
  var fields = [
    { label: "Asunto", name: "subject", type: "text", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Nombre", name: "name", type: "text", required: true },
    { label: "Apellido", name: "lastName", type: "text", required: true },
  ];

  // Create and add fields to the form
  fields.forEach(function (field) {
    var { label, input } = createFormField(
      field.label,
      field.type,
      field.name,
      field.required
    );
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
  });

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
