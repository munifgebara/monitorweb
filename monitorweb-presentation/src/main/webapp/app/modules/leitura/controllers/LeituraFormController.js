define([], function() {


 	LeituraFormController.$inject = ['LeituraService', '$state', 'entity', '$scope', 'gumgaController'];

 	function LeituraFormController(LeituraService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, LeituraService, 'leitura');



    
    	$scope.leitura.data = entity.data || {};
		$scope.continue = {};
	
		$scope.leitura.on('putSuccess',function(data){
			$state.go('leitura.list');
		});
 	}
	
	return LeituraFormController;   
});