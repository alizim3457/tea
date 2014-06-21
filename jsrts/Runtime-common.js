/** @constructor */
var i$VM = function() {
  this.valstack = [];
  this.valstack_top = 0;
  this.valstack_base = 0;

  this.ret = null;
  this.reg1 = null;
}

/** @constructor */
var i$CON = function(tag,args) {
  this.tag = tag;
  this.args = args;
}

var i$SLIDE = function(vm,args) {
  for (var i = 0; i < args; ++i)
    vm.valstack[vm.valstack_base + i] = vm.valstack[vm.valstack_top + i];
}

var i$PROJECT = function(vm,val,loc,arity) {
  for (var i = 0; i < arity; ++i)
    vm.valstack[vm.valstack_base + i + loc] = val.args[i];
}

var i$RESERVE = function(vm,n) {
  for (var i = 0; i < n; ++i)
    vm.valstack[vm.valstack_top + i] = null;
}

var __IDRRT__charCode = function(str) {
  var type = typeof str;
  if (type == "string")
    return str.charCodeAt(0);
  else
    return str;
}

var __IDRRT__fromCharCode = function(chr) {
  var type = typeof chr;
  if (type == "string")
    return chr;
  else
    return String.fromCharCode(chr);
}

var isNull = function(v) {
  return v == null;
}
