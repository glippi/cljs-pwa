goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14120 = (function (f,blockable,meta14121){
this.f = f;
this.blockable = blockable;
this.meta14121 = meta14121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14122,meta14121__$1){
var self__ = this;
var _14122__$1 = this;
return (new cljs.core.async.t_cljs$core$async14120(self__.f,self__.blockable,meta14121__$1));
}));

(cljs.core.async.t_cljs$core$async14120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14122){
var self__ = this;
var _14122__$1 = this;
return self__.meta14121;
}));

(cljs.core.async.t_cljs$core$async14120.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14120.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14121","meta14121",971263785,null)], null);
}));

(cljs.core.async.t_cljs$core$async14120.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14120");

(cljs.core.async.t_cljs$core$async14120.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14120");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14120.
 */
cljs.core.async.__GT_t_cljs$core$async14120 = (function cljs$core$async$__GT_t_cljs$core$async14120(f,blockable,meta14121){
return (new cljs.core.async.t_cljs$core$async14120(f,blockable,meta14121));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14119 = arguments.length;
switch (G__14119) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14120(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14135 = arguments.length;
switch (G__14135) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14141 = arguments.length;
switch (G__14141) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14148 = arguments.length;
switch (G__14148) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17492 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17492) : fn1.call(null,val_17492));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17492) : fn1.call(null,val_17492));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14159 = arguments.length;
switch (G__14159) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17511 = n;
var x_17512 = (0);
while(true){
if((x_17512 < n__5636__auto___17511)){
(a[x_17512] = x_17512);

var G__17516 = (x_17512 + (1));
x_17512 = G__17516;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14169 = (function (flag,meta14170){
this.flag = flag;
this.meta14170 = meta14170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14171,meta14170__$1){
var self__ = this;
var _14171__$1 = this;
return (new cljs.core.async.t_cljs$core$async14169(self__.flag,meta14170__$1));
}));

(cljs.core.async.t_cljs$core$async14169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14171){
var self__ = this;
var _14171__$1 = this;
return self__.meta14170;
}));

(cljs.core.async.t_cljs$core$async14169.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14169.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14170","meta14170",-2090279529,null)], null);
}));

(cljs.core.async.t_cljs$core$async14169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14169");

(cljs.core.async.t_cljs$core$async14169.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14169.
 */
cljs.core.async.__GT_t_cljs$core$async14169 = (function cljs$core$async$__GT_t_cljs$core$async14169(flag,meta14170){
return (new cljs.core.async.t_cljs$core$async14169(flag,meta14170));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14169(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14177 = (function (flag,cb,meta14178){
this.flag = flag;
this.cb = cb;
this.meta14178 = meta14178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14179,meta14178__$1){
var self__ = this;
var _14179__$1 = this;
return (new cljs.core.async.t_cljs$core$async14177(self__.flag,self__.cb,meta14178__$1));
}));

(cljs.core.async.t_cljs$core$async14177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14179){
var self__ = this;
var _14179__$1 = this;
return self__.meta14178;
}));

(cljs.core.async.t_cljs$core$async14177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14178","meta14178",215038068,null)], null);
}));

(cljs.core.async.t_cljs$core$async14177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14177");

(cljs.core.async.t_cljs$core$async14177.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14177.
 */
cljs.core.async.__GT_t_cljs$core$async14177 = (function cljs$core$async$__GT_t_cljs$core$async14177(flag,cb,meta14178){
return (new cljs.core.async.t_cljs$core$async14177(flag,cb,meta14178));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14177(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14183_SHARP_){
var G__14195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14183_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14195) : fret.call(null,G__14195));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14184_SHARP_){
var G__14197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14184_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14197) : fret.call(null,G__14197));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17537 = (i + (1));
i = G__17537;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17541 = arguments.length;
var i__5770__auto___17542 = (0);
while(true){
if((i__5770__auto___17542 < len__5769__auto___17541)){
args__5775__auto__.push((arguments[i__5770__auto___17542]));

var G__17543 = (i__5770__auto___17542 + (1));
i__5770__auto___17542 = G__17543;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14206){
var map__14207 = p__14206;
var map__14207__$1 = cljs.core.__destructure_map(map__14207);
var opts = map__14207__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14203){
var G__14204 = cljs.core.first(seq14203);
var seq14203__$1 = cljs.core.next(seq14203);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14204,seq14203__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14216 = arguments.length;
switch (G__14216) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14021__auto___17552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_14267){
var state_val_14273 = (state_14267[(1)]);
if((state_val_14273 === (7))){
var inst_14258 = (state_14267[(2)]);
var state_14267__$1 = state_14267;
var statearr_14278_17553 = state_14267__$1;
(statearr_14278_17553[(2)] = inst_14258);

(statearr_14278_17553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (1))){
var state_14267__$1 = state_14267;
var statearr_14281_17554 = state_14267__$1;
(statearr_14281_17554[(2)] = null);

(statearr_14281_17554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (4))){
var inst_14230 = (state_14267[(7)]);
var inst_14230__$1 = (state_14267[(2)]);
var inst_14237 = (inst_14230__$1 == null);
var state_14267__$1 = (function (){var statearr_14285 = state_14267;
(statearr_14285[(7)] = inst_14230__$1);

return statearr_14285;
})();
if(cljs.core.truth_(inst_14237)){
var statearr_14286_17555 = state_14267__$1;
(statearr_14286_17555[(1)] = (5));

} else {
var statearr_14287_17556 = state_14267__$1;
(statearr_14287_17556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (13))){
var state_14267__$1 = state_14267;
var statearr_14289_17557 = state_14267__$1;
(statearr_14289_17557[(2)] = null);

(statearr_14289_17557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (6))){
var inst_14230 = (state_14267[(7)]);
var state_14267__$1 = state_14267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14267__$1,(11),to,inst_14230);
} else {
if((state_val_14273 === (3))){
var inst_14263 = (state_14267[(2)]);
var state_14267__$1 = state_14267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14267__$1,inst_14263);
} else {
if((state_val_14273 === (12))){
var state_14267__$1 = state_14267;
var statearr_14297_17559 = state_14267__$1;
(statearr_14297_17559[(2)] = null);

(statearr_14297_17559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (2))){
var state_14267__$1 = state_14267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14267__$1,(4),from);
} else {
if((state_val_14273 === (11))){
var inst_14250 = (state_14267[(2)]);
var state_14267__$1 = state_14267;
if(cljs.core.truth_(inst_14250)){
var statearr_14301_17560 = state_14267__$1;
(statearr_14301_17560[(1)] = (12));

} else {
var statearr_14302_17561 = state_14267__$1;
(statearr_14302_17561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (9))){
var state_14267__$1 = state_14267;
var statearr_14306_17566 = state_14267__$1;
(statearr_14306_17566[(2)] = null);

(statearr_14306_17566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (5))){
var state_14267__$1 = state_14267;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14309_17567 = state_14267__$1;
(statearr_14309_17567[(1)] = (8));

} else {
var statearr_14310_17568 = state_14267__$1;
(statearr_14310_17568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (14))){
var inst_14256 = (state_14267[(2)]);
var state_14267__$1 = state_14267;
var statearr_14311_17570 = state_14267__$1;
(statearr_14311_17570[(2)] = inst_14256);

(statearr_14311_17570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (10))){
var inst_14247 = (state_14267[(2)]);
var state_14267__$1 = state_14267;
var statearr_14313_17571 = state_14267__$1;
(statearr_14313_17571[(2)] = inst_14247);

(statearr_14313_17571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (8))){
var inst_14244 = cljs.core.async.close_BANG_(to);
var state_14267__$1 = state_14267;
var statearr_14314_17573 = state_14267__$1;
(statearr_14314_17573[(2)] = inst_14244);

(statearr_14314_17573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_14319 = [null,null,null,null,null,null,null,null];
(statearr_14319[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_14319[(1)] = (1));

return statearr_14319;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_14267){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_14267);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e14320){var ex__13119__auto__ = e14320;
var statearr_14321_17577 = state_14267;
(statearr_14321_17577[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_14267[(4)]))){
var statearr_14323_17578 = state_14267;
(statearr_14323_17578[(1)] = cljs.core.first((state_14267[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17579 = state_14267;
state_14267 = G__17579;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_14267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_14267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_14329 = f__14022__auto__();
(statearr_14329[(6)] = c__14021__auto___17552);

return statearr_14329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14346){
var vec__14347 = p__14346;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14347,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14347,(1),null);
var job = vec__14347;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14021__auto___17587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_14357){
var state_val_14358 = (state_14357[(1)]);
if((state_val_14358 === (1))){
var state_14357__$1 = state_14357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14357__$1,(2),res,v);
} else {
if((state_val_14358 === (2))){
var inst_14354 = (state_14357[(2)]);
var inst_14355 = cljs.core.async.close_BANG_(res);
var state_14357__$1 = (function (){var statearr_14362 = state_14357;
(statearr_14362[(7)] = inst_14354);

return statearr_14362;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14357__$1,inst_14355);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0 = (function (){
var statearr_14365 = [null,null,null,null,null,null,null,null];
(statearr_14365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__);

(statearr_14365[(1)] = (1));

return statearr_14365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1 = (function (state_14357){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_14357);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e14367){var ex__13119__auto__ = e14367;
var statearr_14371_17590 = state_14357;
(statearr_14371_17590[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_14357[(4)]))){
var statearr_14372_17594 = state_14357;
(statearr_14372_17594[(1)] = cljs.core.first((state_14357[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17596 = state_14357;
state_14357 = G__17596;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__ = function(state_14357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1.call(this,state_14357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_14373 = f__14022__auto__();
(statearr_14373[(6)] = c__14021__auto___17587);

return statearr_14373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14375){
var vec__14376 = p__14375;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14376,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14376,(1),null);
var job = vec__14376;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17601 = n;
var __17603 = (0);
while(true){
if((__17603 < n__5636__auto___17601)){
var G__14384_17604 = type;
var G__14384_17605__$1 = (((G__14384_17604 instanceof cljs.core.Keyword))?G__14384_17604.fqn:null);
switch (G__14384_17605__$1) {
case "compute":
var c__14021__auto___17607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17603,c__14021__auto___17607,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async){
return (function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = ((function (__17603,c__14021__auto___17607,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async){
return (function (state_14401){
var state_val_14402 = (state_14401[(1)]);
if((state_val_14402 === (1))){
var state_14401__$1 = state_14401;
var statearr_14406_17608 = state_14401__$1;
(statearr_14406_17608[(2)] = null);

(statearr_14406_17608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14402 === (2))){
var state_14401__$1 = state_14401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14401__$1,(4),jobs);
} else {
if((state_val_14402 === (3))){
var inst_14399 = (state_14401[(2)]);
var state_14401__$1 = state_14401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14401__$1,inst_14399);
} else {
if((state_val_14402 === (4))){
var inst_14389 = (state_14401[(2)]);
var inst_14391 = process__$1(inst_14389);
var state_14401__$1 = state_14401;
if(cljs.core.truth_(inst_14391)){
var statearr_14409_17617 = state_14401__$1;
(statearr_14409_17617[(1)] = (5));

} else {
var statearr_14412_17621 = state_14401__$1;
(statearr_14412_17621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14402 === (5))){
var state_14401__$1 = state_14401;
var statearr_14416_17622 = state_14401__$1;
(statearr_14416_17622[(2)] = null);

(statearr_14416_17622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14402 === (6))){
var state_14401__$1 = state_14401;
var statearr_14417_17623 = state_14401__$1;
(statearr_14417_17623[(2)] = null);

(statearr_14417_17623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14402 === (7))){
var inst_14397 = (state_14401[(2)]);
var state_14401__$1 = state_14401;
var statearr_14419_17624 = state_14401__$1;
(statearr_14419_17624[(2)] = inst_14397);

(statearr_14419_17624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17603,c__14021__auto___17607,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async))
;
return ((function (__17603,switch__13115__auto__,c__14021__auto___17607,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0 = (function (){
var statearr_14424 = [null,null,null,null,null,null,null];
(statearr_14424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__);

(statearr_14424[(1)] = (1));

return statearr_14424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1 = (function (state_14401){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_14401);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e14425){var ex__13119__auto__ = e14425;
var statearr_14428_17631 = state_14401;
(statearr_14428_17631[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_14401[(4)]))){
var statearr_14429_17632 = state_14401;
(statearr_14429_17632[(1)] = cljs.core.first((state_14401[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17634 = state_14401;
state_14401 = G__17634;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__ = function(state_14401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1.call(this,state_14401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__;
})()
;})(__17603,switch__13115__auto__,c__14021__auto___17607,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async))
})();
var state__14023__auto__ = (function (){var statearr_14432 = f__14022__auto__();
(statearr_14432[(6)] = c__14021__auto___17607);

return statearr_14432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
});})(__17603,c__14021__auto___17607,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async))
);


break;
case "async":
var c__14021__auto___17641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17603,c__14021__auto___17641,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async){
return (function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = ((function (__17603,c__14021__auto___17641,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async){
return (function (state_14449){
var state_val_14451 = (state_14449[(1)]);
if((state_val_14451 === (1))){
var state_14449__$1 = state_14449;
var statearr_14457_17642 = state_14449__$1;
(statearr_14457_17642[(2)] = null);

(statearr_14457_17642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (2))){
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14449__$1,(4),jobs);
} else {
if((state_val_14451 === (3))){
var inst_14446 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14449__$1,inst_14446);
} else {
if((state_val_14451 === (4))){
var inst_14438 = (state_14449[(2)]);
var inst_14439 = async(inst_14438);
var state_14449__$1 = state_14449;
if(cljs.core.truth_(inst_14439)){
var statearr_14458_17651 = state_14449__$1;
(statearr_14458_17651[(1)] = (5));

} else {
var statearr_14459_17652 = state_14449__$1;
(statearr_14459_17652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (5))){
var state_14449__$1 = state_14449;
var statearr_14460_17653 = state_14449__$1;
(statearr_14460_17653[(2)] = null);

(statearr_14460_17653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (6))){
var state_14449__$1 = state_14449;
var statearr_14461_17654 = state_14449__$1;
(statearr_14461_17654[(2)] = null);

(statearr_14461_17654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (7))){
var inst_14444 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
var statearr_14462_17658 = state_14449__$1;
(statearr_14462_17658[(2)] = inst_14444);

(statearr_14462_17658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17603,c__14021__auto___17641,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async))
;
return ((function (__17603,switch__13115__auto__,c__14021__auto___17641,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0 = (function (){
var statearr_14465 = [null,null,null,null,null,null,null];
(statearr_14465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__);

(statearr_14465[(1)] = (1));

return statearr_14465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1 = (function (state_14449){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_14449);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e14467){var ex__13119__auto__ = e14467;
var statearr_14468_17666 = state_14449;
(statearr_14468_17666[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_14449[(4)]))){
var statearr_14470_17667 = state_14449;
(statearr_14470_17667[(1)] = cljs.core.first((state_14449[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17669 = state_14449;
state_14449 = G__17669;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__ = function(state_14449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1.call(this,state_14449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__;
})()
;})(__17603,switch__13115__auto__,c__14021__auto___17641,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async))
})();
var state__14023__auto__ = (function (){var statearr_14471 = f__14022__auto__();
(statearr_14471[(6)] = c__14021__auto___17641);

return statearr_14471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
});})(__17603,c__14021__auto___17641,G__14384_17604,G__14384_17605__$1,n__5636__auto___17601,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14384_17605__$1)].join('')));

}

var G__17675 = (__17603 + (1));
__17603 = G__17675;
continue;
} else {
}
break;
}

var c__14021__auto___17676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_14496){
var state_val_14497 = (state_14496[(1)]);
if((state_val_14497 === (7))){
var inst_14491 = (state_14496[(2)]);
var state_14496__$1 = state_14496;
var statearr_14503_17681 = state_14496__$1;
(statearr_14503_17681[(2)] = inst_14491);

(statearr_14503_17681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14497 === (1))){
var state_14496__$1 = state_14496;
var statearr_14504_17682 = state_14496__$1;
(statearr_14504_17682[(2)] = null);

(statearr_14504_17682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14497 === (4))){
var inst_14475 = (state_14496[(7)]);
var inst_14475__$1 = (state_14496[(2)]);
var inst_14476 = (inst_14475__$1 == null);
var state_14496__$1 = (function (){var statearr_14506 = state_14496;
(statearr_14506[(7)] = inst_14475__$1);

return statearr_14506;
})();
if(cljs.core.truth_(inst_14476)){
var statearr_14507_17684 = state_14496__$1;
(statearr_14507_17684[(1)] = (5));

} else {
var statearr_14508_17685 = state_14496__$1;
(statearr_14508_17685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14497 === (6))){
var inst_14475 = (state_14496[(7)]);
var inst_14481 = (state_14496[(8)]);
var inst_14481__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14483 = [inst_14475,inst_14481__$1];
var inst_14484 = (new cljs.core.PersistentVector(null,2,(5),inst_14482,inst_14483,null));
var state_14496__$1 = (function (){var statearr_14512 = state_14496;
(statearr_14512[(8)] = inst_14481__$1);

return statearr_14512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14496__$1,(8),jobs,inst_14484);
} else {
if((state_val_14497 === (3))){
var inst_14493 = (state_14496[(2)]);
var state_14496__$1 = state_14496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14496__$1,inst_14493);
} else {
if((state_val_14497 === (2))){
var state_14496__$1 = state_14496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14496__$1,(4),from);
} else {
if((state_val_14497 === (9))){
var inst_14488 = (state_14496[(2)]);
var state_14496__$1 = (function (){var statearr_14513 = state_14496;
(statearr_14513[(9)] = inst_14488);

return statearr_14513;
})();
var statearr_14514_17690 = state_14496__$1;
(statearr_14514_17690[(2)] = null);

(statearr_14514_17690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14497 === (5))){
var inst_14479 = cljs.core.async.close_BANG_(jobs);
var state_14496__$1 = state_14496;
var statearr_14515_17691 = state_14496__$1;
(statearr_14515_17691[(2)] = inst_14479);

(statearr_14515_17691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14497 === (8))){
var inst_14481 = (state_14496[(8)]);
var inst_14486 = (state_14496[(2)]);
var state_14496__$1 = (function (){var statearr_14521 = state_14496;
(statearr_14521[(10)] = inst_14486);

return statearr_14521;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14496__$1,(9),results,inst_14481);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0 = (function (){
var statearr_14527 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__);

(statearr_14527[(1)] = (1));

return statearr_14527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1 = (function (state_14496){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_14496);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e14528){var ex__13119__auto__ = e14528;
var statearr_14529_17694 = state_14496;
(statearr_14529_17694[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_14496[(4)]))){
var statearr_14530_17695 = state_14496;
(statearr_14530_17695[(1)] = cljs.core.first((state_14496[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17696 = state_14496;
state_14496 = G__17696;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__ = function(state_14496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1.call(this,state_14496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_14535 = f__14022__auto__();
(statearr_14535[(6)] = c__14021__auto___17676);

return statearr_14535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


var c__14021__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_14575){
var state_val_14576 = (state_14575[(1)]);
if((state_val_14576 === (7))){
var inst_14570 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
var statearr_14582_17698 = state_14575__$1;
(statearr_14582_17698[(2)] = inst_14570);

(statearr_14582_17698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (20))){
var state_14575__$1 = state_14575;
var statearr_14583_17699 = state_14575__$1;
(statearr_14583_17699[(2)] = null);

(statearr_14583_17699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (1))){
var state_14575__$1 = state_14575;
var statearr_14584_17703 = state_14575__$1;
(statearr_14584_17703[(2)] = null);

(statearr_14584_17703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (4))){
var inst_14539 = (state_14575[(7)]);
var inst_14539__$1 = (state_14575[(2)]);
var inst_14540 = (inst_14539__$1 == null);
var state_14575__$1 = (function (){var statearr_14586 = state_14575;
(statearr_14586[(7)] = inst_14539__$1);

return statearr_14586;
})();
if(cljs.core.truth_(inst_14540)){
var statearr_14587_17704 = state_14575__$1;
(statearr_14587_17704[(1)] = (5));

} else {
var statearr_14588_17705 = state_14575__$1;
(statearr_14588_17705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (15))){
var inst_14552 = (state_14575[(8)]);
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14575__$1,(18),to,inst_14552);
} else {
if((state_val_14576 === (21))){
var inst_14565 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
var statearr_14589_17706 = state_14575__$1;
(statearr_14589_17706[(2)] = inst_14565);

(statearr_14589_17706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (13))){
var inst_14567 = (state_14575[(2)]);
var state_14575__$1 = (function (){var statearr_14590 = state_14575;
(statearr_14590[(9)] = inst_14567);

return statearr_14590;
})();
var statearr_14591_17707 = state_14575__$1;
(statearr_14591_17707[(2)] = null);

(statearr_14591_17707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (6))){
var inst_14539 = (state_14575[(7)]);
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14575__$1,(11),inst_14539);
} else {
if((state_val_14576 === (17))){
var inst_14560 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
if(cljs.core.truth_(inst_14560)){
var statearr_14592_17708 = state_14575__$1;
(statearr_14592_17708[(1)] = (19));

} else {
var statearr_14593_17709 = state_14575__$1;
(statearr_14593_17709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (3))){
var inst_14572 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14575__$1,inst_14572);
} else {
if((state_val_14576 === (12))){
var inst_14549 = (state_14575[(10)]);
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14575__$1,(14),inst_14549);
} else {
if((state_val_14576 === (2))){
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14575__$1,(4),results);
} else {
if((state_val_14576 === (19))){
var state_14575__$1 = state_14575;
var statearr_14597_17718 = state_14575__$1;
(statearr_14597_17718[(2)] = null);

(statearr_14597_17718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (11))){
var inst_14549 = (state_14575[(2)]);
var state_14575__$1 = (function (){var statearr_14599 = state_14575;
(statearr_14599[(10)] = inst_14549);

return statearr_14599;
})();
var statearr_14601_17727 = state_14575__$1;
(statearr_14601_17727[(2)] = null);

(statearr_14601_17727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (9))){
var state_14575__$1 = state_14575;
var statearr_14606_17729 = state_14575__$1;
(statearr_14606_17729[(2)] = null);

(statearr_14606_17729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (5))){
var state_14575__$1 = state_14575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14607_17733 = state_14575__$1;
(statearr_14607_17733[(1)] = (8));

} else {
var statearr_14608_17734 = state_14575__$1;
(statearr_14608_17734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (14))){
var inst_14552 = (state_14575[(8)]);
var inst_14554 = (state_14575[(11)]);
var inst_14552__$1 = (state_14575[(2)]);
var inst_14553 = (inst_14552__$1 == null);
var inst_14554__$1 = cljs.core.not(inst_14553);
var state_14575__$1 = (function (){var statearr_14609 = state_14575;
(statearr_14609[(8)] = inst_14552__$1);

(statearr_14609[(11)] = inst_14554__$1);

return statearr_14609;
})();
if(inst_14554__$1){
var statearr_14610_17736 = state_14575__$1;
(statearr_14610_17736[(1)] = (15));

} else {
var statearr_14611_17737 = state_14575__$1;
(statearr_14611_17737[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (16))){
var inst_14554 = (state_14575[(11)]);
var state_14575__$1 = state_14575;
var statearr_14612_17740 = state_14575__$1;
(statearr_14612_17740[(2)] = inst_14554);

(statearr_14612_17740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (10))){
var inst_14546 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
var statearr_14613_17742 = state_14575__$1;
(statearr_14613_17742[(2)] = inst_14546);

(statearr_14613_17742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (18))){
var inst_14557 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
var statearr_14614_17749 = state_14575__$1;
(statearr_14614_17749[(2)] = inst_14557);

(statearr_14614_17749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (8))){
var inst_14543 = cljs.core.async.close_BANG_(to);
var state_14575__$1 = state_14575;
var statearr_14615_17755 = state_14575__$1;
(statearr_14615_17755[(2)] = inst_14543);

(statearr_14615_17755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0 = (function (){
var statearr_14616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__);

(statearr_14616[(1)] = (1));

return statearr_14616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1 = (function (state_14575){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_14575);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e14621){var ex__13119__auto__ = e14621;
var statearr_14623_17757 = state_14575;
(statearr_14623_17757[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_14575[(4)]))){
var statearr_14624_17761 = state_14575;
(statearr_14624_17761[(1)] = cljs.core.first((state_14575[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17762 = state_14575;
state_14575 = G__17762;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__ = function(state_14575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1.call(this,state_14575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_14627 = f__14022__auto__();
(statearr_14627[(6)] = c__14021__auto__);

return statearr_14627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));

return c__14021__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14630 = arguments.length;
switch (G__14630) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14632 = arguments.length;
switch (G__14632) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14638 = arguments.length;
switch (G__14638) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14021__auto___17816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_14673){
var state_val_14674 = (state_14673[(1)]);
if((state_val_14674 === (7))){
var inst_14667 = (state_14673[(2)]);
var state_14673__$1 = state_14673;
var statearr_14677_17831 = state_14673__$1;
(statearr_14677_17831[(2)] = inst_14667);

(statearr_14677_17831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (1))){
var state_14673__$1 = state_14673;
var statearr_14678_17838 = state_14673__$1;
(statearr_14678_17838[(2)] = null);

(statearr_14678_17838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (4))){
var inst_14645 = (state_14673[(7)]);
var inst_14645__$1 = (state_14673[(2)]);
var inst_14646 = (inst_14645__$1 == null);
var state_14673__$1 = (function (){var statearr_14681 = state_14673;
(statearr_14681[(7)] = inst_14645__$1);

return statearr_14681;
})();
if(cljs.core.truth_(inst_14646)){
var statearr_14684_17840 = state_14673__$1;
(statearr_14684_17840[(1)] = (5));

} else {
var statearr_14685_17841 = state_14673__$1;
(statearr_14685_17841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (13))){
var state_14673__$1 = state_14673;
var statearr_14688_17851 = state_14673__$1;
(statearr_14688_17851[(2)] = null);

(statearr_14688_17851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (6))){
var inst_14645 = (state_14673[(7)]);
var inst_14654 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14645) : p.call(null,inst_14645));
var state_14673__$1 = state_14673;
if(cljs.core.truth_(inst_14654)){
var statearr_14691_17854 = state_14673__$1;
(statearr_14691_17854[(1)] = (9));

} else {
var statearr_14692_17856 = state_14673__$1;
(statearr_14692_17856[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (3))){
var inst_14669 = (state_14673[(2)]);
var state_14673__$1 = state_14673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14673__$1,inst_14669);
} else {
if((state_val_14674 === (12))){
var state_14673__$1 = state_14673;
var statearr_14694_17858 = state_14673__$1;
(statearr_14694_17858[(2)] = null);

(statearr_14694_17858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (2))){
var state_14673__$1 = state_14673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14673__$1,(4),ch);
} else {
if((state_val_14674 === (11))){
var inst_14645 = (state_14673[(7)]);
var inst_14658 = (state_14673[(2)]);
var state_14673__$1 = state_14673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14673__$1,(8),inst_14658,inst_14645);
} else {
if((state_val_14674 === (9))){
var state_14673__$1 = state_14673;
var statearr_14698_17863 = state_14673__$1;
(statearr_14698_17863[(2)] = tc);

(statearr_14698_17863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (5))){
var inst_14648 = cljs.core.async.close_BANG_(tc);
var inst_14649 = cljs.core.async.close_BANG_(fc);
var state_14673__$1 = (function (){var statearr_14702 = state_14673;
(statearr_14702[(8)] = inst_14648);

return statearr_14702;
})();
var statearr_14703_17864 = state_14673__$1;
(statearr_14703_17864[(2)] = inst_14649);

(statearr_14703_17864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (14))){
var inst_14665 = (state_14673[(2)]);
var state_14673__$1 = state_14673;
var statearr_14706_17865 = state_14673__$1;
(statearr_14706_17865[(2)] = inst_14665);

(statearr_14706_17865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (10))){
var state_14673__$1 = state_14673;
var statearr_14708_17870 = state_14673__$1;
(statearr_14708_17870[(2)] = fc);

(statearr_14708_17870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (8))){
var inst_14660 = (state_14673[(2)]);
var state_14673__$1 = state_14673;
if(cljs.core.truth_(inst_14660)){
var statearr_14709_17871 = state_14673__$1;
(statearr_14709_17871[(1)] = (12));

} else {
var statearr_14710_17872 = state_14673__$1;
(statearr_14710_17872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_14714 = [null,null,null,null,null,null,null,null,null];
(statearr_14714[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_14714[(1)] = (1));

return statearr_14714;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_14673){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_14673);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e14715){var ex__13119__auto__ = e14715;
var statearr_14716_17886 = state_14673;
(statearr_14716_17886[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_14673[(4)]))){
var statearr_14717_17890 = state_14673;
(statearr_14717_17890[(1)] = cljs.core.first((state_14673[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17892 = state_14673;
state_14673 = G__17892;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_14673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_14673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_14719 = f__14022__auto__();
(statearr_14719[(6)] = c__14021__auto___17816);

return statearr_14719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14021__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_14754){
var state_val_14755 = (state_14754[(1)]);
if((state_val_14755 === (7))){
var inst_14750 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14757_17895 = state_14754__$1;
(statearr_14757_17895[(2)] = inst_14750);

(statearr_14757_17895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (1))){
var inst_14728 = init;
var inst_14729 = inst_14728;
var state_14754__$1 = (function (){var statearr_14760 = state_14754;
(statearr_14760[(7)] = inst_14729);

return statearr_14760;
})();
var statearr_14761_17896 = state_14754__$1;
(statearr_14761_17896[(2)] = null);

(statearr_14761_17896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (4))){
var inst_14734 = (state_14754[(8)]);
var inst_14734__$1 = (state_14754[(2)]);
var inst_14735 = (inst_14734__$1 == null);
var state_14754__$1 = (function (){var statearr_14763 = state_14754;
(statearr_14763[(8)] = inst_14734__$1);

return statearr_14763;
})();
if(cljs.core.truth_(inst_14735)){
var statearr_14764_17897 = state_14754__$1;
(statearr_14764_17897[(1)] = (5));

} else {
var statearr_14765_17898 = state_14754__$1;
(statearr_14765_17898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (6))){
var inst_14734 = (state_14754[(8)]);
var inst_14729 = (state_14754[(7)]);
var inst_14739 = (state_14754[(9)]);
var inst_14739__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14729,inst_14734) : f.call(null,inst_14729,inst_14734));
var inst_14740 = cljs.core.reduced_QMARK_(inst_14739__$1);
var state_14754__$1 = (function (){var statearr_14768 = state_14754;
(statearr_14768[(9)] = inst_14739__$1);

return statearr_14768;
})();
if(inst_14740){
var statearr_14772_17899 = state_14754__$1;
(statearr_14772_17899[(1)] = (8));

} else {
var statearr_14774_17900 = state_14754__$1;
(statearr_14774_17900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (3))){
var inst_14752 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14754__$1,inst_14752);
} else {
if((state_val_14755 === (2))){
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14754__$1,(4),ch);
} else {
if((state_val_14755 === (9))){
var inst_14739 = (state_14754[(9)]);
var inst_14729 = inst_14739;
var state_14754__$1 = (function (){var statearr_14780 = state_14754;
(statearr_14780[(7)] = inst_14729);

return statearr_14780;
})();
var statearr_14784_17901 = state_14754__$1;
(statearr_14784_17901[(2)] = null);

(statearr_14784_17901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (5))){
var inst_14729 = (state_14754[(7)]);
var state_14754__$1 = state_14754;
var statearr_14786_17908 = state_14754__$1;
(statearr_14786_17908[(2)] = inst_14729);

(statearr_14786_17908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (10))){
var inst_14747 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14790_17909 = state_14754__$1;
(statearr_14790_17909[(2)] = inst_14747);

(statearr_14790_17909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (8))){
var inst_14739 = (state_14754[(9)]);
var inst_14743 = cljs.core.deref(inst_14739);
var state_14754__$1 = state_14754;
var statearr_14798_17910 = state_14754__$1;
(statearr_14798_17910[(2)] = inst_14743);

(statearr_14798_17910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13116__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13116__auto____0 = (function (){
var statearr_14804 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14804[(0)] = cljs$core$async$reduce_$_state_machine__13116__auto__);

(statearr_14804[(1)] = (1));

return statearr_14804;
});
var cljs$core$async$reduce_$_state_machine__13116__auto____1 = (function (state_14754){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_14754);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e14808){var ex__13119__auto__ = e14808;
var statearr_14810_17914 = state_14754;
(statearr_14810_17914[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_14754[(4)]))){
var statearr_14811_17915 = state_14754;
(statearr_14811_17915[(1)] = cljs.core.first((state_14754[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17917 = state_14754;
state_14754 = G__17917;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13116__auto__ = function(state_14754){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13116__auto____1.call(this,state_14754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13116__auto____0;
cljs$core$async$reduce_$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13116__auto____1;
return cljs$core$async$reduce_$_state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_14820 = f__14022__auto__();
(statearr_14820[(6)] = c__14021__auto__);

return statearr_14820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));

return c__14021__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14021__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_14841){
var state_val_14842 = (state_14841[(1)]);
if((state_val_14842 === (1))){
var inst_14833 = cljs.core.async.reduce(f__$1,init,ch);
var state_14841__$1 = state_14841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14841__$1,(2),inst_14833);
} else {
if((state_val_14842 === (2))){
var inst_14835 = (state_14841[(2)]);
var inst_14836 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14835) : f__$1.call(null,inst_14835));
var state_14841__$1 = state_14841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14841__$1,inst_14836);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13116__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13116__auto____0 = (function (){
var statearr_14858 = [null,null,null,null,null,null,null];
(statearr_14858[(0)] = cljs$core$async$transduce_$_state_machine__13116__auto__);

(statearr_14858[(1)] = (1));

return statearr_14858;
});
var cljs$core$async$transduce_$_state_machine__13116__auto____1 = (function (state_14841){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_14841);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e14859){var ex__13119__auto__ = e14859;
var statearr_14861_17920 = state_14841;
(statearr_14861_17920[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_14841[(4)]))){
var statearr_14862_17922 = state_14841;
(statearr_14862_17922[(1)] = cljs.core.first((state_14841[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17923 = state_14841;
state_14841 = G__17923;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13116__auto__ = function(state_14841){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13116__auto____1.call(this,state_14841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13116__auto____0;
cljs$core$async$transduce_$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13116__auto____1;
return cljs$core$async$transduce_$_state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_14867 = f__14022__auto__();
(statearr_14867[(6)] = c__14021__auto__);

return statearr_14867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));

return c__14021__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14877 = arguments.length;
switch (G__14877) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14021__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_14917){
var state_val_14919 = (state_14917[(1)]);
if((state_val_14919 === (7))){
var inst_14897 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
var statearr_14930_17935 = state_14917__$1;
(statearr_14930_17935[(2)] = inst_14897);

(statearr_14930_17935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (1))){
var inst_14887 = cljs.core.seq(coll);
var inst_14890 = inst_14887;
var state_14917__$1 = (function (){var statearr_14935 = state_14917;
(statearr_14935[(7)] = inst_14890);

return statearr_14935;
})();
var statearr_14937_17949 = state_14917__$1;
(statearr_14937_17949[(2)] = null);

(statearr_14937_17949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (4))){
var inst_14890 = (state_14917[(7)]);
var inst_14894 = cljs.core.first(inst_14890);
var state_14917__$1 = state_14917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14917__$1,(7),ch,inst_14894);
} else {
if((state_val_14919 === (13))){
var inst_14910 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
var statearr_14946_17951 = state_14917__$1;
(statearr_14946_17951[(2)] = inst_14910);

(statearr_14946_17951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (6))){
var inst_14900 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
if(cljs.core.truth_(inst_14900)){
var statearr_14949_17952 = state_14917__$1;
(statearr_14949_17952[(1)] = (8));

} else {
var statearr_14952_17953 = state_14917__$1;
(statearr_14952_17953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (3))){
var inst_14914 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14917__$1,inst_14914);
} else {
if((state_val_14919 === (12))){
var state_14917__$1 = state_14917;
var statearr_14959_17958 = state_14917__$1;
(statearr_14959_17958[(2)] = null);

(statearr_14959_17958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (2))){
var inst_14890 = (state_14917[(7)]);
var state_14917__$1 = state_14917;
if(cljs.core.truth_(inst_14890)){
var statearr_14964_17959 = state_14917__$1;
(statearr_14964_17959[(1)] = (4));

} else {
var statearr_14965_17960 = state_14917__$1;
(statearr_14965_17960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (11))){
var inst_14907 = cljs.core.async.close_BANG_(ch);
var state_14917__$1 = state_14917;
var statearr_14969_17961 = state_14917__$1;
(statearr_14969_17961[(2)] = inst_14907);

(statearr_14969_17961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (9))){
var state_14917__$1 = state_14917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14971_17962 = state_14917__$1;
(statearr_14971_17962[(1)] = (11));

} else {
var statearr_14972_17963 = state_14917__$1;
(statearr_14972_17963[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (5))){
var inst_14890 = (state_14917[(7)]);
var state_14917__$1 = state_14917;
var statearr_14976_17964 = state_14917__$1;
(statearr_14976_17964[(2)] = inst_14890);

(statearr_14976_17964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (10))){
var inst_14912 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
var statearr_14978_17965 = state_14917__$1;
(statearr_14978_17965[(2)] = inst_14912);

(statearr_14978_17965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (8))){
var inst_14890 = (state_14917[(7)]);
var inst_14902 = cljs.core.next(inst_14890);
var inst_14890__$1 = inst_14902;
var state_14917__$1 = (function (){var statearr_14985 = state_14917;
(statearr_14985[(7)] = inst_14890__$1);

return statearr_14985;
})();
var statearr_14987_17966 = state_14917__$1;
(statearr_14987_17966[(2)] = null);

(statearr_14987_17966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_14993 = [null,null,null,null,null,null,null,null];
(statearr_14993[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_14993[(1)] = (1));

return statearr_14993;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_14917){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_14917);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e14994){var ex__13119__auto__ = e14994;
var statearr_14996_17967 = state_14917;
(statearr_14996_17967[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_14917[(4)]))){
var statearr_15000_17972 = state_14917;
(statearr_15000_17972[(1)] = cljs.core.first((state_14917[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17974 = state_14917;
state_14917 = G__17974;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_14917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_14917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_15007 = f__14022__auto__();
(statearr_15007[(6)] = c__14021__auto__);

return statearr_15007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));

return c__14021__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15025 = arguments.length;
switch (G__15025) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17986 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17986(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17999 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17999(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18004 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18004(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18014 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18014(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15096 = (function (ch,cs,meta15097){
this.ch = ch;
this.cs = cs;
this.meta15097 = meta15097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15098,meta15097__$1){
var self__ = this;
var _15098__$1 = this;
return (new cljs.core.async.t_cljs$core$async15096(self__.ch,self__.cs,meta15097__$1));
}));

(cljs.core.async.t_cljs$core$async15096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15098){
var self__ = this;
var _15098__$1 = this;
return self__.meta15097;
}));

(cljs.core.async.t_cljs$core$async15096.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15096.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15096.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15096.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15096.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15097","meta15097",-989912059,null)], null);
}));

(cljs.core.async.t_cljs$core$async15096.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15096");

(cljs.core.async.t_cljs$core$async15096.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15096");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15096.
 */
cljs.core.async.__GT_t_cljs$core$async15096 = (function cljs$core$async$__GT_t_cljs$core$async15096(ch,cs,meta15097){
return (new cljs.core.async.t_cljs$core$async15096(ch,cs,meta15097));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15096(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14021__auto___18028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_15329){
var state_val_15330 = (state_15329[(1)]);
if((state_val_15330 === (7))){
var inst_15317 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15333_18030 = state_15329__$1;
(statearr_15333_18030[(2)] = inst_15317);

(statearr_15333_18030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (20))){
var inst_15198 = (state_15329[(7)]);
var inst_15215 = cljs.core.first(inst_15198);
var inst_15216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15215,(0),null);
var inst_15217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15215,(1),null);
var state_15329__$1 = (function (){var statearr_15342 = state_15329;
(statearr_15342[(8)] = inst_15216);

return statearr_15342;
})();
if(cljs.core.truth_(inst_15217)){
var statearr_15343_18032 = state_15329__$1;
(statearr_15343_18032[(1)] = (22));

} else {
var statearr_15344_18033 = state_15329__$1;
(statearr_15344_18033[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (27))){
var inst_15255 = (state_15329[(9)]);
var inst_15155 = (state_15329[(10)]);
var inst_15253 = (state_15329[(11)]);
var inst_15260 = (state_15329[(12)]);
var inst_15260__$1 = cljs.core._nth(inst_15253,inst_15255);
var inst_15262 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15260__$1,inst_15155,done);
var state_15329__$1 = (function (){var statearr_15349 = state_15329;
(statearr_15349[(12)] = inst_15260__$1);

return statearr_15349;
})();
if(cljs.core.truth_(inst_15262)){
var statearr_15350_18037 = state_15329__$1;
(statearr_15350_18037[(1)] = (30));

} else {
var statearr_15351_18038 = state_15329__$1;
(statearr_15351_18038[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (1))){
var state_15329__$1 = state_15329;
var statearr_15356_18039 = state_15329__$1;
(statearr_15356_18039[(2)] = null);

(statearr_15356_18039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (24))){
var inst_15198 = (state_15329[(7)]);
var inst_15225 = (state_15329[(2)]);
var inst_15226 = cljs.core.next(inst_15198);
var inst_15168 = inst_15226;
var inst_15169 = null;
var inst_15170 = (0);
var inst_15171 = (0);
var state_15329__$1 = (function (){var statearr_15361 = state_15329;
(statearr_15361[(13)] = inst_15169);

(statearr_15361[(14)] = inst_15171);

(statearr_15361[(15)] = inst_15225);

(statearr_15361[(16)] = inst_15168);

(statearr_15361[(17)] = inst_15170);

return statearr_15361;
})();
var statearr_15362_18041 = state_15329__$1;
(statearr_15362_18041[(2)] = null);

(statearr_15362_18041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (39))){
var state_15329__$1 = state_15329;
var statearr_15368_18042 = state_15329__$1;
(statearr_15368_18042[(2)] = null);

(statearr_15368_18042[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (4))){
var inst_15155 = (state_15329[(10)]);
var inst_15155__$1 = (state_15329[(2)]);
var inst_15156 = (inst_15155__$1 == null);
var state_15329__$1 = (function (){var statearr_15372 = state_15329;
(statearr_15372[(10)] = inst_15155__$1);

return statearr_15372;
})();
if(cljs.core.truth_(inst_15156)){
var statearr_15373_18045 = state_15329__$1;
(statearr_15373_18045[(1)] = (5));

} else {
var statearr_15375_18046 = state_15329__$1;
(statearr_15375_18046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (15))){
var inst_15169 = (state_15329[(13)]);
var inst_15171 = (state_15329[(14)]);
var inst_15168 = (state_15329[(16)]);
var inst_15170 = (state_15329[(17)]);
var inst_15189 = (state_15329[(2)]);
var inst_15193 = (inst_15171 + (1));
var tmp15365 = inst_15169;
var tmp15366 = inst_15168;
var tmp15367 = inst_15170;
var inst_15168__$1 = tmp15366;
var inst_15169__$1 = tmp15365;
var inst_15170__$1 = tmp15367;
var inst_15171__$1 = inst_15193;
var state_15329__$1 = (function (){var statearr_15388 = state_15329;
(statearr_15388[(13)] = inst_15169__$1);

(statearr_15388[(14)] = inst_15171__$1);

(statearr_15388[(18)] = inst_15189);

(statearr_15388[(16)] = inst_15168__$1);

(statearr_15388[(17)] = inst_15170__$1);

return statearr_15388;
})();
var statearr_15392_18053 = state_15329__$1;
(statearr_15392_18053[(2)] = null);

(statearr_15392_18053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (21))){
var inst_15229 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15397_18056 = state_15329__$1;
(statearr_15397_18056[(2)] = inst_15229);

(statearr_15397_18056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (31))){
var inst_15260 = (state_15329[(12)]);
var inst_15268 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15260);
var state_15329__$1 = state_15329;
var statearr_15399_18059 = state_15329__$1;
(statearr_15399_18059[(2)] = inst_15268);

(statearr_15399_18059[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (32))){
var inst_15252 = (state_15329[(19)]);
var inst_15255 = (state_15329[(9)]);
var inst_15253 = (state_15329[(11)]);
var inst_15254 = (state_15329[(20)]);
var inst_15270 = (state_15329[(2)]);
var inst_15271 = (inst_15255 + (1));
var tmp15394 = inst_15252;
var tmp15395 = inst_15253;
var tmp15396 = inst_15254;
var inst_15252__$1 = tmp15394;
var inst_15253__$1 = tmp15395;
var inst_15254__$1 = tmp15396;
var inst_15255__$1 = inst_15271;
var state_15329__$1 = (function (){var statearr_15408 = state_15329;
(statearr_15408[(19)] = inst_15252__$1);

(statearr_15408[(9)] = inst_15255__$1);

(statearr_15408[(11)] = inst_15253__$1);

(statearr_15408[(20)] = inst_15254__$1);

(statearr_15408[(21)] = inst_15270);

return statearr_15408;
})();
var statearr_15409_18065 = state_15329__$1;
(statearr_15409_18065[(2)] = null);

(statearr_15409_18065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (40))){
var inst_15290 = (state_15329[(22)]);
var inst_15294 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15290);
var state_15329__$1 = state_15329;
var statearr_15414_18069 = state_15329__$1;
(statearr_15414_18069[(2)] = inst_15294);

(statearr_15414_18069[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (33))){
var inst_15276 = (state_15329[(23)]);
var inst_15278 = cljs.core.chunked_seq_QMARK_(inst_15276);
var state_15329__$1 = state_15329;
if(inst_15278){
var statearr_15416_18070 = state_15329__$1;
(statearr_15416_18070[(1)] = (36));

} else {
var statearr_15417_18071 = state_15329__$1;
(statearr_15417_18071[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (13))){
var inst_15183 = (state_15329[(24)]);
var inst_15186 = cljs.core.async.close_BANG_(inst_15183);
var state_15329__$1 = state_15329;
var statearr_15424_18073 = state_15329__$1;
(statearr_15424_18073[(2)] = inst_15186);

(statearr_15424_18073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (22))){
var inst_15216 = (state_15329[(8)]);
var inst_15222 = cljs.core.async.close_BANG_(inst_15216);
var state_15329__$1 = state_15329;
var statearr_15426_18078 = state_15329__$1;
(statearr_15426_18078[(2)] = inst_15222);

(statearr_15426_18078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (36))){
var inst_15276 = (state_15329[(23)]);
var inst_15283 = cljs.core.chunk_first(inst_15276);
var inst_15284 = cljs.core.chunk_rest(inst_15276);
var inst_15285 = cljs.core.count(inst_15283);
var inst_15252 = inst_15284;
var inst_15253 = inst_15283;
var inst_15254 = inst_15285;
var inst_15255 = (0);
var state_15329__$1 = (function (){var statearr_15427 = state_15329;
(statearr_15427[(19)] = inst_15252);

(statearr_15427[(9)] = inst_15255);

(statearr_15427[(11)] = inst_15253);

(statearr_15427[(20)] = inst_15254);

return statearr_15427;
})();
var statearr_15429_18080 = state_15329__$1;
(statearr_15429_18080[(2)] = null);

(statearr_15429_18080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (41))){
var inst_15276 = (state_15329[(23)]);
var inst_15296 = (state_15329[(2)]);
var inst_15297 = cljs.core.next(inst_15276);
var inst_15252 = inst_15297;
var inst_15253 = null;
var inst_15254 = (0);
var inst_15255 = (0);
var state_15329__$1 = (function (){var statearr_15430 = state_15329;
(statearr_15430[(19)] = inst_15252);

(statearr_15430[(9)] = inst_15255);

(statearr_15430[(11)] = inst_15253);

(statearr_15430[(20)] = inst_15254);

(statearr_15430[(25)] = inst_15296);

return statearr_15430;
})();
var statearr_15431_18085 = state_15329__$1;
(statearr_15431_18085[(2)] = null);

(statearr_15431_18085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (43))){
var state_15329__$1 = state_15329;
var statearr_15432_18087 = state_15329__$1;
(statearr_15432_18087[(2)] = null);

(statearr_15432_18087[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (29))){
var inst_15305 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15440_18092 = state_15329__$1;
(statearr_15440_18092[(2)] = inst_15305);

(statearr_15440_18092[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (44))){
var inst_15314 = (state_15329[(2)]);
var state_15329__$1 = (function (){var statearr_15447 = state_15329;
(statearr_15447[(26)] = inst_15314);

return statearr_15447;
})();
var statearr_15449_18095 = state_15329__$1;
(statearr_15449_18095[(2)] = null);

(statearr_15449_18095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (6))){
var inst_15242 = (state_15329[(27)]);
var inst_15241 = cljs.core.deref(cs);
var inst_15242__$1 = cljs.core.keys(inst_15241);
var inst_15244 = cljs.core.count(inst_15242__$1);
var inst_15246 = cljs.core.reset_BANG_(dctr,inst_15244);
var inst_15251 = cljs.core.seq(inst_15242__$1);
var inst_15252 = inst_15251;
var inst_15253 = null;
var inst_15254 = (0);
var inst_15255 = (0);
var state_15329__$1 = (function (){var statearr_15454 = state_15329;
(statearr_15454[(19)] = inst_15252);

(statearr_15454[(9)] = inst_15255);

(statearr_15454[(11)] = inst_15253);

(statearr_15454[(20)] = inst_15254);

(statearr_15454[(28)] = inst_15246);

(statearr_15454[(27)] = inst_15242__$1);

return statearr_15454;
})();
var statearr_15458_18098 = state_15329__$1;
(statearr_15458_18098[(2)] = null);

(statearr_15458_18098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (28))){
var inst_15252 = (state_15329[(19)]);
var inst_15276 = (state_15329[(23)]);
var inst_15276__$1 = cljs.core.seq(inst_15252);
var state_15329__$1 = (function (){var statearr_15460 = state_15329;
(statearr_15460[(23)] = inst_15276__$1);

return statearr_15460;
})();
if(inst_15276__$1){
var statearr_15461_18107 = state_15329__$1;
(statearr_15461_18107[(1)] = (33));

} else {
var statearr_15462_18109 = state_15329__$1;
(statearr_15462_18109[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (25))){
var inst_15255 = (state_15329[(9)]);
var inst_15254 = (state_15329[(20)]);
var inst_15257 = (inst_15255 < inst_15254);
var inst_15258 = inst_15257;
var state_15329__$1 = state_15329;
if(cljs.core.truth_(inst_15258)){
var statearr_15467_18110 = state_15329__$1;
(statearr_15467_18110[(1)] = (27));

} else {
var statearr_15468_18111 = state_15329__$1;
(statearr_15468_18111[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (34))){
var state_15329__$1 = state_15329;
var statearr_15470_18112 = state_15329__$1;
(statearr_15470_18112[(2)] = null);

(statearr_15470_18112[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (17))){
var state_15329__$1 = state_15329;
var statearr_15474_18113 = state_15329__$1;
(statearr_15474_18113[(2)] = null);

(statearr_15474_18113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (3))){
var inst_15319 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15329__$1,inst_15319);
} else {
if((state_val_15330 === (12))){
var inst_15236 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15476_18117 = state_15329__$1;
(statearr_15476_18117[(2)] = inst_15236);

(statearr_15476_18117[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (2))){
var state_15329__$1 = state_15329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15329__$1,(4),ch);
} else {
if((state_val_15330 === (23))){
var state_15329__$1 = state_15329;
var statearr_15477_18119 = state_15329__$1;
(statearr_15477_18119[(2)] = null);

(statearr_15477_18119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (35))){
var inst_15303 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15479_18120 = state_15329__$1;
(statearr_15479_18120[(2)] = inst_15303);

(statearr_15479_18120[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (19))){
var inst_15198 = (state_15329[(7)]);
var inst_15204 = cljs.core.chunk_first(inst_15198);
var inst_15207 = cljs.core.chunk_rest(inst_15198);
var inst_15208 = cljs.core.count(inst_15204);
var inst_15168 = inst_15207;
var inst_15169 = inst_15204;
var inst_15170 = inst_15208;
var inst_15171 = (0);
var state_15329__$1 = (function (){var statearr_15480 = state_15329;
(statearr_15480[(13)] = inst_15169);

(statearr_15480[(14)] = inst_15171);

(statearr_15480[(16)] = inst_15168);

(statearr_15480[(17)] = inst_15170);

return statearr_15480;
})();
var statearr_15481_18123 = state_15329__$1;
(statearr_15481_18123[(2)] = null);

(statearr_15481_18123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (11))){
var inst_15198 = (state_15329[(7)]);
var inst_15168 = (state_15329[(16)]);
var inst_15198__$1 = cljs.core.seq(inst_15168);
var state_15329__$1 = (function (){var statearr_15489 = state_15329;
(statearr_15489[(7)] = inst_15198__$1);

return statearr_15489;
})();
if(inst_15198__$1){
var statearr_15490_18126 = state_15329__$1;
(statearr_15490_18126[(1)] = (16));

} else {
var statearr_15491_18131 = state_15329__$1;
(statearr_15491_18131[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (9))){
var inst_15238 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15495_18132 = state_15329__$1;
(statearr_15495_18132[(2)] = inst_15238);

(statearr_15495_18132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (5))){
var inst_15166 = cljs.core.deref(cs);
var inst_15167 = cljs.core.seq(inst_15166);
var inst_15168 = inst_15167;
var inst_15169 = null;
var inst_15170 = (0);
var inst_15171 = (0);
var state_15329__$1 = (function (){var statearr_15497 = state_15329;
(statearr_15497[(13)] = inst_15169);

(statearr_15497[(14)] = inst_15171);

(statearr_15497[(16)] = inst_15168);

(statearr_15497[(17)] = inst_15170);

return statearr_15497;
})();
var statearr_15499_18153 = state_15329__$1;
(statearr_15499_18153[(2)] = null);

(statearr_15499_18153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (14))){
var state_15329__$1 = state_15329;
var statearr_15502_18155 = state_15329__$1;
(statearr_15502_18155[(2)] = null);

(statearr_15502_18155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (45))){
var inst_15311 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15504_18156 = state_15329__$1;
(statearr_15504_18156[(2)] = inst_15311);

(statearr_15504_18156[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (26))){
var inst_15242 = (state_15329[(27)]);
var inst_15307 = (state_15329[(2)]);
var inst_15308 = cljs.core.seq(inst_15242);
var state_15329__$1 = (function (){var statearr_15505 = state_15329;
(statearr_15505[(29)] = inst_15307);

return statearr_15505;
})();
if(inst_15308){
var statearr_15506_18166 = state_15329__$1;
(statearr_15506_18166[(1)] = (42));

} else {
var statearr_15507_18167 = state_15329__$1;
(statearr_15507_18167[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (16))){
var inst_15198 = (state_15329[(7)]);
var inst_15201 = cljs.core.chunked_seq_QMARK_(inst_15198);
var state_15329__$1 = state_15329;
if(inst_15201){
var statearr_15508_18168 = state_15329__$1;
(statearr_15508_18168[(1)] = (19));

} else {
var statearr_15513_18169 = state_15329__$1;
(statearr_15513_18169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (38))){
var inst_15300 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15519_18170 = state_15329__$1;
(statearr_15519_18170[(2)] = inst_15300);

(statearr_15519_18170[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (30))){
var state_15329__$1 = state_15329;
var statearr_15522_18171 = state_15329__$1;
(statearr_15522_18171[(2)] = null);

(statearr_15522_18171[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (10))){
var inst_15169 = (state_15329[(13)]);
var inst_15171 = (state_15329[(14)]);
var inst_15182 = cljs.core._nth(inst_15169,inst_15171);
var inst_15183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15182,(0),null);
var inst_15184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15182,(1),null);
var state_15329__$1 = (function (){var statearr_15523 = state_15329;
(statearr_15523[(24)] = inst_15183);

return statearr_15523;
})();
if(cljs.core.truth_(inst_15184)){
var statearr_15524_18179 = state_15329__$1;
(statearr_15524_18179[(1)] = (13));

} else {
var statearr_15525_18185 = state_15329__$1;
(statearr_15525_18185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (18))){
var inst_15234 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15527_18197 = state_15329__$1;
(statearr_15527_18197[(2)] = inst_15234);

(statearr_15527_18197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (42))){
var state_15329__$1 = state_15329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15329__$1,(45),dchan);
} else {
if((state_val_15330 === (37))){
var inst_15276 = (state_15329[(23)]);
var inst_15290 = (state_15329[(22)]);
var inst_15155 = (state_15329[(10)]);
var inst_15290__$1 = cljs.core.first(inst_15276);
var inst_15291 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15290__$1,inst_15155,done);
var state_15329__$1 = (function (){var statearr_15528 = state_15329;
(statearr_15528[(22)] = inst_15290__$1);

return statearr_15528;
})();
if(cljs.core.truth_(inst_15291)){
var statearr_15530_18211 = state_15329__$1;
(statearr_15530_18211[(1)] = (39));

} else {
var statearr_15534_18212 = state_15329__$1;
(statearr_15534_18212[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (8))){
var inst_15171 = (state_15329[(14)]);
var inst_15170 = (state_15329[(17)]);
var inst_15174 = (inst_15171 < inst_15170);
var inst_15175 = inst_15174;
var state_15329__$1 = state_15329;
if(cljs.core.truth_(inst_15175)){
var statearr_15535_18220 = state_15329__$1;
(statearr_15535_18220[(1)] = (10));

} else {
var statearr_15536_18230 = state_15329__$1;
(statearr_15536_18230[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13116__auto__ = null;
var cljs$core$async$mult_$_state_machine__13116__auto____0 = (function (){
var statearr_15537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15537[(0)] = cljs$core$async$mult_$_state_machine__13116__auto__);

(statearr_15537[(1)] = (1));

return statearr_15537;
});
var cljs$core$async$mult_$_state_machine__13116__auto____1 = (function (state_15329){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_15329);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e15538){var ex__13119__auto__ = e15538;
var statearr_15539_18253 = state_15329;
(statearr_15539_18253[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_15329[(4)]))){
var statearr_15540_18254 = state_15329;
(statearr_15540_18254[(1)] = cljs.core.first((state_15329[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18263 = state_15329;
state_15329 = G__18263;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13116__auto__ = function(state_15329){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13116__auto____1.call(this,state_15329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13116__auto____0;
cljs$core$async$mult_$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13116__auto____1;
return cljs$core$async$mult_$_state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_15541 = f__14022__auto__();
(statearr_15541[(6)] = c__14021__auto___18028);

return statearr_15541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15543 = arguments.length;
switch (G__15543) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18301 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18301(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18313 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18313(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18323 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18323(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18327 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18327(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18350 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18350(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18354 = arguments.length;
var i__5770__auto___18359 = (0);
while(true){
if((i__5770__auto___18359 < len__5769__auto___18354)){
args__5775__auto__.push((arguments[i__5770__auto___18359]));

var G__18360 = (i__5770__auto___18359 + (1));
i__5770__auto___18359 = G__18360;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15587){
var map__15588 = p__15587;
var map__15588__$1 = cljs.core.__destructure_map(map__15588);
var opts = map__15588__$1;
var statearr_15589_18374 = state;
(statearr_15589_18374[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15590_18380 = state;
(statearr_15590_18380[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15594_18387 = state;
(statearr_15594_18387[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15583){
var G__15584 = cljs.core.first(seq15583);
var seq15583__$1 = cljs.core.next(seq15583);
var G__15585 = cljs.core.first(seq15583__$1);
var seq15583__$2 = cljs.core.next(seq15583__$1);
var G__15586 = cljs.core.first(seq15583__$2);
var seq15583__$3 = cljs.core.next(seq15583__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15584,G__15585,G__15586,seq15583__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15606 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15607){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15607 = meta15607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15608,meta15607__$1){
var self__ = this;
var _15608__$1 = this;
return (new cljs.core.async.t_cljs$core$async15606(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15607__$1));
}));

(cljs.core.async.t_cljs$core$async15606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15608){
var self__ = this;
var _15608__$1 = this;
return self__.meta15607;
}));

(cljs.core.async.t_cljs$core$async15606.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15606.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15606.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15606.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15606.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15606.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15606.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15607","meta15607",-148108576,null)], null);
}));

(cljs.core.async.t_cljs$core$async15606.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15606");

(cljs.core.async.t_cljs$core$async15606.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15606");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15606.
 */
cljs.core.async.__GT_t_cljs$core$async15606 = (function cljs$core$async$__GT_t_cljs$core$async15606(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15607){
return (new cljs.core.async.t_cljs$core$async15606(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15607));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15606(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14021__auto___18425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_15720){
var state_val_15724 = (state_15720[(1)]);
if((state_val_15724 === (7))){
var inst_15674 = (state_15720[(2)]);
var state_15720__$1 = state_15720;
if(cljs.core.truth_(inst_15674)){
var statearr_15726_18426 = state_15720__$1;
(statearr_15726_18426[(1)] = (8));

} else {
var statearr_15727_18427 = state_15720__$1;
(statearr_15727_18427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (20))){
var inst_15663 = (state_15720[(7)]);
var state_15720__$1 = state_15720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15720__$1,(23),out,inst_15663);
} else {
if((state_val_15724 === (1))){
var inst_15646 = calc_state();
var inst_15647 = cljs.core.__destructure_map(inst_15646);
var inst_15648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15647,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15647,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15647,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15651 = inst_15646;
var state_15720__$1 = (function (){var statearr_15728 = state_15720;
(statearr_15728[(8)] = inst_15651);

(statearr_15728[(9)] = inst_15649);

(statearr_15728[(10)] = inst_15648);

(statearr_15728[(11)] = inst_15650);

return statearr_15728;
})();
var statearr_15729_18432 = state_15720__$1;
(statearr_15729_18432[(2)] = null);

(statearr_15729_18432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (24))){
var inst_15654 = (state_15720[(12)]);
var inst_15651 = inst_15654;
var state_15720__$1 = (function (){var statearr_15736 = state_15720;
(statearr_15736[(8)] = inst_15651);

return statearr_15736;
})();
var statearr_15740_18434 = state_15720__$1;
(statearr_15740_18434[(2)] = null);

(statearr_15740_18434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (4))){
var inst_15663 = (state_15720[(7)]);
var inst_15665 = (state_15720[(13)]);
var inst_15662 = (state_15720[(2)]);
var inst_15663__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15662,(0),null);
var inst_15664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15662,(1),null);
var inst_15665__$1 = (inst_15663__$1 == null);
var state_15720__$1 = (function (){var statearr_15742 = state_15720;
(statearr_15742[(7)] = inst_15663__$1);

(statearr_15742[(14)] = inst_15664);

(statearr_15742[(13)] = inst_15665__$1);

return statearr_15742;
})();
if(cljs.core.truth_(inst_15665__$1)){
var statearr_15743_18439 = state_15720__$1;
(statearr_15743_18439[(1)] = (5));

} else {
var statearr_15744_18440 = state_15720__$1;
(statearr_15744_18440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (15))){
var inst_15694 = (state_15720[(15)]);
var inst_15655 = (state_15720[(16)]);
var inst_15694__$1 = cljs.core.empty_QMARK_(inst_15655);
var state_15720__$1 = (function (){var statearr_15745 = state_15720;
(statearr_15745[(15)] = inst_15694__$1);

return statearr_15745;
})();
if(inst_15694__$1){
var statearr_15746_18443 = state_15720__$1;
(statearr_15746_18443[(1)] = (17));

} else {
var statearr_15747_18446 = state_15720__$1;
(statearr_15747_18446[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (21))){
var inst_15654 = (state_15720[(12)]);
var inst_15651 = inst_15654;
var state_15720__$1 = (function (){var statearr_15748 = state_15720;
(statearr_15748[(8)] = inst_15651);

return statearr_15748;
})();
var statearr_15749_18447 = state_15720__$1;
(statearr_15749_18447[(2)] = null);

(statearr_15749_18447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (13))){
var inst_15684 = (state_15720[(2)]);
var inst_15685 = calc_state();
var inst_15651 = inst_15685;
var state_15720__$1 = (function (){var statearr_15750 = state_15720;
(statearr_15750[(8)] = inst_15651);

(statearr_15750[(17)] = inst_15684);

return statearr_15750;
})();
var statearr_15751_18457 = state_15720__$1;
(statearr_15751_18457[(2)] = null);

(statearr_15751_18457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (22))){
var inst_15714 = (state_15720[(2)]);
var state_15720__$1 = state_15720;
var statearr_15752_18458 = state_15720__$1;
(statearr_15752_18458[(2)] = inst_15714);

(statearr_15752_18458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (6))){
var inst_15664 = (state_15720[(14)]);
var inst_15671 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15664,change);
var state_15720__$1 = state_15720;
var statearr_15757_18463 = state_15720__$1;
(statearr_15757_18463[(2)] = inst_15671);

(statearr_15757_18463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (25))){
var state_15720__$1 = state_15720;
var statearr_15758_18468 = state_15720__$1;
(statearr_15758_18468[(2)] = null);

(statearr_15758_18468[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (17))){
var inst_15656 = (state_15720[(18)]);
var inst_15664 = (state_15720[(14)]);
var inst_15696 = (inst_15656.cljs$core$IFn$_invoke$arity$1 ? inst_15656.cljs$core$IFn$_invoke$arity$1(inst_15664) : inst_15656.call(null,inst_15664));
var inst_15697 = cljs.core.not(inst_15696);
var state_15720__$1 = state_15720;
var statearr_15761_18472 = state_15720__$1;
(statearr_15761_18472[(2)] = inst_15697);

(statearr_15761_18472[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (3))){
var inst_15718 = (state_15720[(2)]);
var state_15720__$1 = state_15720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15720__$1,inst_15718);
} else {
if((state_val_15724 === (12))){
var state_15720__$1 = state_15720;
var statearr_15765_18473 = state_15720__$1;
(statearr_15765_18473[(2)] = null);

(statearr_15765_18473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (2))){
var inst_15654 = (state_15720[(12)]);
var inst_15651 = (state_15720[(8)]);
var inst_15654__$1 = cljs.core.__destructure_map(inst_15651);
var inst_15655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15654__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15654__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15654__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15720__$1 = (function (){var statearr_15770 = state_15720;
(statearr_15770[(18)] = inst_15656);

(statearr_15770[(12)] = inst_15654__$1);

(statearr_15770[(16)] = inst_15655);

return statearr_15770;
})();
return cljs.core.async.ioc_alts_BANG_(state_15720__$1,(4),inst_15657);
} else {
if((state_val_15724 === (23))){
var inst_15705 = (state_15720[(2)]);
var state_15720__$1 = state_15720;
if(cljs.core.truth_(inst_15705)){
var statearr_15771_18482 = state_15720__$1;
(statearr_15771_18482[(1)] = (24));

} else {
var statearr_15772_18483 = state_15720__$1;
(statearr_15772_18483[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (19))){
var inst_15700 = (state_15720[(2)]);
var state_15720__$1 = state_15720;
var statearr_15773_18484 = state_15720__$1;
(statearr_15773_18484[(2)] = inst_15700);

(statearr_15773_18484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (11))){
var inst_15664 = (state_15720[(14)]);
var inst_15681 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15664);
var state_15720__$1 = state_15720;
var statearr_15774_18488 = state_15720__$1;
(statearr_15774_18488[(2)] = inst_15681);

(statearr_15774_18488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (9))){
var inst_15655 = (state_15720[(16)]);
var inst_15664 = (state_15720[(14)]);
var inst_15688 = (state_15720[(19)]);
var inst_15688__$1 = (inst_15655.cljs$core$IFn$_invoke$arity$1 ? inst_15655.cljs$core$IFn$_invoke$arity$1(inst_15664) : inst_15655.call(null,inst_15664));
var state_15720__$1 = (function (){var statearr_15775 = state_15720;
(statearr_15775[(19)] = inst_15688__$1);

return statearr_15775;
})();
if(cljs.core.truth_(inst_15688__$1)){
var statearr_15776_18489 = state_15720__$1;
(statearr_15776_18489[(1)] = (14));

} else {
var statearr_15777_18490 = state_15720__$1;
(statearr_15777_18490[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (5))){
var inst_15665 = (state_15720[(13)]);
var state_15720__$1 = state_15720;
var statearr_15778_18495 = state_15720__$1;
(statearr_15778_18495[(2)] = inst_15665);

(statearr_15778_18495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (14))){
var inst_15688 = (state_15720[(19)]);
var state_15720__$1 = state_15720;
var statearr_15779_18496 = state_15720__$1;
(statearr_15779_18496[(2)] = inst_15688);

(statearr_15779_18496[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (26))){
var inst_15710 = (state_15720[(2)]);
var state_15720__$1 = state_15720;
var statearr_15780_18497 = state_15720__$1;
(statearr_15780_18497[(2)] = inst_15710);

(statearr_15780_18497[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (16))){
var inst_15702 = (state_15720[(2)]);
var state_15720__$1 = state_15720;
if(cljs.core.truth_(inst_15702)){
var statearr_15783_18498 = state_15720__$1;
(statearr_15783_18498[(1)] = (20));

} else {
var statearr_15784_18499 = state_15720__$1;
(statearr_15784_18499[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (10))){
var inst_15716 = (state_15720[(2)]);
var state_15720__$1 = state_15720;
var statearr_15786_18500 = state_15720__$1;
(statearr_15786_18500[(2)] = inst_15716);

(statearr_15786_18500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (18))){
var inst_15694 = (state_15720[(15)]);
var state_15720__$1 = state_15720;
var statearr_15787_18505 = state_15720__$1;
(statearr_15787_18505[(2)] = inst_15694);

(statearr_15787_18505[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (8))){
var inst_15663 = (state_15720[(7)]);
var inst_15679 = (inst_15663 == null);
var state_15720__$1 = state_15720;
if(cljs.core.truth_(inst_15679)){
var statearr_15788_18506 = state_15720__$1;
(statearr_15788_18506[(1)] = (11));

} else {
var statearr_15789_18507 = state_15720__$1;
(statearr_15789_18507[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13116__auto__ = null;
var cljs$core$async$mix_$_state_machine__13116__auto____0 = (function (){
var statearr_15791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15791[(0)] = cljs$core$async$mix_$_state_machine__13116__auto__);

(statearr_15791[(1)] = (1));

return statearr_15791;
});
var cljs$core$async$mix_$_state_machine__13116__auto____1 = (function (state_15720){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_15720);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e15794){var ex__13119__auto__ = e15794;
var statearr_15798_18508 = state_15720;
(statearr_15798_18508[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_15720[(4)]))){
var statearr_15800_18509 = state_15720;
(statearr_15800_18509[(1)] = cljs.core.first((state_15720[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18510 = state_15720;
state_15720 = G__18510;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13116__auto__ = function(state_15720){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13116__auto____1.call(this,state_15720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13116__auto____0;
cljs$core$async$mix_$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13116__auto____1;
return cljs$core$async$mix_$_state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_15801 = f__14022__auto__();
(statearr_15801[(6)] = c__14021__auto___18425);

return statearr_15801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18513 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18513(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18517 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18517(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18520 = (function() {
var G__18521 = null;
var G__18521__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18521__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18521 = function(p,v){
switch(arguments.length){
case 1:
return G__18521__1.call(this,p);
case 2:
return G__18521__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18521.cljs$core$IFn$_invoke$arity$1 = G__18521__1;
G__18521.cljs$core$IFn$_invoke$arity$2 = G__18521__2;
return G__18521;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15825 = arguments.length;
switch (G__15825) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18520(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18520(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15849 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15850){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15850 = meta15850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15851,meta15850__$1){
var self__ = this;
var _15851__$1 = this;
return (new cljs.core.async.t_cljs$core$async15849(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15850__$1));
}));

(cljs.core.async.t_cljs$core$async15849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15851){
var self__ = this;
var _15851__$1 = this;
return self__.meta15850;
}));

(cljs.core.async.t_cljs$core$async15849.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15849.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15849.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15849.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15849.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15849.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15850","meta15850",1493087980,null)], null);
}));

(cljs.core.async.t_cljs$core$async15849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15849");

(cljs.core.async.t_cljs$core$async15849.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15849.
 */
cljs.core.async.__GT_t_cljs$core$async15849 = (function cljs$core$async$__GT_t_cljs$core$async15849(ch,topic_fn,buf_fn,mults,ensure_mult,meta15850){
return (new cljs.core.async.t_cljs$core$async15849(ch,topic_fn,buf_fn,mults,ensure_mult,meta15850));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15837 = arguments.length;
switch (G__15837) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15835_SHARP_){
if(cljs.core.truth_((p1__15835_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15835_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15835_SHARP_.call(null,topic)))){
return p1__15835_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15835_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15849(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14021__auto___18551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_15956){
var state_val_15957 = (state_15956[(1)]);
if((state_val_15957 === (7))){
var inst_15951 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
var statearr_15961_18557 = state_15956__$1;
(statearr_15961_18557[(2)] = inst_15951);

(statearr_15961_18557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (20))){
var state_15956__$1 = state_15956;
var statearr_15962_18558 = state_15956__$1;
(statearr_15962_18558[(2)] = null);

(statearr_15962_18558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (1))){
var state_15956__$1 = state_15956;
var statearr_15964_18560 = state_15956__$1;
(statearr_15964_18560[(2)] = null);

(statearr_15964_18560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (24))){
var inst_15934 = (state_15956[(7)]);
var inst_15943 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15934);
var state_15956__$1 = state_15956;
var statearr_15966_18561 = state_15956__$1;
(statearr_15966_18561[(2)] = inst_15943);

(statearr_15966_18561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (4))){
var inst_15881 = (state_15956[(8)]);
var inst_15881__$1 = (state_15956[(2)]);
var inst_15882 = (inst_15881__$1 == null);
var state_15956__$1 = (function (){var statearr_15967 = state_15956;
(statearr_15967[(8)] = inst_15881__$1);

return statearr_15967;
})();
if(cljs.core.truth_(inst_15882)){
var statearr_15968_18563 = state_15956__$1;
(statearr_15968_18563[(1)] = (5));

} else {
var statearr_15969_18567 = state_15956__$1;
(statearr_15969_18567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (15))){
var inst_15928 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
var statearr_15970_18568 = state_15956__$1;
(statearr_15970_18568[(2)] = inst_15928);

(statearr_15970_18568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (21))){
var inst_15948 = (state_15956[(2)]);
var state_15956__$1 = (function (){var statearr_15974 = state_15956;
(statearr_15974[(9)] = inst_15948);

return statearr_15974;
})();
var statearr_15975_18569 = state_15956__$1;
(statearr_15975_18569[(2)] = null);

(statearr_15975_18569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (13))){
var inst_15905 = (state_15956[(10)]);
var inst_15907 = cljs.core.chunked_seq_QMARK_(inst_15905);
var state_15956__$1 = state_15956;
if(inst_15907){
var statearr_15976_18571 = state_15956__$1;
(statearr_15976_18571[(1)] = (16));

} else {
var statearr_15977_18572 = state_15956__$1;
(statearr_15977_18572[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (22))){
var inst_15940 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
if(cljs.core.truth_(inst_15940)){
var statearr_15978_18573 = state_15956__$1;
(statearr_15978_18573[(1)] = (23));

} else {
var statearr_15979_18574 = state_15956__$1;
(statearr_15979_18574[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (6))){
var inst_15881 = (state_15956[(8)]);
var inst_15936 = (state_15956[(11)]);
var inst_15934 = (state_15956[(7)]);
var inst_15934__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15881) : topic_fn.call(null,inst_15881));
var inst_15935 = cljs.core.deref(mults);
var inst_15936__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15935,inst_15934__$1);
var state_15956__$1 = (function (){var statearr_15980 = state_15956;
(statearr_15980[(11)] = inst_15936__$1);

(statearr_15980[(7)] = inst_15934__$1);

return statearr_15980;
})();
if(cljs.core.truth_(inst_15936__$1)){
var statearr_15981_18580 = state_15956__$1;
(statearr_15981_18580[(1)] = (19));

} else {
var statearr_15982_18581 = state_15956__$1;
(statearr_15982_18581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (25))){
var inst_15945 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
var statearr_15983_18582 = state_15956__$1;
(statearr_15983_18582[(2)] = inst_15945);

(statearr_15983_18582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (17))){
var inst_15905 = (state_15956[(10)]);
var inst_15915 = cljs.core.first(inst_15905);
var inst_15916 = cljs.core.async.muxch_STAR_(inst_15915);
var inst_15917 = cljs.core.async.close_BANG_(inst_15916);
var inst_15922 = cljs.core.next(inst_15905);
var inst_15891 = inst_15922;
var inst_15892 = null;
var inst_15893 = (0);
var inst_15894 = (0);
var state_15956__$1 = (function (){var statearr_15991 = state_15956;
(statearr_15991[(12)] = inst_15893);

(statearr_15991[(13)] = inst_15917);

(statearr_15991[(14)] = inst_15892);

(statearr_15991[(15)] = inst_15894);

(statearr_15991[(16)] = inst_15891);

return statearr_15991;
})();
var statearr_15996_18586 = state_15956__$1;
(statearr_15996_18586[(2)] = null);

(statearr_15996_18586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (3))){
var inst_15953 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15956__$1,inst_15953);
} else {
if((state_val_15957 === (12))){
var inst_15930 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
var statearr_16001_18587 = state_15956__$1;
(statearr_16001_18587[(2)] = inst_15930);

(statearr_16001_18587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (2))){
var state_15956__$1 = state_15956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15956__$1,(4),ch);
} else {
if((state_val_15957 === (23))){
var state_15956__$1 = state_15956;
var statearr_16004_18588 = state_15956__$1;
(statearr_16004_18588[(2)] = null);

(statearr_16004_18588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (19))){
var inst_15881 = (state_15956[(8)]);
var inst_15936 = (state_15956[(11)]);
var inst_15938 = cljs.core.async.muxch_STAR_(inst_15936);
var state_15956__$1 = state_15956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15956__$1,(22),inst_15938,inst_15881);
} else {
if((state_val_15957 === (11))){
var inst_15905 = (state_15956[(10)]);
var inst_15891 = (state_15956[(16)]);
var inst_15905__$1 = cljs.core.seq(inst_15891);
var state_15956__$1 = (function (){var statearr_16005 = state_15956;
(statearr_16005[(10)] = inst_15905__$1);

return statearr_16005;
})();
if(inst_15905__$1){
var statearr_16007_18591 = state_15956__$1;
(statearr_16007_18591[(1)] = (13));

} else {
var statearr_16008_18592 = state_15956__$1;
(statearr_16008_18592[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (9))){
var inst_15932 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
var statearr_16009_18593 = state_15956__$1;
(statearr_16009_18593[(2)] = inst_15932);

(statearr_16009_18593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (5))){
var inst_15888 = cljs.core.deref(mults);
var inst_15889 = cljs.core.vals(inst_15888);
var inst_15890 = cljs.core.seq(inst_15889);
var inst_15891 = inst_15890;
var inst_15892 = null;
var inst_15893 = (0);
var inst_15894 = (0);
var state_15956__$1 = (function (){var statearr_16012 = state_15956;
(statearr_16012[(12)] = inst_15893);

(statearr_16012[(14)] = inst_15892);

(statearr_16012[(15)] = inst_15894);

(statearr_16012[(16)] = inst_15891);

return statearr_16012;
})();
var statearr_16015_18597 = state_15956__$1;
(statearr_16015_18597[(2)] = null);

(statearr_16015_18597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (14))){
var state_15956__$1 = state_15956;
var statearr_16019_18598 = state_15956__$1;
(statearr_16019_18598[(2)] = null);

(statearr_16019_18598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (16))){
var inst_15905 = (state_15956[(10)]);
var inst_15909 = cljs.core.chunk_first(inst_15905);
var inst_15910 = cljs.core.chunk_rest(inst_15905);
var inst_15911 = cljs.core.count(inst_15909);
var inst_15891 = inst_15910;
var inst_15892 = inst_15909;
var inst_15893 = inst_15911;
var inst_15894 = (0);
var state_15956__$1 = (function (){var statearr_16020 = state_15956;
(statearr_16020[(12)] = inst_15893);

(statearr_16020[(14)] = inst_15892);

(statearr_16020[(15)] = inst_15894);

(statearr_16020[(16)] = inst_15891);

return statearr_16020;
})();
var statearr_16023_18599 = state_15956__$1;
(statearr_16023_18599[(2)] = null);

(statearr_16023_18599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (10))){
var inst_15893 = (state_15956[(12)]);
var inst_15892 = (state_15956[(14)]);
var inst_15894 = (state_15956[(15)]);
var inst_15891 = (state_15956[(16)]);
var inst_15899 = cljs.core._nth(inst_15892,inst_15894);
var inst_15900 = cljs.core.async.muxch_STAR_(inst_15899);
var inst_15901 = cljs.core.async.close_BANG_(inst_15900);
var inst_15902 = (inst_15894 + (1));
var tmp16016 = inst_15893;
var tmp16017 = inst_15892;
var tmp16018 = inst_15891;
var inst_15891__$1 = tmp16018;
var inst_15892__$1 = tmp16017;
var inst_15893__$1 = tmp16016;
var inst_15894__$1 = inst_15902;
var state_15956__$1 = (function (){var statearr_16025 = state_15956;
(statearr_16025[(12)] = inst_15893__$1);

(statearr_16025[(14)] = inst_15892__$1);

(statearr_16025[(17)] = inst_15901);

(statearr_16025[(15)] = inst_15894__$1);

(statearr_16025[(16)] = inst_15891__$1);

return statearr_16025;
})();
var statearr_16026_18600 = state_15956__$1;
(statearr_16026_18600[(2)] = null);

(statearr_16026_18600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (18))){
var inst_15925 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
var statearr_16028_18602 = state_15956__$1;
(statearr_16028_18602[(2)] = inst_15925);

(statearr_16028_18602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (8))){
var inst_15893 = (state_15956[(12)]);
var inst_15894 = (state_15956[(15)]);
var inst_15896 = (inst_15894 < inst_15893);
var inst_15897 = inst_15896;
var state_15956__$1 = state_15956;
if(cljs.core.truth_(inst_15897)){
var statearr_16045_18604 = state_15956__$1;
(statearr_16045_18604[(1)] = (10));

} else {
var statearr_16050_18605 = state_15956__$1;
(statearr_16050_18605[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_16054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16054[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_16054[(1)] = (1));

return statearr_16054;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_15956){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_15956);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e16057){var ex__13119__auto__ = e16057;
var statearr_16058_18613 = state_15956;
(statearr_16058_18613[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_15956[(4)]))){
var statearr_16062_18615 = state_15956;
(statearr_16062_18615[(1)] = cljs.core.first((state_15956[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18616 = state_15956;
state_15956 = G__18616;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_15956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_15956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_16063 = f__14022__auto__();
(statearr_16063[(6)] = c__14021__auto___18551);

return statearr_16063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16076 = arguments.length;
switch (G__16076) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16088 = arguments.length;
switch (G__16088) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16105 = arguments.length;
switch (G__16105) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14021__auto___18621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_16177){
var state_val_16178 = (state_16177[(1)]);
if((state_val_16178 === (7))){
var state_16177__$1 = state_16177;
var statearr_16179_18623 = state_16177__$1;
(statearr_16179_18623[(2)] = null);

(statearr_16179_18623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (1))){
var state_16177__$1 = state_16177;
var statearr_16180_18625 = state_16177__$1;
(statearr_16180_18625[(2)] = null);

(statearr_16180_18625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (4))){
var inst_16115 = (state_16177[(7)]);
var inst_16116 = (state_16177[(8)]);
var inst_16118 = (inst_16116 < inst_16115);
var state_16177__$1 = state_16177;
if(cljs.core.truth_(inst_16118)){
var statearr_16187_18628 = state_16177__$1;
(statearr_16187_18628[(1)] = (6));

} else {
var statearr_16190_18629 = state_16177__$1;
(statearr_16190_18629[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (15))){
var inst_16157 = (state_16177[(9)]);
var inst_16162 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16157);
var state_16177__$1 = state_16177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16177__$1,(17),out,inst_16162);
} else {
if((state_val_16178 === (13))){
var inst_16157 = (state_16177[(9)]);
var inst_16157__$1 = (state_16177[(2)]);
var inst_16158 = cljs.core.some(cljs.core.nil_QMARK_,inst_16157__$1);
var state_16177__$1 = (function (){var statearr_16197 = state_16177;
(statearr_16197[(9)] = inst_16157__$1);

return statearr_16197;
})();
if(cljs.core.truth_(inst_16158)){
var statearr_16210_18634 = state_16177__$1;
(statearr_16210_18634[(1)] = (14));

} else {
var statearr_16211_18635 = state_16177__$1;
(statearr_16211_18635[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (6))){
var state_16177__$1 = state_16177;
var statearr_16212_18636 = state_16177__$1;
(statearr_16212_18636[(2)] = null);

(statearr_16212_18636[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (17))){
var inst_16164 = (state_16177[(2)]);
var state_16177__$1 = (function (){var statearr_16220 = state_16177;
(statearr_16220[(10)] = inst_16164);

return statearr_16220;
})();
var statearr_16221_18637 = state_16177__$1;
(statearr_16221_18637[(2)] = null);

(statearr_16221_18637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (3))){
var inst_16169 = (state_16177[(2)]);
var state_16177__$1 = state_16177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16177__$1,inst_16169);
} else {
if((state_val_16178 === (12))){
var _ = (function (){var statearr_16225 = state_16177;
(statearr_16225[(4)] = cljs.core.rest((state_16177[(4)])));

return statearr_16225;
})();
var state_16177__$1 = state_16177;
var ex16215 = (state_16177__$1[(2)]);
var statearr_16226_18638 = state_16177__$1;
(statearr_16226_18638[(5)] = ex16215);


if((ex16215 instanceof Object)){
var statearr_16236_18639 = state_16177__$1;
(statearr_16236_18639[(1)] = (11));

(statearr_16236_18639[(5)] = null);

} else {
throw ex16215;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (2))){
var inst_16113 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16115 = cnt;
var inst_16116 = (0);
var state_16177__$1 = (function (){var statearr_16244 = state_16177;
(statearr_16244[(7)] = inst_16115);

(statearr_16244[(11)] = inst_16113);

(statearr_16244[(8)] = inst_16116);

return statearr_16244;
})();
var statearr_16247_18641 = state_16177__$1;
(statearr_16247_18641[(2)] = null);

(statearr_16247_18641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (11))){
var inst_16122 = (state_16177[(2)]);
var inst_16123 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16177__$1 = (function (){var statearr_16248 = state_16177;
(statearr_16248[(12)] = inst_16122);

return statearr_16248;
})();
var statearr_16249_18649 = state_16177__$1;
(statearr_16249_18649[(2)] = inst_16123);

(statearr_16249_18649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (9))){
var inst_16116 = (state_16177[(8)]);
var _ = (function (){var statearr_16250 = state_16177;
(statearr_16250[(4)] = cljs.core.cons((12),(state_16177[(4)])));

return statearr_16250;
})();
var inst_16137 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16116) : chs__$1.call(null,inst_16116));
var inst_16138 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16116) : done.call(null,inst_16116));
var inst_16139 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16137,inst_16138);
var ___$1 = (function (){var statearr_16251 = state_16177;
(statearr_16251[(4)] = cljs.core.rest((state_16177[(4)])));

return statearr_16251;
})();
var state_16177__$1 = state_16177;
var statearr_16252_18656 = state_16177__$1;
(statearr_16252_18656[(2)] = inst_16139);

(statearr_16252_18656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (5))){
var inst_16155 = (state_16177[(2)]);
var state_16177__$1 = (function (){var statearr_16253 = state_16177;
(statearr_16253[(13)] = inst_16155);

return statearr_16253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16177__$1,(13),dchan);
} else {
if((state_val_16178 === (14))){
var inst_16160 = cljs.core.async.close_BANG_(out);
var state_16177__$1 = state_16177;
var statearr_16257_18661 = state_16177__$1;
(statearr_16257_18661[(2)] = inst_16160);

(statearr_16257_18661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (16))){
var inst_16167 = (state_16177[(2)]);
var state_16177__$1 = state_16177;
var statearr_16258_18663 = state_16177__$1;
(statearr_16258_18663[(2)] = inst_16167);

(statearr_16258_18663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (10))){
var inst_16116 = (state_16177[(8)]);
var inst_16142 = (state_16177[(2)]);
var inst_16149 = (inst_16116 + (1));
var inst_16116__$1 = inst_16149;
var state_16177__$1 = (function (){var statearr_16259 = state_16177;
(statearr_16259[(14)] = inst_16142);

(statearr_16259[(8)] = inst_16116__$1);

return statearr_16259;
})();
var statearr_16260_18665 = state_16177__$1;
(statearr_16260_18665[(2)] = null);

(statearr_16260_18665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16178 === (8))){
var inst_16153 = (state_16177[(2)]);
var state_16177__$1 = state_16177;
var statearr_16267_18666 = state_16177__$1;
(statearr_16267_18666[(2)] = inst_16153);

(statearr_16267_18666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_16271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16271[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_16271[(1)] = (1));

return statearr_16271;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_16177){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_16177);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e16272){var ex__13119__auto__ = e16272;
var statearr_16273_18676 = state_16177;
(statearr_16273_18676[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_16177[(4)]))){
var statearr_16274_18677 = state_16177;
(statearr_16274_18677[(1)] = cljs.core.first((state_16177[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18680 = state_16177;
state_16177 = G__18680;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_16177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_16177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_16278 = f__14022__auto__();
(statearr_16278[(6)] = c__14021__auto___18621);

return statearr_16278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16285 = arguments.length;
switch (G__16285) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14021__auto___18684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_16324){
var state_val_16325 = (state_16324[(1)]);
if((state_val_16325 === (7))){
var inst_16302 = (state_16324[(7)]);
var inst_16304 = (state_16324[(8)]);
var inst_16302__$1 = (state_16324[(2)]);
var inst_16304__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16302__$1,(0),null);
var inst_16305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16302__$1,(1),null);
var inst_16306 = (inst_16304__$1 == null);
var state_16324__$1 = (function (){var statearr_16326 = state_16324;
(statearr_16326[(7)] = inst_16302__$1);

(statearr_16326[(9)] = inst_16305);

(statearr_16326[(8)] = inst_16304__$1);

return statearr_16326;
})();
if(cljs.core.truth_(inst_16306)){
var statearr_16327_18686 = state_16324__$1;
(statearr_16327_18686[(1)] = (8));

} else {
var statearr_16328_18687 = state_16324__$1;
(statearr_16328_18687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (1))){
var inst_16292 = cljs.core.vec(chs);
var inst_16293 = inst_16292;
var state_16324__$1 = (function (){var statearr_16329 = state_16324;
(statearr_16329[(10)] = inst_16293);

return statearr_16329;
})();
var statearr_16330_18689 = state_16324__$1;
(statearr_16330_18689[(2)] = null);

(statearr_16330_18689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (4))){
var inst_16293 = (state_16324[(10)]);
var state_16324__$1 = state_16324;
return cljs.core.async.ioc_alts_BANG_(state_16324__$1,(7),inst_16293);
} else {
if((state_val_16325 === (6))){
var inst_16320 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
var statearr_16339_18690 = state_16324__$1;
(statearr_16339_18690[(2)] = inst_16320);

(statearr_16339_18690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (3))){
var inst_16322 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16324__$1,inst_16322);
} else {
if((state_val_16325 === (2))){
var inst_16293 = (state_16324[(10)]);
var inst_16295 = cljs.core.count(inst_16293);
var inst_16296 = (inst_16295 > (0));
var state_16324__$1 = state_16324;
if(cljs.core.truth_(inst_16296)){
var statearr_16351_18694 = state_16324__$1;
(statearr_16351_18694[(1)] = (4));

} else {
var statearr_16352_18695 = state_16324__$1;
(statearr_16352_18695[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (11))){
var inst_16293 = (state_16324[(10)]);
var inst_16313 = (state_16324[(2)]);
var tmp16340 = inst_16293;
var inst_16293__$1 = tmp16340;
var state_16324__$1 = (function (){var statearr_16353 = state_16324;
(statearr_16353[(10)] = inst_16293__$1);

(statearr_16353[(11)] = inst_16313);

return statearr_16353;
})();
var statearr_16354_18698 = state_16324__$1;
(statearr_16354_18698[(2)] = null);

(statearr_16354_18698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (9))){
var inst_16304 = (state_16324[(8)]);
var state_16324__$1 = state_16324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16324__$1,(11),out,inst_16304);
} else {
if((state_val_16325 === (5))){
var inst_16318 = cljs.core.async.close_BANG_(out);
var state_16324__$1 = state_16324;
var statearr_16357_18699 = state_16324__$1;
(statearr_16357_18699[(2)] = inst_16318);

(statearr_16357_18699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (10))){
var inst_16316 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
var statearr_16358_18704 = state_16324__$1;
(statearr_16358_18704[(2)] = inst_16316);

(statearr_16358_18704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (8))){
var inst_16302 = (state_16324[(7)]);
var inst_16305 = (state_16324[(9)]);
var inst_16304 = (state_16324[(8)]);
var inst_16293 = (state_16324[(10)]);
var inst_16308 = (function (){var cs = inst_16293;
var vec__16298 = inst_16302;
var v = inst_16304;
var c = inst_16305;
return (function (p1__16283_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16283_SHARP_);
});
})();
var inst_16309 = cljs.core.filterv(inst_16308,inst_16293);
var inst_16293__$1 = inst_16309;
var state_16324__$1 = (function (){var statearr_16359 = state_16324;
(statearr_16359[(10)] = inst_16293__$1);

return statearr_16359;
})();
var statearr_16360_18706 = state_16324__$1;
(statearr_16360_18706[(2)] = null);

(statearr_16360_18706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_16364 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16364[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_16364[(1)] = (1));

return statearr_16364;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_16324){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_16324);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e16365){var ex__13119__auto__ = e16365;
var statearr_16366_18708 = state_16324;
(statearr_16366_18708[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_16324[(4)]))){
var statearr_16368_18709 = state_16324;
(statearr_16368_18709[(1)] = cljs.core.first((state_16324[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18711 = state_16324;
state_16324 = G__18711;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_16324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_16324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_16371 = f__14022__auto__();
(statearr_16371[(6)] = c__14021__auto___18684);

return statearr_16371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16375 = arguments.length;
switch (G__16375) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14021__auto___18724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_16409){
var state_val_16410 = (state_16409[(1)]);
if((state_val_16410 === (7))){
var inst_16386 = (state_16409[(7)]);
var inst_16386__$1 = (state_16409[(2)]);
var inst_16387 = (inst_16386__$1 == null);
var inst_16388 = cljs.core.not(inst_16387);
var state_16409__$1 = (function (){var statearr_16416 = state_16409;
(statearr_16416[(7)] = inst_16386__$1);

return statearr_16416;
})();
if(inst_16388){
var statearr_16417_18728 = state_16409__$1;
(statearr_16417_18728[(1)] = (8));

} else {
var statearr_16418_18729 = state_16409__$1;
(statearr_16418_18729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (1))){
var inst_16380 = (0);
var state_16409__$1 = (function (){var statearr_16419 = state_16409;
(statearr_16419[(8)] = inst_16380);

return statearr_16419;
})();
var statearr_16420_18732 = state_16409__$1;
(statearr_16420_18732[(2)] = null);

(statearr_16420_18732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (4))){
var state_16409__$1 = state_16409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16409__$1,(7),ch);
} else {
if((state_val_16410 === (6))){
var inst_16404 = (state_16409[(2)]);
var state_16409__$1 = state_16409;
var statearr_16434_18738 = state_16409__$1;
(statearr_16434_18738[(2)] = inst_16404);

(statearr_16434_18738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (3))){
var inst_16406 = (state_16409[(2)]);
var inst_16407 = cljs.core.async.close_BANG_(out);
var state_16409__$1 = (function (){var statearr_16439 = state_16409;
(statearr_16439[(9)] = inst_16406);

return statearr_16439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16409__$1,inst_16407);
} else {
if((state_val_16410 === (2))){
var inst_16380 = (state_16409[(8)]);
var inst_16383 = (inst_16380 < n);
var state_16409__$1 = state_16409;
if(cljs.core.truth_(inst_16383)){
var statearr_16440_18740 = state_16409__$1;
(statearr_16440_18740[(1)] = (4));

} else {
var statearr_16441_18747 = state_16409__$1;
(statearr_16441_18747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (11))){
var inst_16380 = (state_16409[(8)]);
var inst_16394 = (state_16409[(2)]);
var inst_16395 = (inst_16380 + (1));
var inst_16380__$1 = inst_16395;
var state_16409__$1 = (function (){var statearr_16442 = state_16409;
(statearr_16442[(10)] = inst_16394);

(statearr_16442[(8)] = inst_16380__$1);

return statearr_16442;
})();
var statearr_16443_18748 = state_16409__$1;
(statearr_16443_18748[(2)] = null);

(statearr_16443_18748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (9))){
var state_16409__$1 = state_16409;
var statearr_16444_18749 = state_16409__$1;
(statearr_16444_18749[(2)] = null);

(statearr_16444_18749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (5))){
var state_16409__$1 = state_16409;
var statearr_16445_18753 = state_16409__$1;
(statearr_16445_18753[(2)] = null);

(statearr_16445_18753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (10))){
var inst_16400 = (state_16409[(2)]);
var state_16409__$1 = state_16409;
var statearr_16446_18758 = state_16409__$1;
(statearr_16446_18758[(2)] = inst_16400);

(statearr_16446_18758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (8))){
var inst_16386 = (state_16409[(7)]);
var state_16409__$1 = state_16409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16409__$1,(11),out,inst_16386);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_16452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16452[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_16452[(1)] = (1));

return statearr_16452;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_16409){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_16409);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e16453){var ex__13119__auto__ = e16453;
var statearr_16454_18762 = state_16409;
(statearr_16454_18762[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_16409[(4)]))){
var statearr_16457_18763 = state_16409;
(statearr_16457_18763[(1)] = cljs.core.first((state_16409[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18765 = state_16409;
state_16409 = G__18765;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_16409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_16409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_16464 = f__14022__auto__();
(statearr_16464[(6)] = c__14021__auto___18724);

return statearr_16464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16492 = (function (f,ch,meta16471,_,fn1,meta16493){
this.f = f;
this.ch = ch;
this.meta16471 = meta16471;
this._ = _;
this.fn1 = fn1;
this.meta16493 = meta16493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16494,meta16493__$1){
var self__ = this;
var _16494__$1 = this;
return (new cljs.core.async.t_cljs$core$async16492(self__.f,self__.ch,self__.meta16471,self__._,self__.fn1,meta16493__$1));
}));

(cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16494){
var self__ = this;
var _16494__$1 = this;
return self__.meta16493;
}));

(cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16465_SHARP_){
var G__16511 = (((p1__16465_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16465_SHARP_) : self__.f.call(null,p1__16465_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16511) : f1.call(null,G__16511));
});
}));

(cljs.core.async.t_cljs$core$async16492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16471","meta16471",-980800411,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16470","cljs.core.async/t_cljs$core$async16470",-670270148,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16493","meta16493",-1367256305,null)], null);
}));

(cljs.core.async.t_cljs$core$async16492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16492");

(cljs.core.async.t_cljs$core$async16492.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16492.
 */
cljs.core.async.__GT_t_cljs$core$async16492 = (function cljs$core$async$__GT_t_cljs$core$async16492(f,ch,meta16471,_,fn1,meta16493){
return (new cljs.core.async.t_cljs$core$async16492(f,ch,meta16471,_,fn1,meta16493));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16470 = (function (f,ch,meta16471){
this.f = f;
this.ch = ch;
this.meta16471 = meta16471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16472,meta16471__$1){
var self__ = this;
var _16472__$1 = this;
return (new cljs.core.async.t_cljs$core$async16470(self__.f,self__.ch,meta16471__$1));
}));

(cljs.core.async.t_cljs$core$async16470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16472){
var self__ = this;
var _16472__$1 = this;
return self__.meta16471;
}));

(cljs.core.async.t_cljs$core$async16470.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16470.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16470.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16492(self__.f,self__.ch,self__.meta16471,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16524 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16524) : self__.f.call(null,G__16524));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16470.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16471","meta16471",-980800411,null)], null);
}));

(cljs.core.async.t_cljs$core$async16470.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16470");

(cljs.core.async.t_cljs$core$async16470.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16470");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16470.
 */
cljs.core.async.__GT_t_cljs$core$async16470 = (function cljs$core$async$__GT_t_cljs$core$async16470(f,ch,meta16471){
return (new cljs.core.async.t_cljs$core$async16470(f,ch,meta16471));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16470(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16542 = (function (f,ch,meta16543){
this.f = f;
this.ch = ch;
this.meta16543 = meta16543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16544,meta16543__$1){
var self__ = this;
var _16544__$1 = this;
return (new cljs.core.async.t_cljs$core$async16542(self__.f,self__.ch,meta16543__$1));
}));

(cljs.core.async.t_cljs$core$async16542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16544){
var self__ = this;
var _16544__$1 = this;
return self__.meta16543;
}));

(cljs.core.async.t_cljs$core$async16542.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16542.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16542.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16543","meta16543",495271895,null)], null);
}));

(cljs.core.async.t_cljs$core$async16542.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16542");

(cljs.core.async.t_cljs$core$async16542.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16542");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16542.
 */
cljs.core.async.__GT_t_cljs$core$async16542 = (function cljs$core$async$__GT_t_cljs$core$async16542(f,ch,meta16543){
return (new cljs.core.async.t_cljs$core$async16542(f,ch,meta16543));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16542(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16556 = (function (p,ch,meta16557){
this.p = p;
this.ch = ch;
this.meta16557 = meta16557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16558,meta16557__$1){
var self__ = this;
var _16558__$1 = this;
return (new cljs.core.async.t_cljs$core$async16556(self__.p,self__.ch,meta16557__$1));
}));

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16558){
var self__ = this;
var _16558__$1 = this;
return self__.meta16557;
}));

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16557","meta16557",-2011948152,null)], null);
}));

(cljs.core.async.t_cljs$core$async16556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16556");

(cljs.core.async.t_cljs$core$async16556.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16556.
 */
cljs.core.async.__GT_t_cljs$core$async16556 = (function cljs$core$async$__GT_t_cljs$core$async16556(p,ch,meta16557){
return (new cljs.core.async.t_cljs$core$async16556(p,ch,meta16557));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16556(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16570 = arguments.length;
switch (G__16570) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14021__auto___18809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_16595){
var state_val_16596 = (state_16595[(1)]);
if((state_val_16596 === (7))){
var inst_16590 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16610_18810 = state_16595__$1;
(statearr_16610_18810[(2)] = inst_16590);

(statearr_16610_18810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (1))){
var state_16595__$1 = state_16595;
var statearr_16611_18811 = state_16595__$1;
(statearr_16611_18811[(2)] = null);

(statearr_16611_18811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (4))){
var inst_16575 = (state_16595[(7)]);
var inst_16575__$1 = (state_16595[(2)]);
var inst_16576 = (inst_16575__$1 == null);
var state_16595__$1 = (function (){var statearr_16612 = state_16595;
(statearr_16612[(7)] = inst_16575__$1);

return statearr_16612;
})();
if(cljs.core.truth_(inst_16576)){
var statearr_16614_18812 = state_16595__$1;
(statearr_16614_18812[(1)] = (5));

} else {
var statearr_16615_18813 = state_16595__$1;
(statearr_16615_18813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (6))){
var inst_16575 = (state_16595[(7)]);
var inst_16580 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16575) : p.call(null,inst_16575));
var state_16595__$1 = state_16595;
if(cljs.core.truth_(inst_16580)){
var statearr_16616_18821 = state_16595__$1;
(statearr_16616_18821[(1)] = (8));

} else {
var statearr_16617_18822 = state_16595__$1;
(statearr_16617_18822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (3))){
var inst_16592 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16595__$1,inst_16592);
} else {
if((state_val_16596 === (2))){
var state_16595__$1 = state_16595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16595__$1,(4),ch);
} else {
if((state_val_16596 === (11))){
var inst_16583 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16622_18823 = state_16595__$1;
(statearr_16622_18823[(2)] = inst_16583);

(statearr_16622_18823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (9))){
var state_16595__$1 = state_16595;
var statearr_16623_18824 = state_16595__$1;
(statearr_16623_18824[(2)] = null);

(statearr_16623_18824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (5))){
var inst_16578 = cljs.core.async.close_BANG_(out);
var state_16595__$1 = state_16595;
var statearr_16624_18826 = state_16595__$1;
(statearr_16624_18826[(2)] = inst_16578);

(statearr_16624_18826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (10))){
var inst_16587 = (state_16595[(2)]);
var state_16595__$1 = (function (){var statearr_16625 = state_16595;
(statearr_16625[(8)] = inst_16587);

return statearr_16625;
})();
var statearr_16626_18827 = state_16595__$1;
(statearr_16626_18827[(2)] = null);

(statearr_16626_18827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (8))){
var inst_16575 = (state_16595[(7)]);
var state_16595__$1 = state_16595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16595__$1,(11),out,inst_16575);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_16627 = [null,null,null,null,null,null,null,null,null];
(statearr_16627[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_16627[(1)] = (1));

return statearr_16627;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_16595){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_16595);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e16628){var ex__13119__auto__ = e16628;
var statearr_16629_18831 = state_16595;
(statearr_16629_18831[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_16595[(4)]))){
var statearr_16630_18832 = state_16595;
(statearr_16630_18832[(1)] = cljs.core.first((state_16595[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18833 = state_16595;
state_16595 = G__18833;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_16595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_16595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_16643 = f__14022__auto__();
(statearr_16643[(6)] = c__14021__auto___18809);

return statearr_16643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16648 = arguments.length;
switch (G__16648) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14021__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_16729){
var state_val_16730 = (state_16729[(1)]);
if((state_val_16730 === (7))){
var inst_16717 = (state_16729[(2)]);
var state_16729__$1 = state_16729;
var statearr_16743_18848 = state_16729__$1;
(statearr_16743_18848[(2)] = inst_16717);

(statearr_16743_18848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (20))){
var inst_16687 = (state_16729[(7)]);
var inst_16698 = (state_16729[(2)]);
var inst_16699 = cljs.core.next(inst_16687);
var inst_16669 = inst_16699;
var inst_16670 = null;
var inst_16671 = (0);
var inst_16672 = (0);
var state_16729__$1 = (function (){var statearr_16746 = state_16729;
(statearr_16746[(8)] = inst_16669);

(statearr_16746[(9)] = inst_16672);

(statearr_16746[(10)] = inst_16670);

(statearr_16746[(11)] = inst_16698);

(statearr_16746[(12)] = inst_16671);

return statearr_16746;
})();
var statearr_16750_18850 = state_16729__$1;
(statearr_16750_18850[(2)] = null);

(statearr_16750_18850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (1))){
var state_16729__$1 = state_16729;
var statearr_16753_18851 = state_16729__$1;
(statearr_16753_18851[(2)] = null);

(statearr_16753_18851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (4))){
var inst_16658 = (state_16729[(13)]);
var inst_16658__$1 = (state_16729[(2)]);
var inst_16659 = (inst_16658__$1 == null);
var state_16729__$1 = (function (){var statearr_16755 = state_16729;
(statearr_16755[(13)] = inst_16658__$1);

return statearr_16755;
})();
if(cljs.core.truth_(inst_16659)){
var statearr_16758_18856 = state_16729__$1;
(statearr_16758_18856[(1)] = (5));

} else {
var statearr_16760_18859 = state_16729__$1;
(statearr_16760_18859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (15))){
var state_16729__$1 = state_16729;
var statearr_16765_18860 = state_16729__$1;
(statearr_16765_18860[(2)] = null);

(statearr_16765_18860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (21))){
var state_16729__$1 = state_16729;
var statearr_16770_18861 = state_16729__$1;
(statearr_16770_18861[(2)] = null);

(statearr_16770_18861[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (13))){
var inst_16669 = (state_16729[(8)]);
var inst_16672 = (state_16729[(9)]);
var inst_16670 = (state_16729[(10)]);
var inst_16671 = (state_16729[(12)]);
var inst_16682 = (state_16729[(2)]);
var inst_16683 = (inst_16672 + (1));
var tmp16761 = inst_16669;
var tmp16762 = inst_16670;
var tmp16763 = inst_16671;
var inst_16669__$1 = tmp16761;
var inst_16670__$1 = tmp16762;
var inst_16671__$1 = tmp16763;
var inst_16672__$1 = inst_16683;
var state_16729__$1 = (function (){var statearr_16776 = state_16729;
(statearr_16776[(8)] = inst_16669__$1);

(statearr_16776[(14)] = inst_16682);

(statearr_16776[(9)] = inst_16672__$1);

(statearr_16776[(10)] = inst_16670__$1);

(statearr_16776[(12)] = inst_16671__$1);

return statearr_16776;
})();
var statearr_16779_18863 = state_16729__$1;
(statearr_16779_18863[(2)] = null);

(statearr_16779_18863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (22))){
var state_16729__$1 = state_16729;
var statearr_16781_18865 = state_16729__$1;
(statearr_16781_18865[(2)] = null);

(statearr_16781_18865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (6))){
var inst_16658 = (state_16729[(13)]);
var inst_16667 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16658) : f.call(null,inst_16658));
var inst_16668 = cljs.core.seq(inst_16667);
var inst_16669 = inst_16668;
var inst_16670 = null;
var inst_16671 = (0);
var inst_16672 = (0);
var state_16729__$1 = (function (){var statearr_16783 = state_16729;
(statearr_16783[(8)] = inst_16669);

(statearr_16783[(9)] = inst_16672);

(statearr_16783[(10)] = inst_16670);

(statearr_16783[(12)] = inst_16671);

return statearr_16783;
})();
var statearr_16784_18869 = state_16729__$1;
(statearr_16784_18869[(2)] = null);

(statearr_16784_18869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (17))){
var inst_16687 = (state_16729[(7)]);
var inst_16691 = cljs.core.chunk_first(inst_16687);
var inst_16692 = cljs.core.chunk_rest(inst_16687);
var inst_16693 = cljs.core.count(inst_16691);
var inst_16669 = inst_16692;
var inst_16670 = inst_16691;
var inst_16671 = inst_16693;
var inst_16672 = (0);
var state_16729__$1 = (function (){var statearr_16785 = state_16729;
(statearr_16785[(8)] = inst_16669);

(statearr_16785[(9)] = inst_16672);

(statearr_16785[(10)] = inst_16670);

(statearr_16785[(12)] = inst_16671);

return statearr_16785;
})();
var statearr_16786_18871 = state_16729__$1;
(statearr_16786_18871[(2)] = null);

(statearr_16786_18871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (3))){
var inst_16719 = (state_16729[(2)]);
var state_16729__$1 = state_16729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16729__$1,inst_16719);
} else {
if((state_val_16730 === (12))){
var inst_16707 = (state_16729[(2)]);
var state_16729__$1 = state_16729;
var statearr_16789_18872 = state_16729__$1;
(statearr_16789_18872[(2)] = inst_16707);

(statearr_16789_18872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (2))){
var state_16729__$1 = state_16729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16729__$1,(4),in$);
} else {
if((state_val_16730 === (23))){
var inst_16715 = (state_16729[(2)]);
var state_16729__$1 = state_16729;
var statearr_16790_18873 = state_16729__$1;
(statearr_16790_18873[(2)] = inst_16715);

(statearr_16790_18873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (19))){
var inst_16702 = (state_16729[(2)]);
var state_16729__$1 = state_16729;
var statearr_16796_18874 = state_16729__$1;
(statearr_16796_18874[(2)] = inst_16702);

(statearr_16796_18874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (11))){
var inst_16669 = (state_16729[(8)]);
var inst_16687 = (state_16729[(7)]);
var inst_16687__$1 = cljs.core.seq(inst_16669);
var state_16729__$1 = (function (){var statearr_16799 = state_16729;
(statearr_16799[(7)] = inst_16687__$1);

return statearr_16799;
})();
if(inst_16687__$1){
var statearr_16800_18877 = state_16729__$1;
(statearr_16800_18877[(1)] = (14));

} else {
var statearr_16801_18879 = state_16729__$1;
(statearr_16801_18879[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (9))){
var inst_16709 = (state_16729[(2)]);
var inst_16710 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16729__$1 = (function (){var statearr_16806 = state_16729;
(statearr_16806[(15)] = inst_16709);

return statearr_16806;
})();
if(cljs.core.truth_(inst_16710)){
var statearr_16807_18882 = state_16729__$1;
(statearr_16807_18882[(1)] = (21));

} else {
var statearr_16808_18884 = state_16729__$1;
(statearr_16808_18884[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (5))){
var inst_16661 = cljs.core.async.close_BANG_(out);
var state_16729__$1 = state_16729;
var statearr_16809_18886 = state_16729__$1;
(statearr_16809_18886[(2)] = inst_16661);

(statearr_16809_18886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (14))){
var inst_16687 = (state_16729[(7)]);
var inst_16689 = cljs.core.chunked_seq_QMARK_(inst_16687);
var state_16729__$1 = state_16729;
if(inst_16689){
var statearr_16810_18888 = state_16729__$1;
(statearr_16810_18888[(1)] = (17));

} else {
var statearr_16811_18889 = state_16729__$1;
(statearr_16811_18889[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (16))){
var inst_16705 = (state_16729[(2)]);
var state_16729__$1 = state_16729;
var statearr_16812_18890 = state_16729__$1;
(statearr_16812_18890[(2)] = inst_16705);

(statearr_16812_18890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16730 === (10))){
var inst_16672 = (state_16729[(9)]);
var inst_16670 = (state_16729[(10)]);
var inst_16680 = cljs.core._nth(inst_16670,inst_16672);
var state_16729__$1 = state_16729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16729__$1,(13),out,inst_16680);
} else {
if((state_val_16730 === (18))){
var inst_16687 = (state_16729[(7)]);
var inst_16696 = cljs.core.first(inst_16687);
var state_16729__$1 = state_16729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16729__$1,(20),out,inst_16696);
} else {
if((state_val_16730 === (8))){
var inst_16672 = (state_16729[(9)]);
var inst_16671 = (state_16729[(12)]);
var inst_16675 = (inst_16672 < inst_16671);
var inst_16676 = inst_16675;
var state_16729__$1 = state_16729;
if(cljs.core.truth_(inst_16676)){
var statearr_16825_18891 = state_16729__$1;
(statearr_16825_18891[(1)] = (10));

} else {
var statearr_16827_18894 = state_16729__$1;
(statearr_16827_18894[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13116__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13116__auto____0 = (function (){
var statearr_16844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16844[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13116__auto__);

(statearr_16844[(1)] = (1));

return statearr_16844;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13116__auto____1 = (function (state_16729){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_16729);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e16860){var ex__13119__auto__ = e16860;
var statearr_16866_18904 = state_16729;
(statearr_16866_18904[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_16729[(4)]))){
var statearr_16867_18905 = state_16729;
(statearr_16867_18905[(1)] = cljs.core.first((state_16729[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18906 = state_16729;
state_16729 = G__18906;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13116__auto__ = function(state_16729){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13116__auto____1.call(this,state_16729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13116__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13116__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_16877 = f__14022__auto__();
(statearr_16877[(6)] = c__14021__auto__);

return statearr_16877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));

return c__14021__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16896 = arguments.length;
switch (G__16896) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16914 = arguments.length;
switch (G__16914) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16930 = arguments.length;
switch (G__16930) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14021__auto___18922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_16964){
var state_val_16965 = (state_16964[(1)]);
if((state_val_16965 === (7))){
var inst_16959 = (state_16964[(2)]);
var state_16964__$1 = state_16964;
var statearr_16969_18925 = state_16964__$1;
(statearr_16969_18925[(2)] = inst_16959);

(statearr_16969_18925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16965 === (1))){
var inst_16936 = null;
var state_16964__$1 = (function (){var statearr_16970 = state_16964;
(statearr_16970[(7)] = inst_16936);

return statearr_16970;
})();
var statearr_16975_18929 = state_16964__$1;
(statearr_16975_18929[(2)] = null);

(statearr_16975_18929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16965 === (4))){
var inst_16942 = (state_16964[(8)]);
var inst_16942__$1 = (state_16964[(2)]);
var inst_16943 = (inst_16942__$1 == null);
var inst_16944 = cljs.core.not(inst_16943);
var state_16964__$1 = (function (){var statearr_16984 = state_16964;
(statearr_16984[(8)] = inst_16942__$1);

return statearr_16984;
})();
if(inst_16944){
var statearr_16985_18931 = state_16964__$1;
(statearr_16985_18931[(1)] = (5));

} else {
var statearr_16987_18932 = state_16964__$1;
(statearr_16987_18932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16965 === (6))){
var state_16964__$1 = state_16964;
var statearr_16988_18933 = state_16964__$1;
(statearr_16988_18933[(2)] = null);

(statearr_16988_18933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16965 === (3))){
var inst_16961 = (state_16964[(2)]);
var inst_16962 = cljs.core.async.close_BANG_(out);
var state_16964__$1 = (function (){var statearr_16989 = state_16964;
(statearr_16989[(9)] = inst_16961);

return statearr_16989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16964__$1,inst_16962);
} else {
if((state_val_16965 === (2))){
var state_16964__$1 = state_16964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16964__$1,(4),ch);
} else {
if((state_val_16965 === (11))){
var inst_16942 = (state_16964[(8)]);
var inst_16953 = (state_16964[(2)]);
var inst_16936 = inst_16942;
var state_16964__$1 = (function (){var statearr_16997 = state_16964;
(statearr_16997[(10)] = inst_16953);

(statearr_16997[(7)] = inst_16936);

return statearr_16997;
})();
var statearr_16998_18946 = state_16964__$1;
(statearr_16998_18946[(2)] = null);

(statearr_16998_18946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16965 === (9))){
var inst_16942 = (state_16964[(8)]);
var state_16964__$1 = state_16964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16964__$1,(11),out,inst_16942);
} else {
if((state_val_16965 === (5))){
var inst_16942 = (state_16964[(8)]);
var inst_16936 = (state_16964[(7)]);
var inst_16947 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16942,inst_16936);
var state_16964__$1 = state_16964;
if(inst_16947){
var statearr_17002_18949 = state_16964__$1;
(statearr_17002_18949[(1)] = (8));

} else {
var statearr_17003_18950 = state_16964__$1;
(statearr_17003_18950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16965 === (10))){
var inst_16956 = (state_16964[(2)]);
var state_16964__$1 = state_16964;
var statearr_17004_18951 = state_16964__$1;
(statearr_17004_18951[(2)] = inst_16956);

(statearr_17004_18951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16965 === (8))){
var inst_16936 = (state_16964[(7)]);
var tmp17000 = inst_16936;
var inst_16936__$1 = tmp17000;
var state_16964__$1 = (function (){var statearr_17005 = state_16964;
(statearr_17005[(7)] = inst_16936__$1);

return statearr_17005;
})();
var statearr_17006_18954 = state_16964__$1;
(statearr_17006_18954[(2)] = null);

(statearr_17006_18954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_17011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17011[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_17011[(1)] = (1));

return statearr_17011;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_16964){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_16964);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e17015){var ex__13119__auto__ = e17015;
var statearr_17018_18955 = state_16964;
(statearr_17018_18955[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_16964[(4)]))){
var statearr_17020_18956 = state_16964;
(statearr_17020_18956[(1)] = cljs.core.first((state_16964[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18960 = state_16964;
state_16964 = G__18960;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_16964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_16964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_17026 = f__14022__auto__();
(statearr_17026[(6)] = c__14021__auto___18922);

return statearr_17026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17033 = arguments.length;
switch (G__17033) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14021__auto___18966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_17090){
var state_val_17091 = (state_17090[(1)]);
if((state_val_17091 === (7))){
var inst_17083 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17096_18967 = state_17090__$1;
(statearr_17096_18967[(2)] = inst_17083);

(statearr_17096_18967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (1))){
var inst_17037 = (new Array(n));
var inst_17038 = inst_17037;
var inst_17039 = (0);
var state_17090__$1 = (function (){var statearr_17099 = state_17090;
(statearr_17099[(7)] = inst_17038);

(statearr_17099[(8)] = inst_17039);

return statearr_17099;
})();
var statearr_17102_18970 = state_17090__$1;
(statearr_17102_18970[(2)] = null);

(statearr_17102_18970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (4))){
var inst_17047 = (state_17090[(9)]);
var inst_17047__$1 = (state_17090[(2)]);
var inst_17048 = (inst_17047__$1 == null);
var inst_17049 = cljs.core.not(inst_17048);
var state_17090__$1 = (function (){var statearr_17107 = state_17090;
(statearr_17107[(9)] = inst_17047__$1);

return statearr_17107;
})();
if(inst_17049){
var statearr_17108_18971 = state_17090__$1;
(statearr_17108_18971[(1)] = (5));

} else {
var statearr_17109_18972 = state_17090__$1;
(statearr_17109_18972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (15))){
var inst_17077 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17110_18974 = state_17090__$1;
(statearr_17110_18974[(2)] = inst_17077);

(statearr_17110_18974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (13))){
var state_17090__$1 = state_17090;
var statearr_17111_18975 = state_17090__$1;
(statearr_17111_18975[(2)] = null);

(statearr_17111_18975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (6))){
var inst_17039 = (state_17090[(8)]);
var inst_17073 = (inst_17039 > (0));
var state_17090__$1 = state_17090;
if(cljs.core.truth_(inst_17073)){
var statearr_17114_18977 = state_17090__$1;
(statearr_17114_18977[(1)] = (12));

} else {
var statearr_17115_18978 = state_17090__$1;
(statearr_17115_18978[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (3))){
var inst_17085 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17090__$1,inst_17085);
} else {
if((state_val_17091 === (12))){
var inst_17038 = (state_17090[(7)]);
var inst_17075 = cljs.core.vec(inst_17038);
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17090__$1,(15),out,inst_17075);
} else {
if((state_val_17091 === (2))){
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17090__$1,(4),ch);
} else {
if((state_val_17091 === (11))){
var inst_17061 = (state_17090[(2)]);
var inst_17062 = (new Array(n));
var inst_17038 = inst_17062;
var inst_17039 = (0);
var state_17090__$1 = (function (){var statearr_17124 = state_17090;
(statearr_17124[(7)] = inst_17038);

(statearr_17124[(8)] = inst_17039);

(statearr_17124[(10)] = inst_17061);

return statearr_17124;
})();
var statearr_17129_18983 = state_17090__$1;
(statearr_17129_18983[(2)] = null);

(statearr_17129_18983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (9))){
var inst_17038 = (state_17090[(7)]);
var inst_17059 = cljs.core.vec(inst_17038);
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17090__$1,(11),out,inst_17059);
} else {
if((state_val_17091 === (5))){
var inst_17054 = (state_17090[(11)]);
var inst_17038 = (state_17090[(7)]);
var inst_17039 = (state_17090[(8)]);
var inst_17047 = (state_17090[(9)]);
var inst_17051 = (inst_17038[inst_17039] = inst_17047);
var inst_17054__$1 = (inst_17039 + (1));
var inst_17055 = (inst_17054__$1 < n);
var state_17090__$1 = (function (){var statearr_17131 = state_17090;
(statearr_17131[(11)] = inst_17054__$1);

(statearr_17131[(12)] = inst_17051);

return statearr_17131;
})();
if(cljs.core.truth_(inst_17055)){
var statearr_17136_18988 = state_17090__$1;
(statearr_17136_18988[(1)] = (8));

} else {
var statearr_17137_18989 = state_17090__$1;
(statearr_17137_18989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (14))){
var inst_17080 = (state_17090[(2)]);
var inst_17081 = cljs.core.async.close_BANG_(out);
var state_17090__$1 = (function (){var statearr_17139 = state_17090;
(statearr_17139[(13)] = inst_17080);

return statearr_17139;
})();
var statearr_17140_18991 = state_17090__$1;
(statearr_17140_18991[(2)] = inst_17081);

(statearr_17140_18991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (10))){
var inst_17065 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17141_18993 = state_17090__$1;
(statearr_17141_18993[(2)] = inst_17065);

(statearr_17141_18993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (8))){
var inst_17054 = (state_17090[(11)]);
var inst_17038 = (state_17090[(7)]);
var tmp17138 = inst_17038;
var inst_17038__$1 = tmp17138;
var inst_17039 = inst_17054;
var state_17090__$1 = (function (){var statearr_17152 = state_17090;
(statearr_17152[(7)] = inst_17038__$1);

(statearr_17152[(8)] = inst_17039);

return statearr_17152;
})();
var statearr_17153_18994 = state_17090__$1;
(statearr_17153_18994[(2)] = null);

(statearr_17153_18994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_17157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17157[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_17157[(1)] = (1));

return statearr_17157;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_17090){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_17090);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e17158){var ex__13119__auto__ = e17158;
var statearr_17165_19006 = state_17090;
(statearr_17165_19006[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_17090[(4)]))){
var statearr_17166_19008 = state_17090;
(statearr_17166_19008[(1)] = cljs.core.first((state_17090[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19014 = state_17090;
state_17090 = G__19014;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_17090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_17090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_17167 = f__14022__auto__();
(statearr_17167[(6)] = c__14021__auto___18966);

return statearr_17167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17172 = arguments.length;
switch (G__17172) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14021__auto___19018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14022__auto__ = (function (){var switch__13115__auto__ = (function (state_17231){
var state_val_17236 = (state_17231[(1)]);
if((state_val_17236 === (7))){
var inst_17225 = (state_17231[(2)]);
var state_17231__$1 = state_17231;
var statearr_17240_19027 = state_17231__$1;
(statearr_17240_19027[(2)] = inst_17225);

(statearr_17240_19027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (1))){
var inst_17178 = [];
var inst_17179 = inst_17178;
var inst_17180 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17231__$1 = (function (){var statearr_17241 = state_17231;
(statearr_17241[(7)] = inst_17180);

(statearr_17241[(8)] = inst_17179);

return statearr_17241;
})();
var statearr_17243_19032 = state_17231__$1;
(statearr_17243_19032[(2)] = null);

(statearr_17243_19032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (4))){
var inst_17183 = (state_17231[(9)]);
var inst_17183__$1 = (state_17231[(2)]);
var inst_17184 = (inst_17183__$1 == null);
var inst_17185 = cljs.core.not(inst_17184);
var state_17231__$1 = (function (){var statearr_17246 = state_17231;
(statearr_17246[(9)] = inst_17183__$1);

return statearr_17246;
})();
if(inst_17185){
var statearr_17247_19042 = state_17231__$1;
(statearr_17247_19042[(1)] = (5));

} else {
var statearr_17248_19043 = state_17231__$1;
(statearr_17248_19043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (15))){
var inst_17179 = (state_17231[(8)]);
var inst_17217 = cljs.core.vec(inst_17179);
var state_17231__$1 = state_17231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17231__$1,(18),out,inst_17217);
} else {
if((state_val_17236 === (13))){
var inst_17212 = (state_17231[(2)]);
var state_17231__$1 = state_17231;
var statearr_17256_19051 = state_17231__$1;
(statearr_17256_19051[(2)] = inst_17212);

(statearr_17256_19051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (6))){
var inst_17179 = (state_17231[(8)]);
var inst_17214 = inst_17179.length;
var inst_17215 = (inst_17214 > (0));
var state_17231__$1 = state_17231;
if(cljs.core.truth_(inst_17215)){
var statearr_17257_19052 = state_17231__$1;
(statearr_17257_19052[(1)] = (15));

} else {
var statearr_17263_19053 = state_17231__$1;
(statearr_17263_19053[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (17))){
var inst_17222 = (state_17231[(2)]);
var inst_17223 = cljs.core.async.close_BANG_(out);
var state_17231__$1 = (function (){var statearr_17264 = state_17231;
(statearr_17264[(10)] = inst_17222);

return statearr_17264;
})();
var statearr_17265_19055 = state_17231__$1;
(statearr_17265_19055[(2)] = inst_17223);

(statearr_17265_19055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (3))){
var inst_17227 = (state_17231[(2)]);
var state_17231__$1 = state_17231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17231__$1,inst_17227);
} else {
if((state_val_17236 === (12))){
var inst_17179 = (state_17231[(8)]);
var inst_17198 = cljs.core.vec(inst_17179);
var state_17231__$1 = state_17231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17231__$1,(14),out,inst_17198);
} else {
if((state_val_17236 === (2))){
var state_17231__$1 = state_17231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17231__$1,(4),ch);
} else {
if((state_val_17236 === (11))){
var inst_17187 = (state_17231[(11)]);
var inst_17183 = (state_17231[(9)]);
var inst_17179 = (state_17231[(8)]);
var inst_17195 = inst_17179.push(inst_17183);
var tmp17268 = inst_17179;
var inst_17179__$1 = tmp17268;
var inst_17180 = inst_17187;
var state_17231__$1 = (function (){var statearr_17269 = state_17231;
(statearr_17269[(12)] = inst_17195);

(statearr_17269[(7)] = inst_17180);

(statearr_17269[(8)] = inst_17179__$1);

return statearr_17269;
})();
var statearr_17270_19057 = state_17231__$1;
(statearr_17270_19057[(2)] = null);

(statearr_17270_19057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (9))){
var inst_17180 = (state_17231[(7)]);
var inst_17191 = cljs.core.keyword_identical_QMARK_(inst_17180,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17231__$1 = state_17231;
var statearr_17272_19058 = state_17231__$1;
(statearr_17272_19058[(2)] = inst_17191);

(statearr_17272_19058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (5))){
var inst_17187 = (state_17231[(11)]);
var inst_17183 = (state_17231[(9)]);
var inst_17180 = (state_17231[(7)]);
var inst_17188 = (state_17231[(13)]);
var inst_17187__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17183) : f.call(null,inst_17183));
var inst_17188__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17187__$1,inst_17180);
var state_17231__$1 = (function (){var statearr_17277 = state_17231;
(statearr_17277[(11)] = inst_17187__$1);

(statearr_17277[(13)] = inst_17188__$1);

return statearr_17277;
})();
if(inst_17188__$1){
var statearr_17280_19064 = state_17231__$1;
(statearr_17280_19064[(1)] = (8));

} else {
var statearr_17282_19065 = state_17231__$1;
(statearr_17282_19065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (14))){
var inst_17187 = (state_17231[(11)]);
var inst_17183 = (state_17231[(9)]);
var inst_17200 = (state_17231[(2)]);
var inst_17206 = [];
var inst_17207 = inst_17206.push(inst_17183);
var inst_17179 = inst_17206;
var inst_17180 = inst_17187;
var state_17231__$1 = (function (){var statearr_17287 = state_17231;
(statearr_17287[(14)] = inst_17200);

(statearr_17287[(15)] = inst_17207);

(statearr_17287[(7)] = inst_17180);

(statearr_17287[(8)] = inst_17179);

return statearr_17287;
})();
var statearr_17288_19066 = state_17231__$1;
(statearr_17288_19066[(2)] = null);

(statearr_17288_19066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (16))){
var state_17231__$1 = state_17231;
var statearr_17289_19067 = state_17231__$1;
(statearr_17289_19067[(2)] = null);

(statearr_17289_19067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (10))){
var inst_17193 = (state_17231[(2)]);
var state_17231__$1 = state_17231;
if(cljs.core.truth_(inst_17193)){
var statearr_17292_19068 = state_17231__$1;
(statearr_17292_19068[(1)] = (11));

} else {
var statearr_17293_19070 = state_17231__$1;
(statearr_17293_19070[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (18))){
var inst_17219 = (state_17231[(2)]);
var state_17231__$1 = state_17231;
var statearr_17301_19074 = state_17231__$1;
(statearr_17301_19074[(2)] = inst_17219);

(statearr_17301_19074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17236 === (8))){
var inst_17188 = (state_17231[(13)]);
var state_17231__$1 = state_17231;
var statearr_17302_19076 = state_17231__$1;
(statearr_17302_19076[(2)] = inst_17188);

(statearr_17302_19076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13116__auto__ = null;
var cljs$core$async$state_machine__13116__auto____0 = (function (){
var statearr_17310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17310[(0)] = cljs$core$async$state_machine__13116__auto__);

(statearr_17310[(1)] = (1));

return statearr_17310;
});
var cljs$core$async$state_machine__13116__auto____1 = (function (state_17231){
while(true){
var ret_value__13117__auto__ = (function (){try{while(true){
var result__13118__auto__ = switch__13115__auto__(state_17231);
if(cljs.core.keyword_identical_QMARK_(result__13118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13118__auto__;
}
break;
}
}catch (e17312){var ex__13119__auto__ = e17312;
var statearr_17313_19105 = state_17231;
(statearr_17313_19105[(2)] = ex__13119__auto__);


if(cljs.core.seq((state_17231[(4)]))){
var statearr_17314_19107 = state_17231;
(statearr_17314_19107[(1)] = cljs.core.first((state_17231[(4)])));

} else {
throw ex__13119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19116 = state_17231;
state_17231 = G__19116;
continue;
} else {
return ret_value__13117__auto__;
}
break;
}
});
cljs$core$async$state_machine__13116__auto__ = function(state_17231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13116__auto____1.call(this,state_17231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13116__auto____0;
cljs$core$async$state_machine__13116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13116__auto____1;
return cljs$core$async$state_machine__13116__auto__;
})()
})();
var state__14023__auto__ = (function (){var statearr_17321 = f__14022__auto__();
(statearr_17321[(6)] = c__14021__auto___19018);

return statearr_17321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14023__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
