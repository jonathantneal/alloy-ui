<%@ page import="java.io.Serializable"%>
<%@ page import="java.util.Calendar"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Locale"%>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.Set"%>
<%@ page import="com.liferay.alloy.util.PropsValues"%>
<%@ page import="com.liferay.alloy.util.GetterUtil" %>
<%@ page import="com.liferay.alloy.util.JSONFactoryUtil"%>
<%@ page import="com.liferay.alloy.util.MarkupUtil"%>
<%@ page import="com.liferay.alloy.util.StringUtil"%>
<%@ page import="com.liferay.portal.kernel.servlet.taglib.aui.ScriptData"%>
<%@ page import="com.liferay.portal.kernel.util.StringBundler"%>
<%@ page import="com.liferay.portal.kernel.util.StringPool" %>
<%@ page import="com.liferay.portal.kernel.util.Validator"%>
<%@ page import="org.json.JSONObject" %>
<%@ page import="org.json.JSONArray" %>

<%!
public static void _updateOptions(Map<String, Object> options, String key, Object value) {
	if ((options != null) && options.containsKey(key)) {
		options.put(key, value);
	}
}
%>

<%
java.lang.String NAMESPACE = "alloy:textboxlist:";

Map<String, Object> dynamicAttributes = (Map<String, Object>)request.getAttribute("alloy:textboxlist:dynamicAttributes");
Map<String, Object> scopedAttributes = (Map<String, Object>)request.getAttribute("alloy:textboxlist:scopedAttributes");

Map<String, Object> options = new HashMap<String, Object>();

options.putAll(scopedAttributes);
options.putAll(dynamicAttributes);

%>

<%@ include file="/html/taglib/alloy/init-alloy.jsp" %>

<%
java.lang.Boolean _alwaysShowContainer = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:alwaysShowContainer"), false);
java.lang.Boolean _applyLocalFilter = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:applyLocalFilter"), true);
java.lang.Boolean _autoHighlight = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:autoHighlight"), true);
java.lang.Boolean _button = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:button"), true);
java.lang.String _cssClass = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:textboxlist:cssClass"));
java.lang.Object _dataSource = (java.lang.Object)request.getAttribute("alloy:textboxlist:dataSource");
java.lang.String _dataSourceType = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:textboxlist:dataSourceType"));
java.lang.String _delimChar = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:textboxlist:delimChar"));
java.lang.Boolean _destroyed = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:destroyed"), false);
java.lang.Boolean _disabled = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:disabled"), false);
java.lang.Boolean _focused = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:focused"), false);
java.lang.Boolean _forceSelection = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:forceSelection"), false);
java.lang.Object _height = (java.lang.Object)request.getAttribute("alloy:textboxlist:height");
java.lang.String _hideClass = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:textboxlist:hideClass"), "aui-helper-hidden");
java.lang.String _textboxlistId = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:textboxlist:textboxlistId"));
java.lang.Boolean _initialized = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:initialized"), false);
java.lang.String _input = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:textboxlist:input"));
java.lang.Object _matchKey = (java.lang.Object)request.getAttribute("alloy:textboxlist:matchKey");
java.lang.Number _maxResultsDisplayed = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:textboxlist:maxResultsDisplayed")), 10);
java.lang.Number _minQueryLength = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:textboxlist:minQueryLength")), 1);
java.lang.Number _queryDelay = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:textboxlist:queryDelay")), 0.2);
java.lang.Number _queryInterval = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:textboxlist:queryInterval")), 0.5);
java.lang.Boolean _queryMatchCase = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:queryMatchCase"), false);
java.lang.Boolean _queryMatchContains = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:queryMatchContains"), false);
java.lang.Boolean _queryQuestionMark = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:queryQuestionMark"), true);
java.lang.Object _render = (java.lang.Object)request.getAttribute("alloy:textboxlist:render");
java.lang.Boolean _rendered = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:rendered"), false);
java.util.HashMap _schema = JSONFactoryUtil.getHashMap(GetterUtil.getObject((java.lang.Object)request.getAttribute("alloy:textboxlist:schema")));
java.lang.String _schemaType = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:textboxlist:schemaType"), "array");
java.util.HashMap _strings = JSONFactoryUtil.getHashMap(GetterUtil.getObject((java.lang.Object)request.getAttribute("alloy:textboxlist:strings")));
java.lang.Boolean _suppressInputUpdate = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:suppressInputUpdate"), false);
java.lang.Number _tabIndex = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:textboxlist:tabIndex")), 0);
java.lang.Boolean _typeAhead = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:typeAhead"), false);
java.lang.Number _typeAheadDelay = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:textboxlist:typeAheadDelay")), 0.2);
java.lang.String _uniqueName = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:textboxlist:uniqueName"));
java.lang.Boolean _visible = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:textboxlist:visible"), true);
java.lang.Object _width = (java.lang.Object)request.getAttribute("alloy:textboxlist:width");
java.lang.Object _afterAlwaysShowContainerChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterAlwaysShowContainerChange");
java.lang.Object _afterApplyLocalFilterChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterApplyLocalFilterChange");
java.lang.Object _afterAutoHighlightChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterAutoHighlightChange");
java.lang.Object _afterBoundingBoxChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterBoundingBoxChange");
java.lang.Object _afterButtonChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterButtonChange");
java.lang.Object _afterContainerCollapse = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterContainerCollapse");
java.lang.Object _afterContainerExpand = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterContainerExpand");
java.lang.Object _afterContainerPopulate = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterContainerPopulate");
java.lang.Object _afterContentBoxChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterContentBoxChange");
java.lang.Object _afterCssClassChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterCssClassChange");
java.lang.Object _afterDataError = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterDataError");
java.lang.Object _afterDataRequest = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterDataRequest");
java.lang.Object _afterDataReturn = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterDataReturn");
java.lang.Object _afterDataSourceChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterDataSourceChange");
java.lang.Object _afterDataSourceTypeChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterDataSourceTypeChange");
java.lang.Object _afterDelimCharChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterDelimCharChange");
java.lang.Object _afterDestroy = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterDestroy");
java.lang.Object _afterDestroyedChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterDestroyedChange");
java.lang.Object _afterDisabledChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterDisabledChange");
java.lang.Object _afterFocusedChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterFocusedChange");
java.lang.Object _afterForceSelectionChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterForceSelectionChange");
java.lang.Object _afterHeightChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterHeightChange");
java.lang.Object _afterHideClassChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterHideClassChange");
java.lang.Object _afterIdChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterIdChange");
java.lang.Object _afterInit = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterInit");
java.lang.Object _afterInitializedChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterInitializedChange");
java.lang.Object _afterInputChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterInputChange");
java.lang.Object _afterItemArrowFrom = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterItemArrowFrom");
java.lang.Object _afterItemArrowTo = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterItemArrowTo");
java.lang.Object _afterItemMouseOut = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterItemMouseOut");
java.lang.Object _afterItemMouseOver = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterItemMouseOver");
java.lang.Object _afterItemSelect = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterItemSelect");
java.lang.Object _afterMatchKeyChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterMatchKeyChange");
java.lang.Object _afterMaxResultsDisplayedChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterMaxResultsDisplayedChange");
java.lang.Object _afterMinQueryLengthChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterMinQueryLengthChange");
java.lang.Object _afterQueryDelayChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterQueryDelayChange");
java.lang.Object _afterQueryIntervalChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterQueryIntervalChange");
java.lang.Object _afterQueryMatchCaseChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterQueryMatchCaseChange");
java.lang.Object _afterQueryMatchContainsChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterQueryMatchContainsChange");
java.lang.Object _afterQueryQuestionMarkChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterQueryQuestionMarkChange");
java.lang.Object _afterRenderChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterRenderChange");
java.lang.Object _afterRenderedChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterRenderedChange");
java.lang.Object _afterSchemaChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterSchemaChange");
java.lang.Object _afterSchemaTypeChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterSchemaTypeChange");
java.lang.Object _afterSelectionEnforce = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterSelectionEnforce");
java.lang.Object _afterSrcNodeChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterSrcNodeChange");
java.lang.Object _afterStringsChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterStringsChange");
java.lang.Object _afterSuppressInputUpdateChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterSuppressInputUpdateChange");
java.lang.Object _afterTabIndexChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterTabIndexChange");
java.lang.Object _afterTextboxBlur = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterTextboxBlur");
java.lang.Object _afterTextboxChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterTextboxChange");
java.lang.Object _afterTextboxFocus = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterTextboxFocus");
java.lang.Object _afterTextboxKey = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterTextboxKey");
java.lang.Object _afterTypeAhead = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterTypeAhead");
java.lang.Object _afterTypeAheadChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterTypeAheadChange");
java.lang.Object _afterTypeAheadDelayChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterTypeAheadDelayChange");
java.lang.Object _afterUniqueNameChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterUniqueNameChange");
java.lang.Object _afterUnmatchedItemSelect = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterUnmatchedItemSelect");
java.lang.Object _afterVisibleChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterVisibleChange");
java.lang.Object _afterContentUpdate = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterContentUpdate");
java.lang.Object _afterRender = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterRender");
java.lang.Object _afterWidthChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:afterWidthChange");
java.lang.Object _onAlwaysShowContainerChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onAlwaysShowContainerChange");
java.lang.Object _onApplyLocalFilterChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onApplyLocalFilterChange");
java.lang.Object _onAutoHighlightChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onAutoHighlightChange");
java.lang.Object _onBoundingBoxChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onBoundingBoxChange");
java.lang.Object _onButtonChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onButtonChange");
java.lang.Object _onContainerCollapse = (java.lang.Object)request.getAttribute("alloy:textboxlist:onContainerCollapse");
java.lang.Object _onContainerExpand = (java.lang.Object)request.getAttribute("alloy:textboxlist:onContainerExpand");
java.lang.Object _onContainerPopulate = (java.lang.Object)request.getAttribute("alloy:textboxlist:onContainerPopulate");
java.lang.Object _onContentBoxChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onContentBoxChange");
java.lang.Object _onCssClassChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onCssClassChange");
java.lang.Object _onDataError = (java.lang.Object)request.getAttribute("alloy:textboxlist:onDataError");
java.lang.Object _onDataRequest = (java.lang.Object)request.getAttribute("alloy:textboxlist:onDataRequest");
java.lang.Object _onDataReturn = (java.lang.Object)request.getAttribute("alloy:textboxlist:onDataReturn");
java.lang.Object _onDataSourceChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onDataSourceChange");
java.lang.Object _onDataSourceTypeChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onDataSourceTypeChange");
java.lang.Object _onDelimCharChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onDelimCharChange");
java.lang.Object _onDestroy = (java.lang.Object)request.getAttribute("alloy:textboxlist:onDestroy");
java.lang.Object _onDestroyedChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onDestroyedChange");
java.lang.Object _onDisabledChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onDisabledChange");
java.lang.Object _onFocusedChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onFocusedChange");
java.lang.Object _onForceSelectionChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onForceSelectionChange");
java.lang.Object _onHeightChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onHeightChange");
java.lang.Object _onHideClassChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onHideClassChange");
java.lang.Object _onIdChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onIdChange");
java.lang.Object _onInit = (java.lang.Object)request.getAttribute("alloy:textboxlist:onInit");
java.lang.Object _onInitializedChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onInitializedChange");
java.lang.Object _onInputChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onInputChange");
java.lang.Object _onItemArrowFrom = (java.lang.Object)request.getAttribute("alloy:textboxlist:onItemArrowFrom");
java.lang.Object _onItemArrowTo = (java.lang.Object)request.getAttribute("alloy:textboxlist:onItemArrowTo");
java.lang.Object _onItemMouseOut = (java.lang.Object)request.getAttribute("alloy:textboxlist:onItemMouseOut");
java.lang.Object _onItemMouseOver = (java.lang.Object)request.getAttribute("alloy:textboxlist:onItemMouseOver");
java.lang.Object _onItemSelect = (java.lang.Object)request.getAttribute("alloy:textboxlist:onItemSelect");
java.lang.Object _onMatchKeyChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onMatchKeyChange");
java.lang.Object _onMaxResultsDisplayedChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onMaxResultsDisplayedChange");
java.lang.Object _onMinQueryLengthChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onMinQueryLengthChange");
java.lang.Object _onQueryDelayChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onQueryDelayChange");
java.lang.Object _onQueryIntervalChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onQueryIntervalChange");
java.lang.Object _onQueryMatchCaseChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onQueryMatchCaseChange");
java.lang.Object _onQueryMatchContainsChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onQueryMatchContainsChange");
java.lang.Object _onQueryQuestionMarkChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onQueryQuestionMarkChange");
java.lang.Object _onRenderChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onRenderChange");
java.lang.Object _onRenderedChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onRenderedChange");
java.lang.Object _onSchemaChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onSchemaChange");
java.lang.Object _onSchemaTypeChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onSchemaTypeChange");
java.lang.Object _onSelectionEnforce = (java.lang.Object)request.getAttribute("alloy:textboxlist:onSelectionEnforce");
java.lang.Object _onSrcNodeChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onSrcNodeChange");
java.lang.Object _onStringsChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onStringsChange");
java.lang.Object _onSuppressInputUpdateChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onSuppressInputUpdateChange");
java.lang.Object _onTabIndexChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onTabIndexChange");
java.lang.Object _onTextboxBlur = (java.lang.Object)request.getAttribute("alloy:textboxlist:onTextboxBlur");
java.lang.Object _onTextboxChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onTextboxChange");
java.lang.Object _onTextboxFocus = (java.lang.Object)request.getAttribute("alloy:textboxlist:onTextboxFocus");
java.lang.Object _onTextboxKey = (java.lang.Object)request.getAttribute("alloy:textboxlist:onTextboxKey");
java.lang.Object _onTypeAhead = (java.lang.Object)request.getAttribute("alloy:textboxlist:onTypeAhead");
java.lang.Object _onTypeAheadChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onTypeAheadChange");
java.lang.Object _onTypeAheadDelayChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onTypeAheadDelayChange");
java.lang.Object _onUniqueNameChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onUniqueNameChange");
java.lang.Object _onUnmatchedItemSelect = (java.lang.Object)request.getAttribute("alloy:textboxlist:onUnmatchedItemSelect");
java.lang.Object _onVisibleChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onVisibleChange");
java.lang.Object _onContentUpdate = (java.lang.Object)request.getAttribute("alloy:textboxlist:onContentUpdate");
java.lang.Object _onRender = (java.lang.Object)request.getAttribute("alloy:textboxlist:onRender");
java.lang.Object _onWidthChange = (java.lang.Object)request.getAttribute("alloy:textboxlist:onWidthChange");

_updateOptions(options, "alwaysShowContainer", _alwaysShowContainer);
_updateOptions(options, "applyLocalFilter", _applyLocalFilter);
_updateOptions(options, "autoHighlight", _autoHighlight);
_updateOptions(options, "boundingBox", _boundingBox);
_updateOptions(options, "button", _button);
_updateOptions(options, "contentBox", _contentBox);
_updateOptions(options, "cssClass", _cssClass);
_updateOptions(options, "dataSource", _dataSource);
_updateOptions(options, "dataSourceType", _dataSourceType);
_updateOptions(options, "delimChar", _delimChar);
_updateOptions(options, "destroyed", _destroyed);
_updateOptions(options, "disabled", _disabled);
_updateOptions(options, "focused", _focused);
_updateOptions(options, "forceSelection", _forceSelection);
_updateOptions(options, "height", _height);
_updateOptions(options, "hideClass", _hideClass);
_updateOptions(options, "textboxlistId", _textboxlistId);
_updateOptions(options, "initialized", _initialized);
_updateOptions(options, "input", _input);
_updateOptions(options, "matchKey", _matchKey);
_updateOptions(options, "maxResultsDisplayed", _maxResultsDisplayed);
_updateOptions(options, "minQueryLength", _minQueryLength);
_updateOptions(options, "queryDelay", _queryDelay);
_updateOptions(options, "queryInterval", _queryInterval);
_updateOptions(options, "queryMatchCase", _queryMatchCase);
_updateOptions(options, "queryMatchContains", _queryMatchContains);
_updateOptions(options, "queryQuestionMark", _queryQuestionMark);
_updateOptions(options, "render", _render);
_updateOptions(options, "rendered", _rendered);
_updateOptions(options, "schema", _schema);
_updateOptions(options, "schemaType", _schemaType);
_updateOptions(options, "srcNode", _srcNode);
_updateOptions(options, "strings", _strings);
_updateOptions(options, "suppressInputUpdate", _suppressInputUpdate);
_updateOptions(options, "tabIndex", _tabIndex);
_updateOptions(options, "typeAhead", _typeAhead);
_updateOptions(options, "typeAheadDelay", _typeAheadDelay);
_updateOptions(options, "uniqueName", _uniqueName);
_updateOptions(options, "visible", _visible);
_updateOptions(options, "width", _width);
_updateOptions(options, "afterAlwaysShowContainerChange", _afterAlwaysShowContainerChange);
_updateOptions(options, "afterApplyLocalFilterChange", _afterApplyLocalFilterChange);
_updateOptions(options, "afterAutoHighlightChange", _afterAutoHighlightChange);
_updateOptions(options, "afterBoundingBoxChange", _afterBoundingBoxChange);
_updateOptions(options, "afterButtonChange", _afterButtonChange);
_updateOptions(options, "afterContainerCollapse", _afterContainerCollapse);
_updateOptions(options, "afterContainerExpand", _afterContainerExpand);
_updateOptions(options, "afterContainerPopulate", _afterContainerPopulate);
_updateOptions(options, "afterContentBoxChange", _afterContentBoxChange);
_updateOptions(options, "afterCssClassChange", _afterCssClassChange);
_updateOptions(options, "afterDataError", _afterDataError);
_updateOptions(options, "afterDataRequest", _afterDataRequest);
_updateOptions(options, "afterDataReturn", _afterDataReturn);
_updateOptions(options, "afterDataSourceChange", _afterDataSourceChange);
_updateOptions(options, "afterDataSourceTypeChange", _afterDataSourceTypeChange);
_updateOptions(options, "afterDelimCharChange", _afterDelimCharChange);
_updateOptions(options, "afterDestroy", _afterDestroy);
_updateOptions(options, "afterDestroyedChange", _afterDestroyedChange);
_updateOptions(options, "afterDisabledChange", _afterDisabledChange);
_updateOptions(options, "afterFocusedChange", _afterFocusedChange);
_updateOptions(options, "afterForceSelectionChange", _afterForceSelectionChange);
_updateOptions(options, "afterHeightChange", _afterHeightChange);
_updateOptions(options, "afterHideClassChange", _afterHideClassChange);
_updateOptions(options, "afterIdChange", _afterIdChange);
_updateOptions(options, "afterInit", _afterInit);
_updateOptions(options, "afterInitializedChange", _afterInitializedChange);
_updateOptions(options, "afterInputChange", _afterInputChange);
_updateOptions(options, "afterItemArrowFrom", _afterItemArrowFrom);
_updateOptions(options, "afterItemArrowTo", _afterItemArrowTo);
_updateOptions(options, "afterItemMouseOut", _afterItemMouseOut);
_updateOptions(options, "afterItemMouseOver", _afterItemMouseOver);
_updateOptions(options, "afterItemSelect", _afterItemSelect);
_updateOptions(options, "afterMatchKeyChange", _afterMatchKeyChange);
_updateOptions(options, "afterMaxResultsDisplayedChange", _afterMaxResultsDisplayedChange);
_updateOptions(options, "afterMinQueryLengthChange", _afterMinQueryLengthChange);
_updateOptions(options, "afterQueryDelayChange", _afterQueryDelayChange);
_updateOptions(options, "afterQueryIntervalChange", _afterQueryIntervalChange);
_updateOptions(options, "afterQueryMatchCaseChange", _afterQueryMatchCaseChange);
_updateOptions(options, "afterQueryMatchContainsChange", _afterQueryMatchContainsChange);
_updateOptions(options, "afterQueryQuestionMarkChange", _afterQueryQuestionMarkChange);
_updateOptions(options, "afterRenderChange", _afterRenderChange);
_updateOptions(options, "afterRenderedChange", _afterRenderedChange);
_updateOptions(options, "afterSchemaChange", _afterSchemaChange);
_updateOptions(options, "afterSchemaTypeChange", _afterSchemaTypeChange);
_updateOptions(options, "afterSelectionEnforce", _afterSelectionEnforce);
_updateOptions(options, "afterSrcNodeChange", _afterSrcNodeChange);
_updateOptions(options, "afterStringsChange", _afterStringsChange);
_updateOptions(options, "afterSuppressInputUpdateChange", _afterSuppressInputUpdateChange);
_updateOptions(options, "afterTabIndexChange", _afterTabIndexChange);
_updateOptions(options, "afterTextboxBlur", _afterTextboxBlur);
_updateOptions(options, "afterTextboxChange", _afterTextboxChange);
_updateOptions(options, "afterTextboxFocus", _afterTextboxFocus);
_updateOptions(options, "afterTextboxKey", _afterTextboxKey);
_updateOptions(options, "afterTypeAhead", _afterTypeAhead);
_updateOptions(options, "afterTypeAheadChange", _afterTypeAheadChange);
_updateOptions(options, "afterTypeAheadDelayChange", _afterTypeAheadDelayChange);
_updateOptions(options, "afterUniqueNameChange", _afterUniqueNameChange);
_updateOptions(options, "afterUnmatchedItemSelect", _afterUnmatchedItemSelect);
_updateOptions(options, "afterVisibleChange", _afterVisibleChange);
_updateOptions(options, "afterContentUpdate", _afterContentUpdate);
_updateOptions(options, "afterRender", _afterRender);
_updateOptions(options, "afterWidthChange", _afterWidthChange);
_updateOptions(options, "onAlwaysShowContainerChange", _onAlwaysShowContainerChange);
_updateOptions(options, "onApplyLocalFilterChange", _onApplyLocalFilterChange);
_updateOptions(options, "onAutoHighlightChange", _onAutoHighlightChange);
_updateOptions(options, "onBoundingBoxChange", _onBoundingBoxChange);
_updateOptions(options, "onButtonChange", _onButtonChange);
_updateOptions(options, "onContainerCollapse", _onContainerCollapse);
_updateOptions(options, "onContainerExpand", _onContainerExpand);
_updateOptions(options, "onContainerPopulate", _onContainerPopulate);
_updateOptions(options, "onContentBoxChange", _onContentBoxChange);
_updateOptions(options, "onCssClassChange", _onCssClassChange);
_updateOptions(options, "onDataError", _onDataError);
_updateOptions(options, "onDataRequest", _onDataRequest);
_updateOptions(options, "onDataReturn", _onDataReturn);
_updateOptions(options, "onDataSourceChange", _onDataSourceChange);
_updateOptions(options, "onDataSourceTypeChange", _onDataSourceTypeChange);
_updateOptions(options, "onDelimCharChange", _onDelimCharChange);
_updateOptions(options, "onDestroy", _onDestroy);
_updateOptions(options, "onDestroyedChange", _onDestroyedChange);
_updateOptions(options, "onDisabledChange", _onDisabledChange);
_updateOptions(options, "onFocusedChange", _onFocusedChange);
_updateOptions(options, "onForceSelectionChange", _onForceSelectionChange);
_updateOptions(options, "onHeightChange", _onHeightChange);
_updateOptions(options, "onHideClassChange", _onHideClassChange);
_updateOptions(options, "onIdChange", _onIdChange);
_updateOptions(options, "onInit", _onInit);
_updateOptions(options, "onInitializedChange", _onInitializedChange);
_updateOptions(options, "onInputChange", _onInputChange);
_updateOptions(options, "onItemArrowFrom", _onItemArrowFrom);
_updateOptions(options, "onItemArrowTo", _onItemArrowTo);
_updateOptions(options, "onItemMouseOut", _onItemMouseOut);
_updateOptions(options, "onItemMouseOver", _onItemMouseOver);
_updateOptions(options, "onItemSelect", _onItemSelect);
_updateOptions(options, "onMatchKeyChange", _onMatchKeyChange);
_updateOptions(options, "onMaxResultsDisplayedChange", _onMaxResultsDisplayedChange);
_updateOptions(options, "onMinQueryLengthChange", _onMinQueryLengthChange);
_updateOptions(options, "onQueryDelayChange", _onQueryDelayChange);
_updateOptions(options, "onQueryIntervalChange", _onQueryIntervalChange);
_updateOptions(options, "onQueryMatchCaseChange", _onQueryMatchCaseChange);
_updateOptions(options, "onQueryMatchContainsChange", _onQueryMatchContainsChange);
_updateOptions(options, "onQueryQuestionMarkChange", _onQueryQuestionMarkChange);
_updateOptions(options, "onRenderChange", _onRenderChange);
_updateOptions(options, "onRenderedChange", _onRenderedChange);
_updateOptions(options, "onSchemaChange", _onSchemaChange);
_updateOptions(options, "onSchemaTypeChange", _onSchemaTypeChange);
_updateOptions(options, "onSelectionEnforce", _onSelectionEnforce);
_updateOptions(options, "onSrcNodeChange", _onSrcNodeChange);
_updateOptions(options, "onStringsChange", _onStringsChange);
_updateOptions(options, "onSuppressInputUpdateChange", _onSuppressInputUpdateChange);
_updateOptions(options, "onTabIndexChange", _onTabIndexChange);
_updateOptions(options, "onTextboxBlur", _onTextboxBlur);
_updateOptions(options, "onTextboxChange", _onTextboxChange);
_updateOptions(options, "onTextboxFocus", _onTextboxFocus);
_updateOptions(options, "onTextboxKey", _onTextboxKey);
_updateOptions(options, "onTypeAhead", _onTypeAhead);
_updateOptions(options, "onTypeAheadChange", _onTypeAheadChange);
_updateOptions(options, "onTypeAheadDelayChange", _onTypeAheadDelayChange);
_updateOptions(options, "onUniqueNameChange", _onUniqueNameChange);
_updateOptions(options, "onUnmatchedItemSelect", _onUnmatchedItemSelect);
_updateOptions(options, "onVisibleChange", _onVisibleChange);
_updateOptions(options, "onContentUpdate", _onContentUpdate);
_updateOptions(options, "onRender", _onRender);
_updateOptions(options, "onWidthChange", _onWidthChange);
%>

<%@ include file="init-ext.jsp" %>