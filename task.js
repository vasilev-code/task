$( '#form' ).submit(function( event ) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = JSON.stringify($("#form").serializeArray());

    xhr.onloadend = function() {
        if (xhr.status == 200) {
            setTimeout(sendData, 3000);
        } else {
          console.log("Ошибка " + this.status);
        }
      };

    xhr.open("POST", 'https://localhost/form')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(formData);
    
});

$('#submit').click(function() {
    $("#submit").css("display", "none");
    $('#indicator').css('display','block');
  });

function sendData() {
    $('#indicator').css('display','none');
    $('#success').css('display', 'block');
}
