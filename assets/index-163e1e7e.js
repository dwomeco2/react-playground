import{R as f,a as N,r as d,j as g}from"./index-c28d4630.js";const w="/react-playground/assets/1-1513849f.jpg",V="/react-playground/assets/10-9dffcff8.jpg",U="/react-playground/assets/2-bdaf1f12.jpg",F="/react-playground/assets/3-39ec2d2c.jpg",G="/react-playground/assets/4-17886439.jpg",z="/react-playground/assets/5-ab6b4224.jpg",W="/react-playground/assets/6-d46bde91.jpg",X="/react-playground/assets/7-7778412f.jpg",B="/react-playground/assets/8-45d444bb.jpg",H="/react-playground/assets/9-5b2c1a08.jpg",q=()=>{const l=J(1,11),s=l,t=(l+(5-1)/2+1)%10,e=10-5,i=[],r=[];for(let o=t;o<t+10;o++){const c=o%10==0?10:o%10,u=new URL(Object.assign({"/src/assets/imageslider/1.jpg":w,"/src/assets/imageslider/10.jpg":V,"/src/assets/imageslider/2.jpg":U,"/src/assets/imageslider/3.jpg":F,"/src/assets/imageslider/4.jpg":G,"/src/assets/imageslider/5.jpg":z,"/src/assets/imageslider/6.jpg":W,"/src/assets/imageslider/7.jpg":X,"/src/assets/imageslider/8.jpg":B,"/src/assets/imageslider/9.jpg":H})[`/src/assets/imageslider/${c}.jpg`],self.location).href;r.length!=e?r.unshift({id:c,src:u}):i.push({id:c,src:u})}return{total_images:10,visible_no_image:5,current_imageId:s,direction:"ltr",images:i,back_images:r}};function J(n,a){return Math.floor(Math.random()*(a-n)+n)}function S(){return S=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(n[s]=l[s])}return n},S.apply(this,arguments)}function k(n,a){if(n==null)return{};var l={},s=Object.keys(n),t,e;for(e=0;e<s.length;e++)t=s[e],!(a.indexOf(t)>=0)&&(l[t]=n[t]);return l}function T(n,a){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,t){return s.__proto__=t,s},T(n,a)}function R(n,a){n.prototype=Object.create(a.prototype),n.prototype.constructor=n,T(n,a)}function Q(n,a){return n.classList?!!a&&n.classList.contains(a):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+a+" ")!==-1}function Y(n,a){n.classList?n.classList.add(a):Q(n,a)||(typeof n.className=="string"?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a))}function $(n,a){return n.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Z(n,a){n.classList?n.classList.remove(a):typeof n.className=="string"?n.className=$(n.className,a):n.setAttribute("class",$(n.className&&n.className.baseVal||"",a))}const L={disabled:!1},j=f.createContext(null);var A=function(a){return a.scrollTop},C="unmounted",v="exited",E="entering",b="entered",y="exiting",m=function(n){R(a,n);function a(s,t){var e;e=n.call(this,s,t)||this;var i=t,r=i&&!i.isMounting?s.enter:s.appear,o;return e.appearStatus=null,s.in?r?(o=v,e.appearStatus=E):o=b:s.unmountOnExit||s.mountOnEnter?o=C:o=v,e.state={status:o},e.nextCallback=null,e}a.getDerivedStateFromProps=function(t,e){var i=t.in;return i&&e.status===C?{status:v}:null};var l=a.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(t){var e=null;if(t!==this.props){var i=this.state.status;this.props.in?i!==E&&i!==b&&(e=E):(i===E||i===b)&&(e=y)}this.updateStatus(!1,e)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var t=this.props.timeout,e,i,r;return e=i=r=t,t!=null&&typeof t!="number"&&(e=t.exit,i=t.enter,r=t.appear!==void 0?t.appear:i),{exit:e,enter:i,appear:r}},l.updateStatus=function(t,e){if(t===void 0&&(t=!1),e!==null)if(this.cancelNextCallback(),e===E){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this);i&&A(i)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:C})},l.performEnter=function(t){var e=this,i=this.props.enter,r=this.context?this.context.isMounting:t,o=this.props.nodeRef?[r]:[N.findDOMNode(this),r],c=o[0],u=o[1],p=this.getTimeouts(),h=r?p.appear:p.enter;if(!t&&!i||L.disabled){this.safeSetState({status:b},function(){e.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:E},function(){e.props.onEntering(c,u),e.onTransitionEnd(h,function(){e.safeSetState({status:b},function(){e.props.onEntered(c,u)})})})},l.performExit=function(){var t=this,e=this.props.exit,i=this.getTimeouts(),r=this.props.nodeRef?void 0:N.findDOMNode(this);if(!e||L.disabled){this.safeSetState({status:v},function(){t.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:y},function(){t.props.onExiting(r),t.onTransitionEnd(i.exit,function(){t.safeSetState({status:v},function(){t.props.onExited(r)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},l.setNextCallback=function(t){var e=this,i=!0;return this.nextCallback=function(r){i&&(i=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},l.onTransitionEnd=function(t,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this),r=t==null&&!this.props.addEndListener;if(!i||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=o[0],u=o[1];this.props.addEndListener(c,u)}t!=null&&setTimeout(this.nextCallback,t)},l.render=function(){var t=this.state.status;if(t===C)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var r=k(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f.createElement(j.Provider,{value:null},typeof i=="function"?i(t,r):f.cloneElement(f.Children.only(i),r))},a}(f.Component);m.contextType=j;m.propTypes={};function x(){}m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x};m.UNMOUNTED=C;m.EXITED=v;m.ENTERING=E;m.ENTERED=b;m.EXITING=y;const K=m;var ee=function(a,l){return a&&l&&l.split(" ").forEach(function(s){return Y(a,s)})},O=function(a,l){return a&&l&&l.split(" ").forEach(function(s){return Z(a,s)})},M=function(n){R(a,n);function a(){for(var s,t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return s=n.call.apply(n,[this].concat(e))||this,s.appliedClasses={appear:{},enter:{},exit:{}},s.onEnter=function(r,o){var c=s.resolveArguments(r,o),u=c[0],p=c[1];s.removeClasses(u,"exit"),s.addClass(u,p?"appear":"enter","base"),s.props.onEnter&&s.props.onEnter(r,o)},s.onEntering=function(r,o){var c=s.resolveArguments(r,o),u=c[0],p=c[1],h=p?"appear":"enter";s.addClass(u,h,"active"),s.props.onEntering&&s.props.onEntering(r,o)},s.onEntered=function(r,o){var c=s.resolveArguments(r,o),u=c[0],p=c[1],h=p?"appear":"enter";s.removeClasses(u,h),s.addClass(u,h,"done"),s.props.onEntered&&s.props.onEntered(r,o)},s.onExit=function(r){var o=s.resolveArguments(r),c=o[0];s.removeClasses(c,"appear"),s.removeClasses(c,"enter"),s.addClass(c,"exit","base"),s.props.onExit&&s.props.onExit(r)},s.onExiting=function(r){var o=s.resolveArguments(r),c=o[0];s.addClass(c,"exit","active"),s.props.onExiting&&s.props.onExiting(r)},s.onExited=function(r){var o=s.resolveArguments(r),c=o[0];s.removeClasses(c,"exit"),s.addClass(c,"exit","done"),s.props.onExited&&s.props.onExited(r)},s.resolveArguments=function(r,o){return s.props.nodeRef?[s.props.nodeRef.current,r]:[r,o]},s.getClassNames=function(r){var o=s.props.classNames,c=typeof o=="string",u=c&&o?o+"-":"",p=c?""+u+r:o[r],h=c?p+"-active":o[r+"Active"],P=c?p+"-done":o[r+"Done"];return{baseClassName:p,activeClassName:h,doneClassName:P}},s}var l=a.prototype;return l.addClass=function(t,e,i){var r=this.getClassNames(e)[i+"ClassName"],o=this.getClassNames("enter"),c=o.doneClassName;e==="appear"&&i==="done"&&c&&(r+=" "+c),i==="active"&&t&&A(t),r&&(this.appliedClasses[e][i]=r,ee(t,r))},l.removeClasses=function(t,e){var i=this.appliedClasses[e],r=i.base,o=i.active,c=i.done;this.appliedClasses[e]={},r&&O(t,r),o&&O(t,o),c&&O(t,c)},l.render=function(){var t=this.props;t.classNames;var e=k(t,["classNames"]);return f.createElement(K,S({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(f.Component);M.defaultProps={classNames:""};M.propTypes={};const te=M;function ne(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function D(n,a){var l=function(e){return a&&d.isValidElement(e)?a(e):e},s=Object.create(null);return n&&d.Children.map(n,function(t){return t}).forEach(function(t){s[t.key]=l(t)}),s}function se(n,a){n=n||{},a=a||{};function l(u){return u in a?a[u]:n[u]}var s=Object.create(null),t=[];for(var e in n)e in a?t.length&&(s[e]=t,t=[]):t.push(e);var i,r={};for(var o in a){if(s[o])for(i=0;i<s[o].length;i++){var c=s[o][i];r[s[o][i]]=l(c)}r[o]=l(o)}for(i=0;i<t.length;i++)r[t[i]]=l(t[i]);return r}function _(n,a,l){return l[a]!=null?l[a]:n.props[a]}function ie(n,a){return D(n.children,function(l){return d.cloneElement(l,{onExited:a.bind(null,l),in:!0,appear:_(l,"appear",n),enter:_(l,"enter",n),exit:_(l,"exit",n)})})}function re(n,a,l){var s=D(n.children),t=se(a,s);return Object.keys(t).forEach(function(e){var i=t[e];if(d.isValidElement(i)){var r=e in a,o=e in s,c=a[e],u=d.isValidElement(c)&&!c.props.in;o&&(!r||u)?t[e]=d.cloneElement(i,{onExited:l.bind(null,i),in:!0,exit:_(i,"exit",n),enter:_(i,"enter",n)}):!o&&r&&!u?t[e]=d.cloneElement(i,{in:!1}):o&&r&&d.isValidElement(c)&&(t[e]=d.cloneElement(i,{onExited:l.bind(null,i),in:c.props.in,exit:_(i,"exit",n),enter:_(i,"enter",n)}))}}),t}var ae=Object.values||function(n){return Object.keys(n).map(function(a){return n[a]})},oe={component:"div",childFactory:function(a){return a}},I=function(n){R(a,n);function a(s,t){var e;e=n.call(this,s,t)||this;var i=e.handleExited.bind(ne(e));return e.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},e}var l=a.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(t,e){var i=e.children,r=e.handleExited,o=e.firstRender;return{children:o?ie(t,r):re(t,i,r),firstRender:!1}},l.handleExited=function(t,e){var i=D(this.props.children);t.key in i||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState(function(r){var o=S({},r.children);return delete o[t.key],{children:o}}))},l.render=function(){var t=this.props,e=t.component,i=t.childFactory,r=k(t,["component","childFactory"]),o=this.state.contextValue,c=ae(this.state.children).map(i);return delete r.appear,delete r.enter,delete r.exit,e===null?f.createElement(j.Provider,{value:o},c):f.createElement(j.Provider,{value:o},f.createElement(e,r,c))},a}(f.Component);I.propTypes={};I.defaultProps=oe;const le=I;function pe(){const[n,a]=d.useState(q());if(n.total_images<n.visible_no_image)return g.jsx("div",{children:"Not enought Images"});function l(){const t=(n.current_imageId+1)%n.total_images,e=n.images,i=n.back_images;n.back_images.length>0&&n.images.length>0&&(e.push(i.pop()),i.unshift(e.shift())),a(r=>({...r,direction:"rtl",current_imageId:t,images:e,back_images:i}))}function s(){const t=n.current_imageId,e=n.total_images,i=n.images,r=n.back_images;n.back_images.length>0&&n.images.length>0&&(r.push(i.pop()),i.unshift(r.shift())),a(o=>({...o,direction:"ltr",current_imageId:t==1?e:t-1,images:i,back_images:r}))}return g.jsxs("div",{className:"w-full",children:[g.jsx("div",{className:"flex justify-center mx-auto",children:g.jsx(le,{className:"image_slider",childFactory:t=>d.cloneElement(t,{classNames:`${n.direction}`}),children:n.images.map((t,e)=>{const{type:i,image_size:r}=ce();return g.jsx(te,{timeout:200,classNames:`${n.direction}`,addEndListener:()=>{},children:g.jsxs("div",{className:`image_slide_item ${i[e]}`,children:[g.jsx("img",{src:t.src,width:r[e],height:r[e]}),g.jsx("div",{className:"hidden ltr-enter ltr-enter-active rtl-enter rtl-enter-active ltr-exit ltr-exit-active rtl-exit rtl-exit-active"})]})},t.id)})})}),g.jsx("button",{onClick:()=>s(),children:"Before"}),g.jsx("button",{onClick:()=>l(),children:"Next"})]})}const ce=()=>({type:["carousel-2","carousel-1","carousel0","carousel1","carousel2"],image_size:[150,200,250,200,150]});export{pe as default};
