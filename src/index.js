// write your code here
document.addEventListener("DOMContentLoaded",function(){

let newComment;

// Target the form and add eventlistener

document.getElementById("comment-form").addEventListener("submit",addComment)

// Target the input form 

document.querySelector(".comment-input").addEventListener("input",function(e){

newComment=e.target.value;

})

function addComment(e){

    e.preventDefault();
    const commentsList=document.getElementById("comments-list");

    let newLi=document.createElement("li");
    
    let appended=commentsList.appendChild(newLi);

    appended.textContent=newComment;

}

document.getElementById("comment-form").reset();

})


// Handling the like Button
 
let likeBtn=document.getElementById('like-button');

likeBtn.addEventListener("click",handleClick)


// select likes el
let likeEl=document.getElementById("like-count");
// variable to track likes
let count=0;
// display inital likes count
likeEl.innerHTML=`${count} likes`;


function handleClick(e){

likeBtn.style.color="#ff2606";

count++;
likeEl.innerHTML=`${count} likes`;

};











