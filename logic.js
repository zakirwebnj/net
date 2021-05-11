/*-------------------hiding the slide bar -----------*/

var z = document.querySelector('i');

const slideBar = document.querySelector('.slide-bar');

const navBar = document.querySelector('.mini-nav-bar');


z.addEventListener('click', function(e){

        
        slideBar.classList.toggle('slide-bar-hidden');
       // navBar.classList.toggle('.mini-nav-bar-visible');
    

});

/*-----------------slide show code-------------------------*/
       



/*----------------------------------------------------------------*/



var photo = document.querySelector('.slide-bar div img');
console.log(photo);

photo.addEventListener('click', function(){

    photo.classList.toggle('lightboxx');
    console.log("excuted sucessfully");

});


/*let next = document.querySelector('.next');
console.log(next);


next.addEventListener('click',function(e){

    document.querySelector('.next').innerHTML =" modified";
})


z.addEventListener('click', function(e){

    navBar.classList.toggle('mini-nav-bar-visible');
});

*/
