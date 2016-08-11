define(function (require) {
    var angular = require('angular');
    require('app/modules/leitura/services/module');
    require('angular-ui-router');

    return angular
            .module('app.leitura.controllers', ['app.leitura.services','ui.router'])
            .controller('LeituraFormController', require('app/modules/leitura/controllers/LeituraFormController'))
            .controller('LeituraListController', require('app/modules/leitura/controllers/LeituraListController'));
});