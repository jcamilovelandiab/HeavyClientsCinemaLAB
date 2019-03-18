apiclient=function(){
	
	var cinemaServices;
	
	return {
		getCinemaByName:function(name,callback){
			callback(
				mockdata[name]
			);
		}
	}

}