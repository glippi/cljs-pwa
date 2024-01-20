goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20866 = arguments.length;
var i__5770__auto___20867 = (0);
while(true){
if((i__5770__auto___20867 < len__5769__auto___20866)){
args__5775__auto__.push((arguments[i__5770__auto___20867]));

var G__20868 = (i__5770__auto___20867 + (1));
i__5770__auto___20867 = G__20868;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20579){
var G__20580 = cljs.core.first(seq20579);
var seq20579__$1 = cljs.core.next(seq20579);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20580,seq20579__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20583 = cljs.core.seq(sources);
var chunk__20584 = null;
var count__20585 = (0);
var i__20586 = (0);
while(true){
if((i__20586 < count__20585)){
var map__20595 = chunk__20584.cljs$core$IIndexed$_nth$arity$2(null,i__20586);
var map__20595__$1 = cljs.core.__destructure_map(map__20595);
var src = map__20595__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20595__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20595__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20595__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20595__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20597){var e_20869 = e20597;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20869);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20869.message)].join('')));
}

var G__20870 = seq__20583;
var G__20871 = chunk__20584;
var G__20872 = count__20585;
var G__20873 = (i__20586 + (1));
seq__20583 = G__20870;
chunk__20584 = G__20871;
count__20585 = G__20872;
i__20586 = G__20873;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20583);
if(temp__5804__auto__){
var seq__20583__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20583__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20583__$1);
var G__20874 = cljs.core.chunk_rest(seq__20583__$1);
var G__20875 = c__5568__auto__;
var G__20876 = cljs.core.count(c__5568__auto__);
var G__20877 = (0);
seq__20583 = G__20874;
chunk__20584 = G__20875;
count__20585 = G__20876;
i__20586 = G__20877;
continue;
} else {
var map__20598 = cljs.core.first(seq__20583__$1);
var map__20598__$1 = cljs.core.__destructure_map(map__20598);
var src = map__20598__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20598__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20598__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20598__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20598__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20599){var e_20878 = e20599;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20878);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20878.message)].join('')));
}

var G__20879 = cljs.core.next(seq__20583__$1);
var G__20880 = null;
var G__20881 = (0);
var G__20882 = (0);
seq__20583 = G__20879;
chunk__20584 = G__20880;
count__20585 = G__20881;
i__20586 = G__20882;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20600 = cljs.core.seq(js_requires);
var chunk__20601 = null;
var count__20602 = (0);
var i__20603 = (0);
while(true){
if((i__20603 < count__20602)){
var js_ns = chunk__20601.cljs$core$IIndexed$_nth$arity$2(null,i__20603);
var require_str_20883 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20883);


var G__20884 = seq__20600;
var G__20885 = chunk__20601;
var G__20886 = count__20602;
var G__20887 = (i__20603 + (1));
seq__20600 = G__20884;
chunk__20601 = G__20885;
count__20602 = G__20886;
i__20603 = G__20887;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20600);
if(temp__5804__auto__){
var seq__20600__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20600__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20600__$1);
var G__20888 = cljs.core.chunk_rest(seq__20600__$1);
var G__20889 = c__5568__auto__;
var G__20890 = cljs.core.count(c__5568__auto__);
var G__20891 = (0);
seq__20600 = G__20888;
chunk__20601 = G__20889;
count__20602 = G__20890;
i__20603 = G__20891;
continue;
} else {
var js_ns = cljs.core.first(seq__20600__$1);
var require_str_20892 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20892);


var G__20893 = cljs.core.next(seq__20600__$1);
var G__20894 = null;
var G__20895 = (0);
var G__20896 = (0);
seq__20600 = G__20893;
chunk__20601 = G__20894;
count__20602 = G__20895;
i__20603 = G__20896;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20607){
var map__20608 = p__20607;
var map__20608__$1 = cljs.core.__destructure_map(map__20608);
var msg = map__20608__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20608__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20608__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20609(s__20610){
return (new cljs.core.LazySeq(null,(function (){
var s__20610__$1 = s__20610;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20610__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20615 = cljs.core.first(xs__6360__auto__);
var map__20615__$1 = cljs.core.__destructure_map(map__20615);
var src = map__20615__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20615__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20615__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20610__$1,map__20615,map__20615__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20608,map__20608__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20609_$_iter__20611(s__20612){
return (new cljs.core.LazySeq(null,((function (s__20610__$1,map__20615,map__20615__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20608,map__20608__$1,msg,info,reload_info){
return (function (){
var s__20612__$1 = s__20612;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20612__$1);
if(temp__5804__auto____$1){
var s__20612__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20612__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20612__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20614 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20613 = (0);
while(true){
if((i__20613 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20613);
cljs.core.chunk_append(b__20614,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20897 = (i__20613 + (1));
i__20613 = G__20897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20614),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20609_$_iter__20611(cljs.core.chunk_rest(s__20612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20614),null);
}
} else {
var warning = cljs.core.first(s__20612__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20609_$_iter__20611(cljs.core.rest(s__20612__$2)));
}
} else {
return null;
}
break;
}
});})(s__20610__$1,map__20615,map__20615__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20608,map__20608__$1,msg,info,reload_info))
,null,null));
});})(s__20610__$1,map__20615,map__20615__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20608,map__20608__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20609(cljs.core.rest(s__20610__$1)));
} else {
var G__20898 = cljs.core.rest(s__20610__$1);
s__20610__$1 = G__20898;
continue;
}
} else {
var G__20899 = cljs.core.rest(s__20610__$1);
s__20610__$1 = G__20899;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20616_20900 = cljs.core.seq(warnings);
var chunk__20617_20901 = null;
var count__20618_20902 = (0);
var i__20619_20903 = (0);
while(true){
if((i__20619_20903 < count__20618_20902)){
var map__20622_20904 = chunk__20617_20901.cljs$core$IIndexed$_nth$arity$2(null,i__20619_20903);
var map__20622_20905__$1 = cljs.core.__destructure_map(map__20622_20904);
var w_20906 = map__20622_20905__$1;
var msg_20907__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20622_20905__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20622_20905__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20622_20905__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20622_20905__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20910)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20908),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20909),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20907__$1)].join(''));


var G__20911 = seq__20616_20900;
var G__20912 = chunk__20617_20901;
var G__20913 = count__20618_20902;
var G__20914 = (i__20619_20903 + (1));
seq__20616_20900 = G__20911;
chunk__20617_20901 = G__20912;
count__20618_20902 = G__20913;
i__20619_20903 = G__20914;
continue;
} else {
var temp__5804__auto___20915 = cljs.core.seq(seq__20616_20900);
if(temp__5804__auto___20915){
var seq__20616_20916__$1 = temp__5804__auto___20915;
if(cljs.core.chunked_seq_QMARK_(seq__20616_20916__$1)){
var c__5568__auto___20917 = cljs.core.chunk_first(seq__20616_20916__$1);
var G__20918 = cljs.core.chunk_rest(seq__20616_20916__$1);
var G__20919 = c__5568__auto___20917;
var G__20920 = cljs.core.count(c__5568__auto___20917);
var G__20921 = (0);
seq__20616_20900 = G__20918;
chunk__20617_20901 = G__20919;
count__20618_20902 = G__20920;
i__20619_20903 = G__20921;
continue;
} else {
var map__20623_20922 = cljs.core.first(seq__20616_20916__$1);
var map__20623_20923__$1 = cljs.core.__destructure_map(map__20623_20922);
var w_20924 = map__20623_20923__$1;
var msg_20925__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623_20923__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623_20923__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623_20923__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623_20923__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20928)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20926),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20927),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20925__$1)].join(''));


var G__20929 = cljs.core.next(seq__20616_20916__$1);
var G__20930 = null;
var G__20931 = (0);
var G__20932 = (0);
seq__20616_20900 = G__20929;
chunk__20617_20901 = G__20930;
count__20618_20902 = G__20931;
i__20619_20903 = G__20932;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20606_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20606_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20624){
var map__20625 = p__20624;
var map__20625__$1 = cljs.core.__destructure_map(map__20625);
var msg = map__20625__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20626 = cljs.core.seq(updates);
var chunk__20628 = null;
var count__20629 = (0);
var i__20630 = (0);
while(true){
if((i__20630 < count__20629)){
var path = chunk__20628.cljs$core$IIndexed$_nth$arity$2(null,i__20630);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20740_20933 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20744_20934 = null;
var count__20745_20935 = (0);
var i__20746_20936 = (0);
while(true){
if((i__20746_20936 < count__20745_20935)){
var node_20937 = chunk__20744_20934.cljs$core$IIndexed$_nth$arity$2(null,i__20746_20936);
if(cljs.core.not(node_20937.shadow$old)){
var path_match_20938 = shadow.cljs.devtools.client.browser.match_paths(node_20937.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20938)){
var new_link_20939 = (function (){var G__20772 = node_20937.cloneNode(true);
G__20772.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20938),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20772;
})();
(node_20937.shadow$old = true);

(new_link_20939.onload = ((function (seq__20740_20933,chunk__20744_20934,count__20745_20935,i__20746_20936,seq__20626,chunk__20628,count__20629,i__20630,new_link_20939,path_match_20938,node_20937,path,map__20625,map__20625__$1,msg,updates,reload_info){
return (function (e){
var seq__20773_20940 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20775_20941 = null;
var count__20776_20942 = (0);
var i__20777_20943 = (0);
while(true){
if((i__20777_20943 < count__20776_20942)){
var map__20781_20944 = chunk__20775_20941.cljs$core$IIndexed$_nth$arity$2(null,i__20777_20943);
var map__20781_20945__$1 = cljs.core.__destructure_map(map__20781_20944);
var task_20946 = map__20781_20945__$1;
var fn_str_20947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781_20945__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781_20945__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20949 = goog.getObjectByName(fn_str_20947,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20948)].join(''));

(fn_obj_20949.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20949.cljs$core$IFn$_invoke$arity$2(path,new_link_20939) : fn_obj_20949.call(null,path,new_link_20939));


var G__20950 = seq__20773_20940;
var G__20951 = chunk__20775_20941;
var G__20952 = count__20776_20942;
var G__20953 = (i__20777_20943 + (1));
seq__20773_20940 = G__20950;
chunk__20775_20941 = G__20951;
count__20776_20942 = G__20952;
i__20777_20943 = G__20953;
continue;
} else {
var temp__5804__auto___20954 = cljs.core.seq(seq__20773_20940);
if(temp__5804__auto___20954){
var seq__20773_20955__$1 = temp__5804__auto___20954;
if(cljs.core.chunked_seq_QMARK_(seq__20773_20955__$1)){
var c__5568__auto___20956 = cljs.core.chunk_first(seq__20773_20955__$1);
var G__20957 = cljs.core.chunk_rest(seq__20773_20955__$1);
var G__20958 = c__5568__auto___20956;
var G__20959 = cljs.core.count(c__5568__auto___20956);
var G__20960 = (0);
seq__20773_20940 = G__20957;
chunk__20775_20941 = G__20958;
count__20776_20942 = G__20959;
i__20777_20943 = G__20960;
continue;
} else {
var map__20782_20961 = cljs.core.first(seq__20773_20955__$1);
var map__20782_20962__$1 = cljs.core.__destructure_map(map__20782_20961);
var task_20963 = map__20782_20962__$1;
var fn_str_20964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782_20962__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782_20962__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20966 = goog.getObjectByName(fn_str_20964,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20965)].join(''));

(fn_obj_20966.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20966.cljs$core$IFn$_invoke$arity$2(path,new_link_20939) : fn_obj_20966.call(null,path,new_link_20939));


var G__20967 = cljs.core.next(seq__20773_20955__$1);
var G__20968 = null;
var G__20969 = (0);
var G__20970 = (0);
seq__20773_20940 = G__20967;
chunk__20775_20941 = G__20968;
count__20776_20942 = G__20969;
i__20777_20943 = G__20970;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20937);
});})(seq__20740_20933,chunk__20744_20934,count__20745_20935,i__20746_20936,seq__20626,chunk__20628,count__20629,i__20630,new_link_20939,path_match_20938,node_20937,path,map__20625,map__20625__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20938], 0));

goog.dom.insertSiblingAfter(new_link_20939,node_20937);


var G__20971 = seq__20740_20933;
var G__20972 = chunk__20744_20934;
var G__20973 = count__20745_20935;
var G__20974 = (i__20746_20936 + (1));
seq__20740_20933 = G__20971;
chunk__20744_20934 = G__20972;
count__20745_20935 = G__20973;
i__20746_20936 = G__20974;
continue;
} else {
var G__20975 = seq__20740_20933;
var G__20976 = chunk__20744_20934;
var G__20977 = count__20745_20935;
var G__20978 = (i__20746_20936 + (1));
seq__20740_20933 = G__20975;
chunk__20744_20934 = G__20976;
count__20745_20935 = G__20977;
i__20746_20936 = G__20978;
continue;
}
} else {
var G__20979 = seq__20740_20933;
var G__20980 = chunk__20744_20934;
var G__20981 = count__20745_20935;
var G__20982 = (i__20746_20936 + (1));
seq__20740_20933 = G__20979;
chunk__20744_20934 = G__20980;
count__20745_20935 = G__20981;
i__20746_20936 = G__20982;
continue;
}
} else {
var temp__5804__auto___20983 = cljs.core.seq(seq__20740_20933);
if(temp__5804__auto___20983){
var seq__20740_20984__$1 = temp__5804__auto___20983;
if(cljs.core.chunked_seq_QMARK_(seq__20740_20984__$1)){
var c__5568__auto___20985 = cljs.core.chunk_first(seq__20740_20984__$1);
var G__20986 = cljs.core.chunk_rest(seq__20740_20984__$1);
var G__20987 = c__5568__auto___20985;
var G__20988 = cljs.core.count(c__5568__auto___20985);
var G__20989 = (0);
seq__20740_20933 = G__20986;
chunk__20744_20934 = G__20987;
count__20745_20935 = G__20988;
i__20746_20936 = G__20989;
continue;
} else {
var node_20990 = cljs.core.first(seq__20740_20984__$1);
if(cljs.core.not(node_20990.shadow$old)){
var path_match_20991 = shadow.cljs.devtools.client.browser.match_paths(node_20990.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20991)){
var new_link_20992 = (function (){var G__20783 = node_20990.cloneNode(true);
G__20783.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20991),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20783;
})();
(node_20990.shadow$old = true);

(new_link_20992.onload = ((function (seq__20740_20933,chunk__20744_20934,count__20745_20935,i__20746_20936,seq__20626,chunk__20628,count__20629,i__20630,new_link_20992,path_match_20991,node_20990,seq__20740_20984__$1,temp__5804__auto___20983,path,map__20625,map__20625__$1,msg,updates,reload_info){
return (function (e){
var seq__20784_20993 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20786_20994 = null;
var count__20787_20995 = (0);
var i__20788_20996 = (0);
while(true){
if((i__20788_20996 < count__20787_20995)){
var map__20792_20997 = chunk__20786_20994.cljs$core$IIndexed$_nth$arity$2(null,i__20788_20996);
var map__20792_20998__$1 = cljs.core.__destructure_map(map__20792_20997);
var task_20999 = map__20792_20998__$1;
var fn_str_21000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20792_20998__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20792_20998__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21002 = goog.getObjectByName(fn_str_21000,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21001)].join(''));

(fn_obj_21002.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21002.cljs$core$IFn$_invoke$arity$2(path,new_link_20992) : fn_obj_21002.call(null,path,new_link_20992));


var G__21003 = seq__20784_20993;
var G__21004 = chunk__20786_20994;
var G__21005 = count__20787_20995;
var G__21006 = (i__20788_20996 + (1));
seq__20784_20993 = G__21003;
chunk__20786_20994 = G__21004;
count__20787_20995 = G__21005;
i__20788_20996 = G__21006;
continue;
} else {
var temp__5804__auto___21007__$1 = cljs.core.seq(seq__20784_20993);
if(temp__5804__auto___21007__$1){
var seq__20784_21008__$1 = temp__5804__auto___21007__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20784_21008__$1)){
var c__5568__auto___21009 = cljs.core.chunk_first(seq__20784_21008__$1);
var G__21010 = cljs.core.chunk_rest(seq__20784_21008__$1);
var G__21011 = c__5568__auto___21009;
var G__21012 = cljs.core.count(c__5568__auto___21009);
var G__21013 = (0);
seq__20784_20993 = G__21010;
chunk__20786_20994 = G__21011;
count__20787_20995 = G__21012;
i__20788_20996 = G__21013;
continue;
} else {
var map__20793_21014 = cljs.core.first(seq__20784_21008__$1);
var map__20793_21015__$1 = cljs.core.__destructure_map(map__20793_21014);
var task_21016 = map__20793_21015__$1;
var fn_str_21017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793_21015__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793_21015__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21019 = goog.getObjectByName(fn_str_21017,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21018)].join(''));

(fn_obj_21019.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21019.cljs$core$IFn$_invoke$arity$2(path,new_link_20992) : fn_obj_21019.call(null,path,new_link_20992));


var G__21020 = cljs.core.next(seq__20784_21008__$1);
var G__21021 = null;
var G__21022 = (0);
var G__21023 = (0);
seq__20784_20993 = G__21020;
chunk__20786_20994 = G__21021;
count__20787_20995 = G__21022;
i__20788_20996 = G__21023;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20990);
});})(seq__20740_20933,chunk__20744_20934,count__20745_20935,i__20746_20936,seq__20626,chunk__20628,count__20629,i__20630,new_link_20992,path_match_20991,node_20990,seq__20740_20984__$1,temp__5804__auto___20983,path,map__20625,map__20625__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20991], 0));

goog.dom.insertSiblingAfter(new_link_20992,node_20990);


var G__21024 = cljs.core.next(seq__20740_20984__$1);
var G__21025 = null;
var G__21026 = (0);
var G__21027 = (0);
seq__20740_20933 = G__21024;
chunk__20744_20934 = G__21025;
count__20745_20935 = G__21026;
i__20746_20936 = G__21027;
continue;
} else {
var G__21028 = cljs.core.next(seq__20740_20984__$1);
var G__21029 = null;
var G__21030 = (0);
var G__21031 = (0);
seq__20740_20933 = G__21028;
chunk__20744_20934 = G__21029;
count__20745_20935 = G__21030;
i__20746_20936 = G__21031;
continue;
}
} else {
var G__21032 = cljs.core.next(seq__20740_20984__$1);
var G__21033 = null;
var G__21034 = (0);
var G__21035 = (0);
seq__20740_20933 = G__21032;
chunk__20744_20934 = G__21033;
count__20745_20935 = G__21034;
i__20746_20936 = G__21035;
continue;
}
}
} else {
}
}
break;
}


var G__21036 = seq__20626;
var G__21037 = chunk__20628;
var G__21038 = count__20629;
var G__21039 = (i__20630 + (1));
seq__20626 = G__21036;
chunk__20628 = G__21037;
count__20629 = G__21038;
i__20630 = G__21039;
continue;
} else {
var G__21040 = seq__20626;
var G__21041 = chunk__20628;
var G__21042 = count__20629;
var G__21043 = (i__20630 + (1));
seq__20626 = G__21040;
chunk__20628 = G__21041;
count__20629 = G__21042;
i__20630 = G__21043;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20626);
if(temp__5804__auto__){
var seq__20626__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20626__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20626__$1);
var G__21044 = cljs.core.chunk_rest(seq__20626__$1);
var G__21045 = c__5568__auto__;
var G__21046 = cljs.core.count(c__5568__auto__);
var G__21047 = (0);
seq__20626 = G__21044;
chunk__20628 = G__21045;
count__20629 = G__21046;
i__20630 = G__21047;
continue;
} else {
var path = cljs.core.first(seq__20626__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20794_21048 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20798_21049 = null;
var count__20799_21050 = (0);
var i__20800_21051 = (0);
while(true){
if((i__20800_21051 < count__20799_21050)){
var node_21052 = chunk__20798_21049.cljs$core$IIndexed$_nth$arity$2(null,i__20800_21051);
if(cljs.core.not(node_21052.shadow$old)){
var path_match_21053 = shadow.cljs.devtools.client.browser.match_paths(node_21052.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21053)){
var new_link_21054 = (function (){var G__20826 = node_21052.cloneNode(true);
G__20826.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21053),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20826;
})();
(node_21052.shadow$old = true);

(new_link_21054.onload = ((function (seq__20794_21048,chunk__20798_21049,count__20799_21050,i__20800_21051,seq__20626,chunk__20628,count__20629,i__20630,new_link_21054,path_match_21053,node_21052,path,seq__20626__$1,temp__5804__auto__,map__20625,map__20625__$1,msg,updates,reload_info){
return (function (e){
var seq__20827_21055 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20829_21056 = null;
var count__20830_21057 = (0);
var i__20831_21058 = (0);
while(true){
if((i__20831_21058 < count__20830_21057)){
var map__20835_21059 = chunk__20829_21056.cljs$core$IIndexed$_nth$arity$2(null,i__20831_21058);
var map__20835_21060__$1 = cljs.core.__destructure_map(map__20835_21059);
var task_21061 = map__20835_21060__$1;
var fn_str_21062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21060__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21060__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21064 = goog.getObjectByName(fn_str_21062,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21063)].join(''));

(fn_obj_21064.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21064.cljs$core$IFn$_invoke$arity$2(path,new_link_21054) : fn_obj_21064.call(null,path,new_link_21054));


var G__21065 = seq__20827_21055;
var G__21066 = chunk__20829_21056;
var G__21067 = count__20830_21057;
var G__21068 = (i__20831_21058 + (1));
seq__20827_21055 = G__21065;
chunk__20829_21056 = G__21066;
count__20830_21057 = G__21067;
i__20831_21058 = G__21068;
continue;
} else {
var temp__5804__auto___21069__$1 = cljs.core.seq(seq__20827_21055);
if(temp__5804__auto___21069__$1){
var seq__20827_21070__$1 = temp__5804__auto___21069__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20827_21070__$1)){
var c__5568__auto___21071 = cljs.core.chunk_first(seq__20827_21070__$1);
var G__21072 = cljs.core.chunk_rest(seq__20827_21070__$1);
var G__21073 = c__5568__auto___21071;
var G__21074 = cljs.core.count(c__5568__auto___21071);
var G__21075 = (0);
seq__20827_21055 = G__21072;
chunk__20829_21056 = G__21073;
count__20830_21057 = G__21074;
i__20831_21058 = G__21075;
continue;
} else {
var map__20836_21076 = cljs.core.first(seq__20827_21070__$1);
var map__20836_21077__$1 = cljs.core.__destructure_map(map__20836_21076);
var task_21078 = map__20836_21077__$1;
var fn_str_21079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_21077__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_21077__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21081 = goog.getObjectByName(fn_str_21079,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21080)].join(''));

(fn_obj_21081.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21081.cljs$core$IFn$_invoke$arity$2(path,new_link_21054) : fn_obj_21081.call(null,path,new_link_21054));


var G__21082 = cljs.core.next(seq__20827_21070__$1);
var G__21083 = null;
var G__21084 = (0);
var G__21085 = (0);
seq__20827_21055 = G__21082;
chunk__20829_21056 = G__21083;
count__20830_21057 = G__21084;
i__20831_21058 = G__21085;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21052);
});})(seq__20794_21048,chunk__20798_21049,count__20799_21050,i__20800_21051,seq__20626,chunk__20628,count__20629,i__20630,new_link_21054,path_match_21053,node_21052,path,seq__20626__$1,temp__5804__auto__,map__20625,map__20625__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21053], 0));

goog.dom.insertSiblingAfter(new_link_21054,node_21052);


var G__21086 = seq__20794_21048;
var G__21087 = chunk__20798_21049;
var G__21088 = count__20799_21050;
var G__21089 = (i__20800_21051 + (1));
seq__20794_21048 = G__21086;
chunk__20798_21049 = G__21087;
count__20799_21050 = G__21088;
i__20800_21051 = G__21089;
continue;
} else {
var G__21090 = seq__20794_21048;
var G__21091 = chunk__20798_21049;
var G__21092 = count__20799_21050;
var G__21093 = (i__20800_21051 + (1));
seq__20794_21048 = G__21090;
chunk__20798_21049 = G__21091;
count__20799_21050 = G__21092;
i__20800_21051 = G__21093;
continue;
}
} else {
var G__21094 = seq__20794_21048;
var G__21095 = chunk__20798_21049;
var G__21096 = count__20799_21050;
var G__21097 = (i__20800_21051 + (1));
seq__20794_21048 = G__21094;
chunk__20798_21049 = G__21095;
count__20799_21050 = G__21096;
i__20800_21051 = G__21097;
continue;
}
} else {
var temp__5804__auto___21098__$1 = cljs.core.seq(seq__20794_21048);
if(temp__5804__auto___21098__$1){
var seq__20794_21099__$1 = temp__5804__auto___21098__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20794_21099__$1)){
var c__5568__auto___21100 = cljs.core.chunk_first(seq__20794_21099__$1);
var G__21101 = cljs.core.chunk_rest(seq__20794_21099__$1);
var G__21102 = c__5568__auto___21100;
var G__21103 = cljs.core.count(c__5568__auto___21100);
var G__21104 = (0);
seq__20794_21048 = G__21101;
chunk__20798_21049 = G__21102;
count__20799_21050 = G__21103;
i__20800_21051 = G__21104;
continue;
} else {
var node_21105 = cljs.core.first(seq__20794_21099__$1);
if(cljs.core.not(node_21105.shadow$old)){
var path_match_21106 = shadow.cljs.devtools.client.browser.match_paths(node_21105.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21106)){
var new_link_21107 = (function (){var G__20837 = node_21105.cloneNode(true);
G__20837.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21106),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20837;
})();
(node_21105.shadow$old = true);

(new_link_21107.onload = ((function (seq__20794_21048,chunk__20798_21049,count__20799_21050,i__20800_21051,seq__20626,chunk__20628,count__20629,i__20630,new_link_21107,path_match_21106,node_21105,seq__20794_21099__$1,temp__5804__auto___21098__$1,path,seq__20626__$1,temp__5804__auto__,map__20625,map__20625__$1,msg,updates,reload_info){
return (function (e){
var seq__20838_21108 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20840_21109 = null;
var count__20841_21110 = (0);
var i__20842_21111 = (0);
while(true){
if((i__20842_21111 < count__20841_21110)){
var map__20846_21112 = chunk__20840_21109.cljs$core$IIndexed$_nth$arity$2(null,i__20842_21111);
var map__20846_21113__$1 = cljs.core.__destructure_map(map__20846_21112);
var task_21114 = map__20846_21113__$1;
var fn_str_21115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20846_21113__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20846_21113__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21117 = goog.getObjectByName(fn_str_21115,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21116)].join(''));

(fn_obj_21117.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21117.cljs$core$IFn$_invoke$arity$2(path,new_link_21107) : fn_obj_21117.call(null,path,new_link_21107));


var G__21118 = seq__20838_21108;
var G__21119 = chunk__20840_21109;
var G__21120 = count__20841_21110;
var G__21121 = (i__20842_21111 + (1));
seq__20838_21108 = G__21118;
chunk__20840_21109 = G__21119;
count__20841_21110 = G__21120;
i__20842_21111 = G__21121;
continue;
} else {
var temp__5804__auto___21122__$2 = cljs.core.seq(seq__20838_21108);
if(temp__5804__auto___21122__$2){
var seq__20838_21123__$1 = temp__5804__auto___21122__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20838_21123__$1)){
var c__5568__auto___21124 = cljs.core.chunk_first(seq__20838_21123__$1);
var G__21125 = cljs.core.chunk_rest(seq__20838_21123__$1);
var G__21126 = c__5568__auto___21124;
var G__21127 = cljs.core.count(c__5568__auto___21124);
var G__21128 = (0);
seq__20838_21108 = G__21125;
chunk__20840_21109 = G__21126;
count__20841_21110 = G__21127;
i__20842_21111 = G__21128;
continue;
} else {
var map__20847_21129 = cljs.core.first(seq__20838_21123__$1);
var map__20847_21130__$1 = cljs.core.__destructure_map(map__20847_21129);
var task_21131 = map__20847_21130__$1;
var fn_str_21132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20847_21130__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20847_21130__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21134 = goog.getObjectByName(fn_str_21132,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21133)].join(''));

(fn_obj_21134.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21134.cljs$core$IFn$_invoke$arity$2(path,new_link_21107) : fn_obj_21134.call(null,path,new_link_21107));


var G__21135 = cljs.core.next(seq__20838_21123__$1);
var G__21136 = null;
var G__21137 = (0);
var G__21138 = (0);
seq__20838_21108 = G__21135;
chunk__20840_21109 = G__21136;
count__20841_21110 = G__21137;
i__20842_21111 = G__21138;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21105);
});})(seq__20794_21048,chunk__20798_21049,count__20799_21050,i__20800_21051,seq__20626,chunk__20628,count__20629,i__20630,new_link_21107,path_match_21106,node_21105,seq__20794_21099__$1,temp__5804__auto___21098__$1,path,seq__20626__$1,temp__5804__auto__,map__20625,map__20625__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21106], 0));

goog.dom.insertSiblingAfter(new_link_21107,node_21105);


var G__21139 = cljs.core.next(seq__20794_21099__$1);
var G__21140 = null;
var G__21141 = (0);
var G__21142 = (0);
seq__20794_21048 = G__21139;
chunk__20798_21049 = G__21140;
count__20799_21050 = G__21141;
i__20800_21051 = G__21142;
continue;
} else {
var G__21143 = cljs.core.next(seq__20794_21099__$1);
var G__21144 = null;
var G__21145 = (0);
var G__21146 = (0);
seq__20794_21048 = G__21143;
chunk__20798_21049 = G__21144;
count__20799_21050 = G__21145;
i__20800_21051 = G__21146;
continue;
}
} else {
var G__21147 = cljs.core.next(seq__20794_21099__$1);
var G__21148 = null;
var G__21149 = (0);
var G__21150 = (0);
seq__20794_21048 = G__21147;
chunk__20798_21049 = G__21148;
count__20799_21050 = G__21149;
i__20800_21051 = G__21150;
continue;
}
}
} else {
}
}
break;
}


var G__21151 = cljs.core.next(seq__20626__$1);
var G__21152 = null;
var G__21153 = (0);
var G__21154 = (0);
seq__20626 = G__21151;
chunk__20628 = G__21152;
count__20629 = G__21153;
i__20630 = G__21154;
continue;
} else {
var G__21155 = cljs.core.next(seq__20626__$1);
var G__21156 = null;
var G__21157 = (0);
var G__21158 = (0);
seq__20626 = G__21155;
chunk__20628 = G__21156;
count__20629 = G__21157;
i__20630 = G__21158;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__20848){
var map__20849 = p__20848;
var map__20849__$1 = cljs.core.__destructure_map(map__20849);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20850,done,error){
var map__20851 = p__20850;
var map__20851__$1 = cljs.core.__destructure_map(map__20851);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20851__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20852,done,error){
var map__20853 = p__20852;
var map__20853__$1 = cljs.core.__destructure_map(map__20853);
var msg = map__20853__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20853__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20853__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20853__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20854){
var map__20855 = p__20854;
var map__20855__$1 = cljs.core.__destructure_map(map__20855);
var src = map__20855__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__20856 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20856) : done.call(null,G__20856));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__20857){
var map__20858 = p__20857;
var map__20858__$1 = cljs.core.__destructure_map(map__20858);
var msg__$1 = map__20858__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20858__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e20859){var ex = e20859;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__20860){
var map__20861 = p__20860;
var map__20861__$1 = cljs.core.__destructure_map(map__20861);
var env = map__20861__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20861__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__20862){
var map__20863 = p__20862;
var map__20863__$1 = cljs.core.__destructure_map(map__20863);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20863__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20863__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__20864){
var map__20865 = p__20864;
var map__20865__$1 = cljs.core.__destructure_map(map__20865);
var svc = map__20865__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20865__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
