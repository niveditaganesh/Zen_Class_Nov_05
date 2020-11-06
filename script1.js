var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var list_of_pets = [], request_of_pets = [], a = [], result = {};
var AvailablePets = /** @class */ (function () {
    function AvailablePets(type) {
        this.type = type;
    }
    AvailablePets.prototype.insert_pet = function (petNo, type, color, age, history) {
        this.petNo = petNo;
        this.type = type;
        this.color = color;
        this.age = age;
        this.history = history;
        return { "petNo": petNo, "type": type, "color": color, "age": age, "history": history };
    };
    return AvailablePets;
}());
var RequestPets = /** @class */ (function (_super) {
    __extends(RequestPets, _super);
    function RequestPets(request) {
        var _this = _super.call(this, request.type) || this;
        _this.age = request.age;
        return _this;
    }
    RequestPets.prototype.insert_request = function (id, type, age, color, fur, pattern, history) {
        return { "id": id, "type": type, "age": age, "color": color, "fur": fur, "pattern": pattern, "history": history };
    };
    RequestPets.prototype.find_available = function () {
        for (var i = 0; i < list_of_pets.length; i++) {
            for (var j = 0; j < request_of_pets.length; j++) {
                if ((list_of_pets[i].type == request_of_pets[j].type) && (list_of_pets[i].age == request_of_pets[j].age) && (list_of_pets[i].color == request_of_pets[j].color) && (list_of_pets[i].history == request_of_pets[j].history)) {
                    a.push(request_of_pets[j].id);
                }
            }
        }
        return "These requests are available: " + a;
    };
    RequestPets.prototype.count_type = function () {
        for (var i = 0; i < list_of_pets.length; i++) {
            if (result[list_of_pets[i].type] === undefined) {
                result[list_of_pets[i].type] = 0;
            }
            result[list_of_pets[i].type]++;
        }
        return result;
    };
    return RequestPets;
}(AvailablePets));
var req = new RequestPets({
    type: "Dog", age: 8
});
list_of_pets.push(req.insert_pet(1548, 'dog', 'black', 1, 'no history'), req.insert_pet(2584, 'cat', 'black', 9, 'no history'), req.insert_pet(1110, 'fish', 'black', 1, 'no history'), req.insert_pet(4110, 'fish', 'gold', 1, 'no history'), req.insert_pet(110, 'parrot', 'green', 1, 'no history'), req.insert_pet(2548, 'dog', 'black', 1, 'no history'), req.insert_pet(148, 'dog', 'brown', 2, 'no history'));
request_of_pets.push(req.insert_request(111, 'cat', 9, 'black', true, false, 'no history'), req.insert_request(112, 'dog', 1, 'white', false, true, 'no history'), req.insert_request(113, 'fish', 1, 'gold', false, false, 'no history'), req.insert_request(114, 'parrot', 4, 'multicolor', false, false, 'no history'));
console.log(req.find_available());
console.log(req.count_type());
