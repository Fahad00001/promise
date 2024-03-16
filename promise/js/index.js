window.onload=function(){
    // function request(name){
    //     return new Promise(function(resolve,reject){
    //         setTimeout(function(){
    //             if(name=="saurav"){
    //                 resolve("success")
    //             }
    //             else{
    //                 reject("failed")
    //             }
    //         },2000)

    //     })
    // }
    // var btn=document.getElementById("test-btn")
    // btn.onclick=function(){
    //     var r1=document.getElementById("result-1")
    //     r1.innerHTML="loading...."
    //     var response=request("saurav")
    //     response
    //     .then(function(result){
    //         r1.innerHTML=result
    //     })
    //     .catch(function(err){
    //         r1.innerHTML=err
    //     })
    // }
    function delaycode(password){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                if(password=="1234"){
                    resolve("success")
                }
                else{
                    reject("login failed")
                }
          

            },5000)

        })
      

    }
    var btn=document.getElementById("test-btn")
    btn.onclick= async function(){
        try{
            var pm= await delaycode("1234")
            console.log(pm);


        }
        catch(err){
            console.log(err);

        }
    }
   
}