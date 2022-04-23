/* Romeo ~ [4/18/22] */

/*
FLOATER TEXT:
Simple Position Effect to offest Text.
*/
class Floater {
	constructor(mystr, instx, dospin, mycolor){
		this.str = mystr;
		this.xx = -40+Math.floor(Math.random()*80);
		this.yy = 0;
		this.dir = Math.floor(Math.random()*360);
		this.id = "floater"+instx;
		this.element = document.createElement("p");
		this.spin = dospin;
		let _spfactor = 4 - instx;
		if(_spfactor < 0){
			_spfactor = 0;
			this.spin = false;
		}
		this.spinfactor = _spfactor;
		// Adjust
		this.element.id = this.id;
		this.element.classList.add("floater");
		this.element.classList.add("pop2");
		this.element.classList.add("fntOutcastish");
		let _col = "#CCC125";
		switch(mycolor){
			default:
			case 0: break;
			case 1: // BLUE
				_col = "#C0A0F1";
				break;
		}
		this.element.style.color = _col;
		// Insert Into Document!
		let etxt = document.createTextNode(mystr);
		this.element.appendChild(etxt);
		let spot_parent = document.getElementById("redofield");
		let spot = document.getElementById("floaterspot");
		spot_parent.insertBefore(this.element, spot);
	}
	
	update(){
		let my_xx = this.xx;
		let my_yy = this.yy;
		
		// Boil
		/*
		if(Chance(4)){
			my_xx += Math.random()*4;
			my_yy += Math.random()*4;
		}
		*/
		if(this.spin){
			let spin_var = Math.random()*60;
			//this.dir += 0.001*spin_var;
			this.dir += 0.1*spin_var;
			//alert("dir "+this.dir);
			// Movement
			let my_dir = degToRad(this.dir);
			my_xx += lengthdir_x(this.spinfactor*9, my_dir);
			my_yy += lengthdir_y(this.spinfactor*9, my_dir);
			//this.element.innerHTML = "dir"+this.dir+ "rad "+my_dir;
			
			
			if(this.dir >= 360){
				this.dir = 0;
			}
		}
		
		// Apply Changes
		this.apply(my_xx, my_yy);
	}
	
	apply(my_xx, my_yy){
		this.element.style.left = my_xx+"px";
		this.element.style.top = my_yy+"px";
		
		//if(my_xx != 0)alert("HI I ACTUALLY GO IN HERE "+my_xx);
	}
	
}

/*
MISC...
*/
const Chance = (odds) =>{
	if(odds > 100)odds = 100;
	return ((Math.random()*100) <= odds);
}

// The Length between Two X Coordinates
const lengthdir_x = (len, rad) =>{
  return Math.cos(rad)*len;
}

// The Length between Two Y Coordinates
const lengthdir_y = (len, rad) =>{
  return Math.sin(rad)*len;
}

const getDirection = (x1, y1, x2, y2) =>{
  var dy = y2 - y1, dx = x2 - x1;
  return radToDeg(Math.atan2(dy, dx));
}

const radToDeg = (rad) =>{
  return rad*(180 / Math.PI);
}

const degToRad = (deg) =>{
  return deg*(Math.PI / 180);
}


