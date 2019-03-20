app2=(function(){
	return{
		getCinemaByName:function(name){
			return apiclient.getCinemaByName(name,function (cine){
				var table = $("#tableCine");
				console.log(cine);
				for(var i = 0; i < cine.functions.length; i++){
					console.log(cine.functions[i].movie.name);
					table.append("<tr>" +
									"<td>"+cine.functions[i].movie.name+"</td>" +
									"<td>"+cine.functions[i].seats.length+"</td>" +
									"<td>"+cine.functions[i].date+"</td>"+
	                                "<td>"+
	                                	'<button type="button" class="btn btn-danger" '+
	                                	'onclick="app2.getSeatsFunctionsbyCinema("'+cine.name+'")" '+
	                                	'data-toggle="modal" data-target="#modalSeatsFunction">See</button>'+"</td>"+
	                                "</tr>")
				}
			});
		},
	
		getSeatsFunctionsbyCinema:function(cinemaname){
	        return apiclient.getCinemaByName(cinemaname, function(cine){
	        	//$("#cinemaFunctionName").text(cinemaname);
	        	console.log(cine);
	        });
	    }
	
	}	
})();

//'<button type="button" class="btn btn-danger" '+
//'onclick="getFunctionsbyCinema('+cine.name+')" '+
//'data-toggle="modal" data-target="#modalSeatsFunction">See</button>'+"</td>"+