/**
 * Created by 993711336 on 2015/12/14.
 */
/**
 * Created by 993711336 on 2015/12/14.
 */
function menuFix(){
    var sfEles = document.getElementById("menu").getElementsByTagName("li");
    for(var i = 0;i <sfEles.length;i++){
        sfEles[i].onmouseover=function(){
            this.className +="listshow";
        }
        sfEles[i].onmouseout=function(){
            this.className =this.className.replace("listshow","");
        }
    }
}
window.onload=menuFix;

