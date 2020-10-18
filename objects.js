var umbrella={
    color:"pink",
    isOpen:false,
    open:function(){
        if(umbrella.isOpen===true){
            return "The umbrella is already opened!";
        }else{
            umbrella.isOpen=true;
            return "Julia open the umbrella!";
        }
    },
    close:function(){
        if(umbrella.isOpen===false){
            return "The umbrella is already closed!";
        }else{
            umbrella.isOpen=false;
            return "Julia close the umbrella!";
        }
    }
};

console.log(umbrella.close());