var Player = /** @class */ (function () {
    function Player(name) {
        this.cardList = {};
        this.isWinner = false;
        this.lastCard = null;
        this.isSure = false;
        this.points = 0;
        this.name = name;
        this.clean();
    }
    Player.prototype.getName = function () { return this.name; };
    Player.prototype.setName = function (name) { return this.name = name; };
    Player.prototype.getCardList = function () { return this.cardList; };
    Player.prototype.setCardList = function (cardList) { return this.cardList = cardList; };
    Player.prototype.getIsWinner = function () { return this.isWinner; };
    Player.prototype.setIsWinner = function (isWinner) { return this.isWinner = isWinner; };
    Player.prototype.getLastCard = function () { return this.lastCard; };
    Player.prototype.setLastCard = function (lastCard) { return this.lastCard = lastCard; };
    Player.prototype.getIsSure = function () { return this.isSure; };
    Player.prototype.setIsSure = function (isSure) { return this.isSure = isSure; };
    Player.prototype.getPoints = function () { return this.points; };
    Player.prototype.addPoints = function (points) { return this.points = this.points + points; };
    Player.prototype.clean = function () {
        this.cardList = { spades: [], hearts: [], clubs: [], diams: [] };
        this.isWinner = false;
        this.lastCard = null;
        this.isSure = false;
    };
    return Player;
}());
var Card = /** @class */ (function () {
    function Card(type, number) {
        this.type = null;
        this.number = null;
        this.typeSymbol = { spades: '♠', hearts: '♥', clubs: '♣', diams: '♦' };
        this.numberSymbol = ["X", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.type = type;
        this.number = number;
    }
    Card.prototype.getType = function () {
        return this.type;
    };
    Card.prototype.getNumber = function () {
        return this.number;
    };
    Card.prototype.getTypeSymbol = function () {
        return this.typeSymbol[this.type];
    };
    Card.prototype.getNumberSymbol = function () {
        return this.numberSymbol[this.number];
    };
    return Card;
}());
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getTypes = function () {
        return Utils.types;
    };
    ;
    Utils.getNumbers = function () {
        return Utils.numbers;
    };
    ;
    Utils.getPriority = function () {
        return Utils.priorities;
    };
    ;
    Utils.types = { spades: '♠', hearts: '♥', clubs: '♣', diams: '♦' };
    Utils.numbers = ["X", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    Utils.priorities = [13, 1, 12, 2, 11, 3, 10, 4, 9, 5, 8, 6, 7];
    return Utils;
}());
