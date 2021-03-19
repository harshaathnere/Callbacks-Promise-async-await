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

function createPost(post){
    return new Promise((resolve, reject)=>{

setTimeout(()=>{
   posts.push(post);
   const error = false;
 if(!error){
     resolve();
 }
 else{
     reject("went wrong");
 }
    })
},2000)
}

// createPost({title: 'Post one', body: 'this is post one'})
// .then(getPost)
// .catch(err=> console.log(err));
//Async/await
//   async function init(){
//      await createPost({title: 'Post one', body: 'this is post one'}) 
//      getPost();   
//  }
//  init();

////Async/await/fecth

async function fetchUsers(){
   const res= await fetch('https://jsonplaceholder.typicode.com/users');
  const data=   await res.json();
     console.log(data);
}
fetchUsers();

//promise all


// const promise1 = ['Hello world'];
// const promise2 = 10
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve, 2000,'Goodbye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
// Promise.all([promise1, promise2,promise3,promise4]).then((value)=>console.log(value))

