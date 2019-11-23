import { Jokenpo } from './jokenpo'

describe('jokenpo', () => {

  let _sut: Jokenpo;
  beforeAll(() => _sut = new Jokenpo());

  it('stone must beats scissors', () => {
    let result = _sut.playAndGetWinnerHand('stone', 'scissors');
    expect(result).toBe('stone');
  });

  it('scissors must bets paper', () => {
    const result = _sut.playAndGetWinnerHand('scissors', 'paper');

    expect(result).toBe('scissors');
  })

  it('paper must bets stone', () => {
    const result = _sut.playAndGetWinnerHand('stone', 'paper');

    expect(result).toBe('paper');
  })

  it('paper must bets paper', () => {
    const result = _sut.playAndGetWinnerHand('paper', 'paper');

    expect(result).toBe('paper');
  })

  it('scissors must bets scissors', () => {
    const result = _sut.playAndGetWinnerHand('scissors', 'scissors');

    expect(result).toBe('scissors');
  })

  it('stone must bets stone', () => {
    const result = _sut.playAndGetWinnerHand('stone', 'stone');

    expect(result).toBe('stone');
  })

});
