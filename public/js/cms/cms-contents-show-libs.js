/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()});b.$results.find(".select2-results__option[aria-selected]").each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):h-g<0&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");if("true"===c.attr("aria-selected"))return void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{}));d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2");a(".select2.select2-container--open").each(function(){var b=a(this);this!=d[0]&&b.data("element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===e.$search.val()){var b=e.$searchContainer.prev(".select2-selection__choice");if(b.length>0){var d=b.data("data");e.searchRemoveChoice(d),a.preventDefault()}}});var f=document.documentMode,g=f&&f<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(g)return void e.$selection.off("input.search input.searchcheck");e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),void 0!==a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(null!=(b=c.data(a[0],"data")))return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/**
 * Super simple wysiwyg editor v0.8.9
 * https://summernote.org
 *
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 *
 * Date: 2017-12-25T06:39Z
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(factory(global.jQuery));
}(this, (function ($$1) { 'use strict';

$$1 = $$1 && $$1.hasOwnProperty('default') ? $$1['default'] : $$1;

var Renderer = /** @class */ (function () {
    function Renderer(markup, children, options, callback) {
        this.markup = markup;
        this.children = children;
        this.options = options;
        this.callback = callback;
    }
    Renderer.prototype.render = function ($parent) {
        var $node = $$1(this.markup);
        if (this.options && this.options.contents) {
            $node.html(this.options.contents);
        }
        if (this.options && this.options.className) {
            $node.addClass(this.options.className);
        }
        if (this.options && this.options.data) {
            $$1.each(this.options.data, function (k, v) {
                $node.attr('data-' + k, v);
            });
        }
        if (this.options && this.options.click) {
            $node.on('click', this.options.click);
        }
        if (this.children) {
            var $container_1 = $node.find('.note-children-container');
            this.children.forEach(function (child) {
                child.render($container_1.length ? $container_1 : $node);
            });
        }
        if (this.callback) {
            this.callback($node, this.options);
        }
        if (this.options && this.options.callback) {
            this.options.callback($node);
        }
        if ($parent) {
            $parent.append($node);
        }
        return $node;
    };
    return Renderer;
}());
var renderer = {
    create: function (markup, callback) {
        return function () {
            var options = typeof arguments[1] === 'object' ? arguments[1] : arguments[0];
            var children = $$1.isArray(arguments[0]) ? arguments[0] : [];
            if (options && options.children) {
                children = options.children;
            }
            return new Renderer(markup, children, options, callback);
        };
    }
};

var TooltipUI = /** @class */ (function () {
    function TooltipUI($node, options) {
        this.$node = $node;
        this.options = $.extend({}, {
            title: '',
            target: options.container,
            trigger: 'hover focus',
            placement: 'bottom'
        }, options);
        // create tooltip node
        this.$tooltip = $([
            '<div class="note-tooltip in">',
            '  <div class="note-tooltip-arrow"/>',
            '  <div class="note-tooltip-content"/>',
            '</div>'
        ].join(''));
        // define event
        if (this.options.trigger !== 'manual') {
            var showCallback_1 = this.show.bind(this);
            var hideCallback_1 = this.hide.bind(this);
            var toggleCallback_1 = this.toggle.bind(this);
            this.options.trigger.split(' ').forEach(function (eventName) {
                if (eventName === 'hover') {
                    $node.off('mouseenter mouseleave');
                    $node.on('mouseenter', showCallback_1).on('mouseleave', hideCallback_1);
                }
                else if (eventName === 'click') {
                    $node.on('click', toggleCallback_1);
                }
                else if (eventName === 'focus') {
                    $node.on('focus', showCallback_1).on('blur', hideCallback_1);
                }
            });
        }
    }
    TooltipUI.prototype.show = function () {
        var $node = this.$node;
        var offset = $node.offset();
        var $tooltip = this.$tooltip;
        var title = this.options.title || $node.attr('title') || $node.data('title');
        var placement = this.options.placement || $node.data('placement');
        $tooltip.addClass(placement);
        $tooltip.addClass('in');
        $tooltip.find('.note-tooltip-content').text(title);
        $tooltip.appendTo(this.options.target);
        var nodeWidth = $node.outerWidth();
        var nodeHeight = $node.outerHeight();
        var tooltipWidth = $tooltip.outerWidth();
        var tooltipHeight = $tooltip.outerHeight();
        if (placement === 'bottom') {
            $tooltip.css({
                top: offset.top + nodeHeight,
                left: offset.left + (nodeWidth / 2 - tooltipWidth / 2)
            });
        }
        else if (placement === 'top') {
            $tooltip.css({
                top: offset.top - tooltipHeight,
                left: offset.left + (nodeWidth / 2 - tooltipWidth / 2)
            });
        }
        else if (placement === 'left') {
            $tooltip.css({
                top: offset.top + (nodeHeight / 2 - tooltipHeight / 2),
                left: offset.left - tooltipWidth
            });
        }
        else if (placement === 'right') {
            $tooltip.css({
                top: offset.top + (nodeHeight / 2 - tooltipHeight / 2),
                left: offset.left + nodeWidth
            });
        }
    };
    TooltipUI.prototype.hide = function () {
        this.$tooltip.removeClass('in');
        this.$tooltip.remove();
    };
    TooltipUI.prototype.toggle = function () {
        if (this.$tooltip.hasClass('in')) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    return TooltipUI;
}());

var DropdownUI = /** @class */ (function () {
    function DropdownUI($node, options) {
        this.$button = $node;
        this.options = $.extend({}, {
            target: options.container
        }, options);
        this.setEvent();
    }
    DropdownUI.prototype.setEvent = function () {
        this.$button.on('click', this.toggle.bind(this));
    };
    DropdownUI.prototype.clear = function () {
        var $parent = $('.note-btn-group.open');
        $parent.find('.note-btn.active').removeClass('active');
        $parent.removeClass('open');
    };
    DropdownUI.prototype.show = function () {
        this.$button.addClass('active');
        this.$button.parent().addClass('open');
        var $dropdown = this.$button.next();
        var offset = $dropdown.offset();
        var width = $dropdown.outerWidth();
        var windowWidth = $(window).width();
        var targetMarginRight = parseFloat($(this.options.target).css('margin-right'));
        if (offset.left + width > windowWidth - targetMarginRight) {
            $dropdown.css('margin-left', windowWidth - targetMarginRight - (offset.left + width));
        }
        else {
            $dropdown.css('margin-left', '');
        }
    };
    DropdownUI.prototype.hide = function () {
        this.$button.removeClass('active');
        this.$button.parent().removeClass('open');
    };
    DropdownUI.prototype.toggle = function () {
        var isOpened = this.$button.parent().hasClass('open');
        this.clear();
        if (isOpened) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    return DropdownUI;
}());
$(document).on('click', function (e) {
    if (!$(e.target).closest('.note-btn-group').length) {
        $('.note-btn-group.open').removeClass('open');
    }
});
$(document).on('click.note-dropdown-menu', function (e) {
    $(e.target).closest('.note-dropdown-menu').parent().removeClass('open');
});

var ModalUI = /** @class */ (function () {
    function ModalUI($node, options) {
        this.options = $.extend({}, {
            target: options.container || 'body'
        }, options);
        this.$modal = $node;
        this.$backdrop = $('<div class="note-modal-backdrop" />');
    }
    ModalUI.prototype.show = function () {
        if (this.options.target === 'body') {
            this.$backdrop.css('position', 'fixed');
            this.$modal.css('position', 'fixed');
        }
        else {
            this.$backdrop.css('position', 'absolute');
            this.$modal.css('position', 'absolute');
        }
        this.$backdrop.appendTo(this.options.target).show();
        this.$modal.appendTo(this.options.target).addClass('open').show();
        this.$modal.trigger('note.modal.show');
        this.$modal.off('click', '.close').on('click', '.close', this.hide.bind(this));
    };
    ModalUI.prototype.hide = function () {
        this.$modal.removeClass('open').hide();
        this.$backdrop.hide();
        this.$modal.trigger('note.modal.hide');
    };
    return ModalUI;
}());

var editor = renderer.create('<div class="note-editor note-frame"/>');
var toolbar = renderer.create('<div class="note-toolbar"/>');
var editingArea = renderer.create('<div class="note-editing-area"/>');
var codable = renderer.create('<textarea class="note-codable"/>');
var editable = renderer.create('<div class="note-editable" contentEditable="true"/>');
var statusbar = renderer.create([
    '<div class="note-statusbar">',
    '  <div class="note-resizebar">',
    '    <div class="note-icon-bar"/>',
    '    <div class="note-icon-bar"/>',
    '    <div class="note-icon-bar"/>',
    '  </div>',
    '</div>'
].join(''));
var airEditor = renderer.create('<div class="note-editor"/>');
var airEditable = renderer.create('<div class="note-editable" contentEditable="true"/>');
var buttonGroup = renderer.create('<div class="note-btn-group">');
var button = renderer.create('<button type="button" class="note-btn">', function ($node, options) {
    // set button type
    if (options && options.tooltip) {
        $node.data('_lite_tooltip', new TooltipUI($node, {
            title: options.tooltip,
            container: options.container
        }));
    }
    if (options.contents) {
        $node.html(options.contents);
    }
    if (options && options.data && options.data.toggle === 'dropdown') {
        $node.data('_lite_dropdown', new DropdownUI($node, {
            container: options.container
        }));
    }
});
var dropdown = renderer.create('<div class="note-dropdown-menu">', function ($node, options) {
    var markup = $.isArray(options.items) ? options.items.map(function (item) {
        var value = (typeof item === 'string') ? item : (item.value || '');
        var content = options.template ? options.template(item) : item;
        var $temp = $('<a class="note-dropdown-item" href="#" data-value="' + value + '"></a>');
        $temp.html(content).data('item', item);
        return $temp;
    }) : options.items;
    $node.html(markup);
    $node.on('click', '> .note-dropdown-item', function (e) {
        var $a = $(this);
        var item = $a.data('item');
        var value = $a.data('value');
        if (item.click) {
            item.click($a);
        }
        else if (options.itemClick) {
            options.itemClick(e, item, value);
        }
    });
});
var dropdownCheck = renderer.create('<div class="note-dropdown-menu note-check">', function ($node, options) {
    var markup = $.isArray(options.items) ? options.items.map(function (item) {
        var value = (typeof item === 'string') ? item : (item.value || '');
        var content = options.template ? options.template(item) : item;
        var $temp = $('<a class="note-dropdown-item" href="#" data-value="' + value + '"></a>');
        $temp.html([icon(options.checkClassName), ' ', content]).data('item', item);
        return $temp;
    }) : options.items;
    $node.html(markup);
    $node.on('click', '> .note-dropdown-item', function (e) {
        var $a = $(this);
        var item = $a.data('item');
        var value = $a.data('value');
        if (item.click) {
            item.click($a);
        }
        else if (options.itemClick) {
            options.itemClick(e, item, value);
        }
    });
});
var dropdownButtonContents = function (contents, options) {
    return contents + ' ' + icon(options.icons.caret, 'span');
};
var dropdownButton = function (opt, callback) {
    return buttonGroup([
        button({
            className: 'dropdown-toggle',
            contents: opt.title + ' ' + icon('note-icon-caret'),
            tooltip: opt.tooltip,
            data: {
                toggle: 'dropdown'
            }
        }),
        dropdown({
            className: opt.className,
            items: opt.items,
            template: opt.template,
            itemClick: opt.itemClick
        })
    ], { callback: callback }).render();
};
var dropdownCheckButton = function (opt, callback) {
    return buttonGroup([
        button({
            className: 'dropdown-toggle',
            contents: opt.title + ' ' + icon('note-icon-caret'),
            tooltip: opt.tooltip,
            data: {
                toggle: 'dropdown'
            }
        }),
        dropdownCheck({
            className: opt.className,
            checkClassName: opt.checkClassName,
            items: opt.items,
            template: opt.template,
            itemClick: opt.itemClick
        })
    ], { callback: callback }).render();
};
var paragraphDropdownButton = function (opt) {
    return buttonGroup([
        button({
            className: 'dropdown-toggle',
            contents: opt.title + ' ' + icon('note-icon-caret'),
            tooltip: opt.tooltip,
            data: {
                toggle: 'dropdown'
            }
        }),
        dropdown([
            buttonGroup({
                className: 'note-align',
                children: opt.items[0]
            }),
            buttonGroup({
                className: 'note-list',
                children: opt.items[1]
            })
        ])
    ]).render();
};
var tableMoveHandler = function (event, col, row) {
    var PX_PER_EM = 18;
    var $picker = $(event.target.parentNode); // target is mousecatcher
    var $dimensionDisplay = $picker.next();
    var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
    var $highlighted = $picker.find('.note-dimension-picker-highlighted');
    var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
    var posOffset;
    // HTML5 with jQuery - e.offsetX is undefined in Firefox
    if (event.offsetX === undefined) {
        var posCatcher = $(event.target).offset();
        posOffset = {
            x: event.pageX - posCatcher.left,
            y: event.pageY - posCatcher.top
        };
    }
    else {
        posOffset = {
            x: event.offsetX,
            y: event.offsetY
        };
    }
    var dim = {
        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
    };
    $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
    $catcher.data('value', dim.c + 'x' + dim.r);
    if (dim.c > 3 && dim.c < col) {
        $unhighlighted.css({ width: dim.c + 1 + 'em' });
    }
    if (dim.r > 3 && dim.r < row) {
        $unhighlighted.css({ height: dim.r + 1 + 'em' });
    }
    $dimensionDisplay.html(dim.c + ' x ' + dim.r);
};
var tableDropdownButton = function (opt) {
    return buttonGroup([
        button({
            className: 'dropdown-toggle',
            contents: opt.title + ' ' + icon('note-icon-caret'),
            tooltip: opt.tooltip,
            data: {
                toggle: 'dropdown'
            }
        }),
        dropdown({
            className: 'note-table',
            items: [
                '<div class="note-dimension-picker">',
                '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>',
                '  <div class="note-dimension-picker-highlighted"/>',
                '  <div class="note-dimension-picker-unhighlighted"/>',
                '</div>',
                '<div class="note-dimension-display">1 x 1</div>'
            ].join('')
        })
    ], {
        callback: function ($node) {
            var $catcher = $node.find('.note-dimension-picker-mousecatcher');
            $catcher.css({
                width: opt.col + 'em',
                height: opt.row + 'em'
            })
                .mousedown(opt.itemClick)
                .mousemove(function (e) {
                tableMoveHandler(e, opt.col, opt.row);
            });
        }
    }).render();
};
var palette = renderer.create('<div class="note-color-palette"/>', function ($node, options) {
    var contents = [];
    for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
        var eventName = options.eventName;
        var colors = options.colors[row];
        var buttons = [];
        for (var col = 0, colSize = colors.length; col < colSize; col++) {
            var color = colors[col];
            buttons.push([
                '<button type="button" class="note-btn note-color-btn"',
                'style="background-color:', color, '" ',
                'data-event="', eventName, '" ',
                'data-value="', color, '" ',
                'title="', color, '" ',
                'data-toggle="button" tabindex="-1"></button>'
            ].join(''));
        }
        contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
    }
    $node.html(contents.join(''));
    $node.find('.note-color-btn').each(function () {
        $(this).data('_lite_tooltip', new TooltipUI($(this), {
            container: options.container
        }));
    });
});
var colorDropdownButton = function (opt, type) {
    return buttonGroup({
        className: 'note-color',
        children: [
            button({
                className: 'note-current-color-button',
                contents: opt.title,
                tooltip: opt.lang.color.recent,
                click: opt.currentClick,
                callback: function ($button) {
                    var $recentColor = $button.find('.note-recent-color');
                    if (type !== 'foreColor') {
                        $recentColor.css('background-color', '#FFFF00');
                        $button.attr('data-backColor', '#FFFF00');
                    }
                }
            }),
            button({
                className: 'dropdown-toggle',
                contents: icon('note-icon-caret'),
                tooltip: opt.lang.color.more,
                data: {
                    toggle: 'dropdown'
                }
            }),
            dropdown({
                items: [
                    '<div>',
                    '<div class="note-btn-group btn-background-color">',
                    '  <div class="note-palette-title">' + opt.lang.color.background + '</div>',
                    '  <div>',
                    '<button type="button" class="note-color-reset note-btn note-btn-block" ' +
                        ' data-event="backColor" data-value="inherit">',
                    opt.lang.color.transparent,
                    '    </button>',
                    '  </div>',
                    '  <div class="note-holder" data-event="backColor"/>',
                    '</div>',
                    '<div class="note-btn-group btn-foreground-color">',
                    '  <div class="note-palette-title">' + opt.lang.color.foreground + '</div>',
                    '  <div>',
                    '<button type="button" class="note-color-reset note-btn note-btn-block" ' +
                        ' data-event="removeFormat" data-value="foreColor">',
                    opt.lang.color.resetToDefault,
                    '    </button>',
                    '  </div>',
                    '  <div class="note-holder" data-event="foreColor"/>',
                    '</div>',
                    '</div>'
                ].join(''),
                callback: function ($dropdown) {
                    $dropdown.find('.note-holder').each(function () {
                        var $holder = $(this);
                        $holder.append(palette({
                            colors: opt.colors,
                            eventName: $holder.data('event')
                        }).render());
                    });
                    if (type === 'fore') {
                        $dropdown.find('.btn-background-color').hide();
                        $dropdown.css({ 'min-width': '210px' });
                    }
                    else if (type === 'back') {
                        $dropdown.find('.btn-foreground-color').hide();
                        $dropdown.css({ 'min-width': '210px' });
                    }
                },
                click: function (event) {
                    var $button = $(event.target);
                    var eventName = $button.data('event');
                    var value = $button.data('value');
                    if (eventName && value) {
                        var key = eventName === 'backColor' ? 'background-color' : 'color';
                        var $color = $button.closest('.note-color').find('.note-recent-color');
                        var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
                        $color.css(key, value);
                        $currentButton.attr('data-' + eventName, value);
                        if (type === 'fore') {
                            opt.itemClick('foreColor', value);
                        }
                        else if (type === 'back') {
                            opt.itemClick('backColor', value);
                        }
                        else {
                            opt.itemClick(eventName, value);
                        }
                    }
                }
            })
        ]
    }).render();
};
var dialog = renderer.create('<div class="note-modal" tabindex="-1"/>', function ($node, options) {
    if (options.fade) {
        $node.addClass('fade');
    }
    $node.html([
        '  <div class="note-modal-content">',
        (options.title
            ? '    <div class="note-modal-header">' +
                '      <button type="button" class="close"><i class="note-icon-close"></i></button>' +
                '      <h4 class="note-modal-title">' + options.title + '</h4>' +
                '    </div>' : ''),
        '    <div class="note-modal-body">' + options.body + '</div>',
        (options.footer
            ? '    <div class="note-modal-footer">' + options.footer + '</div>' : ''),
        '  </div>'
    ].join(''));
    $node.data('modal', new ModalUI($node, options));
});
var videoDialog = function (opt) {
    var body = '<div class="note-form-group">' +
        '<label class="note-form-label">' +
        opt.lang.video.url + ' <small class="text-muted">' +
        opt.lang.video.providers + '</small>' +
        '</label>' +
        '<input class="note-video-url note-input" type="text" />' +
        '</div>';
    var footer = [
        '<button type="button" href="#" class="note-btn note-btn-primary note-video-btn disabled" disabled>',
        opt.lang.video.insert,
        '</button>'
    ].join('');
    return dialog({
        title: opt.lang.video.insert,
        fade: opt.fade,
        body: body,
        footer: footer
    }).render();
};
var imageDialog = function (opt) {
    var body = '<div class="note-form-group note-group-select-from-files">' +
        '<label class="note-form-label">' + opt.lang.image.selectFromFiles + '</label>' +
        '<input class="note-note-image-input note-input" type="file" name="files" accept="image/*" multiple="multiple" />' +
        opt.imageLimitation +
        '</div>' +
        '<div class="note-form-group" style="overflow:auto;">' +
        '<label class="note-form-label">' + opt.lang.image.url + '</label>' +
        '<input class="note-image-url note-input" type="text" />' +
        '</div>';
    var footer = [
        '<button href="#" type="button" class="note-btn note-btn-primary note-btn-large note-image-btn disabled" disabled>',
        opt.lang.image.insert,
        '</button>'
    ].join('');
    return dialog({
        title: opt.lang.image.insert,
        fade: opt.fade,
        body: body,
        footer: footer
    }).render();
};
var linkDialog = function (opt) {
    var body = '<div class="note-form-group">' +
        '<label class="note-form-label">' + opt.lang.link.textToDisplay + '</label>' +
        '<input class="note-link-text note-input" type="text" />' +
        '</div>' +
        '<div class="note-form-group">' +
        '<label class="note-form-label">' + opt.lang.link.url + '</label>' +
        '<input class="note-link-url note-input" type="text" value="http://" />' +
        '</div>' +
        (!opt.disableLinkTarget
            ? '<div class="checkbox">' +
                '<label>' + '<input type="checkbox" checked> ' + opt.lang.link.openInNewWindow + '</label>' +
                '</div>' : '');
    var footer = [
        '<button href="#" type="button" class="note-btn note-btn-primary note-link-btn disabled" disabled>',
        opt.lang.link.insert,
        '</button>'
    ].join('');
    return dialog({
        className: 'link-dialog',
        title: opt.lang.link.insert,
        fade: opt.fade,
        body: body,
        footer: footer
    }).render();
};
var popover = renderer.create([
    '<div class="note-popover bottom">',
    '  <div class="note-popover-arrow"/>',
    '  <div class="note-popover-content note-children-container"/>',
    '</div>'
].join(''), function ($node, options) {
    var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';
    $node.addClass(direction).hide();
    if (options.hideArrow) {
        $node.find('.note-popover-arrow').hide();
    }
});
var checkbox = renderer.create('<div class="checkbox"></div>', function ($node, options) {
    $node.html([
        ' <label' + (options.id ? ' for="' + options.id + '"' : '') + '>',
        ' <input type="checkbox"' + (options.id ? ' id="' + options.id + '"' : ''),
        (options.checked ? ' checked' : '') + '/>',
        (options.text ? options.text : ''),
        '</label>'
    ].join(''));
});
var icon = function (iconClassName, tagName) {
    tagName = tagName || 'i';
    return '<' + tagName + ' class="' + iconClassName + '"/>';
};
var ui = {
    editor: editor,
    toolbar: toolbar,
    editingArea: editingArea,
    codable: codable,
    editable: editable,
    statusbar: statusbar,
    airEditor: airEditor,
    airEditable: airEditable,
    buttonGroup: buttonGroup,
    button: button,
    dropdown: dropdown,
    dropdownCheck: dropdownCheck,
    dropdownButton: dropdownButton,
    dropdownButtonContents: dropdownButtonContents,
    dropdownCheckButton: dropdownCheckButton,
    paragraphDropdownButton: paragraphDropdownButton,
    tableDropdownButton: tableDropdownButton,
    colorDropdownButton: colorDropdownButton,
    palette: palette,
    dialog: dialog,
    videoDialog: videoDialog,
    imageDialog: imageDialog,
    linkDialog: linkDialog,
    popover: popover,
    checkbox: checkbox,
    icon: icon,
    toggleBtn: function ($btn, isEnable) {
        $btn.toggleClass('disabled', !isEnable);
        $btn.attr('disabled', !isEnable);
    },
    toggleBtnActive: function ($btn, isActive) {
        $btn.toggleClass('active', isActive);
    },
    check: function ($dom, value) {
        $dom.find('.checked').removeClass('checked');
        $dom.find('[data-value="' + value + '"]').addClass('checked');
    },
    onDialogShown: function ($dialog, handler) {
        $dialog.one('note.modal.show', handler);
    },
    onDialogHidden: function ($dialog, handler) {
        $dialog.one('note.modal.hide', handler);
    },
    showDialog: function ($dialog) {
        $dialog.data('modal').show();
    },
    hideDialog: function ($dialog) {
        $dialog.data('modal').hide();
    },
    /**
     * get popover content area
     *
     * @param $popover
     * @returns {*}
     */
    getPopoverContent: function ($popover) {
        return $popover.find('.note-popover-content');
    },
    /**
     * get dialog's body area
     *
     * @param $dialog
     * @returns {*}
     */
    getDialogBody: function ($dialog) {
        return $dialog.find('.note-modal-body');
    },
    createLayout: function ($note, options) {
        var $editor = (options.airMode ? ui.airEditor([
            ui.editingArea([
                ui.airEditable()
            ])
        ]) : ui.editor([
            ui.toolbar(),
            ui.editingArea([
                ui.codable(),
                ui.editable()
            ]),
            ui.statusbar()
        ])).render();
        $editor.insertAfter($note);
        return {
            note: $note,
            editor: $editor,
            toolbar: $editor.find('.note-toolbar'),
            editingArea: $editor.find('.note-editing-area'),
            editable: $editor.find('.note-editable'),
            codable: $editor.find('.note-codable'),
            statusbar: $editor.find('.note-statusbar')
        };
    },
    removeLayout: function ($note, layoutInfo) {
        $note.html(layoutInfo.editable.html());
        layoutInfo.editor.remove();
        $note.off('summernote'); // remove summernote custom event
        $note.show();
    }
};

$$1.summernote = $$1.summernote || {
    lang: {}
};
$$1.extend($$1.summernote.lang, {
    'en-US': {
        font: {
            bold: 'Bold',
            italic: 'Italic',
            underline: 'Underline',
            clear: 'Remove Font Style',
            height: 'Line Height',
            name: 'Font Family',
            strikethrough: 'Strikethrough',
            subscript: 'Subscript',
            superscript: 'Superscript',
            size: 'Font Size'
        },
        image: {
            image: 'Picture',
            insert: 'Insert Image',
            resizeFull: 'Resize Full',
            resizeHalf: 'Resize Half',
            resizeQuarter: 'Resize Quarter',
            floatLeft: 'Float Left',
            floatRight: 'Float Right',
            floatNone: 'Float None',
            shapeRounded: 'Shape: Rounded',
            shapeCircle: 'Shape: Circle',
            shapeThumbnail: 'Shape: Thumbnail',
            shapeNone: 'Shape: None',
            dragImageHere: 'Drag image or text here',
            dropImage: 'Drop image or Text',
            selectFromFiles: 'Select from files',
            maximumFileSize: 'Maximum file size',
            maximumFileSizeError: 'Maximum file size exceeded.',
            url: 'Image URL',
            remove: 'Remove Image',
            original: 'Original'
        },
        video: {
            video: 'Video',
            videoLink: 'Video Link',
            insert: 'Insert Video',
            url: 'Video URL',
            providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
        },
        link: {
            link: 'Link',
            insert: 'Insert Link',
            unlink: 'Unlink',
            edit: 'Edit',
            textToDisplay: 'Text to display',
            url: 'To what URL should this link go?',
            openInNewWindow: 'Open in new window'
        },
        table: {
            table: 'Table',
            addRowAbove: 'Add row above',
            addRowBelow: 'Add row below',
            addColLeft: 'Add column left',
            addColRight: 'Add column right',
            delRow: 'Delete row',
            delCol: 'Delete column',
            delTable: 'Delete table'
        },
        hr: {
            insert: 'Insert Horizontal Rule'
        },
        style: {
            style: 'Style',
            p: 'Normal',
            blockquote: 'Quote',
            pre: 'Code',
            h1: 'Header 1',
            h2: 'Header 2',
            h3: 'Header 3',
            h4: 'Header 4',
            h5: 'Header 5',
            h6: 'Header 6'
        },
        lists: {
            unordered: 'Unordered list',
            ordered: 'Ordered list'
        },
        options: {
            help: 'Help',
            fullscreen: 'Full Screen',
            codeview: 'Code View'
        },
        paragraph: {
            paragraph: 'Paragraph',
            outdent: 'Outdent',
            indent: 'Indent',
            left: 'Align left',
            center: 'Align center',
            right: 'Align right',
            justify: 'Justify full'
        },
        color: {
            recent: 'Recent Color',
            more: 'More Color',
            background: 'Background Color',
            foreground: 'Foreground Color',
            transparent: 'Transparent',
            setTransparent: 'Set transparent',
            reset: 'Reset',
            resetToDefault: 'Reset to default'
        },
        shortcut: {
            shortcuts: 'Keyboard shortcuts',
            close: 'Close',
            textFormatting: 'Text formatting',
            action: 'Action',
            paragraphFormatting: 'Paragraph formatting',
            documentStyle: 'Document Style',
            extraKeys: 'Extra keys'
        },
        help: {
            'insertParagraph': 'Insert Paragraph',
            'undo': 'Undoes the last command',
            'redo': 'Redoes the last command',
            'tab': 'Tab',
            'untab': 'Untab',
            'bold': 'Set a bold style',
            'italic': 'Set a italic style',
            'underline': 'Set a underline style',
            'strikethrough': 'Set a strikethrough style',
            'removeFormat': 'Clean a style',
            'justifyLeft': 'Set left align',
            'justifyCenter': 'Set center align',
            'justifyRight': 'Set right align',
            'justifyFull': 'Set full align',
            'insertUnorderedList': 'Toggle unordered list',
            'insertOrderedList': 'Toggle ordered list',
            'outdent': 'Outdent on current paragraph',
            'indent': 'Indent on current paragraph',
            'formatPara': 'Change current block\'s format as a paragraph(P tag)',
            'formatH1': 'Change current block\'s format as H1',
            'formatH2': 'Change current block\'s format as H2',
            'formatH3': 'Change current block\'s format as H3',
            'formatH4': 'Change current block\'s format as H4',
            'formatH5': 'Change current block\'s format as H5',
            'formatH6': 'Change current block\'s format as H6',
            'insertHorizontalRule': 'Insert horizontal rule',
            'linkDialog.show': 'Show Link Dialog'
        },
        history: {
            undo: 'Undo',
            redo: 'Redo'
        },
        specialChar: {
            specialChar: 'SPECIAL CHARACTERS',
            select: 'Select Special characters'
        }
    }
});

var isSupportAmd = typeof define === 'function' && define.amd; // eslint-disable-line
/**
 * returns whether font is installed or not.
 *
 * @param {String} fontName
 * @return {Boolean}
 */
function isFontInstalled(fontName) {
    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
    var $tester = $$1('<div>').css({
        position: 'absolute',
        left: '-9999px',
        top: '-9999px',
        fontSize: '200px'
    }).text('mmmmmmmmmwwwwwww').appendTo(document.body);
    var originalWidth = $tester.css('fontFamily', testFontName).width();
    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();
    $tester.remove();
    return originalWidth !== width;
}
var userAgent = navigator.userAgent;
var isMSIE = /MSIE|Trident/i.test(userAgent);
var browserVersion;
if (isMSIE) {
    var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
    if (matches) {
        browserVersion = parseFloat(matches[1]);
    }
    matches = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgent);
    if (matches) {
        browserVersion = parseFloat(matches[1]);
    }
}
var isEdge = /Edge\/\d+/.test(userAgent);
var hasCodeMirror = !!window.CodeMirror;
if (!hasCodeMirror && isSupportAmd) {
    // Webpack
    if (typeof __webpack_require__ === 'function') {
        try {
            // If CodeMirror can't be resolved, `require.resolve` will throw an
            // exception and `hasCodeMirror` won't be set to `true`.
            require.resolve('codemirror');
            hasCodeMirror = true;
        }
        catch (e) {
            // do nothing
        }
    }
    else if (typeof require !== 'undefined') {
        // Browserify
        if (typeof require.resolve !== 'undefined') {
            try {
                // If CodeMirror can't be resolved, `require.resolve` will throw an
                // exception and `hasCodeMirror` won't be set to `true`.
                require.resolve('codemirror');
                hasCodeMirror = true;
            }
            catch (e) {
                // do nothing
            }
            // Almond/Require
        }
        else if (typeof require.specified !== 'undefined') {
            hasCodeMirror = require.specified('codemirror');
        }
    }
}
var isSupportTouch = (('ontouchstart' in window) ||
    (navigator.MaxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
// [workaround] IE doesn't have input events for contentEditable
// - see: https://goo.gl/4bfIvA
var inputEventName = (isMSIE || isEdge) ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
/**
 * @class core.env
 *
 * Object which check platform and agent
 *
 * @singleton
 * @alternateClassName env
 */
var env = {
    isMac: navigator.appVersion.indexOf('Mac') > -1,
    isMSIE: isMSIE,
    isEdge: isEdge,
    isFF: !isEdge && /firefox/i.test(userAgent),
    isPhantom: /PhantomJS/i.test(userAgent),
    isWebkit: !isEdge && /webkit/i.test(userAgent),
    isChrome: !isEdge && /chrome/i.test(userAgent),
    isSafari: !isEdge && /safari/i.test(userAgent),
    browserVersion: browserVersion,
    jqueryVersion: parseFloat($$1.fn.jquery),
    isSupportAmd: isSupportAmd,
    isSupportTouch: isSupportTouch,
    hasCodeMirror: hasCodeMirror,
    isFontInstalled: isFontInstalled,
    isW3CRangeSupport: !!document.createRange,
    inputEventName: inputEventName
};

/**
 * @class core.func
 *
 * func utils (for high-order func's arg)
 *
 * @singleton
 * @alternateClassName func
 */
function eq(itemA) {
    return function (itemB) {
        return itemA === itemB;
    };
}
function eq2(itemA, itemB) {
    return itemA === itemB;
}
function peq2(propName) {
    return function (itemA, itemB) {
        return itemA[propName] === itemB[propName];
    };
}
function ok() {
    return true;
}
function fail() {
    return false;
}
function not(f) {
    return function () {
        return !f.apply(f, arguments);
    };
}
function and(fA, fB) {
    return function (item) {
        return fA(item) && fB(item);
    };
}
function self(a) {
    return a;
}
function invoke(obj, method) {
    return function () {
        return obj[method].apply(obj, arguments);
    };
}
var idCounter = 0;
/**
 * generate a globally-unique id
 *
 * @param {String} [prefix]
 */
function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
}
/**
 * returns bnd (bounds) from rect
 *
 * - IE Compatibility Issue: http://goo.gl/sRLOAo
 * - Scroll Issue: http://goo.gl/sNjUc
 *
 * @param {Rect} rect
 * @return {Object} bounds
 * @return {Number} bounds.top
 * @return {Number} bounds.left
 * @return {Number} bounds.width
 * @return {Number} bounds.height
 */
function rect2bnd(rect) {
    var $document = $(document);
    return {
        top: rect.top + $document.scrollTop(),
        left: rect.left + $document.scrollLeft(),
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
}
/**
 * returns a copy of the object where the keys have become the values and the values the keys.
 * @param {Object} obj
 * @return {Object}
 */
function invertObject(obj) {
    var inverted = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}
/**
 * @param {String} namespace
 * @param {String} [prefix]
 * @return {String}
 */
function namespaceToCamel(namespace, prefix) {
    prefix = prefix || '';
    return prefix + namespace.split('.').map(function (name) {
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    }).join('');
}
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} immediate
 * @return {Function}
 */
function debounce(func, wait, immediate) {
    var _this = this;
    var timeout;
    return function () {
        var context = _this;
        var args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
var func = {
    eq: eq,
    eq2: eq2,
    peq2: peq2,
    ok: ok,
    fail: fail,
    self: self,
    not: not,
    and: and,
    invoke: invoke,
    uniqueId: uniqueId,
    rect2bnd: rect2bnd,
    invertObject: invertObject,
    namespaceToCamel: namespaceToCamel,
    debounce: debounce
};

/**
 * returns the first item of an array.
 *
 * @param {Array} array
 */
function head(array) {
    return array[0];
}
/**
 * returns the last item of an array.
 *
 * @param {Array} array
 */
function last(array) {
    return array[array.length - 1];
}
/**
 * returns everything but the last entry of the array.
 *
 * @param {Array} array
 */
function initial(array) {
    return array.slice(0, array.length - 1);
}
/**
 * returns the rest of the items in an array.
 *
 * @param {Array} array
 */
function tail(array) {
    return array.slice(1);
}
/**
 * returns item of array
 */
function find(array, pred) {
    for (var idx = 0, len = array.length; idx < len; idx++) {
        var item = array[idx];
        if (pred(item)) {
            return item;
        }
    }
}
/**
 * returns true if all of the values in the array pass the predicate truth test.
 */
function all(array, pred) {
    for (var idx = 0, len = array.length; idx < len; idx++) {
        if (!pred(array[idx])) {
            return false;
        }
    }
    return true;
}
/**
 * returns index of item
 */
function indexOf(array, item) {
    return $$1.inArray(item, array);
}
/**
 * returns true if the value is present in the list.
 */
function contains(array, item) {
    return indexOf(array, item) !== -1;
}
/**
 * get sum from a list
 *
 * @param {Array} array - array
 * @param {Function} fn - iterator
 */
function sum(array, fn) {
    fn = fn || func.self;
    return array.reduce(function (memo, v) {
        return memo + fn(v);
    }, 0);
}
/**
 * returns a copy of the collection with array type.
 * @param {Collection} collection - collection eg) node.childNodes, ...
 */
function from(collection) {
    var result = [];
    var length = collection.length;
    var idx = -1;
    while (++idx < length) {
        result[idx] = collection[idx];
    }
    return result;
}
/**
 * returns whether list is empty or not
 */
function isEmpty(array) {
    return !array || !array.length;
}
/**
 * cluster elements by predicate function.
 *
 * @param {Array} array - array
 * @param {Function} fn - predicate function for cluster rule
 * @param {Array[]}
 */
function clusterBy(array, fn) {
    if (!array.length) {
        return [];
    }
    var aTail = tail(array);
    return aTail.reduce(function (memo, v) {
        var aLast = last(memo);
        if (fn(last(aLast), v)) {
            aLast[aLast.length] = v;
        }
        else {
            memo[memo.length] = [v];
        }
        return memo;
    }, [[head(array)]]);
}
/**
 * returns a copy of the array with all false values removed
 *
 * @param {Array} array - array
 * @param {Function} fn - predicate function for cluster rule
 */
function compact(array) {
    var aResult = [];
    for (var idx = 0, len = array.length; idx < len; idx++) {
        if (array[idx]) {
            aResult.push(array[idx]);
        }
    }
    return aResult;
}
/**
 * produces a duplicate-free version of the array
 *
 * @param {Array} array
 */
function unique(array) {
    var results = [];
    for (var idx = 0, len = array.length; idx < len; idx++) {
        if (!contains(results, array[idx])) {
            results.push(array[idx]);
        }
    }
    return results;
}
/**
 * returns next item.
 * @param {Array} array
 */
function next(array, item) {
    var idx = indexOf(array, item);
    if (idx === -1) {
        return null;
    }
    return array[idx + 1];
}
/**
 * returns prev item.
 * @param {Array} array
 */
function prev(array, item) {
    var idx = indexOf(array, item);
    if (idx === -1) {
        return null;
    }
    return array[idx - 1];
}
/**
 * @class core.list
 *
 * list utils
 *
 * @singleton
 * @alternateClassName list
 */
var lists = {
    head: head,
    last: last,
    initial: initial,
    tail: tail,
    prev: prev,
    next: next,
    find: find,
    contains: contains,
    all: all,
    sum: sum,
    from: from,
    isEmpty: isEmpty,
    clusterBy: clusterBy,
    compact: compact,
    unique: unique
};

var KEY_MAP = {
    'BACKSPACE': 8,
    'TAB': 9,
    'ENTER': 13,
    'SPACE': 32,
    'DELETE': 46,
    // Arrow
    'LEFT': 37,
    'UP': 38,
    'RIGHT': 39,
    'DOWN': 40,
    // Number: 0-9
    'NUM0': 48,
    'NUM1': 49,
    'NUM2': 50,
    'NUM3': 51,
    'NUM4': 52,
    'NUM5': 53,
    'NUM6': 54,
    'NUM7': 55,
    'NUM8': 56,
    // Alphabet: a-z
    'B': 66,
    'E': 69,
    'I': 73,
    'J': 74,
    'K': 75,
    'L': 76,
    'R': 82,
    'S': 83,
    'U': 85,
    'V': 86,
    'Y': 89,
    'Z': 90,
    'SLASH': 191,
    'LEFTBRACKET': 219,
    'BACKSLASH': 220,
    'RIGHTBRACKET': 221
};
/**
 * @class core.key
 *
 * Object for keycodes.
 *
 * @singleton
 * @alternateClassName key
 */
var key = {
    /**
     * @method isEdit
     *
     * @param {Number} keyCode
     * @return {Boolean}
     */
    isEdit: function (keyCode) {
        return lists.contains([
            KEY_MAP.BACKSPACE,
            KEY_MAP.TAB,
            KEY_MAP.ENTER,
            KEY_MAP.SPACE,
            KEY_MAP.DELETE
        ], keyCode);
    },
    /**
     * @method isMove
     *
     * @param {Number} keyCode
     * @return {Boolean}
     */
    isMove: function (keyCode) {
        return lists.contains([
            KEY_MAP.LEFT,
            KEY_MAP.UP,
            KEY_MAP.RIGHT,
            KEY_MAP.DOWN
        ], keyCode);
    },
    /**
     * @property {Object} nameFromCode
     * @property {String} nameFromCode.8 "BACKSPACE"
     */
    nameFromCode: func.invertObject(KEY_MAP),
    code: KEY_MAP
};

var NBSP_CHAR = String.fromCharCode(160);
var ZERO_WIDTH_NBSP_CHAR = '\ufeff';
/**
 * @method isEditable
 *
 * returns whether node is `note-editable` or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */
function isEditable(node) {
    return node && $$1(node).hasClass('note-editable');
}
/**
 * @method isControlSizing
 *
 * returns whether node is `note-control-sizing` or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */
function isControlSizing(node) {
    return node && $$1(node).hasClass('note-control-sizing');
}
/**
 * @method makePredByNodeName
 *
 * returns predicate which judge whether nodeName is same
 *
 * @param {String} nodeName
 * @return {Function}
 */
function makePredByNodeName(nodeName) {
    nodeName = nodeName.toUpperCase();
    return function (node) {
        return node && node.nodeName.toUpperCase() === nodeName;
    };
}
/**
 * @method isText
 *
 *
 *
 * @param {Node} node
 * @return {Boolean} true if node's type is text(3)
 */
function isText(node) {
    return node && node.nodeType === 3;
}
/**
 * @method isElement
 *
 *
 *
 * @param {Node} node
 * @return {Boolean} true if node's type is element(1)
 */
function isElement(node) {
    return node && node.nodeType === 1;
}
/**
 * ex) br, col, embed, hr, img, input, ...
 * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
 */
function isVoid(node) {
    return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT/.test(node.nodeName.toUpperCase());
}
function isPara(node) {
    if (isEditable(node)) {
        return false;
    }
    // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
    return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
}
function isHeading(node) {
    return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
}
var isPre = makePredByNodeName('PRE');
var isLi = makePredByNodeName('LI');
function isPurePara(node) {
    return isPara(node) && !isLi(node);
}
var isTable = makePredByNodeName('TABLE');
var isData = makePredByNodeName('DATA');
function isInline(node) {
    return !isBodyContainer(node) &&
        !isList(node) &&
        !isHr(node) &&
        !isPara(node) &&
        !isTable(node) &&
        !isBlockquote(node) &&
        !isData(node);
}
function isList(node) {
    return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
}
var isHr = makePredByNodeName('HR');
function isCell(node) {
    return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
}
var isBlockquote = makePredByNodeName('BLOCKQUOTE');
function isBodyContainer(node) {
    return isCell(node) || isBlockquote(node) || isEditable(node);
}
var isAnchor = makePredByNodeName('A');
function isParaInline(node) {
    return isInline(node) && !!ancestor(node, isPara);
}
function isBodyInline(node) {
    return isInline(node) && !ancestor(node, isPara);
}
var isBody = makePredByNodeName('BODY');
/**
 * returns whether nodeB is closest sibling of nodeA
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @return {Boolean}
 */
function isClosestSibling(nodeA, nodeB) {
    return nodeA.nextSibling === nodeB ||
        nodeA.previousSibling === nodeB;
}
/**
 * returns array of closest siblings with node
 *
 * @param {Node} node
 * @param {function} [pred] - predicate function
 * @return {Node[]}
 */
function withClosestSiblings(node, pred) {
    pred = pred || func.ok;
    var siblings = [];
    if (node.previousSibling && pred(node.previousSibling)) {
        siblings.push(node.previousSibling);
    }
    siblings.push(node);
    if (node.nextSibling && pred(node.nextSibling)) {
        siblings.push(node.nextSibling);
    }
    return siblings;
}
/**
 * blank HTML for cursor position
 * - [workaround] old IE only works with &nbsp;
 * - [workaround] IE11 and other browser works with bogus br
 */
var blankHTML = env.isMSIE && env.browserVersion < 11 ? '&nbsp;' : '<br>';
/**
 * @method nodeLength
 *
 * returns #text's text size or element's childNodes size
 *
 * @param {Node} node
 */
function nodeLength(node) {
    if (isText(node)) {
        return node.nodeValue.length;
    }
    if (node) {
        return node.childNodes.length;
    }
    return 0;
}
/**
 * returns whether node is empty or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */
function isEmpty$1(node) {
    var len = nodeLength(node);
    if (len === 0) {
        return true;
    }
    else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
        // ex) <p><br></p>, <span><br></span>
        return true;
    }
    else if (lists.all(node.childNodes, isText) && node.innerHTML === '') {
        // ex) <p></p>, <span></span>
        return true;
    }
    return false;
}
/**
 * padding blankHTML if node is empty (for cursor position)
 */
function paddingBlankHTML(node) {
    if (!isVoid(node) && !nodeLength(node)) {
        node.innerHTML = blankHTML;
    }
}
/**
 * find nearest ancestor predicate hit
 *
 * @param {Node} node
 * @param {Function} pred - predicate function
 */
function ancestor(node, pred) {
    while (node) {
        if (pred(node)) {
            return node;
        }
        if (isEditable(node)) {
            break;
        }
        node = node.parentNode;
    }
    return null;
}
/**
 * find nearest ancestor only single child blood line and predicate hit
 *
 * @param {Node} node
 * @param {Function} pred - predicate function
 */
function singleChildAncestor(node, pred) {
    node = node.parentNode;
    while (node) {
        if (nodeLength(node) !== 1) {
            break;
        }
        if (pred(node)) {
            return node;
        }
        if (isEditable(node)) {
            break;
        }
        node = node.parentNode;
    }
    return null;
}
/**
 * returns new array of ancestor nodes (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [optional] pred - predicate function
 */
function listAncestor(node, pred) {
    pred = pred || func.fail;
    var ancestors = [];
    ancestor(node, function (el) {
        if (!isEditable(el)) {
            ancestors.push(el);
        }
        return pred(el);
    });
    return ancestors;
}
/**
 * find farthest ancestor predicate hit
 */
function lastAncestor(node, pred) {
    var ancestors = listAncestor(node);
    return lists.last(ancestors.filter(pred));
}
/**
 * returns common ancestor node between two nodes.
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 */
function commonAncestor(nodeA, nodeB) {
    var ancestors = listAncestor(nodeA);
    for (var n = nodeB; n; n = n.parentNode) {
        if ($$1.inArray(n, ancestors) > -1) {
            return n;
        }
    }
    return null; // difference document area
}
/**
 * listing all previous siblings (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [optional] pred - predicate function
 */
function listPrev(node, pred) {
    pred = pred || func.fail;
    var nodes = [];
    while (node) {
        if (pred(node)) {
            break;
        }
        nodes.push(node);
        node = node.previousSibling;
    }
    return nodes;
}
/**
 * listing next siblings (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [pred] - predicate function
 */
function listNext(node, pred) {
    pred = pred || func.fail;
    var nodes = [];
    while (node) {
        if (pred(node)) {
            break;
        }
        nodes.push(node);
        node = node.nextSibling;
    }
    return nodes;
}
/**
 * listing descendant nodes
 *
 * @param {Node} node
 * @param {Function} [pred] - predicate function
 */
function listDescendant(node, pred) {
    var descendants = [];
    pred = pred || func.ok;
    // start DFS(depth first search) with node
    (function fnWalk(current) {
        if (node !== current && pred(current)) {
            descendants.push(current);
        }
        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
            fnWalk(current.childNodes[idx]);
        }
    })(node);
    return descendants;
}
/**
 * wrap node with new tag.
 *
 * @param {Node} node
 * @param {Node} tagName of wrapper
 * @return {Node} - wrapper
 */
function wrap(node, wrapperName) {
    var parent = node.parentNode;
    var wrapper = $$1('<' + wrapperName + '>')[0];
    parent.insertBefore(wrapper, node);
    wrapper.appendChild(node);
    return wrapper;
}
/**
 * insert node after preceding
 *
 * @param {Node} node
 * @param {Node} preceding - predicate function
 */
function insertAfter(node, preceding) {
    var next = preceding.nextSibling;
    var parent = preceding.parentNode;
    if (next) {
        parent.insertBefore(node, next);
    }
    else {
        parent.appendChild(node);
    }
    return node;
}
/**
 * append elements.
 *
 * @param {Node} node
 * @param {Collection} aChild
 */
function appendChildNodes(node, aChild) {
    $$1.each(aChild, function (idx, child) {
        node.appendChild(child);
    });
    return node;
}
/**
 * returns whether boundaryPoint is left edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */
function isLeftEdgePoint(point) {
    return point.offset === 0;
}
/**
 * returns whether boundaryPoint is right edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */
function isRightEdgePoint(point) {
    return point.offset === nodeLength(point.node);
}
/**
 * returns whether boundaryPoint is edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */
function isEdgePoint(point) {
    return isLeftEdgePoint(point) || isRightEdgePoint(point);
}
/**
 * returns whether node is left edge of ancestor or not.
 *
 * @param {Node} node
 * @param {Node} ancestor
 * @return {Boolean}
 */
function isLeftEdgeOf(node, ancestor) {
    while (node && node !== ancestor) {
        if (position(node) !== 0) {
            return false;
        }
        node = node.parentNode;
    }
    return true;
}
/**
 * returns whether node is right edge of ancestor or not.
 *
 * @param {Node} node
 * @param {Node} ancestor
 * @return {Boolean}
 */
function isRightEdgeOf(node, ancestor) {
    if (!ancestor) {
        return false;
    }
    while (node && node !== ancestor) {
        if (position(node) !== nodeLength(node.parentNode) - 1) {
            return false;
        }
        node = node.parentNode;
    }
    return true;
}
/**
 * returns whether point is left edge of ancestor or not.
 * @param {BoundaryPoint} point
 * @param {Node} ancestor
 * @return {Boolean}
 */
function isLeftEdgePointOf(point, ancestor) {
    return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);
}
/**
 * returns whether point is right edge of ancestor or not.
 * @param {BoundaryPoint} point
 * @param {Node} ancestor
 * @return {Boolean}
 */
function isRightEdgePointOf(point, ancestor) {
    return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
}
/**
 * returns offset from parent.
 *
 * @param {Node} node
 */
function position(node) {
    var offset = 0;
    while ((node = node.previousSibling)) {
        offset += 1;
    }
    return offset;
}
function hasChildren(node) {
    return !!(node && node.childNodes && node.childNodes.length);
}
/**
 * returns previous boundaryPoint
 *
 * @param {BoundaryPoint} point
 * @param {Boolean} isSkipInnerOffset
 * @return {BoundaryPoint}
 */
function prevPoint(point, isSkipInnerOffset) {
    var node;
    var offset;
    if (point.offset === 0) {
        if (isEditable(point.node)) {
            return null;
        }
        node = point.node.parentNode;
        offset = position(point.node);
    }
    else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset - 1];
        offset = nodeLength(node);
    }
    else {
        node = point.node;
        offset = isSkipInnerOffset ? 0 : point.offset - 1;
    }
    return {
        node: node,
        offset: offset
    };
}
/**
 * returns next boundaryPoint
 *
 * @param {BoundaryPoint} point
 * @param {Boolean} isSkipInnerOffset
 * @return {BoundaryPoint}
 */
function nextPoint(point, isSkipInnerOffset) {
    var node, offset;
    if (nodeLength(point.node) === point.offset) {
        if (isEditable(point.node)) {
            return null;
        }
        node = point.node.parentNode;
        offset = position(point.node) + 1;
    }
    else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset];
        offset = 0;
    }
    else {
        node = point.node;
        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
    }
    return {
        node: node,
        offset: offset
    };
}
/**
 * returns whether pointA and pointB is same or not.
 *
 * @param {BoundaryPoint} pointA
 * @param {BoundaryPoint} pointB
 * @return {Boolean}
 */
function isSamePoint(pointA, pointB) {
    return pointA.node === pointB.node && pointA.offset === pointB.offset;
}
/**
 * returns whether point is visible (can set cursor) or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */
function isVisiblePoint(point) {
    if (isText(point.node) || !hasChildren(point.node) || isEmpty$1(point.node)) {
        return true;
    }
    var leftNode = point.node.childNodes[point.offset - 1];
    var rightNode = point.node.childNodes[point.offset];
    if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
        return true;
    }
    return false;
}
/**
 * @method prevPointUtil
 *
 * @param {BoundaryPoint} point
 * @param {Function} pred
 * @return {BoundaryPoint}
 */
function prevPointUntil(point, pred) {
    while (point) {
        if (pred(point)) {
            return point;
        }
        point = prevPoint(point);
    }
    return null;
}
/**
 * @method nextPointUntil
 *
 * @param {BoundaryPoint} point
 * @param {Function} pred
 * @return {BoundaryPoint}
 */
function nextPointUntil(point, pred) {
    while (point) {
        if (pred(point)) {
            return point;
        }
        point = nextPoint(point);
    }
    return null;
}
/**
 * returns whether point has character or not.
 *
 * @param {Point} point
 * @return {Boolean}
 */
function isCharPoint(point) {
    if (!isText(point.node)) {
        return false;
    }
    var ch = point.node.nodeValue.charAt(point.offset - 1);
    return ch && (ch !== ' ' && ch !== NBSP_CHAR);
}
/**
 * @method walkPoint
 *
 * @param {BoundaryPoint} startPoint
 * @param {BoundaryPoint} endPoint
 * @param {Function} handler
 * @param {Boolean} isSkipInnerOffset
 */
function walkPoint(startPoint, endPoint, handler, isSkipInnerOffset) {
    var point = startPoint;
    while (point) {
        handler(point);
        if (isSamePoint(point, endPoint)) {
            break;
        }
        var isSkipOffset = isSkipInnerOffset &&
            startPoint.node !== point.node &&
            endPoint.node !== point.node;
        point = nextPoint(point, isSkipOffset);
    }
}
/**
 * @method makeOffsetPath
 *
 * return offsetPath(array of offset) from ancestor
 *
 * @param {Node} ancestor - ancestor node
 * @param {Node} node
 */
function makeOffsetPath(ancestor, node) {
    var ancestors = listAncestor(node, func.eq(ancestor));
    return ancestors.map(position).reverse();
}
/**
 * @method fromOffsetPath
 *
 * return element from offsetPath(array of offset)
 *
 * @param {Node} ancestor - ancestor node
 * @param {array} offsets - offsetPath
 */
function fromOffsetPath(ancestor, offsets) {
    var current = ancestor;
    for (var i = 0, len = offsets.length; i < len; i++) {
        if (current.childNodes.length <= offsets[i]) {
            current = current.childNodes[current.childNodes.length - 1];
        }
        else {
            current = current.childNodes[offsets[i]];
        }
    }
    return current;
}
/**
 * @method splitNode
 *
 * split element or #text
 *
 * @param {BoundaryPoint} point
 * @param {Object} [options]
 * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
 * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
 * @return {Node} right node of boundaryPoint
 */
function splitNode(point, options) {
    var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
    var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;
    // edge case
    if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
        if (isLeftEdgePoint(point)) {
            return point.node;
        }
        else if (isRightEdgePoint(point)) {
            return point.node.nextSibling;
        }
    }
    // split #text
    if (isText(point.node)) {
        return point.node.splitText(point.offset);
    }
    else {
        var childNode = point.node.childNodes[point.offset];
        var clone = insertAfter(point.node.cloneNode(false), point.node);
        appendChildNodes(clone, listNext(childNode));
        if (!isSkipPaddingBlankHTML) {
            paddingBlankHTML(point.node);
            paddingBlankHTML(clone);
        }
        return clone;
    }
}
/**
 * @method splitTree
 *
 * split tree by point
 *
 * @param {Node} root - split root
 * @param {BoundaryPoint} point
 * @param {Object} [options]
 * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
 * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
 * @return {Node} right node of boundaryPoint
 */
function splitTree(root, point, options) {
    // ex) [#text, <span>, <p>]
    var ancestors = listAncestor(point.node, func.eq(root));
    if (!ancestors.length) {
        return null;
    }
    else if (ancestors.length === 1) {
        return splitNode(point, options);
    }
    return ancestors.reduce(function (node, parent) {
        if (node === point.node) {
            node = splitNode(point, options);
        }
        return splitNode({
            node: parent,
            offset: node ? position(node) : nodeLength(parent)
        }, options);
    });
}
/**
 * split point
 *
 * @param {Point} point
 * @param {Boolean} isInline
 * @return {Object}
 */
function splitPoint(point, isInline) {
    // find splitRoot, container
    //  - inline: splitRoot is a child of paragraph
    //  - block: splitRoot is a child of bodyContainer
    var pred = isInline ? isPara : isBodyContainer;
    var ancestors = listAncestor(point.node, pred);
    var topAncestor = lists.last(ancestors) || point.node;
    var splitRoot, container;
    if (pred(topAncestor)) {
        splitRoot = ancestors[ancestors.length - 2];
        container = topAncestor;
    }
    else {
        splitRoot = topAncestor;
        container = splitRoot.parentNode;
    }
    // if splitRoot is exists, split with splitTree
    var pivot = splitRoot && splitTree(splitRoot, point, {
        isSkipPaddingBlankHTML: isInline,
        isNotSplitEdgePoint: isInline
    });
    // if container is point.node, find pivot with point.offset
    if (!pivot && container === point.node) {
        pivot = point.node.childNodes[point.offset];
    }
    return {
        rightNode: pivot,
        container: container
    };
}
function create(nodeName) {
    return document.createElement(nodeName);
}
function createText(text) {
    return document.createTextNode(text);
}
/**
 * @method remove
 *
 * remove node, (isRemoveChild: remove child or not)
 *
 * @param {Node} node
 * @param {Boolean} isRemoveChild
 */
function remove(node, isRemoveChild) {
    if (!node || !node.parentNode) {
        return;
    }
    if (node.removeNode) {
        return node.removeNode(isRemoveChild);
    }
    var parent = node.parentNode;
    if (!isRemoveChild) {
        var nodes = [];
        for (var i = 0, len = node.childNodes.length; i < len; i++) {
            nodes.push(node.childNodes[i]);
        }
        for (var i = 0, len = nodes.length; i < len; i++) {
            parent.insertBefore(nodes[i], node);
        }
    }
    parent.removeChild(node);
}
/**
 * @method removeWhile
 *
 * @param {Node} node
 * @param {Function} pred
 */
function removeWhile(node, pred) {
    while (node) {
        if (isEditable(node) || !pred(node)) {
            break;
        }
        var parent = node.parentNode;
        remove(node);
        node = parent;
    }
}
/**
 * @method replace
 *
 * replace node with provided nodeName
 *
 * @param {Node} node
 * @param {String} nodeName
 * @return {Node} - new node
 */
function replace(node, nodeName) {
    if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
        return node;
    }
    var newNode = create(nodeName);
    if (node.style.cssText) {
        newNode.style.cssText = node.style.cssText;
    }
    appendChildNodes(newNode, lists.from(node.childNodes));
    insertAfter(newNode, node);
    remove(node);
    return newNode;
}
var isTextarea = makePredByNodeName('TEXTAREA');
/**
 * @param {jQuery} $node
 * @param {Boolean} [stripLinebreaks] - default: false
 */
function value($node, stripLinebreaks) {
    var val = isTextarea($node[0]) ? $node.val() : $node.html();
    if (stripLinebreaks) {
        return val.replace(/[\n\r]/g, '');
    }
    return val;
}
/**
 * @method html
 *
 * get the HTML contents of node
 *
 * @param {jQuery} $node
 * @param {Boolean} [isNewlineOnBlock]
 */
function html($node, isNewlineOnBlock) {
    var markup = value($node);
    if (isNewlineOnBlock) {
        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
        markup = markup.replace(regexTag, function (match, endSlash, name) {
            name = name.toUpperCase();
            var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
                !!endSlash;
            var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);
            return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
        });
        markup = $$1.trim(markup);
    }
    return markup;
}
function posFromPlaceholder(placeholder) {
    var $placeholder = $$1(placeholder);
    var pos = $placeholder.offset();
    var height = $placeholder.outerHeight(true); // include margin
    return {
        left: pos.left,
        top: pos.top + height
    };
}
function attachEvents($node, events) {
    Object.keys(events).forEach(function (key) {
        $node.on(key, events[key]);
    });
}
function detachEvents($node, events) {
    Object.keys(events).forEach(function (key) {
        $node.off(key, events[key]);
    });
}
/**
 * @method isCustomStyleTag
 *
 * assert if a node contains a "note-styletag" class,
 * which implies that's a custom-made style tag node
 *
 * @param {Node} an HTML DOM node
 */
function isCustomStyleTag(node) {
    return node && !isText(node) && lists.contains(node.classList, 'note-styletag');
}
var dom = {
    /** @property {String} NBSP_CHAR */
    NBSP_CHAR: NBSP_CHAR,
    /** @property {String} ZERO_WIDTH_NBSP_CHAR */
    ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
    /** @property {String} blank */
    blank: blankHTML,
    /** @property {String} emptyPara */
    emptyPara: "<p>" + blankHTML + "</p>",
    makePredByNodeName: makePredByNodeName,
    isEditable: isEditable,
    isControlSizing: isControlSizing,
    isText: isText,
    isElement: isElement,
    isVoid: isVoid,
    isPara: isPara,
    isPurePara: isPurePara,
    isHeading: isHeading,
    isInline: isInline,
    isBlock: func.not(isInline),
    isBodyInline: isBodyInline,
    isBody: isBody,
    isParaInline: isParaInline,
    isPre: isPre,
    isList: isList,
    isTable: isTable,
    isData: isData,
    isCell: isCell,
    isBlockquote: isBlockquote,
    isBodyContainer: isBodyContainer,
    isAnchor: isAnchor,
    isDiv: makePredByNodeName('DIV'),
    isLi: isLi,
    isBR: makePredByNodeName('BR'),
    isSpan: makePredByNodeName('SPAN'),
    isB: makePredByNodeName('B'),
    isU: makePredByNodeName('U'),
    isS: makePredByNodeName('S'),
    isI: makePredByNodeName('I'),
    isImg: makePredByNodeName('IMG'),
    isTextarea: isTextarea,
    isEmpty: isEmpty$1,
    isEmptyAnchor: func.and(isAnchor, isEmpty$1),
    isClosestSibling: isClosestSibling,
    withClosestSiblings: withClosestSiblings,
    nodeLength: nodeLength,
    isLeftEdgePoint: isLeftEdgePoint,
    isRightEdgePoint: isRightEdgePoint,
    isEdgePoint: isEdgePoint,
    isLeftEdgeOf: isLeftEdgeOf,
    isRightEdgeOf: isRightEdgeOf,
    isLeftEdgePointOf: isLeftEdgePointOf,
    isRightEdgePointOf: isRightEdgePointOf,
    prevPoint: prevPoint,
    nextPoint: nextPoint,
    isSamePoint: isSamePoint,
    isVisiblePoint: isVisiblePoint,
    prevPointUntil: prevPointUntil,
    nextPointUntil: nextPointUntil,
    isCharPoint: isCharPoint,
    walkPoint: walkPoint,
    ancestor: ancestor,
    singleChildAncestor: singleChildAncestor,
    listAncestor: listAncestor,
    lastAncestor: lastAncestor,
    listNext: listNext,
    listPrev: listPrev,
    listDescendant: listDescendant,
    commonAncestor: commonAncestor,
    wrap: wrap,
    insertAfter: insertAfter,
    appendChildNodes: appendChildNodes,
    position: position,
    hasChildren: hasChildren,
    makeOffsetPath: makeOffsetPath,
    fromOffsetPath: fromOffsetPath,
    splitTree: splitTree,
    splitPoint: splitPoint,
    create: create,
    createText: createText,
    remove: remove,
    removeWhile: removeWhile,
    replace: replace,
    html: html,
    value: value,
    posFromPlaceholder: posFromPlaceholder,
    attachEvents: attachEvents,
    detachEvents: detachEvents,
    isCustomStyleTag: isCustomStyleTag
};

/**
 * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
 *
 * @param {TextRange} textRange
 * @param {Boolean} isStart
 * @return {BoundaryPoint}
 *
 * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
 */
function textRangeToPoint(textRange, isStart) {
    var container = textRange.parentElement();
    var offset;
    var tester = document.body.createTextRange();
    var prevContainer;
    var childNodes = lists.from(container.childNodes);
    for (offset = 0; offset < childNodes.length; offset++) {
        if (dom.isText(childNodes[offset])) {
            continue;
        }
        tester.moveToElementText(childNodes[offset]);
        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
            break;
        }
        prevContainer = childNodes[offset];
    }
    if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
        var textRangeStart = document.body.createTextRange();
        var curTextNode = null;
        textRangeStart.moveToElementText(prevContainer || container);
        textRangeStart.collapse(!prevContainer);
        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
        var pointTester = textRange.duplicate();
        pointTester.setEndPoint('StartToStart', textRangeStart);
        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;
        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
            textCount -= curTextNode.nodeValue.length;
            curTextNode = curTextNode.nextSibling;
        }
        // [workaround] enforce IE to re-reference curTextNode, hack
        var dummy = curTextNode.nodeValue; // eslint-disable-line
        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
            textCount === curTextNode.nodeValue.length) {
            textCount -= curTextNode.nodeValue.length;
            curTextNode = curTextNode.nextSibling;
        }
        container = curTextNode;
        offset = textCount;
    }
    return {
        cont: container,
        offset: offset
    };
}
/**
 * return TextRange from boundary point (inspired by google closure-library)
 * @param {BoundaryPoint} point
 * @return {TextRange}
 */
function pointToTextRange(point) {
    var textRangeInfo = function (container, offset) {
        var node, isCollapseToStart;
        if (dom.isText(container)) {
            var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
            var prevContainer = lists.last(prevTextNodes).previousSibling;
            node = prevContainer || container.parentNode;
            offset += lists.sum(lists.tail(prevTextNodes), dom.nodeLength);
            isCollapseToStart = !prevContainer;
        }
        else {
            node = container.childNodes[offset] || container;
            if (dom.isText(node)) {
                return textRangeInfo(node, 0);
            }
            offset = 0;
            isCollapseToStart = false;
        }
        return {
            node: node,
            collapseToStart: isCollapseToStart,
            offset: offset
        };
    };
    var textRange = document.body.createTextRange();
    var info = textRangeInfo(point.node, point.offset);
    textRange.moveToElementText(info.node);
    textRange.collapse(info.collapseToStart);
    textRange.moveStart('character', info.offset);
    return textRange;
}
/**
   * Wrapped Range
   *
   * @constructor
   * @param {Node} sc - start container
   * @param {Number} so - start offset
   * @param {Node} ec - end container
   * @param {Number} eo - end offset
   */
var WrappedRange = /** @class */ (function () {
    function WrappedRange(sc, so, ec, eo) {
        this.sc = sc;
        this.so = so;
        this.ec = ec;
        this.eo = eo;
        // isOnEditable: judge whether range is on editable or not
        this.isOnEditable = this.makeIsOn(dom.isEditable);
        // isOnList: judge whether range is on list node or not
        this.isOnList = this.makeIsOn(dom.isList);
        // isOnAnchor: judge whether range is on anchor node or not
        this.isOnAnchor = this.makeIsOn(dom.isAnchor);
        // isOnCell: judge whether range is on cell node or not
        this.isOnCell = this.makeIsOn(dom.isCell);
        // isOnData: judge whether range is on data node or not
        this.isOnData = this.makeIsOn(dom.isData);
    }
    // nativeRange: get nativeRange from sc, so, ec, eo
    WrappedRange.prototype.nativeRange = function () {
        if (env.isW3CRangeSupport) {
            var w3cRange = document.createRange();
            w3cRange.setStart(this.sc, this.so);
            w3cRange.setEnd(this.ec, this.eo);
            return w3cRange;
        }
        else {
            var textRange = pointToTextRange({
                node: this.sc,
                offset: this.so
            });
            textRange.setEndPoint('EndToEnd', pointToTextRange({
                node: this.ec,
                offset: this.eo
            }));
            return textRange;
        }
    };
    WrappedRange.prototype.getPoints = function () {
        return {
            sc: this.sc,
            so: this.so,
            ec: this.ec,
            eo: this.eo
        };
    };
    WrappedRange.prototype.getStartPoint = function () {
        return {
            node: this.sc,
            offset: this.so
        };
    };
    WrappedRange.prototype.getEndPoint = function () {
        return {
            node: this.ec,
            offset: this.eo
        };
    };
    /**
     * select update visible range
     */
    WrappedRange.prototype.select = function () {
        var nativeRng = this.nativeRange();
        if (env.isW3CRangeSupport) {
            var selection = document.getSelection();
            if (selection.rangeCount > 0) {
                selection.removeAllRanges();
            }
            selection.addRange(nativeRng);
        }
        else {
            nativeRng.select();
        }
        return this;
    };
    /**
     * Moves the scrollbar to start container(sc) of current range
     *
     * @return {WrappedRange}
     */
    WrappedRange.prototype.scrollIntoView = function (container) {
        var height = $$1(container).height();
        if (container.scrollTop + height < this.sc.offsetTop) {
            container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
        }
        return this;
    };
    /**
     * @return {WrappedRange}
     */
    WrappedRange.prototype.normalize = function () {
        /**
         * @param {BoundaryPoint} point
         * @param {Boolean} isLeftToRight
         * @return {BoundaryPoint}
         */
        var getVisiblePoint = function (point, isLeftToRight) {
            if ((dom.isVisiblePoint(point) && !dom.isEdgePoint(point)) ||
                (dom.isVisiblePoint(point) && dom.isRightEdgePoint(point) && !isLeftToRight) ||
                (dom.isVisiblePoint(point) && dom.isLeftEdgePoint(point) && isLeftToRight) ||
                (dom.isVisiblePoint(point) && dom.isBlock(point.node) && dom.isEmpty(point.node))) {
                return point;
            }
            // point on block's edge
            var block = dom.ancestor(point.node, dom.isBlock);
            if (((dom.isLeftEdgePointOf(point, block) || dom.isVoid(dom.prevPoint(point).node)) && !isLeftToRight) ||
                ((dom.isRightEdgePointOf(point, block) || dom.isVoid(dom.nextPoint(point).node)) && isLeftToRight)) {
                // returns point already on visible point
                if (dom.isVisiblePoint(point)) {
                    return point;
                }
                // reverse direction
                isLeftToRight = !isLeftToRight;
            }
            var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint)
                : dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
            return nextPoint || point;
        };
        var endPoint = getVisiblePoint(this.getEndPoint(), false);
        var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);
        return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    };
    /**
     * returns matched nodes on range
     *
     * @param {Function} [pred] - predicate function
     * @param {Object} [options]
     * @param {Boolean} [options.includeAncestor]
     * @param {Boolean} [options.fullyContains]
     * @return {Node[]}
     */
    WrappedRange.prototype.nodes = function (pred, options) {
        pred = pred || func.ok;
        var includeAncestor = options && options.includeAncestor;
        var fullyContains = options && options.fullyContains;
        // TODO compare points and sort
        var startPoint = this.getStartPoint();
        var endPoint = this.getEndPoint();
        var nodes = [];
        var leftEdgeNodes = [];
        dom.walkPoint(startPoint, endPoint, function (point) {
            if (dom.isEditable(point.node)) {
                return;
            }
            var node;
            if (fullyContains) {
                if (dom.isLeftEdgePoint(point)) {
                    leftEdgeNodes.push(point.node);
                }
                if (dom.isRightEdgePoint(point) && lists.contains(leftEdgeNodes, point.node)) {
                    node = point.node;
                }
            }
            else if (includeAncestor) {
                node = dom.ancestor(point.node, pred);
            }
            else {
                node = point.node;
            }
            if (node && pred(node)) {
                nodes.push(node);
            }
        }, true);
        return lists.unique(nodes);
    };
    /**
     * returns commonAncestor of range
     * @return {Element} - commonAncestor
     */
    WrappedRange.prototype.commonAncestor = function () {
        return dom.commonAncestor(this.sc, this.ec);
    };
    /**
     * returns expanded range by pred
     *
     * @param {Function} pred - predicate function
     * @return {WrappedRange}
     */
    WrappedRange.prototype.expand = function (pred) {
        var startAncestor = dom.ancestor(this.sc, pred);
        var endAncestor = dom.ancestor(this.ec, pred);
        if (!startAncestor && !endAncestor) {
            return new WrappedRange(this.sc, this.so, this.ec, this.eo);
        }
        var boundaryPoints = this.getPoints();
        if (startAncestor) {
            boundaryPoints.sc = startAncestor;
            boundaryPoints.so = 0;
        }
        if (endAncestor) {
            boundaryPoints.ec = endAncestor;
            boundaryPoints.eo = dom.nodeLength(endAncestor);
        }
        return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
    };
    /**
     * @param {Boolean} isCollapseToStart
     * @return {WrappedRange}
     */
    WrappedRange.prototype.collapse = function (isCollapseToStart) {
        if (isCollapseToStart) {
            return new WrappedRange(this.sc, this.so, this.sc, this.so);
        }
        else {
            return new WrappedRange(this.ec, this.eo, this.ec, this.eo);
        }
    };
    /**
     * splitText on range
     */
    WrappedRange.prototype.splitText = function () {
        var isSameContainer = this.sc === this.ec;
        var boundaryPoints = this.getPoints();
        if (dom.isText(this.ec) && !dom.isEdgePoint(this.getEndPoint())) {
            this.ec.splitText(this.eo);
        }
        if (dom.isText(this.sc) && !dom.isEdgePoint(this.getStartPoint())) {
            boundaryPoints.sc = this.sc.splitText(this.so);
            boundaryPoints.so = 0;
            if (isSameContainer) {
                boundaryPoints.ec = boundaryPoints.sc;
                boundaryPoints.eo = this.eo - this.so;
            }
        }
        return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
    };
    /**
     * delete contents on range
     * @return {WrappedRange}
     */
    WrappedRange.prototype.deleteContents = function () {
        if (this.isCollapsed()) {
            return this;
        }
        var rng = this.splitText();
        var nodes = rng.nodes(null, {
            fullyContains: true
        });
        // find new cursor point
        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
            return !lists.contains(nodes, point.node);
        });
        var emptyParents = [];
        $$1.each(nodes, function (idx, node) {
            // find empty parents
            var parent = node.parentNode;
            if (point.node !== parent && dom.nodeLength(parent) === 1) {
                emptyParents.push(parent);
            }
            dom.remove(node, false);
        });
        // remove empty parents
        $$1.each(emptyParents, function (idx, node) {
            dom.remove(node, false);
        });
        return new WrappedRange(point.node, point.offset, point.node, point.offset).normalize();
    };
    /**
     * makeIsOn: return isOn(pred) function
     */
    WrappedRange.prototype.makeIsOn = function (pred) {
        return function () {
            var ancestor = dom.ancestor(this.sc, pred);
            return !!ancestor && (ancestor === dom.ancestor(this.ec, pred));
        };
    };
    /**
     * @param {Function} pred
     * @return {Boolean}
     */
    WrappedRange.prototype.isLeftEdgeOf = function (pred) {
        if (!dom.isLeftEdgePoint(this.getStartPoint())) {
            return false;
        }
        var node = dom.ancestor(this.sc, pred);
        return node && dom.isLeftEdgeOf(this.sc, node);
    };
    /**
     * returns whether range was collapsed or not
     */
    WrappedRange.prototype.isCollapsed = function () {
        return this.sc === this.ec && this.so === this.eo;
    };
    /**
     * wrap inline nodes which children of body with paragraph
     *
     * @return {WrappedRange}
     */
    WrappedRange.prototype.wrapBodyInlineWithPara = function () {
        if (dom.isBodyContainer(this.sc) && dom.isEmpty(this.sc)) {
            this.sc.innerHTML = dom.emptyPara;
            return new WrappedRange(this.sc.firstChild, 0, this.sc.firstChild, 0);
        }
        /**
         * [workaround] firefox often create range on not visible point. so normalize here.
         *  - firefox: |<p>text</p>|
         *  - chrome: <p>|text|</p>
         */
        var rng = this.normalize();
        if (dom.isParaInline(this.sc) || dom.isPara(this.sc)) {
            return rng;
        }
        // find inline top ancestor
        var topAncestor;
        if (dom.isInline(rng.sc)) {
            var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
            topAncestor = lists.last(ancestors);
            if (!dom.isInline(topAncestor)) {
                topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
            }
        }
        else {
            topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
        }
        // siblings not in paragraph
        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));
        // wrap with paragraph
        if (inlineSiblings.length) {
            var para = dom.wrap(lists.head(inlineSiblings), 'p');
            dom.appendChildNodes(para, lists.tail(inlineSiblings));
        }
        return this.normalize();
    };
    /**
     * insert node at current cursor
     *
     * @param {Node} node
     * @return {Node}
     */
    WrappedRange.prototype.insertNode = function (node) {
        var rng = this.wrapBodyInlineWithPara().deleteContents();
        var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));
        if (info.rightNode) {
            info.rightNode.parentNode.insertBefore(node, info.rightNode);
        }
        else {
            info.container.appendChild(node);
        }
        return node;
    };
    /**
     * insert html at current cursor
     */
    WrappedRange.prototype.pasteHTML = function (markup) {
        var contentsContainer = $$1('<div></div>').html(markup)[0];
        var childNodes = lists.from(contentsContainer.childNodes);
        var rng = this.wrapBodyInlineWithPara().deleteContents();
        return childNodes.reverse().map(function (childNode) {
            return rng.insertNode(childNode);
        }).reverse();
    };
    /**
     * returns text in range
     *
     * @return {String}
     */
    WrappedRange.prototype.toString = function () {
        var nativeRng = this.nativeRange();
        return env.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
    };
    /**
     * returns range for word before cursor
     *
     * @param {Boolean} [findAfter] - find after cursor, default: false
     * @return {WrappedRange}
     */
    WrappedRange.prototype.getWordRange = function (findAfter) {
        var endPoint = this.getEndPoint();
        if (!dom.isCharPoint(endPoint)) {
            return this;
        }
        var startPoint = dom.prevPointUntil(endPoint, function (point) {
            return !dom.isCharPoint(point);
        });
        if (findAfter) {
            endPoint = dom.nextPointUntil(endPoint, function (point) {
                return !dom.isCharPoint(point);
            });
        }
        return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    };
    /**
     * create offsetPath bookmark
     *
     * @param {Node} editable
     */
    WrappedRange.prototype.bookmark = function (editable) {
        return {
            s: {
                path: dom.makeOffsetPath(editable, this.sc),
                offset: this.so
            },
            e: {
                path: dom.makeOffsetPath(editable, this.ec),
                offset: this.eo
            }
        };
    };
    /**
     * create offsetPath bookmark base on paragraph
     *
     * @param {Node[]} paras
     */
    WrappedRange.prototype.paraBookmark = function (paras) {
        return {
            s: {
                path: lists.tail(dom.makeOffsetPath(lists.head(paras), this.sc)),
                offset: this.so
            },
            e: {
                path: lists.tail(dom.makeOffsetPath(lists.last(paras), this.ec)),
                offset: this.eo
            }
        };
    };
    /**
     * getClientRects
     * @return {Rect[]}
     */
    WrappedRange.prototype.getClientRects = function () {
        var nativeRng = this.nativeRange();
        return nativeRng.getClientRects();
    };
    return WrappedRange;
}());
/**
 * Data structure
 *  * BoundaryPoint: a point of dom tree
 *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
 *
 * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
 */
var range = {
    /**
     * create Range Object From arguments or Browser Selection
     *
     * @param {Node} sc - start container
     * @param {Number} so - start offset
     * @param {Node} ec - end container
     * @param {Number} eo - end offset
     * @return {WrappedRange}
     */
    create: function (sc, so, ec, eo) {
        if (arguments.length === 4) {
            return new WrappedRange(sc, so, ec, eo);
        }
        else if (arguments.length === 2) {
            ec = sc;
            eo = so;
            return new WrappedRange(sc, so, ec, eo);
        }
        else {
            var wrappedRange = this.createFromSelection();
            if (!wrappedRange && arguments.length === 1) {
                wrappedRange = this.createFromNode(arguments[0]);
                return wrappedRange.collapse(dom.emptyPara === arguments[0].innerHTML);
            }
            return wrappedRange;
        }
    },
    createFromSelection: function () {
        var sc, so, ec, eo;
        if (env.isW3CRangeSupport) {
            var selection = document.getSelection();
            if (!selection || selection.rangeCount === 0) {
                return null;
            }
            else if (dom.isBody(selection.anchorNode)) {
                // Firefox: returns entire body as range on initialization.
                // We won't never need it.
                return null;
            }
            var nativeRng = selection.getRangeAt(0);
            sc = nativeRng.startContainer;
            so = nativeRng.startOffset;
            ec = nativeRng.endContainer;
            eo = nativeRng.endOffset;
        }
        else {
            var textRange = document.selection.createRange();
            var textRangeEnd = textRange.duplicate();
            textRangeEnd.collapse(false);
            var textRangeStart = textRange;
            textRangeStart.collapse(true);
            var startPoint = textRangeToPoint(textRangeStart, true);
            var endPoint = textRangeToPoint(textRangeEnd, false);
            // same visible point case: range was collapsed.
            if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
                dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
                endPoint.node.nextSibling === startPoint.node) {
                startPoint = endPoint;
            }
            sc = startPoint.cont;
            so = startPoint.offset;
            ec = endPoint.cont;
            eo = endPoint.offset;
        }
        return new WrappedRange(sc, so, ec, eo);
    },
    /**
     * @method
     *
     * create WrappedRange from node
     *
     * @param {Node} node
     * @return {WrappedRange}
     */
    createFromNode: function (node) {
        var sc = node;
        var so = 0;
        var ec = node;
        var eo = dom.nodeLength(ec);
        // browsers can't target a picture or void node
        if (dom.isVoid(sc)) {
            so = dom.listPrev(sc).length - 1;
            sc = sc.parentNode;
        }
        if (dom.isBR(ec)) {
            eo = dom.listPrev(ec).length - 1;
            ec = ec.parentNode;
        }
        else if (dom.isVoid(ec)) {
            eo = dom.listPrev(ec).length;
            ec = ec.parentNode;
        }
        return this.create(sc, so, ec, eo);
    },
    /**
     * create WrappedRange from node after position
     *
     * @param {Node} node
     * @return {WrappedRange}
     */
    createFromNodeBefore: function (node) {
        return this.createFromNode(node).collapse(true);
    },
    /**
     * create WrappedRange from node after position
     *
     * @param {Node} node
     * @return {WrappedRange}
     */
    createFromNodeAfter: function (node) {
        return this.createFromNode(node).collapse();
    },
    /**
     * @method
     *
     * create WrappedRange from bookmark
     *
     * @param {Node} editable
     * @param {Object} bookmark
     * @return {WrappedRange}
     */
    createFromBookmark: function (editable, bookmark) {
        var sc = dom.fromOffsetPath(editable, bookmark.s.path);
        var so = bookmark.s.offset;
        var ec = dom.fromOffsetPath(editable, bookmark.e.path);
        var eo = bookmark.e.offset;
        return new WrappedRange(sc, so, ec, eo);
    },
    /**
     * @method
     *
     * create WrappedRange from paraBookmark
     *
     * @param {Object} bookmark
     * @param {Node[]} paras
     * @return {WrappedRange}
     */
    createFromParaBookmark: function (bookmark, paras) {
        var so = bookmark.s.offset;
        var eo = bookmark.e.offset;
        var sc = dom.fromOffsetPath(lists.head(paras), bookmark.s.path);
        var ec = dom.fromOffsetPath(lists.last(paras), bookmark.e.path);
        return new WrappedRange(sc, so, ec, eo);
    }
};

/**
 * @method readFileAsDataURL
 *
 * read contents of file as representing URL
 *
 * @param {File} file
 * @return {Promise} - then: dataUrl
 */
function readFileAsDataURL(file) {
    return $$1.Deferred(function (deferred) {
        $$1.extend(new FileReader(), {
            onload: function (e) {
                var dataURL = e.target.result;
                deferred.resolve(dataURL);
            },
            onerror: function (err) {
                deferred.reject(err);
            }
        }).readAsDataURL(file);
    }).promise();
}
/**
 * @method createImage
 *
 * create `<image>` from url string
 *
 * @param {String} url
 * @return {Promise} - then: $image
 */
function createImage(url) {
    return $$1.Deferred(function (deferred) {
        var $img = $$1('<img>');
        $img.one('load', function () {
            $img.off('error abort');
            deferred.resolve($img);
        }).one('error abort', function () {
            $img.off('load').detach();
            deferred.reject($img);
        }).css({
            display: 'none'
        }).appendTo(document.body).attr('src', url);
    }).promise();
}

var History = /** @class */ (function () {
    function History($editable) {
        this.stack = [];
        this.stackOffset = -1;
        this.$editable = $editable;
        this.editable = $editable[0];
    }
    History.prototype.makeSnapshot = function () {
        var rng = range.create(this.editable);
        var emptyBookmark = { s: { path: [], offset: 0 }, e: { path: [], offset: 0 } };
        return {
            contents: this.$editable.html(),
            bookmark: (rng ? rng.bookmark(this.editable) : emptyBookmark)
        };
    };
    History.prototype.applySnapshot = function (snapshot) {
        if (snapshot.contents !== null) {
            this.$editable.html(snapshot.contents);
        }
        if (snapshot.bookmark !== null) {
            range.createFromBookmark(this.editable, snapshot.bookmark).select();
        }
    };
    /**
    * @method rewind
    * Rewinds the history stack back to the first snapshot taken.
    * Leaves the stack intact, so that "Redo" can still be used.
    */
    History.prototype.rewind = function () {
        // Create snap shot if not yet recorded
        if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
            this.recordUndo();
        }
        // Return to the first available snapshot.
        this.stackOffset = 0;
        // Apply that snapshot.
        this.applySnapshot(this.stack[this.stackOffset]);
    };
    /**
    * @method reset
    * Resets the history stack completely; reverting to an empty editor.
    */
    History.prototype.reset = function () {
        // Clear the stack.
        this.stack = [];
        // Restore stackOffset to its original value.
        this.stackOffset = -1;
        // Clear the editable area.
        this.$editable.html('');
        // Record our first snapshot (of nothing).
        this.recordUndo();
    };
    /**
     * undo
     */
    History.prototype.undo = function () {
        // Create snap shot if not yet recorded
        if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
            this.recordUndo();
        }
        if (this.stackOffset > 0) {
            this.stackOffset--;
            this.applySnapshot(this.stack[this.stackOffset]);
        }
    };
    /**
     * redo
     */
    History.prototype.redo = function () {
        if (this.stack.length - 1 > this.stackOffset) {
            this.stackOffset++;
            this.applySnapshot(this.stack[this.stackOffset]);
        }
    };
    /**
     * recorded undo
     */
    History.prototype.recordUndo = function () {
        this.stackOffset++;
        // Wash out stack after stackOffset
        if (this.stack.length > this.stackOffset) {
            this.stack = this.stack.slice(0, this.stackOffset);
        }
        // Create new snapshot and push it to the end
        this.stack.push(this.makeSnapshot());
    };
    return History;
}());

var Style = /** @class */ (function () {
    function Style() {
    }
    /**
     * @method jQueryCSS
     *
     * [workaround] for old jQuery
     * passing an array of style properties to .css()
     * will result in an object of property-value pairs.
     * (compability with version < 1.9)
     *
     * @private
     * @param  {jQuery} $obj
     * @param  {Array} propertyNames - An array of one or more CSS properties.
     * @return {Object}
     */
    Style.prototype.jQueryCSS = function ($obj, propertyNames) {
        if (env.jqueryVersion < 1.9) {
            var result_1 = {};
            $$1.each(propertyNames, function (idx, propertyName) {
                result_1[propertyName] = $obj.css(propertyName);
            });
            return result_1;
        }
        return $obj.css(propertyNames);
    };
    /**
     * returns style object from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */
    Style.prototype.fromNode = function ($node) {
        var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
        var styleInfo = this.jQueryCSS($node, properties) || {};
        styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);
        return styleInfo;
    };
    /**
     * paragraph level style
     *
     * @param {WrappedRange} rng
     * @param {Object} styleInfo
     */
    Style.prototype.stylePara = function (rng, styleInfo) {
        $$1.each(rng.nodes(dom.isPara, {
            includeAncestor: true
        }), function (idx, para) {
            $$1(para).css(styleInfo);
        });
    };
    /**
     * insert and returns styleNodes on range.
     *
     * @param {WrappedRange} rng
     * @param {Object} [options] - options for styleNodes
     * @param {String} [options.nodeName] - default: `SPAN`
     * @param {Boolean} [options.expandClosestSibling] - default: `false`
     * @param {Boolean} [options.onlyPartialContains] - default: `false`
     * @return {Node[]}
     */
    Style.prototype.styleNodes = function (rng, options) {
        rng = rng.splitText();
        var nodeName = (options && options.nodeName) || 'SPAN';
        var expandClosestSibling = !!(options && options.expandClosestSibling);
        var onlyPartialContains = !!(options && options.onlyPartialContains);
        if (rng.isCollapsed()) {
            return [rng.insertNode(dom.create(nodeName))];
        }
        var pred = dom.makePredByNodeName(nodeName);
        var nodes = rng.nodes(dom.isText, {
            fullyContains: true
        }).map(function (text) {
            return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
        });
        if (expandClosestSibling) {
            if (onlyPartialContains) {
                var nodesInRange_1 = rng.nodes();
                // compose with partial contains predication
                pred = func.and(pred, function (node) {
                    return lists.contains(nodesInRange_1, node);
                });
            }
            return nodes.map(function (node) {
                var siblings = dom.withClosestSiblings(node, pred);
                var head = lists.head(siblings);
                var tails = lists.tail(siblings);
                $$1.each(tails, function (idx, elem) {
                    dom.appendChildNodes(head, elem.childNodes);
                    dom.remove(elem);
                });
                return lists.head(siblings);
            });
        }
        else {
            return nodes;
        }
    };
    /**
     * get current style on cursor
     *
     * @param {WrappedRange} rng
     * @return {Object} - object contains style properties.
     */
    Style.prototype.current = function (rng) {
        var $cont = $$1(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
        var styleInfo = this.fromNode($cont);
        // document.queryCommandState for toggle state
        // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"
        try {
            styleInfo = $$1.extend(styleInfo, {
                'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
                'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
                'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
                'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
                'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
                'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
                'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
            });
        }
        catch (e) { }
        // list-style-type to list-style(unordered, ordered)
        if (!rng.isOnList()) {
            styleInfo['list-style'] = 'none';
        }
        else {
            var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
            var isUnordered = $$1.inArray(styleInfo['list-style-type'], orderedTypes) > -1;
            styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
        }
        var para = dom.ancestor(rng.sc, dom.isPara);
        if (para && para.style['line-height']) {
            styleInfo['line-height'] = para.style.lineHeight;
        }
        else {
            var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
            styleInfo['line-height'] = lineHeight.toFixed(1);
        }
        styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
        styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
        styleInfo.range = rng;
        return styleInfo;
    };
    return Style;
}());

var Bullet = /** @class */ (function () {
    function Bullet() {
    }
    /**
     * toggle ordered list
     */
    Bullet.prototype.insertOrderedList = function (editable) {
        this.toggleList('OL', editable);
    };
    /**
     * toggle unordered list
     */
    Bullet.prototype.insertUnorderedList = function (editable) {
        this.toggleList('UL', editable);
    };
    /**
     * indent
     */
    Bullet.prototype.indent = function (editable) {
        var _this = this;
        var rng = range.create(editable).wrapBodyInlineWithPara();
        var paras = rng.nodes(dom.isPara, { includeAncestor: true });
        var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
        $$1.each(clustereds, function (idx, paras) {
            var head = lists.head(paras);
            if (dom.isLi(head)) {
                _this.wrapList(paras, head.parentNode.nodeName);
            }
            else {
                $$1.each(paras, function (idx, para) {
                    $$1(para).css('marginLeft', function (idx, val) {
                        return (parseInt(val, 10) || 0) + 25;
                    });
                });
            }
        });
        rng.select();
    };
    /**
     * outdent
     */
    Bullet.prototype.outdent = function (editable) {
        var _this = this;
        var rng = range.create(editable).wrapBodyInlineWithPara();
        var paras = rng.nodes(dom.isPara, { includeAncestor: true });
        var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
        $$1.each(clustereds, function (idx, paras) {
            var head = lists.head(paras);
            if (dom.isLi(head)) {
                _this.releaseList([paras]);
            }
            else {
                $$1.each(paras, function (idx, para) {
                    $$1(para).css('marginLeft', function (idx, val) {
                        val = (parseInt(val, 10) || 0);
                        return val > 25 ? val - 25 : '';
                    });
                });
            }
        });
        rng.select();
    };
    /**
     * toggle list
     *
     * @param {String} listName - OL or UL
     */
    Bullet.prototype.toggleList = function (listName, editable) {
        var _this = this;
        var rng = range.create(editable).wrapBodyInlineWithPara();
        var paras = rng.nodes(dom.isPara, { includeAncestor: true });
        var bookmark = rng.paraBookmark(paras);
        var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
        // paragraph to list
        if (lists.find(paras, dom.isPurePara)) {
            var wrappedParas_1 = [];
            $$1.each(clustereds, function (idx, paras) {
                wrappedParas_1 = wrappedParas_1.concat(_this.wrapList(paras, listName));
            });
            paras = wrappedParas_1;
            // list to paragraph or change list style
        }
        else {
            var diffLists = rng.nodes(dom.isList, {
                includeAncestor: true
            }).filter(function (listNode) {
                return !$$1.nodeName(listNode, listName);
            });
            if (diffLists.length) {
                $$1.each(diffLists, function (idx, listNode) {
                    dom.replace(listNode, listName);
                });
            }
            else {
                paras = this.releaseList(clustereds, true);
            }
        }
        range.createFromParaBookmark(bookmark, paras).select();
    };
    /**
     * @param {Node[]} paras
     * @param {String} listName
     * @return {Node[]}
     */
    Bullet.prototype.wrapList = function (paras, listName) {
        var head = lists.head(paras);
        var last = lists.last(paras);
        var prevList = dom.isList(head.previousSibling) && head.previousSibling;
        var nextList = dom.isList(last.nextSibling) && last.nextSibling;
        var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);
        // P to LI
        paras = paras.map(function (para) {
            return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
        });
        // append to list(<ul>, <ol>)
        dom.appendChildNodes(listNode, paras);
        if (nextList) {
            dom.appendChildNodes(listNode, lists.from(nextList.childNodes));
            dom.remove(nextList);
        }
        return paras;
    };
    /**
     * @method releaseList
     *
     * @param {Array[]} clustereds
     * @param {Boolean} isEscapseToBody
     * @return {Node[]}
     */
    Bullet.prototype.releaseList = function (clustereds, isEscapseToBody) {
        var releasedParas = [];
        $$1.each(clustereds, function (idx, paras) {
            var head = lists.head(paras);
            var last = lists.last(paras);
            var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) : head.parentNode;
            var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
                node: last.parentNode,
                offset: dom.position(last) + 1
            }, {
                isSkipPaddingBlankHTML: true
            }) : null;
            var middleList = dom.splitTree(headList, {
                node: head.parentNode,
                offset: dom.position(head)
            }, {
                isSkipPaddingBlankHTML: true
            });
            paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi)
                : lists.from(middleList.childNodes).filter(dom.isLi);
            // LI to P
            if (isEscapseToBody || !dom.isList(headList.parentNode)) {
                paras = paras.map(function (para) {
                    return dom.replace(para, 'P');
                });
            }
            $$1.each(lists.from(paras).reverse(), function (idx, para) {
                dom.insertAfter(para, headList);
            });
            // remove empty lists
            var rootLists = lists.compact([headList, middleList, lastList]);
            $$1.each(rootLists, function (idx, rootList) {
                var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
                $$1.each(listNodes.reverse(), function (idx, listNode) {
                    if (!dom.nodeLength(listNode)) {
                        dom.remove(listNode, true);
                    }
                });
            });
            releasedParas = releasedParas.concat(paras);
        });
        return releasedParas;
    };
    return Bullet;
}());

/**
 * @class editing.Typing
 *
 * Typing
 *
 */
var Typing = /** @class */ (function () {
    function Typing() {
        // a Bullet instance to toggle lists off
        this.bullet = new Bullet();
    }
    /**
     * insert tab
     *
     * @param {WrappedRange} rng
     * @param {Number} tabsize
     */
    Typing.prototype.insertTab = function (rng, tabsize) {
        var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
        rng = rng.deleteContents();
        rng.insertNode(tab, true);
        rng = range.create(tab, tabsize);
        rng.select();
    };
    /**
     * insert paragraph
     */
    Typing.prototype.insertParagraph = function (editable) {
        var rng = range.create(editable);
        // deleteContents on range.
        rng = rng.deleteContents();
        // Wrap range if it needs to be wrapped by paragraph
        rng = rng.wrapBodyInlineWithPara();
        // finding paragraph
        var splitRoot = dom.ancestor(rng.sc, dom.isPara);
        var nextPara;
        // on paragraph: split paragraph
        if (splitRoot) {
            // if it is an empty line with li
            if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {
                // toogle UL/OL and escape
                this.bullet.toggleList(splitRoot.parentNode.nodeName);
                return;
                // if it is an empty line with para on blockquote
            }
            else if (dom.isEmpty(splitRoot) && dom.isPara(splitRoot) && dom.isBlockquote(splitRoot.parentNode)) {
                // escape blockquote
                dom.insertAfter(splitRoot, splitRoot.parentNode);
                nextPara = splitRoot;
                // if new line has content (not a line break)
            }
            else {
                nextPara = dom.splitTree(splitRoot, rng.getStartPoint());
                var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
                emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));
                $$1.each(emptyAnchors, function (idx, anchor) {
                    dom.remove(anchor);
                });
                // replace empty heading, pre or custom-made styleTag with P tag
                if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
                    nextPara = dom.replace(nextPara, 'p');
                }
            }
            // no paragraph: insert empty paragraph
        }
        else {
            var next = rng.sc.childNodes[rng.so];
            nextPara = $$1(dom.emptyPara)[0];
            if (next) {
                rng.sc.insertBefore(nextPara, next);
            }
            else {
                rng.sc.appendChild(nextPara);
            }
        }
        range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
    };
    return Typing;
}());

/**
 * @class Create a virtual table to create what actions to do in change.
 * @param {object} startPoint Cell selected to apply change.
 * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
 * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
 * @param {object} domTable Dom element of table to make changes.
 */
var TableResultAction = function (startPoint, where, action, domTable) {
    var _startPoint = { 'colPos': 0, 'rowPos': 0 };
    var _virtualTable = [];
    var _actionCellList = [];
    /// ///////////////////////////////////////////
    // Private functions
    /// ///////////////////////////////////////////
    /**
     * Set the startPoint of action.
     */
    function setStartPoint() {
        if (!startPoint || !startPoint.tagName || (startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th')) {
            console.error('Impossible to identify start Cell point.', startPoint);
            return;
        }
        _startPoint.colPos = startPoint.cellIndex;
        if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
            console.error('Impossible to identify start Row point.', startPoint);
            return;
        }
        _startPoint.rowPos = startPoint.parentElement.rowIndex;
    }
    /**
     * Define virtual table position info object.
     *
     * @param {int} rowIndex Index position in line of virtual table.
     * @param {int} cellIndex Index position in column of virtual table.
     * @param {object} baseRow Row affected by this position.
     * @param {object} baseCell Cell affected by this position.
     * @param {bool} isSpan Inform if it is an span cell/row.
     */
    function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
        var objPosition = {
            'baseRow': baseRow,
            'baseCell': baseCell,
            'isRowSpan': isRowSpan,
            'isColSpan': isColSpan,
            'isVirtual': isVirtualCell
        };
        if (!_virtualTable[rowIndex]) {
            _virtualTable[rowIndex] = [];
        }
        _virtualTable[rowIndex][cellIndex] = objPosition;
    }
    /**
     * Create action cell object.
     *
     * @param {object} virtualTableCellObj Object of specific position on virtual table.
     * @param {enum} resultAction Action to be applied in that item.
     */
    function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
        return {
            'baseCell': virtualTableCellObj.baseCell,
            'action': resultAction,
            'virtualTable': {
                'rowIndex': virtualRowPosition,
                'cellIndex': virtualColPosition
            }
        };
    }
    /**
     * Recover free index of row to append Cell.
     *
     * @param {int} rowIndex Index of row to find free space.
     * @param {int} cellIndex Index of cell to find free space in table.
     */
    function recoverCellIndex(rowIndex, cellIndex) {
        if (!_virtualTable[rowIndex]) {
            return cellIndex;
        }
        if (!_virtualTable[rowIndex][cellIndex]) {
            return cellIndex;
        }
        var newCellIndex = cellIndex;
        while (_virtualTable[rowIndex][newCellIndex]) {
            newCellIndex++;
            if (!_virtualTable[rowIndex][newCellIndex]) {
                return newCellIndex;
            }
        }
    }
    /**
     * Recover info about row and cell and add information to virtual table.
     *
     * @param {object} row Row to recover information.
     * @param {object} cell Cell to recover information.
     */
    function addCellInfoToVirtual(row, cell) {
        var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
        var cellHasColspan = (cell.colSpan > 1);
        var cellHasRowspan = (cell.rowSpan > 1);
        var isThisSelectedCell = (row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos);
        setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false);
        // Add span rows to virtual Table.
        var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;
        if (rowspanNumber > 1) {
            for (var rp = 1; rp < rowspanNumber; rp++) {
                var rowspanIndex = row.rowIndex + rp;
                adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
                setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
            }
        }
        // Add span cols to virtual table.
        var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;
        if (colspanNumber > 1) {
            for (var cp = 1; cp < colspanNumber; cp++) {
                var cellspanIndex = recoverCellIndex(row.rowIndex, (cellIndex + cp));
                adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
                setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
            }
        }
    }
    /**
     * Process validation and adjust of start point if needed
     *
     * @param {int} rowIndex
     * @param {int} cellIndex
     * @param {object} cell
     * @param {bool} isSelectedCell
     */
    function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
        if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
            _startPoint.colPos++;
        }
    }
    /**
     * Create virtual table of cells with all cells, including span cells.
     */
    function createVirtualTable() {
        var rows = domTable.rows;
        for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            var cells = rows[rowIndex].cells;
            for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
                addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
            }
        }
    }
    /**
     * Get action to be applied on the cell.
     *
     * @param {object} cell virtual table cell to apply action
     */
    function getDeleteResultActionToCell(cell) {
        switch (where) {
            case TableResultAction.where.Column:
                if (cell.isColSpan) {
                    return TableResultAction.resultAction.SubtractSpanCount;
                }
                break;
            case TableResultAction.where.Row:
                if (!cell.isVirtual && cell.isRowSpan) {
                    return TableResultAction.resultAction.AddCell;
                }
                else if (cell.isRowSpan) {
                    return TableResultAction.resultAction.SubtractSpanCount;
                }
                break;
        }
        return TableResultAction.resultAction.RemoveCell;
    }
    /**
     * Get action to be applied on the cell.
     *
     * @param {object} cell virtual table cell to apply action
     */
    function getAddResultActionToCell(cell) {
        switch (where) {
            case TableResultAction.where.Column:
                if (cell.isColSpan) {
                    return TableResultAction.resultAction.SumSpanCount;
                }
                else if (cell.isRowSpan && cell.isVirtual) {
                    return TableResultAction.resultAction.Ignore;
                }
                break;
            case TableResultAction.where.Row:
                if (cell.isRowSpan) {
                    return TableResultAction.resultAction.SumSpanCount;
                }
                else if (cell.isColSpan && cell.isVirtual) {
                    return TableResultAction.resultAction.Ignore;
                }
                break;
        }
        return TableResultAction.resultAction.AddCell;
    }
    function init() {
        setStartPoint();
        createVirtualTable();
    }
    /// ///////////////////////////////////////////
    // Public functions
    /// ///////////////////////////////////////////
    /**
     * Recover array os what to do in table.
     */
    this.getActionList = function () {
        var fixedRow = (where === TableResultAction.where.Row) ? _startPoint.rowPos : -1;
        var fixedCol = (where === TableResultAction.where.Column) ? _startPoint.colPos : -1;
        var actualPosition = 0;
        var canContinue = true;
        while (canContinue) {
            var rowPosition = (fixedRow >= 0) ? fixedRow : actualPosition;
            var colPosition = (fixedCol >= 0) ? fixedCol : actualPosition;
            var row = _virtualTable[rowPosition];
            if (!row) {
                canContinue = false;
                return _actionCellList;
            }
            var cell = row[colPosition];
            if (!cell) {
                canContinue = false;
                return _actionCellList;
            }
            // Define action to be applied in this cell
            var resultAction = TableResultAction.resultAction.Ignore;
            switch (action) {
                case TableResultAction.requestAction.Add:
                    resultAction = getAddResultActionToCell(cell);
                    break;
                case TableResultAction.requestAction.Delete:
                    resultAction = getDeleteResultActionToCell(cell);
                    break;
            }
            _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));
            actualPosition++;
        }
        return _actionCellList;
    };
    init();
};
/**
*
* Where action occours enum.
*/
TableResultAction.where = { 'Row': 0, 'Column': 1 };
/**
*
* Requested action to apply enum.
*/
TableResultAction.requestAction = { 'Add': 0, 'Delete': 1 };
/**
*
* Result action to be executed enum.
*/
TableResultAction.resultAction = { 'Ignore': 0, 'SubtractSpanCount': 1, 'RemoveCell': 2, 'AddCell': 3, 'SumSpanCount': 4 };
/**
 *
 * @class editing.Table
 *
 * Table
 *
 */
var Table = /** @class */ (function () {
    function Table() {
    }
    /**
     * handle tab key
     *
     * @param {WrappedRange} rng
     * @param {Boolean} isShift
     */
    Table.prototype.tab = function (rng, isShift) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var table = dom.ancestor(cell, dom.isTable);
        var cells = dom.listDescendant(table, dom.isCell);
        var nextCell = lists[isShift ? 'prev' : 'next'](cells, cell);
        if (nextCell) {
            range.create(nextCell, 0).select();
        }
    };
    /**
     * Add a new row
     *
     * @param {WrappedRange} rng
     * @param {String} position (top/bottom)
     * @return {Node}
     */
    Table.prototype.addRow = function (rng, position) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var currentTr = $$1(cell).closest('tr');
        var trAttributes = this.recoverAttributes(currentTr);
        var html = $$1('<tr' + trAttributes + '></tr>');
        var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Add, $$1(currentTr).closest('table')[0]);
        var actions = vTable.getActionList();
        for (var idCell = 0; idCell < actions.length; idCell++) {
            var currentCell = actions[idCell];
            var tdAttributes = this.recoverAttributes(currentCell.baseCell);
            switch (currentCell.action) {
                case TableResultAction.resultAction.AddCell:
                    html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    break;
                case TableResultAction.resultAction.SumSpanCount:
                    if (position === 'top') {
                        var baseCellTr = currentCell.baseCell.parent;
                        var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;
                        if (isTopFromRowSpan) {
                            var newTd = $$1('<div></div>').append($$1('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                            html.append(newTd);
                            break;
                        }
                    }
                    var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
                    rowspanNumber++;
                    currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
                    break;
            }
        }
        if (position === 'top') {
            currentTr.before(html);
        }
        else {
            var cellHasRowspan = (cell.rowSpan > 1);
            if (cellHasRowspan) {
                var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
                $$1($$1(currentTr).parent().find('tr')[lastTrIndex]).after($$1(html));
                return;
            }
            currentTr.after(html);
        }
    };
    /**
     * Add a new col
     *
     * @param {WrappedRange} rng
     * @param {String} position (left/right)
     * @return {Node}
     */
    Table.prototype.addCol = function (rng, position) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var row = $$1(cell).closest('tr');
        var rowsGroup = $$1(row).siblings();
        rowsGroup.push(row);
        var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Add, $$1(row).closest('table')[0]);
        var actions = vTable.getActionList();
        for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
            var currentCell = actions[actionIndex];
            var tdAttributes = this.recoverAttributes(currentCell.baseCell);
            switch (currentCell.action) {
                case TableResultAction.resultAction.AddCell:
                    if (position === 'right') {
                        $$1(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    }
                    else {
                        $$1(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    }
                    break;
                case TableResultAction.resultAction.SumSpanCount:
                    if (position === 'right') {
                        var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
                        colspanNumber++;
                        currentCell.baseCell.setAttribute('colSpan', colspanNumber);
                    }
                    else {
                        $$1(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    }
                    break;
            }
        }
    };
    /*
    * Copy attributes from element.
    *
    * @param {object} Element to recover attributes.
    * @return {string} Copied string elements.
    */
    Table.prototype.recoverAttributes = function (el) {
        var resultStr = '';
        if (!el) {
            return resultStr;
        }
        var attrList = el.attributes || [];
        for (var i = 0; i < attrList.length; i++) {
            if (attrList[i].name.toLowerCase() === 'id') {
                continue;
            }
            if (attrList[i].specified) {
                resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
            }
        }
        return resultStr;
    };
    /**
     * Delete current row
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    Table.prototype.deleteRow = function (rng) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var row = $$1(cell).closest('tr');
        var cellPos = row.children('td, th').index($$1(cell));
        var rowPos = row[0].rowIndex;
        var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Delete, $$1(row).closest('table')[0]);
        var actions = vTable.getActionList();
        for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
            if (!actions[actionIndex]) {
                continue;
            }
            var baseCell = actions[actionIndex].baseCell;
            var virtualPosition = actions[actionIndex].virtualTable;
            var hasRowspan = (baseCell.rowSpan && baseCell.rowSpan > 1);
            var rowspanNumber = (hasRowspan) ? parseInt(baseCell.rowSpan, 10) : 0;
            switch (actions[actionIndex].action) {
                case TableResultAction.resultAction.Ignore:
                    continue;
                case TableResultAction.resultAction.AddCell:
                    var nextRow = row.next('tr')[0];
                    if (!nextRow) {
                        continue;
                    }
                    var cloneRow = row[0].cells[cellPos];
                    if (hasRowspan) {
                        if (rowspanNumber > 2) {
                            rowspanNumber--;
                            nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                            nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                            nextRow.cells[cellPos].innerHTML = '';
                        }
                        else if (rowspanNumber === 2) {
                            nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                            nextRow.cells[cellPos].removeAttribute('rowSpan');
                            nextRow.cells[cellPos].innerHTML = '';
                        }
                    }
                    continue;
                case TableResultAction.resultAction.SubtractSpanCount:
                    if (hasRowspan) {
                        if (rowspanNumber > 2) {
                            rowspanNumber--;
                            baseCell.setAttribute('rowSpan', rowspanNumber);
                            if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                                baseCell.innerHTML = '';
                            }
                        }
                        else if (rowspanNumber === 2) {
                            baseCell.removeAttribute('rowSpan');
                            if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                                baseCell.innerHTML = '';
                            }
                        }
                    }
                    continue;
                case TableResultAction.resultAction.RemoveCell:
                    // Do not need remove cell because row will be deleted.
                    continue;
            }
        }
        row.remove();
    };
    /**
     * Delete current col
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    Table.prototype.deleteCol = function (rng) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        var row = $$1(cell).closest('tr');
        var cellPos = row.children('td, th').index($$1(cell));
        var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Delete, $$1(row).closest('table')[0]);
        var actions = vTable.getActionList();
        for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
            if (!actions[actionIndex]) {
                continue;
            }
            switch (actions[actionIndex].action) {
                case TableResultAction.resultAction.Ignore:
                    continue;
                case TableResultAction.resultAction.SubtractSpanCount:
                    var baseCell = actions[actionIndex].baseCell;
                    var hasColspan = (baseCell.colSpan && baseCell.colSpan > 1);
                    if (hasColspan) {
                        var colspanNumber = (baseCell.colSpan) ? parseInt(baseCell.colSpan, 10) : 0;
                        if (colspanNumber > 2) {
                            colspanNumber--;
                            baseCell.setAttribute('colSpan', colspanNumber);
                            if (baseCell.cellIndex === cellPos) {
                                baseCell.innerHTML = '';
                            }
                        }
                        else if (colspanNumber === 2) {
                            baseCell.removeAttribute('colSpan');
                            if (baseCell.cellIndex === cellPos) {
                                baseCell.innerHTML = '';
                            }
                        }
                    }
                    continue;
                case TableResultAction.resultAction.RemoveCell:
                    dom.remove(actions[actionIndex].baseCell, true);
                    continue;
            }
        }
    };
    /**
     * create empty table element
     *
     * @param {Number} rowCount
     * @param {Number} colCount
     * @return {Node}
     */
    Table.prototype.createTable = function (colCount, rowCount, options) {
        var tds = [];
        var tdHTML;
        for (var idxCol = 0; idxCol < colCount; idxCol++) {
            tds.push('<td>' + dom.blank + '</td>');
        }
        tdHTML = tds.join('');
        var trs = [];
        var trHTML;
        for (var idxRow = 0; idxRow < rowCount; idxRow++) {
            trs.push('<tr>' + tdHTML + '</tr>');
        }
        trHTML = trs.join('');
        var $table = $$1('<table>' + trHTML + '</table>');
        if (options && options.tableClassName) {
            $table.addClass(options.tableClassName);
        }
        return $table[0];
    };
    /**
     * Delete current table
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    Table.prototype.deleteTable = function (rng) {
        var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
        $$1(cell).closest('table').remove();
    };
    return Table;
}());

var KEY_BOGUS = 'bogus';
/**
 * @class Editor
 */
var Editor = /** @class */ (function () {
    function Editor(context) {
        var _this = this;
        this.context = context;
        this.$note = context.layoutInfo.note;
        this.$editor = context.layoutInfo.editor;
        this.$editable = context.layoutInfo.editable;
        this.options = context.options;
        this.lang = this.options.langInfo;
        this.editable = this.$editable[0];
        this.lastRange = null;
        this.style = new Style();
        this.table = new Table();
        this.typing = new Typing();
        this.bullet = new Bullet();
        this.history = new History(this.$editable);
        this.context.memo('help.undo', this.lang.help.undo);
        this.context.memo('help.redo', this.lang.help.redo);
        this.context.memo('help.tab', this.lang.help.tab);
        this.context.memo('help.untab', this.lang.help.untab);
        this.context.memo('help.insertParagraph', this.lang.help.insertParagraph);
        this.context.memo('help.insertOrderedList', this.lang.help.insertOrderedList);
        this.context.memo('help.insertUnorderedList', this.lang.help.insertUnorderedList);
        this.context.memo('help.indent', this.lang.help.indent);
        this.context.memo('help.outdent', this.lang.help.outdent);
        this.context.memo('help.formatPara', this.lang.help.formatPara);
        this.context.memo('help.insertHorizontalRule', this.lang.help.insertHorizontalRule);
        this.context.memo('help.fontName', this.lang.help.fontName);
        // native commands(with execCommand), generate function for execCommand
        var commands = [
            'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
            'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
            'formatBlock', 'removeFormat', 'backColor'
        ];
        for (var idx = 0, len = commands.length; idx < len; idx++) {
            this[commands[idx]] = (function (sCmd) {
                return function (value) {
                    _this.beforeCommand();
                    document.execCommand(sCmd, false, value);
                    _this.afterCommand(true);
                };
            })(commands[idx]);
            this.context.memo('help.' + commands[idx], this.lang.help[commands[idx]]);
        }
        this.fontName = this.wrapCommand(function (value) {
            return _this.fontStyling('font-family', "\'" + value + "\'");
        });
        this.fontSize = this.wrapCommand(function (value) {
            return _this.fontStyling('font-size', value + 'px');
        });
        for (var idx = 1; idx <= 6; idx++) {
            this['formatH' + idx] = (function (idx) {
                return function () {
                    _this.formatBlock('H' + idx);
                };
            })(idx);
            this.context.memo('help.formatH' + idx, this.lang.help['formatH' + idx]);
        }
        
        this.insertParagraph = this.wrapCommand(function () {
            _this.typing.insertParagraph(_this.editable);
        });
        this.insertOrderedList = this.wrapCommand(function () {
            _this.bullet.insertOrderedList(_this.editable);
        });
        this.insertUnorderedList = this.wrapCommand(function () {
            _this.bullet.insertUnorderedList(_this.editable);
        });
        this.indent = this.wrapCommand(function () {
            _this.bullet.indent(_this.editable);
        });
        this.outdent = this.wrapCommand(function () {
            _this.bullet.outdent(_this.editable);
        });
        /**
         * insertNode
         * insert node
         * @param {Node} node
         */
        this.insertNode = this.wrapCommand(function (node) {
            if (_this.isLimited($$1(node).text().length)) {
                return;
            }
            var rng = _this.createRange();
            rng.insertNode(node);
            range.createFromNodeAfter(node).select();
        });
        /**
         * insert text
         * @param {String} text
         */
        this.insertText = this.wrapCommand(function (text) {
            if (_this.isLimited(text.length)) {
                return;
            }
            var rng = _this.createRange();
            var textNode = rng.insertNode(dom.createText(text));
            range.create(textNode, dom.nodeLength(textNode)).select();
        });
        /**
         * paste HTML
         * @param {String} markup
         */
        this.pasteHTML = this.wrapCommand(function (markup) {
            if (_this.isLimited(markup.length)) {
                return;
            }
            var contents = _this.createRange().pasteHTML(markup);
            range.createFromNodeAfter(lists.last(contents)).select();
        });
        /**
         * formatBlock
         *
         * @param {String} tagName
         */
        this.formatBlock = this.wrapCommand(function (tagName, $target) {
            var onApplyCustomStyle = _this.options.callbacks.onApplyCustomStyle;
            if (onApplyCustomStyle) {
                onApplyCustomStyle.call(_this, $target, _this.context, _this.onFormatBlock);
            }
            else {
                _this.onFormatBlock(tagName, $target);
            }
        });
        /**
         * insert horizontal rule
         */
        this.insertHorizontalRule = this.wrapCommand(function () {
            var hrNode = _this.createRange().insertNode(dom.create('HR'));
            if (hrNode.nextSibling) {
                range.create(hrNode.nextSibling, 0).normalize().select();
            }
        });
        /**
         * lineHeight
         * @param {String} value
         */
        this.lineHeight = this.wrapCommand(function (value) {
            _this.style.stylePara(_this.createRange(), {
                lineHeight: value
            });
        });
        /**
         * create link (command)
         *
         * @param {Object} linkInfo
         */
        this.createLink = this.wrapCommand(function (linkInfo) {
            var linkUrl = linkInfo.url;
            var linkText = linkInfo.text;
            var isNewWindow = linkInfo.isNewWindow;
            var rng = linkInfo.range || _this.createRange();
            var isTextChanged = rng.toString() !== linkText;
            // handle spaced urls from input
            if (typeof linkUrl === 'string') {
                linkUrl = linkUrl.trim();
            }
            if (_this.options.onCreateLink) {
                linkUrl = _this.options.onCreateLink(linkUrl);
            }
            else {
                // if url doesn't match an URL schema, set http:// as default
                linkUrl = /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(linkUrl)
                    ? linkUrl : 'http://' + linkUrl;
            }
            var anchors = [];
            if (isTextChanged) {
                rng = rng.deleteContents();
                var anchor = rng.insertNode($$1('<A>' + linkText + '</A>')[0]);
                anchors.push(anchor);
            }
            else {
                anchors = _this.style.styleNodes(rng, {
                    nodeName: 'A',
                    expandClosestSibling: true,
                    onlyPartialContains: true
                });
            }
            $$1.each(anchors, function (idx, anchor) {
                $$1(anchor).attr('href', linkUrl);
                if (isNewWindow) {
                    $$1(anchor).attr('target', '_blank');
                }
                else {
                    $$1(anchor).removeAttr('target');
                }
            });
            var startRange = range.createFromNodeBefore(lists.head(anchors));
            var startPoint = startRange.getStartPoint();
            var endRange = range.createFromNodeAfter(lists.last(anchors));
            var endPoint = endRange.getEndPoint();
            range.create(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset).select();
        });
        /**
         * setting color
         *
         * @param {Object} sObjColor  color code
         * @param {String} sObjColor.foreColor foreground color
         * @param {String} sObjColor.backColor background color
         */
        this.color = this.wrapCommand(function (colorInfo) {
            var foreColor = colorInfo.foreColor;
            var backColor = colorInfo.backColor;
            if (foreColor) {
                document.execCommand('foreColor', false, foreColor);
            }
            if (backColor) {
                document.execCommand('backColor', false, backColor);
            }
        });
        /**
         * Set foreground color
         *
         * @param {String} colorCode foreground color code
         */
        this.foreColor = this.wrapCommand(function (colorInfo) {
            document.execCommand('styleWithCSS', false, true);
            document.execCommand('foreColor', false, colorInfo);
        });
        /**
         * insert Table
         *
         * @param {String} dimension of table (ex : "5x5")
         */
        this.insertTable = this.wrapCommand(function (dim) {
            var dimension = dim.split('x');
            var rng = _this.createRange().deleteContents();
            rng.insertNode(_this.table.createTable(dimension[0], dimension[1], _this.options));
        });
        /**
         * remove media object and Figure Elements if media object is img with Figure.
         */
        this.removeMedia = this.wrapCommand(function () {
            var $target = $$1(_this.restoreTarget()).parent();
            if ($target.parent('figure').length) {
                $target.parent('figure').remove();
            }
            else {
                $target = $$1(_this.restoreTarget()).detach();
            }
            _this.context.triggerEvent('media.delete', $target, _this.$editable);
        });
        /**
         * float me
         *
         * @param {String} value
         */
        this.floatMe = this.wrapCommand(function (value) {
            var $target = $$1(_this.restoreTarget());
            $target.toggleClass('note-float-left', value === 'left');
            $target.toggleClass('note-float-right', value === 'right');
            $target.css('float', value);
        });
        /**
         * resize overlay element
         * @param {String} value
         */
        this.resize = this.wrapCommand(function (value) {
            var $target = $$1(_this.restoreTarget());
            $target.css({
                width: value * 100 + '%',
                height: ''
            });
        });
    }
    Editor.prototype.initialize = function () {
        var _this = this;
        // bind custom events
        this.$editable.on('keydown', function (event) {
            if (event.keyCode === key.code.ENTER) {
                _this.context.triggerEvent('enter', event);
            }
            _this.context.triggerEvent('keydown', event);
            if (!event.isDefaultPrevented()) {
                if (_this.options.shortcuts) {
                    _this.handleKeyMap(event);
                }
                else {
                    _this.preventDefaultEditableShortCuts(event);
                }
            }
            if (_this.isLimited(1, event)) {
                return false;
            }
        }).on('keyup', function (event) {
            _this.context.triggerEvent('keyup', event);
        }).on('focus', function (event) {
            _this.context.triggerEvent('focus', event);
        }).on('blur', function (event) {
            _this.context.triggerEvent('blur', event);
        }).on('mousedown', function (event) {
            _this.context.triggerEvent('mousedown', event);
        }).on('mouseup', function (event) {
            _this.context.triggerEvent('mouseup', event);
        }).on('scroll', function (event) {
            _this.context.triggerEvent('scroll', event);
        }).on('paste', function (event) {
            _this.context.triggerEvent('paste', event);
        });
        // init content before set event
        this.$editable.html(dom.html(this.$note) || dom.emptyPara);
        this.$editable.on(env.inputEventName, func.debounce(function () {
            _this.context.triggerEvent('change', _this.$editable.html());
        }, 100));
        this.$editor.on('focusin', function (event) {
            _this.context.triggerEvent('focusin', event);
        }).on('focusout', function (event) {
            _this.context.triggerEvent('focusout', event);
        });
        if (!this.options.airMode) {
            if (this.options.width) {
                this.$editor.outerWidth(this.options.width);
            }
            if (this.options.height) {
                this.$editable.outerHeight(this.options.height);
            }
            if (this.options.maxHeight) {
                this.$editable.css('max-height', this.options.maxHeight);
            }
            if (this.options.minHeight) {
                this.$editable.css('min-height', this.options.minHeight);
            }
        }
        this.history.recordUndo();
    };
    Editor.prototype.destroy = function () {
        this.$editable.off();
    };
    Editor.prototype.handleKeyMap = function (event) {
        var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
        var keys = [];
        if (event.metaKey) {
            keys.push('CMD');
        }
        if (event.ctrlKey && !event.altKey) {
            keys.push('CTRL');
        }
        if (event.shiftKey) {
            keys.push('SHIFT');
        }
        var keyName = key.nameFromCode[event.keyCode];
        if (keyName) {
            keys.push(keyName);
        }
        var eventName = keyMap[keys.join('+')];
        if (eventName) {
            if (this.context.invoke(eventName) !== false) {
                event.preventDefault();
            }
        }
        else if (key.isEdit(event.keyCode)) {
            this.afterCommand();
        }
    };
    Editor.prototype.preventDefaultEditableShortCuts = function (event) {
        // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
        if ((event.ctrlKey || event.metaKey) &&
            lists.contains([66, 73, 85], event.keyCode)) {
            event.preventDefault();
        }
    };
    Editor.prototype.isLimited = function (pad, event) {
        pad = pad || 0;
        if (typeof event !== 'undefined') {
            if (key.isMove(event.keyCode) ||
                (event.ctrlKey || event.metaKey) ||
                lists.contains([key.code.BACKSPACE, key.code.DELETE], event.keyCode)) {
                return false;
            }
        }
        if (this.options.maxTextLength > 0) {
            if ((this.$editable.text().length + pad) >= this.options.maxTextLength) {
                return true;
            }
        }
        return false;
    };
    /**
     * create range
     * @return {WrappedRange}
     */
    Editor.prototype.createRange = function () {
        this.focus();
        return range.create(this.editable);
    };
    /**
     * saveRange
     *
     * save current range
     *
     * @param {Boolean} [thenCollapse=false]
     */
    Editor.prototype.saveRange = function (thenCollapse) {
        this.lastRange = this.createRange();
        if (thenCollapse) {
            this.lastRange.collapse().select();
        }
    };
    /**
     * restoreRange
     *
     * restore lately range
     */
    Editor.prototype.restoreRange = function () {
        if (this.lastRange) {
            this.lastRange.select();
            this.focus();
        }
    };
    Editor.prototype.saveTarget = function (node) {
        this.$editable.data('target', node);
    };
    Editor.prototype.clearTarget = function () {
        this.$editable.removeData('target');
    };
    Editor.prototype.restoreTarget = function () {
        return this.$editable.data('target');
    };
    /**
     * currentStyle
     *
     * current style
     * @return {Object|Boolean} unfocus
     */
    Editor.prototype.currentStyle = function () {
        var rng = range.create();
        if (rng) {
            rng = rng.normalize();
        }
        return rng ? this.style.current(rng) : this.style.fromNode(this.$editable);
    };
    /**
     * style from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */
    Editor.prototype.styleFromNode = function ($node) {
        return this.style.fromNode($node);
    };
    /**
     * undo
     */
    Editor.prototype.undo = function () {
        this.context.triggerEvent('before.command', this.$editable.html());
        this.history.undo();
        this.context.triggerEvent('change', this.$editable.html());
    };
    /**
     * redo
     */
    Editor.prototype.redo = function () {
        this.context.triggerEvent('before.command', this.$editable.html());
        this.history.redo();
        this.context.triggerEvent('change', this.$editable.html());
    };
    /**
     * before command
     */
    Editor.prototype.beforeCommand = function () {
        this.context.triggerEvent('before.command', this.$editable.html());
        // keep focus on editable before command execution
        this.focus();
    };
    /**
     * after command
     * @param {Boolean} isPreventTrigger
     */
    Editor.prototype.afterCommand = function (isPreventTrigger) {
        this.history.recordUndo();
        if (!isPreventTrigger) {
            this.context.triggerEvent('change', this.$editable.html());
        }
    };
    /**
     * handle tab key
     */
    Editor.prototype.tab = function () {
        var rng = this.createRange();
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.table.tab(rng);
        }
        else {
            if (this.options.tabSize === 0) {
                return false;
            }
            if (!this.isLimited(this.options.tabSize)) {
                this.beforeCommand();
                this.typing.insertTab(rng, this.options.tabSize);
                this.afterCommand();
            }
        }
    };
    /**
     * handle shift+tab key
     */
    Editor.prototype.untab = function () {
        var rng = this.createRange();
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.table.tab(rng, true);
        }
        else {
            if (this.options.tabSize === 0) {
                return false;
            }
        }
    };
    /**
     * run given function between beforeCommand and afterCommand
     */
    Editor.prototype.wrapCommand = function (fn) {
        var _this = this;
        return function () {
            _this.beforeCommand();
            fn.apply(_this, arguments);
            _this.afterCommand();
        };
    };
    /**
     * insert image
     *
     * @param {String} src
     * @param {String|Function} param
     * @return {Promise}
     */
    Editor.prototype.insertImage = function (src, param) {
        var _this = this;
        return createImage(src, param).then(function ($image) {
            _this.beforeCommand();
            if (typeof param === 'function') {
                param($image);
            }
            else {
                if (typeof param === 'string') {
                    $image.attr('data-filename', param);
                }
                $image.css('width', Math.min(_this.$editable.width(), $image.width()));
            }
            $image.show();
            range.create(_this.editable).insertNode($image[0]);
            range.createFromNodeAfter($image[0]).select();
            _this.afterCommand();
        }).fail(function (e) {
            _this.context.triggerEvent('image.upload.error', e);
        });
    };
    /**
     * insertImages
     * @param {File[]} files
     */
    Editor.prototype.insertImages = function (files) {
        var _this = this;
        $$1.each(files, function (idx, file) {
            var filename = file.name;
            if (_this.options.maximumImageFileSize && _this.options.maximumImageFileSize < file.size) {
                _this.context.triggerEvent('image.upload.error', _this.lang.image.maximumFileSizeError);
            }
            else {
                readFileAsDataURL(file).then(function (dataURL) {
                    return _this.insertImage(dataURL, filename);
                }).fail(function () {
                    _this.context.triggerEvent('image.upload.error');
                });
            }
        });
    };
    /**
     * insertImagesOrCallback
     * @param {File[]} files
     */
    Editor.prototype.insertImagesOrCallback = function (files) {
        var callbacks = this.options.callbacks;
        // If onImageUpload this.options setted
        if (callbacks.onImageUpload) {
            this.context.triggerEvent('image.upload', files);
            // else insert Image as dataURL
        }
        else {
            this.insertImages(files);
        }
    };
    /**
     * return selected plain text
     * @return {String} text
     */
    Editor.prototype.getSelectedText = function () {
        var rng = this.createRange();
        // if range on anchor, expand range with anchor
        if (rng.isOnAnchor()) {
            rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
        }
        return rng.toString();
    };
    Editor.prototype.onFormatBlock = function (tagName, $target) {
        // [workaround] for MSIE, IE need `<`
        tagName = env.isMSIE ? '<' + tagName + '>' : tagName;
        document.execCommand('FormatBlock', false, tagName);
        // support custom class
        if ($target && $target.length) {
            var className = $target[0].className || '';
            if (className) {
                var currentRange = this.createRange();
                var $parent = $$1([currentRange.sc, currentRange.ec]).closest(tagName);
                $parent.addClass(className);
            }
        }
    };
    Editor.prototype.formatPara = function () {
        this.formatBlock('P');
    };
    Editor.prototype.fontStyling = function (target, value) {
        var rng = this.createRange();
        if (rng) {
            var spans = this.style.styleNodes(rng);
            $$1(spans).css(target, value);
            // [workaround] added styled bogus span for style
            //  - also bogus character needed for cursor position
            if (rng.isCollapsed()) {
                var firstSpan = lists.head(spans);
                if (firstSpan && !dom.nodeLength(firstSpan)) {
                    firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
                    range.createFromNodeAfter(firstSpan.firstChild).select();
                    this.$editable.data(KEY_BOGUS, firstSpan);
                }
            }
        }
    };
    /**
     * unlink
     *
     * @type command
     */
    Editor.prototype.unlink = function () {
        var rng = this.createRange();
        if (rng.isOnAnchor()) {
            var anchor = dom.ancestor(rng.sc, dom.isAnchor);
            rng = range.createFromNode(anchor);
            rng.select();
            this.beforeCommand();
            document.execCommand('unlink');
            this.afterCommand();
        }
    };
    /**
     * returns link info
     *
     * @return {Object}
     * @return {WrappedRange} return.range
     * @return {String} return.text
     * @return {Boolean} [return.isNewWindow=true]
     * @return {String} [return.url=""]
     */
    Editor.prototype.getLinkInfo = function () {
        var rng = this.createRange().expand(dom.isAnchor);
        // Get the first anchor on range(for edit).
        var $anchor = $$1(lists.head(rng.nodes(dom.isAnchor)));
        var linkInfo = {
            range: rng,
            text: rng.toString(),
            url: $anchor.length ? $anchor.attr('href') : ''
        };
        // Define isNewWindow when anchor exists.
        if ($anchor.length) {
            linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
        }
        return linkInfo;
    };
    Editor.prototype.addRow = function (position) {
        var rng = this.createRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.beforeCommand();
            this.table.addRow(rng, position);
            this.afterCommand();
        }
    };
    Editor.prototype.addCol = function (position) {
        var rng = this.createRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.beforeCommand();
            this.table.addCol(rng, position);
            this.afterCommand();
        }
    };
    Editor.prototype.deleteRow = function () {
        var rng = this.createRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.beforeCommand();
            this.table.deleteRow(rng);
            this.afterCommand();
        }
    };
    Editor.prototype.deleteCol = function () {
        var rng = this.createRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.beforeCommand();
            this.table.deleteCol(rng);
            this.afterCommand();
        }
    };
    Editor.prototype.deleteTable = function () {
        var rng = this.createRange(this.$editable);
        if (rng.isCollapsed() && rng.isOnCell()) {
            this.beforeCommand();
            this.table.deleteTable(rng);
            this.afterCommand();
        }
    };
    /**
     * @param {Position} pos
     * @param {jQuery} $target - target element
     * @param {Boolean} [bKeepRatio] - keep ratio
     */
    Editor.prototype.resizeTo = function (pos, $target, bKeepRatio) {
        var imageSize;
        if (bKeepRatio) {
            var newRatio = pos.y / pos.x;
            var ratio = $target.data('ratio');
            imageSize = {
                width: ratio > newRatio ? pos.x : pos.y / ratio,
                height: ratio > newRatio ? pos.x * ratio : pos.y
            };
        }
        else {
            imageSize = {
                width: pos.x,
                height: pos.y
            };
        }
        $target.css(imageSize);
    };
    /**
     * returns whether editable area has focus or not.
     */
    Editor.prototype.hasFocus = function () {
        return this.$editable.is(':focus');
    };
    /**
     * set focus
     */
    Editor.prototype.focus = function () {
        // [workaround] Screen will move when page is scolled in IE.
        //  - do focus when not focused
        if (!this.hasFocus()) {
            this.$editable.focus();
        }
    };
    /**
     * returns whether contents is empty or not.
     * @return {Boolean}
     */
    Editor.prototype.isEmpty = function () {
        return dom.isEmpty(this.$editable[0]) || dom.emptyPara === this.$editable.html();
    };
    /**
     * Removes all contents and restores the editable instance to an _emptyPara_.
     */
    Editor.prototype.empty = function () {
        this.context.invoke('code', dom.emptyPara);
    };
    return Editor;
}());

var Clipboard = /** @class */ (function () {
    function Clipboard(context) {
        this.context = context;
        this.$editable = context.layoutInfo.editable;
    }
    Clipboard.prototype.initialize = function () {
        this.$editable.on('paste', this.pasteByEvent.bind(this));
    };
    /**
     * paste by clipboard event
     *
     * @param {Event} event
     */
    Clipboard.prototype.pasteByEvent = function (event) {
        var clipboardData = event.originalEvent.clipboardData;
        if (clipboardData && clipboardData.items && clipboardData.items.length) {
            var item = lists.head(clipboardData.items);
            if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
                this.context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
            }
            this.context.invoke('editor.afterCommand');
        }
    };
    return Clipboard;
}());

var Dropzone = /** @class */ (function () {
    function Dropzone(context) {
        this.context = context;
        this.$eventListener = $$1(document);
        this.$editor = context.layoutInfo.editor;
        this.$editable = context.layoutInfo.editable;
        this.options = context.options;
        this.lang = this.options.langInfo;
        this.documentEventHandlers = {};
        this.$dropzone = $$1([
            '<div class="note-dropzone">',
            '  <div class="note-dropzone-message"/>',
            '</div>'
        ].join('')).prependTo(this.$editor);
    }
    /**
     * attach Drag and Drop Events
     */
    Dropzone.prototype.initialize = function () {
        if (this.options.disableDragAndDrop) {
            // prevent default drop event
            this.documentEventHandlers.onDrop = function (e) {
                e.preventDefault();
            };
            // do not consider outside of dropzone
            this.$eventListener = this.$dropzone;
            this.$eventListener.on('drop', this.documentEventHandlers.onDrop);
        }
        else {
            this.attachDragAndDropEvent();
        }
    };
    /**
     * attach Drag and Drop Events
     */
    Dropzone.prototype.attachDragAndDropEvent = function () {
        var _this = this;
        var collection = $$1();
        var $dropzoneMessage = this.$dropzone.find('.note-dropzone-message');
        this.documentEventHandlers.onDragenter = function (e) {
            var isCodeview = _this.context.invoke('codeview.isActivated');
            var hasEditorSize = _this.$editor.width() > 0 && _this.$editor.height() > 0;
            if (!isCodeview && !collection.length && hasEditorSize) {
                _this.$editor.addClass('dragover');
                _this.$dropzone.width(_this.$editor.width());
                _this.$dropzone.height(_this.$editor.height());
                $dropzoneMessage.text(_this.lang.image.dragImageHere);
            }
            collection = collection.add(e.target);
        };
        this.documentEventHandlers.onDragleave = function (e) {
            collection = collection.not(e.target);
            if (!collection.length) {
                _this.$editor.removeClass('dragover');
            }
        };
        this.documentEventHandlers.onDrop = function () {
            collection = $$1();
            _this.$editor.removeClass('dragover');
        };
        // show dropzone on dragenter when dragging a object to document
        // -but only if the editor is visible, i.e. has a positive width and height
        this.$eventListener.on('dragenter', this.documentEventHandlers.onDragenter)
            .on('dragleave', this.documentEventHandlers.onDragleave)
            .on('drop', this.documentEventHandlers.onDrop);
        // change dropzone's message on hover.
        this.$dropzone.on('dragenter', function () {
            _this.$dropzone.addClass('hover');
            $dropzoneMessage.text(_this.lang.image.dropImage);
        }).on('dragleave', function () {
            _this.$dropzone.removeClass('hover');
            $dropzoneMessage.text(_this.lang.image.dragImageHere);
        });
        // attach dropImage
        this.$dropzone.on('drop', function (event) {
            var dataTransfer = event.originalEvent.dataTransfer;
            // stop the browser from opening the dropped content
            event.preventDefault();
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                _this.$editable.focus();
                _this.context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
            }
            else {
                $$1.each(dataTransfer.types, function (idx, type) {
                    var content = dataTransfer.getData(type);
                    if (type.toLowerCase().indexOf('text') > -1) {
                        _this.context.invoke('editor.pasteHTML', content);
                    }
                    else {
                        $$1(content).each(function (idx, item) {
                            _this.context.invoke('editor.insertNode', item);
                        });
                    }
                });
            }
        }).on('dragover', false); // prevent default dragover event
    };
    Dropzone.prototype.destroy = function () {
        var _this = this;
        Object.keys(this.documentEventHandlers).forEach(function (key) {
            _this.$eventListener.off(key.substr(2).toLowerCase(), _this.documentEventHandlers[key]);
        });
        this.documentEventHandlers = {};
    };
    return Dropzone;
}());

var CodeMirror;
if (env.hasCodeMirror) {
    if (env.isSupportAmd) {
        require(['codemirror'], function (cm) {
            CodeMirror = cm;
        });
    }
    else {
        CodeMirror = window.CodeMirror;
    }
}
/**
 * @class Codeview
 */
var CodeView = /** @class */ (function () {
    function CodeView(context) {
        this.context = context;
        this.$editor = context.layoutInfo.editor;
        this.$editable = context.layoutInfo.editable;
        this.$codable = context.layoutInfo.codable;
        this.options = context.options;
    }
    CodeView.prototype.sync = function () {
        var isCodeview = this.isActivated();
        if (isCodeview && env.hasCodeMirror) {
            this.$codable.data('cmEditor').save();
        }
    };
    /**
     * @return {Boolean}
     */
    CodeView.prototype.isActivated = function () {
        return this.$editor.hasClass('codeview');
    };
    /**
     * toggle codeview
     */
    CodeView.prototype.toggle = function () {
        if (this.isActivated()) {
            this.deactivate();
        }
        else {
            this.activate();
        }
        this.context.triggerEvent('codeview.toggled');
    };
    /**
     * activate code view
     */
    CodeView.prototype.activate = function () {
        var _this = this;
        this.$codable.val(dom.html(this.$editable, this.options.prettifyHtml));
        this.$codable.height(this.$editable.height());
        this.context.invoke('toolbar.updateCodeview', true);
        this.$editor.addClass('codeview');
        this.$codable.focus();
        // activate CodeMirror as codable
        if (env.hasCodeMirror) {
            var cmEditor_1 = CodeMirror.fromTextArea(this.$codable[0], this.options.codemirror);
            // CodeMirror TernServer
            if (this.options.codemirror.tern) {
                var server_1 = new CodeMirror.TernServer(this.options.codemirror.tern);
                cmEditor_1.ternServer = server_1;
                cmEditor_1.on('cursorActivity', function (cm) {
                    server_1.updateArgHints(cm);
                });
            }
            cmEditor_1.on('blur', function (event) {
                _this.context.triggerEvent('blur.codeview', cmEditor_1.getValue(), event);
            });
            // CodeMirror hasn't Padding.
            cmEditor_1.setSize(null, this.$editable.outerHeight());
            this.$codable.data('cmEditor', cmEditor_1);
        }
        else {
            this.$codable.on('blur', function (event) {
                _this.context.triggerEvent('blur.codeview', _this.$codable.val(), event);
            });
        }
    };
    /**
     * deactivate code view
     */
    CodeView.prototype.deactivate = function () {
        // deactivate CodeMirror as codable
        if (env.hasCodeMirror) {
            var cmEditor = this.$codable.data('cmEditor');
            this.$codable.val(cmEditor.getValue());
            cmEditor.toTextArea();
        }
        var value = dom.value(this.$codable, this.options.prettifyHtml) || dom.emptyPara;
        var isChange = this.$editable.html() !== value;
        this.$editable.html(value);
        this.$editable.height(this.options.height ? this.$codable.height() : 'auto');
        this.$editor.removeClass('codeview');
        if (isChange) {
            this.context.triggerEvent('change', this.$editable.html(), this.$editable);
        }
        this.$editable.focus();
        this.context.invoke('toolbar.updateCodeview', false);
    };
    CodeView.prototype.destroy = function () {
        if (this.isActivated()) {
            this.deactivate();
        }
    };
    return CodeView;
}());

var EDITABLE_PADDING = 24;
var Statusbar = /** @class */ (function () {
    function Statusbar(context) {
        this.$document = $$1(document);
        this.$statusbar = context.layoutInfo.statusbar;
        this.$editable = context.layoutInfo.editable;
        this.options = context.options;
    }
    Statusbar.prototype.initialize = function () {
        var _this = this;
        if (this.options.airMode || this.options.disableResizeEditor) {
            this.destroy();
            return;
        }
        this.$statusbar.on('mousedown', function (event) {
            event.preventDefault();
            event.stopPropagation();
            var editableTop = _this.$editable.offset().top - _this.$document.scrollTop();
            var onMouseMove = function (event) {
                var height = event.clientY - (editableTop + EDITABLE_PADDING);
                height = (_this.options.minheight > 0) ? Math.max(height, _this.options.minheight) : height;
                height = (_this.options.maxHeight > 0) ? Math.min(height, _this.options.maxHeight) : height;
                _this.$editable.height(height);
            };
            _this.$document.on('mousemove', onMouseMove).one('mouseup', function () {
                _this.$document.off('mousemove', onMouseMove);
            });
        });
    };
    Statusbar.prototype.destroy = function () {
        this.$statusbar.off();
    };
    return Statusbar;
}());

var Fullscreen = /** @class */ (function () {
    function Fullscreen(context) {
        var _this = this;
        this.context = context;
        this.$editor = context.layoutInfo.editor;
        this.$toolbar = context.layoutInfo.toolbar;
        this.$editable = context.layoutInfo.editable;
        this.$codable = context.layoutInfo.codable;
        this.$window = $$1(window);
        this.$scrollbar = $$1('html, body');
        this.onResize = function () {
            _this.resizeTo({
                h: _this.$window.height() - _this.$toolbar.outerHeight()
            });
        };
    }
    Fullscreen.prototype.resizeTo = function (size) {
        this.$editable.css('height', size.h);
        this.$codable.css('height', size.h);
        if (this.$codable.data('cmeditor')) {
            this.$codable.data('cmeditor').setsize(null, size.h);
        }
    };
    /**
     * toggle fullscreen
     */
    Fullscreen.prototype.toggle = function () {
        this.$editor.toggleClass('fullscreen');
        if (this.isFullscreen()) {
            this.$editable.data('orgHeight', this.$editable.css('height'));
            this.$window.on('resize', this.onResize).trigger('resize');
            this.$scrollbar.css('overflow', 'hidden');
        }
        else {
            this.$window.off('resize', this.onResize);
            this.resizeTo({ h: this.$editable.data('orgHeight') });
            this.$scrollbar.css('overflow', 'visible');
        }
        this.context.invoke('toolbar.updateFullscreen', this.isFullscreen());
    };
    Fullscreen.prototype.isFullscreen = function () {
        return this.$editor.hasClass('fullscreen');
    };
    return Fullscreen;
}());

var Handle = /** @class */ (function () {
    function Handle(context) {
        var _this = this;
        this.context = context;
        this.$document = $$1(document);
        this.$editingArea = context.layoutInfo.editingArea;
        this.options = context.options;
        this.lang = this.options.langInfo;
        this.events = {
            'summernote.mousedown': function (we, e) {
                if (_this.update(e.target)) {
                    e.preventDefault();
                }
            },
            'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function () {
                _this.update();
            },
            'summernote.disable': function () {
                _this.hide();
            },
            'summernote.codeview.toggled': function () {
                _this.update();
            }
        };
    }
    Handle.prototype.initialize = function () {
        var _this = this;
        this.$handle = $$1([
            '<div class="note-handle">',
            '<div class="note-control-selection">',
            '<div class="note-control-selection-bg"></div>',
            '<div class="note-control-holder note-control-nw"></div>',
            '<div class="note-control-holder note-control-ne"></div>',
            '<div class="note-control-holder note-control-sw"></div>',
            '<div class="',
            (this.options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing'),
            ' note-control-se"></div>',
            (this.options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>'),
            '</div>',
            '</div>'
        ].join('')).prependTo(this.$editingArea);
        this.$handle.on('mousedown', function (event) {
            if (dom.isControlSizing(event.target)) {
                event.preventDefault();
                event.stopPropagation();
                var $target_1 = _this.$handle.find('.note-control-selection').data('target');
                var posStart_1 = $target_1.offset();
                var scrollTop_1 = _this.$document.scrollTop();
                var onMouseMove_1 = function (event) {
                    _this.context.invoke('editor.resizeTo', {
                        x: event.clientX - posStart_1.left,
                        y: event.clientY - (posStart_1.top - scrollTop_1)
                    }, $target_1, !event.shiftKey);
                    _this.update($target_1[0]);
                };
                _this.$document
                    .on('mousemove', onMouseMove_1)
                    .one('mouseup', function (e) {
                    e.preventDefault();
                    _this.$document.off('mousemove', onMouseMove_1);
                    _this.context.invoke('editor.afterCommand');
                });
                if (!$target_1.data('ratio')) {
                    $target_1.data('ratio', $target_1.height() / $target_1.width());
                }
            }
        });
        // Listen for scrolling on the handle overlay.
        this.$handle.on('wheel', function (e) {
            e.preventDefault();
            _this.update();
        });
    };
    Handle.prototype.destroy = function () {
        this.$handle.remove();
    };
    Handle.prototype.update = function (target) {
        if (this.context.isDisabled()) {
            return false;
        }
        var isImage = dom.isImg(target);
        var $selection = this.$handle.find('.note-control-selection');
        this.context.invoke('imagePopover.update', target);
        if (isImage) {
            var $image = $$1(target);
            var position = $image.position();
            var pos = {
                left: position.left + parseInt($image.css('marginLeft'), 10),
                top: position.top + parseInt($image.css('marginTop'), 10)
            };
            // exclude margin
            var imageSize = {
                w: $image.outerWidth(false),
                h: $image.outerHeight(false)
            };
            $selection.css({
                display: 'block',
                left: pos.left,
                top: pos.top,
                width: imageSize.w,
                height: imageSize.h
            }).data('target', $image); // save current image element.
            var origImageObj = new Image();
            origImageObj.src = $image.attr('src');
            var sizingText = imageSize.w + 'x' + imageSize.h + ' (' + this.lang.image.original + ': ' + origImageObj.width + 'x' + origImageObj.height + ')';
            $selection.find('.note-control-selection-info').text(sizingText);
            this.context.invoke('editor.saveTarget', target);
        }
        else {
            this.hide();
        }
        return isImage;
    };
    /**
     * hide
     *
     * @param {jQuery} $handle
     */
    Handle.prototype.hide = function () {
        this.context.invoke('editor.clearTarget');
        this.$handle.children().hide();
    };
    return Handle;
}());

var defaultScheme = 'http://';
var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;
var AutoLink = /** @class */ (function () {
    function AutoLink(context) {
        var _this = this;
        this.context = context;
        this.events = {
            'summernote.keyup': function (we, e) {
                if (!e.isDefaultPrevented()) {
                    _this.handleKeyup(e);
                }
            },
            'summernote.keydown': function (we, e) {
                _this.handleKeydown(e);
            }
        };
    }
    AutoLink.prototype.initialize = function () {
        this.lastWordRange = null;
    };
    AutoLink.prototype.destroy = function () {
        this.lastWordRange = null;
    };
    AutoLink.prototype.replace = function () {
        if (!this.lastWordRange) {
            return;
        }
        var keyword = this.lastWordRange.toString();
        var match = keyword.match(linkPattern);
        if (match && (match[1] || match[2])) {
            var link = match[1] ? keyword : defaultScheme + keyword;
            var node = $$1('<a />').html(keyword).attr('href', link)[0];
            this.lastWordRange.insertNode(node);
            this.lastWordRange = null;
            this.context.invoke('editor.focus');
        }
    };
    AutoLink.prototype.handleKeydown = function (e) {
        if (lists.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
            var wordRange = this.context.invoke('editor.createRange').getWordRange();
            this.lastWordRange = wordRange;
        }
    };
    AutoLink.prototype.handleKeyup = function (e) {
        if (lists.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
            this.replace();
        }
    };
    return AutoLink;
}());

/**
 * textarea auto sync.
 */
var AutoSync = /** @class */ (function () {
    function AutoSync(context) {
        var _this = this;
        this.$note = context.layoutInfo.note;
        this.events = {
            'summernote.change': function () {
                _this.$note.val(context.invoke('code'));
            }
        };
    }
    AutoSync.prototype.shouldInitialize = function () {
        return dom.isTextarea(this.$note[0]);
    };
    return AutoSync;
}());

var Placeholder = /** @class */ (function () {
    function Placeholder(context) {
        var _this = this;
        this.context = context;
        this.$editingArea = context.layoutInfo.editingArea;
        this.options = context.options;
        this.events = {
            'summernote.init summernote.change': function () {
                _this.update();
            },
            'summernote.codeview.toggled': function () {
                _this.update();
            }
        };
    }
    Placeholder.prototype.shouldInitialize = function () {
        return !!this.options.placeholder;
    };
    Placeholder.prototype.initialize = function () {
        var _this = this;
        this.$placeholder = $$1('<div class="note-placeholder">');
        this.$placeholder.on('click', function () {
            _this.context.invoke('focus');
        }).text(this.options.placeholder).prependTo(this.$editingArea);
        this.update();
    };
    Placeholder.prototype.destroy = function () {
        this.$placeholder.remove();
    };
    Placeholder.prototype.update = function () {
        var isShow = !this.context.invoke('codeview.isActivated') && this.context.invoke('editor.isEmpty');
        this.$placeholder.toggle(isShow);
    };
    return Placeholder;
}());

var Buttons = /** @class */ (function () {
    function Buttons(context) {
        this.ui = $$1.summernote.ui;
        this.context = context;
        this.$toolbar = context.layoutInfo.toolbar;
        this.options = context.options;
        this.lang = this.options.langInfo;
        this.invertedKeyMap = func.invertObject(this.options.keyMap[env.isMac ? 'mac' : 'pc']);
    }
    Buttons.prototype.representShortcut = function (editorMethod) {
        var shortcut = this.invertedKeyMap[editorMethod];
        if (!this.options.shortcuts || !shortcut) {
            return '';
        }
        if (env.isMac) {
            shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
        }
        shortcut = shortcut.replace('BACKSLASH', '\\')
            .replace('SLASH', '/')
            .replace('LEFTBRACKET', '[')
            .replace('RIGHTBRACKET', ']');
        return ' (' + shortcut + ')';
    };
    Buttons.prototype.button = function (o) {
        if (!this.options.tooltip && o.tooltip) {
            delete o.tooltip;
        }
        o.container = this.options.container;
        return this.ui.button(o);
    };
    Buttons.prototype.initialize = function () {
        this.addToolbarButtons();
        this.addImagePopoverButtons();
        this.addLinkPopoverButtons();
        this.addTablePopoverButtons();
        this.fontInstalledMap = {};
    };
    Buttons.prototype.destroy = function () {
        delete this.fontInstalledMap;
    };
    Buttons.prototype.isFontInstalled = function (name) {
        if (!this.fontInstalledMap.hasOwnProperty(name)) {
            this.fontInstalledMap[name] = env.isFontInstalled(name) ||
                lists.contains(this.options.fontNamesIgnoreCheck, name);
        }
        return this.fontInstalledMap[name];
    };
    Buttons.prototype.isFontDeservedToAdd = function (name) {
        var genericFamilies = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];
        name = name.toLowerCase();
        return ((name !== '') && this.isFontInstalled(name) && ($$1.inArray(name, genericFamilies) === -1));
    };
    Buttons.prototype.addToolbarButtons = function () {
        var _this = this;
        this.context.memo('button.style', function () {
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.magic), _this.options),
                    tooltip: _this.lang.style.style,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdown({
                    className: 'dropdown-style',
                    items: _this.options.styleTags,
                    template: function (item) {
                        if (typeof item === 'string') {
                            item = { tag: item, title: (_this.lang.style.hasOwnProperty(item) ? _this.lang.style[item] : item) };
                        }
                        var tag = item.tag;
                        var title = item.title;
                        var style = item.style ? ' style="' + item.style + '" ' : '';
                        var className = item.className ? ' class="' + item.className + '"' : '';
                        return '<' + tag + style + className + '>' + title + '</' + tag + '>';
                    },
                    click: _this.context.createInvokeHandler('editor.formatBlock')
                })
            ]).render();
        });
        var _loop_1 = function (styleIdx, styleLen) {
            var item = this_1.options.styleTags[styleIdx];
            this_1.context.memo('button.style.' + item, function () {
                return _this.button({
                    className: 'note-btn-style-' + item,
                    contents: '<div data-value="' + item + '">' + item.toUpperCase() + '</div>',
                    tooltip: item.toUpperCase(),
                    click: _this.context.createInvokeHandler('editor.formatBlock')
                }).render();
            });
        };
        var this_1 = this;
        for (var styleIdx = 0, styleLen = this.options.styleTags.length; styleIdx < styleLen; styleIdx++) {
            _loop_1(styleIdx, styleLen);
        }
        this.context.memo('button.bold', function () {
            return _this.button({
                className: 'note-btn-bold',
                contents: _this.ui.icon(_this.options.icons.bold),
                tooltip: _this.lang.font.bold + _this.representShortcut('bold'),
                click: _this.context.createInvokeHandlerAndUpdateState('editor.bold')
            }).render();
        });
        this.context.memo('button.italic', function () {
            return _this.button({
                className: 'note-btn-italic',
                contents: _this.ui.icon(_this.options.icons.italic),
                tooltip: _this.lang.font.italic + _this.representShortcut('italic'),
                click: _this.context.createInvokeHandlerAndUpdateState('editor.italic')
            }).render();
        });
        this.context.memo('button.underline', function () {
            return _this.button({
                className: 'note-btn-underline',
                contents: _this.ui.icon(_this.options.icons.underline),
                tooltip: _this.lang.font.underline + _this.representShortcut('underline'),
                click: _this.context.createInvokeHandlerAndUpdateState('editor.underline')
            }).render();
        });
        this.context.memo('button.clear', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.eraser),
                tooltip: _this.lang.font.clear + _this.representShortcut('removeFormat'),
                click: _this.context.createInvokeHandler('editor.removeFormat')
            }).render();
        });
        this.context.memo('button.strikethrough', function () {
            return _this.button({
                className: 'note-btn-strikethrough',
                contents: _this.ui.icon(_this.options.icons.strikethrough),
                tooltip: _this.lang.font.strikethrough + _this.representShortcut('strikethrough'),
                click: _this.context.createInvokeHandlerAndUpdateState('editor.strikethrough')
            }).render();
        });
        this.context.memo('button.superscript', function () {
            return _this.button({
                className: 'note-btn-superscript',
                contents: _this.ui.icon(_this.options.icons.superscript),
                tooltip: _this.lang.font.superscript,
                click: _this.context.createInvokeHandlerAndUpdateState('editor.superscript')
            }).render();
        });
        this.context.memo('button.subscript', function () {
            return _this.button({
                className: 'note-btn-subscript',
                contents: _this.ui.icon(_this.options.icons.subscript),
                tooltip: _this.lang.font.subscript,
                click: _this.context.createInvokeHandlerAndUpdateState('editor.subscript')
            }).render();
        });
        this.context.memo('button.fontname', function () {
            var styleInfo = _this.context.invoke('editor.currentStyle');
            // Add 'default' fonts into the fontnames array if not exist
            $$1.each(styleInfo['font-family'].split(','), function (idx, fontname) {
                fontname = fontname.trim().replace(/['"]+/g, '');
                if (_this.isFontDeservedToAdd(fontname)) {
                    if ($$1.inArray(fontname, _this.options.fontNames) === -1) {
                        _this.options.fontNames.push(fontname);
                    }
                }
            });
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents('<span class="note-current-fontname"/>', _this.options),
                    tooltip: _this.lang.font.name,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdownCheck({
                    className: 'dropdown-fontname',
                    checkClassName: _this.options.icons.menuCheck,
                    items: _this.options.fontNames.filter(_this.isFontInstalled.bind(_this)),
                    template: function (item) {
                        return '<span style="font-family: \'' + item + '\'">' + item + '</span>';
                    },
                    click: _this.context.createInvokeHandlerAndUpdateState('editor.fontName')
                })
            ]).render();
        });
        this.context.memo('button.fontsize', function () {
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents('<span class="note-current-fontsize"/>', _this.options),
                    tooltip: _this.lang.font.size,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdownCheck({
                    className: 'dropdown-fontsize',
                    checkClassName: _this.options.icons.menuCheck,
                    items: _this.options.fontSizes,
                    click: _this.context.createInvokeHandlerAndUpdateState('editor.fontSize')
                })
            ]).render();
        });
        this.context.memo('button.color', function () {
            return _this.ui.buttonGroup({
                className: 'note-color',
                children: [
                    _this.button({
                        className: 'note-current-color-button',
                        contents: _this.ui.icon(_this.options.icons.font + ' note-recent-color'),
                        tooltip: _this.lang.color.recent,
                        click: function (e) {
                            var $button = $$1(e.currentTarget);
                            _this.context.invoke('editor.color', {
                                backColor: $button.attr('data-backColor'),
                                foreColor: $button.attr('data-foreColor')
                            });
                        },
                        callback: function ($button) {
                            var $recentColor = $button.find('.note-recent-color');
                            $recentColor.css('background-color', '#FFFF00');
                            $button.attr('data-backColor', '#FFFF00');
                        }
                    }),
                    _this.button({
                        className: 'dropdown-toggle',
                        contents: _this.ui.dropdownButtonContents('', _this.options),
                        tooltip: _this.lang.color.more,
                        data: {
                            toggle: 'dropdown'
                        }
                    }),
                    _this.ui.dropdown({
                        items: [
                            '<div class="note-palette">',
                            '  <div class="note-palette-title">' + _this.lang.color.background + '</div>',
                            '  <div>',
                            '    <button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">',
                            _this.lang.color.transparent,
                            '    </button>',
                            '  </div>',
                            '  <div class="note-holder" data-event="backColor"/>',
                            '</div>',
                            '<div class="note-palette">',
                            '  <div class="note-palette-title">' + _this.lang.color.foreground + '</div>',
                            '  <div>',
                            '    <button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">',
                            _this.lang.color.resetToDefault,
                            '    </button>',
                            '  </div>',
                            '  <div class="note-holder" data-event="foreColor"/>',
                            '</div>'
                        ].join(''),
                        callback: function ($dropdown) {
                            $dropdown.find('.note-holder').each(function (idx, item) {
                                var $holder = $$1(item);
                                $holder.append(_this.ui.palette({
                                    colors: _this.options.colors,
                                    eventName: $holder.data('event'),
                                    container: _this.options.container,
                                    tooltip: _this.options.tooltip
                                }).render());
                            });
                        },
                        click: function (event) {
                            var $button = $$1(event.target);
                            var eventName = $button.data('event');
                            var value = $button.data('value');
                            if (eventName && value) {
                                var key = eventName === 'backColor' ? 'background-color' : 'color';
                                var $color = $button.closest('.note-color').find('.note-recent-color');
                                var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
                                $color.css(key, value);
                                $currentButton.attr('data-' + eventName, value);
                                _this.context.invoke('editor.' + eventName, value);
                            }
                        }
                    })
                ]
            }).render();
        });
        this.context.memo('button.ul', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.unorderedlist),
                tooltip: _this.lang.lists.unordered + _this.representShortcut('insertUnorderedList'),
                click: _this.context.createInvokeHandler('editor.insertUnorderedList')
            }).render();
        });
        this.context.memo('button.ol', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.orderedlist),
                tooltip: _this.lang.lists.ordered + _this.representShortcut('insertOrderedList'),
                click: _this.context.createInvokeHandler('editor.insertOrderedList')
            }).render();
        });
        var justifyLeft = this.button({
            contents: this.ui.icon(this.options.icons.alignLeft),
            tooltip: this.lang.paragraph.left + this.representShortcut('justifyLeft'),
            click: this.context.createInvokeHandler('editor.justifyLeft')
        });
        var justifyCenter = this.button({
            contents: this.ui.icon(this.options.icons.alignCenter),
            tooltip: this.lang.paragraph.center + this.representShortcut('justifyCenter'),
            click: this.context.createInvokeHandler('editor.justifyCenter')
        });
        var justifyRight = this.button({
            contents: this.ui.icon(this.options.icons.alignRight),
            tooltip: this.lang.paragraph.right + this.representShortcut('justifyRight'),
            click: this.context.createInvokeHandler('editor.justifyRight')
        });
        var justifyFull = this.button({
            contents: this.ui.icon(this.options.icons.alignJustify),
            tooltip: this.lang.paragraph.justify + this.representShortcut('justifyFull'),
            click: this.context.createInvokeHandler('editor.justifyFull')
        });
        var outdent = this.button({
            contents: this.ui.icon(this.options.icons.outdent),
            tooltip: this.lang.paragraph.outdent + this.representShortcut('outdent'),
            click: this.context.createInvokeHandler('editor.outdent')
        });
        var indent = this.button({
            contents: this.ui.icon(this.options.icons.indent),
            tooltip: this.lang.paragraph.indent + this.representShortcut('indent'),
            click: this.context.createInvokeHandler('editor.indent')
        });
        this.context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
        this.context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
        this.context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
        this.context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
        this.context.memo('button.outdent', func.invoke(outdent, 'render'));
        this.context.memo('button.indent', func.invoke(indent, 'render'));
        this.context.memo('button.paragraph', function () {
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.alignLeft), _this.options),
                    tooltip: _this.lang.paragraph.paragraph,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdown([
                    _this.ui.buttonGroup({
                        className: 'note-align',
                        children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
                    }),
                    _this.ui.buttonGroup({
                        className: 'note-list',
                        children: [outdent, indent]
                    })
                ])
            ]).render();
        });
        this.context.memo('button.height', function () {
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.textHeight), _this.options),
                    tooltip: _this.lang.font.height,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdownCheck({
                    items: _this.options.lineHeights,
                    checkClassName: _this.options.icons.menuCheck,
                    className: 'dropdown-line-height',
                    click: _this.context.createInvokeHandler('editor.lineHeight')
                })
            ]).render();
        });
        this.context.memo('button.table', function () {
            return _this.ui.buttonGroup([
                _this.button({
                    className: 'dropdown-toggle',
                    contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.table), _this.options),
                    tooltip: _this.lang.table.table,
                    data: {
                        toggle: 'dropdown'
                    }
                }),
                _this.ui.dropdown({
                    className: 'note-table',
                    items: [
                        '<div class="note-dimension-picker">',
                        '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>',
                        '  <div class="note-dimension-picker-highlighted"/>',
                        '  <div class="note-dimension-picker-unhighlighted"/>',
                        '</div>',
                        '<div class="note-dimension-display">1 x 1</div>'
                    ].join('')
                })
            ], {
                callback: function ($node) {
                    var $catcher = $node.find('.note-dimension-picker-mousecatcher');
                    $catcher.css({
                        width: _this.options.insertTableMaxSize.col + 'em',
                        height: _this.options.insertTableMaxSize.row + 'em'
                    }).mousedown(_this.context.createInvokeHandler('editor.insertTable'))
                        .on('mousemove', _this.tableMoveHandler.bind(_this));
                }
            }).render();
        });
        this.context.memo('button.link', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.link),
                tooltip: _this.lang.link.link + _this.representShortcut('linkDialog.show'),
                click: _this.context.createInvokeHandler('linkDialog.show')
            }).render();
        });
        this.context.memo('button.picture', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.picture),
                tooltip: _this.lang.image.image,
                click: _this.context.createInvokeHandler('imageDialog.show')
            }).render();
        });
        this.context.memo('button.video', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.video),
                tooltip: _this.lang.video.video,
                click: _this.context.createInvokeHandler('videoDialog.show')
            }).render();
        });
        this.context.memo('button.hr', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.minus),
                tooltip: _this.lang.hr.insert + _this.representShortcut('insertHorizontalRule'),
                click: _this.context.createInvokeHandler('editor.insertHorizontalRule')
            }).render();
        });
        this.context.memo('button.fullscreen', function () {
            return _this.button({
                className: 'btn-fullscreen',
                contents: _this.ui.icon(_this.options.icons.arrowsAlt),
                tooltip: _this.options.fullscreen,
                click: _this.context.createInvokeHandler('fullscreen.toggle')
            }).render();
        });
        this.context.memo('button.codeview', function () {
            return _this.button({
                className: 'btn-codeview',
                contents: _this.ui.icon(_this.options.icons.code),
                tooltip: _this.options.codeview,
                click: _this.context.createInvokeHandler('codeview.toggle')
            }).render();
        });
        this.context.memo('button.redo', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.redo),
                tooltip: _this.lang.history.redo + _this.representShortcut('redo'),
                click: _this.context.createInvokeHandler('editor.redo')
            }).render();
        });
        this.context.memo('button.undo', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.undo),
                tooltip: _this.lang.history.undo + _this.representShortcut('undo'),
                click: _this.context.createInvokeHandler('editor.undo')
            }).render();
        });
        this.context.memo('button.help', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.question),
                tooltip: _this.options.help,
                click: _this.context.createInvokeHandler('helpDialog.show')
            }).render();
        });
    };
    /**
     * image : [
     *   ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
     *   ['float', ['floatLeft', 'floatRight', 'floatNone' ]],
     *   ['remove', ['removeMedia']]
     * ],
     */
    Buttons.prototype.addImagePopoverButtons = function () {
        var _this = this;
        // Image Size Buttons
        this.context.memo('button.imageSize100', function () {
            return _this.button({
                contents: '<span class="note-fontsize-10">100%</span>',
                tooltip: _this.lang.image.resizeFull,
                click: _this.context.createInvokeHandler('editor.resize', '1')
            }).render();
        });
        this.context.memo('button.imageSize50', function () {
            return _this.button({
                contents: '<span class="note-fontsize-10">50%</span>',
                tooltip: _this.lang.image.resizeHalf,
                click: _this.context.createInvokeHandler('editor.resize', '0.5')
            }).render();
        });
        this.context.memo('button.imageSize25', function () {
            return _this.button({
                contents: '<span class="note-fontsize-10">25%</span>',
                tooltip: _this.lang.image.resizeQuarter,
                click: _this.context.createInvokeHandler('editor.resize', '0.25')
            }).render();
        });
        // Float Buttons
        this.context.memo('button.floatLeft', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.alignLeft),
                tooltip: _this.lang.image.floatLeft,
                click: _this.context.createInvokeHandler('editor.floatMe', 'left')
            }).render();
        });
        this.context.memo('button.floatRight', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.alignRight),
                tooltip: _this.lang.image.floatRight,
                click: _this.context.createInvokeHandler('editor.floatMe', 'right')
            }).render();
        });
        this.context.memo('button.floatNone', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.alignJustify),
                tooltip: _this.lang.image.floatNone,
                click: _this.context.createInvokeHandler('editor.floatMe', 'none')
            }).render();
        });
        // Remove Buttons
        this.context.memo('button.removeMedia', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.trash),
                tooltip: _this.lang.image.remove,
                click: _this.context.createInvokeHandler('editor.removeMedia')
            }).render();
        });
    };
    Buttons.prototype.addLinkPopoverButtons = function () {
        var _this = this;
        this.context.memo('button.linkDialogShow', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.link),
                tooltip: _this.lang.link.edit,
                click: _this.context.createInvokeHandler('linkDialog.show')
            }).render();
        });
        this.context.memo('button.unlink', function () {
            return _this.button({
                contents: _this.ui.icon(_this.options.icons.unlink),
                tooltip: _this.lang.link.unlink,
                click: _this.context.createInvokeHandler('editor.unlink')
            }).render();
        });
    };
    /**
     * table : [
     *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
     *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
     * ],
     */
    Buttons.prototype.addTablePopoverButtons = function () {
        var _this = this;
        this.context.memo('button.addRowUp', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.rowAbove),
                tooltip: _this.lang.table.addRowAbove,
                click: _this.context.createInvokeHandler('editor.addRow', 'top')
            }).render();
        });
        this.context.memo('button.addRowDown', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.rowBelow),
                tooltip: _this.lang.table.addRowBelow,
                click: _this.context.createInvokeHandler('editor.addRow', 'bottom')
            }).render();
        });
        this.context.memo('button.addColLeft', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.colBefore),
                tooltip: _this.lang.table.addColLeft,
                click: _this.context.createInvokeHandler('editor.addCol', 'left')
            }).render();
        });
        this.context.memo('button.addColRight', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.colAfter),
                tooltip: _this.lang.table.addColRight,
                click: _this.context.createInvokeHandler('editor.addCol', 'right')
            }).render();
        });
        this.context.memo('button.deleteRow', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.rowRemove),
                tooltip: _this.lang.table.delRow,
                click: _this.context.createInvokeHandler('editor.deleteRow')
            }).render();
        });
        this.context.memo('button.deleteCol', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.colRemove),
                tooltip: _this.lang.table.delCol,
                click: _this.context.createInvokeHandler('editor.deleteCol')
            }).render();
        });
        this.context.memo('button.deleteTable', function () {
            return _this.button({
                className: 'btn-md',
                contents: _this.ui.icon(_this.options.icons.trash),
                tooltip: _this.lang.table.delTable,
                click: _this.context.createInvokeHandler('editor.deleteTable')
            }).render();
        });
    };
    Buttons.prototype.build = function ($container, groups) {
        for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
            var group = groups[groupIdx];
            var groupName = $$1.isArray(group) ? group[0] : group;
            var buttons = $$1.isArray(group) ? ((group.length === 1) ? [group[0]] : group[1]) : [group];
            var $group = this.ui.buttonGroup({
                className: 'note-' + groupName
            }).render();
            for (var idx = 0, len = buttons.length; idx < len; idx++) {
                var btn = this.context.memo('button.' + buttons[idx]);
                if (btn) {
                    $group.append(typeof btn === 'function' ? btn(this.context) : btn);
                }
            }
            $group.appendTo($container);
        }
    };
    /**
     * @param {jQuery} [$container]
     */
    Buttons.prototype.updateCurrentStyle = function ($container) {
        var _this = this;
        var $cont = $container || this.$toolbar;
        var styleInfo = this.context.invoke('editor.currentStyle');
        this.updateBtnStates($cont, {
            '.note-btn-bold': function () {
                return styleInfo['font-bold'] === 'bold';
            },
            '.note-btn-italic': function () {
                return styleInfo['font-italic'] === 'italic';
            },
            '.note-btn-underline': function () {
                return styleInfo['font-underline'] === 'underline';
            },
            '.note-btn-subscript': function () {
                return styleInfo['font-subscript'] === 'subscript';
            },
            '.note-btn-superscript': function () {
                return styleInfo['font-superscript'] === 'superscript';
            },
            '.note-btn-strikethrough': function () {
                return styleInfo['font-strikethrough'] === 'strikethrough';
            }
        });
        if (styleInfo['font-family']) {
            var fontNames = styleInfo['font-family'].split(',').map(function (name) {
                return name.replace(/[\'\"]/g, '')
                    .replace(/\s+$/, '')
                    .replace(/^\s+/, '');
            });
            var fontName_1 = lists.find(fontNames, this.isFontInstalled.bind(this));
            $cont.find('.dropdown-fontname a').each(function (idx, item) {
                var $item = $$1(item);
                // always compare string to avoid creating another func.
                var isChecked = ($item.data('value') + '') === (fontName_1 + '');
                $item.toggleClass('checked', isChecked);
            });
            $cont.find('.note-current-fontname').text(fontName_1).css('font-family', fontName_1);
        }
        if (styleInfo['font-size']) {
            var fontSize_1 = styleInfo['font-size'];
            $cont.find('.dropdown-fontsize a').each(function (idx, item) {
                var $item = $$1(item);
                // always compare with string to avoid creating another func.
                var isChecked = ($item.data('value') + '') === (fontSize_1 + '');
                $item.toggleClass('checked', isChecked);
            });
            $cont.find('.note-current-fontsize').text(fontSize_1);
        }
        if (styleInfo['line-height']) {
            var lineHeight_1 = styleInfo['line-height'];
            $cont.find('.dropdown-line-height li a').each(function (idx, item) {
                // always compare with string to avoid creating another func.
                var isChecked = ($$1(item).data('value') + '') === (lineHeight_1 + '');
                _this.className = isChecked ? 'checked' : '';
            });
        }
    };
    Buttons.prototype.updateBtnStates = function ($container, infos) {
        var _this = this;
        $$1.each(infos, function (selector, pred) {
            _this.ui.toggleBtnActive($container.find(selector), pred());
        });
    };
    Buttons.prototype.tableMoveHandler = function (event) {
        var PX_PER_EM = 18;
        var $picker = $$1(event.target.parentNode); // target is mousecatcher
        var $dimensionDisplay = $picker.next();
        var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
        var $highlighted = $picker.find('.note-dimension-picker-highlighted');
        var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
        var posOffset;
        // HTML5 with jQuery - e.offsetX is undefined in Firefox
        if (event.offsetX === undefined) {
            var posCatcher = $$1(event.target).offset();
            posOffset = {
                x: event.pageX - posCatcher.left,
                y: event.pageY - posCatcher.top
            };
        }
        else {
            posOffset = {
                x: event.offsetX,
                y: event.offsetY
            };
        }
        var dim = {
            c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
            r: Math.ceil(posOffset.y / PX_PER_EM) || 1
        };
        $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
        $catcher.data('value', dim.c + 'x' + dim.r);
        if (dim.c > 3 && dim.c < this.options.insertTableMaxSize.col) {
            $unhighlighted.css({ width: dim.c + 1 + 'em' });
        }
        if (dim.r > 3 && dim.r < this.options.insertTableMaxSize.row) {
            $unhighlighted.css({ height: dim.r + 1 + 'em' });
        }
        $dimensionDisplay.html(dim.c + ' x ' + dim.r);
    };
    return Buttons;
}());

var Toolbar = /** @class */ (function () {
    function Toolbar(context) {
        this.context = context;
        this.$window = $$1(window);
        this.$document = $$1(document);
        this.ui = $$1.summernote.ui;
        this.$note = context.layoutInfo.note;
        this.$editor = context.layoutInfo.editor;
        this.$toolbar = context.layoutInfo.toolbar;
        this.options = context.options;
        this.followScroll = this.followScroll.bind(this);
    }
    Toolbar.prototype.shouldInitialize = function () {
        return !this.options.airMode;
    };
    Toolbar.prototype.initialize = function () {
        var _this = this;
        this.options.toolbar = this.options.toolbar || [];
        if (!this.options.toolbar.length) {
            this.$toolbar.hide();
        }
        else {
            this.context.invoke('buttons.build', this.$toolbar, this.options.toolbar);
        }
        if (this.options.toolbarContainer) {
            this.$toolbar.appendTo(this.options.toolbarContainer);
        }
        this.changeContainer(false);
        this.$note.on('summernote.keyup summernote.mouseup summernote.change', function () {
            _this.context.invoke('buttons.updateCurrentStyle');
        });
        this.context.invoke('buttons.updateCurrentStyle');
        if (this.options.followingToolbar) {
            this.$window.on('scroll resize', this.followScroll);
        }
    };
    Toolbar.prototype.destroy = function () {
        this.$toolbar.children().remove();
        if (this.options.followingToolbar) {
            this.$window.off('scroll resize', this.followScroll);
        }
    };
    Toolbar.prototype.followScroll = function () {
        if (this.$editor.hasClass('fullscreen')) {
            return false;
        }
        var $toolbarWrapper = this.$toolbar.parent('.note-toolbar-wrapper');
        var editorHeight = this.$editor.outerHeight();
        var editorWidth = this.$editor.width();
        var toolbarHeight = this.$toolbar.height();
        $toolbarWrapper.css({
            height: toolbarHeight
        });
        // check if the web app is currently using another static bar
        var otherBarHeight = 0;
        if (this.options.otherStaticBar) {
            otherBarHeight = $$1(this.options.otherStaticBar).outerHeight();
        }
        var currentOffset = this.$document.scrollTop();
        var editorOffsetTop = this.$editor.offset().top;
        var editorOffsetBottom = editorOffsetTop + editorHeight;
        var activateOffset = editorOffsetTop - otherBarHeight;
        var deactivateOffsetBottom = editorOffsetBottom - otherBarHeight - toolbarHeight;
        if ((currentOffset > activateOffset) && (currentOffset < deactivateOffsetBottom)) {
            this.$toolbar.css({
                position: 'fixed',
                top: otherBarHeight,
                width: editorWidth
            });
        }
        else {
            this.$toolbar.css({
                position: 'relative',
                top: 0,
                width: '100%'
            });
        }
    };
    Toolbar.prototype.changeContainer = function (isFullscreen) {
        if (isFullscreen) {
            this.$toolbar.prependTo(this.$editor);
        }
        else {
            if (this.options.toolbarContainer) {
                this.$toolbar.appendTo(this.options.toolbarContainer);
            }
        }
    };
    Toolbar.prototype.updateFullscreen = function (isFullscreen) {
        this.ui.toggleBtnActive(this.$toolbar.find('.btn-fullscreen'), isFullscreen);
        this.changeContainer(isFullscreen);
    };
    Toolbar.prototype.updateCodeview = function (isCodeview) {
        this.ui.toggleBtnActive(this.$toolbar.find('.btn-codeview'), isCodeview);
        if (isCodeview) {
            this.deactivate();
        }
        else {
            this.activate();
        }
    };
    Toolbar.prototype.activate = function (isIncludeCodeview) {
        var $btn = this.$toolbar.find('button');
        if (!isIncludeCodeview) {
            $btn = $btn.not('.btn-codeview');
        }
        this.ui.toggleBtn($btn, true);
    };
    Toolbar.prototype.deactivate = function (isIncludeCodeview) {
        var $btn = this.$toolbar.find('button');
        if (!isIncludeCodeview) {
            $btn = $btn.not('.btn-codeview');
        }
        this.ui.toggleBtn($btn, false);
    };
    return Toolbar;
}());

var LinkDialog = /** @class */ (function () {
    function LinkDialog(context) {
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.$body = $$1(document.body);
        this.$editor = context.layoutInfo.editor;
        this.options = context.options;
        this.lang = this.options.langInfo;
        context.memo('help.linkDialog.show', this.options.langInfo.help['linkDialog.show']);
    }
    LinkDialog.prototype.initialize = function () {
        var $container = this.options.dialogsInBody ? this.$body : this.$editor;
        var body = [
            '<div class="form-group note-form-group">',
            "<label class=\"note-form-label\">" + this.lang.link.textToDisplay + "</label>",
            '<input class="note-link-text form-control note-form-control  note-input" type="text" />',
            '</div>',
            '<div class="form-group note-form-group">',
            "<label class=\"note-form-label\">" + this.lang.link.url + "</label>",
            '<input class="note-link-url form-control note-form-control note-input" type="text" value="http://" />',
            '</div>',
            !this.options.disableLinkTarget
                ? $$1('<div/>').append(this.ui.checkbox({
                    id: 'sn-checkbox-open-in-new-window',
                    text: this.lang.link.openInNewWindow,
                    checked: true
                }).render()).html()
                : ''
        ].join('');
        var buttonClass = 'btn btn-primary note-btn note-btn-primary note-link-btn';
        var footer = "<button type=\"submit\" href=\"#\" class=\"" + buttonClass + "\" disabled>" + this.lang.link.insert + "</button>";
        this.$dialog = this.ui.dialog({
            className: 'link-dialog',
            title: this.lang.link.insert,
            fade: this.options.dialogsFade,
            body: body,
            footer: footer
        }).render().appendTo($container);
    };
    LinkDialog.prototype.destroy = function () {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
    };
    LinkDialog.prototype.bindEnterKey = function ($input, $btn) {
        $input.on('keypress', function (event) {
            if (event.keyCode === key.code.ENTER) {
                event.preventDefault();
                $btn.trigger('click');
            }
        });
    };
    /**
     * toggle update button
     */
    LinkDialog.prototype.toggleLinkBtn = function ($linkBtn, $linkText, $linkUrl) {
        this.ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
    };
    /**
     * Show link dialog and set event handlers on dialog controls.
     *
     * @param {Object} linkInfo
     * @return {Promise}
     */
    LinkDialog.prototype.showLinkDialog = function (linkInfo) {
        var _this = this;
        return $$1.Deferred(function (deferred) {
            var $linkText = _this.$dialog.find('.note-link-text');
            var $linkUrl = _this.$dialog.find('.note-link-url');
            var $linkBtn = _this.$dialog.find('.note-link-btn');
            var $openInNewWindow = _this.$dialog.find('input[type=checkbox]');
            _this.ui.onDialogShown(_this.$dialog, function () {
                _this.context.triggerEvent('dialog.shown');
                // if no url was given, copy text to url
                if (!linkInfo.url) {
                    linkInfo.url = linkInfo.text;
                }
                $linkText.val(linkInfo.text);
                var handleLinkTextUpdate = function () {
                    _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                    // if linktext was modified by keyup,
                    // stop cloning text from linkUrl
                    linkInfo.text = $linkText.val();
                };
                $linkText.on('input', handleLinkTextUpdate).on('paste', function () {
                    setTimeout(handleLinkTextUpdate, 0);
                });
                var handleLinkUrlUpdate = function () {
                    _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                    // display same link on `Text to display` input
                    // when create a new link
                    if (!linkInfo.text) {
                        $linkText.val($linkUrl.val());
                    }
                };
                $linkUrl.on('input', handleLinkUrlUpdate).on('paste', function () {
                    setTimeout(handleLinkUrlUpdate, 0);
                }).val(linkInfo.url);
                if (!env.isSupportTouch) {
                    $linkUrl.trigger('focus');
                }
                _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                _this.bindEnterKey($linkUrl, $linkBtn);
                _this.bindEnterKey($linkText, $linkBtn);
                var isChecked = linkInfo.isNewWindow !== undefined
                    ? linkInfo.isNewWindow : _this.context.options.linkTargetBlank;
                $openInNewWindow.prop('checked', isChecked);
                $linkBtn.one('click', function (event) {
                    event.preventDefault();
                    deferred.resolve({
                        range: linkInfo.range,
                        url: $linkUrl.val(),
                        text: $linkText.val(),
                        isNewWindow: $openInNewWindow.is(':checked')
                    });
                    _this.ui.hideDialog(_this.$dialog);
                });
            });
            _this.ui.onDialogHidden(_this.$dialog, function () {
                // detach events
                $linkText.off('input paste keypress');
                $linkUrl.off('input paste keypress');
                $linkBtn.off('click');
                if (deferred.state() === 'pending') {
                    deferred.reject();
                }
            });
            _this.ui.showDialog(_this.$dialog);
        }).promise();
    };
    /**
     * @param {Object} layoutInfo
     */
    LinkDialog.prototype.show = function () {
        var _this = this;
        var linkInfo = this.context.invoke('editor.getLinkInfo');
        this.context.invoke('editor.saveRange');
        this.showLinkDialog(linkInfo).then(function (linkInfo) {
            _this.context.invoke('editor.restoreRange');
            _this.context.invoke('editor.createLink', linkInfo);
        }).fail(function () {
            _this.context.invoke('editor.restoreRange');
        });
    };
    return LinkDialog;
}());

var LinkPopover = /** @class */ (function () {
    function LinkPopover(context) {
        var _this = this;
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.options = context.options;
        this.events = {
            'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function () {
                _this.update();
            },
            'summernote.disable summernote.dialog.shown': function () {
                _this.hide();
            }
        };
    }
    LinkPopover.prototype.shouldInitialize = function () {
        return !lists.isEmpty(this.options.popover.link);
    };
    LinkPopover.prototype.initialize = function () {
        this.$popover = this.ui.popover({
            className: 'note-link-popover',
            callback: function ($node) {
                var $content = $node.find('.popover-content,.note-popover-content');
                $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
            }
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find('.popover-content,.note-popover-content');
        this.context.invoke('buttons.build', $content, this.options.popover.link);
    };
    LinkPopover.prototype.destroy = function () {
        this.$popover.remove();
    };
    LinkPopover.prototype.update = function () {
        // Prevent focusing on editable when invoke('code') is executed
        if (!this.context.invoke('editor.hasFocus')) {
            this.hide();
            return;
        }
        var rng = this.context.invoke('editor.createRange');
        if (rng.isCollapsed() && rng.isOnAnchor()) {
            var anchor = dom.ancestor(rng.sc, dom.isAnchor);
            var href = $$1(anchor).attr('href');
            this.$popover.find('a').attr('href', href).html(href);
            var pos = dom.posFromPlaceholder(anchor);
            this.$popover.css({
                display: 'block',
                left: pos.left,
                top: pos.top
            });
        }
        else {
            this.hide();
        }
    };
    LinkPopover.prototype.hide = function () {
        this.$popover.hide();
    };
    return LinkPopover;
}());

var ImageDialog = /** @class */ (function () {
    function ImageDialog(context) {
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.$body = $$1(document.body);
        this.$editor = context.layoutInfo.editor;
        this.options = context.options;
        this.lang = this.options.langInfo;
    }
    ImageDialog.prototype.initialize = function () {
        var $container = this.options.dialogsInBody ? this.$body : this.$editor;
        var imageLimitation = '';
        if (this.options.maximumImageFileSize) {
            var unit = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024));
            var readableSize = (this.options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +
                ' ' + ' KMGTP'[unit] + 'B';
            imageLimitation = "<small>" + (this.lang.image.maximumFileSize + ' : ' + readableSize) + "</small>";
        }
        var body = [
            '<div class="form-group note-form-group note-group-select-from-files">',
            '<label class="note-form-label">' + this.lang.image.selectFromFiles + '</label>',
            '<input class="note-image-input note-form-control note-input" ',
            ' type="file" name="files" accept="image/*" multiple="multiple" />',
            imageLimitation,
            '</div>',
            '<div class="form-group note-group-image-url" style="overflow:auto;">',
            '<label class="note-form-label">' + this.lang.image.url + '</label>',
            '<input class="note-image-url form-control note-form-control note-input ',
            ' col-md-12" type="text" />',
            '</div>'
        ].join('');
        var buttonClass = 'btn btn-primary note-btn note-btn-primary note-image-btn';
        var footer = "<button type=\"submit\" href=\"#\" class=\"" + buttonClass + "\" disabled>" + this.lang.image.insert + "</button>";
        this.$dialog = this.ui.dialog({
            title: this.lang.image.insert,
            fade: this.options.dialogsFade,
            body: body,
            footer: footer
        }).render().appendTo($container);
    };
    ImageDialog.prototype.destroy = function () {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
    };
    ImageDialog.prototype.bindEnterKey = function ($input, $btn) {
        $input.on('keypress', function (event) {
            if (event.keyCode === key.code.ENTER) {
                event.preventDefault();
                $btn.trigger('click');
            }
        });
    };
    ImageDialog.prototype.show = function () {
        var _this = this;
        this.context.invoke('editor.saveRange');
        this.showImageDialog().then(function (data) {
            // [workaround] hide dialog before restore range for IE range focus
            _this.ui.hideDialog(_this.$dialog);
            _this.context.invoke('editor.restoreRange');
            if (typeof data === 'string') {
                _this.context.invoke('editor.insertImage', data);
            }
            else {
                _this.context.invoke('editor.insertImagesOrCallback', data);
            }
        }).fail(function () {
            _this.context.invoke('editor.restoreRange');
        });
    };
    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */
    ImageDialog.prototype.showImageDialog = function () {
        var _this = this;
        return $$1.Deferred(function (deferred) {
            var $imageInput = _this.$dialog.find('.note-image-input');
            var $imageUrl = _this.$dialog.find('.note-image-url');
            var $imageBtn = _this.$dialog.find('.note-image-btn');
            _this.ui.onDialogShown(_this.$dialog, function () {
                _this.context.triggerEvent('dialog.shown');
                // Cloning imageInput to clear element.
                $imageInput.replaceWith($imageInput.clone().on('change', function (event) {
                    deferred.resolve(event.target.files || event.target.value);
                }).val(''));
                $imageBtn.click(function (event) {
                    event.preventDefault();
                    deferred.resolve($imageUrl.val());
                });
                $imageUrl.on('keyup paste', function () {
                    var url = $imageUrl.val();
                    _this.ui.toggleBtn($imageBtn, url);
                }).val('');
                if (!env.isSupportTouch) {
                    $imageUrl.trigger('focus');
                }
                _this.bindEnterKey($imageUrl, $imageBtn);
            });
            _this.ui.onDialogHidden(_this.$dialog, function () {
                $imageInput.off('change');
                $imageUrl.off('keyup paste keypress');
                $imageBtn.off('click');
                if (deferred.state() === 'pending') {
                    deferred.reject();
                }
            });
            _this.ui.showDialog(_this.$dialog);
        });
    };
    return ImageDialog;
}());

/**
 * Image popover module
 *  mouse events that show/hide popover will be handled by Handle.js.
 *  Handle.js will receive the events and invoke 'imagePopover.update'.
 */
var ImagePopover = /** @class */ (function () {
    function ImagePopover(context) {
        var _this = this;
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.editable = context.layoutInfo.editable[0];
        this.options = context.options;
        this.events = {
            'summernote.disable': function () {
                _this.hide();
            }
        };
    }
    ImagePopover.prototype.shouldInitialize = function () {
        return !lists.isEmpty(this.options.popover.image);
    };
    ImagePopover.prototype.initialize = function () {
        this.$popover = this.ui.popover({
            className: 'note-image-popover'
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find('.popover-content,.note-popover-content');
        this.context.invoke('buttons.build', $content, this.options.popover.image);
    };
    ImagePopover.prototype.destroy = function () {
        this.$popover.remove();
    };
    ImagePopover.prototype.update = function (target) {
        if (dom.isImg(target)) {
            var pos = dom.posFromPlaceholder(target);
            var posEditor = dom.posFromPlaceholder(this.editable);
            this.$popover.css({
                display: 'block',
                left: this.options.popatmouse ? event.pageX - 20 : pos.left,
                top: this.options.popatmouse ? event.pageY : Math.min(pos.top, posEditor.top)
            });
        }
        else {
            this.hide();
        }
    };
    ImagePopover.prototype.hide = function () {
        this.$popover.hide();
    };
    return ImagePopover;
}());

var TablePopover = /** @class */ (function () {
    function TablePopover(context) {
        var _this = this;
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.options = context.options;
        this.events = {
            'summernote.mousedown': function (we, e) {
                _this.update(e.target);
            },
            'summernote.keyup summernote.scroll summernote.change': function () {
                _this.update();
            },
            'summernote.disable': function () {
                _this.hide();
            }
        };
    }
    TablePopover.prototype.shouldInitialize = function () {
        return !lists.isEmpty(this.options.popover.table);
    };
    TablePopover.prototype.initialize = function () {
        this.$popover = this.ui.popover({
            className: 'note-table-popover'
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find('.popover-content,.note-popover-content');
        this.context.invoke('buttons.build', $content, this.options.popover.table);
        // [workaround] Disable Firefox's default table editor
        if (env.isFF) {
            document.execCommand('enableInlineTableEditing', false, false);
        }
    };
    TablePopover.prototype.destroy = function () {
        this.$popover.remove();
    };
    TablePopover.prototype.update = function (target) {
        if (this.context.isDisabled()) {
            return false;
        }
        var isCell = dom.isCell(target);
        if (isCell) {
            var pos = dom.posFromPlaceholder(target);
            this.$popover.css({
                display: 'block',
                left: pos.left,
                top: pos.top
            });
        }
        else {
            this.hide();
        }
        return isCell;
    };
    TablePopover.prototype.hide = function () {
        this.$popover.hide();
    };
    return TablePopover;
}());

var VideoDialog = /** @class */ (function () {
    function VideoDialog(context) {
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.$body = $$1(document.body);
        this.$editor = context.layoutInfo.editor;
        this.options = context.options;
        this.lang = this.options.langInfo;
    }
    VideoDialog.prototype.initialize = function () {
        var $container = this.options.dialogsInBody ? this.$body : this.$editor;
        var body = [
            '<div class="form-group note-form-group row-fluid">',
            "<label class=\"note-form-label\">" + this.lang.video.url + " <small class=\"text-muted\">" + this.lang.video.providers + "</small></label>",
            '<input class="note-video-url form-control note-form-control note-input" type="text" />',
            '</div>'
        ].join('');
        var buttonClass = 'btn btn-primary note-btn note-btn-primary note-video-btn';
        var footer = "<button type=\"submit\" href=\"#\" class=\"" + buttonClass + "\" disabled>" + this.lang.video.insert + "</button>";
        this.$dialog = this.ui.dialog({
            title: this.lang.video.insert,
            fade: this.options.dialogsFade,
            body: body,
            footer: footer
        }).render().appendTo($container);
    };
    VideoDialog.prototype.destroy = function () {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
    };
    VideoDialog.prototype.bindEnterKey = function ($input, $btn) {
        $input.on('keypress', function (event) {
            if (event.keyCode === key.code.ENTER) {
                event.preventDefault();
                $btn.trigger('click');
            }
        });
    };
    VideoDialog.prototype.createVideoNode = function (url) {
        // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
        var ytRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        var ytMatch = url.match(ytRegExp);
        var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
        var igMatch = url.match(igRegExp);
        var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
        var vMatch = url.match(vRegExp);
        var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
        var vimMatch = url.match(vimRegExp);
        var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
        var dmMatch = url.match(dmRegExp);
        var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
        var youkuMatch = url.match(youkuRegExp);
        var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
        var qqMatch = url.match(qqRegExp);
        var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
        var qqMatch2 = url.match(qqRegExp2);
        var mp4RegExp = /^.+.(mp4|m4v)$/;
        var mp4Match = url.match(mp4RegExp);
        var oggRegExp = /^.+.(ogg|ogv)$/;
        var oggMatch = url.match(oggRegExp);
        var webmRegExp = /^.+.(webm)$/;
        var webmMatch = url.match(webmRegExp);
        var $video;
        if (ytMatch && ytMatch[1].length === 11) {
            var youtubeId = ytMatch[1];
            $video = $$1('<iframe>')
                .attr('frameborder', 0)
                .attr('src', '//www.youtube.com/embed/' + youtubeId)
                .attr('width', '640').attr('height', '360');
        }
        else if (igMatch && igMatch[0].length) {
            $video = $$1('<iframe>')
                .attr('frameborder', 0)
                .attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/')
                .attr('width', '612').attr('height', '710')
                .attr('scrolling', 'no')
                .attr('allowtransparency', 'true');
        }
        else if (vMatch && vMatch[0].length) {
            $video = $$1('<iframe>')
                .attr('frameborder', 0)
                .attr('src', vMatch[0] + '/embed/simple')
                .attr('width', '600').attr('height', '600')
                .attr('class', 'vine-embed');
        }
        else if (vimMatch && vimMatch[3].length) {
            $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                .attr('frameborder', 0)
                .attr('src', '//player.vimeo.com/video/' + vimMatch[3])
                .attr('width', '640').attr('height', '360');
        }
        else if (dmMatch && dmMatch[2].length) {
            $video = $$1('<iframe>')
                .attr('frameborder', 0)
                .attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2])
                .attr('width', '640').attr('height', '360');
        }
        else if (youkuMatch && youkuMatch[1].length) {
            $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                .attr('frameborder', 0)
                .attr('height', '498')
                .attr('width', '510')
                .attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
        }
        else if ((qqMatch && qqMatch[1].length) || (qqMatch2 && qqMatch2[2].length)) {
            var vid = ((qqMatch && qqMatch[1].length) ? qqMatch[1] : qqMatch2[2]);
            $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                .attr('frameborder', 0)
                .attr('height', '310')
                .attr('width', '500')
                .attr('src', 'http://v.qq.com/iframe/player.html?vid=' + vid + '&amp;auto=0');
        }
        else if (mp4Match || oggMatch || webmMatch) {
            $video = $$1('<video controls>')
                .attr('src', url)
                .attr('width', '640').attr('height', '360');
        }
        else {
            // this is not a known video link. Now what, Cat? Now what?
            return false;
        }
        $video.addClass('note-video-clip');
        return $video[0];
    };
    VideoDialog.prototype.show = function () {
        var _this = this;
        var text = this.context.invoke('editor.getSelectedText');
        this.context.invoke('editor.saveRange');
        this.showVideoDialog(text).then(function (url) {
            // [workaround] hide dialog before restore range for IE range focus
            _this.ui.hideDialog(_this.$dialog);
            _this.context.invoke('editor.restoreRange');
            // build node
            var $node = _this.createVideoNode(url);
            if ($node) {
                // insert video node
                _this.context.invoke('editor.insertNode', $node);
            }
        }).fail(function () {
            _this.context.invoke('editor.restoreRange');
        });
    };
    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */
    VideoDialog.prototype.showVideoDialog = function (text) {
        var _this = this;
        return $$1.Deferred(function (deferred) {
            var $videoUrl = _this.$dialog.find('.note-video-url');
            var $videoBtn = _this.$dialog.find('.note-video-btn');
            _this.ui.onDialogShown(_this.$dialog, function () {
                _this.context.triggerEvent('dialog.shown');
                $videoUrl.val(text).on('input', function () {
                    _this.ui.toggleBtn($videoBtn, $videoUrl.val());
                });
                if (!env.isSupportTouch) {
                    $videoUrl.trigger('focus');
                }
                $videoBtn.click(function (event) {
                    event.preventDefault();
                    deferred.resolve($videoUrl.val());
                });
                _this.bindEnterKey($videoUrl, $videoBtn);
            });
            _this.ui.onDialogHidden(_this.$dialog, function () {
                $videoUrl.off('input');
                $videoBtn.off('click');
                if (deferred.state() === 'pending') {
                    deferred.reject();
                }
            });
            _this.ui.showDialog(_this.$dialog);
        });
    };
    return VideoDialog;
}());

var HelpDialog = /** @class */ (function () {
    function HelpDialog(context) {
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.$body = $$1(document.body);
        this.$editor = context.layoutInfo.editor;
        this.options = context.options;
        this.lang = this.options.langInfo;
    }
    HelpDialog.prototype.initialize = function () {
        var $container = this.options.dialogsInBody ? this.$body : this.$editor;
        var body = [
            '<p class="text-center">',
            '<a href="http://summernote.org/" target="_blank">Summernote 0.8.9</a> · ',
            '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ',
            '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',
            '</p>'
        ].join('');
        this.$dialog = this.ui.dialog({
            title: this.lang.options.help,
            fade: this.options.dialogsFade,
            body: this.createShortcutList(),
            footer: body,
            callback: function ($node) {
                $node.find('.modal-body,.note-modal-body').css({
                    'max-height': 300,
                    'overflow': 'scroll'
                });
            }
        }).render().appendTo($container);
    };
    HelpDialog.prototype.destroy = function () {
        this.ui.hideDialog(this.$dialog);
        this.$dialog.remove();
    };
    HelpDialog.prototype.createShortcutList = function () {
        var _this = this;
        var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
        return Object.keys(keyMap).map(function (key) {
            var command = keyMap[key];
            var $row = $$1('<div><div class="help-list-item"/></div>');
            $row.append($$1('<label><kbd>' + key + '</kdb></label>').css({
                'width': 180,
                'margin-right': 10
            })).append($$1('<span/>').html(_this.context.memo('help.' + command) || command));
            return $row.html();
        }).join('');
    };
    /**
     * show help dialog
     *
     * @return {Promise}
     */
    HelpDialog.prototype.showHelpDialog = function () {
        var _this = this;
        return $$1.Deferred(function (deferred) {
            _this.ui.onDialogShown(_this.$dialog, function () {
                _this.context.triggerEvent('dialog.shown');
                deferred.resolve();
            });
            _this.ui.showDialog(_this.$dialog);
        }).promise();
    };
    HelpDialog.prototype.show = function () {
        var _this = this;
        this.context.invoke('editor.saveRange');
        this.showHelpDialog().then(function () {
            _this.context.invoke('editor.restoreRange');
        });
    };
    return HelpDialog;
}());

var AIR_MODE_POPOVER_X_OFFSET = 20;
var AirPopover = /** @class */ (function () {
    function AirPopover(context) {
        var _this = this;
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.options = context.options;
        this.events = {
            'summernote.keyup summernote.mouseup summernote.scroll': function () {
                _this.update();
            },
            'summernote.disable summernote.change summernote.dialog.shown': function () {
                _this.hide();
            },
            'summernote.focusout': function (we, e) {
                // [workaround] Firefox doesn't support relatedTarget on focusout
                //  - Ignore hide action on focus out in FF.
                if (env.isFF) {
                    return;
                }
                if (!e.relatedTarget || !dom.ancestor(e.relatedTarget, func.eq(_this.$popover[0]))) {
                    _this.hide();
                }
            }
        };
    }
    AirPopover.prototype.shouldInitialize = function () {
        return this.options.airMode && !lists.isEmpty(this.options.popover.air);
    };
    AirPopover.prototype.initialize = function () {
        this.$popover = this.ui.popover({
            className: 'note-air-popover'
        }).render().appendTo(this.options.container);
        var $content = this.$popover.find('.popover-content');
        this.context.invoke('buttons.build', $content, this.options.popover.air);
    };
    AirPopover.prototype.destroy = function () {
        this.$popover.remove();
    };
    AirPopover.prototype.update = function () {
        var styleInfo = this.context.invoke('editor.currentStyle');
        if (styleInfo.range && !styleInfo.range.isCollapsed()) {
            var rect = lists.last(styleInfo.range.getClientRects());
            if (rect) {
                var bnd = func.rect2bnd(rect);
                this.$popover.css({
                    display: 'block',
                    left: Math.max(bnd.left + bnd.width / 2, 0) - AIR_MODE_POPOVER_X_OFFSET,
                    top: bnd.top + bnd.height
                });
                this.context.invoke('buttons.updateCurrentStyle', this.$popover);
            }
        }
        else {
            this.hide();
        }
    };
    AirPopover.prototype.hide = function () {
        this.$popover.hide();
    };
    return AirPopover;
}());

var POPOVER_DIST = 5;
var HintPopover = /** @class */ (function () {
    function HintPopover(context) {
        var _this = this;
        this.context = context;
        this.ui = $$1.summernote.ui;
        this.$editable = context.layoutInfo.editable;
        this.options = context.options;
        this.hint = this.options.hint || [];
        this.direction = this.options.hintDirection || 'bottom';
        this.hints = $$1.isArray(this.hint) ? this.hint : [this.hint];
        this.events = {
            'summernote.keyup': function (we, e) {
                if (!e.isDefaultPrevented()) {
                    _this.handleKeyup(e);
                }
            },
            'summernote.keydown': function (we, e) {
                _this.handleKeydown(e);
            },
            'summernote.disable summernote.dialog.shown': function () {
                _this.hide();
            }
        };
    }
    HintPopover.prototype.shouldInitialize = function () {
        return this.hints.length > 0;
    };
    HintPopover.prototype.initialize = function () {
        var _this = this;
        this.lastWordRange = null;
        this.$popover = this.ui.popover({
            className: 'note-hint-popover',
            hideArrow: true,
            direction: ''
        }).render().appendTo(this.options.container);
        this.$popover.hide();
        this.$content = this.$popover.find('.popover-content,.note-popover-content');
        this.$content.on('click', '.note-hint-item', function () {
            _this.$content.find('.active').removeClass('active');
            $$1(_this).addClass('active');
            _this.replace();
        });
    };
    HintPopover.prototype.destroy = function () {
        this.$popover.remove();
    };
    HintPopover.prototype.selectItem = function ($item) {
        this.$content.find('.active').removeClass('active');
        $item.addClass('active');
        this.$content[0].scrollTop = $item[0].offsetTop - (this.$content.innerHeight() / 2);
    };
    HintPopover.prototype.moveDown = function () {
        var $current = this.$content.find('.note-hint-item.active');
        var $next = $current.next();
        if ($next.length) {
            this.selectItem($next);
        }
        else {
            var $nextGroup = $current.parent().next();
            if (!$nextGroup.length) {
                $nextGroup = this.$content.find('.note-hint-group').first();
            }
            this.selectItem($nextGroup.find('.note-hint-item').first());
        }
    };
    HintPopover.prototype.moveUp = function () {
        var $current = this.$content.find('.note-hint-item.active');
        var $prev = $current.prev();
        if ($prev.length) {
            this.selectItem($prev);
        }
        else {
            var $prevGroup = $current.parent().prev();
            if (!$prevGroup.length) {
                $prevGroup = this.$content.find('.note-hint-group').last();
            }
            this.selectItem($prevGroup.find('.note-hint-item').last());
        }
    };
    HintPopover.prototype.replace = function () {
        var $item = this.$content.find('.note-hint-item.active');
        if ($item.length) {
            var node = this.nodeFromItem($item);
            // XXX: consider to move codes to editor for recording redo/undo.
            this.lastWordRange.insertNode(node);
            range.createFromNode(node).collapse().select();
            this.lastWordRange = null;
            this.hide();
            this.context.triggerEvent('change', this.$editable.html(), this.$editable[0]);
            this.context.invoke('editor.focus');
        }
    };
    HintPopover.prototype.nodeFromItem = function ($item) {
        var hint = this.hints[$item.data('index')];
        var item = $item.data('item');
        var node = hint.content ? hint.content(item) : item;
        if (typeof node === 'string') {
            node = dom.createText(node);
        }
        return node;
    };
    HintPopover.prototype.createItemTemplates = function (hintIdx, items) {
        var hint = this.hints[hintIdx];
        return items.map(function (item, idx) {
            var $item = $$1('<div class="note-hint-item"/>');
            $item.append(hint.template ? hint.template(item) : item + '');
            $item.data({
                'index': hintIdx,
                'item': item
            });
            return $item;
        });
    };
    HintPopover.prototype.handleKeydown = function (e) {
        if (!this.$popover.is(':visible')) {
            return;
        }
        if (e.keyCode === key.code.ENTER) {
            e.preventDefault();
            this.replace();
        }
        else if (e.keyCode === key.code.UP) {
            e.preventDefault();
            this.moveUp();
        }
        else if (e.keyCode === key.code.DOWN) {
            e.preventDefault();
            this.moveDown();
        }
    };
    HintPopover.prototype.searchKeyword = function (index, keyword, callback) {
        var hint = this.hints[index];
        if (hint && hint.match.test(keyword) && hint.search) {
            var matches = hint.match.exec(keyword);
            hint.search(matches[1], callback);
        }
        else {
            callback();
        }
    };
    HintPopover.prototype.createGroup = function (idx, keyword) {
        var _this = this;
        var $group = $$1('<div class="note-hint-group note-hint-group-' + idx + '"/>');
        this.searchKeyword(idx, keyword, function (items) {
            items = items || [];
            if (items.length) {
                $group.html(_this.createItemTemplates(idx, items));
                _this.show();
            }
        });
        return $group;
    };
    HintPopover.prototype.handleKeyup = function (e) {
        var _this = this;
        if (!lists.contains([key.code.ENTER, key.code.UP, key.code.DOWN], e.keyCode)) {
            var wordRange = this.context.invoke('editor.createRange').getWordRange();
            var keyword_1 = wordRange.toString();
            if (this.hints.length && keyword_1) {
                this.$content.empty();
                var bnd = func.rect2bnd(lists.last(wordRange.getClientRects()));
                if (bnd) {
                    this.$popover.hide();
                    this.lastWordRange = wordRange;
                    this.hints.forEach(function (hint, idx) {
                        if (hint.match.test(keyword_1)) {
                            _this.createGroup(idx, keyword_1).appendTo(_this.$content);
                        }
                    });
                    // select first .note-hint-item
                    this.$content.find('.note-hint-item:first').addClass('active');
                    // set position for popover after group is created
                    if (this.direction === 'top') {
                        this.$popover.css({
                            left: bnd.left,
                            top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
                        });
                    }
                    else {
                        this.$popover.css({
                            left: bnd.left,
                            top: bnd.top + bnd.height + POPOVER_DIST
                        });
                    }
                }
            }
            else {
                this.hide();
            }
        }
    };
    HintPopover.prototype.show = function () {
        this.$popover.show();
    };
    HintPopover.prototype.hide = function () {
        this.$popover.hide();
    };
    return HintPopover;
}());

var Context = /** @class */ (function () {
    /**
     * @param {jQuery} $note
     * @param {Object} options
     */
    function Context($note, options) {
        this.ui = $$1.summernote.ui;
        this.$note = $note;
        this.memos = {};
        this.modules = {};
        this.layoutInfo = {};
        this.options = options;
        this.initialize();
    }
    /**
     * create layout and initialize modules and other resources
     */
    Context.prototype.initialize = function () {
        this.layoutInfo = this.ui.createLayout(this.$note, this.options);
        this._initialize();
        this.$note.hide();
        return this;
    };
    /**
     * destroy modules and other resources and remove layout
     */
    Context.prototype.destroy = function () {
        this._destroy();
        this.$note.removeData('summernote');
        this.ui.removeLayout(this.$note, this.layoutInfo);
    };
    /**
     * destory modules and other resources and initialize it again
     */
    Context.prototype.reset = function () {
        var disabled = this.isDisabled();
        this.code(dom.emptyPara);
        this._destroy();
        this._initialize();
        if (disabled) {
            this.disable();
        }
    };
    Context.prototype._initialize = function () {
        var _this = this;
        // add optional buttons
        var buttons = $$1.extend({}, this.options.buttons);
        Object.keys(buttons).forEach(function (key) {
            _this.memo('button.' + key, buttons[key]);
        });
        var modules = $$1.extend({}, this.options.modules, $$1.summernote.plugins || {});
        // add and initialize modules
        Object.keys(modules).forEach(function (key) {
            _this.module(key, modules[key], true);
        });
        Object.keys(this.modules).forEach(function (key) {
            _this.initializeModule(key);
        });
    };
    Context.prototype._destroy = function () {
        var _this = this;
        // destroy modules with reversed order
        Object.keys(this.modules).reverse().forEach(function (key) {
            _this.removeModule(key);
        });
        Object.keys(this.memos).forEach(function (key) {
            _this.removeMemo(key);
        });
        // trigger custom onDestroy callback
        this.triggerEvent('destroy', this);
    };
    Context.prototype.code = function (html) {
        var isActivated = this.invoke('codeview.isActivated');
        if (html === undefined) {
            this.invoke('codeview.sync');
            return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
        }
        else {
            if (isActivated) {
                this.layoutInfo.codable.val(html);
            }
            else {
                this.layoutInfo.editable.html(html);
            }
            this.$note.val(html);
            this.triggerEvent('change', html);
        }
    };
    Context.prototype.isDisabled = function () {
        return this.layoutInfo.editable.attr('contenteditable') === 'false';
    };
    Context.prototype.enable = function () {
        this.layoutInfo.editable.attr('contenteditable', true);
        this.invoke('toolbar.activate', true);
        this.triggerEvent('disable', false);
    };
    Context.prototype.disable = function () {
        // close codeview if codeview is opend
        if (this.invoke('codeview.isActivated')) {
            this.invoke('codeview.deactivate');
        }
        this.layoutInfo.editable.attr('contenteditable', false);
        this.invoke('toolbar.deactivate', true);
        this.triggerEvent('disable', true);
    };
    Context.prototype.triggerEvent = function () {
        var namespace = lists.head(arguments);
        var args = lists.tail(lists.from(arguments));
        var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];
        if (callback) {
            callback.apply(this.$note[0], args);
        }
        this.$note.trigger('summernote.' + namespace, args);
    };
    Context.prototype.initializeModule = function (key) {
        var module = this.modules[key];
        module.shouldInitialize = module.shouldInitialize || func.ok;
        if (!module.shouldInitialize()) {
            return;
        }
        // initialize module
        if (module.initialize) {
            module.initialize();
        }
        // attach events
        if (module.events) {
            dom.attachEvents(this.$note, module.events);
        }
    };
    Context.prototype.module = function (key, ModuleClass, withoutIntialize) {
        if (arguments.length === 1) {
            return this.modules[key];
        }
        this.modules[key] = new ModuleClass(this);
        if (!withoutIntialize) {
            this.initializeModule(key);
        }
    };
    Context.prototype.removeModule = function (key) {
        var module = this.modules[key];
        if (module.shouldInitialize()) {
            if (module.events) {
                dom.detachEvents(this.$note, module.events);
            }
            if (module.destroy) {
                module.destroy();
            }
        }
        delete this.modules[key];
    };
    Context.prototype.memo = function (key, obj) {
        if (arguments.length === 1) {
            return this.memos[key];
        }
        this.memos[key] = obj;
    };
    Context.prototype.removeMemo = function (key) {
        if (this.memos[key] && this.memos[key].destroy) {
            this.memos[key].destroy();
        }
        delete this.memos[key];
    };
    /**
     * Some buttons need to change their visual style immediately once they get pressed
     */
    Context.prototype.createInvokeHandlerAndUpdateState = function (namespace, value) {
        var _this = this;
        return function (event) {
            _this.createInvokeHandler(namespace, value)(event);
            _this.invoke('buttons.updateCurrentStyle');
        };
    };
    Context.prototype.createInvokeHandler = function (namespace, value) {
        var _this = this;
        return function (event) {
            event.preventDefault();
            var $target = $$1(event.target);
            _this.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
        };
    };
    Context.prototype.invoke = function () {
        var namespace = lists.head(arguments);
        var args = lists.tail(lists.from(arguments));
        var splits = namespace.split('.');
        var hasSeparator = splits.length > 1;
        var moduleName = hasSeparator && lists.head(splits);
        var methodName = hasSeparator ? lists.last(splits) : lists.head(splits);
        var module = this.modules[moduleName || 'editor'];
        if (!moduleName && this[methodName]) {
            return this[methodName].apply(this, args);
        }
        else if (module && module[methodName] && module.shouldInitialize()) {
            return module[methodName].apply(module, args);
        }
    };
    return Context;
}());

$$1.fn.extend({
    /**
     * Summernote API
     *
     * @param {Object|String}
     * @return {this}
     */
    summernote: function () {
        var type = $$1.type(lists.head(arguments));
        var isExternalAPICalled = type === 'string';
        var hasInitOptions = type === 'object';
        var options = $$1.extend({}, $$1.summernote.options, hasInitOptions ? lists.head(arguments) : {});
        // Update options
        options.langInfo = $$1.extend(true, {}, $$1.summernote.lang['en-US'], $$1.summernote.lang[options.lang]);
        options.icons = $$1.extend(true, {}, $$1.summernote.options.icons, options.icons);
        options.tooltip = options.tooltip === 'auto' ? !env.isSupportTouch : options.tooltip;
        this.each(function (idx, note) {
            var $note = $$1(note);
            if (!$note.data('summernote')) {
                var context = new Context($note, options);
                $note.data('summernote', context);
                $note.data('summernote').triggerEvent('init', context.layoutInfo);
            }
        });
        var $note = this.first();
        if ($note.length) {
            var context = $note.data('summernote');
            if (isExternalAPICalled) {
                return context.invoke.apply(context, lists.from(arguments));
            }
            else if (options.focus) {
                context.invoke('editor.focus');
            }
        }
        return this;
    }
});

$$1.summernote = $$1.extend($$1.summernote, {
    version: '0.8.9',
    ui: ui,
    plugins: {},
    options: {
        modules: {
            'editor': Editor,
            'clipboard': Clipboard,
            'dropzone': Dropzone,
            'codeview': CodeView,
            'statusbar': Statusbar,
            'fullscreen': Fullscreen,
            'handle': Handle,
            // FIXME: HintPopover must be front of autolink
            //  - Script error about range when Enter key is pressed on hint popover
            'hintPopover': HintPopover,
            'autoLink': AutoLink,
            'autoSync': AutoSync,
            'placeholder': Placeholder,
            'buttons': Buttons,
            'toolbar': Toolbar,
            'linkDialog': LinkDialog,
            'linkPopover': LinkPopover,
            'imageDialog': ImageDialog,
            'imagePopover': ImagePopover,
            'tablePopover': TablePopover,
            'videoDialog': VideoDialog,
            'helpDialog': HelpDialog,
            'airPopover': AirPopover
        },
        buttons: {},
        lang: 'en-US',
        followingToolbar: true,
        otherStaticBar: '',
        // toolbar
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview', 'help']]
        ],
        // popover
        popatmouse: true,
        popover: {
            image: [
                ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
                ['float', ['floatLeft', 'floatRight', 'floatNone']],
                ['remove', ['removeMedia']]
            ],
            link: [
                ['link', ['linkDialogShow', 'unlink']]
            ],
            table: [
                ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
                ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
            ],
            air: [
                ['color', ['color']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['ul', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture']]
            ]
        },
        // air mode: inline editor
        airMode: false,
        width: null,
        height: null,
        focus: false,
        tabSize: 4,
        styleWithSpan: true,
        shortcuts: true,
        textareaAutoSync: true,
        hintDirection: 'bottom',
        tooltip: 'auto',
        container: 'body',
        maxTextLength: 0,
        styleTags: ['p', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        fontNames: [
            'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
            'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
            'Tahoma', 'Times New Roman', 'Verdana'
        ],
        fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],
        // pallete colors(n x n)
        colors: [
            ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
            ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
            ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
            ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
            ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
            ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
            ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
            ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
        ],
        lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],
        tableClassName: 'table table-bordered',
        insertTableMaxSize: {
            col: 10,
            row: 10
        },
        dialogsInBody: false,
        dialogsFade: false,
        maximumImageFileSize: null,
        callbacks: {
            onInit: null,
            onFocus: null,
            onBlur: null,
            onBlurCodeview: null,
            onEnter: null,
            onKeyup: null,
            onKeydown: null,
            onSubmit: null,
            onImageUpload: null,
            onImageUploadError: null
        },
        codemirror: {
            mode: 'text/html',
            htmlMode: true,
            lineNumbers: true
        },
        keyMap: {
            pc: {
                'ENTER': 'insertParagraph',
                'CTRL+Z': 'undo',
                'CTRL+Y': 'redo',
                'TAB': 'tab',
                'SHIFT+TAB': 'untab',
                'CTRL+B': 'bold',
                'CTRL+I': 'italic',
                'CTRL+U': 'underline',
                'CTRL+SHIFT+S': 'strikethrough',
                'CTRL+BACKSLASH': 'removeFormat',
                'CTRL+SHIFT+L': 'justifyLeft',
                'CTRL+SHIFT+E': 'justifyCenter',
                'CTRL+SHIFT+R': 'justifyRight',
                'CTRL+SHIFT+J': 'justifyFull',
                'CTRL+SHIFT+NUM7': 'insertUnorderedList',
                'CTRL+SHIFT+NUM8': 'insertOrderedList',
                'CTRL+LEFTBRACKET': 'outdent',
                'CTRL+RIGHTBRACKET': 'indent',
                'CTRL+NUM0': 'formatPara',
                'CTRL+NUM1': 'formatH1',
                'CTRL+NUM2': 'formatH2',
                'CTRL+NUM3': 'formatH3',
                'CTRL+NUM4': 'formatH4',
                'CTRL+NUM5': 'formatH5',
                'CTRL+NUM6': 'formatH6',
                'CTRL+ENTER': 'insertHorizontalRule',
                'CTRL+K': 'linkDialog.show'
            },
            mac: {
                'ENTER': 'insertParagraph',
                'CMD+Z': 'undo',
                'CMD+SHIFT+Z': 'redo',
                'TAB': 'tab',
                'SHIFT+TAB': 'untab',
                'CMD+B': 'bold',
                'CMD+I': 'italic',
                'CMD+U': 'underline',
                'CMD+SHIFT+S': 'strikethrough',
                'CMD+BACKSLASH': 'removeFormat',
                'CMD+SHIFT+L': 'justifyLeft',
                'CMD+SHIFT+E': 'justifyCenter',
                'CMD+SHIFT+R': 'justifyRight',
                'CMD+SHIFT+J': 'justifyFull',
                'CMD+SHIFT+NUM7': 'insertUnorderedList',
                'CMD+SHIFT+NUM8': 'insertOrderedList',
                'CMD+LEFTBRACKET': 'outdent',
                'CMD+RIGHTBRACKET': 'indent',
                'CMD+NUM0': 'formatPara',
                'CMD+NUM1': 'formatH1',
                'CMD+NUM2': 'formatH2',
                'CMD+NUM3': 'formatH3',
                'CMD+NUM4': 'formatH4',
                'CMD+NUM5': 'formatH5',
                'CMD+NUM6': 'formatH6',
                'CMD+ENTER': 'insertHorizontalRule',
                'CMD+K': 'linkDialog.show'
            }
        },
        icons: {
            'align': 'note-icon-align',
            'alignCenter': 'note-icon-align-center',
            'alignJustify': 'note-icon-align-justify',
            'alignLeft': 'note-icon-align-left',
            'alignRight': 'note-icon-align-right',
            'rowBelow': 'note-icon-row-below',
            'colBefore': 'note-icon-col-before',
            'colAfter': 'note-icon-col-after',
            'rowAbove': 'note-icon-row-above',
            'rowRemove': 'note-icon-row-remove',
            'colRemove': 'note-icon-col-remove',
            'indent': 'note-icon-align-indent',
            'outdent': 'note-icon-align-outdent',
            'arrowsAlt': 'note-icon-arrows-alt',
            'bold': 'note-icon-bold',
            'caret': 'note-icon-caret',
            'circle': 'note-icon-circle',
            'close': 'note-icon-close',
            'code': 'note-icon-code',
            'eraser': 'note-icon-eraser',
            'font': 'note-icon-font',
            'frame': 'note-icon-frame',
            'italic': 'note-icon-italic',
            'link': 'note-icon-link',
            'unlink': 'note-icon-chain-broken',
            'magic': 'note-icon-magic',
            'menuCheck': 'note-icon-menu-check',
            'minus': 'note-icon-minus',
            'orderedlist': 'note-icon-orderedlist',
            'pencil': 'note-icon-pencil',
            'picture': 'note-icon-picture',
            'question': 'note-icon-question',
            'redo': 'note-icon-redo',
            'square': 'note-icon-square',
            'strikethrough': 'note-icon-strikethrough',
            'subscript': 'note-icon-subscript',
            'superscript': 'note-icon-superscript',
            'table': 'note-icon-table',
            'textHeight': 'note-icon-text-height',
            'trash': 'note-icon-trash',
            'underline': 'note-icon-underline',
            'undo': 'note-icon-undo',
            'unorderedlist': 'note-icon-unorderedlist',
            'video': 'note-icon-video'
        }
    }
});

})));
//# sourceMappingURL=summernote-lite.js.map

/*
 * bootstrap-tagsinput v0.8.0
 * 
 */

(function ($) {
  "use strict";

  var defaultOptions = {
    tagClass: function(item) {
      return 'badge badge-info';
    },
    focusClass: 'focus',
    itemValue: function(item) {
      return item ? item.toString() : item;
    },
    itemText: function(item) {
      return this.itemValue(item);
    },
    itemTitle: function(item) {
      return null;
    },
    freeInput: true,
    addOnBlur: true,
    maxTags: undefined,
    maxChars: undefined,
    confirmKeys: [13, 44],
    delimiter: ',',
    delimiterRegex: null,
    cancelConfirmKeysOnEmpty: false,
    onTagExists: function(item, $tag) {
      $tag.hide().fadeIn();
    },
    trimValue: false,
    allowDuplicates: false,
    triggerChange: true
  };

  /**
   * Constructor function
   */
  function TagsInput(element, options) {
    this.isInit = true;
    this.itemsArray = [];

    this.$element = $(element);
    this.$element.hide();

    this.isSelect = (element.tagName === 'SELECT');
    this.multiple = (this.isSelect && element.hasAttribute('multiple'));
    this.objectItems = options && options.itemValue;
    this.placeholderText = element.hasAttribute('placeholder') ? this.$element.attr('placeholder') : '';
    this.inputSize = Math.max(1, this.placeholderText.length);

    this.$container = $('<div class="bootstrap-tagsinput"></div>');
    this.$input = $('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container);

    this.$element.before(this.$container);

    this.build(options);
    this.isInit = false;
  }

  TagsInput.prototype = {
    constructor: TagsInput,

    /**
     * Adds the given item as a new tag. Pass true to dontPushVal to prevent
     * updating the elements val()
     */
    add: function(item, dontPushVal, options) {
      var self = this;

      if (self.options.maxTags && self.itemsArray.length >= self.options.maxTags)
        return;

      // Ignore falsey values, except false
      if (item !== false && !item)
        return;

      // Trim value
      if (typeof item === "string" && self.options.trimValue) {
        item = $.trim(item);
      }

      // Throw an error when trying to add an object while the itemValue option was not set
      if (typeof item === "object" && !self.objectItems)
        throw("Can't add objects when itemValue option is not set");

      // Ignore strings only containg whitespace
      if (item.toString().match(/^\s*$/))
        return;

      // If SELECT but not multiple, remove current tag
      if (self.isSelect && !self.multiple && self.itemsArray.length > 0)
        self.remove(self.itemsArray[0]);

      if (typeof item === "string" && this.$element[0].tagName === 'INPUT') {
        var delimiter = (self.options.delimiterRegex) ? self.options.delimiterRegex : self.options.delimiter;
        var items = item.split(delimiter);
        if (items.length > 1) {
          for (var i = 0; i < items.length; i++) {
            this.add(items[i], true);
          }

          if (!dontPushVal)
            self.pushVal(self.options.triggerChange);
          return;
        }
      }

      var itemValue = self.options.itemValue(item),
          itemText = self.options.itemText(item),
          tagClass = self.options.tagClass(item),
          itemTitle = self.options.itemTitle(item);

      // Ignore items allready added
      var existing = $.grep(self.itemsArray, function(item) { return self.options.itemValue(item) === itemValue; } )[0];
      if (existing && !self.options.allowDuplicates) {
        // Invoke onTagExists
        if (self.options.onTagExists) {
          var $existingTag = $(".badge", self.$container).filter(function() { return $(this).data("item") === existing; });
          self.options.onTagExists(item, $existingTag);
        }
        return;
      }

      // if length greater than limit
      if (self.items().toString().length + item.length + 1 > self.options.maxInputLength)
        return;

      // raise beforeItemAdd arg
      var beforeItemAddEvent = $.Event('beforeItemAdd', { item: item, cancel: false, options: options});
      self.$element.trigger(beforeItemAddEvent);
      if (beforeItemAddEvent.cancel)
        return;

      // register item in internal array and map
      self.itemsArray.push(item);

      // add a tag element

      var $tag = $('<span class="badge ' + htmlEncode(tagClass) + (itemTitle !== null ? ('" title="' + itemTitle) : '') + '">' + htmlEncode(itemText) + '<span data-role="remove"></span></span>');
      $tag.data('item', item);
      self.findInputWrapper().before($tag);
      $tag.after(' ');

      // Check to see if the tag exists in its raw or uri-encoded form
      var optionExists = (
        $('option[value="' + encodeURIComponent(itemValue) + '"]', self.$element).length ||
        $('option[value="' + htmlEncode(itemValue) + '"]', self.$element).length
      );

      // add <option /> if item represents a value not present in one of the <select />'s options
      if (self.isSelect && !optionExists) {
        var $option = $('<option selected>' + htmlEncode(itemText) + '</option>');
        $option.data('item', item);
        $option.attr('value', itemValue);
        self.$element.append($option);
      }

      if (!dontPushVal)
        self.pushVal(self.options.triggerChange);

      // Add class when reached maxTags
      if (self.options.maxTags === self.itemsArray.length || self.items().toString().length === self.options.maxInputLength)
        self.$container.addClass('bootstrap-tagsinput-max');

      // If using typeahead, once the tag has been added, clear the typeahead value so it does not stick around in the input.
      if ($('.typeahead, .twitter-typeahead', self.$container).length) {
        self.$input.typeahead('val', '');
      }

      if (this.isInit) {
        self.$element.trigger($.Event('itemAddedOnInit', { item: item, options: options }));
      } else {
        self.$element.trigger($.Event('itemAdded', { item: item, options: options }));
      }
    },

    /**
     * Removes the given item. Pass true to dontPushVal to prevent updating the
     * elements val()
     */
    remove: function(item, dontPushVal, options) {
      var self = this;

      if (self.objectItems) {
        if (typeof item === "object")
          item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  self.options.itemValue(item); } );
        else
          item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  item; } );

        item = item[item.length-1];
      }

      if (item) {
        var beforeItemRemoveEvent = $.Event('beforeItemRemove', { item: item, cancel: false, options: options });
        self.$element.trigger(beforeItemRemoveEvent);
        if (beforeItemRemoveEvent.cancel)
          return;

        $('.badge', self.$container).filter(function() { return $(this).data('item') === item; }).remove();
        $('option', self.$element).filter(function() { return $(this).data('item') === item; }).remove();
        if($.inArray(item, self.itemsArray) !== -1)
          self.itemsArray.splice($.inArray(item, self.itemsArray), 1);
      }

      if (!dontPushVal)
        self.pushVal(self.options.triggerChange);

      // Remove class when reached maxTags
      if (self.options.maxTags > self.itemsArray.length)
        self.$container.removeClass('bootstrap-tagsinput-max');

      self.$element.trigger($.Event('itemRemoved',  { item: item, options: options }));
    },

    /**
     * Removes all items
     */
    removeAll: function() {
      var self = this;

      $('.badge', self.$container).remove();
      $('option', self.$element).remove();

      while(self.itemsArray.length > 0)
        self.itemsArray.pop();

      self.pushVal(self.options.triggerChange);
    },

    /**
     * Refreshes the tags so they match the text/value of their corresponding
     * item.
     */
    refresh: function() {
      var self = this;
      $('.badge', self.$container).each(function() {
        var $tag = $(this),
            item = $tag.data('item'),
            itemValue = self.options.itemValue(item),
            itemText = self.options.itemText(item),
            tagClass = self.options.tagClass(item);

          // Update tag's class and inner text
          $tag.attr('class', null);
          $tag.addClass('badge ' + htmlEncode(tagClass));
          $tag.contents().filter(function() {
            return this.nodeType == 3;
          })[0].nodeValue = htmlEncode(itemText);

          if (self.isSelect) {
            var option = $('option', self.$element).filter(function() { return $(this).data('item') === item; });
            option.attr('value', itemValue);
          }
      });
    },

    /**
     * Returns the items added as tags
     */
    items: function() {
      return this.itemsArray;
    },

    /**
     * Assembly value by retrieving the value of each item, and set it on the
     * element.
     */
    pushVal: function() {
      var self = this,
          val = $.map(self.items(), function(item) {
            return self.options.itemValue(item).toString();
          });

      self.$element.val(val, true);

      if (self.options.triggerChange)
        self.$element.trigger('change');
    },

    /**
     * Initializes the tags input behaviour on the element
     */
    build: function(options) {
      var self = this;

      self.options = $.extend({}, defaultOptions, options);
      // When itemValue is set, freeInput should always be false
      if (self.objectItems)
        self.options.freeInput = false;

      makeOptionItemFunction(self.options, 'itemValue');
      makeOptionItemFunction(self.options, 'itemText');
      makeOptionFunction(self.options, 'tagClass');

      // Typeahead Bootstrap version 2.3.2
      if (self.options.typeahead) {
        var typeahead = self.options.typeahead || {};

        makeOptionFunction(typeahead, 'source');

        self.$input.typeahead($.extend({}, typeahead, {
          source: function (query, process) {
            function processItems(items) {
              var texts = [];

              for (var i = 0; i < items.length; i++) {
                var text = self.options.itemText(items[i]);
                map[text] = items[i];
                texts.push(text);
              }
              process(texts);
            }

            this.map = {};
            var map = this.map,
                data = typeahead.source(query);

            if ($.isFunction(data.success)) {
              // support for Angular callbacks
              data.success(processItems);
            } else if ($.isFunction(data.then)) {
              // support for Angular promises
              data.then(processItems);
            } else {
              // support for functions and jquery promises
              $.when(data)
               .then(processItems);
            }
          },
          updater: function (text) {
            self.add(this.map[text]);
            return this.map[text];
          },
          matcher: function (text) {
            return (text.toLowerCase().indexOf(this.query.trim().toLowerCase()) !== -1);
          },
          sorter: function (texts) {
            return texts.sort();
          },
          highlighter: function (text) {
            var regex = new RegExp( '(' + this.query + ')', 'gi' );
            return text.replace( regex, "<strong>$1</strong>" );
          }
        }));
      }

      // typeahead.js
      if (self.options.typeaheadjs) {
        // Determine if main configurations were passed or simply a dataset
        var typeaheadjs = self.options.typeaheadjs;
        if (!$.isArray(typeaheadjs)) {
            typeaheadjs = [null, typeaheadjs];
        }

        $.fn.typeahead.apply(self.$input, typeaheadjs).on('typeahead:selected', $.proxy(function (obj, datum, name) {
          var index = 0;
          typeaheadjs.some(function(dataset, _index) {
            if (dataset.name === name) {
              index = _index;
              return true;
            }
            return false;
          });

          // @TODO Dep: https://github.com/corejavascript/typeahead.js/issues/89
          if (typeaheadjs[index].valueKey) {
            self.add(datum[typeaheadjs[index].valueKey]);
          } else {
            self.add(datum);
          }

          self.$input.typeahead('val', '');
        }, self));
      }

      self.$container.on('click', $.proxy(function(event) {
        if (! self.$element.attr('disabled')) {
          self.$input.removeAttr('disabled');
        }
        self.$input.focus();
      }, self));

        if (self.options.addOnBlur && self.options.freeInput) {
          self.$input.on('focusout', $.proxy(function(event) {
              // HACK: only process on focusout when no typeahead opened, to
              //       avoid adding the typeahead text as tag
              if ($('.typeahead, .twitter-typeahead', self.$container).length === 0) {
                self.add(self.$input.val());
                self.$input.val('');
              }
          }, self));
        }

      // Toggle the 'focus' css class on the container when it has focus
      self.$container.on({
        focusin: function() {
          self.$container.addClass(self.options.focusClass);
        },
        focusout: function() {
          self.$container.removeClass(self.options.focusClass);
        },
      });

      self.$container.on('keydown', 'input', $.proxy(function(event) {
        var $input = $(event.target),
            $inputWrapper = self.findInputWrapper();

        if (self.$element.attr('disabled')) {
          self.$input.attr('disabled', 'disabled');
          return;
        }

        switch (event.which) {
          // BACKSPACE
          case 8:
            if (doGetCaretPosition($input[0]) === 0) {
              var prev = $inputWrapper.prev();
              if (prev.length) {
                self.remove(prev.data('item'));
              }
            }
            break;

          // DELETE
          case 46:
            if (doGetCaretPosition($input[0]) === 0) {
              var next = $inputWrapper.next();
              if (next.length) {
                self.remove(next.data('item'));
              }
            }
            break;

          // LEFT ARROW
          case 37:
            // Try to move the input before the previous tag
            var $prevTag = $inputWrapper.prev();
            if ($input.val().length === 0 && $prevTag[0]) {
              $prevTag.before($inputWrapper);
              $input.focus();
            }
            break;
          // RIGHT ARROW
          case 39:
            // Try to move the input after the next tag
            var $nextTag = $inputWrapper.next();
            if ($input.val().length === 0 && $nextTag[0]) {
              $nextTag.after($inputWrapper);
              $input.focus();
            }
            break;
         default:
             // ignore
         }

        // Reset internal input's size
        var textLength = $input.val().length,
            wordSpace = Math.ceil(textLength / 5),
            size = textLength + wordSpace + 1;
        $input.attr('size', Math.max(this.inputSize, size));
      }, self));

      self.$container.on('keypress', 'input', $.proxy(function(event) {
         var $input = $(event.target);

         if (self.$element.attr('disabled')) {
            self.$input.attr('disabled', 'disabled');
            return;
         }

         var text = $input.val(),
         maxLengthReached = self.options.maxChars && text.length >= self.options.maxChars;
         if (self.options.freeInput && (keyCombinationInList(event, self.options.confirmKeys) || maxLengthReached)) {
            // Only attempt to add a tag if there is data in the field
            if (text.length !== 0) {
               self.add(maxLengthReached ? text.substr(0, self.options.maxChars) : text);
               $input.val('');
            }

            // If the field is empty, let the event triggered fire as usual
            if (self.options.cancelConfirmKeysOnEmpty === false) {
                event.preventDefault();
            }
         }

         // Reset internal input's size
         var textLength = $input.val().length,
            wordSpace = Math.ceil(textLength / 5),
            size = textLength + wordSpace + 1;
         $input.attr('size', Math.max(this.inputSize, size));
      }, self));

      // Remove icon clicked
      self.$container.on('click', '[data-role=remove]', $.proxy(function(event) {
        if (self.$element.attr('disabled')) {
          return;
        }
        self.remove($(event.target).closest('.badge').data('item'));
      }, self));

      // Only add existing value as tags when using strings as tags
      if (self.options.itemValue === defaultOptions.itemValue) {
        if (self.$element[0].tagName === 'INPUT') {
            self.add(self.$element.val());
        } else {
          $('option', self.$element).each(function() {
            self.add($(this).attr('value'), true);
          });
        }
      }
    },

    /**
     * Removes all tagsinput behaviour and unregsiter all event handlers
     */
    destroy: function() {
      var self = this;

      // Unbind events
      self.$container.off('keypress', 'input');
      self.$container.off('click', '[role=remove]');

      self.$container.remove();
      self.$element.removeData('tagsinput');
      self.$element.show();
    },

    /**
     * Sets focus on the tagsinput
     */
    focus: function() {
      this.$input.focus();
    },

    /**
     * Returns the internal input element
     */
    input: function() {
      return this.$input;
    },

    /**
     * Returns the element which is wrapped around the internal input. This
     * is normally the $container, but typeahead.js moves the $input element.
     */
    findInputWrapper: function() {
      var elt = this.$input[0],
          container = this.$container[0];
      while(elt && elt.parentNode !== container)
        elt = elt.parentNode;

      return $(elt);
    }
  };

  /**
   * Register JQuery plugin
   */
  $.fn.tagsinput = function(arg1, arg2, arg3) {
    var results = [];

    this.each(function() {
      var tagsinput = $(this).data('tagsinput');
      // Initialize a new tags input
      if (!tagsinput) {
          tagsinput = new TagsInput(this, arg1);
          $(this).data('tagsinput', tagsinput);
          results.push(tagsinput);

          if (this.tagName === 'SELECT') {
              $('option', $(this)).attr('selected', 'selected');
          }

          // Init tags from $(this).val()
          $(this).val($(this).val());
      } else if (!arg1 && !arg2) {
          // tagsinput already exists
          // no function, trying to init
          results.push(tagsinput);
      } else if(tagsinput[arg1] !== undefined) {
          // Invoke function on existing tags input
            if(tagsinput[arg1].length === 3 && arg3 !== undefined){
               var retVal = tagsinput[arg1](arg2, null, arg3);
            }else{
               var retVal = tagsinput[arg1](arg2);
            }
          if (retVal !== undefined)
              results.push(retVal);
      }
    });

    if ( typeof arg1 == 'string') {
      // Return the results from the invoked function calls
      return results.length > 1 ? results : results[0];
    } else {
      return results;
    }
  };

  $.fn.tagsinput.Constructor = TagsInput;

  /**
   * Most options support both a string or number as well as a function as
   * option value. This function makes sure that the option with the given
   * key in the given options is wrapped in a function
   */
  function makeOptionItemFunction(options, key) {
    if (typeof options[key] !== 'function') {
      var propertyName = options[key];
      options[key] = function(item) { return item[propertyName]; };
    }
  }
  function makeOptionFunction(options, key) {
    if (typeof options[key] !== 'function') {
      var value = options[key];
      options[key] = function() { return value; };
    }
  }
  /**
   * HtmlEncodes the given value
   */
  var htmlEncodeContainer = $('<div />');
  function htmlEncode(value) {
    if (value) {
      return htmlEncodeContainer.text(value).html();
    } else {
      return '';
    }
  }

  /**
   * Returns the position of the caret in the given input field
   * http://flightschool.acylt.com/devnotes/caret-position-woes/
   */
  function doGetCaretPosition(oField) {
    var iCaretPos = 0;
    if (document.selection) {
      oField.focus ();
      var oSel = document.selection.createRange();
      oSel.moveStart ('character', -oField.value.length);
      iCaretPos = oSel.text.length;
    } else if (oField.selectionStart || oField.selectionStart == '0') {
      iCaretPos = oField.selectionStart;
    }
    return (iCaretPos);
  }

  /**
    * Returns boolean indicates whether user has pressed an expected key combination.
    * @param object keyPressEvent: JavaScript event object, refer
    *     http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    * @param object lookupList: expected key combinations, as in:
    *     [13, {which: 188, shiftKey: true}]
    */
  function keyCombinationInList(keyPressEvent, lookupList) {
      var found = false;
      $.each(lookupList, function (index, keyCombination) {
          if (typeof (keyCombination) === 'number' && keyPressEvent.which === keyCombination) {
              found = true;
              return false;
          }

          if (keyPressEvent.which === keyCombination.which) {
              var alt = !keyCombination.hasOwnProperty('altKey') || keyPressEvent.altKey === keyCombination.altKey,
                  shift = !keyCombination.hasOwnProperty('shiftKey') || keyPressEvent.shiftKey === keyCombination.shiftKey,
                  ctrl = !keyCombination.hasOwnProperty('ctrlKey') || keyPressEvent.ctrlKey === keyCombination.ctrlKey;
              if (alt && shift && ctrl) {
                  found = true;
                  return false;
              }
          }
      });

      return found;
  }

  /**
   * Initialize tagsinput behaviour on inputs and selects which have
   * data-role=tagsinput
   */
  $(function() {
    $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
  });
})(window.jQuery);

/*!
 * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(this[c].valueOf()===b)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a(b).data("datepicker",this),this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.inputField.length,this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(a,c){return 0===a||"days"===a||"month"===a?0:1===a||"months"===a||"year"===a?1:2===a||"years"===a||"decade"===a?2:3===a||"decades"===a||"century"===a?3:4===a||"centuries"===a||"millennium"===a?4:c===b?!1:c},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;var d=a(c);return d.length>0}catch(e){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView,0),e.minViewMode=this._resolveViewName(e.minViewMode,0),e.maxViewMode=this._resolveViewName(e.maxViewMode,4),e.startView=Math.min(e.startView,e.maxViewMode),e.startView=Math.max(e.startView,e.minViewMode),e.multidate!==!0&&(e.multidate=Number(e.multidate)||!1,e.multidate!==!1&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-(1/0)&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-(1/0)),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=e.daysOfWeekDisabled||[],a.isArray(e.daysOfWeekDisabled)||(e.daysOfWeekDisabled=e.daysOfWeekDisabled.split(/[,\s]*/)),e.daysOfWeekDisabled=a.map(e.daysOfWeekDisabled,function(a){return parseInt(a,10)}),e.daysOfWeekHighlighted=e.daysOfWeekHighlighted||[],a.isArray(e.daysOfWeekHighlighted)||(e.daysOfWeekHighlighted=e.daysOfWeekHighlighted.split(/[,\s]*/)),e.daysOfWeekHighlighted=a.map(e.daysOfWeekHighlighted,function(a){return parseInt(a,10)}),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=[e.datesDisabled]),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.hasInput?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{mousedown:a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){return this.inputField.prop("disabled")||this.inputField.prop("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return"undefined"!=typeof a?new Date(a):null},clearDates:function(){this.inputField&&this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,a.map(b,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){this._process_options({datesDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container),f=e.width(),g="body"===this.o.container?a(document).scrollTop():e.scrollTop(),h=e.offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+this.o.zIndexOffset,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;"body"!==this.o.container&&(o+=g),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>f?(this.picker.addClass("datepicker-orient-right"),n+=m-b):this.picker.addClass("datepicker-orient-left");var p,q=this.o.orientation.y;if("auto"===q&&(p=-g+o-c,q=0>p?"bottom":"top"),this.picker.addClass("datepicker-orient-"+q),"top"===q?o-=c+parseInt(this.picker.css("padding-top")):o+=l,this.o.rtl){var r=f-(n+m);this.picker.css({top:o,right:r,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,d?this.setValue():c.length&&String(b)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&b.length&&this._trigger("clearDate"),this.fill(),this.element.change(),this},fillDow:function(){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(a,b){return parseInt(b)+1}),c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',a.inArray(b,this.o.daysOfWeekDisabled)>-1&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)},fillMonths:function(){for(var a=this._utc_to_local(this.viewDate),b="",c=0;12>c;){var d=a&&a.getMonth()===c?" focused":"";b+='<span class="month'+d+'">'+q[this.o.language].monthsShort[c++]+"</span>"}this.picker.find(".datepicker-months td").html(b)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),f=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()===d&&b.getUTCMonth()<e?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()===d&&b.getUTCMonth()>e)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&b.getUTCFullYear()===f.getFullYear()&&b.getUTCMonth()===f.getMonth()&&b.getUTCDate()===f.getDate()&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;for(k="",l=this.picker.find(c),m=parseInt(g/e,10)*e,o=parseInt(h/f,10)*f,p=parseInt(i/f,10)*f,n=a.map(this.dates,function(a){return parseInt(a.getUTCFullYear()/f,10)*f}),l.find(".datepicker-switch").text(m+"-"+(m+9*f)),q=m-f,r=-1;11>r;r+=1)s=[d],t=null,-1===r?s.push("old"):10===r&&s.push("new"),-1!==a.inArray(q,n)&&s.push("active"),(o>q||q>p)&&s.push("disabled"),q===this.viewDate.getFullYear()&&s.push("focused"),j!==a.noop&&(u=j(new Date(q,0,1)),u===b?u={}:"boolean"==typeof u?u={enabled:u}:"string"==typeof u&&(u={classes:u}),u.enabled===!1&&s.push("disabled"),u.classes&&(s=s.concat(u.classes.split(/\s+/))),u.tooltip&&(t=u.tooltip)),k+='<span class="'+s.join(" ")+'"'+(t?' title="'+t+'"':"")+">"+q+"</span>",q+=f;l.find("td").html(k)},fill:function(){var d,e,f=new Date(this.viewDate),g=f.getUTCFullYear(),h=f.getUTCMonth(),i=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),j=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),k=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,m=q[this.o.language].today||q.en.today||"",n=q[this.o.language].clear||q.en.clear||"",o=q[this.o.language].titleFormat||q.en.titleFormat;if(!isNaN(g)&&!isNaN(h)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f,o,this.o.language)),this.picker.find("tfoot .today").text(m).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(n).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var p=c(g,h-1,28),s=r.getDaysInMonth(p.getUTCFullYear(),p.getUTCMonth());p.setUTCDate(s),p.setUTCDate(s-(p.getUTCDay()-this.o.weekStart+7)%7);var t=new Date(p);p.getUTCFullYear()<100&&t.setUTCFullYear(p.getUTCFullYear()),t.setUTCDate(t.getUTCDate()+42),t=t.valueOf();for(var u,v=[];p.valueOf()<t;){if(p.getUTCDay()===this.o.weekStart&&(v.push("<tr>"),this.o.calendarWeeks)){var w=new Date(+p+(this.o.weekStart-p.getUTCDay()-7)%7*864e5),x=new Date(Number(w)+(11-w.getUTCDay())%7*864e5),y=new Date(Number(y=c(x.getUTCFullYear(),0,1))+(11-y.getUTCDay())%7*864e5),z=(x-y)/864e5/7+1;v.push('<td class="cw">'+z+"</td>")}u=this.getClassNames(p),u.push("day"),this.o.beforeShowDay!==a.noop&&(e=this.o.beforeShowDay(this._utc_to_local(p)),e===b?e={}:"boolean"==typeof e?e={enabled:e}:"string"==typeof e&&(e={classes:e}),e.enabled===!1&&u.push("disabled"),e.classes&&(u=u.concat(e.classes.split(/\s+/))),e.tooltip&&(d=e.tooltip)),u=a.isFunction(a.uniqueSort)?a.uniqueSort(u):a.unique(u),v.push('<td class="'+u.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+p.getUTCDate()+"</td>"),d=null,p.getUTCDay()===this.o.weekEnd&&v.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(v.join(""));var A=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",B=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?A:g).end().find("span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===g&&B.eq(b.getUTCMonth()).addClass("active")}),(i>g||g>k)&&B.addClass("disabled"),g===i&&B.slice(0,j).addClass("disabled"),g===k&&B.slice(l+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var C=this;a.each(B,function(c,d){var e=new Date(g,c,1),f=C.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),f.enabled!==!1||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,1,g,i,k,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,10,g,i,k,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,100,g,i,k,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:case 3:case 4:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h,i,j,k;e=a(b.target),e.hasClass("datepicker-switch")&&this.showMode(1);var l=e.closest(".prev, .next");l.length>0&&(f=r.modes[this.viewMode].navStep*(l.hasClass("prev")?-1:1),0===this.viewMode?(this.viewDate=this.moveMonth(this.viewDate,f),this._trigger("changeMonth",this.viewDate)):(this.viewDate=this.moveYear(this.viewDate,f),1===this.viewMode&&this._trigger("changeYear",this.viewDate)),this.fill()),e.hasClass("today")&&!e.hasClass("day")&&(this.showMode(-2),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("day")&&(g=parseInt(e.text(),10)||1,h=this.viewDate.getUTCFullYear(),i=this.viewDate.getUTCMonth(),e.hasClass("old")&&(0===i?(i=11,h-=1,j=!0,k=!0):(i-=1,j=!0)),e.hasClass("new")&&(11===i?(i=0,h+=1,j=!0,k=!0):(i+=1,j=!0)),this._setDate(c(h,i,g)),k&&this._trigger("changeYear",this.viewDate),j&&this._trigger("changeMonth",this.viewDate)),e.hasClass("month")&&(this.viewDate.setUTCDate(1),g=1,i=e.parent().find("span").index(e),h=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(i),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode?(this._setDate(c(h,i,g)),this.showMode()):this.showMode(-1),this.fill()),(e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),g=1,i=0,h=parseInt(e.text(),10)||0,this.viewDate.setUTCFullYear(h),e.hasClass("year")&&(this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(c(h,i,g))),e.hasClass("decade")&&(this._trigger("changeDecade",this.viewDate),3===this.o.minViewMode&&this._setDate(c(h,i,g))),e.hasClass("century")&&(this._trigger("changeCentury",this.viewDate),4===this.o.minViewMode&&this._setDate(c(h,i,g))),this.showMode(-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&a(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField&&this.inputField.change(),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),(0>c||c>11)&&(c=(c+12)%12);else{for(var j=0;i>j;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void((40===a.keyCode||27===a.keyCode)&&(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"),c&&this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"),c&&this._trigger("changeMonth",this.viewDate)):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField&&this.inputField.change())},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+a))),this.picker.children("div").hide().filter(".datepicker-"+r.modes[this.viewMode].clsName).show(),this.updateNavArrows()}};var l=function(b,c){a(b).data("datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){if(!this.updating){this.updating=!0;var c=a(b.target).data("datepicker");if("undefined"!=typeof c){var d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=e-1,g=e+1,h=this.inputs.length;if(-1!==e){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b.setUTCDate(d)}),d<this.dates[f])for(;f>=0&&d<this.dates[f];)this.pickers[f--].setUTCDate(d);else if(d>this.dates[g])for(;h>g&&d>this.dates[g];)this.pickers[g++].setUTCDate(d);this.updateDates(),delete this.updating}}}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10},{clsName:"decades",navFnc:"FullDecade",navStep:100},{clsName:"centuries",navFnc:"FullCentury",navStep:1e3}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,r.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(e,f,g,h){function i(a,b){return b===!0&&(b=10),100>a&&(a+=2e3,a>(new Date).getFullYear()+b&&(a-=100)),a}function j(){var a=this.slice(0,s[n].length),b=s[n].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!e)return b;if(e instanceof Date)return e;if("string"==typeof f&&(f=r.parseFormat(f)),f.toValue)return f.toValue(e,f,g);var l,m,n,o,p=/([\-+]\d+)([dmwy])/,s=e.match(/([\-+]\d+)([dmwy])/g),t={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},u={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)){for(e=new Date,n=0;n<s.length;n++)l=p.exec(s[n]),m=parseInt(l[1]),o=t[l[2]],e=k.prototype[o](e,m);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}if("undefined"!=typeof u[e]&&(e=u[e],s=e.match(/([\-+]\d+)([dmwy])/g),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e))){for(e=new Date,n=0;n<s.length;n++)l=p.exec(s[n]),m=parseInt(l[1]),o=t[l[2]],e=k.prototype[o](e,m);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}s=e&&e.match(this.nonpunctuation)||[],e=new Date;var v,w,x={},y=["yyyy","yy","M","MM","m","mm","d","dd"],z={yyyy:function(a,b){return a.setUTCFullYear(h?i(b,h):b)},yy:function(a,b){return a.setUTCFullYear(h?i(b,h):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};z.M=z.MM=z.mm=z.m,z.dd=z.d,e=d();var A=f.parts.slice();if(s.length!==A.length&&(A=a(A).filter(function(b,c){return-1!==a.inArray(c,y)}).toArray()),s.length===A.length){var B;for(n=0,B=A.length;B>n;n++){if(v=parseInt(s[n],10),l=A[n],isNaN(v))switch(l){case"MM":w=a(q[g].months).filter(j),v=a.inArray(w[0],q[g].months)+1;break;case"M":w=a(q[g].monthsShort).filter(j),v=a.inArray(w[0],q[g].monthsShort)+1}x[l]=v}var C,D;for(n=0;n<y.length;n++)D=y[n],D in x&&!isNaN(x[D])&&(C=new Date(e),z[D](C,x[D]),isNaN(C)||(e=C))}return e},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),
c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.6.4",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});
/*!
 * ClockPicker v0.0.7 (http://weareoutman.github.io/clockpicker/)
 * Copyright 2014 Wang Shenwei.
 * Licensed under MIT (https://github.com/weareoutman/clockpicker/blob/gh-pages/LICENSE)
 */
!function(){function t(t){return document.createElementNS(p,t)}function i(t){return(10>t?"0":"")+t}function e(t){var i=++m+"";return t?t+i:i}function s(s,r){function p(t,i){var e=u.offset(),s=/^touch/.test(t.type),o=e.left+b,n=e.top+b,p=(s?t.originalEvent.touches[0]:t).pageX-o,h=(s?t.originalEvent.touches[0]:t).pageY-n,k=Math.sqrt(p*p+h*h),v=!1;if(!i||!(g-y>k||k>g+y)){t.preventDefault();var m=setTimeout(function(){c.addClass("clockpicker-moving")},200);l&&u.append(x.canvas),x.setHand(p,h,!i,!0),a.off(d).on(d,function(t){t.preventDefault();var i=/^touch/.test(t.type),e=(i?t.originalEvent.touches[0]:t).pageX-o,s=(i?t.originalEvent.touches[0]:t).pageY-n;(v||e!==p||s!==h)&&(v=!0,x.setHand(e,s,!1,!0))}),a.off(f).on(f,function(t){a.off(f),t.preventDefault();var e=/^touch/.test(t.type),s=(e?t.originalEvent.changedTouches[0]:t).pageX-o,l=(e?t.originalEvent.changedTouches[0]:t).pageY-n;(i||v)&&s===p&&l===h&&x.setHand(s,l),"hours"===x.currentView?x.toggleView("minutes",A/2):r.autoclose&&(x.minutesView.addClass("clockpicker-dial-out"),setTimeout(function(){x.done()},A/2)),u.prepend(j),clearTimeout(m),c.removeClass("clockpicker-moving"),a.off(d)})}}var h=n(V),u=h.find(".clockpicker-plate"),v=h.find(".clockpicker-hours"),m=h.find(".clockpicker-minutes"),T=h.find(".clockpicker-am-pm-block"),C="INPUT"===s.prop("tagName"),H=C?s:s.find("input"),P=s.find(".input-group-addon"),x=this;if(this.id=e("cp"),this.element=s,this.options=r,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=C,this.input=H,this.addon=P,this.popover=h,this.plate=u,this.hoursView=v,this.minutesView=m,this.amPmBlock=T,this.spanHours=h.find(".clockpicker-span-hours"),this.spanMinutes=h.find(".clockpicker-span-minutes"),this.spanAmPm=h.find(".clockpicker-span-am-pm"),this.amOrPm="PM",r.twelvehour){{var S=['<div class="clockpicker-am-pm-block">','<button type="button" class="btn btn-sm btn-default clockpicker-button clockpicker-am-button">',"AM</button>",'<button type="button" class="btn btn-sm btn-default clockpicker-button clockpicker-pm-button">',"PM</button>","</div>"].join("");n(S)}n('<button type="button" class="btn btn-sm btn-default clockpicker-button am-button">AM</button>').on("click",function(){x.amOrPm="AM",n(".clockpicker-span-am-pm").empty().append("AM")}).appendTo(this.amPmBlock),n('<button type="button" class="btn btn-sm btn-default clockpicker-button pm-button">PM</button>').on("click",function(){x.amOrPm="PM",n(".clockpicker-span-am-pm").empty().append("PM")}).appendTo(this.amPmBlock)}r.autoclose||n('<button type="button" class="btn btn-sm btn-default btn-block clockpicker-button">'+r.donetext+"</button>").click(n.proxy(this.done,this)).appendTo(h),"top"!==r.placement&&"bottom"!==r.placement||"top"!==r.align&&"bottom"!==r.align||(r.align="left"),"left"!==r.placement&&"right"!==r.placement||"left"!==r.align&&"right"!==r.align||(r.align="top"),h.addClass(r.placement),h.addClass("clockpicker-align-"+r.align),this.spanHours.click(n.proxy(this.toggleView,this,"hours")),this.spanMinutes.click(n.proxy(this.toggleView,this,"minutes")),H.on("focus.clockpicker click.clockpicker",n.proxy(this.show,this)),P.on("click.clockpicker",n.proxy(this.toggle,this));var E,D,I,B,z=n('<div class="clockpicker-tick"></div>');if(r.twelvehour)for(E=1;13>E;E+=1)D=z.clone(),I=E/6*Math.PI,B=g,D.css("font-size","120%"),D.css({left:b+Math.sin(I)*B-y,top:b-Math.cos(I)*B-y}),D.html(0===E?"00":E),v.append(D),D.on(k,p);else for(E=0;24>E;E+=1){D=z.clone(),I=E/6*Math.PI;var O=E>0&&13>E;B=O?w:g,D.css({left:b+Math.sin(I)*B-y,top:b-Math.cos(I)*B-y}),O&&D.css("font-size","120%"),D.html(0===E?"00":E),v.append(D),D.on(k,p)}for(E=0;60>E;E+=5)D=z.clone(),I=E/30*Math.PI,D.css({left:b+Math.sin(I)*g-y,top:b-Math.cos(I)*g-y}),D.css("font-size","120%"),D.html(i(E)),m.append(D),D.on(k,p);if(u.on(k,function(t){0===n(t.target).closest(".clockpicker-tick").length&&p(t,!0)}),l){var j=h.find(".clockpicker-canvas"),L=t("svg");L.setAttribute("class","clockpicker-svg"),L.setAttribute("width",M),L.setAttribute("height",M);var U=t("g");U.setAttribute("transform","translate("+b+","+b+")");var W=t("circle");W.setAttribute("class","clockpicker-canvas-bearing"),W.setAttribute("cx",0),W.setAttribute("cy",0),W.setAttribute("r",2);var N=t("line");N.setAttribute("x1",0),N.setAttribute("y1",0);var X=t("circle");X.setAttribute("class","clockpicker-canvas-bg"),X.setAttribute("r",y);var Y=t("circle");Y.setAttribute("class","clockpicker-canvas-fg"),Y.setAttribute("r",3.5),U.appendChild(N),U.appendChild(X),U.appendChild(Y),U.appendChild(W),L.appendChild(U),j.append(L),this.hand=N,this.bg=X,this.fg=Y,this.bearing=W,this.g=U,this.canvas=j}o(this.options.init)}function o(t){t&&"function"==typeof t&&t()}var c,n=window.jQuery,r=n(window),a=n(document),p="http://www.w3.org/2000/svg",l="SVGAngle"in window&&function(){var t,i=document.createElement("div");return i.innerHTML="<svg/>",t=(i.firstChild&&i.firstChild.namespaceURI)==p,i.innerHTML="",t}(),h=function(){var t=document.createElement("div").style;return"transition"in t||"WebkitTransition"in t||"MozTransition"in t||"msTransition"in t||"OTransition"in t}(),u="ontouchstart"in window,k="mousedown"+(u?" touchstart":""),d="mousemove.clockpicker"+(u?" touchmove.clockpicker":""),f="mouseup.clockpicker"+(u?" touchend.clockpicker":""),v=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,m=0,b=100,g=80,w=54,y=13,M=2*b,A=h?350:1,V=['<div class="popover clockpicker-popover">','<div class="arrow"></div>','<div class="popover-title">','<span class="clockpicker-span-hours text-primary"></span>'," : ",'<span class="clockpicker-span-minutes"></span>','<span class="clockpicker-span-am-pm"></span>',"</div>",'<div class="popover-content">','<div class="clockpicker-plate">','<div class="clockpicker-canvas"></div>','<div class="clockpicker-dial clockpicker-hours"></div>','<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',"</div>",'<span class="clockpicker-am-pm-block">',"</span>","</div>","</div>"].join("");s.DEFAULTS={"default":"",fromnow:0,placement:"bottom",align:"left",donetext:"完成",autoclose:!1,twelvehour:!1,vibrate:!0},s.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},s.prototype.locate=function(){var t=this.element,i=this.popover,e=t.offset(),s=t.outerWidth(),o=t.outerHeight(),c=this.options.placement,n=this.options.align,r={};switch(i.show(),c){case"bottom":r.top=e.top+o;break;case"right":r.left=e.left+s;break;case"top":r.top=e.top-i.outerHeight();break;case"left":r.left=e.left-i.outerWidth()}switch(n){case"left":r.left=e.left;break;case"right":r.left=e.left+s-i.outerWidth();break;case"top":r.top=e.top;break;case"bottom":r.top=e.top+o-i.outerHeight()}i.css(r)},s.prototype.show=function(){if(!this.isShown){o(this.options.beforeShow);var t=this;this.isAppended||(c=n(document.body).append(this.popover),r.on("resize.clockpicker"+this.id,function(){t.isShown&&t.locate()}),this.isAppended=!0);var e=((this.input.prop("value")||this.options["default"]||"")+"").split(":");if("now"===e[0]){var s=new Date(+new Date+this.options.fromnow);e=[s.getHours(),s.getMinutes()]}this.hours=+e[0]||0,this.minutes=+e[1]||0,this.spanHours.html(i(this.hours)),this.spanMinutes.html(i(this.minutes)),this.toggleView("hours"),this.locate(),this.isShown=!0,a.on("click.clockpicker."+this.id+" focusin.clockpicker."+this.id,function(i){var e=n(i.target);0===e.closest(t.popover).length&&0===e.closest(t.addon).length&&0===e.closest(t.input).length&&t.hide()}),a.on("keyup.clockpicker."+this.id,function(i){27===i.keyCode&&t.hide()}),o(this.options.afterShow)}},s.prototype.hide=function(){o(this.options.beforeHide),this.isShown=!1,a.off("click.clockpicker."+this.id+" focusin.clockpicker."+this.id),a.off("keyup.clockpicker."+this.id),this.popover.hide(),o(this.options.afterHide)},s.prototype.toggleView=function(t,i){var e=!1;"minutes"===t&&"visible"===n(this.hoursView).css("visibility")&&(o(this.options.beforeHourSelect),e=!0);var s="hours"===t,c=s?this.hoursView:this.minutesView,r=s?this.minutesView:this.hoursView;this.currentView=t,this.spanHours.toggleClass("text-primary",s),this.spanMinutes.toggleClass("text-primary",!s),r.addClass("clockpicker-dial-out"),c.css("visibility","visible").removeClass("clockpicker-dial-out"),this.resetClock(i),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){r.css("visibility","hidden")},A),e&&o(this.options.afterHourSelect)},s.prototype.resetClock=function(t){var i=this.currentView,e=this[i],s="hours"===i,o=Math.PI/(s?6:30),c=e*o,n=s&&e>0&&13>e?w:g,r=Math.sin(c)*n,a=-Math.cos(c)*n,p=this;l&&t?(p.canvas.addClass("clockpicker-canvas-out"),setTimeout(function(){p.canvas.removeClass("clockpicker-canvas-out"),p.setHand(r,a)},t)):this.setHand(r,a)},s.prototype.setHand=function(t,e,s,o){var c,r=Math.atan2(t,-e),a="hours"===this.currentView,p=Math.PI/(a||s?6:30),h=Math.sqrt(t*t+e*e),u=this.options,k=a&&(g+w)/2>h,d=k?w:g;if(u.twelvehour&&(d=g),0>r&&(r=2*Math.PI+r),c=Math.round(r/p),r=c*p,u.twelvehour?a?0===c&&(c=12):(s&&(c*=5),60===c&&(c=0)):a?(12===c&&(c=0),c=k?0===c?12:c:0===c?0:c+12):(s&&(c*=5),60===c&&(c=0)),this[this.currentView]!==c&&v&&this.options.vibrate&&(this.vibrateTimer||(navigator[v](10),this.vibrateTimer=setTimeout(n.proxy(function(){this.vibrateTimer=null},this),100))),this[this.currentView]=c,this[a?"spanHours":"spanMinutes"].html(i(c)),!l)return void this[a?"hoursView":"minutesView"].find(".clockpicker-tick").each(function(){var t=n(this);t.toggleClass("active",c===+t.html())});o||!a&&c%5?(this.g.insertBefore(this.hand,this.bearing),this.g.insertBefore(this.bg,this.fg),this.bg.setAttribute("class","clockpicker-canvas-bg clockpicker-canvas-bg-trans")):(this.g.insertBefore(this.hand,this.bg),this.g.insertBefore(this.fg,this.bg),this.bg.setAttribute("class","clockpicker-canvas-bg"));var f=Math.sin(r)*d,m=-Math.cos(r)*d;this.hand.setAttribute("x2",f),this.hand.setAttribute("y2",m),this.bg.setAttribute("cx",f),this.bg.setAttribute("cy",m),this.fg.setAttribute("cx",f),this.fg.setAttribute("cy",m)},s.prototype.done=function(){o(this.options.beforeDone),this.hide();var t=this.input.prop("value"),e=i(this.hours)+":"+i(this.minutes);this.options.twelvehour&&(e+=this.amOrPm),this.input.prop("value",e),e!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur"),o(this.options.afterDone)},s.prototype.remove=function(){this.element.removeData("clockpicker"),this.input.off("focus.clockpicker click.clockpicker"),this.addon.off("click.clockpicker"),this.isShown&&this.hide(),this.isAppended&&(r.off("resize.clockpicker"+this.id),this.popover.remove())},n.fn.clockpicker=function(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=n(this),o=e.data("clockpicker");if(o)"function"==typeof o[t]&&o[t].apply(o,i);else{var c=n.extend({},s.DEFAULTS,e.data(),"object"==typeof t&&t);e.data("clockpicker",new s(e,c))}})}}();
//////////////////////////////////////////////////////

///////////////////////////////////////////////////


 // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';

    window.addEventListener('load', function () {
        var form = document.getElementById('validation');
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();
//# sourceMappingURL=cms-contents-show-libs.js.map
