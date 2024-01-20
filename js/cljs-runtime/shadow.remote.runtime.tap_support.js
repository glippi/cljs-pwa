goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19059,p__19060){
var map__19061 = p__19059;
var map__19061__$1 = cljs.core.__destructure_map(map__19061);
var svc = map__19061__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19062 = p__19060;
var map__19062__$1 = cljs.core.__destructure_map(map__19062);
var msg = map__19062__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19062__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19062__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19062__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19062__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__19082,p__19083){
var map__19087 = p__19082;
var map__19087__$1 = cljs.core.__destructure_map(map__19087);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19087__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__19089 = p__19083;
var map__19089__$1 = cljs.core.__destructure_map(map__19089);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19089__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__19130,p__19131){
var map__19135 = p__19130;
var map__19135__$1 = cljs.core.__destructure_map(map__19135);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19137 = p__19131;
var map__19137__$1 = cljs.core.__destructure_map(map__19137);
var msg = map__19137__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19137__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__19174,tid){
var map__19179 = p__19174;
var map__19179__$1 = cljs.core.__destructure_map(map__19179);
var svc = map__19179__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19179__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__19201 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__19202 = null;
var count__19203 = (0);
var i__19204 = (0);
while(true){
if((i__19204 < count__19203)){
var vec__19245 = chunk__19202.cljs$core$IIndexed$_nth$arity$2(null,i__19204);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19334 = seq__19201;
var G__19335 = chunk__19202;
var G__19336 = count__19203;
var G__19337 = (i__19204 + (1));
seq__19201 = G__19334;
chunk__19202 = G__19335;
count__19203 = G__19336;
i__19204 = G__19337;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19201);
if(temp__5804__auto__){
var seq__19201__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19201__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19201__$1);
var G__19342 = cljs.core.chunk_rest(seq__19201__$1);
var G__19343 = c__5568__auto__;
var G__19344 = cljs.core.count(c__5568__auto__);
var G__19345 = (0);
seq__19201 = G__19342;
chunk__19202 = G__19343;
count__19203 = G__19344;
i__19204 = G__19345;
continue;
} else {
var vec__19274 = cljs.core.first(seq__19201__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19274,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19274,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19356 = cljs.core.next(seq__19201__$1);
var G__19357 = null;
var G__19358 = (0);
var G__19359 = (0);
seq__19201 = G__19356;
chunk__19202 = G__19357;
count__19203 = G__19358;
i__19204 = G__19359;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__19181_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__19181_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__19182_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__19182_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__19183_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__19183_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__19184_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__19184_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__19281){
var map__19282 = p__19281;
var map__19282__$1 = cljs.core.__destructure_map(map__19282);
var svc = map__19282__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19282__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19282__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
