(function($) {
	$.fn.helpChat = function(params) {

		obj = $(this);

		defaults = {
			title : "We'll call to you",
			send : "Submit",
			messages : {
				error : "Some error has occurred.",
				success : "Thanks for your contact!"
			},
			name : {
				label : "Your name",
				placeholder : "Write your name here",
				required : true,
				requiredMessage : "Field NAME is required"
			},
			phone : {
				label : "Phone",
				placeholder : "White your phone here",
				required : true,
				requiredMessage : "Field PHONE is required"
			},
			email : {
				label : "E-mail",
				placeholder : "Write your e-mail here",
				required : false,
				requiredMessage : "Field EMAIL is required"
			}
		};

		var settings = $.extend(true, {}, defaults, params); // The "true" parameter solves the problem of multi-dimensional defaults

		obj.append('<h3></h3>').find('h3').text(settings.title);
		obj.find('h3').click(function() {
			obj.css('bottom', '0');
		});
		obj.append('<div class="hc-content"></div>');

		// Name
		if (settings.name.required == true)
			var name_required = ' required';
		else
			var name_required = '';
		obj.find('.hc-content').append('<p>' + settings.name.label + '<br /><input type="text" class="input' + name_required + '" id="hc-name" placeholder="' + settings.name.placeholder + '" maxlength="100" /></p>');

		// Phone
		if (settings.phone.required == true)
			var phone_required = ' required';
		else
			var phone_required = '';
		obj.find('.hc-content').append('<p>' + settings.phone.label + '<br /><input type="tel" class="input' + phone_required + '" id="hc-phone" placeholder="' + settings.phone.placeholder + '" maxlength="14" /></p>');

		// E-mail
		if (settings.email.required == true)
			var email_required = ' required';
		else
			var email_required = '';
		obj.find('.hc-content').append('<p>' + settings.email.label + '<br /><input type="email" class="input' + email_required + '" id="hc-email" placeholder="' + settings.email.placeholder + '" maxlength="100" /></p>');

		// Send button
		obj.find('.hc-content').append('<p><button type="button" id="hc-submit">' + settings.send + '</button></p>');
		obj.find('#hc-submit').click(function() {
			sendContact(settings);
		});

		//console.log('height: ' + obj.find('.hc-content').height() );
		obj.css('bottom', '-' + (obj.find('.hc-content').height() + obj.find('h3').height()) + 'px');

		return this;
	};

	var sendContact = function(settings) {
		var name = obj.find('#hc-name');
		var phone = obj.find('#hc-phone');
		var email = obj.find('#hc-email');

		if ( settings.name.required == true && name.val() == '' ) {
			alert( settings.name.requiredMessage );
			name.focus();

		} else if ( settings.phone.required == true && phone.val() == '' ) {
			alert( settings.phone.requiredMessage );
			phone.focus();

		} else if ( settings.email.required == true && email.val() == '' ) {
			alert( settings.email.requiredMessage );
			email.focus();

		} else {
			obj.find('h3').addClass('success').html( settings.messages.success );

			name.val('');
			phone.val('');
			email.val('');

		}

		return this;
	};

})(jQuery);