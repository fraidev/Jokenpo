export class Jokenpo {

    private hands: Hand[] = [];

    public playAndGetWinnerHand(handPlayer1: Hand, handPlayer2: Hand): Hand {

        if (handPlayer1 === handPlayer2) {
            return handPlayer1;
        }

        this.hands = [handPlayer1, handPlayer2];

        if (this.containsHands('paper', 'stone')) {
            return 'paper';
        }

        if (this.containsHands('scissors', 'paper')) {
            return 'scissors';
        }

        return 'stone';
    }

    private containsHands(handPlayer1: Hand, handPlayer2: Hand): boolean {
        return this.hands.some(h => h === handPlayer1) && this.hands.some(h => h === handPlayer2);
    }
}

type Hand = 'stone' | 'scissors' | 'paper';