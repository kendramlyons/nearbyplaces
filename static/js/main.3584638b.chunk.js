(this.webpackJsonpnearbyplaces=this.webpackJsonpnearbyplaces||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),c=n(21),r=n.n(c),o=(n(28),n(17)),d=n(8),l=n(10),h=n(11),j=n(13),u=n(12),b=n(4),p=(n(29),[{name:"The Taco Shop Co.",address:"1350 E Broadway Blvd, Tucson, AZ 85719",reviews:[{text:" Delicious! ",rating:"*****"},{text:" Amazing burritos. ",rating:"*****"},{text:" Tasty and affordable! ",rating:"****"},{text:" Good window and drive through service. ",rating:"****"}]},{name:"Barrio Brewing",address:"800 E 16th St, Tucson, AZ 85719",reviews:[{text:" Fabulous beer! ",rating:"*****"},{text:" Amazing wings. ",rating:"*****"},{text:" Awesome atmosphere! ",rating:"*****"},{text:" Great dine-in and take-out services. ",rating:"*****"}]},{name:"Tall Boys/La Cocina",address:"201 N Court Ave, Tucson, AZ 85701",reviews:[{text:" Best brunch! ",rating:"*****"},{text:" Love the savory corn cakes. ",rating:"*****"},{text:" Great veg options! ",rating:"*****"},{text:" Outdoor dining at its funnest. ",rating:"*****"}]},{name:"Tumerico",address:"2526 E 6th St, Tucson, AZ 85716",reviews:[{text:" Best vegan Mexican food! ",rating:"*****"},{text:" Love the tamales. ",rating:"*****"},{text:" Gourmet veg options! ",rating:"*****"},{text:" Delicious lattes & Turkish coffee. ",rating:"*****"}]}]),x={fetchPlaces:function(){return fetch("https://kendramlyons-nearbyplaces-api.herokuapp.com//places").then((function(e){return e.json()}))},search:function(e,t){return p.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},addPlace:function(e){p.push(e)}},m=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).search=function(e){var t=x.search(s.state.searchTerm);s.setState({result:t}),e.preventDefault()},s.handleChange=function(e){var t=e.target.value,n=e.target.name;s.setState(Object(d.a)({},n,t))},s.body=function(e){return console.log(e),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"searchPlaces",children:[Object(a.jsxs)("form",{onSubmit:s.search,children:[Object(a.jsx)("label",{children:" Find Nearby Places: "}),Object(a.jsx)("input",{type:"text",value:s.state.searchTerm,onChange:s.handleChange,name:"searchTerm"}),Object(a.jsx)("button",{type:"submit",children:"Search"})]}),Object(a.jsx)("div",{id:"searchResults",children:s.state.result.map((function(e){return Object(a.jsxs)(b.b,{to:{pathname:"/place",state:{place:e}},id:"aPlace",children:[Object(a.jsx)("h1",{children:e.name}),Object(a.jsx)("h3",{children:e.address}),e.reviews.map((function(e){return Object(a.jsxs)("div",{id:"aRating",children:[Object(a.jsx)("h2",{id:"stars",children:e.rating}),Object(a.jsx)("p",{id:"review",children:e.text})]})}))]})}))})]}),Object(a.jsx)("div",{id:"new",children:Object(a.jsx)(b.b,{id:"addNew",to:{pathname:"/place",state:{username:e}},children:"Add New Place"})}),Object(a.jsx)("div",{id:"myPlaces",children:s.state.places.map((function(e){return Object(a.jsx)(b.b,{to:{pathname:"/place",state:{place:e}},id:"myPlaces",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:e.name}),Object(a.jsx)("p",{children:e.address})]})})}))})]})},s.state={username:"",places:[],cursor:0,searchTerm:"",result:[]},s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.fetchPlaces().then((function(t){e.setState({places:t}),console.log(t)})).catch((function(e){return console.log(e)})),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e="",t=this.props.location;return t&&t.state&&t.state.user&&(e=t.state.user),Object(a.jsxs)("div",{id:"mainBody",children:[Object(a.jsx)("div",{id:"header",children:Object(a.jsx)("h1",{children:"Welcome to Nearby Places!"})}),Object(a.jsx)("div",{id:"loginLink",children:e.length>0?e:Object(a.jsx)(b.b,{to:"/login",id:"loginText",children:" Login "})}),this.body(e),Object(a.jsx)("br",{})]})}}]),n}(i.a.Component),O=n(2),v=(n(35),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){a.state.username.trim().length>0&&a.setState({authenticated:!0}),e.preventDefault()},a.handleChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(d.a)({},n,t))},a.state={username:"",authenticated:!1,password:""},a}return Object(h.a)(n,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?Object(a.jsx)(O.a,{to:e}):Object(a.jsxs)("div",{id:"mainBody",children:[Object(a.jsxs)("div",{id:"header",children:[Object(a.jsx)(b.b,{to:"/",id:"hometext",children:Object(a.jsx)("h2",{children:"Nearby Places"})}),Object(a.jsx)("h3",{children:"Login"})]}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,id:"loginForm",children:[Object(a.jsx)("label",{children:"Username: "}),Object(a.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),Object(a.jsx)("label",{children:"  Password: "}),Object(a.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",children:" Login "})]}),Object(a.jsx)("div",{id:"home"})]})}}]),n}(i.a.Component)),g=(n(36),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(d.a)({},n,t))},a.onSubmit=function(e){a.state.placeName.trim().length>0&&a.state.address.trim().length>0&&(x.addPlace({name:a.state.placeName,address:a.state.address,username:a.state.username}),a.setState({placeName:"",address:""}),alert("The place was added successfully!")),e.preventDefault()},a.state={placeName:"",address:"",place:void 0,username:"",reviewText:"",reviewRating:""},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.location&&this.props.location.state&&(this.props.location.state.place&&this.setState({place:this.props.location.state.place}),this.props.location.state.username&&(console.log(this.props.location.state.username),this.setState({username:this.props.location.state.username})))}},{key:"render",value:function(){return console.log(this.state.username),this.props.location.state?0===this.props.location.state.username.length?Object(a.jsx)(O.a,{to:"/login"}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"header",children:Object(a.jsx)(b.b,{to:{pathname:"/",state:{user:this.props.location.state.username}},id:"hometext",children:Object(a.jsx)("h2",{children:"Nearby Places"})})}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,id:"newPlace",children:[Object(a.jsxs)("div",{id:"addPlace",children:[Object(a.jsx)("label",{id:"name",children:"Name:"}),Object(a.jsx)("input",{type:"text",name:"placeName",value:this.state.placeName,onChange:this.handleChange}),Object(a.jsx)("label",{id:"address",children:"Address:"}),Object(a.jsx)("input",{type:"text",name:"address",value:this.state.address,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",id:"button",children:" Add Place "})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{id:"addReview",children:[Object(a.jsx)("label",{id:"aReview",children:"Review:"}),Object(a.jsx)("input",{type:"text",name:"reviewText",value:this.state.reviewText,onChange:this.handleChange}),Object(a.jsx)("label",{id:"aRating",children:"Rating:"}),Object(a.jsx)("input",{type:"text",name:"reviewRating",value:this.state.reviewRating,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",id:"button",children:" Add Review "})]})]})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:this.state.place.name}),this.state.place.reviews?this.state.place.reviews.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:e.rating}),Object(a.jsx)("p",{children:e.text})]})})):"",Object(a.jsx)("p",{children:this.state.place.address})]})}}]),n}(i.a.Component));var f=function(){return Object(a.jsx)(b.a,{basename:"/nearbyplaces",children:Object(a.jsxs)(O.d,{children:[Object(a.jsx)(O.b,{exact:!0,path:"/",render:function(e){return Object(a.jsx)(m,Object(o.a)({},e))}}),Object(a.jsx)(O.b,{path:"/login",children:Object(a.jsx)(v,{})}),Object(a.jsx)(O.b,{path:"/place",render:function(e){return Object(a.jsx)(g,Object(o.a)({},e))}})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),w()}},[[37,1,2]]]);
//# sourceMappingURL=main.3584638b.chunk.js.map