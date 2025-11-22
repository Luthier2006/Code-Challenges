function getCode() {
  return document.getElementById("code").value;
}

function setCode(text) {
  document.getElementById("code").value = text;
}

function loadTemplateFunction(argsCount) {
  setCode(`function solve(${Array(argsCount).fill("a").map((x,i)=>"arg"+i).join(", ")}) {
  // escreva seu código aqui
}`);
}
