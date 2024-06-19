document.addEventListener('click', function(event) {
    const notif = document.querySelector('body');
    const notifs = document.querySelector('.notification');
    const x = document.querySelector('.x')
    if (notif.classList.contains('blur') && event.target === notif) {
        notif.classList.remove('blur');
        notifs.classList.add('hidden');
        x.classList.add('hidden')
    }
}, true);

function exit(){
    const notif = document.querySelector('body');
    const notifs = document.querySelector('.notification');
    const x = document.querySelector('.x')
    if (notif.classList.contains('blur')){
        notif.classList.remove('blur')
        notifs.classList.add('hidden');
        x.classList.add('hidden')
    }
}


function new_thread(){
    var T = document.getElementById("create-thread");
    var threads = document.querySelector(".main");
    T.style.display = "block";
    threads.style.display = "block";
    document.querySelector(".top-bar").classList.remove("active");
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
    var flag = true
    if(title.trim()==="" ){
        displayError('title','*Title cannot be empty');
        flag = false
    }else if(title.length>50){
        displayError('title','*Title cannot exceeds 50 words'); 
        flag = false
    }else{
        removeError('title')
    }
    var content = document.getElementById("tc").value;
    if(content.trim()===""){
        displayError('content','*Content cannot be empty')
        flag = false
    }else{
        removeError('content')
    }
    if(flag === false){
        return;
    }

    content = content.replaceAll("\n", "<br>");
    
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

    add.innerHTML = "<a href='thread.html' class='forum-title' onclick='changeFetch(" + 
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
    const notif = document.querySelector('body')
    notif.classList.add('blur')
    const notifs = document.querySelector('.notification')
    notifs.classList.remove('hidden')
    const x = document.querySelector('.x')
    x.classList.remove('hidden')
}

function cancel(){
    var T = document.getElementById("create-thread");
    var threads = document.querySelector(".main");
    T.style.display = "none";
    threads.style.display = "none";
    document.querySelector(".top-bar").classList.add("active");
    removeError('title')
    removeError('content')
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

function displayError(errorId,message){
    const error = document.getElementById(errorId)
    if(error.classList.contains('.hidden')){
        error.classList.remove('hidden')
    }
    error.textContent = message
}

function removeError(errorId){
    const error = document.getElementById(errorId)
    error.classList.add('hidden')
}

