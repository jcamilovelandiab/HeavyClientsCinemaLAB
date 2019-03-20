app2=(function(){
	return{
		getCinemaByName:function(name){
			return apiclient.getCinemaByName(name,function (cine){
				var table = $("#tableCine");
				$("#tableCine > tr").remove();
				//console.log(name);
				for(var i = 0; i < cine.functions.length; i++){
					console.log(cine.functions[i].movie.name);
					table.append('<tr>' +
									"<td>"+cine.functions[i].movie.name+"</td>" +
									"<td>"+cine.functions[i].seats.length+"</td>" +
									"<td>"+cine.functions[i].date+"</td>"+
	                                "<td>"+
	                                	'<button type="button" class="btn btn-danger" '+
	                                	'onclick="app2.getSeatsFunctionbyCinema('+"'"+cine.name+" - "+cine.functions[i].movie.name+"'"+')"'+
	                                	'data-toggle="modal" data-target="#modalSeatsFunction">See</button>'+
	                                "</td>"+
	                                //'<td style="display: none; >"'+cine.functions[i].seats+
	                                //'</td>'+
	                               "</tr>");
				}
			});
		},
	
		getSeatsFunctionbyCinema:function(name){
			$("#cinemaFunctionName").html("<em>"+name+"</em>");
			var t=name.split(" - ");
			var cinemaname=t[0] ,movie = t[1];

	        return apiclient.getCinemaByName(cinemaname, function(cine){
	        	
	        	var tableSeats = $("#tableSeatsFunction");
	        	$("#tableSeatsFunction").empty();
	        	
	        	
	        	var seats;
	        	for(let cf of cine.functions){
	        		if(cf.movie.name==movie){
	        			seats = cf.seats; break;
	        		}
	        	}
	        		        	
	        	for(var i=0; i<seats.length; i++){
	        		tableSeats.append("<tr>");
	        		for(var j=0; j<seats[i].length; j++){
	        			tableSeats.append('<td><img src="'+
	        								((seats[i][j]==true)?"availableSeat.png":"occupiedSeat.png") +
	        							  '" style="width:30px; height: 40px; "/></td>');
	        		}
	        		tableSeats.append("</tr>");	        		
	        	}
	        	
	        });
	    }
	
	}	
})();

//'<button type="button" class="btn btn-danger" '+
//'onclick="getFunctionsbyCinema('+cine.name+')" '+
//'data-toggle="modal" data-target="#modalSeatsFunction">See</button>'+"</td>"+