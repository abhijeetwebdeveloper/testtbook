const postext = document.getElementById('text');
const postbutton = document.getElementById('postbtn');
const postcontainer = document.getElementById('divcontainer');
let posts = [];


function upldpost() {
    const text = postext.value;
    if (text != '') {
        const allpost = {
            post: text,
            likes: 0,
            Comments: [],
        };
        posts.push(allpost);
        console.log(posts);
    }
    show();
}

function show() {
    postcontainer.innerHTML = '';
    posts.forEach((p,index)=> {
        const postElement = document.createElement('div');
        postElement.classList.add('data');
        // console.log(p,index);
        postElement.innerHTML = `
     <p>${p.post}</p>
     <button onclick="likepost(${index})">Like ${p.likes}</button>
     <input type='text' id="incomment${index}" placeholder="Comment">
     <button onclick="comentpost(${index},document.getElementByid('incomment${index}').value)">Comment</button>
     <ul class="comn">
     ${p.Comments.map((comment)=> `<li>${commenttext}</li>`)}
     `
     postcontainer.appendChild(postElement);
    })
}

function likepost(index) {
  posts[index].likes++;
  show();

}

function comentpost(index,Commenttext) {
    console.log('comment',Commenttext);
    const comment={post:Commenttext};
    posts[index].Comments.push(comment);
    show();

}

postbutton.addEventListener('click', upldpost);

