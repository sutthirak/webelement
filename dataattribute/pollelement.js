$(function(){

	//filter data attribute
    $('[data-poll]').each(function(index){
    	var element = $(this);

    	//get data from json
		var uri = $(this).data('poll')+'.json';
	    $.getJSON(uri, function(data) {
	 		$(element).append(data.question).append('<br />');
	 		for(var choice in data.choices){
	 			var content = "<input type=\"radio\" name=\"result\" value=\""+data.choices[choice]+"\" />";
	 			$(element).append(content).append(data.choices[choice]).append('<br />');
	 		}
	    });  	

	    //add custom css
	   	var t = $(element).find("input");
	   	console.log(t);
    });

});