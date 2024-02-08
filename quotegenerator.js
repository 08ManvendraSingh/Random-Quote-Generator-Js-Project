function qot(){
    var a=document.getElementById('output');
	var len=3;
    var char=['"The best revenge is massive success."','"It is not what happens to you,but how you react to it that matters."','"You miss 100% of the shots you don not take."'];
    var charlen=char.length;
    for(i=1;i<len;i++){
    	var sum=char[Math.floor(Math.random()*charlen)];
    a.innerHTML=sum;
    }
}