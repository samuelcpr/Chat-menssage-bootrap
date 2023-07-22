// Array para armazenar as mensagens do chat
const mensagens = [];

// Função para exibir as mensagens no chat
function exibirMensagens() {
  const chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML = "";

  for (const mensagem of mensagens) {
    const mensagemElement = document.createElement("p");
    mensagemElement.textContent = mensagem;
    chatMessages.appendChild(mensagemElement);
  }
}

// Função para enviar uma mensagem ao chat
function enviarMensagem() {
  const mensagemInput = document.getElementById("mensagem");
  const mensagem = mensagemInput.value.trim();

  if (mensagem !== "") {
    const usuario = "Usuário"; // Defina o nome do usuário ou use algum método para capturar o nome do usuário

    const mensagemCompleta = `${usuario}: ${mensagem}`;
    mensagens.push(mensagemCompleta);

    mensagemInput.value = "";
    exibirMensagens();
  }
}

// Exibe as mensagens iniciais
exibirMensagens();
