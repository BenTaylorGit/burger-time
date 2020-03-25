$(document).ready(function() {
    
    $(".eatBurger").on("submit", function(event) {
      event.preventDefault();
  
      var burgerName = $(this).children(".burgerName").val();
      console.log(burgerName);
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burgerName
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
  
    });
  });
  