/*! formstone v0.8.47 [carousel.js] 2016-04-17 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a){K.iterate.call(L,j)}function e(){L=a(H.base)}function f(c){var d,f=[I.base,c.customClass,c.rtl?I.rtl:I.ltr];c.maxWidth=c.maxWidth===1/0?"100000px":c.maxWidth,c.mq="(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",c.customControls="object"===a.type(c.controls)&&c.controls.previous&&c.controls.next,c.id=this.attr("id"),c.id?c.ariaID=c.id:(c.ariaID=c.rawGuid,this.attr("id",c.ariaID)),b.support.transform||(c.useMargin=!0);var g="",j="",l=[I.control,I.control_previous].join(" "),m=[I.control,I.control_next].join(" ");if(c.controls&&!c.customControls&&(g+='<div class="'+I.controls+'" aria-label="carousel controls" aria-controls="'+c.ariaID+'">',g+='<button type="button" class="'+l+'" aria-label="'+c.labels.previous+'">'+c.labels.previous+"</button>",g+='<button type="button" class="'+m+'" aria-label="'+c.labels.next+'">'+c.labels.next+"</button>",g+="</div>"),c.pagination&&(j+='<div class="'+I.pagination+'" aria-label="carousel pagination" aria-controls="'+c.ariaID+'" role="navigation">',j+="</div>"),c.autoHeight&&f.push(I.auto_height),c.contained&&f.push(I.contained),c.single&&f.push(I.single),this.addClass(f.join(" ")).wrapInner('<div class="'+I.wrapper+'" aria-live="polite"><div class="'+I.container+'"><div class="'+I.canister+'"></div></div></div>').append(g).wrapInner('<div class="'+I.viewport+'"></div>').append(j),c.$viewport=this.find(H.viewport).eq(0),c.$container=this.find(H.container).eq(0),c.$canister=this.find(H.canister).eq(0),c.$pagination=this.find(H.pagination).eq(0),c.$paginationItems=c.$pagination.find(H.page),c.$controlPrevious=c.$controlNext=a(""),c.customControls?(c.$controls=a(c.controls.container).addClass([I.controls,I.controls_custom].join(" ")),c.$controlPrevious=a(c.controls.previous).addClass(l),c.$controlNext=a(c.controls.next).addClass(m)):(c.$controls=this.find(H.controls).eq(0),c.$controlPrevious=c.$controls.find(H.control_previous),c.$controlNext=c.$controls.find(H.control_next)),c.$controlItems=c.$controlPrevious.add(c.$controlNext),c.index=0,c.enabled=!1,c.leftPosition=0,c.autoTimer=null,c.resizeTimer=null,"object"===a.type(c.show)){var n=c.show,o=[],p=[];for(d in n)n.hasOwnProperty(d)&&p.push(d);p.sort(K.sortAsc);for(d in p)p.hasOwnProperty(d)&&o.push({width:parseInt(p[d]),count:n[p[d]],mq:window.matchMedia("(min-width: "+parseInt(p[d])+"px)")});c.show=o}k(c),a.fsMediaquery("bind",c.rawGuid,c.mq,{enter:function(){i.call(c.$el,c)},leave:function(){h.call(c.$el,c)}}),e()}function g(b){K.clearTimer(b.autoTimer),K.clearTimer(b.resizeTimer),h.call(this,b),a.fsMediaquery("unbind",b.rawGuid),b.id!==b.ariaID&&this.attr("id",""),b.$controlItems.removeClass([H.control,I.control_previous,H.control_next,H.visible].join(" ")).off(J.namespace),b.$images.off(J.namespace),b.$canister.fsTouch("destroy"),b.$items.removeClass([I.item,I.visible,H.item_previous,H.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),b.pagination&&b.$pagination.remove(),b.controls&&!b.customControls&&b.$controls.remove(),b.customControls&&b.$controls.removeClass([I.controls,I.controls_custom,I.visible].join(" ")),this.removeClass([I.base,I.ltr,I.rtl,I.enabled,I.animated,I.contained,I.single,I.auto_height,I.customClass].join(" ")),e()}function h(a){a.enabled&&(K.clearTimer(a.autoTimer),a.enabled=!1,this.removeClass([I.enabled,I.animated].join(" ")).off(J.namespace),a.$canister.fsTouch("destroy").off(J.namespace).attr("style","").css(N,"none"),a.$items.css({width:"",height:""}).removeClass([I.visible,H.item_previous,H.item_next].join(" ")),a.$images.off(J.namespace),a.$controlItems.off(J.namespace),a.$pagination.html(""),v(a),a.useMargin?a.$canister.css({marginLeft:""}):a.$canister.css(M,""),a.index=0)}function i(a){a.enabled||(a.enabled=!0,this.addClass(I.enabled).on(J.click,H.page,a,t),a.$controlItems.on(J.click,a,s),a.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(J.panStart,a,z).on(J.pan,a,A).on(J.panEnd,a,B).on(J.swipe,a,C).css(N,""),k(a),a.$images.on(J.load,a,q),a.autoAdvance&&(a.autoTimer=K.startTimer(a.autoTimer,a.autoTime,function(){r(a)},!0)),j.call(this,a))}function j(a){if(a.enabled){var b,c,d,e,f,g,h,i,j,k;if(a.count=a.$items.length,a.count<1)return v(a),void a.$canister.css({height:""});for(this.removeClass(I.animated),a.containerWidth=a.$container.outerWidth(!1),a.visible=y(a),a.perPage=a.paged?1:a.visible,a.itemMargin=parseInt(a.$items.eq(0).css("marginRight"))+parseInt(a.$items.eq(0).css("marginLeft")),isNaN(a.itemMargin)&&(a.itemMargin=0),a.itemWidth=(a.containerWidth-a.itemMargin*(a.visible-1))/a.visible,a.itemHeight=0,a.pageWidth=a.paged?a.itemWidth:a.containerWidth,a.pageCount=Math.ceil(a.count/a.perPage),a.canisterWidth=a.single?a.containerWidth:(a.pageWidth+a.itemMargin)*a.pageCount,a.$canister.css({width:a.matchWidth?a.canisterWidth:1e6,height:""}),a.$items.css({width:a.matchWidth?a.itemWidth:"",height:""}).removeClass([I.visible,I.item_previous,I.item_next].join(" ")),a.pages=[],c=0,d=0;c<a.count;c+=a.perPage){for(g=a.$items.slice(c,c+a.perPage),i=0,j=0,g.length<a.perPage&&(g=0===c?a.$items:a.$items.slice(a.$items.length-a.perPage)),h=a.rtl?g.eq(g.length-1):g.eq(0),k=h.position().left,e=0;e<g.length;e++)f=g.eq(e).outerWidth(),b=g.eq(e).outerHeight(),i+=f,b>j&&(j=b);a.pages.push({left:a.rtl?k-(a.canisterWidth-i-2*a.itemMargin):k,height:j,width:i,$items:g}),j>a.itemHeight&&(a.itemHeight=j),d++}a.paged&&(a.pageCount-=a.count%a.visible),a.pageCount<=0&&(a.pageCount=1),a.maxMove=-a.pages[a.pageCount-1].left,a.autoHeight?a.$canister.css({height:a.pages[0].height}):a.matchHeight&&a.$items.css({height:a.itemHeight});var l="";for(c=0;c<a.pageCount;c++)l+='<button type="button" class="'+I.page+'">'+(c+1)+"</button>";a.$pagination.html(l),a.pageCount<=1?v(a):w(a),a.$paginationItems=a.$el.find(H.page),u(a,a.index,!1),setTimeout(function(){a.$el.addClass(I.animated)},5)}}function k(a){a.$items=a.$canister.children().not(":hidden").addClass(I.item),a.$images=a.$canister.find("img"),a.totalImages=a.$images.length}function l(a){a.enabled&&m.call(this,a,!1)}function m(a,b){a.$images.off(J.namespace),b!==!1&&a.$canister.html(b),a.index=0,k(a),j.call(this,a)}function n(a,b,c){a.enabled&&(K.clearTimer(a.autoTimer),u(a,b-1,!0,c))}function o(a){var b=a.index-1;a.infinite&&0>b&&(b=a.pageCount-1),u(a,b)}function p(a){var b=a.index+1;a.infinite&&b>=a.pageCount&&(b=0),u(a,b)}function q(a){var b=a.data;b.resizeTimer=K.startTimer(b.resizeTimer,20,function(){j.call(b.$el,b)})}function r(a){var b=a.index+1;b>=a.pageCount&&(b=0),u(a,b)}function s(b){K.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(I.control_next)?1:-1);K.clearTimer(c.autoTimer),u(c,d)}function t(b){K.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));K.clearTimer(c.autoTimer),u(c,d)}function u(a,b,c,d){if(0>b&&(b=a.infinite?a.pageCount-1:0),b>=a.pageCount&&(b=a.infinite?0:a.pageCount-1),!(a.count<1)){a.pages[b]&&(a.leftPosition=-a.pages[b].left),a.leftPosition=E(a,a.leftPosition),a.useMargin?a.$canister.css({marginLeft:a.leftPosition}):c===!1?(a.$canister.css(N,"none").css(M,"translateX("+a.leftPosition+"px)"),setTimeout(function(){a.$canister.css(N,"")},5)):a.$canister.css(M,"translateX("+a.leftPosition+"px)"),a.$items.removeClass([I.visible,I.item_previous,I.item_next].join(" "));for(var e=0,f=a.pages.length;f>e;e++)e===b?a.pages[e].$items.addClass(I.visible).attr("aria-hidden","false"):a.pages[e].$items.not(a.pages[b].$items).addClass(b>e?I.item_previous:I.item_next).attr("aria-hidden","true");a.autoHeight&&a.$canister.css({height:a.pages[b].height}),c!==!1&&d!==!0&&b!==a.index&&(a.infinite||b>-1&&b<a.pageCount)&&a.$el.trigger(J.update,[b]),a.index=b,x(a)}}function v(a){a.$controls.removeClass(I.visible),a.$controlItems.removeClass(I.visible),a.$pagination.removeClass(I.visible)}function w(a){a.$controls.addClass(I.visible),a.$controlItems.addClass(I.visible),a.$pagination.addClass(I.visible)}function x(a){a.$paginationItems.removeClass(I.active).eq(a.index).addClass(I.active),a.infinite?a.$controlItems.addClass(I.visible):a.pageCount<1?a.$controlItems.removeClass(I.visible):(a.$controlItems.addClass(I.visible),a.index<=0?a.$controlPrevious.removeClass(I.visible):(a.index>=a.pageCount-1||!a.single&&a.leftPosition===a.maxMove)&&a.$controlNext.removeClass(I.visible))}function y(c){var d=1;if(c.single)return d;if("array"===a.type(c.show))for(var e in c.show)c.show.hasOwnProperty(e)&&(b.support.nativeMatchMedia?c.show[e].mq.matches&&(d=c.show[e].count):c.show[e].width<b.fallbackWidth&&(d=c.show[e].count));else d=c.show;return c.fill&&c.count<d?c.count:d}function z(a){var b=a.data;if(K.clearTimer(b.autoTimer),!b.single){if(b.useMargin)b.leftPosition=parseInt(b.$canister.css("marginLeft"));else{var c=b.$canister.css(M).split(",");b.leftPosition=parseInt(c[4])}b.$canister.css(N,"none"),A(a)}b.isTouching=!0}function A(a){var b=a.data;b.single||(b.touchLeft=E(b,b.leftPosition+a.deltaX),b.useMargin?b.$canister.css({marginLeft:b.touchLeft}):b.$canister.css(M,"translateX("+b.touchLeft+"px)"))}function B(a){var b=a.data,c=Math.abs(a.deltaX),d=F(b,a),e=!1;if(!b.single){var f,g,h=Math.abs(b.touchLeft),i=!1,j=b.rtl?"right":"left";if(a.directionX===j)for(f=0,g=b.pages.length;g>f;f++)i=b.pages[f],h>Math.abs(i.left)+20&&(e=f+1);else for(f=b.pages.length-1,g=0;f>=g;f--)i=b.pages[f],h<Math.abs(i.left)&&(e=f-1)}e===!1&&(e=50>c?b.index:b.index+d),D(b,e)}function C(a){var b=a.data,c=F(b,a),d=b.index+c;D(b,d)}function D(a,b){a.$canister.css(N,""),u(a,b),a.isTouching=!1}function E(a,b){return isNaN(b)?b=0:a.rtl?(b>a.maxMove&&(b=a.maxMove),0>b&&(b=0)):(b<a.maxMove&&(b=a.maxMove),b>0&&(b=0)),b}function F(a,b){return a.rtl?"right"===b.directionX?1:-1:"left"===b.directionX?1:-1}var G=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,show:1,single:!1,rtl:!1,useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{update:"update"},methods:{_construct:f,_destruct:g,_resize:d,disable:h,enable:i,jump:n,previous:o,next:p,reset:l,resize:j,update:m}}),H=G.classes,I=H.raw,J=G.events,K=G.functions,L=[],M=b.transform,N=b.transition}(jQuery,Formstone);