(this["webpackJsonpreact-pokemons-app"]=this["webpackJsonpreact-pokemons-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/dracaufeu.864b1c15.png"},23:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),s=a(5),o=a(2),i=a(3),m=a(10),u=a(1),p=function(e){var t;switch(e){case"Feu":t="red lighten-1";break;case"Eau":t="blue lighten-1";break;case"Plante":t="green lighten-1";break;case"Insecte":t="brown lighten-1";break;case"Normal":t="grey lighten-3";break;case"Vol":t="blue lighten-3";break;case"Poison":t="deep-purple accent-1";break;case"F\xe9e":t="pink lighten-4";break;case"Psy":t="deep-purple darken-2";break;case"Electrik":t="lime accent-1";break;case"Combat":t="deep-orange";break;default:t="grey"}return"chip ".concat(t)},d=a(11),v=a(13),h=[{id:1,name:"Bulbizarre",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",types:["Plante","Poison"],created:new Date},{id:2,name:"Salam\xe8che",hp:28,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",types:["Feu"],created:new Date},{id:3,name:"Carapuce",hp:21,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",types:["Eau"],created:new Date},{id:4,name:"Aspicot",hp:16,cp:2,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",types:["Insecte","Poison"],created:new Date},{id:5,name:"Roucool",hp:30,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",types:["Normal","Vol"],created:new Date},{id:6,name:"Rattata",hp:18,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",types:["Normal"],created:new Date},{id:7,name:"Piafabec",hp:14,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",types:["Normal","Vol"],created:new Date},{id:8,name:"Abo",hp:16,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",types:["Poison"],created:new Date},{id:9,name:"Pikachu",hp:21,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",types:["Electrik"],created:new Date},{id:10,name:"Sabelette",hp:19,cp:3,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",types:["Normal"],created:new Date},{id:11,name:"M\xe9lof\xe9e",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",types:["F\xe9e"],created:new Date},{id:12,name:"Groupix",hp:17,cp:8,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",types:["Feu"],created:new Date}],f=function(){function e(){Object(d.a)(this,e)}return Object(v.a)(e,null,[{key:"getPokemons",value:function(){var e=this;return this.isDev?fetch("http://localhost:3001/pokemons").then((function(e){return e.json()})).catch((function(t){return e.handleError(t)})):new Promise((function(t){t(e.pokemons)}))}},{key:"getPokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e)).then((function(e){return e.json()})).then((function(e){return t.isEmpty(e)?null:e})).catch((function(e){return t.handleError(e)})):new Promise((function(a){a(t.pokemons.find((function(t){return e===t.id})))}))}},{key:"updatePokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){var n=e.id,c=t.pokemons.findIndex((function(e){return e.id===n}));t.pokemons[c]=e,a(e)}))}},{key:"deletePokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){var n=e.id;t.pokemons=t.pokemons.filter((function(e){return e.id!==n})),a({})}))}},{key:"addPokemon",value:function(e){var t=this;return e.created=new Date(e.created),this.isDev?fetch("http://localhost:3001/pokemons",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){t.pokemons.push(e),a(e)}))}},{key:"searchPokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons?q=".concat(e)).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){a(t.pokemons.filter((function(t){return t.name.includes(e)})))}))}},{key:"isEmpty",value:function(e){return 0===Object.keys(e).length}},{key:"handleError",value:function(e){console.error(e)}}]),e}();f.pokemons=h,f.isDev=!1;var E=function(e){var t=e.pokemon,a=e.isEditForm,r=Object(o.g)(),l=Object(n.useState)({picture:{value:t.picture},name:{value:t.name,isValid:!0},hp:{value:t.hp,isValid:!0},cp:{value:t.cp,isValid:!0},types:{value:t.types,isValid:!0}}),s=Object(i.a)(l,2),d=s[0],v=s[1],h=function(e){return d.types.value.includes(e)},E=function(e){var t=e.target.name,a=e.target.value,n=Object(m.a)({},t,{value:a});v(Object(u.a)(Object(u.a)({},d),n))},b=function(e){return(1!==d.types.value.length||!h(e))&&!(d.types.value.length>=3&&!h(e))},g=function(e){e.preventDefault(),function(){var e=d;if(k()){if(d.picture.value.startsWith("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/")&&d.picture.value.endsWith(".png")){var t={value:d.picture.value,error:"",isValid:!0};e=Object(u.a)(Object(u.a)({},e),{picture:t})}else{var a={value:d.picture.value,error:"L'url n'est pas valide.",isValid:!1};e=Object(u.a)(Object(u.a)({},e),{picture:a})}}if(/^[a-zA-Z\xe0\xe9\xe8 ]{3,25}$/.test(d.name.value)){var n={value:d.name.value,error:"",isValid:!0};e=Object(u.a)(Object(u.a)({},e),{name:n})}else{var c={value:d.name.value,error:"Le nom du pok\xe9mon est requis (1-25).",isValid:!1};e=Object(u.a)(Object(u.a)({},e),{name:c})}if(/^[0-9]{1,3}$/.test(d.hp.value)){var r={value:d.hp.value,error:"",isValid:!0};e=Object(u.a)(Object(u.a)({},e),{hp:r})}else{var l={value:d.hp.value,error:"Les points de vie du pok\xe9mon sont compris entre 0 et 999.",isValid:!1};e=Object(u.a)(Object(u.a)({},e),{hp:l})}if(/^[0-9]{1,2}$/.test(d.cp.value)){var s={value:d.cp.value,error:"",isValid:!0};e=Object(u.a)(Object(u.a)({},e),{cp:s})}else{var o={value:d.cp.value,error:"Les d\xe9g\xe2ts du pok\xe9mon sont compris entre 0 et 99",isValid:!1};e=Object(u.a)(Object(u.a)({},e),{cp:o})}return v(e),e.name.isValid&&e.hp.isValid&&e.cp.isValid}()&&(t.picture=d.picture.value,t.name=d.name.value,t.hp=d.hp.value,t.cp=d.cp.value,t.types=d.types.value,a?y():N()),console.log(t)},k=function(){return!a},N=function(){f.addPokemon(t).then((function(){return r.push("/pokemons")}))},y=function(){f.updatePokemon(t).then((function(){return r.push("/pokemons/".concat(t.id))}))};return c.a.createElement("form",{onSubmit:function(e){return g(e)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m8 offset-m2"},c.a.createElement("div",{className:"card hoverable"},a&&c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:t.picture,alt:t.name,style:{width:"250px",margin:"0 auto"}}),c.a.createElement("span",{className:"btn-floating halfway-fab waves-effect waves-light"},c.a.createElement("i",{onClick:function(){f.deletePokemon(t).then((function(){return r.push("/pokemons")}))},className:"material-icons"},"delete"))),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},k()&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"picture"},"Image"),c.a.createElement("input",{id:"picture",type:"text",name:"picture",className:"form-control",value:d.picture.value,onChange:function(e){return E(e)}}),d.picture.error&&c.a.createElement("div",{className:"card-panel red accent-1"},d.picture.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Nom"),c.a.createElement("input",{id:"name",type:"text",name:"name",className:"form-control",value:d.name.value,onChange:function(e){return E(e)}}),d.name.error&&c.a.createElement("div",{className:"card-panel red accent-1"},d.name.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"hp"},"Point de vie"),c.a.createElement("input",{id:"hp",type:"number",name:"hp",className:"form-control",value:d.hp.value,onChange:function(e){return E(e)}}),d.hp.error&&c.a.createElement("div",{className:"card-panel red accent-1"},d.hp.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"cp"},"D\xe9g\xe2ts"),c.a.createElement("input",{id:"cp",type:"number",name:"cp",className:"form-control",value:d.cp.value,onChange:function(e){return E(e)}}),d.cp.error&&c.a.createElement("div",{className:"card-panel red accent-1"},d.cp.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Types"),["Plante","Feu","Eau","Insecte","Normal","Electrik","Poison","Fe\u0301e","Vol","Combat","Psy"].map((function(e){return c.a.createElement("div",{key:e,style:{marginBottom:"10px"}},c.a.createElement("label",null,c.a.createElement("input",{id:e,type:"checkbox",name:"types",className:"filled-in",value:e,checked:h(e),disabled:!b(e),onChange:function(t){return function(e,t){var a;t.target.checked?a={value:d.types.value.concat([e])}:a={value:d.types.value.filter((function(t){return t!==e}))};v(Object(u.a)(Object(u.a)({},d),{types:a}))}(e,t)}}),c.a.createElement("span",null,c.a.createElement("p",{className:p(e)},e))))})))),c.a.createElement("div",{className:"card-action center"},c.a.createElement("button",{type:"submit",className:"btn"},"Valider")))))))},b=function(){return c.a.createElement("div",{className:"preloader-wrapper big active"},c.a.createElement("div",{className:"spinner-layer spinner-blue"},c.a.createElement("div",{className:"circle-clipper left"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"gap-patch"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"circle-clipper right"},c.a.createElement("div",{className:"circle"}))))},g=function(e){var t=e.match,a=Object(n.useState)(null),r=Object(i.a)(a,2),l=r[0],s=r[1];return Object(n.useEffect)((function(){f.getPokemon(+t.params.id).then((function(e){return s(e)}))}),[t.params.id]),c.a.createElement("div",null,l?c.a.createElement("div",{className:"row"},c.a.createElement("h2",{className:"header center"},"\xc9diter ",l.name),c.a.createElement(E,{pokemon:l,isEditForm:!0})):c.a.createElement("h4",{className:"center"},c.a.createElement(b,null)))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())},N=function(e){var t=e.match,a=Object(n.useState)(null),r=Object(i.a)(a,2),l=r[0],o=r[1];return Object(n.useEffect)((function(){f.getPokemon(+t.params.id).then((function(e){return o(e)}))}),[t.params.id]),c.a.createElement("div",null,l?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m8 offset-m2"},c.a.createElement("h2",{className:"header center"},l.name),c.a.createElement("div",{className:"card hoverable"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:l.picture,alt:l.name,style:{width:"250px",margin:"0 auto"}}),c.a.createElement(s.b,{to:"/pokemons/edit/".concat(l.id),className:"btn btn-floating halfway-fab waves-effect waves-light"},c.a.createElement("i",{className:"material-icons ri-edit-2-line"},"edit"))),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("table",{className:"bordered striped"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Nom"),c.a.createElement("td",null,c.a.createElement("strong",null,l.name))),c.a.createElement("tr",null,c.a.createElement("td",null,"Points de vie"),c.a.createElement("td",null,c.a.createElement("strong",null,l.hp))),c.a.createElement("tr",null,c.a.createElement("td",null,"D\xe9g\xe2ts"),c.a.createElement("td",null,c.a.createElement("strong",null,l.cp))),c.a.createElement("tr",null,c.a.createElement("td",null,"Types"),c.a.createElement("td",null,l.types.map((function(e){return c.a.createElement("span",{key:e,className:p(e)},e)})))),c.a.createElement("tr",null,c.a.createElement("td",null,"Date de cr\xe9ation"),c.a.createElement("td",null,k(l.created)))))),c.a.createElement("div",{className:"card-action"},c.a.createElement(s.b,{to:"/"},"Retour")))))):c.a.createElement("h4",{className:"center"},c.a.createElement(b,null)))},y=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["Normal"],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new Date;Object(d.a)(this,e),this.id=void 0,this.hp=void 0,this.cp=void 0,this.name=void 0,this.picture=void 0,this.types=void 0,this.created=void 0,this.id=t,this.hp=a,this.cp=n,this.name=c,this.picture=r,this.types=l,this.created=s},j=(a(33),function(e){var t=e.pokemon,a=e.borderColor,r=void 0===a?"#009688":a,l=Object(n.useState)(),s=Object(i.a)(l,2),m=s[0],u=s[1],d=Object(o.g)();return console.log(y),c.a.createElement("div",{className:"col s6 m4",onMouseEnter:function(){u(r)},onMouseLeave:function(){u("#f5f5f5")},onClick:function(){return e=t.id,void d.push("/pokemons/".concat(e));var e}},c.a.createElement("div",{className:"card horizontal",style:{borderColor:m}},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:t.picture,alt:t.name})),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,t.name),c.a.createElement("p",null,c.a.createElement("small",null,k(t.created))),t.types.map((function(e){return c.a.createElement("span",{key:e,className:p(e)},e)}))))))}),O=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),m=o[0],u=o[1];return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6 offset-m3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",placeholder:"Rechercher un pok\xe9mon",value:a,onChange:function(e){return function(e){var t=e.target.value;r(t),t.length<=1?u([]):f.searchPokemon(t).then((function(e){return u(e)}))}(e)}})),c.a.createElement("div",{className:"collection"},m.map((function(e){return c.a.createElement(s.b,{key:e.id,to:"/pokemons/".concat(e.id),className:"collection-item"},e.name)})))))))},w=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){f.getPokemons().then((function(e){return r(e)}))}),[]),c.a.createElement("div",null,c.a.createElement("h1",{className:"center"},"Pok\xe9dex"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(O,null),a.map((function(e){return c.a.createElement(j,{key:e.id,pokemon:e})})))),c.a.createElement(s.b,{className:"btn-floating btn-large waves-effect waves-light red z-depth-3",style:{position:"fixed",bottom:"25px",right:"25px"},to:"/pokemons/add"},c.a.createElement("i",{className:"material-icons"},"add")))},P=a(21),x=a.n(P),D=function(){return c.a.createElement("div",{className:"center"},c.a.createElement("img",{src:x.a,alt:"Page non trouv\xe9e",style:{width:"40%"}}),c.a.createElement("h1",null,"Hey, cette page n'existe pas !"),c.a.createElement(s.b,{to:"/",className:"waves-effect waves-teal btn-flat"},"Retourner \xe0 l'accueil"))},V=function(){var e=Object(n.useState)((new Date).getTime()),t=Object(i.a)(e,1)[0],a=Object(n.useState)(new y(t)),r=Object(i.a)(a,1)[0];return console.log(y),c.a.createElement("div",{className:"row"},c.a.createElement("h2",{className:"header center"},"Ajouter un pokemon"),c.a.createElement(E,{pokemon:r,isEditForm:!1}))},C=function(){function e(){Object(d.a)(this,e)}return Object(v.a)(e,null,[{key:"login",value:function(e,t){var a=this,n="pikachu"===e&&"pikachu"===t;return new Promise((function(e){setTimeout((function(){a.isAuthenticated=n,e(n)}),1e3)}))}}]),e}();C.isAuthenticated=!1;var S=function(){var e=Object(o.g)(),t=Object(n.useState)({username:{value:""},password:{value:""}}),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)("Vous \xeates d\xe9connect\xe9. (pikachu / pikachu)"),p=Object(i.a)(s,2),d=p[0],v=p[1],h=function(e){var t=e.target.name,a=e.target.value,n=Object(m.a)({},t,{value:a});l(Object(u.a)(Object(u.a)({},r),n))},f=function(t){t.preventDefault(),function(){var e=r;if(r.username.value.length<3){var t={value:r.username.value,error:"Votre pr\xe9nom doit faire au moins 3 caract\xe8res de long.",isValid:!1};e=Object(u.a)(Object(u.a)({},e),{username:t})}else{var a={value:r.username.value,error:"",isValid:!0};e=Object(u.a)(Object(u.a)({},e),{username:a})}if(r.password.value.length<6){var n={value:r.password.value,error:"Votre mot de passe doit faire au moins 6 caract\xe8res de long.",isValid:!1};e=Object(u.a)(Object(u.a)({},e),{password:n})}else{var c={value:r.password.value,error:"",isValid:!0};e=Object(u.a)(Object(u.a)({},e),{password:c})}return l(e),e.username.isValid&&e.password.isValid}()&&(v("\ud83d\udc49 Tentative de connexion en cours ..."),C.login(r.username.value,r.password.value).then((function(t){t?e.push("/pokemons"):v("\ud83d\udd10 Identifiant ou mot de passe incorrect.")})))};return c.a.createElement("form",{onSubmit:function(e){return f(e)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m8 offset-m2"},c.a.createElement("div",{className:"card hoverable"},c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},d&&c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"card-panel grey lighten-5"},d)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"username"},"Identifiant"),c.a.createElement("input",{id:"username",type:"text",name:"username",className:"form-control",value:r.username.value,onChange:function(e){return h(e)}}),r.username.error&&c.a.createElement("div",{className:"card-panel red accent-1"},r.username.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"},"Mot de passe"),c.a.createElement("input",{id:"password",type:"password",name:"password",className:"form-control",value:r.password.value,onChange:function(e){return h(e)}}),r.password.error&&c.a.createElement("div",{className:"card-panel red accent-1"},r.password.error))),c.a.createElement("div",{className:"card-action center"},c.a.createElement("button",{type:"submit",className:"btn"},"Valider")))))))},F=a(22),T=function(e){var t=e.component,a=Object(F.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return C.isAuthenticated?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/login"}})}}))},I=function(){return c.a.createElement(s.a,null,c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper teal"},c.a.createElement(s.b,{to:"/",className:"brand-logo center"},"Pok\xe9dex"))),c.a.createElement(o.d,null,c.a.createElement(T,{exact:!0,path:"/",component:w}),c.a.createElement(o.b,{exact:!0,path:"/login",component:S}),c.a.createElement(T,{exact:!0,path:"/pokemons",component:w}),c.a.createElement(T,{path:"/pokemons/add",component:V}),c.a.createElement(T,{path:"/pokemons/edit/:id",component:g}),c.a.createElement(T,{path:"/pokemons/:id",component:N}),c.a.createElement(o.b,{component:D}))))};l.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9093f59a.chunk.js.map