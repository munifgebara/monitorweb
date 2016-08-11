define([], function() {

  LeituraListController.$inject = ['$scope', 'LeituraService', 'gumgaController'];

  function LeituraListController($scope, LeituraService, gumgaController) {

    gumgaController.createRestMethods($scope, LeituraService, 'leitura');

    LeituraService.resetDefaultState();
    $scope.leitura.execute('get');

    $scope.tableConfig = {
      columns: 'device ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'device',
        title: '<span gumga-translate-tag="leitura.device"> device </span>',
        content: '{{$value.device }}',
        sortField: 'device'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="leitura.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return LeituraListController;
});
