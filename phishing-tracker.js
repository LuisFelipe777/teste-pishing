const TRACKING_URL = 'https://opiceblum.app.n8n.cloud/webhook/fc870a18-719e-4ad1-84f9-f503995fd4a4'; 
const TRAINING_URL = 'google.com';

document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        
        loginForm.addEventListener('submit', function(event) {
            console.log("teste")
            // 1. IMPEDE O ENVIO REAL DO FORMULÁRIO
            event.preventDefault(); 
            
            // 2. CAPTURA OS DADOS DIGITADOS
            const emailDigitado = document.getElementById('emailInput').value;
            const senhaDigitada = document.getElementById('passwordInput').value;
            
            // Prepara os dados para envio
            const dadosRastreio = {
                // Importante: Rastreie a identidade do usuário.
                // Idealmente, use um ID/token de rastreamento único 
                // que você incluiu no link do e-mail (via parâmetro URL).
                alvo_email: emailDigitado,
                
                // Você pode enviar a senha DUMMY se quiser, 
                // mas é MÁ PRÁTICA. O ideal é rastrear apenas o evento.
                evento: 'Tentativa_de_Login_Simulado',
                timestamp: new Date().toISOString()
            };
            
            // 3. ENVIA OS DADOS PARA O POWER AUTOMATE (OU OUTRO BACKEND)
            // Usamos fetch para fazer uma requisição assíncrona
            fetch(TRACKING_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosRastreio)
            })
            .then(response => {
                console.log('Rastreamento de submissão enviado com sucesso.');
                // 4. REDIRECIONA APÓS TENTATIVA DE RASTREIO
                // O redirecionamento acontece no 'finally' para garantir
                // que o usuário não fique esperando.
            })
            .catch(error => {
                console.error('Erro ao enviar dados de rastreamento:', error);
                // Mesmo com erro de rastreamento, o usuário deve ser redirecionado.
            })
            .finally(() => {
                // 4. REDIRECIONA PARA PÁGINA DE TREINAMENTO/ALERTA
                alert("Sessão expirada. Redirecionando para a página inicial...");
                window.location.href = TRAINING_URL;
            });
        });
    }
});