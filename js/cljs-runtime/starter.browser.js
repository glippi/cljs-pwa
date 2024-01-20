goog.provide('starter.browser');
if((typeof starter !== 'undefined') && (typeof starter.browser !== 'undefined') && (typeof starter.browser.install_prompt !== 'undefined')){
} else {
starter.browser.install_prompt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
starter.browser.install_prompt_component = (function starter$browser$install_prompt_component(){
var prompt_event = cljs.core.deref(starter.browser.install_prompt);
if(cljs.core.truth_(prompt_event)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"30px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
prompt_event.prompt();

return cljs.core.reset_BANG_(starter.browser.install_prompt,null);
})], null),"Install the BMI calculator!"], null);
} else {
return null;
}
});
starter.browser.app = (function starter$browser$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.bmi.bmi_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.browser.install_prompt_component], null)], null);
});
starter.browser.start = (function starter$browser$start(){
console.log("start");

window.addEventListener("beforeinstallprompt",(function (e){
e.preventDefault();

return cljs.core.reset_BANG_(starter.browser.install_prompt,e);
}));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.browser.app], null),document.getElementById("app"));
});
starter.browser.init = (function starter$browser$init(){
console.log("init");

return starter.browser.start();
});
starter.browser.stop = (function starter$browser$stop(){
return console.log("stop");
});

//# sourceMappingURL=starter.browser.js.map
