var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    
    request.open('GET','http://nikhiljambhulkar.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
// <textarea rows="4" cols="50" id="commentbox" placeholder="Type your comments here..."></textarea>
      //      <input type="submit" id='commentsubmit_btn' value="Submit">
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                   var names=request.responseText;
                   names=JSON.parse(names);
                   var list='';
                   for(var i=0;i<names.length;i++){
                       list+='<li>'+names[i]+'</li>'
                    }
        var ul=document.getElementById('namelist');
        ul.innerHTML=list;
            }
        }
    };
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    request.open('GET','http://nikhiljambhulkar.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
  
};

var commenttext=document.getElementById('commentsubmit_btn');
commenttext.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                   var comments=request.responseText;
                   comments=JSON.parse(comments);
                   var list='';
                   for(var i=0;i<comments.length;i++){
                       list+='<p><b>*</b>'+comments[i]+'</p><hr/>'
                    }
        var div=document.getElementById('commentdiv');
        div.innerHTML=list;
            }
        }
    };
    var commentInput=document.getElementById('commentbox');
    var commenttext=commentInput.value;
    request.open('GET','http://nikhiljambhulkar.imad.hasura-app.io/submit-comment?comment=' + commenttext,true);
    request.send(null);
  
};