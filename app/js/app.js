// jQuery Document Ready
$(function() {

	$.ajax({

		url: "http://api.doughnuts.ga/doughnuts",
		data: {
			id: $('id').val(),	
			style: $('style').val(),
			flavor: $('flavor').val(),
		},
		dataType: "json",
		method: "GET",
		success: function(data) {
			for (var i = 0; i < data.length; i++) {
				$('#doughnuts').append("<li id=" + data[i]['id'] + ">" + data[i]['style'] + " " + data[i]['flavor'] + " " + "<input type='button' class='delete' value='Delete'>" + "</li>");
			}
			// $('.delete').on('click', function() {
			// 	console.log($(this).parent().attr('id'));
			// 	var listId = $(this).parent().attr('id');
			// 	$.ajax({
			// 		url: "http://api.doughnuts.ga/doughnuts",
			// 		data: {
			// 			id: listId,
			// 			// style: $(data['style']).val(),
			// 			// flavor: $(data['flavor']).val()
			// 		},
			// 		dataType: "json",
			// 		method: "DELETE",
			// 		success: function (data) {
			// 			console.log("success");
			// 	  		$(this).parent().remove();
			// 		}		

			// 	})
		
			// });

		}
	});

	$("#submit").on("click", function(){
		var doughnutFlavor = $("#doughnut-flavor").val();
		var doughnutStyle = $("#doughnut-style").val();
		$.ajax({
			url: "http://api.doughnuts.ga/doughnuts",
			data: {
				// id: $(this).data("id"),
				style: doughnutStyle,
				flavor: doughnutFlavor
			},
			dataType: "json",
			method: "POST",
			success: function(data) {
				$('#doughnuts').append("<li>" + doughnutStyle + " " + doughnutFlavor + " " + "<input type='button' class='delete' value='Delete'>" + "</li>");
				console.log(data);	
			}
		})
			return false;
	})
		$(document).on('click', '.delete', function() {
  		$(this).parent().remove();
	})
});