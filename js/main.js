app.on('pageInit', function (page) {
    var pn = page.name;
    var app = this.$app;
    /*if (page.name === 'login') {
        
    }else if(page.name === 'home'){
        $("body").on("click",".pp",function(e){
          e.preventDefault();
          closeApp();
      });
  
      $("body").on("click",".pp2",function(e){
          e.preventDefault();
          onDeviceReady();
      });
    }*/

    //console.log(page);

    switch(pn){
        case 'user-home':
        home();
        break;

        case 'register':
        console.log("Register...");
        break;

        case 'login':
          //var app = this.$app;                
          var user_id = sessionStorage.getItem("user_id");
          //console.log(user_id);
          if (user_id != "") {
              mainView.router.navigate("/home/",{});
          }
        break;

        case 'find_friends':

        
        break;
    }


  
  
  });
  


  function home(){
      alert("hello...");
  }


  function vibration() {
   var time = 1500;
   navigator.vibrate(time);
  }

  function updateColor(){
    var c = localStorage.getItem("color_scheme");
    if(c != null){
      $("body").attr("class","color-theme-"+c);
    }
  }

function updateStats(){
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      timeout: 30000,
      data:{
        'stats': '',
        'user_id': sessionStorage.getItem("user_id")
      },
      success: function(f){
        sessionStorage.setItem("request",f.requests);
        $(".badge-request").html(f.requests);
      }
    });
}