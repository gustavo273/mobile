export const tabelaIMC = [
    {limite: 18.5, classificacao: "magreza"},
    {limite: 24.9, classificacao: "normal"},
    {limite: 29.9, classificacao: "sobrepeso"},
    {limite: 34.9, classificacao: "obesidade grau 1"},
    {limite: 39.9, classificacao: "obesidade grau 2"},
    {limite: 40, classificacao: "obesidade grau 3"},
]

export const calcularIMC = (peso, altura) => {
    return peso / (altura * altura)
}
