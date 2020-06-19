function validacao () {
    if(document.form.nome.value=="") {
        alert("Por favor, preencha o campo nome.");
        document.form.nome.focus();
        return false;
    }

    if(document.form.sobrenome.value=="") {
        alert("Por favor, preencha o campo sobrenome.");
        document.form.sobrenome.focus();
        return false;
    }

    if(document.form.email.value=="" || document.form.email.value.indexOf('@')== -1 || document.form.email.value.indexOf('.')== -1 ) {
        alert("Por favor, digite um endereço de e-mail válido");
        document.form.email.focus();
        return false;
    }

    if(document.form.mensagem.value.length < 20) {
        alert("A mensagem deve conter no mínimo 20 caracteres.");
        document.form.mensagem.focus();
        return false;
    }
}