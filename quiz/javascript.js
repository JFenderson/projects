

const obj = {
    name: 'yaz',
    email: 'yaz@yaz.com',
    friends: [
        {
            name: 'jahan',
            email: 'jahan@jahan.com'
        },
        {
            name: 'rihanna',
            email: 'rihanna@rihanna.com'
        }
    ]
};





















const friends = ['rick','ian','book','michael','darrius','magic','horacio','JJ','bennie','snipes']
const sentence = 'hello world my name is john doe, goodbye forever'

document.addEventListener('DOMContentLoaded',()=>{
    console.log('ready');
const button = document.getElementById('makeFriends');
const friendsList = document.getElementById('friendsList');

button.addEventListener('click',()=>{
    if(friendsList.chidlen.length === friends.length){
        return;
    }


    
    const li = document.createElement("li");
    li.innerText - friends[friendsList.children.length];
    friendsList.appendChild(li);
    
    // makeFriends.appendChild('friendItem');
    });


});





