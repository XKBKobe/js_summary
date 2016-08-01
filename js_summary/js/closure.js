//闭包就是能够读取其他函数内部变量的函数。
/**
 * *闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，
 * 另一个就是让这些变量的值始终保持在内存中。
 */
function f1(){
    var n=999;
　nAdd=function(){n+=1}
    function f2(){
　　alert(n);
    }
    　return f2;
}
var result=f1();
result(); // 999
nAdd();
result(); // 1000



