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


## Q) What is JSX(JavaScript XML, or JavaScript Syntax eXtension) (Writing Markup with JSX)
- JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. 
- JSX is HTML-like or XML-like syntax. JSX stands for JavaScript XML. It's a syntax extension for JavaScript. Although there are other ways to write components, most React developers prefer to use JSX, and most codebases use it.
- JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.
- JSX and ReactElements are also not the same, JSX is syntax and ReactElement is an Object.
  
    ```const headingJSx = <h1> Namaste React </h1>;```
  
- It is not a valid  pure Javascript.Javascript doesn't have jsx built inside it, and the JS engine doesn't understand jsx.Its only understands ECMAScript.
- JSX transpiled before it reached to JS engine. And JSX code is transpiled by **Parcel by using BABEL**.
Babel is a Javascript compiler

## Q) What are the Rules of JSX:

**1. Return a single root element:**

To return multiple elements from a component, wrap them with a single parent tag. For example

```js
const HomePage = () => {
    return (
        <div>
            
        </div>
    )
}

const AboutPage = () => {
    return (
        <>
            
        </>
    )
}
```
**2. Close all Tags:**

JSX requires tags to be explicitly closed: self-closing tags like ```<img>``` must become ```<img />```.

**3.camelCase:**

Write code in camelCase in the most of the things! 


## Q) What are the Difference b/w React.createElement and JSX element:
React.createElement()   === >>  ReactElement( js object ) ==== >> HTMLELEMENT(render).

JSX == >> Babel transpile it to React.createElement()   === >>  ReactElement( js object ) ==== >> HTMLELEMENT(render).

***Babel converts this JSX to React.createElement, then React understands the whole code***.





## Q ) What are Components?
There are 2 types of components:

**1.Class-based Components:** - Old way of writing code, used rarely in industry.

**2.Functional Components:** - New way of writing code, most commonly used

## Q ) What is a React Functional Components?
It is just a JavaScript Function that returns some JSX or a react element.

Always name React Functional Component with Capital Letters, otherwise you will confuse it with normal function

```
const HeadingComponent1 = () => ( <h1>Namaste</h1> );

const HeadingComponent2 = () => {
    return <h1>Namaste</h1>
}
const HeadingComponent3 = () => <h1>Namaste</h1>
```

To render a functional component we call them ```<Heading1 />```. This is the syntax that **Babel understands**.

You can also call them using these ways,

```<Title></Title>``` 

or

```{Title()}```


## Q) What is Components Composition?
- A component inside a component.
- Calling a component inside another component is Component Composition.

```
const Title = () => <h1>Namaste React</h1>

const HeadingComponent = () => (
    <div id="container">
        <Title />
    </div>
)
```


## Q ) How to use JavaScript code inside JSX?
Inside a React Component when ```{}``` parenthesis is present we can write any JavaScript expression inside it.

```
const number = 10000;
const HeadingComponent = () => (
    <div id="containter">
        {number}
        <h1>Namaste React</h1>
    </div>
)
```

## Q ) How to call React Element in JSX?
```
const elem = <span> React Element </span>
const HeadingComponent = () => (
    <div id="containter">
        {elem}
        <h1>This is Namaste React</h1>
    </div>
);
```

## Q ) What will happen if we call 2 elements inside each other?
If we put 2 components inside each other, then it will go into an infinite loop and the stack will overflow. It will freeze your browser, so it’s not recommended to do so.


## 22. Advantages of using JSX.

**1.Sanitizes the data:**
If someone gets access to your JS code and sends some malicious data which will then get displayed on the screen, that attack is called cross-site scripting.

It can read cookies, local storage, session storage, get cookies, get info about your device, and read data. JSx takes care of your data.
    
If some API passes some malicious data JSX will escape it. It prevents cross-site scripting and sanitizes the data before rendering.
    
**2. Makes code readable:**
    JSX makes it easier to write code as we are no longer creating elements using React.createElement()
    
**3. Makes code simple and elegant**
    
**4. Show more useful errors and warnings**
    
 **5. JSX prevents code injections (attacks)**




## Q) What is React.Fragment: 
React Fragment works like an empty tag.

Or to get rid of using React.Fragment we can use an empty tag directly in JSX. ```<>``` is the shorthand expression of React. Fragment. It works like the same.

```js
const HomePage = () => {
    return (
        <React.Fragment>

        </React.Fragment>
    )
}

const HomePage1 = () => {
    return (
        <>

        </>
    )
}

```


## Q) How to keep list items in order with key?

You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:


Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

Rather than generating keys on the fly, you should include them in your data.

***Example***
```js
// render people name
const HomePage = () => {

    const people = [{
        id: 0, // Used in JSX as a key
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1, // Used in JSX as a key
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2, // Used in JSX as a key
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        id: 3, // Used in JSX as a key
        name: 'Percy Lavon Julian',
        profession: 'chemist',
      }, {
        id: 4, // Used in JSX as a key
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
      
    return (
        <>
        {
            people.map((item) => {
                return (
                    <li key={item.id}>
                        {item.name}
                    </li>
                )
            })

        }

        </>
    )
}
```

```js
// Filter only chemists value
const HomePage = () => {
  const people = [
    {
      id: 0, // Used in JSX as a key
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1, // Used in JSX as a key
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2, // Used in JSX as a key
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3, // Used in JSX as a key
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4, // Used in JSX as a key
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

 
  const chemists = people.filter((person) => person.profession == "chemist" )

  return (
    <>
      {chemists.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </>
  );
};
```

## Q) Where to get your key 
Different sources of data provide different sources of keys:

**Data from a database:** If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.

**Locally generated data:** If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

## Q) What are the Rules of keys 
Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays. Keys must not change or that defeats their purpose! Don’t generate them while rendering.

## Q) Why does React need keys? 
Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

When we have components at same level and if a new component comes on the first without ID, DOM is going to re-render all the components again. As DOM can’t identify where to place it. But if we give each of them a unique ID then react knows where to put that component according to the ID. It is a good optimization and performance thing.

***Note:*** Never use index as keys in map. It is not recommended.


## Q) Understanding Export and Import in React.

Two types of export/import in React, We will understand each of them in detail.

**1.Default export/import**.

```js
// Syntax
export default Header;

// Or we can write with extension.
export default Header.js;


// import Syntax
import Header from "./components/Header"



```

**2.Named export/import.**

just write the ‘ export ’ keyword before the variables we want to export.

```js
//export
export const About = () => {
    return (
        <>
        </>
    )
}

//Another way of export
const About = () => {
    return (
        <>
        About
        </>
    )
}
export {
    About
}


//import
import { About } from "./About";
```
## Q) What are the Rules of Hooks?
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called.

Functions whose names start with use are called Hooks in React.

check the official docs - [https://react.dev/reference/rules/rules-of-hooks](https://react.dev/reference/rules/rules-of-hooks);

- [Only call Hooks at the top level](https://react.dev/reference/rules/rules-of-hooks#only-call-hooks-at-the-top-level)
  - Call them at the top level in the body of a function component.
  - Call them at the top level in the body of a custom Hook.
    
- [Only call Hooks from React functions](https://react.dev/reference/rules/rules-of-hooks#only-call-hooks-from-react-functions)
  - Call Hooks from React function components.
  - Call Hooks from custom Hooks.







