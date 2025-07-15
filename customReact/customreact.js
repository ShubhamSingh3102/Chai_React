function customRender(reactElement,container){

    /*
    // dom element create krna hai....
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    // adding to the main container....
    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // loop based code....
    // for in loop
    for (const prop in reactElement.props){
        if(prop === 'children'){
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}


// ye sab kaam react ka hota hai under the wood...
const reactElement = { // tree type se dekhta hai...
    // ye sab react ke through hota hai automatically...
    type: 'a', // anchor tag
    props: { // property
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');


// method reactElement ko render kr rha hai.....
// reactElement ko add kr de root ke andar....
customRender(reactElement,mainContainer) // kya inject karu and kaha pe inject karu....