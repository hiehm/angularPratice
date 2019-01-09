"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorLogHandler = /** @class */ (function () {
    function ErrorLogHandler() {
    }
    //實作Error Handler Method
    ErrorLogHandler.prototype.handleError = function (error) {
        console.log('Error Handler:');
        console.log(error);
        //或是將 error 記錄到某個後端去
    };
    return ErrorLogHandler;
}());
exports.ErrorLogHandler = ErrorLogHandler;
//# sourceMappingURL=ErrorLogHandler.js.map