!function(t){"undefined"!=typeof module&&module.exports?module.exports=t(void 0):window.Slider=t(void 0),console[console.info?"info":"log"]("project:'simple-slider',\nauthor:'林楠楠的脚趾有点咸',\nemail:845058952@qq.com")}(function(t){"use strict";function e(t){var e="";"string"===s.type(t)?e=t:"object"===s.type(t)&&(e=t.id),this.$id=e,this.$basePath=s.basePath,this.$element=document.getElementById(e),this.$sliderItem=null,this.$index=s.index||0,this.$operate=s.operate||h[0],this.$autoPlay=s.autoPlay||0,this.$lazyload=!0,this.$itemLen=0,this.$toggleBut=[],i.call(this),this.init(t)}function i(){var t=this;window.addEventListener("resize",function(e){i.$time&&clearTimeout(i.$time),i.$time=setTimeout(function(){t.$index++,t.$toggle()},200)})}function n(t,e){var i=this,n=this.$sliderItem[t],r=n.getElementsByTagName("img")[0];return r?e.call(this):(r=function(t){t=this.$basePath?this.$basePath+t:t;var e=document.createElement("img");return e.className=m,e.src=t,e.alt=t,e}.call(this,s.getDataset(n).src),n.appendChild(r),r.onload=function(){e.call(i)}),this}var s=e,r={toggle:[],complete:[]},a={},o=/^data-(.+)/,l=/-([\da-z])/gi,h=["click","mouseover","dblclick"],u=["div","a","p","li"],c="ui-slider-item",d="ui-slider-but-list",g="ui-slider-but-item",m="ui-slider-img";return["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"].forEach(function(t,e){a["[object "+t+"]"]=t.toLowerCase()}),e.prototype={version:"1.0.0",constructor:e,init:function(e){if(!this.$element)throw new Error("element not found");this.$element.className="ui-slider",s.merge(this,s.getDataset(this.$element),function(e,i,n){return this["$"+i]!==t&&(this["$"+i]=e),!1}),s.merge(this,e,function(e,i,n){return this["$"+i]!==t&&(this["$"+i]=e),!1}),this.$operate=-1!==h.indexOf(this.$operate)?this.$operate:h[0],this.on("complete",e.complete),this.$createTag(e).$toggle().$togglePlay()},on:function(e,i){return r[e]!==t&&"function"==typeof i&&r[e].push(i),this},trigger:function(e,i){var n=r[e];if(n!==t&&n instanceof Array)for(var s=0;s<n.length;s++)"function"==typeof n[s]&&n[s].apply(this,arguments);return this},remove:function(e,i){var n=r[e];if(n!==t&&n instanceof Array)for(var s=0;s<n.length;s++)n[s]===i&&n.splice(s,1);return this},$createTag:function(e){if(this.$sliderItem&&this.$sliderItem.length>0)return this;var i=this;if("array"===s.type(e.data))this.$element.innerHTML="",this.$sliderItem=function(t,e){if(t[0]){for(var i=null,n=[],r="",a="",o="",l=null,h=0;h<t.length;h++)if("string"===s.type(t[h])?(r=t[h],o="",a=u[0],l=null):"object"===s.type(t[h])&&(r=t[h].src,o=t[h].class?t[h].class:"",a=-1!==u.indexOf(t[h].tag)?t[h].tag:u[0],l=t[h].attr),r){(i=document.createElement(a)).className=c,i.setAttribute("data-index",h),i.setAttribute("data-src",r);for(var d in l)i.setAttribute(d,l[d]);""!==o&&i.setAttribute("class",i.getAttribute("class")+" "+o),n.push(i),"function"==typeof e&&e.apply(i,[t[h],h,t])}return n}this.$sliderItem=[]}.call(this,e.data,function(){i.$element.appendChild(this)});else if(e.data===t){var n=0;this.$sliderItem=s.getChildren(this.$element,function(){this.setAttribute("data-index",n++)})}return this.$itemLen=this.$sliderItem.length,this.$element.appendChild(function(){var t=this,e=document.createDocumentFragment(),i=document.createElement("div"),n=null;i.className=d;for(var r=0;r<this.$itemLen;r++)(n=document.createElement("div")).className=g,n.setAttribute("data-index",r),n.addEventListener(this.$operate,function(){t.$index=s.getDataset(this).index,t.$toggle()}),n.addEventListener("mouseover",function(){t.$toggleStop()}),n.addEventListener("mouseout",function(){t.$togglePlay()}),this.$toggleBut.push(n),e.appendChild(n);return i.appendChild(e),i}.call(this)),this.trigger("complete"),this},$toggle:function(){return this.$index=this.$index>this.$itemLen-1||this.$index<0?0:this.$index,this.$sliderItem[0].style.marginLeft=-this.$element.offsetWidth*this.$index+"px",n.call(this,this.$index,function(){this.trigger("toggle",this.$index)}),this},$togglePlay:function(){if(0===this.$sliderItem.length)throw new Error("item is 0 in length");var t=this;return this.$autoPlay&&(this.$toggleStop(),this.$togglePlay.$time=setInterval(function(){t.$index=t.$index==t.$itemLen-1?0:++t.$index,t.$sliderItem[0].style.marginLeft=-t.$element.offsetWidth*t.$index+"px",n.call(t,t.$index,function(){this.trigger("toggle",this.$index)})},this.$autoPlay>1e3?this.$autoPlay:1e3)),this},$toggleStop:function(){this.$togglePlay.$time!==t&&clearInterval(this.$togglePlay.$time)}},s.merge=function(e,i,n){i||(i=e,e=this),i="object"==typeof i?i:{};for(var s in i)i.hasOwnProperty(s)&&i[s]!==t&&(n&&!n.call(e,i[s],s,i)||(e[s]=i[s]));return e},s.merge({type:function(t){return a[a.toString.call(t)]},getDataset:function(t){if(t.dataset)return t.dataset;for(var e,i=t.attributes,n={},s=0;s<i.length;s++)(e=i[s].name.match(o))&&(n[e[1].replace(l,function(t,e){return e.toUpperCase()})]=i[s].value);return n},getChildren:function(t,e){for(var i=t.childNodes,n=[],s=0;s<i.length;s++)1===i[s].nodeType&&(n.push(i[s]),"function"==typeof e&&e.apply(i[s],[i[s],s,i]));return n}}),s});