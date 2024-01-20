goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13272){
var map__13273 = p__13272;
var map__13273__$1 = cljs.core.__destructure_map(map__13273);
var runtime = map__13273__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13273__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13678 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13678)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13278 = runtime;
var G__13279 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13678);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13278,G__13279) : shadow.remote.runtime.shared.process.call(null,G__13278,G__13279));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13287,res){
var map__13289 = p__13287;
var map__13289__$1 = cljs.core.__destructure_map(map__13289);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13289__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13289__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13291 = res;
var G__13291__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13291,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13291);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13291__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13291__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13295 = arguments.length;
switch (G__13295) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13304,msg,handlers,timeout_after_ms){
var map__13305 = p__13304;
var map__13305__$1 = cljs.core.__destructure_map(map__13305);
var runtime = map__13305__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13305__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13698 = arguments.length;
var i__5770__auto___13699 = (0);
while(true){
if((i__5770__auto___13699 < len__5769__auto___13698)){
args__5775__auto__.push((arguments[i__5770__auto___13699]));

var G__13700 = (i__5770__auto___13699 + (1));
i__5770__auto___13699 = G__13700;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13336,ev,args){
var map__13338 = p__13336;
var map__13338__$1 = cljs.core.__destructure_map(map__13338);
var runtime = map__13338__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13338__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13342 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13345 = null;
var count__13346 = (0);
var i__13347 = (0);
while(true){
if((i__13347 < count__13346)){
var ext = chunk__13345.cljs$core$IIndexed$_nth$arity$2(null,i__13347);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13707 = seq__13342;
var G__13708 = chunk__13345;
var G__13709 = count__13346;
var G__13710 = (i__13347 + (1));
seq__13342 = G__13707;
chunk__13345 = G__13708;
count__13346 = G__13709;
i__13347 = G__13710;
continue;
} else {
var G__13711 = seq__13342;
var G__13712 = chunk__13345;
var G__13713 = count__13346;
var G__13714 = (i__13347 + (1));
seq__13342 = G__13711;
chunk__13345 = G__13712;
count__13346 = G__13713;
i__13347 = G__13714;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13342);
if(temp__5804__auto__){
var seq__13342__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13342__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13342__$1);
var G__13716 = cljs.core.chunk_rest(seq__13342__$1);
var G__13717 = c__5568__auto__;
var G__13718 = cljs.core.count(c__5568__auto__);
var G__13719 = (0);
seq__13342 = G__13716;
chunk__13345 = G__13717;
count__13346 = G__13718;
i__13347 = G__13719;
continue;
} else {
var ext = cljs.core.first(seq__13342__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13728 = cljs.core.next(seq__13342__$1);
var G__13729 = null;
var G__13730 = (0);
var G__13731 = (0);
seq__13342 = G__13728;
chunk__13345 = G__13729;
count__13346 = G__13730;
i__13347 = G__13731;
continue;
} else {
var G__13732 = cljs.core.next(seq__13342__$1);
var G__13733 = null;
var G__13734 = (0);
var G__13735 = (0);
seq__13342 = G__13732;
chunk__13345 = G__13733;
count__13346 = G__13734;
i__13347 = G__13735;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13317){
var G__13318 = cljs.core.first(seq13317);
var seq13317__$1 = cljs.core.next(seq13317);
var G__13319 = cljs.core.first(seq13317__$1);
var seq13317__$2 = cljs.core.next(seq13317__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13318,G__13319,seq13317__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13377,p__13380){
var map__13381 = p__13377;
var map__13381__$1 = cljs.core.__destructure_map(map__13381);
var runtime = map__13381__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13381__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13386 = p__13380;
var map__13386__$1 = cljs.core.__destructure_map(map__13386);
var msg = map__13386__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13386__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13390 = cljs.core.deref(state_ref);
var map__13390__$1 = cljs.core.__destructure_map(map__13390);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13390__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13390__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13402,msg){
var map__13409 = p__13402;
var map__13409__$1 = cljs.core.__destructure_map(map__13409);
var runtime = map__13409__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13409__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13431,key,p__13432){
var map__13434 = p__13431;
var map__13434__$1 = cljs.core.__destructure_map(map__13434);
var state = map__13434__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13434__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13435 = p__13432;
var map__13435__$1 = cljs.core.__destructure_map(map__13435);
var spec = map__13435__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13435__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13469,key,spec){
var map__13472 = p__13469;
var map__13472__$1 = cljs.core.__destructure_map(map__13472);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13472__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13483_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13483_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13484_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13484_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13485_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13485_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13486_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13486_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13487_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13487_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13521,key){
var map__13522 = p__13521;
var map__13522__$1 = cljs.core.__destructure_map(map__13522);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13547,msg){
var map__13552 = p__13547;
var map__13552__$1 = cljs.core.__destructure_map(map__13552);
var runtime = map__13552__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13552__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13573,p__13574){
var map__13576 = p__13573;
var map__13576__$1 = cljs.core.__destructure_map(map__13576);
var runtime = map__13576__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13576__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13577 = p__13574;
var map__13577__$1 = cljs.core.__destructure_map(map__13577);
var msg = map__13577__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13577__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13577__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13593 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13595 = null;
var count__13596 = (0);
var i__13597 = (0);
while(true){
if((i__13597 < count__13596)){
var map__13657 = chunk__13595.cljs$core$IIndexed$_nth$arity$2(null,i__13597);
var map__13657__$1 = cljs.core.__destructure_map(map__13657);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13657__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__13860 = seq__13593;
var G__13861 = chunk__13595;
var G__13862 = count__13596;
var G__13863 = (i__13597 + (1));
seq__13593 = G__13860;
chunk__13595 = G__13861;
count__13596 = G__13862;
i__13597 = G__13863;
continue;
} else {
var G__13864 = seq__13593;
var G__13865 = chunk__13595;
var G__13866 = count__13596;
var G__13867 = (i__13597 + (1));
seq__13593 = G__13864;
chunk__13595 = G__13865;
count__13596 = G__13866;
i__13597 = G__13867;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13593);
if(temp__5804__auto__){
var seq__13593__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13593__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13593__$1);
var G__13871 = cljs.core.chunk_rest(seq__13593__$1);
var G__13872 = c__5568__auto__;
var G__13873 = cljs.core.count(c__5568__auto__);
var G__13874 = (0);
seq__13593 = G__13871;
chunk__13595 = G__13872;
count__13596 = G__13873;
i__13597 = G__13874;
continue;
} else {
var map__13665 = cljs.core.first(seq__13593__$1);
var map__13665__$1 = cljs.core.__destructure_map(map__13665);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13665__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__13876 = cljs.core.next(seq__13593__$1);
var G__13877 = null;
var G__13878 = (0);
var G__13879 = (0);
seq__13593 = G__13876;
chunk__13595 = G__13877;
count__13596 = G__13878;
i__13597 = G__13879;
continue;
} else {
var G__13880 = cljs.core.next(seq__13593__$1);
var G__13881 = null;
var G__13882 = (0);
var G__13883 = (0);
seq__13593 = G__13880;
chunk__13595 = G__13881;
count__13596 = G__13882;
i__13597 = G__13883;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map