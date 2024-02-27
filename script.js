const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

let mesh_change = document.getElementById('mesh_change')
let mesh_fin = document.getElementById('mesh_fin')
let mesh = document.getElementById('mesh')

function mesh_animate() {
	mesh.classList.remove('mesh')
	mesh.classList.add('mesh_fin')
}