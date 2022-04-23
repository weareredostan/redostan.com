/* Romeo ~ [4/18/22] */
// Gloabals...
var folder_controller;
var pro_table, not_table;
var pro_fold0, pro_fold1, pro_fold2, pro_fold3;
var not_fold0, not_fold1, not_fold2, not_fold3, not_fold4;
var not_fold5, not_fold6, not_fold7;


//alert("i did it");

const init = () => {
    folder_controller = new FolderController(3);
    // Tables
	pro_table = [["<span class='cRB'>REDOSTAN</span> promises to focus on young adults in their 20's - 30's while being run by teams of the same age group...",
    "this is <span class='cRP'>NOT</span> done to discount the wisdom of our elders...",
    "it IS to avoid the 'traditional' trope of domineering old men having a controlled grasp on the guilible youth...",
    "<span class='cRB'>We The Youth</span> are just as capable as any high budget instrustry plant."],
    ["<span class='cRB'>REDOSTAN</span> promises to never be funded by larger organizations with strange agendas."],
    ["<span class='cRB'>REDOSTAN</span> promises to always return to discussions of the self...",
    "no matter how much time is spent analyzing 'the system'...",
    "we believe only <span class='cGr'>SELF-CONSTRUCTION</span> can bring REAL change...",
    "<span class='cRP'>NOT</span> just waiting for institutions to change."],
    ["<span class='cRB'>REDOSTAN</span> is split into 2 bodies...", "<span class='cGr'>EDUCATION</span> and <span class='cGr'>EXECUTION</span>...",
    "we will bring likeminded people together...",
    "we will produce <span class='cGr'>ORIGINAL CONTENT</span> that benefits everyone...",
    "we will splash motivation to all who want progress."]];
    pro_fold0 = new FolderBox("0", "0", "<span class='cGr'>REDOSTAN</span> is FOR THE YOUTH - <span class='cY'>BY THE YOUTH</span>.", pro_table[0]);
    pro_fold1 = new FolderBox("0", "1", "<span class='cGr'>REDOSTAN</span> is ABSOLUTELY <span class='cY'>INDEPENDENT</span>.", pro_table[1]);
    pro_fold2 = new FolderBox("0", "2", "<span class='cGr'>REDOSTAN</span> is about <span class='cY'>YOU</span>, NOT just THE SYSTEM.", pro_table[2]);
    pro_fold3 = new FolderBox("0", "3", "<span class='cGr'>REDOSTAN</span> goes <span class='cY'>BEYOND THEORY</span>.", pro_table[3]);
	
	not_table = [["We can do this by ourselves."], [""], [""], ["Asking for the same institutions who damaged you to heal you is foolish..."], ["We can expose racism without inverting an extreme...", "so, we will."], ["We only promote what we believe to be productive."], ["Any topic discussed is simply to lead to conversations of progression."], ["We try our best to refrain from explicitly claiming 1 choice to be the only good choice...", "our method is to analyze all choices with you and let you make the decision."]];
	
	not_fold0 = new FolderBox("1", "0", "<span class='cGr'>REDOSTAN</span> is <span class='cR'>NOT</span> affiliated with or funded by any larger organization.", not_table[0]);
	not_fold1 = new FolderBox("1", "1", "<span class='cGr'>REDOSTAN</span> is <span class='cR'>NOT</span> <span class='cRP'>'FAR-LEFT'</span> for exposing 'The Right'.", not_table[1]);
	not_fold2 = new FolderBox("1", "2", "<span class='cGr'>REDOSTAN</span> is <span class='cR'>NOT</span> <span class='cRP'>'FAR-RIGHT'</span> for exposing 'The Left'.", not_table[2]);
	not_fold3 = new FolderBox("1", "3", "<span class='cGr'>REDOSTAN</span> is <span class='cR'>NOT</span> encouraging 'Self-Vicitimization' or 'begging for hand-outs'.", not_table[3]);
	
	// RENDER LOOP
    const render = () => {
        requestAnimationFrame(render);
        update();
    };

    // UPDATE
    const update = () => {
		//alert("going ok");
        /*
        pro_ex0.update();
        */
		//alert("yeah");
    }

    render();
};

/*
FOLDER CONTROLLER:
Store Folders.
*/
class FolderController {
	constructor(_count){
		this.group_count = _count;
		this.data = [];
		for(let i = 0; i < _count; i++){
			let _batch = [];
			this.data.push(_batch);
		}
	}

	push(_xx, _folder){
		this.data[_xx].push(_folder);
	}

	grab(_xx, _yy){
		return this.data[_xx][_yy];
	}
}

/*
FOLDER BOX:
Text expands to reveal several nodes upon click.
= new FolderBox("0", "0", "REDOSTAN", table[0]);
*/
class FolderBox {
	constructor(_fieldx, _instx, _headline, _content){
		this.fid = _fieldx;
		this.id = "folder"+_fieldx+"_"+_instx;
		this.boldline = _headline;
		this.content = _content;
		this.state = 0; // 0 = Close / 1 = Open
		this.tab = document.createElement("p");
        this.foldergroup = document.getElementById("folders"+_fieldx);
        this.folder = document.getElementById("foldspot"+_fieldx+"_"+_instx);
		this.subs = [];
		let _c_count = _content.length;

		// Adjust
		this.foldergroup.classList.add("foldergroup");
        this.folder.classList.add("folder");
        this.folder.classList.add("folder_closed");
        this.tab.id = this.id;
		this.tab.classList.add("folder_tab");
		this.tab.classList.add("folder_tab_closed");
		
		// Insert Into Document!
		let etxt = document.createElement("p");
		etxt.innerHTML = this.boldline;
		/*let etxt = document.createTextNode(this.boldline);*/
		this.tab.appendChild(etxt);
		
		this.foldergroup.insertBefore(this.tab, this.folder);
		this.tab.onclick = function(){
			clickFolder(_fieldx, _instx);
		};
		
        // SubContent
		for(let i = 0; i < _c_count; i++){
			let _mystr = _content[i];
            // Create Element
			let _elm = document.createElement("p");
			_elm.id = "expand"+_fieldx+"_"+_instx+"_"+i;
			_elm.classList.add("folder_sub");
            let _etxt = document.createElement("p");
			_etxt.innerHTML = _mystr;
		    _elm.appendChild(_etxt);
			// Insert
            this.folder.appendChild(_elm);
			this.subs.push(_elm);
		}

		// Add Self to Controller
		folder_controller.push(_fieldx, this);
	}

    expand(){
        this.folder.classList.remove("folder_closed");
		this.folder.classList.add("folder_open");
        this.tab.classList.remove("folder_tab_closed");
		this.tab.classList.add("folder_tab_open");
        this.state = 1;
    }

    collapse(){
        this.folder.classList.remove("folder_open");
		this.folder.classList.add("folder_closed");
        this.tab.classList.remove("folder_tab_open");
		this.tab.classList.add("folder_tab_closed");
        this.state = 0;
    }
}

const clickFolder = (_fieldx, _instx) =>{
	let _me = folder_controller.grab(_fieldx, _instx);
    if(_me.state == 1){ // Already Open >> COLLAPSE.
		_me.collapse();
	}else{ // Not Open >> OPEN.
		_me.expand();
	}
}




init();
