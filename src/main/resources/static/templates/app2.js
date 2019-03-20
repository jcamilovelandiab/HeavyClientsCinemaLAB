app2=(function(){
	return{
		getCinemaByName:function(name){
			return apiclient.getCinemaByName(name,function (cine){
				var table = $("#tableCine");
				console.log(cine);
				for(var i = 0; i < cine.functions.length; i++){
					console.log(cine.functions[i].movie.name);
					table.append("<tr>" +
								"<td>"+cine.name+"</td>" +
								"<td>"+cine.functions[i].movie.name+"</td>" +
								"<td>"+cine.functions[i].movie.genre+"</td>"+
								
										"</tr>")
				}
//							""+cine[0].functions[i].movie.name+"</td><td>"+cine[0].name+"</td>" +
//				}
//				console.log(cine);
			});
		}
	}
	
})();