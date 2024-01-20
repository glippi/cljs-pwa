goog.provide('starter.bmi');
starter.bmi.calc_bmi = (function starter$bmi$calc_bmi(p__11926){
var map__11927 = p__11926;
var map__11927__$1 = cljs.core.__destructure_map(map__11927);
var data = map__11927__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11927__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11927__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11927__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(weight / (h * h)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"weight","weight",-1262796205),((bmi * h) * h));
}
});
starter.bmi.bmi_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(starter.bmi.calc_bmi(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null)));
starter.bmi.slider = (function starter$bmi$slider(param,value,min,max,invalidates){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var new_value = parseInt(e.target.value);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(starter.bmi.bmi_data,(function (data){
return starter.bmi.calc_bmi(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,param,new_value),invalidates));
}));
})], null)], null);
});
starter.bmi.bmi_component = (function starter$bmi$bmi_component(){
var map__11931 = cljs.core.deref(starter.bmi.bmi_data);
var map__11931__$1 = cljs.core.__destructure_map(map__11931);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11931__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11931__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11931__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__11932 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"BMI calculator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.bmi.slider,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220),new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.bmi.slider,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150),new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.bmi.slider,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50),new cljs.core.Keyword(null,"weight","weight",-1262796205)], null)], null)], null);
});

//# sourceMappingURL=starter.bmi.js.map
