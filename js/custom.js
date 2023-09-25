// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
var myTab;
   function openPopup()
   {
    myTab= window.open('pop1.html','pop1', 'width=800,height=500');  
   }
    function openPopup1()
   {
    myTab= window.open('pop2.html','pop2','width=800,height=500');
   }
   function openPopup2()
   {
     myTab=window.open('popup.html','popup','width=800,height=500');
   }   
   


  function closeWindow()
  {

    myTab.close();
  }
   /*let btnOpen=document.querySelector('#open');
    let btnClose=document.querySelector('#close'); */


 
   /*/*  btnOpen.addEventListener('click',()=>{ 
        myTab=window.open('pop1.html','_parent','width=800px,height=500px')
   });
  /* btnClose.addEventListener('click',()=>{
    if(myTab) myTab.close();
  }); */


             /*  const open=document.getElementById('open');
              open.addEventListener('click',()=>{modal.classList.add('show');
            } );
           */