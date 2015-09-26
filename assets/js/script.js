$(function(){
	
	var note = $('#note'),
		ts = new Date(2015, 9, 23);
	
	if((new Date()) > ts){
		ts = 0;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			message += "until we're reunited <3";
			
			note.html(message);
		}
	});
	
});
