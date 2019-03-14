var mycopyright=document.getElementsByClassName("src-components-footer-footer---s2---2E3yO");
function insertAfter(newElement, targentElement) {
        var parent = targentElement.parentNode;
        if (parent.lastChild == targentElement) {
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targentElement.nextSibling)
        }
}
var script=document.createElement("script");
script.type="text/javascript";
script.src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
document.getElementsByTagName('head')[0].appendChild(script); 

mycopyright[0].style.whiteSpace="pre-wrap";
var text1=mycopyright[0].innerHTML;
mycopyright[0].innerHTML=text1+'\n'+'本站总访问量<span id="busuanzi_value_site_pv"></span>次'+'  您是第<span id="busuanzi_value_site_uv"></span>位访客';



 
