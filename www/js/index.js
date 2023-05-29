function toggleLanguage() {
  const langInput = document.getElementById("language");
  window.location.href = langInput.checked ? "/fr" : "/en";
  return null;
}

function renderCurrentYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
    return null;
}
