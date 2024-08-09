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

## Q ) Create Hello World Program using only React?
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

<body>
    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const heading = React.createElement(
            "h1",
            {
                className: "heading",
                style: {
                    color: "red",
                },
            },
            "Hello world from react"
        );

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(heading);
    </script>
</body>

</html>
```

## Q ) What is Cross Origin:

The crossorigin attribute in the script tag enables **Cross-
Origin Resource Sharing** (CORS) for loading external JavaScript

files from different origins than the hosting web page. This
allows the script to access resources from the server hosting
the script, such as making HTTP requests or accessing data.
