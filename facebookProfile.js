var facebookProfile={
    name:"Rabbi Hasan",
    friends:100,
    messages:["Message 1", "Message 2", "Message 3", "Message 4"],
    postMessage:function(message){
        facebookProfile.messages.push(message)
    },
    deleteMessage:function(index){
        facebookProfile.messages.splice(index,1);
    },
    addFriend:function(){
        facebookProfile.friends++;
    },
    removeFriend:function(){
        if(facebookProfile.friends>0){
            facebookProfile.friends--;
        }
        
    }
};