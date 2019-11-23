import { Jokenpo, Hand } from "./jokenpo";
import readline from 'readline';

const jokenpo = new Jokenpo();
const hands: Hand[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chooseHands() {
    rl.question(' \r\n Choose your hand! \r\n 1 - stone \r\n 2 - paper \r\n 3 - scissors \r\n', (answer) => {
        const answerNumber = parseInt(answer, 10);
        if (answerNumber === 1) {
            hands.push('stone');
        }
        if (answerNumber === 2) {
            hands.push('paper');
        }
        if (answerNumber === 3) {
            hands.push('scissors');
        }

        (hands.length < 2)
            ? chooseHands()
            : console.log(" \r\n The Hand winner is " + jokenpo.playAndGetWinnerHand(hands[0], hands[1]).toUpperCase());
    });
}

chooseHands();