const posts =[
    {title: 'Post one',body:'this is post one'},
    {title: 'Post two', body: 'this is post two'}
]
function getPost(){
setTimeout(()=>{
   let output=''
   posts.forEach((post,index) =>{
         output+= `<li>${post.body}</li>`;
   })
   document.body.innerHTML = output;
},1000)

}

function createPost(post,callback){
setTimeout(()=>{
   posts.push(post);
   callback();
},2000)
}

createPost({title: 'Post one', body: 'this is post one'},getPost)