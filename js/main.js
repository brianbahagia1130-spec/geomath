
import {
    shapes,
    inputLabels,
    getInputs,
    calculate
} from "./calculator.js";

const shapeSelect = document.getElementById("shape");
const targetSelect = document.getElementById("target");
const inputFields = document.getElementById("inputFields");
const calculatorForm = document.getElementById("calculatorForm");

const resultBox = document.getElementById("result");
const resultValue = document.getElementById("resultValue");
const stepsList = document.getElementById("stepsList");

function hideResult() {
    resultBox.classList.add("hidden");
}

function formatNumber(number) {
    return Number(number.toFixed(6)).toString();
}

// Menampilkan pilihan perhitungan
function updateTargets() {
    const shape = shapeSelect.value;
    const targets = shapes[shape].targets;

    targetSelect.innerHTML = "";

    targets.forEach(target => {
        const option = document.createElement("option");

        option.value = target.value;
        option.textContent = target.label;

        targetSelect.appendChild(option);
    });

    updateInputs();
}

// Menampilkan input sesuai kebutuhan
function updateInputs() {
    const shape = shapeSelect.value;
    const target = targetSelect.value;

    const requiredInputs = getInputs(shape, target);

    inputFields.innerHTML = "";

    requiredInputs.forEach(key => {
        const group = document.createElement("div");
        group.className = "form-group";

        const label = document.createElement("label");
        label.htmlFor = `input-${key}`;
        label.textContent = inputLabels[key];

        const input = document.createElement("input");
        input.type = "number";
        input.id = `input-${key}`;
        input.name = key;
        input.min = "0";
        input.step = "any";
        input.placeholder = `Masukkan ${inputLabels[key]}`;
        input.required = true;

        group.append(label, input);
        inputFields.appendChild(group);
    });

    hideResult();
}

// Menjalankan perhitungan
function handleCalculation(event) {
    event.preventDefault();

    const shape = shapeSelect.value;
    const target = targetSelect.value;

    const requiredInputs = getInputs(shape, target);
    const values = {};

    for (const key of requiredInputs) {
        const input = document.getElementById(`input-${key}`);
        const value = input.value.trim();

        if (value === "" || !Number.isFinite(Number(value)) ||
            Number(value) <= 0) {
            alert("Masukkan angka yang lebih besar dari nol.");
            input.focus();
            return;
        }

        values[key] = Number(value);
    }

    try {
        const result = calculate(shape, target, values);

        displayResult(result);
    } catch (error) {
        alert(error.message);
    }
}

// Menampilkan hasil
function displayResult(result) {
    resultValue.textContent =
        `${formatNumber(result.value)} ${result.unit}`;

    stepsList.innerHTML = "";

    result.steps.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        stepsList.appendChild(li);
    });

    resultBox.classList.remove("hidden");
}

shapeSelect.addEventListener("change", updateTargets);
targetSelect.addEventListener("change", updateInputs);
calculatorForm.addEventListener("submit", handleCalculation);

// Inisialisasi pertama
updateTargets();
