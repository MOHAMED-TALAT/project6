var allImg = Array.from( document.querySelectorAll("img") )  //  كده هما ليست لازم احولهم لاراي عشان استخدم ميثود الاراي
var innerdiv = document.querySelector(".innerdiv")
var currentIndex = 0


for(var i = 0 ; i < allImg.length ; i++ ){
    allImg[i].addEventListener("click" , function(e){
        var clickimg = e.target.getAttribute('src');
        document.querySelector(".mylayer").classList.remove('d-none')  // ????      style   لو عايز اعدلها من 
        innerdiv.style.backgroundImage = `url(${clickimg})`

        
        currentIndex = allImg.indexOf(e.target)  // رقم الصوره الي دست عليها 

       

    })

}


var delet = document.querySelector(".delet")
var rightPuttom = document.querySelector(".rightbuttom")
var leftPuttom = document.querySelector(".leftbuttom")



delet.addEventListener("click" , deletElement )

rightPuttom.addEventListener("click" , nextElement )

leftPuttom.addEventListener("click" , prevElement )


function deletElement(){
    document.querySelector(".mylayer").classList.add('d-none')


}

function nextElement(){
    currentIndex +=1
    if (currentIndex == allImg.length){
        currentIndex = 0
    }
    var nexElementSrc = allImg[currentIndex].getAttribute('src')
    innerdiv.style.backgroundImage = `url(${nexElementSrc})`


}
function prevElement(){
    currentIndex -= 1
    if (currentIndex == -1){
        currentIndex = allImg.length -1 
    }
    var prevElementSrc = allImg[currentIndex ].getAttribute('src')
    innerdiv.style.backgroundImage = `url(${prevElementSrc})`


}




