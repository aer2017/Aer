var pages = getAllElem('.page');
var len= pages.length;
var wrap = getElem('.wrap');
var height = wrap.clientHeight;
var pageIndex = 0;
var isWheel = false;
var outlines = getAllElem('.outline_item');
var navs = getAllElem('.nav_item');
//封装换页函数
var pageTurning = function(pageIndex){
	wrap.style.transform = 'translateY(' + -pageIndex * height + 'px)';
	for(var i = 0;i<len;i++){
		outlines[i].style.transform = 'scale(0.3)';
		outlines[i].style.opacity = 0.2;
		outlines[i].onmouseover = function(){
			this.style.transform = 'scale(0.8)';
			this.style.opacity = 0.8;
		}
		outlines[i].onmouseout = function(){
			this.style.transform = 'scale(0.3)';
			this.style.opacity = 0.2;
		}
	}
	outlines[pageIndex].style.transform = 'scale(0.8)';
	outlines[pageIndex].style.opacity = 0.8;
}
pageTurning(0);
//滚轮换页
document.body.onmousewheel = function(event){
	if(isWheel) return;
	isWheel = true;
	if(event.wheelDelta<0){
		if(pageIndex<len-1)
		pageIndex++;
		pageTurning(pageIndex);
	}else{
		if(pageIndex>0)
		pageIndex--;
		pageTurning(pageIndex);
	}
	setTimeout(function(){
		isWheel = false;
	},800)
}
//开发过程中发现outline换页ornav换页能合并成一个函数
var clickChange = function(idx,lib){
	lib.index = i;
	lib.onclick = function(){
		pageIndex = this.index;
		pageTurning(pageIndex);
	}
}
for(var i=0;i<len;i++){
	clickChange(i,outlines[i]);
	clickChange(i,navs[i]);
}
/*//outline换页
for(var i = 0;i<len;i++){
	outlines[i].index = i;
	outlines[i].onclick = function(){
		pageIndex = this.index;
		pageTurning(pageIndex);
	}
}
//nav换页
for(var i = 0;i<len;i++){
	navs[i].index = i;
	navs[i].onclick = function(){
		pageIndex = this.index;
		pageTurning(pageIndex)
	}
}*/