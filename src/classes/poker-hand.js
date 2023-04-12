class PokerHand {
    cards = []
    ranksCount = {}
    suitsCount = {}

    constructor(cards, arrOfSuits, arrOfRanks) {
        if (cards !== null && cards !== undefined) {
            this.cards = cards;
        }
        else console.log("Cards are not defined");

        this.arrOfSuits = arrOfSuits;
        this.arrOfRanks = arrOfRanks;
    }

    getRanksCount() {
        this.arrOfRanks.forEach(rank => {
            this.ranksCount[rank] = 0;
        })

        this.cards.forEach(card => {
            this.ranksCount[card.rank]++;
        });
    }

    getSuitsCount() {
        this.arrOfSuits.forEach(suit => {
            this.suitsCount[suit] = 0;
        })

        this.cards.forEach(card => {
            this.suitsCount[card.suit]++;
        });
    }

    hasOnePair() {
        let result = [];

        const ranks = Object.keys(this.ranksCount);
        ranks.forEach(rank => {
            const rankCount = this.ranksCount[rank];
            if (rankCount === 2) {
                result.push(rank);
            }
        });

        if (result.length === 1) return {
            status: true,
            rank: result[0]
        };
        else return { status: false }
    }

    hasTwoPairs() {
        let result = [];

        const ranks = Object.keys(this.ranksCount);
        ranks.forEach(rank => {
            const rankCount = this.ranksCount[rank];
            if (rankCount === 2) {
                result.push(rank);
            }
        });

        if (result.length === 2) return {
            status: true,
            ranks: `${result[0]}, ${result[1]}`
        };
        else return { status: false }
    }

    hasThreeOfAKind() {
        let result = [];

        const ranks = Object.keys(this.ranksCount);
        ranks.forEach(rank => {
            const rankCount = this.ranksCount[rank];
            if (rankCount === 3) {
                result.push(rank);
            }
        });

        if (result.length === 1) return {
            status: true,
            rank: result[0]
        };
        else return { status: false }
    }

    hasFlush() {
        let result = [];

        const suits = Object.keys(this.suitsCount);
        suits.forEach(suit => {
            const suitCount = this.suitsCount[suit];
            if (suitCount === 5) {
                result.push(suit);
            }
        });

        if (result.length === 1) return {
            status: true,
            suit: result[0]
        };
        else return { status: false }
    }

    getOutcome() {
        this.getRanksCount();
        this.getSuitsCount();

        const isFlush = this.hasFlush();
        if (isFlush.status) {
            // Флэш (flush): пять карт одной масти, например: К♠ В♠ 8♠ 4♠ 3♠
            console.log(`Congratulations! You have Flush. Suit "${isFlush.suit}"`);
            return;
        }

        const isThreeOfAKind = this.hasThreeOfAKind();
        if (isThreeOfAKind.status) {
            // три карты одного достоинства, например: 7♣ 7♥ 7♠
            console.log(`Congratulations! You have three of a kind. Rank "${isThreeOfAKind.rank}"`);
            return;
        }

        const isTwoPairs = this.hasTwoPairs();
        if (isTwoPairs.status) {
            // две пары карт, например: 8♣ 8♠ 4♥ 4♣
            console.log(`Congratulations! You have two pairs. Ranks "${isTwoPairs.ranks}"`);
            return;
        }

        const isOnePair = this.hasOnePair();
        if (isOnePair.status) {
            // две карты одного достоинства, например: 9♥ 9♠
            console.log(`Congratulations! You have one pair. Rank "${isOnePair.rank}"`);
            return;
        }

        // нет выигрышных комбинаций
        console.log("Unfortunately, you didn't win");
    }
}

export default PokerHand;