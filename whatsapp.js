document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.createElement('div');
    whatsappButton.id = 'whatsapp-button';

    const img = document.createElement('img');
    // deve ser informado o link de uma expecífica
    img.src = 'https://w7.pngwing.com/pngs/198/625/png-transparent-call-centre-customer-service-computer-icons-call-centre-miscellaneous-face-telephone-call-thumbnail.png';
    img.alt = 'WhatsApp';

    const container = document.createElement('div');
    container.classList.add('atendente');
    container.id = 'atendente';

    const text = document.createElement('div');
    text.id = 'texto';
    // esse texto pode ser personalizado
    text.textContent = 'Olá, eu sou a atendente! Precisa de ajuda?';

    const openButton = document.createElement('button');
    openButton.textContent = 'Iniciar Conversa';
    openButton.addEventListener('click', function() {
        // o numero de telefone precisa do codigo do país e do DDD
        window.open('https://wa.me/5500999999999', '_blank');
    });

    const atendimentoText = document.createElement('div');
    atendimentoText.id = 'atendimento-text';
    atendimentoText.textContent = 'Atendimento';
    atendimentoText.style.writingMode = 'vertical-rl';
    atendimentoText.style.textOrientation = 'mixed';
    atendimentoText.style.fontSize = '15px';
    atendimentoText.style.color = '#fff';
    atendimentoText.style.cursor = 'pointer';
    atendimentoText.style.display = 'none';
    atendimentoText.style.position = 'fixed';
    atendimentoText.style.bottom = '13px';
    atendimentoText.style.right = '2px';
    atendimentoText.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
    atendimentoText.style.zIndex = '9991';
    atendimentoText.style.transform = 'translate(-50%, -50%) rotate(180deg)';
    atendimentoText.addEventListener('click', function() {
        container.style.display = 'flex';
        atendimentoText.style.display = 'none';
        whatsappButton.style.width = '200px';
        container.style.transition = 'transform 0.5s ease-out-in';
        container.style.transform = 'translateX(0%)';
        openButton.style.transition = 'transform 0.5s  ease-out-in';
        openButton.style.transform = 'translateX(0%)';
        whatsappButton.style.transition = 'width 0.5s  ease-out-in';
        whatsappButton.style.width = '200px';
        closeButton.style.cursor = 'pointer';
        setTimeout(function() {
            closeButton.style.display = 'flex';
        }, 500);

    });

    const closeButton = document.createElement('div');
    closeButton.id = 'close-button';
    closeButton.textContent = '✘';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '6px';
    closeButton.style.right = '190px';
    closeButton.style.color = '#fff';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', function() {
        container.style.transition = 'transform 0.5s ease-in-out';
        container.style.transform = 'translateX(150%)';
        openButton.style.transition = 'transform 0.5s ease-in-out';
        openButton.style.transform = 'translateX(150%)';
        whatsappButton.style.transition = 'width 0.5s ease-in-out';
        whatsappButton.style.width = '30px';
        closeButton.style.display = 'none';
        setTimeout(function() {
            atendimentoText.style.display = 'block';
        }, 500);
    });

    container.appendChild(text);
    container.appendChild(img);
    whatsappButton.appendChild(container);
    whatsappButton.appendChild(openButton);
    whatsappButton.appendChild(closeButton);
    document.body.appendChild(whatsappButton);
    document.body.appendChild(atendimentoText);

    const style = document.createElement('style');
    style.textContent = `
#whatsapp-button {
    position: fixed;
    bottom: 20px;
    right: 0;
    padding: 5px;
    border: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-image: linear-gradient(to right, #461f79, #4c698b);
    z-index: 9990;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 140px;
    transition: max-width 0.5s ease-in-out;
    justify-content: center;
}
#whatsapp-button .atendente {
  display: flex;
  margin-top: 7px;
}
#whatsapp-button img {
    width: auto;
    height: 95px;
    transition: transform 0.2s ease;
}

#whatsapp-button #texto {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    width: 110px;
    height: 65px;
    margin-top: 15px;
}

#whatsapp-button button {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
    background: #ffffff;
    color: #1F4E79;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 5px;
    width: 200px;
    cursor: pointer;
    position: relative;
    margin-bottom: 7px;
    margin-inline: 7px;
}
`;
    document.head.appendChild(style);
});