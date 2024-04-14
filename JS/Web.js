const logincontainer=document.querySelector('.login-container');
const sing1=document.querySelector('.sing');
const loginlink=document.querySelector('.login-link');





loginlink.addEventListener('click',()=>{
    logincontainer.classList.add('active');
});


sing1.addEventListener('click',()=>{
    logincontainer.classList.remove('active');
});