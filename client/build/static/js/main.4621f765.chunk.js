(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(21),i=c.n(a),l=(c(28),c(3)),o=(c(29),c(4)),r=c(2),d=c(0);var j=function(){var e=Object(n.useContext)(_),t=e.state,c=e.dispatch,s=Object(o.f)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"navbar-fixed",children:Object(d.jsx)("nav",{children:Object(d.jsxs)("div",{className:"nav-wrapper",children:[Object(d.jsx)(r.b,{exact:!0,to:t?"/":"/signin",className:"brand-logo",children:"Instagram"}),Object(d.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:t?[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/profile",children:"Profile"})},"1"),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/myfollowingpost",children:"Posts"})},"2"),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/create",children:Object(d.jsx)("i",{className:"material-icons",children:"add"})})},"3"),Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"btn waves-effect waves-light",onClick:function(){localStorage.clear(),c({type:"CLEAR"}),s.push("/signin")},children:"Log Out"})},"4")]:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/signin",children:"Login"})},"5"),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/signup",children:"Sign Up"})},"6")]})]})})})})};var h=function(){var e=Object(n.useContext)(_),t=e.state,c=e.dispatch,s=Object(o.f)();return Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsxs)("div",{className:"auser_info",children:[Object(d.jsx)("img",{src:t?t.pic:"loading",alt:"profilepic"}),Object(d.jsxs)("div",{className:"user_details",children:[Object(d.jsx)("h5",{children:t?t.name:"loading"}),Object(d.jsx)("h6",{onClick:function(){localStorage.clear(),c({type:"CLEAR"}),s.push("/signin")},children:"Logout"})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{children:Object(d.jsx)(r.b,{className:"options",to:"/create",children:Object(d.jsxs)("h6",{children:["Create Post ",Object(d.jsx)("i",{className:"material-icons",children:"add"})]})})})]})},u=c(6),b=c.n(u);var f=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(_),i=a.state;return a.dispatch,Object(n.useEffect)((function(){fetch("/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){s(e.posts)}))}),[]),Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)("div",{id:"post",children:c.map((function(e){return Object(d.jsxs)("div",{className:"postcard",children:[Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"dp",children:[Object(d.jsxs)("h5",{children:[Object(d.jsx)("img",{src:e.postedBy.pic,alt:"dp"}),Object(d.jsx)(r.b,{to:e.postedBy._id!==i._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name})," "]}),Object(d.jsx)("h4",{children:e.postedBy._id===i._id&&Object(d.jsx)("i",{className:"material-icons",style:{float:"right",color:"#f44336"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){if(e.error)b.a.toast({html:e.error,classes:"#d32f2f red darken-2"});else{b.a.toast({html:"Post Deleted Successfully",classes:"#4caf50 green"});var t=c.filter((function(t){return t._id!==e._id}));s(t)}}));var t},children:"delete"})})]}),Object(d.jsx)("img",{src:e.photo,alt:"status"})]},e._id),Object(d.jsxs)("div",{className:"card-content",children:[e.likes.includes(i._id)?Object(d.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/unlike",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=c.map((function(t){return t._id===e._id?e:t}));s(t)})).catch((function(e){console.log(e)}));var t},children:"thumb_down"}):Object(d.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/like",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=c.map((function(t){return t._id===e._id?e:t}));s(t)})).catch((function(e){console.log(e)}));var t},children:"thumb_up"}),Object(d.jsxs)("h5",{children:[e.likes.length," likes"]}),Object(d.jsx)("h5",{children:e.title}),Object(d.jsx)("h6",{children:e.body}),Object(d.jsx)("hr",{}),e.comments.map((function(e){return Object(d.jsxs)("h6",{children:[Object(d.jsx)("span",{style:{fontSize:"1.6rem",fontWeight:"400"},children:e.postedBy.name})," ",e.text]})})),Object(d.jsx)("form",{onSubmit:function(t){var n,a;t.preventDefault(),n=t.target[0].value,a=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:a,text:n})}).then((function(e){return e.json()})).then((function(e){var t=c.map((function(t){return t._id===e._id?e:t}));s(t)})).catch((function(e){console.log(e)}))},children:Object(d.jsx)("input",{type:"text",placeholder:"add a Comment"})})]})]})}))}),Object(d.jsx)(h,{})]})};var O=function(){var e=Object(n.useContext)(_),t=(e.state,e.dispatch),c=Object(o.f)(),s=Object(n.useState)(""),a=Object(l.a)(s,2),i=a[0],j=a[1],h=Object(n.useState)(""),u=Object(l.a)(h,2),f=u[0],O=u[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card-content white-text",children:[Object(d.jsx)("span",{className:"card-title",children:"Instagram"}),Object(d.jsxs)("form",{className:"col s12",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"input-field col s12",children:Object(d.jsx)("input",{id:"email",type:"email",className:"validate",placeholder:"Enter Your Email",value:f,onChange:function(e){return O(e.target.value)}})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"input-field col s12",children:Object(d.jsx)("input",{id:"password",type:"password",placeholder:"Enter Your password",className:"validate",value:i,onChange:function(e){return j(e.target.value)}})})}),Object(d.jsx)("div",{className:"input-field col s12",children:Object(d.jsx)("button",{className:"btn waves-effect waves-light",onClick:function(e){e.preventDefault(),/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(f)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,password:i})}).then((function(e){return e.json()})).then((function(e){e.error?b.a.toast({html:e.error,classes:"#d32f2f red darken-2"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),b.a.toast({html:"Signed In",classes:"#4caf50 green"}),c.push("/"))})).catch((function(e){console.log(e)})):b.a.toast({html:"Invalid Email ",classes:"#d32f2f red darken-2"})},children:"Log in"})})]})]}),Object(d.jsx)("div",{className:"card-action",children:Object(d.jsxs)("h6",{children:["Don't have an Account ?"," ",Object(d.jsxs)("span",{children:[Object(d.jsx)(r.b,{to:"/signUp",children:"Sign up instead"})," "]})," "]})})]})})};var p=function(){var e=Object(o.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(""),j=Object(l.a)(i,2),h=j[0],u=j[1],f=Object(n.useState)(""),O=Object(l.a)(f,2),p=O[0],m=O[1],x=Object(n.useState)(""),g=Object(l.a)(x,2),v=g[0],N=g[1],y=Object(n.useState)(void 0),w=Object(l.a)(y,2),S=w[0],_=w[1];Object(n.useEffect)((function(){S&&C()}),[S]);var C=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:p,password:h,pic:S})}).then((function(e){return e.json()})).then((function(t){t.error?b.a.toast({html:t.error,classes:"#d32f2f red darken-2"}):(b.a.toast({html:t.message,classes:"#4caf50 green"}),e.push("/signIn"))})).catch((function(e){console.log(e)})):b.a.toast({html:"Invalid Email ",classes:"#d32f2f red darken-2"})},I=function(){v?function(){var e=new FormData;e.append("file",v),e.append("upload_preset","insta-clone"),e.append("cloud_name","dtcqgxgzc"),fetch("https://api.cloudinary.com/v1_1/dtcqgxgzc/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){_(e.url)})).catch((function(e){console.log(e)}))}():C()};return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card-content white-text",children:[Object(d.jsx)("span",{className:"card-title",children:"Instagram"}),Object(d.jsxs)("form",{className:"col s12",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"input-field col s12",children:Object(d.jsx)("input",{placeholder:"Enter Your full Name",id:"full_name",type:"text",className:"validate",value:s,onChange:function(e){return a(e.target.value)}})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"input-field col s12",children:Object(d.jsx)("input",{id:"email",type:"email",className:"validate",placeholder:"Enter Your Email",value:p,onChange:function(e){return m(e.target.value)}})})}),Object(d.jsxs)("div",{className:"file-field input-field",children:[Object(d.jsxs)("div",{className:"btn",children:[Object(d.jsx)("span",{children:"Upload Pic"}),Object(d.jsx)("input",{type:"file",onChange:function(e){N(e.target.files[0])}})]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"input-field col s12",children:Object(d.jsx)("input",{id:"password",type:"password",placeholder:"Enter Your password",className:"validate",value:h,onChange:function(e){return u(e.target.value)}})})}),Object(d.jsx)("div",{className:"input-field col s12",children:Object(d.jsx)("button",{className:"btn waves-effect waves-light",onClick:function(e){e.preventDefault(),I()},children:"Sign Up"})})]})]}),Object(d.jsx)("div",{className:"card-action",children:Object(d.jsxs)("h6",{children:["Already have an Account ?"," ",Object(d.jsxs)("span",{children:[Object(d.jsx)(r.b,{to:"/signIn",children:"Login instead"})," "]})," "]})})]})})},m=c(7);var x=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(_),i=a.state,o=a.dispatch,j=Object(n.useState)(""),h=Object(l.a)(j,2),u=h[0],b=h[1];return Object(n.useEffect)((function(){fetch("/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){s(e.mypost)}))}),[]),Object(n.useEffect)((function(){if(u){var e=new FormData;e.append("file",u),e.append("upload_preset","insta-clone"),e.append("cloud_name","dtcqgxgzc"),fetch("https://api.cloudinary.com/v1_1/dtcqgxgzc/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){fetch("/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(t){localStorage.setItem("user",JSON.stringify(Object(m.a)(Object(m.a)({},i),{},{pic:e.pic}))),o({type:"UPDATEPIC",payload:t.pic})}))})).catch((function(e){console.log(e)}))}}),[u]),Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsxs)("div",{className:"user_info",children:[Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:i?i.pic:"loading",alt:"profilepic"})}),Object(d.jsxs)("div",{className:"user_details",children:[Object(d.jsx)("h4",{children:i?i.name:"loading"}),Object(d.jsxs)("div",{className:"stats",children:[Object(d.jsxs)("div",{className:"stat post",children:[Object(d.jsx)("div",{className:"counts",children:c.length}),Object(d.jsx)("div",{className:"count_name",children:"Posts"})]}),Object(d.jsxs)("div",{className:"stat followers",children:[Object(d.jsx)("div",{className:"counts",children:i?i.followers.length:0}),Object(d.jsx)("div",{className:"count_name",children:"Followers"})]}),Object(d.jsxs)("div",{className:"stat following",children:[Object(d.jsx)("div",{className:"counts",children:i?i.following.length:0}),Object(d.jsx)("div",{className:"count_name",children:"Following"})]})]}),Object(d.jsx)("div",{className:"user_personal",children:Object(d.jsxs)("h6",{children:[i?i.name:"loading"," ",Object(d.jsx)("br",{})," (",i?i.email:"loading",")"]})}),Object(d.jsxs)("div",{className:"createpost",children:[Object(d.jsx)("div",{children:Object(d.jsx)(r.b,{to:"/create",children:Object(d.jsxs)("h6",{children:["Create Post ",Object(d.jsx)("i",{className:"material-icons",children:"add"})]})})}),Object(d.jsxs)("div",{className:"file-field input-field",children:[Object(d.jsxs)("div",{className:"btn",children:[Object(d.jsx)("span",{children:"Update Pic"}),Object(d.jsx)("input",{type:"file",onChange:function(e){var t;t=e.target.files[0],b(t)}})]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]})]})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"posts",children:c.map((function(e){return Object(d.jsx)("img",{src:e.photo,alt:"mygallery"},e._id)}))})]})};var g=function(){var e=Object(o.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(""),r=Object(l.a)(i,2),j=r[0],h=r[1],u=Object(n.useState)(""),f=Object(l.a)(u,2),O=f[0],p=f[1],m=Object(n.useState)(""),x=Object(l.a)(m,2),g=x[0],v=x[1];return Object(n.useEffect)((function(){g&&fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:s,body:j,pic:g})}).then((function(e){return e.json()})).then((function(t){t.error?b.a.toast({html:t.error,classes:"#d32f2f red darken-2"}):(b.a.toast({html:"Posted Successfully",classes:"#4caf50 green"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[g]),Object(d.jsx)("div",{className:"createpost",children:Object(d.jsxs)("div",{className:"card input-filed",children:[Object(d.jsx)("h4",{children:"Create Post"}),Object(d.jsx)("input",{type:"text",placeholder:"Title",value:s,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Body",value:j,onChange:function(e){return h(e.target.value)}}),Object(d.jsxs)("div",{className:"file-field input-field",children:[Object(d.jsxs)("div",{className:"btn",children:[Object(d.jsx)("span",{children:"Upload Pic"}),Object(d.jsx)("input",{type:"file",onChange:function(e){p(e.target.files[0])}})]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(d.jsxs)("button",{className:"btn waves-effect waves-light",onClick:function(){return function(){var e=new FormData;e.append("file",O),e.append("upload_preset","insta-clone"),e.append("cloud_name","dtcqgxgzc"),fetch("https://api.cloudinary.com/v1_1/dtcqgxgzc/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){v(e.url)})).catch((function(e){console.log(e)}))}()},children:["Submit Post",Object(d.jsx)("i",{className:"material-icons right",children:"send"})]})]})})},v=c(23);var N=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(_),i=a.state,r=a.dispatch,j=Object(o.g)().userid,h=Object(n.useState)(!i||!i.following.includes(j)),u=Object(l.a)(h,2),b=u[0],f=u[1];return Object(n.useEffect)((function(){fetch("/user/".concat(j),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(d.jsx)(d.Fragment,{children:c?Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsxs)("div",{className:"user_info",children:[Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:c.user.pic,alt:"profilepic"})}),Object(d.jsxs)("div",{className:"user_details",children:[Object(d.jsx)("h4",{children:c.user.name}),Object(d.jsxs)("div",{className:"stats",children:[Object(d.jsxs)("div",{className:"stat post",children:[Object(d.jsx)("div",{className:"counts",children:c.posts.length}),Object(d.jsx)("div",{className:"count_name",children:" Posts"})]}),Object(d.jsxs)("div",{className:"stat followers",children:[Object(d.jsx)("div",{className:"counts",children:c.user.followers.length}),Object(d.jsx)("div",{className:"count_name",children:"Followers"})]}),Object(d.jsxs)("div",{className:"stat following",children:[Object(d.jsx)("div",{className:"counts",children:c.user.following.length}),Object(d.jsx)("div",{className:"count_name",children:"Following"})]})]}),Object(d.jsxs)("div",{className:"user_personal",children:[Object(d.jsxs)("h6",{children:[c.user.name," ",Object(d.jsx)("br",{})," (",c.user.email,")"]}),Object(d.jsx)("h6",{children:b?Object(d.jsx)("button",{className:"btn waves-effect waves-light",onClick:function(e){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:j})}).then((function(e){return e.json()})).then((function(e){r({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),s((function(t){return Object(m.a)(Object(m.a)({},t),{},{user:Object(m.a)(Object(m.a)({},t.user),{},{followers:[].concat(Object(v.a)(t.user.followers),[e._id])})})})),f(!1)}))},children:"Follow"}):Object(d.jsx)("button",{className:"btn waves-effect waves-light",onClick:function(e){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:j})}).then((function(e){return e.json()})).then((function(e){r({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),s((function(t){var c=t.user.followers.filter((function(t){return t!==e._id}));return Object(m.a)(Object(m.a)({},t),{},{user:Object(m.a)(Object(m.a)({},t.user),{},{followers:c})})})),f(!0)}))},children:"UnFollow"})})]})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"posts",children:c.posts.map((function(e){return Object(d.jsx)("img",{src:e.photo,alt:"mygallery"},e._id)}))})]}):Object(d.jsx)("h2",{children:"Loading....."})})};var y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(_),i=a.state;return a.dispatch,Object(n.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){s(e.posts)}))}),[]),Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)("div",{id:"post",children:c.map((function(e,t){return Object(d.jsxs)("div",{className:"postcard",children:[Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"dp",children:[Object(d.jsxs)("h5",{children:[Object(d.jsx)("img",{src:e.postedBy.pic,alt:"dp"}),Object(d.jsxs)(r.b,{to:e.postedBy._id!==i._id?"/profile/".concat(e.postedBy._id):"/profile/",children:[e.postedBy.name," "]})," "]}),Object(d.jsx)("h4",{children:e.postedBy._id===i._id&&Object(d.jsx)("i",{className:"material-icons",style:{float:"right",color:"#f44336"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){if(e.error)b.a.toast({html:e.error,classes:"#d32f2f red darken-2"});else{b.a.toast({html:"Post Deleted Successfully",classes:"#4caf50 green"});var t=c.filter((function(t){return t._id!==e._id}));s(t)}}));var t},children:"delete"})})]}),Object(d.jsx)("img",{src:e.photo,alt:"status"})]},e._id),Object(d.jsxs)("div",{className:"card-content",children:[e.likes.includes(i._id)?Object(d.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/unlike",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=c.map((function(t){return t._id===e._id?e:t}));s(t)})).catch((function(e){console.log(e)}));var t},children:"thumb_down"}):Object(d.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/like",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=c.map((function(t){return t._id===e._id?e:t}));s(t)})).catch((function(e){console.log(e)}));var t},children:"thumb_up"}),Object(d.jsxs)("h5",{children:[e.likes.length," likes"]}),Object(d.jsx)("h5",{children:e.title}),Object(d.jsx)("h6",{children:e.body}),e.comments.map((function(e){return Object(d.jsxs)("h6",{children:[Object(d.jsx)("span",{style:{fontSize:"1.6rem",fontWeight:"500"},children:e.postedBy.name}),e.text]})})),Object(d.jsx)("form",{onSubmit:function(t){var n,a;t.preventDefault(),n=t.target[0].value,a=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:a,text:n})}).then((function(e){return e.json()})).then((function(e){var t=c.map((function(t){return t._id===e._id?e:t}));s(t)})).catch((function(e){console.log(e)}))},children:Object(d.jsx)("input",{type:"text",placeholder:"add a Comment"})})]})]})}))}),Object(d.jsx)(h,{})]})},w=function(e,t){return"USER"===t.type?t.payload:"CLEAR"===t.type?null:"UPDATE"===t.type?Object(m.a)(Object(m.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"===t.type?Object(m.a)(Object(m.a)({},e),{},{pic:t.payload}):e};var S=function(){var e=Object(n.useContext)(_),t=e.state,c=e.dispatch,s=Object(o.f)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("div",{className:"page-footer",children:Object(d.jsx)("ul",{className:"black-text",children:t?[Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"img",children:[Object(d.jsx)("img",{src:t?t.pic:"loading",alt:"profilepic"}),Object(d.jsx)("h6",{children:t?t.name:"loading"})]})},"1"),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/profile",children:"Profile"})},"2"),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/myfollowingpost",children:"Posts"})},"3"),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/create",children:Object(d.jsx)("i",{className:"material-icons",children:"add"})})},"4"),Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"btn waves-effect waves-light",onClick:function(){localStorage.clear(),c({type:"CLEAR"}),s.push("/signin")},children:"Log Out"})},"5")]:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/signin",children:"Login"})},"6"),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/signup",children:"Sign Up"})},"7")]})})})})},_=Object(n.createContext)(),C=function(){var e=Object(o.f)(),t=Object(n.useContext)(_),c=(t.state,t.dispatch);return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?c({type:"USER",payload:t}):e.push("/signIn")}),[]),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(f,{})}),Object(d.jsx)(o.a,{path:"/signIn",children:Object(d.jsx)(O,{})}),Object(d.jsx)(o.a,{path:"/signUp",children:Object(d.jsx)(p,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/profile",children:Object(d.jsx)(x,{})}),Object(d.jsx)(o.a,{path:"/create",children:Object(d.jsx)(g,{})}),Object(d.jsx)(o.a,{path:"/profile/:userid",children:Object(d.jsx)(N,{})}),Object(d.jsx)(o.a,{path:"/myfollowingpost",children:Object(d.jsx)(y,{})})]})};var I=function(){var e=Object(n.useReducer)(w,null),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(d.jsx)(_.Provider,{value:{state:c,dispatch:s},children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(C,{}),Object(d.jsx)(S,{})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),k()}},[[35,1,2]]]);
//# sourceMappingURL=main.4621f765.chunk.js.map