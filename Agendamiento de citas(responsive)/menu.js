function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('active');
    
    // Si el chat se cierra, se limpia el contenido
    if (!chatBox.classList.contains('active')) {
        clearChat();
    }
}

function sendMessage(option) {
    const chatContent = document.getElementById('chat-content');
    
    // Verificar si el mensaje del usuario ya está presente
    const existingUserMessage = Array.from(chatContent.getElementsByClassName('user-message'))
                                    .some(msg => msg.textContent === option);
    
    // Solo añadir mensajes si no existen ya
    if (!existingUserMessage) {
        // Añadir el mensaje del usuario
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = option;
        chatContent.appendChild(userMessage);

        // Respuesta del bot
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';

        switch (option) {
            case 'Horarios':
                botMessage.textContent = 'Nuestro horario es de 8:00 AM a 5:00 PM de lunes a viernes.';
                break;
            case 'Servicios':
                botMessage.textContent = 'Ofrecemos los siguientes servicios: atención al cliente, soporte técnico y asesorías.';
                break;
            case 'Tiempo de respuesta':
                botMessage.textContent = 'Respondemos generalmente en menos de 24 horas.';
                break;
            default:
                botMessage.textContent = 'Lo siento, no entiendo tu solicitud.';
        }

        chatContent.appendChild(botMessage);
        chatContent.scrollTop = chatContent.scrollHeight; // Desplazar hacia abajo automáticamente
    }
}

function clearChat() {
    const chatContent = document.getElementById('chat-content');
    chatContent.innerHTML = '<div class="bot-message">¡Hola! ¿En qué puedo ayudarte?</div>' +
                            '<div class="user-options">' +
                            '<button onclick="sendMessage(\'Horarios\')">Horarios</button>' +
                            '<button onclick="sendMessage(\'Servicios\')">Servicios</button>' +
                            '<button onclick="sendMessage(\'Tiempo de respuesta\')">Tiempo de Respuesta</button>' +
                            '</div>';
}
