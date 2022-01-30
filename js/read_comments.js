function read_(){
	String.prototype.format = function (kwargs) {
		return this.replace(/\{(\w+)\}/g, function (k, v) {
		return kwargs[v]
		});
	};	
	$("div").filter(".type1").remove();
	$.each(totals["comments"],function(index,info){
		var total = $('<div data-role="content" style="background-color:#6D49C0;" class="type1 ui-content"><p style="text-align: left;font-size:25px;"><i><b>{0}</b></i></p><p style="text-align: left;font-size:15px;color:yellow;"><i><u>{1}</u> star</i></p></div><div data-role="content"style="background-color:#6D49C0;border-bottom:2px dashed black"class="type1 ui-content"><p style="text-align: center;font-size:17px;"><i>{2}</i></p></div>'.format({"0":info["name"],"1":info["stars"],"2":info["contents"]}))
		$("#commentcontainer").append(total);
	})
};