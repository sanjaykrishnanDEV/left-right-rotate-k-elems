<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let v = "lef";
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      function sorted(arr) {
        if (v == "left") {
          for (let i = 0; i < 8; i++) {
            let b = arr.shift();
            arr.push(b);
          }
        } else {
          for (let i = 0; i < 6; i++) {
            let b = arr.pop();
            arr.unshift(b);
          }
        }
      }
      sorted(arr);
      document.write(arr);
    </script>
  </body>
</html>
