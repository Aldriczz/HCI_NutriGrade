function sendMessage(x){
    var userInput = document.getElementById("comment-input").value;
    if(userInput.trim()==="")return;
    // var count = (userInput.match('\n')||[]).length;
    // console.log(count);
    // while(count!=='0'){
        userInput = userInput.replaceAll("\n", "<br />");
    //     count = (userInput.match('/\n/g')||'0').length;
    // }
    var chatMessage = document.getElementById("comment-text");
    var userMessage = document.createElement("div");
    userMessage.className = "comment";
    var chatTime = new Date();
    var date = chatTime.getDate();
    var month = chatTime.getMonth() + 1;
    if(date<10)date = '0' + date;
    if(month<10)month = '0' + month;
    var year = chatTime.getFullYear();
    chatTime = date + '/' + month + '/' + year;
    // var chatHTML = document.createElement("div");
    // chatHTML.className = "top-comment";
    userMessage.innerHTML = "<div class='top-comment'><div class='comment-ts'>"+chatTime+"</div></div><div class='comment-content'>"+userInput+"</div>";
    // chatHTML.innerHTML = "<div class='comment-ts'>"+chatTime+"</div>";
    // chatMessage.appendChild(chatHTML);
    chatMessage.appendChild(userMessage);
    window.localStorage.setItem(x + '-comments', chatMessage.innerHTML);
    // var one = 1;
    var add_comment = parseInt(window.localStorage.getItem(x+'-cc')) + 1;
    window.localStorage.setItem(x+'-cc', add_comment); 

    // fetchOutput(userInput);

    document.getElementById("comment-input").value="";

    // var NumberofDiv = (chatMessage.match("div")).length;
    // console.log(NumberofDiv);

    window.location.reload();

}

function cleanAll(){
    localStorage.clear();
}

function show(){
    var bod = document.getElementById("bud");
    bod.innerHTML = window.localStorage.getItem(window.localStorage.getItem("fetch"));

    var comms = document.getElementById("comment-text");
    comms.innerHTML = (window.localStorage.getItem(window.localStorage.getItem("fetch") + '-comments'));
    console.log(window.localStorage.getItem("fetch"));

    var cc = document.getElementById("comment-count");
    var x = window.localStorage.getItem(window.localStorage.getItem("fetch")+'-cc');
    cc.innerHTML = x + ' comments';
}

function goBack(){
    window.location.href = "Discussion.html";
}