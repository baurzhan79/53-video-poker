const generateNumber = (minInclusive, maxInclusive) => {
    const number = Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive;
    return number;
}

class CardDeck {
    constructor() {
        this.suits = ['H', 'D', 'C', 'S'];
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.deck = [];

        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                this.deck.push({ suit, rank });
            });
        });
    }

    getCard() {
        const randomNumber = generateNumber(0, this.deck.length - 1);
        const arrayOfDeletedCard = this.deck.splice(randomNumber, 1);
        return arrayOfDeletedCard[0];
    }

    getCards(howMany) {
        const isNull = howMany === null;
        const isUndefined = howMany === undefined;
        const isString = isNaN(parseInt(howMany));
        let cardsCount = 0;
        if (!isNull && !isUndefined && !isString) {
            cardsCount = parseInt(howMany);
        }

        const cards = [];
        for (let i = 0; i < cardsCount; i++) {
            const randomCard = this.getCard();
            cards.push(randomCard);
        }
        return cards;
    }
}

export default CardDeck;