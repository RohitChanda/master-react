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


## React.createElement() 
createElement lets you create a React element. It serves as an alternative to writing JSX.

```const element = createElement(type, props, ...children);```

And if we do ```console.log(heading)```  → it will print an **Object** in the console, not any HTML tag.

<img width="355" alt="image" src="https://github.com/user-attachments/assets/5ce60153-274b-437a-bf26-58ce2250cc13">

***createElement*** creates an Object, and while it is rendering into a DOM it converts it into an HTML code (Browser Understand) and puts it into the DOM.

 Create the same structure using the createElement function

<img width="535" alt="image" src="https://github.com/user-attachments/assets/1ed81faa-8a53-43b7-af5e-6d16c2edb720">

## ReactDOM.createRoot() 
```createRoot(domNode, options?)``` Call createRoot to create a React root for displaying content inside a browser DOM element.

```const root = ReactDOM.createRoot(document.getElementById('root'));```

## render()
render method renders a piece of JSX (“React node”) into a browser DOM node(root node).

```root.render(heading);```



## What is the full form of npm?
Everything but not the Node package manager. npm does not have a full form.



## Q) What is package.json:
Package.json file is a configuration for NPM. Whatever packages our project needs, we install those packages using.
```npm install <packageName>.```

Once package installation is complete, their versions and configuration related information is stored as dependencies inside package.json file.

**1.Project Configuration:**

package.json serves as a manifest file for Node projects, containing metadata about the project and its dependencies.

It includes information such as the project name, version, entry point, scripts, and dependencies.

**2.Dependency Management:**

Dependencies are listed in the “dependencies” section, specifying the packages required for the project to run.

**3.Version Management:**

Versions of dependencies may be specified with ***semantic versioning*** (SemVer) rules in the package.json.

![image](https://github.com/user-attachments/assets/0edff042-2c2c-40a1-8779-e55d916a048a)



## package-lock.json:
Package-lock.json locks the exact version of packages being used in the project.

**1. Dependency Locking:**

package-lock.json is an auto-generated file that provides a detailed, deterministic record of the dependency tree.
It locks down the specific versions of every installed package(dependencies and sub-dependencies), preventing unintended updates.

**2. Version Consistency:**

This file ensures that every developer working on the project, as well as the CI/CD system, uses the exact same versions of dependencies.

**3. Improved Installation Speed:**

package-lock.json optimizes dependency installation by storing a flat node_modules structure, reducing the need for deep dependency resolution during installation.
This results in faster and more reliable installations.


## Q ) What is the difference between package.json and package.lock.json?
In package.json we have information about the generic version of installed packages whereas in package.lock.json we have information about the specific or exact version of installed packages.

## What is node_modules:
Which gets installed is like a database for the npm. Every dependency in node_module will have its package.json. Node modules are very heavy so we should always put this in git ignore.
