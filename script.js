$(document).ready(function() {
      $("a#trigger").toggle(function() {
        // Отображаем скрытый блок
        $("DIV#box").fadeIn(); // fadeIn - плавное появление
        return false; // не производить переход по ссылке
      },
      function() {
        // Скрываем блок
        $("DIV#box").fadeOut(); // fadeOut - плавное исчезновение
        return false; // не производить переход по ссылке
      }); // end of toggle()
    }); // end of ready()

    $(document).ready(function() {
          $("a#trigger2").toggle(function() {
            // Отображаем скрытый блок
            $("DIV#box2").fadeIn(); // fadeIn - плавное появление
            return false; // не производить переход по ссылке
          },
          function() {
            // Скрываем блок
            $("DIV#box2").fadeOut(); // fadeOut - плавное исчезновение
            return false; // не производить переход по ссылке
          }); // end of toggle()
        }); // end of ready()
