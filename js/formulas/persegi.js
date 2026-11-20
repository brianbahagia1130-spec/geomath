
export const squareTargets = [
    { value: "luas", label: "Luas" },
    { value: "keliling", label: "Keliling" },
    { value: "sisi-luas", label: "Panjang sisi (dari luas)" },
    { value: "sisi-keliling", label: "Panjang sisi (dari keliling)" },
    { value: "sisi-diagonal", label: "Panjang sisi (dari diagonal)" },
    { value: "diagonal", label: "Diagonal" }
];

export const squareInputs = {
    luas: ["sisi"],
    keliling: ["sisi"],
    "sisi-luas": ["luas"],
    "sisi-keliling": ["keliling"],
    "sisi-diagonal": ["diagonal"],
    diagonal: ["sisi"]
};

export function calculateSquare(target, v) {
    let value;
    let steps = [];

    switch (target) {
        case "luas":
            value = v.sisi ** 2;
            steps = [
                "Rumus: L = s × s",
                `L = ${v.sisi} × ${v.sisi}`,
                `L = ${value}`
            ];
            break;

        case "keliling":
            value = 4 * v.sisi;
            steps = [
                "Rumus: K = 4 × s",
                `K = 4 × ${v.sisi}`,
                `K = ${value}`
            ];
            break;

        case "sisi-luas":
            value = Math.sqrt(v.luas);
            steps = [
                "Rumus: s = √L",
                `s = √${v.luas}`,
                `s = ${value}`
            ];
            break;

        case "sisi-keliling":
            value = v.keliling / 4;
            steps = [
                "Rumus: s = K ÷ 4",
                `s = ${v.keliling} ÷ 4`,
                `s = ${value}`
            ];
            break;

        case "sisi-diagonal":
            value = v.diagonal / Math.sqrt(2);
            steps = [
                "Rumus: s = d ÷ √2",
                `s = ${v.diagonal} ÷ √2`,
                `s ≈ ${value}`
            ];
            break;

        case "diagonal":
            value = v.sisi * Math.sqrt(2);
            steps = [
                "Rumus: d = s × √2",
                `d = ${v.sisi} × √2`,
                `d ≈ ${value}`
            ];
            break;

        default:
            throw new Error("Perhitungan tidak ditemukan.");
    }

    return {
        value,
        unit: ["luas", "sisi-luas"].includes(target)
            ? (target === "luas" ? "cm²" : "cm")
            : target === "keliling" || target === "sisi-keliling" ||
              target === "sisi-diagonal" || target === "diagonal"
                ? "cm"
                : "cm",
        steps
    };
}
