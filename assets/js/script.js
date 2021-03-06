const myFunction = () => {
	let showMenu = document.getElementById("myTopnav");
	if (showMenu.className === "topnav container") {
		showMenu.className += " responsive";
	} else {
		showMenu.className = "topnav container";
	}
};
let validateEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};
let validate = () => {
	const $result = $("#result");
	const email = $("#email").val();
	$result.text("");
	if (validateEmail(email)) {
		$result.text("");
	} else {
		$result.text("Enter a valid email address");
	}
	return !1;
};
$("#validate").on("click", validate);

let $animation_elements = $(".animation-element");
let $window = $(window);
const check_if_in_view = () => {
	let window_height = $window.height();
	let window_top_position = $window.scrollTop();
	let window_bottom_position = window_top_position + window_height;
	$.each($animation_elements, function () {
		let $element = $(this);
		let element_height = $element.outerHeight();
		let element_top_position = $element.offset().top;
		let element_bottom_position = element_top_position + element_height;
		if (
			element_bottom_position >= window_top_position &&
			element_top_position <= window_bottom_position
		) {
			$element.addClass("in-view");
		} else {
			$element.removeClass("in-view");
		}
	});
};
$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");
