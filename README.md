# Master React

## Q ) Create Hello World Program using only JavaScipt?
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="root"></div>

    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "This is heading";
        const root = document.querySelector("#root");
        root.appendChild(heading);
    </script>
</body>

</html>
```
