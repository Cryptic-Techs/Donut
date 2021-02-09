const Donut = {
	host: "https://wixonic.github.io/Donut/",
	author: "Cryptic-Techs",
	version: "2.1",
	themes: ["classic","classic-light","classic-dark","office"],
	style: {
		global: document.createElement("link"),
		theme: document.createElement("style"),
		animations: document.createElement("link")
	},
	tags: null,
	theme: {
		actual: "",
		update: (theme) => {
			theme = theme || Donut.tags[0].getAttribute("theme") || "classic";
			Donut.theme.actual = theme.toLowerCase();
			Donut.tags[0].setAttribute("theme",Donut.theme.actual);
			Donut.style.theme.innerHTML = Donut.request(`/Themes/${Donut.theme.actual}.css`)
		}
	},
	request: (url) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET",Donut.host + url,false);
		xhr.send();
		return xhr.responseText;
	}
};

window.addEventListener("DOMContentLoaded",() => {
	Donut.tags = document.getElementsByTagName("donut");
	Donut.theme.actual = Donut.tags[0].getAttribute("theme").toLowerCase();
	Donut.style.global.setAttribute("href",Donut.host + "Main/Global.css");
	Donut.style.theme.innerHTML = Donut.request(`/Themes/${Donut.theme.actual}.css`);
	Donut.style.animations.setAttribute("href",Donut.host + "Main/Animations.css");
	Donut.style.global.setAttribute("rel","stylesheet");
	Donut.style.theme.setAttribute("rel","stylesheet");
	Donut.style.animations.setAttribute("rel","stylesheet");
	document.head.prepend(Donut.style.global);
	document.head.prepend(Donut.style.theme);
	document.head.prepend(Donut.style.animations);
});
