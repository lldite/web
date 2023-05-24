/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era.
 * Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[]
  constructor(scores: number[]) {
    this.scores = scores
  }

  get latest() {
    return this.scores.slice(0).reverse()[0]
  }

  get personalBest() {
    if (this.scores.length == 1) return this.scores[0]
    else return this.scores.reduce((a, b) => (a >= b ? a : b))
  }

  get personalTopThree() {
    let sorted = this.scores.slice(0).sort((a, b) => a - b)
    if (sorted.length > 3) return sorted.slice(sorted.length - 3).reverse()
    else return sorted.reverse()
  }
}

export { HighScores }
