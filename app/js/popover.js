		var popoverWindow = document.querySelector('.betainfo')
		var betaButton = document.querySelector('.beta')
		var popoverCloseButton = document.querySelector('.closer')
		var shader = document.querySelector('.shader')
		
		betaButton.addEventListener('click', showPopover)
		popoverCloseButton.addEventListener('click', showPopover)
		shader.addEventListener('click', showPopover)

		function showPopover(){
			popoverWindow.classList.toggle('show')
			shader.classList.toggle('show')
			event.preventDefault()
		}