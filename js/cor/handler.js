define(function () {
    'use strict';

    var CommunicationHandler = function (communicationType, handler, nextHandler) {
        this.communicationType = communicationType;
        this.handler = handler;
        this.nextHandler = nextHandler;
    };

    CommunicationHandler.prototype.handleCommunication = function (communication) {
        if (communication.type !== this.communicationType) {
            (this.nextHandler) ? this.nextHandler.handleCommunication(communication) :
                console.log('Communication type', communication.type, 'could not be handled');
            return;
        }
        this.handler(communication);
    };

    return CommunicationHandler;
});
