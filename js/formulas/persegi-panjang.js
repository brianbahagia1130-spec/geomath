
export const rectangleTargets = [
    { value: "luas", label: "Luas" },
    { value: "keliling", label: "Keliling" },
    { value: "panjang-keliling", label: "Panjang (dari keliling)" },
    { value: "lebar-keliling", label: "Lebar (dari keliling)" },
    { value: "panjang-luas", label: "Panjang (dari luas)" },
    { value: "lebar-luas", label: "Lebar (dari luas)" },
    { value: "diagonal", label: "Diagonal" },
    { value: "panjang-diagonal", label: "Panjang (dari diagonal)" },
    { value: "lebar-diagonal", label: "Lebar (dari diagonal)" }
];

export const rectangleInputs = {
    luas: ["panjang", "lebar"],
    keliling: ["panjang", "lebar"],
    "panjang-keliling": ["keliling", "lebar"],
    "lebar-keliling": ["keliling", "panjang"],
    "panjang-luas": ["luas", "lebar"],
    "lebar-luas": ["luas", "panjang"],
    diagonal: ["panjang", "lebar"],
    "panjang-diagonal": ["diagonal", "lebar"],
    "lebar-diagonal": ["diagonal", "panjang"]
};

export function calculateRectangle(target, v) {
    let value;
    let steps = [];

    switch (target) {
        case "luas":
            value = v.panjang * v.lebar;
            steps = [
                "Rumus: L = p × l",
                `L = ${v.panjang} × ${v.lebar}`,
                `L = ${value}`
            ];
            break;

        case "keliling":
            value = 2 * (v.panjang + v.lebar);
            steps = [
                "Rumus: K = 2 × (p + l)",
                `K = 2 × (${v.panjang} + ${v.lebar})`,
                `K = ${value}`
            ];
            break;

        case "panjang-keliling":
            value = (v.keliling / 2) - v.lebar;
            steps = [
                "Rumus: p = (K ÷ 2) − l",
                `p = (${v.keliling} ÷ 2) − ${v.lebar}`,
                `p = ${value}`
            ];
            break;

        case "lebar-keliling":
            value = (v.keliling / 2) - v.panjang;
            steps = [
                "Rumus: l = (K ÷ 2) − p",
                `l = (${v.keliling} ÷ 2) − ${v.panjang}`,
                `l = ${value}`
            ];
            break;

        case "panjang-luas":
            value = v.luas / v.lebar;
            steps = [
                "Rumus: p = L ÷ l",
                `p = ${v.luas} ÷ ${v.lebar}`,
                `p = ${value}`
            ];
            break;

        case "lebar-luas":
            value = v.luas / v.panjang;
            steps = [
                "Rumus: l = L ÷ p",
                `l = ${v.luas} ÷ ${v.panjang}`,
                `l = ${value}`
            ];
            break;

        case "diagonal":
            value = Math.sqrt(v.panjang ** 2 + v.lebar ** 2);
            steps = [
                "Rumus: d = √(p² + l²)",
                `d = √(${v.panjang}² + ${v.lebar}²)`,
                `d = ${value}`
            ];
            break;

        case "panjang-diagonal":
            value = Math.sqrt(v.diagonal ** 2 - v.lebar ** 2);
            steps = [
                "Rumus: p = √(d² − l²)",
                `p = √(${v.diagonal}² − ${v.lebar}²)`,
                `p = ${value}`
            ];
            break;

        case "lebar-diagonal":
            value = Math.sqrt(v.diagonal ** 2 - v.panjang ** 2);
            steps = [
                "Rumus: l = √(d² − p²)",
                `l = √(${v.diagonal}² − ${v.panjang}²)`,
                `l = ${value}`
            ];
            break;

        default:
            throw new Error("Perhitungan tidak ditemukan.");
    }

    const areaTargets = ["luas"];
    return {
        value,
        unit: target === "luas" ? "cm²" : "cm",
        steps
    };
}
