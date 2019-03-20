/*app2=(function(){
	return{
		getCinemaByName:function(name){
			return apiclient.getCinemaByName(name,function (cine){
				var table = $("#tableCine");
				$("#tableCine > tr").remove();
				//console.log(cine);
				for(var i = 0; i < cine.functions.length; i++){
					console.log(cine.functions[i].movie.name);
					table.append("<tr>" +
								    "<td>"+cine.name+"</td>" +
								    "<td>"+cine.functions[i].movie.name+"</td>" +
								    "<td>"+cine.functions[i].movie.genre+"</td>"+
								    "<td>"+
								        '<button type="button" class="btn btn-light" onclick="">See</button>'+
								    "</td>"+
								"</tr>")
				}
//							""+cine[0].functions[i].movie.name+"</td><td>"+cine[0].name+"</td>" +
//				}
//				console.log(cine);
			});
		}



		getFunctionsbyCinemaAndDate:function(cinemaname, date){
		    return apiclient.getFunctionsbyCinemaAndDate(name, date, function(cine){

                var table=$("#tableFunctions");
                $("tableFunction > tr").remove();

		    });
		}

	}
	
})();*/


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
                                "<td>"+i+"</td>"
                                    //'<button type="button" class="btn btn-danger" '+
                                    //'onclick="getFunctionsbyCinema('+cine.name+')" '+
                                    //'data-toggle="modal" data-target="#modalSeatsFunction">See</button>'+"</td>"+
							    "</tr>")
				}
//							""+cine[0].functions[i].movie.name+"</td><td>"+cine[0].name+"</td>" +
//				}
//				console.log(cine);
			});
		}

		getFunctionsbyCinema:function(cinemaname){
            return apiclient.getFunctionsbyCinemaAndDate(cinemaname, function(cine){
                var table=$("#tableSeatsFunction");
                $("tableSeatsFunction > tr").remove();
            });
        }
	}

})();