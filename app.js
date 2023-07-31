const heading = React.createElement("div",{"id":"parent"},[React.createElement("div",{"id":"child1"},[
    React.createElement("h1",{},"This is my first H1 Tag !"),
    React.createElement("h1",{},"This is my second H1 Tag !")
]),React.createElement("div",{"id":"child2"},[
    React.createElement("h1",{},"This is my first H1 Tag !"),
    React.createElement("h1",{},"This is my second H1 Tag !")
])]);
                    
const data = ReactDOM.createRoot(document.getElementById("root"));
data.render(heading);

