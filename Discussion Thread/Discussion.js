function new_thread(){
    var T = document.getElementById("create-thread");
    if(T.style.display === "none"){
        T.style.display = "block";
    }
}

function load(x){
    console.log(x);
    window.localStorage.setItem("fetch", x);
}

function changeFetch(x){
    window.localStorage.setItem("fetch", x);
}

function post_thread(){
    var title = document.getElementById("tt").value;
    if(title.trim()==="")return;
    var content = document.getElementById("tc").value;
    if(content.trim()==="")return;

    content = content.replaceAll("\n", "<br />");

    var list = document.getElementById("thread-list");
    var add = document.createElement("div");
    var time = new Date();
    var dt = time.getDate();
    var mt = time.getMonth()+1;
    var y = time.getFullYear();
    if(dt<10)dt = '0' + dt;
    if(mt<10)mt = '0' + mt;
    time = dt + '/' + mt + '/' + y;
    var cc = 0;

    var storageId=0;
    for(let i=0; i<10; i++){
        storageId = storageId*10;
        storageId = storageId+Math.floor(Math.random()*(10-1)+1);
    }
    
    storageId=storageId.toString(10);

    window.localStorage.setItem(storageId, '    <div class="top-bar">'+
    '        <h1 onclick="cleanAll()" class="forum-name">'+
    '            NutriGrade Forums'+
    '        </h1>'+
    '        <div class="buttons">'+
    '           <button class="back" onclick="goBack()">Return</button>'+
    '        </div>' +
    '    </div>'+
    '    <div class="main">'+
    '        <div class="header">'+
    '            <h2 class="title">'+
                    title +
    '            </h2>'+
    '            <p>' + content + '</p>'+
    '            <div class="bottom">'+
    '                <p class="timestamp">'+
                    time+
    '                </p>'+
    '                <p class="comment-count" id="comment-count">'+
                        storageId+
    '                </p>'+
    '            </div>'+
    '        </div>'+
    '        '+
    '        <textarea name="texts" id="comment-input" placeholder="Enter a reply..."></textarea>'+
    '        <button onclick="sendMessage('+ storageId +')" class="buttons2">Add Comment</button>'+
    '        <div class="comment-text" id="comment-text">'+
    ''+
    '        </div>'+
    '    </div>'+
    '    <script src="thread.js"></script>');

    add.innerHTML = "<a href='thread.html' onclick='changeFetch(" + 
    storageId + 
    ")'><li class='row'><h4 class='title'>" + 
    title + 
    "</h4><div class='bottom'><p class='timestamp'>" + 
    time + 
    "</p><p class='comment-count' id='comment-count'>0 comments<p id='hidden' style='display: none'>" + 
    storageId + "</p></p></div></li></a>";

    list.appendChild(add);
    window.localStorage.setItem("thread-list", list.innerHTML);
    window.localStorage.setItem(storageId + '-cc', 0);

    window.localStorage.setItem("fetch", storageId);

    document.getElementById("tt").value = "";
    document.getElementById("tc").value = "";
}

function cancel(){
    var T = document.getElementById("create-thread");
    T.style.display = "none";
}

function renderPost(){
    var x = document.getElementById("thread-list");
    x.innerHTML = window.localStorage.getItem("thread-list");

    var y = document.querySelectorAll("[id='hidden']");
    var z = document.querySelectorAll("[id='comment-count']");
    for(let i=0;i<y.length;i++){
        console.log(y[i].innerHTML + '-cc');
        z[i].innerHTML = window.localStorage.getItem(y[i].innerHTML + '-cc') + " comments";
    }
}

function clearAll(){
    localStorage.removeItem("thread-list");
}