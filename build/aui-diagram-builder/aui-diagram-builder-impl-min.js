AUI.add("aui-diagram-builder-impl",function(ay){var an=ay.Lang,d=an.isArray,aW=an.isBoolean,M=an.isObject,a0=an.isString,at=ay.WidgetStdMod,ba=ay.Array,al="activeElement",ab="availableField",ac="availableFields",D="backspace",ak="boolean",x="boundary",s="boundingBox",a6="builder",ar="cancel",au="canvas",aM="click",a1="closeEvent",J="closeMessage",a3="condition",R="connector",l="connectors",aw="content",U="controls",aJ="controlsToolbar",S="createDocumentFragment",aH="data",ae="delete",aF="deleteConnectorsMessage",q="deleteNodesMessage",aP="description",K="diagram",av="diagram-builder",aB="diagramNode",a4="diagram-node-manager",F="diagram-node",aT="dragNode",G="editEvent",P="editMessage",W="editing",aO="end",a="esc",aV="field",t="fields",az="fieldsDragConfig",ax="fork",ai="graphic",aU="height",aD="highlightBoundaryStroke",Q="highlightDropZones",c="highlighted",aL="id",u="join",Y="keydown",z="lock",p="name",r="node",aE="p1",aC="p2",f="parentNode",n="pencil",aI="radius",ap="records",m="recordset",a7="rendered",O="required",aZ="selected",aS="shape",ad="shapeBoundary",j="shapeInvite",N="showSuggestConnector",X="source",aG="start",aj="state",w="stroke",aR="suggest",aK="suggestConnectorOverlay",k="target",I="task",V="connector",o="transition",aa="transitions",g="type",ao="visible",T="width",C="xy",B="zIndex",a9="-",i=".",Z="",h="#",L="_",y=ay.getClassName,v=y(K,a6,U),aY=y(K,a6,aV),am=y(K,r),b=y(K,r,aw),aN=y(K,r,W),a8=y(K,r,aZ),aQ=y(K,r,aS,x),e=y(K,r,aR,R),aq=function(bd,A){var bc=d(bd)?bd:bd.get(s).getXY();return[bc[0]+A[0],bc[1]+A[1]];},a5=function(be,bd){var bc=bd[0]-be[0],A=bd[1]-be[1];return Math.sqrt(bc*bc+A*A);},ah=function(bm,bk){var bi=bm.hotPoints,bh=bk.hotPoints,bp=bm.get(s).getXY(),bn=bk.get(s).getXY(),be,bc,bf,bd,bo=Infinity,bg=[[0,0],[0,0]];for(bf=0,be=bi.length;bf<be;bf++){var bl=bi[bf],br=aq(bp,bl);for(bd=0,bc=bh.length;bd<bc;bd++){var bj=bh[bd],bq=aq(bn,bj),A=a5(bq,br);if(A<bo){bg[0]=bl;bg[1]=bj;bo=A;}}}return bg;},aA=function(A,bd){var bc=d(bd)?bd:bd.getXY();var be=d(A)?A:A.getXY();return ba.map(be,function(bg,bf){return Math.max(0,bg-bc[bf]);});},H=function(A){return(A instanceof ay.Connector);},a2=function(A){return(A instanceof ay.DataSet);},af=function(A){return(A instanceof ay.DiagramBuilderBase);},aX=function(A){return(A instanceof ay.DiagramNode);};var E=ay.Component.create({NAME:av,ATTRS:{connector:{setter:"_setConnector",value:null},fieldsDragConfig:{value:null,setter:"_setFieldsDragConfig",validator:M},graphic:{valueFn:function(){return new ay.Graphic();},validator:M},highlightDropZones:{validator:aW,value:true},strings:{value:{addNode:"Add node",cancel:"Cancel",deleteConnectorsMessage:"Are you sure you want to delete the selected connector(s)?",deleteNodesMessage:"Are you sure you want to delete the selected node(s)?",propertyName:"Property Name",save:"Save",settings:"Settings",value:"Value"}},showSuggestConnector:{validator:aW,value:true},suggestConnectorOverlay:{value:null,setter:"_setSuggestConnectorOverlay"}},EXTENDS:ay.DiagramBuilderBase,FIELDS_TAB:0,SETTINGS_TAB:1,prototype:{editingConnector:null,editingNode:null,publishedSource:null,publishedTarget:null,selectedConnector:null,selectedNode:null,initializer:function(){var A=this;A.after({render:A.syncConnectionsUI});A.on({cancel:A._onCancel,"drag:drag":A._onDrag,"drag:end":A._onDragEnd,"drop:hit":A._onDropHit,save:A._onSave});ay.DiagramNodeManager.on({publishedSource:function(bc){A.publishedTarget=null;A.publishedSource=bc.publishedSource;}});A.handlerKeyDown=ay.getDoc().on(Y,ay.bind(A._afterKeyEvent,A));A.dropContainer.delegate(aM,ay.bind(A._onNodeClick,A),i+am);},renderUI:function(){var A=this;ay.DiagramBuilder.superclass.renderUI.apply(this,arguments);A._renderGraphic();},syncUI:function(){var A=this;ay.DiagramBuilder.superclass.syncUI.apply(this,arguments);A._setupFieldsDrag();A.connector=A.get(V);},syncConnectionsUI:function(){var A=this;A.get(t).each(function(bc){bc.syncConnectionsUI();});},clearFields:function(){var bc=this;var A=[];bc.get(t).each(function(bd){A.push(bd);});ba.each(A,function(bd){bd.destroy();});A=bc.editingConnector=bc.editingNode=bc.selectedNode=null;},closeEditProperties:function(){var A=this;var bc=A.editingNode;var bd=A.tabView;bd.selectTab(ay.DiagramBuilder.FIELDS_TAB);bd.disableTab(ay.DiagramBuilder.SETTINGS_TAB);if(bc){bc.get(s).removeClass(aN);}A.editingConnector=A.editingNode=null;},connect:function(bc,be,bd){var A=this;if(a0(bc)){bc=ay.Widget.getByNode(h+ay.DiagramNode.buildNodeId(bc));}if(a0(be)){be=ay.Widget.getByNode(h+ay.DiagramNode.buildNodeId(be));}if(bc&&be){bc.connect(be.get(p),bd);}return A;},connectAll:function(bc){var A=this;ba.each(bc,function(bd){if(bd.hasOwnProperty(X)&&bd.hasOwnProperty(k)){A.connect(bd.source,bd.target,bd.connector);}});return A;},createField:function(bc){var A=this;if(!aX(bc)){bc.builder=A;bc.bubbleTargets=A;bc=new (A.getFieldClass(bc.type||r))(bc);}return bc;},deleteSelectedConnectors:function(){var bc=this;var A=bc.getStrings();var bd=bc.getSelectedConnectors();if(bd.length&&confirm(A[aF])){ba.each(bd,function(be){var bf=be.get(o);ay.DiagramNode.getNodeByName(bf.source).disconnect(bf);});bc.stopEditing();}},deleteSelectedNode:function(){var bc=this;var A=bc.getStrings();var bd=bc.selectedNode;if(bd&&!bd.get(O)&&confirm(A[q])){bd.close();bc.editingNode=bc.selectedNode=null;bc.stopEditing();}},destructor:function(bc){var A=this;A.get(aK).destroy();},eachConnector:function(bc){var A=this;A.get(t).each(function(bd){bd.get(aa).each(function(be){bc.call(A,bd.getConnector(be),be,bd);});});},editConnector:function(bc){var A=this;if(bc){var bd=A.tabView;A.closeEditProperties();bd.enableTab(ay.DiagramBuilder.SETTINGS_TAB);bd.selectTab(ay.DiagramBuilder.SETTINGS_TAB);A.propertyList.set(m,bc.getProperties());A.editingConnector=A.selectedConnector=bc;}},editNode:function(bd){var A=this;if(bd){var bc=A.tabView;A.closeEditProperties();bc.enableTab(ay.DiagramBuilder.SETTINGS_TAB);bc.selectTab(ay.DiagramBuilder.SETTINGS_TAB);A.propertyList.set(m,bd.getProperties());
bd.get(s).addClass(aN);A.editingNode=A.selectedNode=bd;}},getFieldClass:function(bd){var A=this;var bc=ay.DiagramBuilder.types[bd];if(bc){return bc;}else{ay.log("The field type: ["+bd+"] couldn't be found.");return null;}},getNodesByTransitionProperty:function(be,bd){var A=this;var bc=[];A.get(t).each(function(bf){bf.get(aa).each(function(bg){if(bg[be]===bd){bc.push(bf);return false;}});});return bc;},getSelectedConnectors:function(){var A=this;var bc=[];A.eachConnector(function(bd){if(bd.get(aZ)){bc.push(bd);}});return bc;},getSourceNodes:function(bc){var A=this;return A.getNodesByTransitionProperty(k,bc.get(p));},hideSuggestConnetorOverlay:function(bd,bc){var A=this;A.connector.hide();A.get(aK).hide();A.fieldsDrag.dd.set(z,false);},isFieldsDrag:function(bc){var A=this;return(bc===A.fieldsDrag.dd);},plotField:function(bc){var A=this;if(!bc.get(a7)){bc.render(A.dropContainer);}},select:function(bc){var A=this;A.unselectNodes();A.selectedNode=bc.set(aZ,true).focus();},showSuggestConnetorOverlay:function(bc){var A=this;A.get(aK).set(C,bc||A.connector.get(aC)).show().get(s).addClass(e);A.fieldsDrag.dd.set(z,true);},stopEditing:function(){var A=this;A.unselectConnectors();A.unselectNodes();A.closeEditProperties();},toJSON:function(){var A=this;var bc={nodes:[]};A.get(t).each(function(be){var bd={transitions:[]};ba.each(be.SERIALIZABLE_ATTRS,function(bf){bd[bf]=be.get(bf);});be.get(aa).each(function(bg){var bf=be.getConnector(bg);bg.connector=bf.toJSON();bd.transitions.push(bg);});bc.nodes.push(bd);});return bc;},unselectConnectors:function(){var A=this;ba.each(A.getSelectedConnectors(),function(bc){bc.set(aZ,false);});},unselectNodes:function(){var A=this;var bc=A.selectedNode;if(bc){bc.set(aZ,false);}A.selectedNode=null;},_afterKeyEvent:function(bc){var A=this;if(bc.hasModifier()||ay.getDoc().get(al).test(":input,td")){return;}if(bc.isKey(a)){A._onEscKey(bc);}else{if(bc.isKey(D)||bc.isKey(ae)){A._onDeleteKey(bc);}}},_onCancel:function(bc){var A=this;A.closeEditProperties();},_onDeleteKey:function(bc){var A=this;A.deleteSelectedConnectors();A.deleteSelectedNode();bc.halt();},_onDrag:function(bd){var A=this;var bc=bd.target;if(A.isFieldsDrag(bc)){var be=ay.Widget.getByNode(bc.get(aT));be.alignTransitions();ba.each(A.getSourceNodes(be),function(bf){bf.alignTransitions();});}},_onDragEnd:function(bd){var A=this;var bc=bd.target;var be=ay.Widget.getByNode(bc.get(aT));if(be&&A.isFieldsDrag(bc)){be.set(C,be.getLeftTop());}},_onDropHit:function(bd){var A=this;var bc=bd.drag;if(A.isAvailableFieldsDrag(bc)){var bf=bc.get(r).getData(ab);var be=A.addField({xy:aA(bc.lastXY,A.dropContainer),type:bf.get(g)});A.select(be);}},_onEscKey:function(bc){var A=this;A.hideSuggestConnetorOverlay();A.stopEditing();bc.halt();},_onNodeClick:function(bc){var A=this;var bd=ay.Widget.getByNode(bc.currentTarget);A.select(bd);A._onNodeEdit(bc);},_onNodeEdit:function(bc){var A=this;if(!bc.target.ancestor(i+b,true)){return;}var bd=ay.Widget.getByNode(bc.currentTarget);if(bd){A.editNode(bd);}},_onSave:function(bd){var A=this;var bc=A.editingNode;var be=A.editingConnector;var bf=A.propertyList.get(m);if(bc){ba.each(bf.get(ap),function(bg){var bh=bg.get(aH);bc.set(bh.attributeName,bh.value);});}else{if(be){ba.each(bf.get(ap),function(bg){var bh=bg.get(aH);be.set(bh.attributeName,bh.value);});}}},_onSuggestConnectorNodeClick:function(be){var A=this;var bf=be.currentTarget.getData(ab);var bc=A.connector;var bd=A.addField({type:bf.get(g),xy:bc.getCoordinate(bc.get(aC))});A.hideSuggestConnetorOverlay();A.publishedSource.connectNode(bd);},_renderGraphic:function(){var A=this;A.get(ai).render(A.get(au));},_setConnector:function(bd){var A=this;if(!H(bd)){var bc=A.get(au).getXY();bd=new ay.Connector(ay.merge({builder:A,graphic:A.get(ai),lazyDraw:true,p1:bc,p2:bc,shapeHover:null},bd));}return bd;},_setFieldsDragConfig:function(bd){var A=this;var bc=A.dropContainer;return ay.merge({bubbleTargets:A,container:bc,dragConfig:{plugins:[{cfg:{constrain:bc},fn:ay.Plugin.DDConstrained},{cfg:{scrollDelay:150},fn:ay.Plugin.DDWinScroll}]},nodes:i+am},bd||{});},_setSuggestConnectorOverlay:function(bd){var A=this;if(!bd){var bc=ay.getDoc().invoke(S);ba.each(A.get(ac),function(bf){var be=bf.get(r);bc.appendChild(be.clone().setData(ab,be.getData(ab)));});bd=new ay.Overlay({bodyContent:bc,render:true,visible:false,zIndex:10000});bd.get(s).delegate(aM,ay.bind(A._onSuggestConnectorNodeClick,A),i+aY);}return bd;},_setupFieldsDrag:function(){var A=this;A.fieldsDrag=new ay.DD.Delegate(A.get(az));}}});ay.DiagramBuilder=E;ay.DiagramBuilder.types={};var ag=ay.Component.create({NAME:a4,EXTENDS:ay.Base});ay.DiagramNodeManager=new ag();var bb=ay.Component.create({NAME:F,UI_ATTRS:[c,p,O,aZ],ATTRS:{builder:{validator:af},connectors:{valueFn:"_createDataSet",writeOnce:true},controlsToolbar:{validator:M,valueFn:"_valueControlsToolbar"},description:{value:Z,validator:a0},graphic:{writeOnce:true,validator:M},height:{value:60},highlighted:{validator:aW,value:false},name:{valueFn:function(){var A=this;return A.get(g)+(++ay.Env._uidx);},validator:a0},required:{value:false,validator:aW},selected:{value:false,validator:aW},shapeBoundary:{validator:M,valueFn:"_valueShapeBoundary"},highlightBoundaryStroke:{validator:M,value:{weight:7,color:"#484B4C",opacity:0.25}},shapeInvite:{validator:M,value:{radius:12,type:"circle",stroke:{weight:6,color:"#ff6600",opacity:0.8},fill:{color:"#ffd700",opacity:0.8}}},strings:{value:{closeMessage:"Close",description:"Description",editMessage:"Edit",name:"Name",type:"Type"}},tabIndex:{value:1},transitions:{value:null,writeOnce:true,setter:"_setTransitions"},type:{value:r,validator:a0},width:{value:60},zIndex:{value:100}},EXTENDS:ay.Overlay,CIRCLE_POINTS:[[35,20],[28,33],[14,34],[5,22],[10,9],[24,6],[34,16],[31,30],[18,35],[6,26],[7,12],[20,5],[33,12],[34,26],[22,35],[9,30],[6,16],[16,6],[30,9],[35,22],[26,34],[12,33],[5,20],[12,7],[26,6],[35,18],[30,31],[16,34],[6,24],[9,10],[22,5],[34,14],[33,28],[20,35],[7,28],[6,14],[18,5],[31,10],[34,24],[24,34],[10,31],[5,18],[14,6],[28,8],[35,20],[28,33],[14,34],[5,22],[10,8],[25,6],[34,16],[31,30],[18,35],[6,26],[8,12],[20,5],[33,12],[33,27],[22,35],[8,30],[6,15],[16,6],[30,9],[35,23],[26,34],[12,32],[5,20],[12,7],[27,7],[35,18],[29,32],[15,34]],DIAMOND_POINTS:[[30,5],[35,10],[40,15],[45,20],[50,25],[55,30],[50,35],[45,40],[40,45],[35,50],[30,55],[25,50],[20,45],[15,40],[10,35],[5,30],[10,25],[15,20],[20,15],[25,10]],SQUARE_POINTS:[[5,5],[10,5],[15,5],[20,5],[25,5],[30,5],[35,5],[40,5],[50,5],[55,5],[60,5],[65,5],[65,10],[65,15],[65,20],[65,25],[65,30],[65,35],[65,40],[65,45],[65,50],[65,55],[65,60],[65,65],[60,65],[55,65],[50,65],[45,65],[40,65],[35,65],[30,65],[25,65],[20,65],[15,65],[10,65],[5,65],[5,60],[5,55],[5,50],[5,45],[5,40],[5,35],[5,30],[5,25],[5,20],[5,15],[5,10]],getNodeByName:function(A){return ay.Widget.getByNode(h+ay.DiagramNode.buildNodeId(A));
},buildNodeId:function(A){return aB+L+aV+L+A.replace(/[^a-z0-9.:_\-]/ig,"_");},prototype:{boundary:null,hotPoints:[[0,0]],CONTROLS_TEMPLATE:'<div class="'+v+'"></div>',SERIALIZABLE_ATTRS:[aP,p,O,g,T,aU,B,C],initializer:function(){var A=this;A.after({"dataset:remove":ay.bind(A._afterDataSetRemove,A),render:A._afterRender});A.on({nameChange:A._onNameChange});A.publish({boundaryDrag:{defaultFn:A._defBoundaryDrag},boundaryDragEnd:{defaultFn:A._defBoundaryDragEnd},boundaryDragOut:{defaultFn:A._defBoundaryDragOut},boundaryDragOver:{defaultFn:A._defBoundaryDragOver},boundaryDragStart:{defaultFn:A._defBoundaryDragStart},boundaryDrop:{defaultFn:A._defBoundaryDrop},boundaryMouseEnter:{},boundaryMouseLeave:{}});A.get(s).addClass(am+a9+A.get(g));},destructor:function(){var A=this;A.eachConnector(function(bc,bd,be){be.removeTransition(bc.get(o));});A.invite.destroy();A.get(ai).destroy();A.get(a6).removeField(A);},addTransition:function(bd){var A=this;var bc=A.get(aa);bd=A.prepareTransition(bd);if(!bc.containsKey(bd.uid)){bd.uid=ay.guid();bc.add(bd.uid,bd);}return bd;},alignTransition:function(bd){var A=this;var be=ay.DiagramNode.getNodeByName(bd.target);if(be){var bc=ah(A,be);bd=ay.merge(bd,{sourceXY:bc[0],targetXY:bc[1]});A.getConnector(bd).setAttrs({p1:aq(A,bd.sourceXY),p2:aq(be,bd.targetXY)});}},alignTransitions:function(){var A=this;A.get(aa).each(ay.bind(A.alignTransition,A));},close:function(){var A=this;return A.destroy();},connect:function(bg,be){var A=this;bg=A.addTransition(bg);var bc=null;var bh=ay.DiagramNode.getNodeByName(bg.target);if(bh){if(!A.isTransitionConnected(bg)){var bd=A.get(a6);var bf=ah(A,bh);ay.mix(bg,{sourceXY:bf[0],targetXY:bf[1]});bc=new ay.Connector(ay.merge({builder:bd,graphic:bd.get(ai),transition:bg},be));A.get(l).add(bg.uid,bc);}}A.alignTransition(bg);return bc;},connectNode:function(bd){var bc=this;var A=bc.boundaryDragDelegate.dd;bc.connect(bc.prepareTransition({sourceXY:aA(A.startXY,bc.get(s)),target:bd.get(p),targetXY:aA(A.mouseXY,bd.get(s))}));},disconnect:function(bc){var A=this;if(A.isTransitionConnected(bc)){A.removeTransition(bc);}},eachConnector:function(be){var A=this;var bf=[],bc=[].concat(A.get(l).values),bd=bc.length;ba.each(A.get(a6).getSourceNodes(A),function(bg){bg.get(l).each(function(bh){if(A.get(p)===bh.get(o).target){bf.push(bg);bc.push(bh);}});});ba.each(bc,function(bg,bh){be.call(A,bg,bh,(bh<bd)?A:bf[bh-bd]);});bc=bf=null;return bc;},getConnector:function(bc){var A=this;return A.get(l).item(bc.uid);},getContainer:function(){var A=this;return(A.get(a6).dropContainer||A.get(s).get(f));},getLeftTop:function(){var A=this;return aA(A.get(s),A.getContainer());},getProperties:function(){var A=this;var bc=A.getPropertyModel();ba.each(bc,function(bf){var be=A.get(bf.attributeName),bd=an.type(be);if(bd===ak){be=String(be);}bf.value=be;});return bc;},getPropertyModel:function(){var bc=this;var A=bc.getStrings();return[{attributeName:aP,editor:new ay.TextAreaCellEditor(),name:A[aP]},{attributeName:p,editor:new ay.TextCellEditor({validator:{rules:{value:{required:true}}}}),name:A[p]},{attributeName:g,editor:false,name:A[g]}];},isBoundaryDrag:function(bc){var A=this;return(bc===A.boundaryDragDelegate.dd);},isTransitionConnected:function(bc){var A=this;return A.get(l).containsKey(bc.uid);},prepareTransition:function(bd){var A=this;var bc={source:A.get(p),target:null,uid:ay.guid()};if(a0(bd)){bc.target=bd;}else{if(M(bd)){bc=ay.merge(bc,bd);}}return bc;},removeTransition:function(bc){var A=this;return A.get(aa).removeKey(bc.uid);},renderShapeBoundary:function(){var A=this;var bc=A.boundary=A.get(ai).addShape(A.get(ad));bc.end();return bc;},renderShapeInvite:function(){var A=this;var bc=A.invite=A.get(a6).get(ai).addShape(A.get(j));bc.set(ao,false);bc.end();return bc;},syncConnectionsUI:function(){var A=this;A.get(aa).each(ay.bind(A.connect,A));},_afterDataSetRemove:function(bd){var A=this;var bc=bd.target;if(bc===A.get(aa)){A.get(l).removeKey(bd.prevVal.uid);}else{if(bc===A.get(l)){bd.prevVal.destroy();}}},_afterRender:function(bc){var A=this;A.setStdModContent(at.BODY,Z,at.AFTER);A._renderGraphic();A._renderControls();A._uiSetHighlighted(A.get(c));},_bindBoundaryEvents:function(){var A=this;A.boundary.detachAll().on({mouseenter:ay.bind(A._onBoundaryMouseEnter,A),mouseleave:ay.bind(A._onBoundaryMouseLeave,A)});},_createDataSet:function(){var A=this;return new ay.DataSet({bubbleTargets:A});},_defBoundaryDrag:function(be){var A=this;var bd=A.get(a6);var bf=A.boundaryDragDelegate.dd.mouseXY;bd.connector.set(aC,bf);if(bd.publishedTarget){var bc=A.invite;var bg=bc.get(aI)||0;if(!bc.get(ao)){bc.set(ao,true);}bc.setXY([bf[0]-bg,bf[1]-bg]);}},_defBoundaryDragEnd:function(bg){var A=this;var bf=bg.target;var bc=A.get(a6);var bd=bc.publishedSource;var be=bd&&bc.publishedTarget;if(!be&&bc.get(N)){bc.showSuggestConnetorOverlay();}else{bc.connector.hide();bd.invite.set(ao,false);}if(bc.get(Q)){bc.get(t).each(function(bh){bh.set(c,false);});}},_defBoundaryDragOut:function(bd){var A=this;var bc=A.get(a6);bc.publishedTarget=null;bc.publishedSource.invite.set(ao,false);},_defBoundaryDragOver:function(bd){var A=this;var bc=A.get(a6);if(bc.publishedSource!==A){bc.publishedTarget=A;}},_defBoundaryDragStart:function(bd){var A=this;var bc=A.get(a6);var be=A.boundaryDragDelegate.dd.startXY;bc.connector.show().set(aE,be);if(bc.get(Q)){bc.get(t).each(function(bf){bf.set(c,true);});}ay.DiagramNodeManager.fire("publishedSource",{publishedSource:A});},_defBoundaryDrop:function(bc){var A=this;A.connectNode(bc.publishedTarget);},_handleCloseEvent:function(bc){var A=this;if(!A.get(O)){A.close();}},_handleEditEvent:function(bc){var A=this;A.get(a6).editNode(A);},_onBoundaryDrag:function(bd){var A=this;var bc=A.get(a6);A.fire("boundaryDrag",{dragEvent:bd,publishedSource:bc.publishedSource});},_onBoundaryDragEnd:function(bf){var A=this;var bc=A.get(a6);var bd=bc.publishedSource;var be=bc.publishedTarget;if(bd&&be){A.fire("boundaryDrop",{dragEvent:bf,publishedSource:bd,publishedTarget:be});}A.fire("boundaryDragEnd",{dragEvent:bf,publishedSource:bd});
bf.target.get(aT).show();},_onBoundaryDragStart:function(bc){var A=this;A.fire("boundaryDragStart",{dragEvent:bc});bc.target.get(aT).hide();},_onBoundaryMouseEnter:function(be){var A=this;var bc=A.get(a6);var bd=bc.publishedSource;A.fire("boundaryMouseEnter",{domEvent:be});if(bd){A.fire("boundaryDragOver",{domEvent:be,publishedSource:bd});}},_onBoundaryMouseLeave:function(be){var A=this;var bc=A.get(a6);var bd=bc.publishedSource;A.fire("boundaryMouseLeave",{domEvent:be});if(bd){A.fire("boundaryDragOut",{domEvent:be,publishedSource:bd});}},_onNameChange:function(bc){var A=this;A.eachConnector(function(bd,be,bf){var bg=bd.get(o);bg[(A===bf)?X:k]=bc.newVal;bd.set(o,bg);});},_renderControls:function(){var A=this;var bc=A.get(s);A.controlsNode=ay.Node.create(A.CONTROLS_TEMPLATE).appendTo(bc);},_renderControlsToolbar:function(bc){var A=this;A.controlsToolbar=new ay.Toolbar(A.get(aJ)).render(A.controlsNode);A._uiSetRequired(A.get(O));},_renderGraphic:function(){var A=this;A.set(ai,new ay.Graphic({height:A.get(aU),render:A.bodyNode,width:A.get(T)}));A.renderShapeInvite();A.renderShapeBoundary().addClass(aQ);A._bindBoundaryEvents();A._setupBoundaryDrag();},_setTransitions:function(bd){var A=this;if(!a2(bd)){var bc=A._createDataSet();ay.Array.each(bd,function(bf){var be=ay.guid();bf=M(bf)?ay.mix(bf,{uid:be}):{uid:be,target:bf};bc.add(be,A.prepareTransition(bf));});bd=bc;}return bd;},_setupBoundaryDrag:function(){var A=this;var bc=A.get(a6);A.boundaryDragDelegate=new ay.DD.Delegate({bubbleTargets:A,container:A.bodyNode,nodes:i+aQ,dragConfig:{useShim:false,plugins:[{cfg:{constrain:(bc?bc.get(au):null)},fn:ay.Plugin.DDConstrained},{cfg:{scrollDelay:150},fn:ay.Plugin.DDWinScroll},{cfg:{borderStyle:"0px",moveOnEnd:false,resizeFrame:false},fn:ay.Plugin.DDProxy}]},on:{"drag:drag":ay.bind(A._onBoundaryDrag,A),"drag:end":ay.bind(A._onBoundaryDragEnd,A),"drag:start":ay.bind(A._onBoundaryDragStart,A)}});ay.Do.after(A._bindBoundaryEvents,A.boundaryDragDelegate.dd,"_unprep",A);},_uiSetHighlighted:function(bd){var A=this;if(A.get(a7)){var bc=bd?A.get(aD):A.get(ad+i+w);if(bc){A.boundary.set(w,bc);}}},_uiSetName:function(bd){var A=this;var bc=A.get(s);bc.set(aL,ay.DiagramNode.buildNodeId(bd));},_uiSetRequired:function(be){var bd=this;var bc=bd.getStrings();var A=bd.controlsToolbar;if(A){if(be){A.remove(a1);}else{A.add({handler:ay.bind(bd._handleCloseEvent,bd),icon:ar,id:a1,title:bc[J]});}}},_uiSetSelected:function(bc){var A=this;A.get(s).toggleClass(a8,bc);if(bc&&!A.controlsToolbar){A._renderControlsToolbar();}},_uiSetXY:function(bd){var A=this;var bc=A.getContainer().getXY();this._posNode.setXY([bd[0]+bc[0],bd[1]+bc[1]]);},_valueControlsToolbar:function(bd){var bc=this;var A=bc.getStrings();return{activeState:false,children:[{handler:ay.bind(bc._handleEditEvent,bc),icon:n,id:G,title:A[P]},{handler:ay.bind(bc._handleCloseEvent,bc),icon:ar,id:a1,title:A[J]}]};},_valueShapeBoundary:function(){var A=this;return{height:41,type:"rect",stroke:{weight:7,color:"transparent"},width:41};}}});ay.DiagramNode=bb;ay.DiagramBuilder.types[r]=ay.DiagramNode;ay.DiagramNodeState=ay.Component.create({NAME:F,ATTRS:{height:{value:40},type:{value:aj},width:{value:40}},EXTENDS:ay.DiagramNode,prototype:{hotPoints:ay.DiagramNode.CIRCLE_POINTS,renderShapeBoundary:function(){var A=this;var bc=A.boundary=A.get(ai).addShape(A.get(ad));bc.translate(5,5);bc.end();return bc;},_valueShapeBoundary:function(){var A=this;return{radius:15,type:"circle",stroke:{weight:7,color:"transparent"}};}}});ay.DiagramBuilder.types[aj]=ay.DiagramNodeState;ay.DiagramNodeCondition=ay.Component.create({NAME:F,ATTRS:{height:{value:60},type:{value:a3},width:{value:60}},EXTENDS:ay.DiagramNodeState,prototype:{hotPoints:ay.DiagramNode.DIAMOND_POINTS,renderShapeBoundary:function(){var A=this;var bc=A.boundary=A.get(ai).addShape(A.get(ad));bc.translate(10,10);bc.rotate(45);bc.end();return bc;},_valueShapeBoundary:ay.DiagramNode.prototype._valueShapeBoundary}});ay.DiagramBuilder.types[a3]=ay.DiagramNodeCondition;ay.DiagramNodeStart=ay.Component.create({NAME:F,ATTRS:{type:{value:aG}},EXTENDS:ay.DiagramNodeState});ay.DiagramBuilder.types[aG]=ay.DiagramNodeStart;ay.DiagramNodeEnd=ay.Component.create({NAME:F,ATTRS:{type:{value:aO}},EXTENDS:ay.DiagramNodeState});ay.DiagramBuilder.types[aO]=ay.DiagramNodeEnd;ay.DiagramNodeJoin=ay.Component.create({NAME:F,ATTRS:{height:{value:60},type:{value:u},width:{value:60}},EXTENDS:ay.DiagramNodeState,prototype:{hotPoints:ay.DiagramNode.DIAMOND_POINTS,renderShapeBoundary:ay.DiagramNodeCondition.prototype.renderShapeBoundary,_valueShapeBoundary:ay.DiagramNode.prototype._valueShapeBoundary}});ay.DiagramBuilder.types[u]=ay.DiagramNodeJoin;ay.DiagramNodeFork=ay.Component.create({NAME:F,ATTRS:{height:{value:60},type:{value:ax},width:{value:60}},EXTENDS:ay.DiagramNodeState,prototype:{hotPoints:ay.DiagramNode.DIAMOND_POINTS,renderShapeBoundary:ay.DiagramNodeCondition.prototype.renderShapeBoundary,_valueShapeBoundary:ay.DiagramNode.prototype._valueShapeBoundary}});ay.DiagramBuilder.types[ax]=ay.DiagramNodeFork;ay.DiagramNodeTask=ay.Component.create({NAME:F,ATTRS:{height:{value:70},type:{value:I},width:{value:70}},EXTENDS:ay.DiagramNodeState,prototype:{hotPoints:ay.DiagramNode.SQUARE_POINTS,renderShapeBoundary:function(){var A=this;var bc=A.boundary=A.get(ai).addShape(A.get(ad));bc.translate(8,8);bc.end();return bc;},_valueShapeBoundary:function(){var A=this;return{height:55,type:"rect",stroke:{weight:7,color:"transparent"},width:55};}}});ay.DiagramBuilder.types[I]=ay.DiagramNodeTask;},"@VERSION@",{requires:["aui-data-set","aui-diagram-builder-base","aui-diagram-builder-connector","overlay"],skinnable:true});