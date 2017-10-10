var menu_btns=document.getElementsByClassName("menu_btns");
var pic_btns=document.getElementsByClassName("pic_btns");
var pic=document.getElementsByClassName("pic")[0];
var flag=0;
function changeMenu(){	
	setTimeout("changePic("+flag+")",1000);
}
function changePic(flag){	
	for(var j=0;j<pic_btns.length;j++){
		if(pic_btns[j].className=="pic_btns pic_btns_selected"){
			if(j<2){				
				pic_btns[j].className="pic_btns";
				pic_btns[j+1].className="pic_btns pic_btns_selected";
				pic.src="images/pic_"+(j+2)+".jpg";	
				if(flag){
					pic.src="images/pic_"+(j+5)+".jpg";
				}		
			}else if(j==2&&menu_btns[1].className=="menu_btns menu_btns_selected"){
				clearTimeout(timeID);
				reset();
			}else if(j==2){
				pic_btns[j].className="pic_btns";
				pic_btns[j-2].className="pic_btns pic_btns_selected";
				pic.src="images/pic_"+(j+2)+".jpg";	
				menu_btns[0].className="menu_btns";
				menu_btns[1].className="menu_btns menu_btns_selected";
				pic_btns[0].firstChild.nodeValue="图片4";
				pic_btns[1].firstChild.nodeValue="图片5";
				pic_btns[2].firstChild.nodeValue="图片6";
				flag=1;
			}			
			timeID=setTimeout("changePic("+flag+")",1000);
			break;	
		}
		
	}
}
function reset(){
	pic_btns[2].className="pic_btns";
	pic_btns[0].className="pic_btns pic_btns_selected";
	pic.src="images/pic_1.jpg";
	menu_btns[1].className="menu_btns";
	menu_btns[0].className="menu_btns menu_btns_selected";
	pic_btns[0].firstChild.nodeValue="图片1";
	pic_btns[1].firstChild.nodeValue="图片2";
	pic_btns[2].firstChild.nodeValue="图片3";
}
window.onload=changeMenu();