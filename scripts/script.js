const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {

    alert('Agradecemos o contato! Seu pedido de informações foi recebido com sucesso. Entraremos em contato em breve pelo e-mail fornecido.');
    
    formulario.reset();
});