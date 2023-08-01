const menuitem = document.querySelectorAll(".menu-item");
console.log(menuitem);

// message
const messagenotif = document.querySelector("#message-notification");
const mesage = document.querySelector(".message");
const messages = document.querySelectorAll(".messages");
const mesageSearch = document.querySelector("#search-message");
console.log(mesage)
// SIDEBAR
// REMOVE ACTIVE CLASS FOR MENU ITEM
const changeactiveclass = () => {
	menuitem.forEach((item) => {
		item.classList.remove("active");
	});
};

menuitem.forEach((item) => {
	item.addEventListener("click", () => {
		changeactiveclass();
		item.classList.add("active");
		if (item.id != "notification") {
			document.querySelector(".nitification-popup").style.display = "none";
		} else {
			document.querySelector(".nitification-popup").style.display = "block"; 
			document.querySelector(
				"#notification .notification-count"
			).style.display = "none";

		}
	});
});
//  MESSAGE
// // search bar

const searchMessage = () => {
	const val = mesageSearch.Value.toLowerCase();
	console,log(val)
	messages.forEach((user) => {
		let name = user.querySelectorAll("h6").textContent.toLowerCase();
		if (name.indexOf(val) != -1) {
			user.style.display = "flex";
		} else {
			user.style.display = "none";
		}
	});
};

mesageSearch.addEventListener("keyup", searchMessage);
// HIGNLIGNT MESAGE WEN MENU ITEM TOUCH
 messagenotif.addEventListener("click", () => {
		mesage.style.boxShadow = "0 0 1rem var(--color-primary)";
		document.querySelector(
			"#message-notification .notification-count"
		).style.display = "none";
		setTimeout(() => {
			mesage.style.boxShadow = "none";
		}, 2000);
 });