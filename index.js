const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
    }
return gifts
}

wrapGifts(gifts);

function writeCards(name, event) {
    const messages = []
        for (let i = 0; i < name.length; i++) {
            messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        }
    return messages
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(y) {
    while (y >= 0) {
        console.log(y--)
    }
}

countDown(10);