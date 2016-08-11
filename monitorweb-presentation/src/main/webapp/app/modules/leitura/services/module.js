define(function(require) {
   require('angular')
   .module('app.leitura.services', [])
   .service('LeituraService', require('app/modules/leitura/services/LeituraService'));
});