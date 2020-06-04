import React from "react";

function validaForm(frm) {
    /*
    o parâmetro frm desta função significa: this.form,
    pois a chamada da função - validaForm(this) foi
    definida na tag form.
    */
    //Verifica se o campo nome foi preenchido e
    //contém no mínimo três caracteres.
    if(frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 3) {
    //É mostrado um alerta, caso o campo esteja vazio.
    alert("Por favor, indique o seu nome.");
    //Foi definido um focus no campo.
    frm.nome.focus();
    //o form não é enviado.
    return false;
}

}

export default validaForm;