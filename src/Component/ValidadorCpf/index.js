import React, {useState} from "react";
import {Column} from "../Formulario";




function Cpf() {

    const [cpf, setCpf] = useState("");



    function validadorCpf(){
        const split = cpf.split("");
        const num1 = split[0]
        const num2 = split[1]
        const num3 = split[2]
        const num4 = split[3]
        const num5 = split[4]
        const num6 = split[5]
        const num7 = split[6]
        const num8 = split[7]
        const num9 = split[8]
        const num10 = split[9]
        const num11 = split[10]

        if ((num1 == num2)&&(num2 == num3)&&(num3 == num4)&&(num4 == num5)&&(num5 == num6)&&(num6 == num7)&&(num7 == num8)&&(num8 == num9)&&(num9 == num10)&&(num10 == num11)){

            return alert("Cpf Invalido")


        }else {
           const soma1 = (num1 * 10) + (num2 * 9) + (num3 * 8) + (num4 * 7) + (num5 * 6) + (num6 * 5) + (num7 * 4) + (num8 * 3) + (num9 * 2)
            let resto1 = (soma1 * 10) % 11

            if (resto1 == 10) resto1 = 0;


           const soma2 = (num1 * 11) + (num2 * 10) + (num3 * 9) + (num4 * 8) + (num5 * 7) + (num6 * 6) + (num7 * 5) + (num8 * 4) + (num9 * 3) + (num10 * 2)

           let resto2 = (soma2 * 10) % 11

            if (resto2 == 10){
                resto2 = 0
            }

            if ((resto1 == num10) && (resto2 == num11)){
                return alert("Cpf Valido")
            }else{
                return alert("Cpf Invalido")
            }


        }

    }





    return (
        <Column mobile='6' tablet='12' desktop='6'>
            <label> Cpf </ label>
            <input onChange={e => setCpf(e.target.value)} onBlur={e => validadorCpf(e.target.value)}
                   type="text" value={cpf} name = "cpf" id = "cpf" placeholder = "Digite o seu cpf"
            maxLength={11} minLength={11}/>
        </Column>
    )

}
export default Cpf;
