onload = () =>
{
	const zone = document.getElementById("zone");
	
	zone.innerHTML = `<label id="label-selector" for="theme-selector">Theme : </label><select id="theme-selector" onchange="document.querySelector('donut').setAttribute('theme',this.value); Donut.theme.update();"><option selected>${Donut.themes.join("</option><option>")}</option></select>`;
};