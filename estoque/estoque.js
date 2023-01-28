let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar')
let searchBtn = document.querySelector('.bx-search')
const navbar=document.querySelector(".bar-mercado")


btn.onclick=function(){
    sidebar.classList.toggle("active")
}

searchBtn.onclick=function(){
    sidebar.classList.toggle("active")
}

window.onscroll = () =>{
    
    
    if(this.scrollY>20){
        console.log("indo para baixo")
        navbar.classList.add("sticky")
    }else{
        console.log("indo para cima")
        navbar.classList.remove("sticky")
    }
    
}