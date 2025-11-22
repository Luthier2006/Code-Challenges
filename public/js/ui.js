function getQueryParam(name) {
  return new URLSearchParams(location.search).get(name);
}

function setText(id, text) {
  document.getElementById(id).textContent = text;
}

function setHTML(id, html) {
  document.getElementById(id).innerHTML = html;
}

function appendHTML(id, html) {
  document.getElementById(id).innerHTML += html;
}

function getInput(id) {
  return document.getElementById(id).value;
}
