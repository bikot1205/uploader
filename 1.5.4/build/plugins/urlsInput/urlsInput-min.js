/*!build time : 2014-04-21 3:36:36 PM*/
KISSY.add("gallery/uploader/1.5.4/plugins/urlsInput/urlsInput",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e="",f=b.all,g="[uploader-urlsInput]:";return a.extend(d,c,{pluginInitializer:function(a){var b=this;if(!a)return!1;b.set("uploader",a),a.on("success",b._uploadSuccessHandler,b);var c=a.get("queue");c.on("remove",b._fileRemoveHandler,b)},_uploadSuccessHandler:function(b){var c=this,d=b.result;if(!a.isObject(d))return!1;var e=d.url;return c.get("useName")&&(e=d.name),c.add(e),c},_fileRemoveHandler:function(a){var b=this,c=a.file,d=c.result;if(!d)return!0;var e=d.url;b.get("useName")&&(e=d.name),b.remove(e)},add:function(b){if(!a.isString(b))return a.log(g+"add()\u7684url\u53c2\u6570\u4e0d\u5408\u6cd5\uff01"),!1;var c=this,d=c.get("urls"),f=c.isExist(b);return d[0]==e&&(d=[]),f?(a.log(g+"add()\uff0c\u6587\u4ef6\u8def\u5f84\u5df2\u7ecf\u5b58\u5728\uff01"),c):(d.push(b),c.set("urls",d),c._val(),c)},remove:function(b){if(!b)return!1;var c=this,d=c.get("urls"),e=c.isExist(b),f=new RegExp(b);return e?(d=a.filter(d,function(a){return!f.test(a)}),c.set("urls",d),c._val(),d):(a.log(g+"remove()\uff0c\u4e0d\u5b58\u5728\u8be5\u6587\u4ef6\u8def\u5f84\uff01"),!1)},parse:function(){var b=this,c=b.get("target");if(c){var d,h=f(c).val(),i=b.get("split");return h==e?[]:(d=h.split(i),b.set("urls",d),d)}return a.log(g+"cannot find urls input."),[]},_val:function(){var a=this,b=a.get("urls"),c=a.get("target"),d=a.get("split"),e=b.join(d);return c.val(e),e},isExist:function(b){var c=this,d=!1,e=c.get("urls"),f=new RegExp(b);return e.length?(a.each(e,function(a){return f.test(a)?d=!0:void 0}),d):!1}},{ATTRS:{pluginId:{value:"urlsInput"},uploader:{value:e},urls:{value:[]},split:{value:",",setter:function(a){var b=this;return b._val(),a}},target:{value:e,getter:function(a){return f(a)}},useName:{value:!1}}}),d},{requires:["node","base"]});