const button = document.getElementById('makeFriends');
const makeFriends = document.getElementById('friendsList');
const friends = ['rick','ian','book','michael','darrius','magic','horacio','JJ','bennie','snipes']


document.addEventListener('DOMContentLoaded',()=>{
    console.log('ready');
})


button.addEventListener('click',()=>{
    for(i=0;i<friends.length;i++)
    console.log(friends[i]);
    document.createElement("li");
    li.className('friendItem');
    // makeFriends.appendChild('friendItem');
    })
