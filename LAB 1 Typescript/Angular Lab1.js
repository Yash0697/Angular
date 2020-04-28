var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mobile = /** @class */ (function () {
    function Mobile(id, name, cost) {
        this.mobileId = id;
        this.mobileName = name;
        this.mobileCost = cost;
    }
    return Mobile;
}());
var BasicPhone = /** @class */ (function (_super) {
    __extends(BasicPhone, _super);
    function BasicPhone(id, name, cost, mobileType) {
        var _this = _super.call(this, id, name, cost) || this;
        _this.mobileType = mobileType;
        return _this;
    }
    return BasicPhone;
}(Mobile));
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(id, name, cost, mobileType) {
        var _this = _super.call(this, id, name, cost) || this;
        _this.mobileType = mobileType;
        return _this;
    }
    return SmartPhone;
}(Mobile));
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.displayDetails = function () {
        var mobObj1 = new BasicPhone(1600, "Samsung Guru", 1200, "Keypad");
        var mobObj2 = new SmartPhone(1220, "Samsung Galaxy S10", 70000, "Smartphone");
        console.log("Mobile 1 Details: ");
        console.log("Mobile id: " + mobObj1.mobileId);
        console.log("Mobile name: " + mobObj1.mobileName);
        console.log("Mobile Cost: " + mobObj1.mobileCost);
        console.log("Mobile Type: " + mobObj1.mobileType);
        console.log("\nMobile 2 Details: ");
        console.log("Mobile id: " + mobObj2.mobileId);
        console.log("Mobile name: " + mobObj2.mobileName);
        console.log("Mobile Cost: " + mobObj2.mobileCost);
        console.log("Mobile Type: " + mobObj2.mobileType);
    };
    return Test;
}());
var testObj = new Test();
testObj.displayDetails();
