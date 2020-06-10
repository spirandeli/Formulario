import {cep,bairro,estado,rua,cidade} from "../Cep"
import {nome, dataNascimento, complemento, celular, residencial} from "./App"
import {cpfNumbers} from "../ValidadorCpf"

function Resultado () {
    return alert(cep,bairro,estado,rua,nome,dataNascimento,complemento,celular,residencial,cpfNumbers,cidade)
}