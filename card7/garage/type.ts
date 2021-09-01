class Player {
  name: string = 'dummy';
  cardList: any = {};
  isWinner: boolean = false;
  lastCard: Card = null;
  isSure: boolean = false;
  points: number = 0;

  constructor(name) {
    this.name = name;
    this.clean();
  }
  getName() { return this.name; }
  setName(name) { return this.name = name; }
  getCardList() { return this.cardList; }
  setCardList(cardList) { return this.cardList = cardList; }
  getIsWinner() { return this.isWinner; }
  setIsWinner(isWinner) { return this.isWinner = isWinner; }
  getLastCard() { return this.lastCard; }
  setLastCard(lastCard) { return this.lastCard = lastCard; }
  getIsSure() { return this.isSure; }
  setIsSure(isSure) { return this.isSure = isSure; }
  getPoints() { return this.points; }
  addPoints(points) { return this.points = this.points + points; }
  clean() {
    this.cardList =  {spades: [], hearts: [], clubs: [], diams: [] };
    this.isWinner = false; this.lastCard = null; this.isSure = false;
  }
}

class Card {
  type: string = null;
  number: number = null;
  readonly typeSymbol: any = { spades: '♠', hearts: '♥', clubs: '♣', diams: '♦' };
  readonly numberSymbol: string[] = ["X", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  constructor(type?: string, number?: number) {
    this.type = type;
    this.number = number;
  }

  getType() {
    return this.type;
  }

  getNumber() {
    return this.number;
  }

  getTypeSymbol() {
    return this.typeSymbol[this.type];
  }

  getNumberSymbol() {
    return this.numberSymbol[this.number];
  }
}

class Utils {
  static types: any = { spades: '♠', hearts: '♥', clubs: '♣', diams: '♦' };
  static numbers: string[] = ["X", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  static priorities: number[] = [ 13, 1, 12, 2, 11, 3, 10, 4, 9, 5, 8, 6, 7];
  constructor() {
  }

  static getTypes() : any {
      return Utils.types;
  };

  static getNumbers() : string[] {
      return Utils.numbers;
  };

  static getPriority() : number[] {
      return Utils.priorities;
  };
}
