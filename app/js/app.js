// jQuery Document Ready
$(function() {

	$.ajax({

		url: "http://api.doughnuts.ga/doughnuts",
		data: {
			id: $('id').val(),	
			style: $('style').val(),
			flavor: $('flavor').val(),
		},
		dataType: "jsonp",
		method: "GET",
		success: function(data, textStatus, jqXHR) {
			for (var i =0; i < data.length; i++) {
				$('#doughnuts').append("<li>" + data[i]['style'] + " " + data[i]['flavor'] + "</li>")
			}
		}


	});
  
});