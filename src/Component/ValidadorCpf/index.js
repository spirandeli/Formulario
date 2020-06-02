import React, {useState} from "react";
import {Column} from "../Formulario";




function validadorCpf(serCpf) {

    let Soma;
    let Resto;
    Soma = 0;
    let i;
    if (serCpf == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(serCpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    i = 0;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(serCpf.substring(9, 10)) ) return false;

    i = 0;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(serCpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(serCpf.substring(10, 11) ) ) return false;
    return true;

    const [cpf, setCpf] = useState("");

    return (
        <Column mobile='6' tablet='12' desktop='6'>
            <label> Cpf </ label>
            <input onChange={e => setCpf(e.target.value)} onBlur={e => validadorCpf(e.target.value)} type="number" value={cpf} name = "cpf" id = "cpf" placeholder = "Digite o seu cpf"/>
        </Column>
    )

}
export default validadorCpf;
