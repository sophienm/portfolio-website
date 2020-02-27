console.log('Hi! Welcome to my portfolio website.')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

const button = document.querySelector('#button');
      const tooltip = document.querySelector('#tooltip');

      Popper.createPopper(button, tooltip);

      function show() {
//* COPY EMAIL TO CLIPBOARD *//

$(document).ready(function() {

	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	$('a[href^=mailto]').addClass('mailto-link');

	var mailto = $('.mailto-link');
	var messageCopy = 'Click to copy email address';
	var messageSuccess = 'Email address copied to clipboard';

	mailto.append('<span class="mailto-message"></span>');
	$('.mailto-message').append(messageCopy);

	// Disable default action (opening your email client. yuk.)
	$('a[href^=mailto]').click(function() {
		return false;
	})

	// On click, get href and remove 'mailto:'
	// Store email address in a variable.
	mailto.click(function() {
		var href = $(this).attr('href');
		var email = href.replace('mailto:', '');
		copyToClipboard(email);
		$('.mailto-message').empty().append(messageSuccess);
		setTimeout(function() {
			$('.mailto-message').empty().append(messageCopy);}, 2000);
	});

});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}
  tooltip.setAttribute('data-show', '');
}

function hide() {
  tooltip.removeAttribute('data-show');
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach(event => {
  button.addEventListener(event, show);
});

hideEvents.forEach(event => {
  button.addEventListener(event, hide);
});

let popperInstance = null;

function create() {
  popperInstance = Popper.createPopper(button, tooltip, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });
}

function destroy() {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function show() {
  tooltip.setAttribute('data-show', '');
  create();
}

function hide() {
  tooltip.removeAttribute('data-show');
  destroy();
}




function generateGetBoundingClientRect(x = 0, y = 0) {
  return () => ({
    width: 0,
    height: 0,
    top: y,
    right: x,
    bottom: y,
    left: x,
  });
}

const virtualElement = {
  getBoundingClientRect: generateGetBoundingClientRect(),
};

const instance = createPopper(virtualElement, popper);

document.addEventListener('mousemove', ({ clientX: x, clientY: y }) => {
  virtualElement.getBoundingClientRect = generateGetBoundingClientRect(x, y);
  instance.update();
});
