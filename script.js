console.log("script is running...")
// document.querySelector('.cross').style.display='none';
document.querySelector('.humburg').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hum').style.display="inline"
        document.querySelector('.cross').style.display="none"
    }
})
