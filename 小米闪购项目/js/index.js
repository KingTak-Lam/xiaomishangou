var tabs = document.getElementById("tabs").getElementsByTagName("li");

for(var i = 0; i< tabs.length;i++){
    tabs[i].onclick = showlist;
}
var lists = document.getElementById("lists").getElementsByTagName("ul");
// console.log(lists);

function showlist(){
    for(var i = 0; i< tabs.length;i++){
        if(tabs[i]===this){
            tabs[i].className = "active";
            lists[i].classList = "clearfix active";
        }
        else{
            tabs[i].className= "" ;
            lists[i].className="clearfix";
        }
    }
}
var seckillNav = document.getElementById("seckillNav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);
    if(scrollTop >= 260){
        seckillNav.className="seckill-nav seckill-navfixed"
    }else{
        seckillNav.className="seckill-nav";
    }
}