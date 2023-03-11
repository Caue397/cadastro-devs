function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(name, id, value, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.id = id;
  input.value = value;
  input.placeholder = placeholder;
  return input;
}

let devInfo = [];
const devForm = document.getElementById("devForm");
const btnNewTech = document.getElementById("newTech");
let inputRows = 0;
btnNewTech.addEventListener("click", function (ev) {
  ev.preventDefault();
  const techInputs = document.getElementById("techInputs");

  const newRow = document.createElement("li");
  const indexRow = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + indexRow;
  newRow.className = "inputRow";
  newRow.style.listStyleType = "none";

  const labelTechName = createLabel(
    "Nome da tecnologia: ",
    "techName-" + indexRow
  );
  const inputTechName = createInput("techName-" + indexRow, "techName", null);

  const expLabel = createLabel("Experiência: ");
  const id1 = "expRadio-" + indexRow + ".1";
  const expInput1 = createInput(
    "expRadio-" + indexRow,
    id1,
    "0-2 anos",
    "radio"
  );
  const expLabel1 = createLabel("0-2 anos", id1);
  const id2 = "expRadio-" + indexRow + ".2";
  const expInput2 = createInput(
    "expRadio-" + indexRow,
    id2,
    "3-4 anos",
    "radio"
  );
  const expLabel2 = createLabel("3-4 anos", id2);
  const id3 = "expRadio-" + indexRow + ".3";
  const expInput3 = createInput(
    "expRadio-" + indexRow,
    id3,
    "+5 anos",
    "radio"
  );
  const expLabel3 = createLabel("5+ anos", id3);

  const btnRemoveTechRow = document.createElement("button");
  btnRemoveTechRow.type = "button";
  btnRemoveTechRow.innerText = "Remover";
  btnRemoveTechRow.addEventListener("click", function () {
    techInputs.removeChild(newRow);
  });

  newRow.append(
    labelTechName,
    inputTechName,
    expLabel,
    expInput1,
    expLabel1,
    expInput2,
    expLabel2,
    expInput3,
    expLabel3,
    btnRemoveTechRow
  );
  techInputs.appendChild(newRow);
});

devForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const fullname = devForm.fullname.value;
  const inputRows = document.querySelectorAll(".inputRow");
  let technologies = [];
  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + " input[id='techName']"
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + " input[type='radio']:checked"
    ).value;
    technologies.push({ name: techName, experience: techExp });
  });

  const newDev = { fullname, technologies };
  devInfo.push(newDev);

  alert("Novo dev cadastrado com sucesso!!");

  devForm.fullname.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(newDev);
  console.log(devInfo);
});
