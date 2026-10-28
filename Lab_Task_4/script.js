let events=[];

function addEvent(){
	    let eventName=document.getElementById("event").value.trim();
		
		if(eventName ==""){
		alert("Please enter an event name");
		return;
		}
		if(events.length >= 3){
			alert("you can join a maximum 3 event");
			return;
		}
		 events.push(eventName);
		 document.getElementById("event").value="";
		 
		 alert("event added");
}

function confirmRegistration(){
	let name=document.getElementById("studentName").value.trim();
	
	if(name==""){
		alert("please enter your name");
	 return;
	}
	if(events.length==0){
		alert("pleasse add atleast one event");
		return;
	}
	
	localStorage.setItem("studentName",name);
	localStorage.setItem("events",JSON.stringify(events));
	
	
	window.location.href="confirm.html";
}