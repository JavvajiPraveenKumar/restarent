/******************------special dishes------***************/
let imgs=["Pulihora-Tamarind-Rice-Recipe-Step-By-Step-Instructions-1024x932.jpg","2.jpeg","3homemade-food-main.webp","4.jpeg"]
let color=[' rgb(4, 151, 224)','yellow','pink','lightgreen']
let obj=[{title:"Pulihora Rice","desp":"sbcjsfbfsjfnfjfnjn"},
        {title:"Tamata Rice","desp":"The tamato is very deciious is prepared with kokum, tamarind, lemon or green mango as main souring ingredient, along with a blend of spices, lentils, peanuts and jaggery cooked inoil and mixed with cooked rice along with frie"},
        {title:"bagara Rice","desp":"The pulihora is prepared with kokum, tamarind, lemon or green mango as main souring ingredient, along with a blend of spices, lentils, peanuts and jaggery cooked inoil and mixed with cooked rice along with frie"},
        {title:"Dal Rice","desp":"The Dal is the traditional rice is prepared with kokum, tamarind, lemon or green mango as main souring ingredient, along with a blend of spices, lentils, peanuts and jaggery cooked inoil and mixed with cooked rice along with frie"}]
let i=0
let dish=document.getElementsByClassName('dish')[0]
let h3r=document.querySelectorAll(".content h3")[0]
let pr=document.querySelectorAll(".content p")[0]
let imgr=document.querySelectorAll('.dish-image img')[0]
function fwd(){
    i=(i+1)%4
    imgr.src=imgs[i]
    h3r.innerHTML=obj[i].title
    pr.innerHTML=obj[i].desp
    scrollAmount=imgs[i].clientWidth*1;
    imgr.scrollBy({left:scrollAmount,behavior:"smooth"});




}
setInterval(fwd,3000)
/************************ ******accordian*******************************************/
let desr=document.getElementsByClassName('desc')
let ire=document.getElementsByTagName('i')
let p=0
let Afun=(ind)=>{
    if(ind==p)
    {
        if (ire[ind].className=="fa-solid fa-plus"){
            ire[ind].style.Color='red'
            desr[ind].style.display='block'
        }
        else{
            ire[ind].className="fa-solid fa-plus"
            desr[ind].style.display='none'


        }
    
    }
    else{
        ire[p].className="fa-solid  fa-plus"
        desr[p].style.display='none'
        ire[ind].className="fa-solid fa-xmark"
        desr[ind].style.display='block'
        p=ind

    }
}