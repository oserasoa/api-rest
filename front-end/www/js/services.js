angular.module('starter.services', [])
    .service('endPointRest', function () {
        const url = 'http://127.0.0.1:3001';

        this.url = function () {
            return url;
        }
    })