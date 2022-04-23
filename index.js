/* Romeo ~ [4/18/22] */
// Gloabals...
var floater1, floater2, floater3, floater4;

//alert("i did it");

const init = () => {
	// Setup
	floater1 = new Floater("'WE ARE THE HEATHENS!'", 0, true, 0);
	floater2 = new Floater("'WE ARE THE MISFITS!'", 1, true, 0);
	floater3 = new Floater("'WE ARE THE REJECTS!'", 2, true, 0);
	floater4 = new Floater("'-AND WE'RE GETTING THE HELL OUTTA HERE!'", 3, true, 1);
    
	// RENDER LOOP
    const render = () => {
        requestAnimationFrame(render);
        update();
    };

    // UPDATE
    const update = () => {
		//alert("going ok");
        floater1.update();
		floater2.update();
		floater3.update();
		floater4.update();
		//alert("yeah");
    }

    render();
};

function hide_logo() {
	var hider = document.getElementById("front_logo");
	var flinks = document.getElementById("front_links");
	var fbg = document.getElementById("front_bg");
	var trigger = document.getElementById("trigger");
	var windowHeight = window.innerHeight;
	var elementTop = trigger.getBoundingClientRect().top;
	var mark1 = 40, mark2 = 580;
	if (elementTop < windowHeight - mark1) {
	  hider.classList.remove("logo_inactive");
	  hider.classList.add("logo_active");
	  flinks.classList.add("push_back");
	  fbg.classList.add("blackout");
	  fbg.classList.remove("bg_green");
	} else {
	  hider.classList.remove("logo_active");
	  hider.classList.add("logo_inactive");
	  flinks.classList.remove("push_back");
	  fbg.classList.add("bg_green");
	  fbg.classList.remove("blackout");
	}
	if (elementTop < windowHeight - mark2) {
	  hider.classList.add("cancel");
	  flinks.classList.add("cancel");
	  fbg.classList.add("cancel");
	} else {
	  hider.classList.remove("cancel");
	  flinks.classList.remove("cancel");
	  fbg.classList.remove("cancel");
	}
}

window.addEventListener("scroll", hide_logo);

init();
