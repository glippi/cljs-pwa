goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17924){
var map__17925 = p__17924;
var map__17925__$1 = cljs.core.__destructure_map(map__17925);
var m = map__17925__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17925__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17925__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17945_18328 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17946_18329 = null;
var count__17947_18330 = (0);
var i__17948_18331 = (0);
while(true){
if((i__17948_18331 < count__17947_18330)){
var f_18332 = chunk__17946_18329.cljs$core$IIndexed$_nth$arity$2(null,i__17948_18331);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18332], 0));


var G__18333 = seq__17945_18328;
var G__18334 = chunk__17946_18329;
var G__18335 = count__17947_18330;
var G__18336 = (i__17948_18331 + (1));
seq__17945_18328 = G__18333;
chunk__17946_18329 = G__18334;
count__17947_18330 = G__18335;
i__17948_18331 = G__18336;
continue;
} else {
var temp__5804__auto___18337 = cljs.core.seq(seq__17945_18328);
if(temp__5804__auto___18337){
var seq__17945_18338__$1 = temp__5804__auto___18337;
if(cljs.core.chunked_seq_QMARK_(seq__17945_18338__$1)){
var c__5568__auto___18340 = cljs.core.chunk_first(seq__17945_18338__$1);
var G__18341 = cljs.core.chunk_rest(seq__17945_18338__$1);
var G__18342 = c__5568__auto___18340;
var G__18343 = cljs.core.count(c__5568__auto___18340);
var G__18344 = (0);
seq__17945_18328 = G__18341;
chunk__17946_18329 = G__18342;
count__17947_18330 = G__18343;
i__17948_18331 = G__18344;
continue;
} else {
var f_18345 = cljs.core.first(seq__17945_18338__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18345], 0));


var G__18346 = cljs.core.next(seq__17945_18338__$1);
var G__18347 = null;
var G__18348 = (0);
var G__18349 = (0);
seq__17945_18328 = G__18346;
chunk__17946_18329 = G__18347;
count__17947_18330 = G__18348;
i__17948_18331 = G__18349;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18351 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18351], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18351)))?cljs.core.second(arglists_18351):arglists_18351)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17968_18355 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17969_18356 = null;
var count__17970_18357 = (0);
var i__17971_18358 = (0);
while(true){
if((i__17971_18358 < count__17970_18357)){
var vec__17991_18361 = chunk__17969_18356.cljs$core$IIndexed$_nth$arity$2(null,i__17971_18358);
var name_18362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17991_18361,(0),null);
var map__17994_18363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17991_18361,(1),null);
var map__17994_18364__$1 = cljs.core.__destructure_map(map__17994_18363);
var doc_18365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17994_18364__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17994_18364__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18362], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18366], 0));

if(cljs.core.truth_(doc_18365)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18365], 0));
} else {
}


var G__18368 = seq__17968_18355;
var G__18369 = chunk__17969_18356;
var G__18370 = count__17970_18357;
var G__18371 = (i__17971_18358 + (1));
seq__17968_18355 = G__18368;
chunk__17969_18356 = G__18369;
count__17970_18357 = G__18370;
i__17971_18358 = G__18371;
continue;
} else {
var temp__5804__auto___18372 = cljs.core.seq(seq__17968_18355);
if(temp__5804__auto___18372){
var seq__17968_18373__$1 = temp__5804__auto___18372;
if(cljs.core.chunked_seq_QMARK_(seq__17968_18373__$1)){
var c__5568__auto___18375 = cljs.core.chunk_first(seq__17968_18373__$1);
var G__18376 = cljs.core.chunk_rest(seq__17968_18373__$1);
var G__18377 = c__5568__auto___18375;
var G__18378 = cljs.core.count(c__5568__auto___18375);
var G__18379 = (0);
seq__17968_18355 = G__18376;
chunk__17969_18356 = G__18377;
count__17970_18357 = G__18378;
i__17971_18358 = G__18379;
continue;
} else {
var vec__18005_18381 = cljs.core.first(seq__17968_18373__$1);
var name_18382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18005_18381,(0),null);
var map__18008_18383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18005_18381,(1),null);
var map__18008_18384__$1 = cljs.core.__destructure_map(map__18008_18383);
var doc_18385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18008_18384__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18008_18384__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18382], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18386], 0));

if(cljs.core.truth_(doc_18385)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18385], 0));
} else {
}


var G__18388 = cljs.core.next(seq__17968_18373__$1);
var G__18389 = null;
var G__18390 = (0);
var G__18391 = (0);
seq__17968_18355 = G__18388;
chunk__17969_18356 = G__18389;
count__17970_18357 = G__18390;
i__17971_18358 = G__18391;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18016 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18017 = null;
var count__18018 = (0);
var i__18019 = (0);
while(true){
if((i__18019 < count__18018)){
var role = chunk__18017.cljs$core$IIndexed$_nth$arity$2(null,i__18019);
var temp__5804__auto___18392__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18392__$1)){
var spec_18393 = temp__5804__auto___18392__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18393)], 0));
} else {
}


var G__18394 = seq__18016;
var G__18395 = chunk__18017;
var G__18396 = count__18018;
var G__18397 = (i__18019 + (1));
seq__18016 = G__18394;
chunk__18017 = G__18395;
count__18018 = G__18396;
i__18019 = G__18397;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18016);
if(temp__5804__auto____$1){
var seq__18016__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18016__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18016__$1);
var G__18398 = cljs.core.chunk_rest(seq__18016__$1);
var G__18399 = c__5568__auto__;
var G__18400 = cljs.core.count(c__5568__auto__);
var G__18401 = (0);
seq__18016 = G__18398;
chunk__18017 = G__18399;
count__18018 = G__18400;
i__18019 = G__18401;
continue;
} else {
var role = cljs.core.first(seq__18016__$1);
var temp__5804__auto___18402__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18402__$2)){
var spec_18404 = temp__5804__auto___18402__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18404)], 0));
} else {
}


var G__18405 = cljs.core.next(seq__18016__$1);
var G__18406 = null;
var G__18407 = (0);
var G__18408 = (0);
seq__18016 = G__18405;
chunk__18017 = G__18406;
count__18018 = G__18407;
i__18019 = G__18408;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__18411 = cljs.core.ex_cause(t);
via = G__18410;
t = G__18411;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18074 = datafied_throwable;
var map__18074__$1 = cljs.core.__destructure_map(map__18074);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18074__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18074__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18074__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18075 = cljs.core.last(via);
var map__18075__$1 = cljs.core.__destructure_map(map__18075);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18075__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18075__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18075__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18076 = data;
var map__18076__$1 = cljs.core.__destructure_map(map__18076);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18076__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18076__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18076__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18077 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18077__$1 = cljs.core.__destructure_map(map__18077);
var top_data = map__18077__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18077__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18082 = phase;
var G__18082__$1 = (((G__18082 instanceof cljs.core.Keyword))?G__18082.fqn:null);
switch (G__18082__$1) {
case "read-source":
var map__18084 = data;
var map__18084__$1 = cljs.core.__destructure_map(map__18084);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18086 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18086__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18086,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18086);
var G__18086__$2 = (cljs.core.truth_((function (){var fexpr__18094 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18094.cljs$core$IFn$_invoke$arity$1 ? fexpr__18094.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18094.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18086__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18086__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18086__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18086__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18096 = top_data;
var G__18096__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18096,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18096);
var G__18096__$2 = (cljs.core.truth_((function (){var fexpr__18097 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18097.cljs$core$IFn$_invoke$arity$1 ? fexpr__18097.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18097.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18096__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18096__$1);
var G__18096__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18096__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18096__$2);
var G__18096__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18096__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18096__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18096__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18096__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18100 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18100,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18100,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18100,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18100,(3),null);
var G__18108 = top_data;
var G__18108__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18108,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18108);
var G__18108__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18108__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18108__$1);
var G__18108__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18108__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18108__$2);
var G__18108__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18108__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18108__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18108__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18108__$4;
}

break;
case "execution":
var vec__18114 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18068_SHARP_){
var or__5045__auto__ = (p1__18068_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__18118 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18118.cljs$core$IFn$_invoke$arity$1 ? fexpr__18118.cljs$core$IFn$_invoke$arity$1(p1__18068_SHARP_) : fexpr__18118.call(null,p1__18068_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__18121 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18121__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18121,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18121);
var G__18121__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18121__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18121__$1);
var G__18121__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18121__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18121__$2);
var G__18121__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18121__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18121__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18121__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18121__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18082__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18157){
var map__18158 = p__18157;
var map__18158__$1 = cljs.core.__destructure_map(map__18158);
var triage_data = map__18158__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18176 = phase;
var G__18176__$1 = (((G__18176 instanceof cljs.core.Keyword))?G__18176.fqn:null);
switch (G__18176__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18186 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18187 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18188 = loc;
var G__18189 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18198_18453 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18199_18454 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18200_18455 = true;
var _STAR_print_fn_STAR__temp_val__18201_18456 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18200_18455);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18201_18456);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18152_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18152_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18199_18454);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18198_18453);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18186,G__18187,G__18188,G__18189) : format.call(null,G__18186,G__18187,G__18188,G__18189));

break;
case "macroexpansion":
var G__18235 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18236 = cause_type;
var G__18237 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18238 = loc;
var G__18239 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18235,G__18236,G__18237,G__18238,G__18239) : format.call(null,G__18235,G__18236,G__18237,G__18238,G__18239));

break;
case "compile-syntax-check":
var G__18240 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18241 = cause_type;
var G__18242 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18243 = loc;
var G__18244 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18240,G__18241,G__18242,G__18243,G__18244) : format.call(null,G__18240,G__18241,G__18242,G__18243,G__18244));

break;
case "compilation":
var G__18248 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18249 = cause_type;
var G__18250 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18251 = loc;
var G__18252 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18248,G__18249,G__18250,G__18251,G__18252) : format.call(null,G__18248,G__18249,G__18250,G__18251,G__18252));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18255 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18256 = symbol;
var G__18258 = loc;
var G__18259 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18267_18478 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18268_18479 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18269_18480 = true;
var _STAR_print_fn_STAR__temp_val__18270_18481 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18269_18480);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18270_18481);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18154_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18154_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18268_18479);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18267_18478);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18255,G__18256,G__18258,G__18259) : format.call(null,G__18255,G__18256,G__18258,G__18259));
} else {
var G__18288 = "Execution error%s at %s(%s).\n%s\n";
var G__18289 = cause_type;
var G__18290 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18291 = loc;
var G__18292 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18288,G__18289,G__18290,G__18291,G__18292) : format.call(null,G__18288,G__18289,G__18290,G__18291,G__18292));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18176__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
