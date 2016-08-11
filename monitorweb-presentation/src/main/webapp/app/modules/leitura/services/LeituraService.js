define(['app/apiLocations'], function(APILocation) {

	LeituraService.$inject = ['GumgaRest'];

	function LeituraService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/leitura');

    	return Service;
    }

  	return LeituraService;
});