function showMessage(language) {
  switch (language) {
    case "spanish":
      console.log(`The languages choosed is ${language}`);
      return alert("Bienvenido a mi página web");
    case "german":
      console.log(`The languages choosed is ${language}`);
      return alert("Willkommen auf meiner Website");
    case "french":
      console.log(`The languages choosed is ${language}`);
      return alert("Bienvenue sur mon site web");
  }
}
