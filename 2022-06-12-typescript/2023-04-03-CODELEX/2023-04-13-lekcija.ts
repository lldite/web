// Tic tac toe tests
import { Game } from "./Game"

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game()

    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ])
    expect(game.getTurn()).toBe("X")
    expect(game.getWinner()).toBe("-")
    expect(game.isTie()).toBe(false)
  })

  it("should start with blank state", () => {
    const game = new Game()

    game.onClick(0)
    expect(game.getCells()).toEqual([
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ])
    //expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-")
    expect(game.isTie()).toBe(false)
  })
})
