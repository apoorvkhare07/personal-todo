(this["webpackJsonpdev.apoorv"]=this["webpackJsonpdev.apoorv"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(1),c=a(2),l=a(4),u=a(3),h=a(0),o=a.n(h),i=a(6),m=a.n(i),s=function(){return o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Task"),o.a.createElement("th",null,"Completed")))},d=function(e){var t=e.characterData.map((function(t,a){return t.checked?o.a.createElement("tr",{key:a},o.a.createElement("td",{style:{textDecoration:"line-through"}},t.task),o.a.createElement("td",null," ",o.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(){return e.handleCheck(a)}})),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete"))):o.a.createElement("tr",{key:a},o.a.createElement("td",null,t.task),o.a.createElement("td",null," ",o.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(){return e.handleCheck(a)}})),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))}));return o.a.createElement("tbody",null,t)},k=function(e){var t=e.characterData,a=e.removeCharacter,n=e.handleCheck;return o.a.createElement("table",null,o.a.createElement(s,null),o.a.createElement(d,{characterData:t,removeCharacter:a,handleCheck:n}))},E=a(7),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).initialState={task:"",checked:!1},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(E.a)({},n,r))},e.onFormSubmit=function(t){t.preventDefault(),e.props.handleSubmit(e.state),e.setState(e.initialState)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.task;return o.a.createElement("form",{onSubmit:this.onFormSubmit},o.a.createElement("label",{for:"task"},"Task"),o.a.createElement("input",{type:"text",name:"task",id:"task",value:e,onChange:this.handleChange}),o.a.createElement("button",{type:"submit"},"Add"))}}]),a}(h.Component),v=(a(14),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return(e=t.call.apply(t,[this].concat(l))).state={characters:[]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(n.a)(e.state.characters),[t])})},e.handleCheck=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a==t&&(e.checked=!e.checked),e}))})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.characters;return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Todo-App"),o.a.createElement("p",null,"Add a task "),o.a.createElement(k,{characterData:e,removeCharacter:this.removeCharacter,handleCheck:this.handleCheck}),o.a.createElement("h3",null,"Add New"),o.a.createElement(f,{handleSubmit:this.handleSubmit}))}}]),a}(h.Component));m.a.render(o.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.ee39ba8f.chunk.js.map