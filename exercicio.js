const alunos = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carla', nota: 7 },
    { nome: 'Davi', nota: 9 },
    { nome: 'Eva', nota: 4 },
];

function getAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = getAprovados(alunos);

console.log('Alunos aprovados:', aprovados);
