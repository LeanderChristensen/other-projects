let main = document.getElementById('main');

fetch('fun.json')
	.then((response) => response.json())
	.then((data) => print(data.projects));

function print(projects) {
	projects.reverse();
	projects.forEach((projects) => {
		main.innerHTML += `<a href="${projects.link}"><div class="card" style="background: url('${projects.image}') no-repeat center"><p class="card-title">${projects.name}</p></div></a>`;
	});
}