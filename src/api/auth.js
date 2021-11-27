import axios from "axios"

export function cadastrar(aluno) {
    return axios({
        method: "POST",
        url: "http://localhost:8393/alunos",
        data: aluno,
    })
}

export function login(login_data) {
    return axios({
        method: "POST",
        url: "http://localhost:8393/alunos/signin",
        data: login_data,
    })
}