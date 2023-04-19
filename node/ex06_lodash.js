const _ = require('lodash')

const alunos = [{
    nome: 'Joao',
    nota: 7.6
},
{
    nome: 'Maria',
    nota: 8.1
},
{
    nome: 'Pedro',
    nota: 9.5
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)