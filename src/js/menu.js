!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);
			 




			document.addEventListener('DOMContentLoaded', function() {
   const modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('#overlay-modal'),
	   closeButtons = [...document.querySelectorAll('.js-modal-close')],
	   closeB = document.getElementById('js-modal-close');

	   closeB.addEventListener('click', function(e) { 
		//    alert("Yea");
		   console.log(closeButtons);
		   document.querySelector('.modal[data-modal="1"]').classList.remove('active');
	   });
	   
   
   
   modalButtons.forEach(function(item){
      
      item.addEventListener('click', function(e) {
         
         e.preventDefault();
         const modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="1"]');
         
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click
   }); // end foreach
}); // end ready