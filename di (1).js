/**
 * Copyright 2024 Medallia Inc.
 * https://www.medallia.com/
 */
window._da_=window._da_||[];_da_['jsVersion']=1727132319;_da_["da_websiteId"] = 2409020;_da_["returnVisit"] = false;_da_["accountNumber"] = 14201;_da_["da_dnsRecord"] = "collection.decibelinsight.net";_da_["intPreScripts"] = function(){};_da_["intScripts"] = function(){try{// List of events which need to check at DXA level
var medalliaEventsArr = ["MDigital_Form_Close_No_Submit","MDigital_Form_Next_Page","MDigital_Form_Back_Page","MDigital_ThankYou_Close","MDigital_Form_Close_Submitted","MDigital_ThankYou_Displayed","MDigital_Submit_Feedback","MDigital_CaptureButton_Taken","MDigital_Invite_Declined"];
var medalliaEventConfig = "surveyEngagement";

// Update DF that DXA is ready
if (typeof KAMPYLE_ONSITE_SDK !== 'undefined' && typeof KAMPYLE_ONSITE_SDK.collectIntegrationData !== 'undefined' ) { 
KAMPYLE_ONSITE_SDK.collectIntegrationData("decibelInsight");
}
		
// Send Integration data to DXA
function sendIntegrationData(eventType, detail) {
try {
var m_nps;
var m_fields = [];
if (detail.Content) {
for (var i = 0; i < detail.Content.length; i++) {
var name = detail.Content[i].unique_name ? detail.Content[i].unique_name : "";
var value = detail.Content[i].value ? detail.Content[i].value : "";
var type = detail.Content[i].type ? detail.Content[i].type : "";
if (detail.Content[i].type === "nps") {
m_nps = detail.Content[i].value;
}
if (detail.Content[i].type === "radio" || detail.Content[i].type === "select") {
if (detail.Content[i].value == null) {
value = "";
} else {
value = detail.Content[i].value.label ? detail.Content[i].value.label : "";
}
}
if (detail.Content[i].type === "checkbox") {
for (var j = 0; j < detail.Content[i].value.length; j++) {
value = detail.Content[i].value[j].label ? detail.Content[i].value[j].label : "";
m_fields.push({
name: name,
value: value,
type: type
});
}
} else {
m_fields.push({
name: name,
value: value,
type: type
});
}
}
}
var m_ContextData = {
event: eventType && eventType != null && isNaN(eventType) ? eventType.toString() : "",
formId: isNaN(detail.Form_ID) ? 99999 : parseInt(detail.Form_ID) || 99999,
formType: detail.Form_Type && detail.Form_Type != null && isNaN(detail.Form_Type) ? detail.Form_Type.toString() : "",
feedbackUuid: detail.Feedback_UUID && detail.Feedback_UUID != null && isNaN(detail.Feedback_UUID) ? detail.Feedback_UUID.toString() : "",
nps: isNaN(m_nps) ? 99999 : parseInt(m_nps) || 99999,
formFields: m_fields
};
if (m_ContextData.feedbackUuid !== "" && m_ContextData.formId !== 99999) {               
decibelInsight("sendIntegrationData", "Medallia", m_ContextData);
}
} catch (exception) { 
}
}
		
// Call back function call by DF
window.dxa_digital_integration = function(eventType, detail) {    
try {
// Ignore if event is out of required events
if (medalliaEventsArr.indexOf(eventType) === -1) {
return;
}

if (medalliaEventConfig === "surveyEngagement" || (medalliaEventConfig === "surveySubmission" && eventType.toString() === "MDigital_Submit_Feedback")) {
// TODO: this window level check not needed if implemented in di.js directly
if (!window.dxa_digital_set_retention_done) {
decibelInsight("setRetention");
window.dxa_digital_set_retention_done = true;
}
}        // TODO: unwrap this function
decibelInsight("onPageCollected", function() {
decibelInsight("sendTrackedEvent", eventType);
sendIntegrationData(eventType, detail);
}, true);
} catch (exception) {
} 
}

for (var i = 0; i < medalliaEventsArr.length; i++) {
var m_Event = medalliaEventsArr[i];
window.addEventListener(m_Event, function (mdEvent) { 
if (window.dxa_digital_listener_disabled) {
return;
} else {
// pass information to call back function
dxa_digital_integration(mdEvent.type, mdEvent.detail);
}});
}}catch(e){window[window.DecibelInsight].warn('DecibelInsight: Configuration error in Integration Tag.', e.toString()); if (window[window.DecibelInsight].handleException) window[window.DecibelInsight].handleException('Integration', e, 'CONFIG');}};_da_["formTitleCallback"] = _da_["formTitleCallback"] || function(form){try{if(!this.isEmpty(form.getAttribute('data-di-form-id'))){return form.getAttribute('data-di-form-id');}else if(!this.isEmpty(form.getAttribute('name'))){return form.getAttribute('name');}else if(!this.isEmpty(form.getAttribute('id'))){return form.getAttribute('id');}
return'';}catch(e){ if (window[window.DecibelInsight].handleException) window[window.DecibelInsight].handleException('formTitleCallback', e, 'CONFIG'); window[window.DecibelInsight].warn('DecibelInsight: Configuration error in formTitleCallback. ', e.toString());return '';}};_da_["fieldTitleCallback"] = _da_["fieldTitleCallback"] || function(field){try{if(field.parentNode&&field.parentNode.nodeName.toUpperCase()==='LABEL'){return this.Sizzle.getText(field.parentNode);}
if(!this.isEmpty(field.id)){var labelList=this.Sizzle('label[for=\''+field.id+'\']');if(labelList.length){return this.Sizzle.getText(labelList[0]);}}
if(!this.isEmpty(field.getAttribute('data-di-field-id'))){return field.getAttribute('data-di-field-id');}
if(!this.isEmpty(field.id)){return field.id;}
return field.name;}catch(e){ if (window[window.DecibelInsight].handleException) window[window.DecibelInsight].handleException('fieldTitleCallback', e, 'CONFIG'); window[window.DecibelInsight].warn('DecibelInsight: Configuration error in fieldTitleCallback. ', e.toString());return '';}};/*!
 * 
 * /**
 *  * Copyright Medallia Inc.
 *  * https://www.medallia.com/
 *  * /
 *
 */
/*!
 * 
 * /**
 *  * Diff Match and Patch
 *  * Copyright Google Inc.
 *  * http://code.google.com/p/google-diff-match-patch/
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * http://www.apache.org/licenses/LICENSE-2.0
 *  * /