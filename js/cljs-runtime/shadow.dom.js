goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18958 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18958(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18961 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18961(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17453 = coll;
var G__17454 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17453,G__17454) : shadow.dom.lazy_native_coll_seq.call(null,G__17453,G__17454));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17497 = arguments.length;
switch (G__17497) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17510 = arguments.length;
switch (G__17510) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17526 = arguments.length;
switch (G__17526) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17534 = arguments.length;
switch (G__17534) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17540 = arguments.length;
switch (G__17540) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17551 = arguments.length;
switch (G__17551) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17558){if((e17558 instanceof Object)){
var e = e17558;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17558;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17572 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17574 = null;
var count__17575 = (0);
var i__17576 = (0);
while(true){
if((i__17576 < count__17575)){
var el = chunk__17574.cljs$core$IIndexed$_nth$arity$2(null,i__17576);
var handler_18995__$1 = ((function (seq__17572,chunk__17574,count__17575,i__17576,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17572,chunk__17574,count__17575,i__17576,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18995__$1);


var G__18996 = seq__17572;
var G__18997 = chunk__17574;
var G__18998 = count__17575;
var G__18999 = (i__17576 + (1));
seq__17572 = G__18996;
chunk__17574 = G__18997;
count__17575 = G__18998;
i__17576 = G__18999;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17572);
if(temp__5804__auto__){
var seq__17572__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17572__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17572__$1);
var G__19000 = cljs.core.chunk_rest(seq__17572__$1);
var G__19001 = c__5568__auto__;
var G__19002 = cljs.core.count(c__5568__auto__);
var G__19003 = (0);
seq__17572 = G__19000;
chunk__17574 = G__19001;
count__17575 = G__19002;
i__17576 = G__19003;
continue;
} else {
var el = cljs.core.first(seq__17572__$1);
var handler_19005__$1 = ((function (seq__17572,chunk__17574,count__17575,i__17576,el,seq__17572__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17572,chunk__17574,count__17575,i__17576,el,seq__17572__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19005__$1);


var G__19009 = cljs.core.next(seq__17572__$1);
var G__19010 = null;
var G__19011 = (0);
var G__19012 = (0);
seq__17572 = G__19009;
chunk__17574 = G__19010;
count__17575 = G__19011;
i__17576 = G__19012;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17595 = arguments.length;
switch (G__17595) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17613 = cljs.core.seq(events);
var chunk__17614 = null;
var count__17615 = (0);
var i__17616 = (0);
while(true){
if((i__17616 < count__17615)){
var vec__17628 = chunk__17614.cljs$core$IIndexed$_nth$arity$2(null,i__17616);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17628,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19019 = seq__17613;
var G__19020 = chunk__17614;
var G__19021 = count__17615;
var G__19022 = (i__17616 + (1));
seq__17613 = G__19019;
chunk__17614 = G__19020;
count__17615 = G__19021;
i__17616 = G__19022;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17613);
if(temp__5804__auto__){
var seq__17613__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17613__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17613__$1);
var G__19023 = cljs.core.chunk_rest(seq__17613__$1);
var G__19024 = c__5568__auto__;
var G__19025 = cljs.core.count(c__5568__auto__);
var G__19026 = (0);
seq__17613 = G__19023;
chunk__17614 = G__19024;
count__17615 = G__19025;
i__17616 = G__19026;
continue;
} else {
var vec__17636 = cljs.core.first(seq__17613__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17636,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17636,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19028 = cljs.core.next(seq__17613__$1);
var G__19029 = null;
var G__19030 = (0);
var G__19031 = (0);
seq__17613 = G__19028;
chunk__17614 = G__19029;
count__17615 = G__19030;
i__17616 = G__19031;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17643 = cljs.core.seq(styles);
var chunk__17644 = null;
var count__17645 = (0);
var i__17646 = (0);
while(true){
if((i__17646 < count__17645)){
var vec__17659 = chunk__17644.cljs$core$IIndexed$_nth$arity$2(null,i__17646);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17659,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17659,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19033 = seq__17643;
var G__19034 = chunk__17644;
var G__19035 = count__17645;
var G__19036 = (i__17646 + (1));
seq__17643 = G__19033;
chunk__17644 = G__19034;
count__17645 = G__19035;
i__17646 = G__19036;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17643);
if(temp__5804__auto__){
var seq__17643__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17643__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17643__$1);
var G__19037 = cljs.core.chunk_rest(seq__17643__$1);
var G__19038 = c__5568__auto__;
var G__19039 = cljs.core.count(c__5568__auto__);
var G__19040 = (0);
seq__17643 = G__19037;
chunk__17644 = G__19038;
count__17645 = G__19039;
i__17646 = G__19040;
continue;
} else {
var vec__17671 = cljs.core.first(seq__17643__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17671,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17671,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19044 = cljs.core.next(seq__17643__$1);
var G__19045 = null;
var G__19046 = (0);
var G__19047 = (0);
seq__17643 = G__19044;
chunk__17644 = G__19045;
count__17645 = G__19046;
i__17646 = G__19047;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17683_19048 = key;
var G__17683_19049__$1 = (((G__17683_19048 instanceof cljs.core.Keyword))?G__17683_19048.fqn:null);
switch (G__17683_19049__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19054 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19054,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19054,"aria-");
}
})())){
el.setAttribute(ks_19054,value);
} else {
(el[ks_19054] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17723){
var map__17724 = p__17723;
var map__17724__$1 = cljs.core.__destructure_map(map__17724);
var props = map__17724__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17724__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17730 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17730,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17730,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17730,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17735 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17735,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17735;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17747 = arguments.length;
switch (G__17747) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17767){
var vec__17768 = p__17767;
var seq__17769 = cljs.core.seq(vec__17768);
var first__17770 = cljs.core.first(seq__17769);
var seq__17769__$1 = cljs.core.next(seq__17769);
var nn = first__17770;
var first__17770__$1 = cljs.core.first(seq__17769__$1);
var seq__17769__$2 = cljs.core.next(seq__17769__$1);
var np = first__17770__$1;
var nc = seq__17769__$2;
var node = vec__17768;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17783 = nn;
var G__17784 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17783,G__17784) : create_fn.call(null,G__17783,G__17784));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17792 = nn;
var G__17793 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17792,G__17793) : create_fn.call(null,G__17792,G__17793));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17811 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17811,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17811,(1),null);
var seq__17818_19078 = cljs.core.seq(node_children);
var chunk__17819_19079 = null;
var count__17820_19080 = (0);
var i__17821_19081 = (0);
while(true){
if((i__17821_19081 < count__17820_19080)){
var child_struct_19085 = chunk__17819_19079.cljs$core$IIndexed$_nth$arity$2(null,i__17821_19081);
var children_19086 = shadow.dom.dom_node(child_struct_19085);
if(cljs.core.seq_QMARK_(children_19086)){
var seq__17902_19090 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19086));
var chunk__17904_19091 = null;
var count__17905_19092 = (0);
var i__17906_19093 = (0);
while(true){
if((i__17906_19093 < count__17905_19092)){
var child_19095 = chunk__17904_19091.cljs$core$IIndexed$_nth$arity$2(null,i__17906_19093);
if(cljs.core.truth_(child_19095)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19095);


var G__19097 = seq__17902_19090;
var G__19098 = chunk__17904_19091;
var G__19099 = count__17905_19092;
var G__19100 = (i__17906_19093 + (1));
seq__17902_19090 = G__19097;
chunk__17904_19091 = G__19098;
count__17905_19092 = G__19099;
i__17906_19093 = G__19100;
continue;
} else {
var G__19101 = seq__17902_19090;
var G__19102 = chunk__17904_19091;
var G__19103 = count__17905_19092;
var G__19104 = (i__17906_19093 + (1));
seq__17902_19090 = G__19101;
chunk__17904_19091 = G__19102;
count__17905_19092 = G__19103;
i__17906_19093 = G__19104;
continue;
}
} else {
var temp__5804__auto___19106 = cljs.core.seq(seq__17902_19090);
if(temp__5804__auto___19106){
var seq__17902_19108__$1 = temp__5804__auto___19106;
if(cljs.core.chunked_seq_QMARK_(seq__17902_19108__$1)){
var c__5568__auto___19110 = cljs.core.chunk_first(seq__17902_19108__$1);
var G__19111 = cljs.core.chunk_rest(seq__17902_19108__$1);
var G__19112 = c__5568__auto___19110;
var G__19113 = cljs.core.count(c__5568__auto___19110);
var G__19114 = (0);
seq__17902_19090 = G__19111;
chunk__17904_19091 = G__19112;
count__17905_19092 = G__19113;
i__17906_19093 = G__19114;
continue;
} else {
var child_19115 = cljs.core.first(seq__17902_19108__$1);
if(cljs.core.truth_(child_19115)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19115);


var G__19117 = cljs.core.next(seq__17902_19108__$1);
var G__19118 = null;
var G__19119 = (0);
var G__19120 = (0);
seq__17902_19090 = G__19117;
chunk__17904_19091 = G__19118;
count__17905_19092 = G__19119;
i__17906_19093 = G__19120;
continue;
} else {
var G__19121 = cljs.core.next(seq__17902_19108__$1);
var G__19122 = null;
var G__19123 = (0);
var G__19124 = (0);
seq__17902_19090 = G__19121;
chunk__17904_19091 = G__19122;
count__17905_19092 = G__19123;
i__17906_19093 = G__19124;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19086);
}


var G__19125 = seq__17818_19078;
var G__19126 = chunk__17819_19079;
var G__19127 = count__17820_19080;
var G__19128 = (i__17821_19081 + (1));
seq__17818_19078 = G__19125;
chunk__17819_19079 = G__19126;
count__17820_19080 = G__19127;
i__17821_19081 = G__19128;
continue;
} else {
var temp__5804__auto___19129 = cljs.core.seq(seq__17818_19078);
if(temp__5804__auto___19129){
var seq__17818_19132__$1 = temp__5804__auto___19129;
if(cljs.core.chunked_seq_QMARK_(seq__17818_19132__$1)){
var c__5568__auto___19133 = cljs.core.chunk_first(seq__17818_19132__$1);
var G__19136 = cljs.core.chunk_rest(seq__17818_19132__$1);
var G__19138 = c__5568__auto___19133;
var G__19139 = cljs.core.count(c__5568__auto___19133);
var G__19140 = (0);
seq__17818_19078 = G__19136;
chunk__17819_19079 = G__19138;
count__17820_19080 = G__19139;
i__17821_19081 = G__19140;
continue;
} else {
var child_struct_19141 = cljs.core.first(seq__17818_19132__$1);
var children_19142 = shadow.dom.dom_node(child_struct_19141);
if(cljs.core.seq_QMARK_(children_19142)){
var seq__17928_19143 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19142));
var chunk__17930_19144 = null;
var count__17931_19145 = (0);
var i__17932_19146 = (0);
while(true){
if((i__17932_19146 < count__17931_19145)){
var child_19147 = chunk__17930_19144.cljs$core$IIndexed$_nth$arity$2(null,i__17932_19146);
if(cljs.core.truth_(child_19147)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19147);


var G__19149 = seq__17928_19143;
var G__19150 = chunk__17930_19144;
var G__19151 = count__17931_19145;
var G__19152 = (i__17932_19146 + (1));
seq__17928_19143 = G__19149;
chunk__17930_19144 = G__19150;
count__17931_19145 = G__19151;
i__17932_19146 = G__19152;
continue;
} else {
var G__19153 = seq__17928_19143;
var G__19154 = chunk__17930_19144;
var G__19155 = count__17931_19145;
var G__19156 = (i__17932_19146 + (1));
seq__17928_19143 = G__19153;
chunk__17930_19144 = G__19154;
count__17931_19145 = G__19155;
i__17932_19146 = G__19156;
continue;
}
} else {
var temp__5804__auto___19157__$1 = cljs.core.seq(seq__17928_19143);
if(temp__5804__auto___19157__$1){
var seq__17928_19158__$1 = temp__5804__auto___19157__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17928_19158__$1)){
var c__5568__auto___19159 = cljs.core.chunk_first(seq__17928_19158__$1);
var G__19160 = cljs.core.chunk_rest(seq__17928_19158__$1);
var G__19161 = c__5568__auto___19159;
var G__19162 = cljs.core.count(c__5568__auto___19159);
var G__19163 = (0);
seq__17928_19143 = G__19160;
chunk__17930_19144 = G__19161;
count__17931_19145 = G__19162;
i__17932_19146 = G__19163;
continue;
} else {
var child_19164 = cljs.core.first(seq__17928_19158__$1);
if(cljs.core.truth_(child_19164)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19164);


var G__19166 = cljs.core.next(seq__17928_19158__$1);
var G__19167 = null;
var G__19168 = (0);
var G__19169 = (0);
seq__17928_19143 = G__19166;
chunk__17930_19144 = G__19167;
count__17931_19145 = G__19168;
i__17932_19146 = G__19169;
continue;
} else {
var G__19170 = cljs.core.next(seq__17928_19158__$1);
var G__19171 = null;
var G__19172 = (0);
var G__19173 = (0);
seq__17928_19143 = G__19170;
chunk__17930_19144 = G__19171;
count__17931_19145 = G__19172;
i__17932_19146 = G__19173;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19142);
}


var G__19175 = cljs.core.next(seq__17818_19132__$1);
var G__19176 = null;
var G__19177 = (0);
var G__19178 = (0);
seq__17818_19078 = G__19175;
chunk__17819_19079 = G__19176;
count__17820_19080 = G__19177;
i__17821_19081 = G__19178;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18010 = cljs.core.seq(node);
var chunk__18011 = null;
var count__18012 = (0);
var i__18013 = (0);
while(true){
if((i__18013 < count__18012)){
var n = chunk__18011.cljs$core$IIndexed$_nth$arity$2(null,i__18013);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19185 = seq__18010;
var G__19186 = chunk__18011;
var G__19187 = count__18012;
var G__19188 = (i__18013 + (1));
seq__18010 = G__19185;
chunk__18011 = G__19186;
count__18012 = G__19187;
i__18013 = G__19188;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18010);
if(temp__5804__auto__){
var seq__18010__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18010__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18010__$1);
var G__19190 = cljs.core.chunk_rest(seq__18010__$1);
var G__19191 = c__5568__auto__;
var G__19192 = cljs.core.count(c__5568__auto__);
var G__19193 = (0);
seq__18010 = G__19190;
chunk__18011 = G__19191;
count__18012 = G__19192;
i__18013 = G__19193;
continue;
} else {
var n = cljs.core.first(seq__18010__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19194 = cljs.core.next(seq__18010__$1);
var G__19195 = null;
var G__19196 = (0);
var G__19197 = (0);
seq__18010 = G__19194;
chunk__18011 = G__19195;
count__18012 = G__19196;
i__18013 = G__19197;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18036 = arguments.length;
switch (G__18036) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18047 = arguments.length;
switch (G__18047) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18081 = arguments.length;
switch (G__18081) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19215 = arguments.length;
var i__5770__auto___19216 = (0);
while(true){
if((i__5770__auto___19216 < len__5769__auto___19215)){
args__5775__auto__.push((arguments[i__5770__auto___19216]));

var G__19217 = (i__5770__auto___19216 + (1));
i__5770__auto___19216 = G__19217;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18148_19218 = cljs.core.seq(nodes);
var chunk__18149_19219 = null;
var count__18150_19220 = (0);
var i__18151_19221 = (0);
while(true){
if((i__18151_19221 < count__18150_19220)){
var node_19225 = chunk__18149_19219.cljs$core$IIndexed$_nth$arity$2(null,i__18151_19221);
fragment.appendChild(shadow.dom._to_dom(node_19225));


var G__19227 = seq__18148_19218;
var G__19228 = chunk__18149_19219;
var G__19229 = count__18150_19220;
var G__19230 = (i__18151_19221 + (1));
seq__18148_19218 = G__19227;
chunk__18149_19219 = G__19228;
count__18150_19220 = G__19229;
i__18151_19221 = G__19230;
continue;
} else {
var temp__5804__auto___19231 = cljs.core.seq(seq__18148_19218);
if(temp__5804__auto___19231){
var seq__18148_19232__$1 = temp__5804__auto___19231;
if(cljs.core.chunked_seq_QMARK_(seq__18148_19232__$1)){
var c__5568__auto___19233 = cljs.core.chunk_first(seq__18148_19232__$1);
var G__19234 = cljs.core.chunk_rest(seq__18148_19232__$1);
var G__19235 = c__5568__auto___19233;
var G__19236 = cljs.core.count(c__5568__auto___19233);
var G__19237 = (0);
seq__18148_19218 = G__19234;
chunk__18149_19219 = G__19235;
count__18150_19220 = G__19236;
i__18151_19221 = G__19237;
continue;
} else {
var node_19240 = cljs.core.first(seq__18148_19232__$1);
fragment.appendChild(shadow.dom._to_dom(node_19240));


var G__19241 = cljs.core.next(seq__18148_19232__$1);
var G__19242 = null;
var G__19243 = (0);
var G__19244 = (0);
seq__18148_19218 = G__19241;
chunk__18149_19219 = G__19242;
count__18150_19220 = G__19243;
i__18151_19221 = G__19244;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18122){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18122));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18231_19248 = cljs.core.seq(scripts);
var chunk__18232_19249 = null;
var count__18233_19250 = (0);
var i__18234_19251 = (0);
while(true){
if((i__18234_19251 < count__18233_19250)){
var vec__18285_19253 = chunk__18232_19249.cljs$core$IIndexed$_nth$arity$2(null,i__18234_19251);
var script_tag_19254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18285_19253,(0),null);
var script_body_19255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18285_19253,(1),null);
eval(script_body_19255);


var G__19256 = seq__18231_19248;
var G__19257 = chunk__18232_19249;
var G__19258 = count__18233_19250;
var G__19259 = (i__18234_19251 + (1));
seq__18231_19248 = G__19256;
chunk__18232_19249 = G__19257;
count__18233_19250 = G__19258;
i__18234_19251 = G__19259;
continue;
} else {
var temp__5804__auto___19260 = cljs.core.seq(seq__18231_19248);
if(temp__5804__auto___19260){
var seq__18231_19261__$1 = temp__5804__auto___19260;
if(cljs.core.chunked_seq_QMARK_(seq__18231_19261__$1)){
var c__5568__auto___19262 = cljs.core.chunk_first(seq__18231_19261__$1);
var G__19263 = cljs.core.chunk_rest(seq__18231_19261__$1);
var G__19264 = c__5568__auto___19262;
var G__19265 = cljs.core.count(c__5568__auto___19262);
var G__19266 = (0);
seq__18231_19248 = G__19263;
chunk__18232_19249 = G__19264;
count__18233_19250 = G__19265;
i__18234_19251 = G__19266;
continue;
} else {
var vec__18306_19267 = cljs.core.first(seq__18231_19261__$1);
var script_tag_19268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18306_19267,(0),null);
var script_body_19269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18306_19267,(1),null);
eval(script_body_19269);


var G__19270 = cljs.core.next(seq__18231_19261__$1);
var G__19271 = null;
var G__19272 = (0);
var G__19273 = (0);
seq__18231_19248 = G__19270;
chunk__18232_19249 = G__19271;
count__18233_19250 = G__19272;
i__18234_19251 = G__19273;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18314){
var vec__18316 = p__18314;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18367 = arguments.length;
switch (G__18367) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18415 = cljs.core.seq(style_keys);
var chunk__18416 = null;
var count__18417 = (0);
var i__18418 = (0);
while(true){
if((i__18418 < count__18417)){
var it = chunk__18416.cljs$core$IIndexed$_nth$arity$2(null,i__18418);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19283 = seq__18415;
var G__19284 = chunk__18416;
var G__19285 = count__18417;
var G__19286 = (i__18418 + (1));
seq__18415 = G__19283;
chunk__18416 = G__19284;
count__18417 = G__19285;
i__18418 = G__19286;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18415);
if(temp__5804__auto__){
var seq__18415__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18415__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18415__$1);
var G__19288 = cljs.core.chunk_rest(seq__18415__$1);
var G__19289 = c__5568__auto__;
var G__19290 = cljs.core.count(c__5568__auto__);
var G__19291 = (0);
seq__18415 = G__19288;
chunk__18416 = G__19289;
count__18417 = G__19290;
i__18418 = G__19291;
continue;
} else {
var it = cljs.core.first(seq__18415__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19293 = cljs.core.next(seq__18415__$1);
var G__19294 = null;
var G__19295 = (0);
var G__19296 = (0);
seq__18415 = G__19293;
chunk__18416 = G__19294;
count__18417 = G__19295;
i__18418 = G__19296;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18429,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18448 = k18429;
var G__18448__$1 = (((G__18448 instanceof cljs.core.Keyword))?G__18448.fqn:null);
switch (G__18448__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18429,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18467){
var vec__18469 = p__18467;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18469,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18469,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18428){
var self__ = this;
var G__18428__$1 = this;
return (new cljs.core.RecordIter((0),G__18428__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18430,other18431){
var self__ = this;
var this18430__$1 = this;
return (((!((other18431 == null)))) && ((((this18430__$1.constructor === other18431.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18430__$1.x,other18431.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18430__$1.y,other18431.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18430__$1.__extmap,other18431.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18429){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18512 = k18429;
var G__18512__$1 = (((G__18512 instanceof cljs.core.Keyword))?G__18512.fqn:null);
switch (G__18512__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18429);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18428){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18514 = cljs.core.keyword_identical_QMARK_;
var expr__18515 = k__5352__auto__;
if(cljs.core.truth_((pred__18514.cljs$core$IFn$_invoke$arity$2 ? pred__18514.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18515) : pred__18514.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18515)))){
return (new shadow.dom.Coordinate(G__18428,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18514.cljs$core$IFn$_invoke$arity$2 ? pred__18514.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18515) : pred__18514.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18515)))){
return (new shadow.dom.Coordinate(self__.x,G__18428,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18428),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18428){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18428,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18433){
var extmap__5385__auto__ = (function (){var G__18530 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18433,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18433)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18530);
} else {
return G__18530;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18433),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18433),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18553,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18570 = k18553;
var G__18570__$1 = (((G__18570 instanceof cljs.core.Keyword))?G__18570.fqn:null);
switch (G__18570__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18553,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18576){
var vec__18577 = p__18576;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18577,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18577,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18552){
var self__ = this;
var G__18552__$1 = this;
return (new cljs.core.RecordIter((0),G__18552__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18554,other18555){
var self__ = this;
var this18554__$1 = this;
return (((!((other18555 == null)))) && ((((this18554__$1.constructor === other18555.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18554__$1.w,other18555.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18554__$1.h,other18555.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18554__$1.__extmap,other18555.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18553){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18603 = k18553;
var G__18603__$1 = (((G__18603 instanceof cljs.core.Keyword))?G__18603.fqn:null);
switch (G__18603__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18553);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18552){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18609 = cljs.core.keyword_identical_QMARK_;
var expr__18610 = k__5352__auto__;
if(cljs.core.truth_((pred__18609.cljs$core$IFn$_invoke$arity$2 ? pred__18609.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18610) : pred__18609.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18610)))){
return (new shadow.dom.Size(G__18552,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18609.cljs$core$IFn$_invoke$arity$2 ? pred__18609.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18610) : pred__18609.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18610)))){
return (new shadow.dom.Size(self__.w,G__18552,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18552),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18552){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18552,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18559){
var extmap__5385__auto__ = (function (){var G__18620 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18559,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18559)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18620);
} else {
return G__18620;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18559),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18559),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19354 = (i + (1));
var G__19355 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19354;
ret = G__19355;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18650){
var vec__18653 = p__18650;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18653,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18653,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18664 = arguments.length;
switch (G__18664) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19375 = ps;
var G__19376 = (i + (1));
el__$1 = G__19375;
i = G__19376;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18713 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18713,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18713,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18713,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18720_19378 = cljs.core.seq(props);
var chunk__18721_19379 = null;
var count__18722_19380 = (0);
var i__18723_19381 = (0);
while(true){
if((i__18723_19381 < count__18722_19380)){
var vec__18744_19382 = chunk__18721_19379.cljs$core$IIndexed$_nth$arity$2(null,i__18723_19381);
var k_19383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18744_19382,(0),null);
var v_19384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18744_19382,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19383);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19383),v_19384);


var G__19388 = seq__18720_19378;
var G__19389 = chunk__18721_19379;
var G__19390 = count__18722_19380;
var G__19391 = (i__18723_19381 + (1));
seq__18720_19378 = G__19388;
chunk__18721_19379 = G__19389;
count__18722_19380 = G__19390;
i__18723_19381 = G__19391;
continue;
} else {
var temp__5804__auto___19392 = cljs.core.seq(seq__18720_19378);
if(temp__5804__auto___19392){
var seq__18720_19393__$1 = temp__5804__auto___19392;
if(cljs.core.chunked_seq_QMARK_(seq__18720_19393__$1)){
var c__5568__auto___19396 = cljs.core.chunk_first(seq__18720_19393__$1);
var G__19397 = cljs.core.chunk_rest(seq__18720_19393__$1);
var G__19398 = c__5568__auto___19396;
var G__19399 = cljs.core.count(c__5568__auto___19396);
var G__19400 = (0);
seq__18720_19378 = G__19397;
chunk__18721_19379 = G__19398;
count__18722_19380 = G__19399;
i__18723_19381 = G__19400;
continue;
} else {
var vec__18755_19401 = cljs.core.first(seq__18720_19393__$1);
var k_19402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18755_19401,(0),null);
var v_19403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18755_19401,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19402);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19402),v_19403);


var G__19408 = cljs.core.next(seq__18720_19393__$1);
var G__19409 = null;
var G__19410 = (0);
var G__19411 = (0);
seq__18720_19378 = G__19408;
chunk__18721_19379 = G__19409;
count__18722_19380 = G__19410;
i__18723_19381 = G__19411;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18769 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18769,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18769,(1),null);
var seq__18772_19418 = cljs.core.seq(node_children);
var chunk__18774_19419 = null;
var count__18775_19420 = (0);
var i__18776_19421 = (0);
while(true){
if((i__18776_19421 < count__18775_19420)){
var child_struct_19428 = chunk__18774_19419.cljs$core$IIndexed$_nth$arity$2(null,i__18776_19421);
if((!((child_struct_19428 == null)))){
if(typeof child_struct_19428 === 'string'){
var text_19430 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19430),child_struct_19428].join(''));
} else {
var children_19431 = shadow.dom.svg_node(child_struct_19428);
if(cljs.core.seq_QMARK_(children_19431)){
var seq__18814_19432 = cljs.core.seq(children_19431);
var chunk__18817_19433 = null;
var count__18818_19434 = (0);
var i__18819_19435 = (0);
while(true){
if((i__18819_19435 < count__18818_19434)){
var child_19440 = chunk__18817_19433.cljs$core$IIndexed$_nth$arity$2(null,i__18819_19435);
if(cljs.core.truth_(child_19440)){
node.appendChild(child_19440);


var G__19441 = seq__18814_19432;
var G__19442 = chunk__18817_19433;
var G__19443 = count__18818_19434;
var G__19444 = (i__18819_19435 + (1));
seq__18814_19432 = G__19441;
chunk__18817_19433 = G__19442;
count__18818_19434 = G__19443;
i__18819_19435 = G__19444;
continue;
} else {
var G__19445 = seq__18814_19432;
var G__19446 = chunk__18817_19433;
var G__19447 = count__18818_19434;
var G__19448 = (i__18819_19435 + (1));
seq__18814_19432 = G__19445;
chunk__18817_19433 = G__19446;
count__18818_19434 = G__19447;
i__18819_19435 = G__19448;
continue;
}
} else {
var temp__5804__auto___19450 = cljs.core.seq(seq__18814_19432);
if(temp__5804__auto___19450){
var seq__18814_19453__$1 = temp__5804__auto___19450;
if(cljs.core.chunked_seq_QMARK_(seq__18814_19453__$1)){
var c__5568__auto___19454 = cljs.core.chunk_first(seq__18814_19453__$1);
var G__19455 = cljs.core.chunk_rest(seq__18814_19453__$1);
var G__19456 = c__5568__auto___19454;
var G__19457 = cljs.core.count(c__5568__auto___19454);
var G__19458 = (0);
seq__18814_19432 = G__19455;
chunk__18817_19433 = G__19456;
count__18818_19434 = G__19457;
i__18819_19435 = G__19458;
continue;
} else {
var child_19459 = cljs.core.first(seq__18814_19453__$1);
if(cljs.core.truth_(child_19459)){
node.appendChild(child_19459);


var G__19460 = cljs.core.next(seq__18814_19453__$1);
var G__19461 = null;
var G__19462 = (0);
var G__19463 = (0);
seq__18814_19432 = G__19460;
chunk__18817_19433 = G__19461;
count__18818_19434 = G__19462;
i__18819_19435 = G__19463;
continue;
} else {
var G__19464 = cljs.core.next(seq__18814_19453__$1);
var G__19465 = null;
var G__19466 = (0);
var G__19467 = (0);
seq__18814_19432 = G__19464;
chunk__18817_19433 = G__19465;
count__18818_19434 = G__19466;
i__18819_19435 = G__19467;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19431);
}
}


var G__19468 = seq__18772_19418;
var G__19469 = chunk__18774_19419;
var G__19470 = count__18775_19420;
var G__19471 = (i__18776_19421 + (1));
seq__18772_19418 = G__19468;
chunk__18774_19419 = G__19469;
count__18775_19420 = G__19470;
i__18776_19421 = G__19471;
continue;
} else {
var G__19472 = seq__18772_19418;
var G__19473 = chunk__18774_19419;
var G__19474 = count__18775_19420;
var G__19475 = (i__18776_19421 + (1));
seq__18772_19418 = G__19472;
chunk__18774_19419 = G__19473;
count__18775_19420 = G__19474;
i__18776_19421 = G__19475;
continue;
}
} else {
var temp__5804__auto___19476 = cljs.core.seq(seq__18772_19418);
if(temp__5804__auto___19476){
var seq__18772_19477__$1 = temp__5804__auto___19476;
if(cljs.core.chunked_seq_QMARK_(seq__18772_19477__$1)){
var c__5568__auto___19478 = cljs.core.chunk_first(seq__18772_19477__$1);
var G__19479 = cljs.core.chunk_rest(seq__18772_19477__$1);
var G__19480 = c__5568__auto___19478;
var G__19481 = cljs.core.count(c__5568__auto___19478);
var G__19482 = (0);
seq__18772_19418 = G__19479;
chunk__18774_19419 = G__19480;
count__18775_19420 = G__19481;
i__18776_19421 = G__19482;
continue;
} else {
var child_struct_19483 = cljs.core.first(seq__18772_19477__$1);
if((!((child_struct_19483 == null)))){
if(typeof child_struct_19483 === 'string'){
var text_19484 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19484),child_struct_19483].join(''));
} else {
var children_19485 = shadow.dom.svg_node(child_struct_19483);
if(cljs.core.seq_QMARK_(children_19485)){
var seq__18840_19486 = cljs.core.seq(children_19485);
var chunk__18842_19487 = null;
var count__18843_19488 = (0);
var i__18844_19489 = (0);
while(true){
if((i__18844_19489 < count__18843_19488)){
var child_19490 = chunk__18842_19487.cljs$core$IIndexed$_nth$arity$2(null,i__18844_19489);
if(cljs.core.truth_(child_19490)){
node.appendChild(child_19490);


var G__19491 = seq__18840_19486;
var G__19492 = chunk__18842_19487;
var G__19493 = count__18843_19488;
var G__19494 = (i__18844_19489 + (1));
seq__18840_19486 = G__19491;
chunk__18842_19487 = G__19492;
count__18843_19488 = G__19493;
i__18844_19489 = G__19494;
continue;
} else {
var G__19495 = seq__18840_19486;
var G__19496 = chunk__18842_19487;
var G__19497 = count__18843_19488;
var G__19498 = (i__18844_19489 + (1));
seq__18840_19486 = G__19495;
chunk__18842_19487 = G__19496;
count__18843_19488 = G__19497;
i__18844_19489 = G__19498;
continue;
}
} else {
var temp__5804__auto___19499__$1 = cljs.core.seq(seq__18840_19486);
if(temp__5804__auto___19499__$1){
var seq__18840_19500__$1 = temp__5804__auto___19499__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18840_19500__$1)){
var c__5568__auto___19501 = cljs.core.chunk_first(seq__18840_19500__$1);
var G__19502 = cljs.core.chunk_rest(seq__18840_19500__$1);
var G__19503 = c__5568__auto___19501;
var G__19504 = cljs.core.count(c__5568__auto___19501);
var G__19505 = (0);
seq__18840_19486 = G__19502;
chunk__18842_19487 = G__19503;
count__18843_19488 = G__19504;
i__18844_19489 = G__19505;
continue;
} else {
var child_19506 = cljs.core.first(seq__18840_19500__$1);
if(cljs.core.truth_(child_19506)){
node.appendChild(child_19506);


var G__19507 = cljs.core.next(seq__18840_19500__$1);
var G__19508 = null;
var G__19509 = (0);
var G__19510 = (0);
seq__18840_19486 = G__19507;
chunk__18842_19487 = G__19508;
count__18843_19488 = G__19509;
i__18844_19489 = G__19510;
continue;
} else {
var G__19512 = cljs.core.next(seq__18840_19500__$1);
var G__19513 = null;
var G__19514 = (0);
var G__19515 = (0);
seq__18840_19486 = G__19512;
chunk__18842_19487 = G__19513;
count__18843_19488 = G__19514;
i__18844_19489 = G__19515;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19485);
}
}


var G__19518 = cljs.core.next(seq__18772_19477__$1);
var G__19519 = null;
var G__19520 = (0);
var G__19521 = (0);
seq__18772_19418 = G__19518;
chunk__18774_19419 = G__19519;
count__18775_19420 = G__19520;
i__18776_19421 = G__19521;
continue;
} else {
var G__19522 = cljs.core.next(seq__18772_19477__$1);
var G__19523 = null;
var G__19524 = (0);
var G__19525 = (0);
seq__18772_19418 = G__19522;
chunk__18774_19419 = G__19523;
count__18775_19420 = G__19524;
i__18776_19421 = G__19525;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19528 = arguments.length;
var i__5770__auto___19529 = (0);
while(true){
if((i__5770__auto___19529 < len__5769__auto___19528)){
args__5775__auto__.push((arguments[i__5770__auto___19529]));

var G__19530 = (i__5770__auto___19529 + (1));
i__5770__auto___19529 = G__19530;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18867){
var G__18868 = cljs.core.first(seq18867);
var seq18867__$1 = cljs.core.next(seq18867);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18868,seq18867__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18881 = arguments.length;
switch (G__18881) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14021__auto___19537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_18901){
var state_val_18902 = (state_18901[(1)]);
if((state_val_18902 === (1))){
var state_18901__$1 = state_18901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18901__$1,(2),once_or_cleanup);
} else {
if((state_val_18902 === (2))){
var inst_18898 = (state_18901[(2)]);
var inst_18899 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18901__$1 = (function (){var statearr_18909 = state_18901;
(statearr_18909[(7)] = inst_18898);

return statearr_18909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18901__$1,inst_18899);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13116__auto__ = null;
var shadow$dom$state_machine__13116__auto____0 = (function (){
var statearr_18913 = [null,null,null,null,null,null,null,null];
(statearr_18913[(0)] = shadow$dom$state_machine__13116__auto__);

(statearr_18913[(1)] = (1));

return statearr_18913;
});
var shadow$dom$state_machine__13116__auto____1 = (function (state_18901){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_18901);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e18914){var ex__13119__auto__ = e18914;
var statearr_18915_19543 = state_18901;
(statearr_18915_19543[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_18901[(4)]))){
var statearr_18918_19544 = state_18901;
(statearr_18918_19544[(1)] = cljs.core.first((state_18901[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19545 = state_18901;
state_18901 = G__19545;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
shadow$dom$state_machine__13116__auto__ = function(state_18901){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13116__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13116__auto____1.call(this,state_18901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13116__auto____0;
shadow$dom$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13116__auto____1;
return shadow$dom$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_18920 = f__14022__auto__();
(statearr_18920[(6)] = c__14021__auto___19537);

return statearr_18920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
