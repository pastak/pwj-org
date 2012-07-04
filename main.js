var PWJ={
	color:"",
	setcolor:function(){
		this.color=("rgb("+Math.floor( Math.random() * 256)+","+Math.floor( Math.random() * 256)+","+Math.floor( Math.random() * 256)+")")
		var svg = document.getElementById("mactkgsan").contentDocument;
		var mactkg=svg.getElementById("macpath")
		mactkg.style.fill=this.color;
		var mes=document.getElementById("message");
		mes.style.color=this.color;
		document.body.style.background=this.color;
	},
	load:function(){
		this.setcolor();
		window.setInterval(this.setcolor,5000);
	}
	
}
