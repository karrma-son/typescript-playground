var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseNotification = /** @class */ (function () {
    function BaseNotification(recipient, message, priority) {
        this.recipient = recipient;
        this.message = message;
        this.priority = priority;
    }
    BaseNotification.prototype.send = function (arg1) {
        if (typeof arg1 === 'number') {
            var priorityText = arg1;
            return ("[".concat(priorityText, "] Sending \"").concat(this.message, "\" to ").concat(this.recipient));
        }
        return ("Sending \"".concat(this.message, "\" to ").concat(this.recipient));
    };
    return BaseNotification;
}());
var EmailNotification = /** @class */ (function (_super) {
    __extends(EmailNotification, _super);
    function EmailNotification(recipient, message, emailAddress) {
        var _this = _super.call(this, recipient, message) || this;
        _this.emailAddress = emailAddress;
        return _this;
    }
    EmailNotification.prototype.send = function (priority) {
        var priorityText = priority ? "[Priority ".concat(priority, "] ") : '';
        return ("".concat(priorityText, "Sending to ").concat(this.emailAddress, ": ").concat(this.message));
    };
    return EmailNotification;
}(BaseNotification));
var SMSNotification = /** @class */ (function (_super) {
    __extends(SMSNotification, _super);
    function SMSNotification(recipient, message, phoneNumber) {
        var _this = _super.call(this, recipient, message) || this;
        _this.phoneNumber = phoneNumber;
        return _this;
    }
    SMSNotification.prototype.send = function (priority) {
        var priorityText = priority ? "[Priority ".concat(priority, "] ") : '';
        return ("".concat(priorityText, " Sending to ").concat(this.phoneNumber, ": ").concat(this.message));
    };
    return SMSNotification;
}(BaseNotification));
var PushNotification = /** @class */ (function (_super) {
    __extends(PushNotification, _super);
    function PushNotification(recipient, message, deviceId) {
        var _this = _super.call(this, recipient, message) || this;
        _this.deviceId = deviceId;
        return _this;
    }
    PushNotification.prototype.send = function (priority) {
        var priorityText = priority ? "[Priority ".concat(priority, "] ") : '';
        return ("".concat(priorityText, "Sending to ").concat(this.deviceId, ": ").concat(this.message));
    };
    return PushNotification;
}(BaseNotification));
var notification = [
    new BaseNotification("John@gmail.com", "Welcome to the new world"),
    new EmailNotification("Eric@gmail.com", "I won't be able to make it", "Joe@gmail.com"),
    new SMSNotification("Bobby", "How are you doing today?", 9028387474),
    new PushNotification("Richie", "HEY BRO WHAT UP", 112)
];
notification.forEach(function (notification) {
    console.log(notification.send(1));
});
