
import {
    squareTargets,
    squareInputs,
    calculateSquare
} from "./formulas/persegi.js";

import {
    rectangleTargets,
    rectangleInputs,
    calculateRectangle
} from "./formulas/persegi-panjang.js";

export const shapes = {
    persegi: {
        targets: squareTargets,
        inputs: squareInputs,
        calculate: calculateSquare
    },

    "persegi-panjang": {
        targets: rectangleTargets,
        inputs: rectangleInputs,
        calculate: calculateRectangle
    }
};

export const inputLabels = {
    sisi: "Panjang sisi (cm)",
    panjang: "Panjang (cm)",
    lebar: "Lebar (cm)",
    luas: "Luas (cm²)",
    keliling: "Keliling (cm)",
    diagonal: "Diagonal (cm)"
};

export function getInputs(shape, target) {
    return shapes[shape].inputs[target];
}

export function calculate(shape, target, values) {
    const result = shapes[shape].calculate(target, values);

    if (!Number.isFinite(result.value) || result.value <= 0) {
        throw new Error(
            "Data yang dimasukkan tidak menghasilkan ukuran yang valid."
        );
    }

    return result;
}
