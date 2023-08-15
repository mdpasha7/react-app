const h1tag = React.createElement('h1',{},'hey , this is reactjs');
console.log(h1tag);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1tag);

/*
   <div id="parent">
        <div id="child">
          <h1 id="text">Hello all, i am form reactjs and nestedh1 </h1>
        </div>
   </div>
 */

const nestedElements = React.createElement('div',{id:'parent'},
React.createElement('div',{id:'child'}),
React.createElement('h1',{id:'text'},'Hello all, i am form reactjs and nested h1'));
console.log(nestedElements);
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(nestedElements);
