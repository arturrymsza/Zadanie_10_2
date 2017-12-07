$(function() {
	var span = $("span"),
		paragraphs = $('p');

	span.each(function(index, element) {
		if (index % 2 === 0) {
			$(element).css('color', 'red');
		};
	});

	paragraphs.each(function(index, element) {
		var button = '<button class="btn" data-tmp=' + index + '">Kliknij mnie</button>'
		$(element).append(button);
	});

	$("button").on('click', function() {
		alert($(this).attr("data-tmp"));
	});
});