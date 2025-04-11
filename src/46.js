function displayMessages(messages) {
    messages.forEach(message => {
        console.log(`\n${message}`);
    });
}

const messages = [
    "Hello, world!",
    "This is a test message.",
    `Here are some more messages: ${JSON.stringify([...document.querySelector('body').textContent])}.`
];

displayMessages(messages);
