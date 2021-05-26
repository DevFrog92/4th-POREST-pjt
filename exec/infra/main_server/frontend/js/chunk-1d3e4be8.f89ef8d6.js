(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d3e4be8"],{"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),a=n("9112");for(var s in i){var u=r[s],c=u&&u.prototype;if(c&&c.forEach!==o)try{a(c,"forEach",o)}catch(l){c.forEach=o}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");e.exports=function(e,t){var n;return i(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"794f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("chat room")]),n("section",[n("div",{staticClass:"container-fluid mt-4"},[n("div",{staticClass:"mb-3"},[n("span",{staticClass:"mb-0 h2 text-primary"},[e._v(e._s(e.roomName))]),e.user&&e.user.uid!==e.hostID?n("span",{staticClass:"ml-1"},[e._v(" Hosted by: "),n("strong",{staticClass:"text-danger"},[e._v(e._s(e.hostNickName))])]):e._e()]),e.user&&e.user.uid==e.hostID||e.attendeeApproved?n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"}),n("div",{staticClass:"col-md-4"},[!e.attendeeJoined&&e.attendeeApproved?n("button",{staticClass:"btn btn-primary mr-1",on:{click:e.doJoin}},[e._v(" Join ")]):e._e(),e.attendeeJoined?n("button",{staticClass:"btn btn-danger mr-1",attrs:{type:"button"},on:{click:e.doLeave}},[e._v(" Leave ")]):e._e(),n("h4",{staticClass:"mt-2"},[e._v("Attendees")]),n("ul",{staticClass:"list-unstyled"},e._l(e.attendeesApprovedArr,(function(t){return n("li",{key:t.id},[e.user&&e.user.uid==e.hostID?n("a",{staticClass:"mr-2",attrs:{type:"button",title:"Approve attendee"},on:{click:function(n){return e.toggleApproval(t.id)}}},[e._v(" approve ")]):e._e(),n("span",{staticClass:"mr-2",class:[t.webRTCID?"text-success":"text-secondary"],attrs:{title:"On Air"}}),n("span"),n("span",{staticClass:"pl-1",class:[t.id==e.user.uid?"font-weight-bold text-danger":""]},[e._v(e._s(t.nickName))])])})),0),e.user&&e.user.uid==e.hostID?n("div",[n("h5",{staticClass:"mt-4"},[e._v("Pending")]),n("ul",{staticClass:"list-unstyled"},e._l(e.attendeesPendingArr,(function(t){return n("li",{key:t.id,staticClass:"mb-1"},[n("span",[n("a",{staticClass:"mr-2",attrs:{type:"button",title:"Approve attendee"},on:{click:function(n){return e.toggleApproval(t.id)}}},[e._v("approve ")]),n("a",{staticClass:"text-secondary pr-1",attrs:{type:"button",title:"Delete Attendee"},on:{click:function(n){return e.deleteAttendee(t.id)}}},[e._v(" delete ")])]),n("span",{staticClass:"pl-1"},[e._v(e._s(t.nickName))])])})),0)]):e._e()])]):n("div",[n("p",{staticClass:"lead"},[e._v(" Hi "),n("strong",{staticClass:"text-primary font-weight-bold"},[e._v(e._s(e.user.nickName))]),e._v(", you're currently in the room waiting for the owner of the chat to add you to the meeting. Please wait. ")])])])])])},i=[],o=(n("a15b"),n("b0c0"),n("159b"),n("99af"),n("cc84")),a=(n("b7aa"),n("e947"),n("c68e"),n("a8e9")),s=n("abfd"),u=(n("c7b2"),n("eb09"));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(e){e.prototype.loadBundle=u["n"],e.prototype.namedQuery=u["p"]}c(u["a"]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var l=function(e,t){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},l(e,t)};function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function f(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function p(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;Object.create;var d=n("ffa6"),v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},g=function(e){function t(n,r,i){var o=e.call(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o.code=n,o.details=i,o}return h(t,e),t}(Error);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function y(e,t,n){var r=_(e),i=r,o=void 0;try{var a=t&&t.error;if(a){var s=a.status;if("string"===typeof s){if(!v[s])return new g("internal","internal");r=v[s],i=s}var u=a.message;"string"===typeof u&&(i=u),o=a.details,void 0!==o&&(o=n.decode(o))}}catch(c){}return"ok"===r?null:new g(r,i,o)}var m=function(){function e(e,t){var n=this;this.auth=null,this.messaging=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((function(e){return n.auth=e}),(function(){})),this.messaging||t.get().then((function(e){return n.messaging=e}),(function(){}))}return e.prototype.getAuthToken=function(){return f(this,void 0,void 0,(function(){var e;return p(this,(function(t){switch(t.label){case 0:if(!this.auth)return[2,void 0];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.auth.getToken()];case 2:return e=t.sent(),e?[2,e.accessToken]:[2,void 0];case 3:return t.sent(),[2,void 0];case 4:return[2]}}))}))},e.prototype.getInstanceIdToken=function(){return f(this,void 0,void 0,(function(){return p(this,(function(e){if(!this.messaging||!("Notification"in self)||"granted"!==Notification.permission)return[2,void 0];try{return[2,this.messaging.getToken()]}catch(t){return[2,void 0]}return[2]}))}))},e.prototype.getContext=function(){return f(this,void 0,void 0,(function(){var e,t;return p(this,(function(n){switch(n.label){case 0:return[4,this.getAuthToken()];case 1:return e=n.sent(),[4,this.getInstanceIdToken()];case 2:return t=n.sent(),[2,{authToken:e,instanceIdToken:t}]}}))}))},e}(),b="type.googleapis.com/google.protobuf.Int64Value",w="type.googleapis.com/google.protobuf.UInt64Value";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}var T=function(){function e(){}return e.prototype.encode=function(e){var t=this;if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"===typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(Array.isArray(e))return e.map((function(e){return t.encode(e)}));if("function"===typeof e||"object"===typeof e)return C(e,(function(e){return t.encode(e)}));throw new Error("Data cannot be encoded in JSON: "+e)},e.prototype.decode=function(e){var t=this;if(null==e)return e;if(e["@type"])switch(e["@type"]){case b:case w:var n=Number(e["value"]);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+e);return n;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map((function(e){return t.decode(e)})):"function"===typeof e||"object"===typeof e?C(e,(function(e){return t.decode(e)})):e},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){var t,n=new Promise((function(n,r){t=setTimeout((function(){r(new g("deadline-exceeded","deadline-exceeded"))}),e)}));return{timer:t,promise:n}}var I=function(){function e(e,t,n,r,i){var o=this;void 0===r&&(r="us-central1"),this.app_=e,this.fetchImpl=i,this.serializer=new T,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return Promise.resolve(o.deleteService())}},this.contextProvider=new m(t,n),this.cancelAllRequests=new Promise((function(e){o.deleteService=function(){return e()}}));try{var a=new URL(r);this.customDomain=a.origin,this.region="us-central1"}catch(s){this.customDomain=null,this.region=r}}return Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),e.prototype._url=function(e){var t=this.app_.options.projectId;if(null!==this.emulatorOrigin){var n=this.emulatorOrigin;return n+"/"+t+"/"+this.region+"/"+e}return null!==this.customDomain?this.customDomain+"/"+e:"https://"+this.region+"-"+t+".cloudfunctions.net/"+e},e.prototype.useEmulator=function(e,t){this.emulatorOrigin="http://"+e+":"+t},e.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},e.prototype.httpsCallable=function(e,t){var n=this;return function(r){return n.call(e,r,t||{})}},e.prototype.postJSON=function(e,t,n){return f(this,void 0,void 0,(function(){var r,i;return p(this,(function(o){switch(o.label){case 0:n["Content-Type"]="application/json",o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.fetchImpl(e,{method:"POST",body:JSON.stringify(t),headers:n})];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),[2,{status:0,json:null}];case 4:i=null,o.label=5;case 5:return o.trys.push([5,7,,8]),[4,r.json()];case 6:return i=o.sent(),[3,8];case 7:return o.sent(),[3,8];case 8:return[2,{status:r.status,json:i}]}}))}))},e.prototype.call=function(e,t,n){return f(this,void 0,void 0,(function(){var r,i,o,a,s,u,c,l,h,f,d,v;return p(this,(function(p){switch(p.label){case 0:return r=this._url(e),t=this.serializer.encode(t),i={data:t},o={},[4,this.contextProvider.getContext()];case 1:return a=p.sent(),a.authToken&&(o["Authorization"]="Bearer "+a.authToken),a.instanceIdToken&&(o["Firebase-Instance-ID-Token"]=a.instanceIdToken),s=n.timeout||7e4,u=O(s),c=u.timer,l=u.promise,[4,Promise.race([E(c,this.postJSON(r,i,o)),l,E(c,this.cancelAllRequests)])];case 2:if(h=p.sent(),!h)throw new g("cancelled","Firebase Functions instance was deleted.");if(f=y(h.status,h.json,this.serializer),f)throw f;if(!h.json)throw new g("internal","Response is not valid JSON object.");if(d=h.json.data,"undefined"===typeof d&&(d=h.json.result),"undefined"===typeof d)throw new g("internal","Response is missing data field.");return v=this.serializer.decode(d),[2,{data:v}]}}))}))},e}();function E(e,t){return f(this,void 0,void 0,(function(){var n;return p(this,(function(r){switch(r.label){case 0:return[4,t];case 1:return n=r.sent(),clearTimeout(e),[2,n]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S="functions";function k(e,t){var n={Functions:I};function r(e,n){var r=n.instanceIdentifier,i=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("messaging");return new I(i,o,a,r,t)}e.INTERNAL.registerComponent(new d["a"](S,r,"PUBLIC").setServiceProps(n).setMultipleInstances(!0))}var P="@firebase/functions",N="0.6.7";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
k(o["a"],fetch.bind(self)),o["a"].registerVersion(P,N);var x=function(){return x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},x.apply(this,arguments)};function R(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function j(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function A(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function D(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a}function M(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}Object.create;var L,F=n("9dbb"),q="@firebase/installations",U="0.4.25",B=1e4,W="w:"+U,K="FIS_v2",H="https://firebaseinstallations.googleapis.com/v1",V=36e5,z="installations",G="Installations",Q=(L={},L["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',L["not-registered"]="Firebase Installation is not registered.",L["installation-not-found"]="Firebase Installation not found.",L["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',L["app-offline"]="Could not process request. Application offline.",L["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",L),Y=new a["b"](z,G,Q);function $(e){return e instanceof a["c"]&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){var t=e.projectId;return H+"/projects/"+t+"/installations"}function X(e){return{token:e.token,requestStatus:2,expiresIn:re(e.expiresIn),creationTime:Date.now()}}function Z(e,t){return R(this,void 0,void 0,(function(){var n,r;return j(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),r=n.error,[2,Y.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function ee(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function te(e,t){var n=t.refreshToken,r=ee(e);return r.append("Authorization",ie(n)),r}function ne(e){return R(this,void 0,void 0,(function(){var t;return j(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return t=n.sent(),t.status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function re(e){return Number(e.replace("s","000"))}function ie(e){return K+" "+e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){var n=t.fid;return R(this,void 0,void 0,(function(){var t,r,i,o,a,s,u;return j(this,(function(c){switch(c.label){case 0:return t=J(e),r=ee(e),i={fid:n,authVersion:K,appId:e.appId,sdkVersion:W},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,ne((function(){return fetch(t,o)}))];case 1:return a=c.sent(),a.ok?[4,a.json()]:[3,3];case 2:return s=c.sent(),u={fid:s.fid||n,registrationStatus:2,refreshToken:s.refreshToken,authToken:X(s.authToken)},[2,u];case 3:return[4,Z("Create Installation",a)];case 4:throw c.sent()}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){var t=btoa(String.fromCharCode.apply(String,M([],D(e))));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue=/^[cdef][\w-]{21}$/,ce="";function le(){try{var e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;var n=he(e);return ue.test(n)?n:ce}catch(r){return ce}}function he(e){var t=se(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){return e.appName+"!"+e.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe=new Map;function de(e,t){var n=fe(e);_e(n,t),ye(n,t)}function ve(e,t){be();var n=fe(e),r=pe.get(n);r||(r=new Set,pe.set(n,r)),r.add(t)}function ge(e,t){var n=fe(e),r=pe.get(n);r&&(r.delete(t),0===r.size&&pe.delete(n),we())}function _e(e,t){var n,r,i=pe.get(e);if(i)try{for(var o=A(i),a=o.next();!a.done;a=o.next()){var s=a.value;s(t)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function ye(e,t){var n=be();n&&n.postMessage({key:e,fid:t}),we()}var me=null;function be(){return!me&&"BroadcastChannel"in self&&(me=new BroadcastChannel("[Firebase] FID Change"),me.onmessage=function(e){_e(e.data.key,e.data.fid)}),me}function we(){0===pe.size&&me&&(me.close(),me=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce="firebase-installations-database",Te=1,Oe="firebase-installations-store",Ie=null;function Ee(){return Ie||(Ie=Object(F["openDb"])(Ce,Te,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(Oe)}}))),Ie}function Se(e,t){return R(this,void 0,void 0,(function(){var n,r,i,o,a;return j(this,(function(s){switch(s.label){case 0:return n=fe(e),[4,Ee()];case 1:return r=s.sent(),i=r.transaction(Oe,"readwrite"),o=i.objectStore(Oe),[4,o.get(n)];case 2:return a=s.sent(),[4,o.put(t,n)];case 3:return s.sent(),[4,i.complete];case 4:return s.sent(),a&&a.fid===t.fid||de(e,t.fid),[2,t]}}))}))}function ke(e){return R(this,void 0,void 0,(function(){var t,n,r;return j(this,(function(i){switch(i.label){case 0:return t=fe(e),[4,Ee()];case 1:return n=i.sent(),r=n.transaction(Oe,"readwrite"),[4,r.objectStore(Oe).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function Pe(e,t){return R(this,void 0,void 0,(function(){var n,r,i,o,a,s;return j(this,(function(u){switch(u.label){case 0:return n=fe(e),[4,Ee()];case 1:return r=u.sent(),i=r.transaction(Oe,"readwrite"),o=i.objectStore(Oe),[4,o.get(n)];case 2:return a=u.sent(),s=t(a),void 0!==s?[3,4]:[4,o.delete(n)];case 3:return u.sent(),[3,6];case 4:return[4,o.put(s,n)];case 5:u.sent(),u.label=6;case 6:return[4,i.complete];case 7:return u.sent(),!s||a&&a.fid===s.fid||de(e,s.fid),[2,s]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){return R(this,void 0,void 0,(function(){var t,n,r;return j(this,(function(i){switch(i.label){case 0:return[4,Pe(e,(function(n){var r=xe(n),i=Re(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return n=i.sent(),n.fid!==ce?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function xe(e){var t=e||{fid:le(),registrationStatus:0};return Me(t)}function Re(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(Y.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=je(e,r);return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ae(e)}:{installationEntry:t}}function je(e,t){return R(this,void 0,void 0,(function(){var n,r;return j(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,oe(e,t)];case 1:return n=i.sent(),[2,Se(e,n)];case 2:return r=i.sent(),$(r)&&409===r.customData.serverCode?[4,ke(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,Se(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}function Ae(e){return R(this,void 0,void 0,(function(){var t,n,r,i;return j(this,(function(o){switch(o.label){case 0:return[4,De(e)];case 1:t=o.sent(),o.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,ae(100)];case 3:return o.sent(),[4,De(e)];case 4:return t=o.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,Ne(e)];case 6:return n=o.sent(),r=n.installationEntry,i=n.registrationPromise,i?[2,i]:[2,r];case 7:return[2,t]}}))}))}function De(e){return Pe(e,(function(e){if(!e)throw Y.create("installation-not-found");return Me(e)}))}function Me(e){return Le(e)?{fid:e.fid,registrationStatus:0}:e}function Le(e){return 1===e.registrationStatus&&e.registrationTime+B<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return R(this,void 0,void 0,(function(){var e,i,o,a,s,u,c,l;return j(this,(function(h){switch(h.label){case 0:return e=qe(n,t),i=te(n,t),o=r.getImmediate({optional:!0}),o&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:W}},s={method:"POST",headers:i,body:JSON.stringify(a)},[4,ne((function(){return fetch(e,s)}))];case 1:return u=h.sent(),u.ok?[4,u.json()]:[3,3];case 2:return c=h.sent(),l=X(c),[2,l];case 3:return[4,Z("Generate Auth Token",u)];case 4:throw h.sent()}}))}))}function qe(e,t){var n=t.fid;return J(e)+"/"+n+"/authTokens:generate"}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e,t){return void 0===t&&(t=!1),R(this,void 0,void 0,(function(){var n,r,i,o;return j(this,(function(a){switch(a.label){case 0:return[4,Pe(e.appConfig,(function(r){if(!He(r))throw Y.create("not-registered");var i=r.authToken;if(!t&&Ve(i))return r;if(1===i.requestStatus)return n=Be(e,t),r;if(!navigator.onLine)throw Y.create("app-offline");var o=Ge(r);return n=Ke(e,o),o}))];case 1:return r=a.sent(),n?[4,n]:[3,3];case 2:return o=a.sent(),[3,4];case 3:o=r.authToken,a.label=4;case 4:return i=o,[2,i]}}))}))}function Be(e,t){return R(this,void 0,void 0,(function(){var n,r;return j(this,(function(i){switch(i.label){case 0:return[4,We(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,ae(100)];case 3:return i.sent(),[4,We(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return r=n.authToken,0===r.requestStatus?[2,Ue(e,t)]:[2,r]}}))}))}function We(e){return Pe(e,(function(e){if(!He(e))throw Y.create("not-registered");var t=e.authToken;return Qe(t)?x(x({},e),{authToken:{requestStatus:0}}):e}))}function Ke(e,t){return R(this,void 0,void 0,(function(){var n,r,i;return j(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,Fe(e,t)];case 1:return n=o.sent(),i=x(x({},t),{authToken:n}),[4,Se(e.appConfig,i)];case 2:return o.sent(),[2,n];case 3:return r=o.sent(),!$(r)||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,ke(e.appConfig)];case 4:return o.sent(),[3,7];case 5:return i=x(x({},t),{authToken:{requestStatus:0}}),[4,Se(e.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw r;case 8:return[2]}}))}))}function He(e){return void 0!==e&&2===e.registrationStatus}function Ve(e){return 2===e.requestStatus&&!ze(e)}function ze(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+V}function Ge(e){var t={requestStatus:1,requestTime:Date.now()};return x(x({},e),{authToken:t})}function Qe(e){return 1===e.requestStatus&&e.requestTime+B<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e){return R(this,void 0,void 0,(function(){var t,n,r;return j(this,(function(i){switch(i.label){case 0:return[4,Ne(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,r=t.registrationPromise,r?r.catch(console.error):Ue(e).catch(console.error),[2,n.fid]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e,t){return void 0===t&&(t=!1),R(this,void 0,void 0,(function(){var n;return j(this,(function(r){switch(r.label){case 0:return[4,Je(e.appConfig)];case 1:return r.sent(),[4,Ue(e,t)];case 2:return n=r.sent(),[2,n.token]}}))}))}function Je(e){return R(this,void 0,void 0,(function(){var t;return j(this,(function(n){switch(n.label){case 0:return[4,Ne(e)];case 1:return t=n.sent().registrationPromise,t?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e,t){return R(this,void 0,void 0,(function(){var n,r,i,o;return j(this,(function(a){switch(a.label){case 0:return n=Ze(e,t),r=te(e,t),i={method:"DELETE",headers:r},[4,ne((function(){return fetch(n,i)}))];case 1:return o=a.sent(),o.ok?[3,3]:[4,Z("Delete Installation",o)];case 2:throw a.sent();case 3:return[2]}}))}))}function Ze(e,t){var n=t.fid;return J(e)+"/"+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return R(this,void 0,void 0,(function(){var t,n;return j(this,(function(r){switch(r.label){case 0:return t=e.appConfig,[4,Pe(t,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(n=r.sent(),!n)return[3,6];if(1!==n.registrationStatus)return[3,2];throw Y.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw Y.create("app-offline");case 3:return[4,Xe(t,n)];case 4:return r.sent(),[4,ke(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e,t){var n=e.appConfig;return ve(n,t),function(){ge(n,t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e){var t,n;if(!e||!e.options)throw rt("App Configuration");if(!e.name)throw rt("App Name");var r=["projectId","apiKey","appId"];try{for(var i=A(r),o=i.next();!o.done;o=i.next()){var a=o.value;if(!e.options[a])throw rt(a)}}catch(s){t={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function rt(e){return Y.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e){var t="installations";e.INTERNAL.registerComponent(new d["a"](t,(function(e){var t=e.getProvider("app").getImmediate(),n=nt(t),r=e.getProvider("platform-logger"),i={appConfig:n,platformLoggerProvider:r},o={app:t,getId:function(){return Ye(i)},getToken:function(e){return $e(i,e)},delete:function(){return et(i)},onIdChange:function(e){return tt(i,e)}};return o}),"PUBLIC")),e.registerVersion(q,U)}it(o["a"]);var ot=function(){return ot=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ot.apply(this,arguments)};function at(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function st(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function ut(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ct(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a}function lt(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}var ht;Object.create;var ft,pt=(ht={},ht["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',ht["only-available-in-window"]="This method is available in a Window context.",ht["only-available-in-sw"]="This method is available in a service worker context.",ht["permission-default"]="The notification permission was not granted and dismissed instead.",ht["permission-blocked"]="The notification permission was not granted and blocked instead.",ht["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",ht["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",ht["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",ht["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",ht["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",ht["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",ht["token-update-no-token"]="FCM returned no token when updating the user to push.",ht["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",ht["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",ht["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",ht["invalid-vapid-key"]="The public VAPID key must be a string.",ht["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",ht),dt=new a["b"]("messaging","Messaging",pt),vt="/firebase-messaging-sw.js",gt="/firebase-cloud-messaging-push-scope",_t="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",yt="https://fcmregistrations.googleapis.com/v1",mt="FCM_MSG",bt="FirebaseMessaging: ",wt="google.c.a.e",Ct="google.c.a.c_id",Tt="google.c.a.ts",Ot="google.c.a.c_l",It=1e3,Et=3e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function St(e){var t=new Uint8Array(e),n=btoa(String.fromCharCode.apply(String,lt([],ct(t))));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function kt(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length),o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"})(ft||(ft={}));var Pt="fcm_token_details_db",Nt=5,xt="fcm_token_object_Store";function Rt(e){return at(this,void 0,void 0,(function(){var t,n,r,i,o=this;return st(this,(function(a){switch(a.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=a.sent(),n=t.map((function(e){return e.name})),!n.includes(Pt))return[2,null];a.label=2;case 2:return r=null,[4,Object(F["openDb"])(Pt,Nt,(function(t){return at(o,void 0,void 0,(function(){var n,i,o,a;return st(this,(function(s){switch(s.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains(xt)?(n=t.transaction.objectStore(xt),[4,n.index("fcmSenderId").get(e)]):[2];case 1:return i=s.sent(),[4,n.clear()];case 2:if(s.sent(),!i)return[2];if(2===t.oldVersion){if(o=i,!o.auth||!o.p256dh||!o.endpoint)return[2];r={token:o.fcmToken,createTime:null!==(a=o.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"===typeof o.vapidKey?o.vapidKey:St(o.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(o=i,r={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:St(o.auth),p256dh:St(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:St(o.vapidKey)}});return[2]}}))}))}))];case 3:return i=a.sent(),i.close(),[4,Object(F["deleteDb"])(Pt)];case 4:return a.sent(),[4,Object(F["deleteDb"])("fcm_vapid_details_db")];case 5:return a.sent(),[4,Object(F["deleteDb"])("undefined")];case 6:return a.sent(),[2,jt(r)?r:null]}}))}))}function jt(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At="firebase-messaging-database",Dt=1,Mt="firebase-messaging-store",Lt=null;function Ft(){return Lt||(Lt=Object(F["openDb"])(At,Dt,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(Mt)}}))),Lt}function qt(e){return at(this,void 0,void 0,(function(){var t,n,r,i;return st(this,(function(o){switch(o.label){case 0:return t=Wt(e),[4,Ft()];case 1:return n=o.sent(),[4,n.transaction(Mt).objectStore(Mt).get(t)];case 2:return r=o.sent(),r?[2,r]:[3,3];case 3:return[4,Rt(e.appConfig.senderId)];case 4:return i=o.sent(),i?[4,Ut(e,i)]:[3,6];case 5:return o.sent(),[2,i];case 6:return[2]}}))}))}function Ut(e,t){return at(this,void 0,void 0,(function(){var n,r,i;return st(this,(function(o){switch(o.label){case 0:return n=Wt(e),[4,Ft()];case 1:return r=o.sent(),i=r.transaction(Mt,"readwrite"),[4,i.objectStore(Mt).put(t,n)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}}))}))}function Bt(e){return at(this,void 0,void 0,(function(){var t,n,r;return st(this,(function(i){switch(i.label){case 0:return t=Wt(e),[4,Ft()];case 1:return n=i.sent(),r=n.transaction(Mt,"readwrite"),[4,r.objectStore(Mt).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function Wt(e){var t=e.appConfig;return t.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){return at(this,void 0,void 0,(function(){var n,r,i,o,a,s,u;return st(this,(function(c){switch(c.label){case 0:return[4,Gt(e)];case 1:n=c.sent(),r=Qt(t),i={method:"POST",headers:n,body:JSON.stringify(r)},c.label=2;case 2:return c.trys.push([2,5,,6]),[4,fetch(zt(e.appConfig),i)];case 3:return a=c.sent(),[4,a.json()];case 4:return o=c.sent(),[3,6];case 5:throw s=c.sent(),dt.create("token-subscribe-failed",{errorInfo:s});case 6:if(o.error)throw u=o.error.message,dt.create("token-subscribe-failed",{errorInfo:u});if(!o.token)throw dt.create("token-subscribe-no-token");return[2,o.token]}}))}))}function Ht(e,t){return at(this,void 0,void 0,(function(){var n,r,i,o,a,s,u;return st(this,(function(c){switch(c.label){case 0:return[4,Gt(e)];case 1:n=c.sent(),r=Qt(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},c.label=2;case 2:return c.trys.push([2,5,,6]),[4,fetch(zt(e.appConfig)+"/"+t.token,i)];case 3:return a=c.sent(),[4,a.json()];case 4:return o=c.sent(),[3,6];case 5:throw s=c.sent(),dt.create("token-update-failed",{errorInfo:s});case 6:if(o.error)throw u=o.error.message,dt.create("token-update-failed",{errorInfo:u});if(!o.token)throw dt.create("token-update-no-token");return[2,o.token]}}))}))}function Vt(e,t){return at(this,void 0,void 0,(function(){var n,r,i,o,a,s;return st(this,(function(u){switch(u.label){case 0:return[4,Gt(e)];case 1:n=u.sent(),r={method:"DELETE",headers:n},u.label=2;case 2:return u.trys.push([2,5,,6]),[4,fetch(zt(e.appConfig)+"/"+t,r)];case 3:return i=u.sent(),[4,i.json()];case 4:if(o=u.sent(),o.error)throw a=o.error.message,dt.create("token-unsubscribe-failed",{errorInfo:a});return[3,6];case 5:throw s=u.sent(),dt.create("token-unsubscribe-failed",{errorInfo:s});case 6:return[2]}}))}))}function zt(e){var t=e.projectId;return yt+"/projects/"+t+"/registrations"}function Gt(e){var t=e.appConfig,n=e.installations;return at(this,void 0,void 0,(function(){var e;return st(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function Qt(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==_t&&(o.web.applicationPubKey=i),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt=6048e5;function $t(e,t,n){return at(this,void 0,void 0,(function(){var r,i,o,a;return st(this,(function(s){switch(s.label){case 0:if("granted"!==Notification.permission)throw dt.create("permission-blocked");return[4,en(t,n)];case 1:return r=s.sent(),[4,qt(e)];case 2:return i=s.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:St(r.getKey("auth")),p256dh:St(r.getKey("p256dh"))},i?[3,3]:[2,Zt(e,o)];case 3:if(tn(i.subscriptionOptions,o))return[3,8];s.label=4;case 4:return s.trys.push([4,6,,7]),[4,Vt(e,i.token)];case 5:return s.sent(),[3,7];case 6:return a=s.sent(),console.warn(a),[3,7];case 7:return[2,Zt(e,o)];case 8:return Date.now()>=i.createTime+Yt?[2,Xt({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}}))}))}function Jt(e,t){return at(this,void 0,void 0,(function(){var n,r;return st(this,(function(i){switch(i.label){case 0:return[4,qt(e)];case 1:return n=i.sent(),n?[4,Vt(e,n.token)]:[3,4];case 2:return i.sent(),[4,Bt(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return r=i.sent(),r?[2,r.unsubscribe()]:[2,!0]}}))}))}function Xt(e,t,n){return at(this,void 0,void 0,(function(){var r,i,o;return st(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,Ht(t,e)];case 1:return r=a.sent(),i=ot(ot({},e),{token:r,createTime:Date.now()}),[4,Ut(t,i)];case 2:return a.sent(),[2,r];case 3:return o=a.sent(),[4,Jt(t,n)];case 4:throw a.sent(),o;case 5:return[2]}}))}))}function Zt(e,t){return at(this,void 0,void 0,(function(){var n,r;return st(this,(function(i){switch(i.label){case 0:return[4,Kt(e,t)];case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,Ut(e,r)];case 2:return i.sent(),[2,r.token]}}))}))}function en(e,t){return at(this,void 0,void 0,(function(){var n;return st(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return n=r.sent(),n?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:kt(t)})]}}))}))}function tn(e,t){var n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){var t={from:e.from,collapseKey:e.collapse_key};return rn(t,e),on(t,e),an(t,e),t}function rn(e,t){if(t.notification){e.notification={};var n=t.notification.title;n&&(e.notification.title=n);var r=t.notification.body;r&&(e.notification.body=r);var i=t.notification.image;i&&(e.notification.image=i)}}function on(e,t){t.data&&(e.data=t.data)}function an(e,t){if(t.fcmOptions){e.fcmOptions={};var n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);var r=t.fcmOptions.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){return"object"===typeof e&&!!e&&Ct in e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!==typeof e)throw dt.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return at(this,void 0,void 0,(function(){var n;return st(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,qt(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null===n||void 0===n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:_t,r.label=2;case 2:return[2,$t(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return Jt(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw dt.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw dt.create("use-vapid-key-after-get-token");if("string"!==typeof e||0===e.length)throw dt.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw dt.create("only-available-in-window")},e.prototype.onMessage=function(){throw dt.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw dt.create("only-available-in-window")},e.prototype.onPush=function(e){return at(this,void 0,void 0,(function(){var t,n,r,i;return st(this,(function(o){switch(o.label){case 0:return t=hn(e),t?[4,vn()]:(console.debug(bt+"failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return n=o.sent(),pn(n)?[2,dn(n,t)]:(r=!1,t.notification?[4,gn(ln(t))]:[3,3]);case 2:o.sent(),r=!0,o.label=3;case 3:return!0===r&&!1===this.isOnBackgroundMessageUsed?[2]:(this.bgMessageHandler&&(i=nn(t),"function"===typeof this.bgMessageHandler?this.bgMessageHandler(i):this.bgMessageHandler.next(i)),[4,un(It)]);case 4:return o.sent(),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return at(this,void 0,void 0,(function(){var r,i;return st(this,(function(o){switch(o.label){case 0:return r=e.newSubscription,r?[3,2]:[4,Jt(this.firebaseDependencies,self.registration)];case 1:return o.sent(),[2];case 2:return[4,qt(this.firebaseDependencies)];case 3:return i=o.sent(),[4,Jt(this.firebaseDependencies,self.registration)];case 4:return o.sent(),[4,$t(this.firebaseDependencies,self.registration,null!==(n=null===(t=null===i||void 0===i?void 0:i.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:_t)];case 5:return o.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return at(this,void 0,void 0,(function(){var r,i,o,a,s;return st(this,(function(u){switch(u.label){case 0:return r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[mt],r?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),i=_n(r),i?(o=new URL(i,self.location.href),a=new URL(self.location.origin),o.host!==a.host?[2]:[4,fn(o)]):[2]):[2];case 1:return s=u.sent(),s?[3,4]:[4,self.clients.openWindow(i)];case 2:return s=u.sent(),[4,un(Et)];case 3:return u.sent(),[3,6];case 4:return[4,s.focus()];case 5:s=u.sent(),u.label=6;case 6:return s?(r.messageType=ft.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,[2,s.postMessage(r)]):[2]}}))}))},e}();function ln(e){var t,n=ot({},e.notification);return n.data=(t={},t[mt]=e,t),n}function hn(e){var t=e.data;if(!t)return null;try{return t.json()}catch(n){return null}}function fn(e){return at(this,void 0,void 0,(function(){var t,n,r,i,o,a,s;return st(this,(function(u){switch(u.label){case 0:return[4,vn()];case 1:t=u.sent();try{for(n=ut(t),r=n.next();!r.done;r=n.next())if(i=r.value,o=new URL(i.url,self.location.href),e.host===o.host)return[2,i]}catch(c){a={error:c}}finally{try{r&&!r.done&&(s=n.return)&&s.call(n)}finally{if(a)throw a.error}}return[2,null]}}))}))}function pn(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}function dn(e,t){var n,r;t.isFirebaseMessaging=!0,t.messageType=ft.PUSH_RECEIVED;try{for(var i=ut(e),o=i.next();!o.done;o=i.next()){var a=o.value;a.postMessage(t)}}catch(s){n={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}function vn(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function gn(e){var t,n=e.actions,r=Notification.maxActions;return n&&r&&n.length>r&&console.warn("This browser only supports "+r+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}function _n(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;return i||(sn(e.data)?self.location.origin:null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yn=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return at(this,void 0,void 0,(function(){var t,n;return st(this,(function(r){switch(r.label){case 0:return t=e.data,t.isFirebaseMessaging?(this.onMessageCallback&&t.messageType===ft.PUSH_RECEIVED&&("function"===typeof this.onMessageCallback?this.onMessageCallback(bn(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),n=t.data,sn(n)&&"1"===n[wt]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return at(this,void 0,void 0,(function(){return st(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw dt.create("permission-blocked");return[4,this.updateVapidKey(null===e||void 0===e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null===e||void 0===e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,$t(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return at(this,void 0,void 0,(function(){return st(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=_t),[2]}))}))},e.prototype.updateSwReg=function(e){return at(this,void 0,void 0,(function(){return st(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw dt.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return at(this,void 0,void 0,(function(){var e,t;return st(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register(vt,{scope:gt})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),dt.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return at(this,void 0,void 0,(function(){return st(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,Jt(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return at(this,void 0,void 0,(function(){var e;return st(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if(e=t.sent(),"granted"===e)return[2];throw"denied"===e?dt.create("permission-blocked"):dt.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw dt.create("use-vapid-key-after-get-token");if("string"!==typeof e||0===e.length)throw dt.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw dt.create("invalid-sw-registration");if(this.swRegistration)throw dt.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw dt.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw dt.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,t){return at(this,void 0,void 0,(function(){var n,r;return st(this,(function(i){switch(i.label){case 0:return n=mn(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return r=i.sent(),r.logEvent(n,{message_id:t[Ct],message_name:t[Ot],message_time:t[Tt],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function mn(e){switch(e){case ft.NOTIFICATION_CLICKED:return"notification_open";case ft.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}function bn(e){return delete e.messageType,delete e.isFirebaseMessaging,e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e){var t,n;if(!e||!e.options)throw Cn("App Configuration Object");if(!e.name)throw Cn("App Name");var r=["projectId","apiKey","appId","messagingSenderId"],i=e.options;try{for(var o=ut(r),a=o.next();!a.done;a=o.next()){var s=a.value;if(!i[s])throw Cn(s)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return{appName:e.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}function Cn(e){return dt.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn="messaging";function On(e){var t=e.getProvider("app").getImmediate(),n=wn(t),r=e.getProvider("installations").getImmediate(),i=e.getProvider("analytics-internal"),o={app:t,appConfig:n,installations:r,analyticsProvider:i};if(!En())throw dt.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new cn(o):new yn(o)}var In={isSupported:En};function En(){return self&&"ServiceWorkerGlobalScope"in self?kn():Sn()}function Sn(){return"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function kn(){return"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */o["a"].INTERNAL.registerComponent(new d["a"](Tn,On,"PUBLIC").setServiceProps(In));var Pn=function(e,t){return Pn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Pn(e,t)};function Nn(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Pn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var xn=function(){return xn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},xn.apply(this,arguments)};function Rn(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function jn(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function An(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}Object.create;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dn="firebasestorage.googleapis.com",Mn="storageBucket",Ln=12e4,Fn=6e5,qn=function(e){function t(n,r){var i=e.call(this,Un(n),"Firebase Storage: "+r+" ("+Un(n)+")")||this;return i.customData={serverResponse:null},i._baseMessage=i.message,Object.setPrototypeOf(i,t.prototype),i}return Nn(t,e),t.prototype._codeEquals=function(e){return Un(e)===this.code},Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=this._baseMessage+"\n"+this.customData.serverResponse:this.message=this._baseMessage},enumerable:!1,configurable:!0}),t}(a["c"]);function Un(e){return"storage/"+e}function Bn(){var e="An unknown error occurred, please check the error payload for server response.";return new qn("unknown",e)}function Wn(e){return new qn("object-not-found","Object '"+e+"' does not exist.")}function Kn(e){return new qn("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Hn(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new qn("unauthenticated",e)}function Vn(e){return new qn("unauthorized","User does not have permission to access '"+e+"'.")}function zn(){return new qn("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Gn(){return new qn("canceled","User canceled the upload/download.")}function Qn(e){return new qn("invalid-url","Invalid URL '"+e+"'.")}function Yn(e){return new qn("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function $n(){return new qn("no-default-bucket","No default bucket found. Did you set the '"+Mn+"' property when initializing the app?")}function Jn(){return new qn("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Xn(){return new qn("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function Zn(){return new qn("no-download-url","The given file does not have any download URLs.")}function er(e){return new qn("invalid-argument",e)}function tr(){return new qn("app-deleted","The Firebase app was deleted.")}function nr(e){return new qn("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function rr(e,t){return new qn("invalid-format","String does not match format '"+e+"': "+t)}function ir(e){throw new qn("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},ar=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function sr(e,t){switch(e){case or.RAW:return new ar(ur(t));case or.BASE64:case or.BASE64URL:return new ar(lr(e,t));case or.DATA_URL:return new ar(fr(t),pr(t))}throw Bn()}function ur(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){var i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){var o=r,a=e.charCodeAt(++n);r=65536|(1023&o)<<10|1023&a,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function cr(e){var t;try{t=decodeURIComponent(e)}catch(n){throw rr(or.DATA_URL,"Malformed data URL.")}return ur(t)}function lr(e,t){switch(e){case or.BASE64:var n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){var i=n?"-":"_";throw rr(e,"Invalid character '"+i+"' found: is it base64url encoded?")}break;case or.BASE64URL:var o=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(o||a){i=o?"+":"/";throw rr(e,"Invalid character '"+i+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(t)}catch(l){throw rr(e,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}var hr=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw rr(or.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=t[1]||null;null!=n&&(this.base64=dr(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}return e}();function fr(e){var t=new hr(e);return t.base64?lr(or.BASE64,t.rest):cr(t.rest)}function pr(e){var t=new hr(e);return t.contentType}function dr(e,t){var n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vr,gr={STATE_CHANGED:"state_changed"},_r={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function yr(e){switch(e){case"running":case"pausing":case"canceling":return _r.RUNNING;case"paused":return _r.PAUSED;case"success":return _r.SUCCESS;case"canceled":return _r.CANCELED;case"error":return _r.ERROR;default:return _r.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(vr||(vr={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mr=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=vr.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=vr.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=vr.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,n,r){if(this.sent_)throw ir("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(var i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw ir("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw ir("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw ir("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)},e}(),br=function(){function e(){}return e.prototype.createXhrIo=function(){return new mr},e}(),wr=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t,n){var r;try{r=e.makeFromUrl(t,n)}catch(i){return new e(t,"")}if(""===r.path)return r;throw Yn(t)},e.makeFromUrl=function(t,n){var r=null,i="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var a="(/(.*))?$",s=new RegExp("^gs://"+i+a,"i"),u={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}for(var l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp("^https?://"+h+"/"+l+"/b/"+i+"/o"+f,"i"),d={bucket:1,path:3},v=n===Dn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",_=new RegExp("^https?://"+v+"/"+i+"/"+g,"i"),y={bucket:1,path:2},m=[{regex:s,indices:u,postModify:o},{regex:p,indices:d,postModify:c},{regex:_,indices:y,postModify:c}],b=0;b<m.length;b++){var w=m[b],C=w.regex.exec(t);if(C){var T=C[w.indices.bucket],O=C[w.indices.path];O||(O=""),r=new e(T,O),w.postModify(r);break}}if(null==r)throw Qn(t);return r},e}(),Cr=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tr(e,t,n){var r=1,i=null,o=!1,a=0;function s(){return 2===a}var u=!1;function c(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];u||(u=!0,t.apply(null,e))}function l(t){i=setTimeout((function(){i=null,e(h,s())}),t)}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!u)if(e)c.call.apply(c,An([null,e],t));else{var i,h=s()||o;if(h)c.call.apply(c,An([null,e],t));else r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),l(i)}}var f=!1;function p(e){f||(f=!0,u||(null!==i?(e||(a=2),clearTimeout(i),l(0)):e||(a=1)))}return l(0),setTimeout((function(){o=!0,p(!0)}),n),p}function Or(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e){return void 0!==e}function Er(e){return"function"===typeof e}function Sr(e){return"object"===typeof e&&!Array.isArray(e)}function kr(e){return"string"===typeof e||e instanceof String}function Pr(e){return Nr()&&e instanceof Blob}function Nr(){return"undefined"!==typeof Blob}function xr(e,t,n,r){if(r<t)throw er("Invalid value for '"+e+"'. Expected "+t+" or greater.");if(r>n)throw er("Invalid value for '"+e+"'. Expected "+n+" or less.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(e,t){var n=t.match(/^(\w+):\/\/.+/),r=null===n||void 0===n?void 0:n[1],i=t;return null==r&&(i="https://"+t),i+"/v0"+e}function jr(e){var t=encodeURIComponent,n="?";for(var r in e)if(e.hasOwnProperty(r)){var i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar=function(){function e(e,t,n,r,i,o,a,s,u,c,l){var h=this;this.pendingXhr_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){h.resolve_=e,h.reject_=t,h.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,n){if(n)t(!1,new Dr(!1,null,!0));else{var r=e.pool_.createXhrIo();e.pendingXhr_=r,null!==e.progressCallback_&&r.addUploadProgressListener(i),r.send(e.url_,e.method_,e.body_,e.headers_).then((function(n){null!==e.progressCallback_&&n.removeUploadProgressListener(i),e.pendingXhr_=null,n=n;var r=n.getErrorCode()===vr.NO_ERROR,o=n.getStatus();if(r&&!e.isRetryStatusCode_(o)){var a=-1!==e.successCodes_.indexOf(o);t(!0,new Dr(a,n))}else{var s=n.getErrorCode()===vr.ABORT;t(!1,new Dr(!1,null,s))}}))}function i(t){var n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}}function n(t,n){var r=e.resolve_,i=e.reject_,o=n.xhr;if(n.wasSuccessCode)try{var a=e.callback_(o,o.getResponseText());Ir(a)?r(a):r()}catch(u){i(u)}else if(null!==o){var s=Bn();s.serverResponse=o.getResponseText(),e.errorCallback_?i(e.errorCallback_(o,s)):i(s)}else if(n.canceled){s=e.appDelete_?tr():Gn();i(s)}else{s=zn();i(s)}}this.canceled_?n(!1,new Dr(!1,null,!0)):this.backoffId_=Tr(t,n,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&Or(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i},e}(),Dr=function(){function e(e,t,n){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!n}return e}();function Mr(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Lr(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Fr(e,t){t&&(e["X-Firebase-GMPID"]=t)}function qr(e,t,n,r,i){var o=jr(e.urlParams),a=e.url+o,s=Object.assign({},e.headers);return Fr(s,t),Mr(s,n),Lr(s,i),new Ar(a,e.method,s,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Br(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Ur();if(void 0!==n){for(var r=new n,i=0;i<e.length;i++)r.append(e[i]);return r.getBlob()}if(Nr())return new Blob(e);throw new qn("unsupported-environment","This browser doesn't seem to support creating Blobs")}function Wr(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kr=function(){function e(e,t){var n=0,r="";Pr(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,n){if(Pr(this.data_)){var r=this.data_,i=Wr(r,t,n);return null===i?null:new e(i)}var o=new Uint8Array(this.data_.buffer,t,n-t);return new e(o,!0)},e.getBlob=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(Nr()){var r=t.map((function(t){return t instanceof e?t.data_:t}));return new e(Br.apply(null,r))}var i=t.map((function(e){return kr(e)?sr(or.RAW,e).data:e.data_})),o=0;i.forEach((function(e){o+=e.byteLength}));var a=new Uint8Array(o),s=0;return i.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e){var t;try{t=JSON.parse(e)}catch(n){return null}return Sr(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(e){if(0===e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var n=e.slice(0,t);return n}function zr(e,t){var n=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?n:e+"/"+n}function Gr(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e,t){return t}var Yr=function(){function e(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Qr}return e}(),$r=null;function Jr(e){return!kr(e)||e.length<2?e:Gr(e)}function Xr(){if($r)return $r;var e=[];function t(e,t){return Jr(t)}e.push(new Yr("bucket")),e.push(new Yr("generation")),e.push(new Yr("metageneration")),e.push(new Yr("name","fullPath",!0));var n=new Yr("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);var i=new Yr("size");return i.xform=r,e.push(i),e.push(new Yr("timeCreated")),e.push(new Yr("updated")),e.push(new Yr("md5Hash",null,!0)),e.push(new Yr("cacheControl",null,!0)),e.push(new Yr("contentDisposition",null,!0)),e.push(new Yr("contentEncoding",null,!0)),e.push(new Yr("contentLanguage",null,!0)),e.push(new Yr("contentType",null,!0)),e.push(new Yr("metadata","customMetadata",!0)),$r=e,$r}function Zr(e,t){function n(){var n=e["bucket"],r=e["fullPath"],i=new wr(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function ei(e,t,n){for(var r={type:"file"},i=n.length,o=0;o<i;o++){var a=n[o];r[a.local]=a.xform(r,t[a.server])}return Zr(r,e),r}function ti(e,t,n){var r=Hr(t);if(null===r)return null;var i=r;return ei(e,i,n)}function ni(e,t,n){var r=Hr(t);if(null===r)return null;if(!kr(r["downloadTokens"]))return null;var i=r["downloadTokens"];if(0===i.length)return null;var o=encodeURIComponent,a=i.split(","),s=a.map((function(t){var r=e["bucket"],i=e["fullPath"],a="/b/"+o(r)+"/o/"+o(i),s=Rr(a,n),u=jr({alt:"media",token:t});return s+u}));return s[0]}function ri(e,t){for(var n={},r=t.length,i=0;i<r;i++){var o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ii="prefixes",oi="items";function ai(e,t,n){var r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[ii])for(var i=0,o=n[ii];i<o.length;i++){var a=o[i],s=a.replace(/\/$/,""),u=e._makeStorageReference(new wr(t,s));r.prefixes.push(u)}if(n[oi])for(var c=0,l=n[oi];c<l.length;c++){var h=l[c];u=e._makeStorageReference(new wr(t,h["name"]));r.items.push(u)}return r}function si(e,t,n){var r=Hr(n);if(null===r)return null;var i=r;return ai(e,t,i)}var ui=function(){function e(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e){if(!e)throw Bn()}function li(e,t){function n(n,r){var i=ti(e,r,t);return ci(null!==i),i}return n}function hi(e,t){function n(n,r){var i=si(e,t,r);return ci(null!==i),i}return n}function fi(e,t){function n(n,r){var i=ti(e,r,t);return ci(null!==i),ni(i,r,e.host)}return n}function pi(e){function t(t,n){var r;return r=401===t.getStatus()?Hn():402===t.getStatus()?Kn(e.bucket):403===t.getStatus()?Vn(e.path):n,r.serverResponse=n.serverResponse,r}return t}function di(e){var t=pi(e);function n(n,r){var i=t(n,r);return 404===n.getStatus()&&(i=Wn(e.path)),i.serverResponse=r.serverResponse,i}return n}function vi(e,t,n){var r=t.fullServerUrl(),i=Rr(r,e.host),o="GET",a=e.maxOperationRetryTime,s=new ui(i,o,li(e,n),a);return s.errorHandler=di(t),s}function gi(e,t,n,r,i){var o={};t.isRoot?o["prefix"]="":o["prefix"]=t.path+"/",n&&n.length>0&&(o["delimiter"]=n),r&&(o["pageToken"]=r),i&&(o["maxResults"]=i);var a=t.bucketOnlyServerUrl(),s=Rr(a,e.host),u="GET",c=e.maxOperationRetryTime,l=new ui(s,u,hi(e,t.bucket),c);return l.urlParams=o,l.errorHandler=pi(t),l}function _i(e,t,n){var r=t.fullServerUrl(),i=Rr(r,e.host),o="GET",a=e.maxOperationRetryTime,s=new ui(i,o,fi(e,n),a);return s.errorHandler=di(t),s}function yi(e,t,n,r){var i=t.fullServerUrl(),o=Rr(i,e.host),a="PATCH",s=ri(n,r),u={"Content-Type":"application/json; charset=utf-8"},c=e.maxOperationRetryTime,l=new ui(o,a,li(e,r),c);return l.headers=u,l.body=s,l.errorHandler=di(t),l}function mi(e,t){var n=t.fullServerUrl(),r=Rr(n,e.host),i="DELETE",o=e.maxOperationRetryTime;function a(e,t){}var s=new ui(r,i,a,o);return s.successCodes=[200,204],s.errorHandler=di(t),s}function bi(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function wi(e,t,n){var r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=bi(null,t)),r}function Ci(e,t,n,r,i){var o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var c=wi(t,r,i),l=ri(c,n),h="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",f="\r\n--"+u+"--",p=Kr.getBlob(h,r,f);if(null===p)throw Jn();var d={name:c["fullPath"]},v=Rr(o,e.host),g="POST",_=e.maxUploadRetryTime,y=new ui(v,g,li(e,n),_);return y.urlParams=d,y.headers=a,y.body=p.uploadData(),y.errorHandler=pi(t),y}var Ti=function(){function e(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}return e}();function Oi(e,t){var n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){ci(!1)}var r=t||["active"];return ci(!!n&&-1!==r.indexOf(n)),n}function Ii(e,t,n,r,i){var o=t.bucketOnlyServerUrl(),a=wi(t,r,i),s={name:a["fullPath"]},u=Rr(o,e.host),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},h=ri(a,n),f=e.maxUploadRetryTime;function p(e){var t;Oi(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){ci(!1)}return ci(kr(t)),t}var d=new ui(u,c,p,f);return d.urlParams=s,d.headers=l,d.body=h,d.errorHandler=pi(t),d}function Ei(e,t,n,r){var i={"X-Goog-Upload-Command":"query"};function o(e){var t=Oi(e,["active","final"]),n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){ci(!1)}n||ci(!1);var i=Number(n);return ci(!isNaN(i)),new Ti(i,r.size(),"final"===t)}var a="POST",s=e.maxUploadRetryTime,u=new ui(n,a,o,s);return u.headers=i,u.errorHandler=pi(t),u}var Si=262144;function ki(e,t,n,r,i,o,a,s){var u=new Ti(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw Xn();var c=u.total-u.current,l=c;i>0&&(l=Math.min(l,i));var h=u.current,f=h+l,p=l===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":u.current},v=r.slice(h,f);if(null===v)throw Jn();function g(e,n){var i,a=Oi(e,["active","final"]),s=u.current+l,c=r.size();return i="final"===a?li(t,o)(e,n):null,new Ti(s,c,"final"===a,i)}var _="POST",y=t.maxUploadRetryTime,m=new ui(n,_,g,y);return m.headers=d,m.body=v.uploadData(),m.progressCallback=s||null,m.errorHandler=pi(e),m}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pi=function(){function e(e,t,n){var r=Er(e)||null!=t||null!=n;if(r)this.next=e,this.error=t,this.complete=n;else{var i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xi=function(){function e(e,t,n){var r=this;void 0===n&&(n=null),this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Xr(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=function(e){r._request=void 0,r._chunkMultiplier=1,e._codeEquals("canceled")?(r._needToFetchStatus=!0,r.completeTransitions_()):(r._error=e,r._transition("error"))},this._metadataErrorHandler=function(e){r._request=void 0,e._codeEquals("canceled")?r.completeTransitions_():(r._error=e,r._transition("error"))},this._promise=new Promise((function(e,t){r._resolve=e,r._reject=t,r._start()})),this._promise.then(null,(function(){}))}return e.prototype._makeProgressCallback=function(){var e=this,t=this._transferred;return function(n){return e._updateProgress(t+n)}},e.prototype._shouldDoResumable=function(e){return e.size()>262144},e.prototype._start=function(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())},e.prototype._resolveToken=function(e){var t=this;this._ref.storage._getAuthToken().then((function(n){switch(t._state){case"running":e(n);break;case"canceling":t._transition("canceled");break;case"pausing":t._transition("paused");break}}))},e.prototype._createResumable=function(){var e=this;this._resolveToken((function(t){var n=Ii(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),r=e._ref.storage._makeRequest(n,t);e._request=r,r.getPromise().then((function(t){e._request=void 0,e._uploadUrl=t,e._needToFetchStatus=!1,e.completeTransitions_()}),e._errorHandler)}))},e.prototype._fetchStatus=function(){var e=this,t=this._uploadUrl;this._resolveToken((function(n){var r=Ei(e._ref.storage,e._ref._location,t,e._blob),i=e._ref.storage._makeRequest(r,n);e._request=i,i.getPromise().then((function(t){t=t,e._request=void 0,e._updateProgress(t.current),e._needToFetchStatus=!1,t.finalized&&(e._needToFetchMetadata=!0),e.completeTransitions_()}),e._errorHandler)}))},e.prototype._continueUpload=function(){var e=this,t=Si*this._chunkMultiplier,n=new Ti(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((function(i){var o;try{o=ki(e._ref._location,e._ref.storage,r,e._blob,t,e._mappings,n,e._makeProgressCallback())}catch(s){return e._error=s,void e._transition("error")}var a=e._ref.storage._makeRequest(o,i);e._request=a,a.getPromise().then((function(t){e._increaseMultiplier(),e._request=void 0,e._updateProgress(t.current),t.finalized?(e._metadata=t.metadata,e._transition("success")):e.completeTransitions_()}),e._errorHandler)}))},e.prototype._increaseMultiplier=function(){var e=Si*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)},e.prototype._fetchMetadata=function(){var e=this;this._resolveToken((function(t){var n=vi(e._ref.storage,e._ref._location,e._mappings),r=e._ref.storage._makeRequest(n,t);e._request=r,r.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._transition("success")}),e._metadataErrorHandler)}))},e.prototype._oneShotUpload=function(){var e=this;this._resolveToken((function(t){var n=Ci(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),r=e._ref.storage._makeRequest(n,t);e._request=r,r.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._updateProgress(e._blob.size()),e._transition("success")}),e._errorHandler)}))},e.prototype._updateProgress=function(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()},e.prototype._transition=function(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":var t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Gn(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}},e.prototype.completeTransitions_=function(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=yr(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,n,r){var i=this,o=new Pi(t,n,r);return this._addObserver(o),function(){i._removeObserver(o)}},e.prototype.then=function(e,t){return this._promise.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype._addObserver=function(e){this._observers.push(e),this._notifyObserver(e)},e.prototype._removeObserver=function(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)},e.prototype._notifyObservers=function(){var e=this;this._finishPromise();var t=this._observers.slice();t.forEach((function(t){e._notifyObserver(t)}))},e.prototype._finishPromise=function(){if(void 0!==this._resolve){var e=!0;switch(yr(this._state)){case _r.SUCCESS:Ni(this._resolve.bind(null,this.snapshot))();break;case _r.CANCELED:case _r.ERROR:var t=this._reject;Ni(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}},e.prototype._notifyObserver=function(e){var t=yr(this._state);switch(t){case _r.RUNNING:case _r.PAUSED:e.next&&Ni(e.next.bind(e,this.snapshot))();break;case _r.SUCCESS:e.complete&&Ni(e.complete.bind(e))();break;case _r.CANCELED:case _r.ERROR:e.error&&Ni(e.error.bind(e,this._error))();break;default:e.error&&Ni(e.error.bind(e,this._error))()}},e.prototype.resume=function(){var e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e},e.prototype.pause=function(){var e="running"===this._state;return e&&this._transition("pausing"),e},e.prototype.cancel=function(){var e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e},e}(),Ri=function(){function e(e,t){this._service=e,this._location=t instanceof wr?t:wr.makeFromUrl(t,e.host)}return e.prototype.toString=function(){return"gs://"+this._location.bucket+"/"+this._location.path},e.prototype._newRef=function(t,n){return new e(t,n)},Object.defineProperty(e.prototype,"root",{get:function(){var e=new wr(this._location.bucket,"");return this._newRef(this._service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return Gr(this._location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this._service},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=Vr(this._location.path);if(null===t)return null;var n=new wr(this._location.bucket,t);return new e(this._service,n)},enumerable:!1,configurable:!0}),e.prototype._throwIfRoot=function(e){if(""===this._location.path)throw nr(e)},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new xi(e,new Kr(t),n)}function Ai(e){var t={prefixes:[],items:[]};return Di(e,t).then((function(){return t}))}function Di(e,t,n){return Rn(this,void 0,void 0,(function(){var r,i,o,a;return jn(this,(function(s){switch(s.label){case 0:return r={pageToken:n},[4,Mi(e,r)];case 1:return i=s.sent(),(o=t.prefixes).push.apply(o,i.prefixes),(a=t.items).push.apply(a,i.items),null==i.nextPageToken?[3,3]:[4,Di(e,t,i.nextPageToken)];case 2:s.sent(),s.label=3;case 3:return[2]}}))}))}function Mi(e,t){return Rn(this,void 0,void 0,(function(){var n,r,i;return jn(this,(function(o){switch(o.label){case 0:return null!=t&&"number"===typeof t.maxResults&&xr("options.maxResults",1,1e3,t.maxResults),[4,e.storage._getAuthToken()];case 1:return n=o.sent(),r=t||{},i=gi(e.storage,e._location,"/",r.pageToken,r.maxResults),[2,e.storage._makeRequest(i,n).getPromise()]}}))}))}function Li(e){return Rn(this,void 0,void 0,(function(){var t,n;return jn(this,(function(r){switch(r.label){case 0:return e._throwIfRoot("getMetadata"),[4,e.storage._getAuthToken()];case 1:return t=r.sent(),n=vi(e.storage,e._location,Xr()),[2,e.storage._makeRequest(n,t).getPromise()]}}))}))}function Fi(e,t){return Rn(this,void 0,void 0,(function(){var n,r;return jn(this,(function(i){switch(i.label){case 0:return e._throwIfRoot("updateMetadata"),[4,e.storage._getAuthToken()];case 1:return n=i.sent(),r=yi(e.storage,e._location,t,Xr()),[2,e.storage._makeRequest(r,n).getPromise()]}}))}))}function qi(e){return Rn(this,void 0,void 0,(function(){var t,n;return jn(this,(function(r){switch(r.label){case 0:return e._throwIfRoot("getDownloadURL"),[4,e.storage._getAuthToken()];case 1:return t=r.sent(),n=_i(e.storage,e._location,Xr()),[2,e.storage._makeRequest(n,t).getPromise().then((function(e){if(null===e)throw Zn();return e}))]}}))}))}function Ui(e){return Rn(this,void 0,void 0,(function(){var t,n;return jn(this,(function(r){switch(r.label){case 0:return e._throwIfRoot("deleteObject"),[4,e.storage._getAuthToken()];case 1:return t=r.sent(),n=mi(e.storage,e._location),[2,e.storage._makeRequest(n,t).getPromise()]}}))}))}function Bi(e,t){var n=zr(e._location.path,t),r=new wr(e._location.bucket,n);return new Ri(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){return/^[A-Za-z]+:\/\//.test(e)}function Ki(e,t){return new Ri(e,t)}function Hi(e,t){if(e instanceof Qi){var n=e;if(null==n._bucket)throw $n();var r=new Ri(n,n._bucket);return null!=t?Hi(r,t):r}if(void 0!==t){if(t.includes(".."))throw er('`path` param cannot contain ".."');return Bi(e,t)}return e}function Vi(e,t){if(t&&Wi(t)){if(e instanceof Qi)return Ki(e,t);throw er("To use ref(service, url), the first argument must be a Storage instance.")}return Hi(e,t)}function zi(e,t){var n=null===t||void 0===t?void 0:t[Mn];return null==n?null:wr.makeFromBucketSpec(n,e)}function Gi(e,t,n){e.host="http://"+t+":"+n}var Qi=function(){function e(e,t,n,r,i){this.app=e,this._authProvider=t,this._pool=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Dn,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ln,this._maxUploadRetryTime=Fn,this._requests=new Set,this._bucket=null!=r?wr.makeFromBucketSpec(r,this._host):zi(this._host,this.app.options)}return Object.defineProperty(e.prototype,"host",{get:function(){return this._host},set:function(e){this._host=e,null!=this._url?this._bucket=wr.makeFromBucketSpec(this._url,e):this._bucket=zi(e,this.app.options)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._maxUploadRetryTime},set:function(e){xr("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._maxOperationRetryTime},set:function(e){xr("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e},enumerable:!1,configurable:!0}),e.prototype._getAuthToken=function(){return Rn(this,void 0,void 0,(function(){var e,t;return jn(this,(function(n){switch(n.label){case 0:return e=this._authProvider.getImmediate({optional:!0}),e?[4,e.getToken()]:[3,2];case 1:if(t=n.sent(),null!==t)return[2,t.accessToken];n.label=2;case 2:return[2,null]}}))}))},e.prototype._delete=function(){return this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear(),Promise.resolve()},e.prototype._makeStorageReference=function(e){return new Ri(this,e)},e.prototype._makeRequest=function(e,t){var n=this;if(this._deleted)return new Cr(tr());var r=qr(e,this._appId,t,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((function(){return n._requests.delete(r)}),(function(){return n._requests.delete(r)})),r},e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e,t,n){return e=Object(a["p"])(e),ji(e,t,n)}function $i(e){return e=Object(a["p"])(e),Li(e)}function Ji(e,t){return e=Object(a["p"])(e),Fi(e,t)}function Xi(e,t){return e=Object(a["p"])(e),Mi(e,t)}function Zi(e){return e=Object(a["p"])(e),Ai(e)}function eo(e){return e=Object(a["p"])(e),qi(e)}function to(e){return e=Object(a["p"])(e),Ui(e)}function no(e,t){return e=Object(a["p"])(e),Vi(e,t)}function ro(e,t){return Bi(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io=function(){function e(e,t,n){this._delegate=e,this.task=t,this.ref=n}return Object.defineProperty(e.prototype,"bytesTransferred",{get:function(){return this._delegate.bytesTransferred},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._delegate.state},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"totalBytes",{get:function(){return this._delegate.totalBytes},enumerable:!1,configurable:!0}),e}(),oo=function(){function e(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}return Object.defineProperty(e.prototype,"snapshot",{get:function(){return new io(this._delegate.snapshot,this,this._ref)},enumerable:!1,configurable:!0}),e.prototype.then=function(e,t){var n=this;return this._delegate.then((function(t){if(e)return e(new io(t,n,n._ref))}),t)},e.prototype.on=function(e,t,n,r){var i=this,o=void 0;return t&&(o="function"===typeof t?function(e){return t(new io(e,i,i._ref))}:{next:t.next?function(e){return t.next(new io(e,i,i._ref))}:void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,o,n||void 0,r||void 0)},e}(),ao=function(){function e(e,t){this._delegate=e,this._service=t}return Object.defineProperty(e.prototype,"prefixes",{get:function(){var e=this;return this._delegate.prefixes.map((function(t){return new so(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){var e=this;return this._delegate.items.map((function(t){return new so(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextPageToken",{get:function(){return this._delegate.nextPageToken||null},enumerable:!1,configurable:!0}),e}(),so=function(){function e(e,t){this._delegate=e,this.storage=t}return Object.defineProperty(e.prototype,"name",{get:function(){return this._delegate.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._delegate.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._delegate.fullPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this._delegate.toString()},e.prototype.child=function(t){var n=ro(this._delegate,t);return new e(n,this.storage)},Object.defineProperty(e.prototype,"root",{get:function(){return new e(this._delegate.root,this.storage)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._delegate.parent;return null==t?null:new e(t,this.storage)},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return this._throwIfRoot("put"),new oo(Yi(this._delegate,e,t),this)},e.prototype.putString=function(e,t,n){void 0===t&&(t=or.RAW),this._throwIfRoot("putString");var r=sr(t,e),i=xn({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new oo(new xi(this._delegate,new Kr(r.data,!0),i),this)},e.prototype.listAll=function(){var e=this;return Zi(this._delegate).then((function(t){return new ao(t,e.storage)}))},e.prototype.list=function(e){var t=this;return Xi(this._delegate,e||void 0).then((function(e){return new ao(e,t.storage)}))},e.prototype.getMetadata=function(){return $i(this._delegate)},e.prototype.updateMetadata=function(e){return Ji(this._delegate,e)},e.prototype.getDownloadURL=function(){return eo(this._delegate)},e.prototype.delete=function(){return this._throwIfRoot("delete"),to(this._delegate)},e.prototype._throwIfRoot=function(e){if(""===this._delegate._location.path)throw nr(e)},e}(),uo=function(){function e(e,t){var n=this;this.app=e,this._delegate=t,this.INTERNAL={delete:function(){return n._delegate._delete()}}}return Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._delegate.maxOperationRetryTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._delegate.maxUploadRetryTime},enumerable:!1,configurable:!0}),e.prototype.ref=function(e){if(Wi(e))throw er("ref() expected a child path but got a URL, use refFromURL instead.");return new so(no(this._delegate,e),this)},e.prototype.refFromURL=function(e){if(!Wi(e))throw er("refFromURL() expected a full URL but got a child path, use ref() instead.");try{wr.makeFromUrl(e,this._delegate.host)}catch(t){throw er("refFromUrl() expected a valid full URL but got an invalid one.")}return new so(no(this._delegate,e),this)},e.prototype.setMaxUploadRetryTime=function(e){this._delegate.maxUploadRetryTime=e},e.prototype.setMaxOperationRetryTime=function(e){this._delegate.maxOperationRetryTime=e},e.prototype.useEmulator=function(e,t){Gi(this._delegate,e,t)},e}(),co="@firebase/storage",lo="0.5.1",ho="storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e,t){var n=t.instanceIdentifier,r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),a=new uo(r,new Qi(r,i,new br,n,o["a"].SDK_VERSION));return a}function po(e){var t={TaskState:_r,TaskEvent:gr,StringFormat:or,Storage:Qi,Reference:so};e.INTERNAL.registerComponent(new d["a"](ho,fo,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(co,lo)}po(o["a"]);var vo=function(){return vo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},vo.apply(this,arguments)};Object.create;function go(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}Object.create;var _o,yo,mo,bo="@firebase/performance",wo="0.4.11",Co=wo,To="FB-PERF-TRACE-START",Oo="FB-PERF-TRACE-STOP",Io="FB-PERF-TRACE-MEASURE",Eo="_wt_",So="_fp",ko="_fcp",Po="_fid",No="@firebase/performance/config",xo="@firebase/performance/configexpire",Ro="performance",jo="Performance",Ao=(_o={},_o["trace started"]="Trace {$traceName} was started before.",_o["trace stopped"]="Trace {$traceName} is not running.",_o["nonpositive trace startTime"]="Trace {$traceName} startTime should be positive.",_o["nonpositive trace duration"]="Trace {$traceName} duration should be positive.",_o["no window"]="Window is not available.",_o["no app id"]="App id is not available.",_o["no project id"]="Project id is not available.",_o["no api key"]="Api key is not available.",_o["invalid cc log"]="Attempted to queue invalid cc event",_o["FB not default"]="Performance can only start when Firebase app instance is the default one.",_o["RC response not ok"]="RC response is not ok",_o["invalid attribute name"]="Attribute name {$attributeName} is invalid.",_o["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",_o["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",_o["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",_o),Do=new a["b"](Ro,jo,Ao),Mo=new s["b"](jo);Mo.logLevel=s["a"].INFO;var Lo,Fo=function(){function e(e){if(this.window=e,!e)throw Do.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}return e.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},e.prototype.mark=function(e){this.performance&&this.performance.mark&&this.performance.mark(e)},e.prototype.measure=function(e,t,n){this.performance&&this.performance.measure&&this.performance.measure(e,t,n)},e.prototype.getEntriesByType=function(e){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(e):[]},e.prototype.getEntriesByName=function(e){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(e):[]},e.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},e.prototype.requiredApisAvailable=function(){return fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled?!!Object(a["x"])()||(Mo.info("IndexedDB is not supported by current browswer"),!1):(Mo.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)},e.prototype.setupObserver=function(e,t){if(this.PerformanceObserver){var n=new this.PerformanceObserver((function(e){for(var n=0,r=e.getEntries();n<r.length;n++){var i=r[n];t(i)}}));n.observe({entryTypes:[e]})}},e.getInstance=function(){return void 0===yo&&(yo=new e(mo)),yo},e}();function qo(e){mo=e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(e,t){var n=e.length-t.length;if(n<0||n>1)throw Do.create("invalid String merger input");for(var r=[],i=0;i<e.length;i++)r.push(e.charAt(i)),t.length>i&&r.push(t.charAt(i));return r.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bo,Wo,Ko=function(){function e(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Uo("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Uo("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return e.prototype.getAppId=function(){var e=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!e)throw Do.create("no app id");return e},e.prototype.getProjectId=function(){var e=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!e)throw Do.create("no project id");return e},e.prototype.getApiKey=function(){var e=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!e)throw Do.create("no api key");return e},e.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},e.getInstance=function(){return void 0===Lo&&(Lo=new e),Lo},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(){var e=Ko.getInstance().installationsService.getId();return e.then((function(e){Bo=e})),e}function Vo(){return Bo}function zo(){var e=Ko.getInstance().installationsService.getToken();return e.then((function(e){})),e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["UNKNOWN"]=0]="UNKNOWN",e[e["VISIBLE"]=1]="VISIBLE",e[e["HIDDEN"]=2]="HIDDEN"})(Wo||(Wo={}));var Go=["firebase_","google_","ga_"],Qo=new RegExp("^[a-zA-Z]\\w*$"),Yo=40,$o=100;function Jo(){var e=Fo.getInstance().navigator;return"serviceWorker"in e?e.serviceWorker.controller?2:3:1}function Xo(){var e=Fo.getInstance().document,t=e.visibilityState;switch(t){case"visible":return Wo.VISIBLE;case"hidden":return Wo.HIDDEN;default:return Wo.UNKNOWN}}function Zo(){var e=Fo.getInstance().navigator,t=e.connection,n=t&&t.effectiveType;switch(n){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function ea(e){if(0===e.length||e.length>Yo)return!1;var t=Go.some((function(t){return e.startsWith(t)}));return!t&&!!e.match(Qo)}function ta(e){return 0!==e.length&&e.length<=$o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var na="0.0.1",ra={loggingEnabled:!0},ia="FIREBASE_INSTALLATIONS_AUTH";function oa(e){var t=aa();return t?(la(t),Promise.resolve()):ca(e).then(la).then((function(e){return sa(e)}),(function(){}))}function aa(){var e=Fo.getInstance().localStorage;if(e){var t=e.getItem(xo);if(t&&ha(t)){var n=e.getItem(No);if(n)try{var r=JSON.parse(n);return r}catch(i){return}}}}function sa(e){var t=Fo.getInstance().localStorage;e&&t&&(t.setItem(No,JSON.stringify(e)),t.setItem(xo,String(Date.now()+60*Ko.getInstance().configTimeToLive*60*1e3)))}var ua="Could not fetch config, will use default configs";function ca(e){return zo().then((function(t){var n=Ko.getInstance().getProjectId(),r="https://firebaseremoteconfig.googleapis.com/v1/projects/"+n+"/namespaces/fireperf:fetch?key="+Ko.getInstance().getApiKey(),i=new Request(r,{method:"POST",headers:{Authorization:ia+" "+t},body:JSON.stringify({app_instance_id:e,app_instance_id_token:t,app_id:Ko.getInstance().getAppId(),app_version:Co,sdk_version:na})});return fetch(i).then((function(e){if(e.ok)return e.json();throw Do.create("RC response not ok")}))})).catch((function(){Mo.info(ua)}))}function la(e){if(!e)return e;var t=Ko.getInstance(),n=e.entries||{};return void 0!==n.fpr_enabled?t.loggingEnabled="true"===String(n.fpr_enabled):t.loggingEnabled=ra.loggingEnabled,n.fpr_log_source&&(t.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(t.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(t.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),t.logTraceAfterSampling=fa(t.tracesSamplingRate),t.logNetworkAfterSampling=fa(t.networkRequestsSamplingRate),e}function ha(e){return Number(e)>Date.now()}function fa(e){return Math.random()<=e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pa,da=1;function va(){return da=2,pa=pa||_a(),pa}function ga(){return 3===da}function _a(){return ya().then((function(){return Ho()})).then((function(e){return oa(e)})).then((function(){return ma()}),(function(){return ma()}))}function ya(){var e=Fo.getInstance().document;return new Promise((function(t){if(e&&"complete"!==e.readyState){var n=function(){"complete"===e.readyState&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()}))}function ma(){da=3}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ba,wa=1e4,Ca=5500,Ta=3,Oa=1e3,Ia=Ta,Ea=[],Sa=!1;function ka(){Sa||(Pa(Ca),Sa=!0)}function Pa(e){setTimeout((function(){if(0!==Ia)return Ea.length?void Na():Pa(wa)}),e)}function Na(){var e=Ea.splice(0,Oa),t=e.map((function(e){return{source_extension_json_proto3:e.message,event_time_ms:String(e.eventTime)}})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Ko.getInstance().logSource,log_event:t};xa(n,e).catch((function(){Ea=go(go([],e),Ea),Ia--,Mo.info("Tries left: "+Ia+"."),Pa(wa)}))}function xa(e,t){return Ra(e).then((function(e){return e.ok||Mo.info("Call to Firebase backend failed."),e.json()})).then((function(e){var n=Number(e.nextRequestWaitMillis),r=wa;isNaN(n)||(r=Math.max(n,r));var i=e.logResponseDetails;Array.isArray(i)&&i.length>0&&"RETRY_REQUEST_LATER"===i[0].responseAction&&(Ea=go(go([],t),Ea),Mo.info("Retry transport request later.")),Ia=Ta,Pa(r)}))}function Ra(e){var t=Ko.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}function ja(e){if(!e.eventTime||!e.message)throw Do.create("invalid cc log");Ea=go(go([],Ea),[e])}function Aa(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=e.apply(void 0,t);ja({message:r,eventTime:Date.now()})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e,t){ba||(ba=Aa(qa)),ba(e,t)}function Ma(e){var t=Ko.getInstance();!t.instrumentationEnabled&&e.isAuto||(t.dataCollectionEnabled||e.isAuto)&&Fo.getInstance().requiredApisAvailable()&&(e.isAuto&&Xo()!==Wo.VISIBLE||(ga()?La(e):va().then((function(){return La(e)}),(function(){return La(e)}))))}function La(e){if(Vo()){var t=Ko.getInstance();t.loggingEnabled&&t.logTraceAfterSampling&&setTimeout((function(){return Da(e,1)}),0)}}function Fa(e){var t=Ko.getInstance();if(t.instrumentationEnabled){var n=e.url,r=t.logEndPointUrl.split("?")[0],i=t.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&t.loggingEnabled&&t.logNetworkAfterSampling&&setTimeout((function(){return Da(e,0)}),0)}}function qa(e,t){return 0===t?Ua(e):Ba(e)}function Ua(e){var t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:Wa(),network_request_metric:t};return JSON.stringify(n)}function Ba(e){var t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);var n=e.getAttributes();0!==Object.keys(n).length&&(t.custom_attributes=n);var r={application_info:Wa(),trace_metric:t};return JSON.stringify(r)}function Wa(){return{google_app_id:Ko.getInstance().getAppId(),app_instance_id:Vo(),web_app_info:{sdk_version:Co,page_url:Fo.getInstance().getUrl(),service_worker_status:Jo(),visibility_state:Xo(),effective_connection_type:Zo()},application_process_state:0}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ka=100,Ha="_",Va=[So,ko,Po];function za(e,t){return!(0===e.length||e.length>Ka)&&(t&&t.startsWith(Eo)&&Va.indexOf(e)>-1||!e.startsWith(Ha))}function Ga(e){var t=Math.floor(e);return t<e&&Mo.info("Metric value should be an Integer, setting the value as : "+t+"."),t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qa=function(){function e(e,t,n){void 0===t&&(t=!1),this.name=e,this.isAuto=t,this.state=1,this.customAttributes={},this.counters={},this.api=Fo.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=To+"-"+this.randomId+"-"+this.name,this.traceStopMark=Oo+"-"+this.randomId+"-"+this.name,this.traceMeasure=n||Io+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return e.prototype.start=function(){if(1!==this.state)throw Do.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},e.prototype.stop=function(){if(2!==this.state)throw Do.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Ma(this)},e.prototype.record=function(e,t,n){if(e<=0)throw Do.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw Do.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*t),this.startTimeUs=Math.floor(1e3*e),n&&n.attributes&&(this.customAttributes=vo({},n.attributes)),n&&n.metrics)for(var r=0,i=Object.keys(n.metrics);r<i.length;r++){var o=i[r];isNaN(Number(n.metrics[o]))||(this.counters[o]=Number(Math.floor(n.metrics[o])))}Ma(this)},e.prototype.incrementMetric=function(e,t){void 0===t&&(t=1),void 0===this.counters[e]?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)},e.prototype.putMetric=function(e,t){if(!za(e,this.name))throw Do.create("invalid custom metric name",{customMetricName:e});this.counters[e]=Ga(t)},e.prototype.getMetric=function(e){return this.counters[e]||0},e.prototype.putAttribute=function(e,t){var n=ea(e),r=ta(t);if(n&&r)this.customAttributes[e]=t;else{if(!n)throw Do.create("invalid attribute name",{attributeName:e});if(!r)throw Do.create("invalid attribute value",{attributeValue:t})}},e.prototype.getAttribute=function(e){return this.customAttributes[e]},e.prototype.removeAttribute=function(e){void 0!==this.customAttributes[e]&&delete this.customAttributes[e]},e.prototype.getAttributes=function(){return vo({},this.customAttributes)},e.prototype.setStartTime=function(e){this.startTimeUs=e},e.prototype.setDuration=function(e){this.durationUs=e},e.prototype.calculateTraceMetrics=function(){var e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor(1e3*(t.startTime+this.api.getTimeOrigin())))},e.createOobTrace=function(t,n,r){var i=Fo.getInstance().getUrl();if(i){var o=new e(Eo+i,!0),a=Math.floor(1e3*Fo.getInstance().getTimeOrigin());o.setStartTime(a),t&&t[0]&&(o.setDuration(Math.floor(1e3*t[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*t[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*t[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*t[0].loadEventEnd)));var s="first-paint",u="first-contentful-paint";if(n){var c=n.find((function(e){return e.name===s}));c&&c.startTime&&o.putMetric(So,Math.floor(1e3*c.startTime));var l=n.find((function(e){return e.name===u}));l&&l.startTime&&o.putMetric(ko,Math.floor(1e3*l.startTime)),r&&o.putMetric(Po,Math.floor(1e3*r))}Ma(o)}},e.createUserTimingTrace=function(t){var n=new e(t,!1,t);Ma(n)},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(e){var t=e;if(t&&void 0!==t.responseStart){var n=Fo.getInstance().getTimeOrigin(),r=Math.floor(1e3*(t.startTime+n)),i=t.responseStart?Math.floor(1e3*(t.responseStart-t.startTime)):void 0,o=Math.floor(1e3*(t.responseEnd-t.startTime)),a=t.name&&t.name.split("?")[0],s={url:a,responsePayloadBytes:t.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o};Fa(s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $a=5e3;function Ja(){Vo()&&(setTimeout((function(){return Za()}),0),setTimeout((function(){return Xa()}),0),setTimeout((function(){return es()}),0))}function Xa(){for(var e=Fo.getInstance(),t=e.getEntriesByType("resource"),n=0,r=t;n<r.length;n++){var i=r[n];Ya(i)}e.setupObserver("resource",Ya)}function Za(){var e=Fo.getInstance(),t=e.getEntriesByType("navigation"),n=e.getEntriesByType("paint");if(e.onFirstInputDelay){var r=setTimeout((function(){Qa.createOobTrace(t,n),r=void 0}),$a);e.onFirstInputDelay((function(e){r&&(clearTimeout(r),Qa.createOobTrace(t,n,e))}))}else Qa.createOobTrace(t,n)}function es(){for(var e=Fo.getInstance(),t=e.getEntriesByType("measure"),n=0,r=t;n<r.length;n++){var i=r[n];ts(i)}e.setupObserver("measure",ts)}function ts(e){var t=e.name;t.substring(0,Io.length)!==Io&&Qa.createUserTimingTrace(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ns=function(){function e(e){this.app=e,Fo.getInstance().requiredApisAvailable()&&Object(a["O"])().then((function(e){e&&(ka(),va().then(Ja,Ja))})).catch((function(e){Mo.info("Environment doesn't support IndexedDB: "+e)}))}return e.prototype.trace=function(e){return new Qa(e)},Object.defineProperty(e.prototype,"instrumentationEnabled",{get:function(){return Ko.getInstance().instrumentationEnabled},set:function(e){Ko.getInstance().instrumentationEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dataCollectionEnabled",{get:function(){return Ko.getInstance().dataCollectionEnabled},set:function(e){Ko.getInstance().dataCollectionEnabled=e},enumerable:!1,configurable:!0}),e}(),rs="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e){var t=function(e,t){if(e.name!==rs)throw Do.create("FB not default");if("undefined"===typeof window)throw Do.create("no window");return qo(window),Ko.getInstance().firebaseAppInstance=e,Ko.getInstance().installationsService=t,new ns(e)};e.INTERNAL.registerComponent(new d["a"]("performance",(function(e){var n=e.getProvider("app").getImmediate(),r=e.getProvider("installations").getImmediate();return t(n,r)}),"PUBLIC")),e.registerVersion(bo,wo)}is(o["a"]);var os=function(){return os=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},os.apply(this,arguments)};function as(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function ss(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;Object.create;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var us,cs,ls="firebase_id",hs="origin",fs=6e4,ps="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ds="https://www.googletagmanager.com/gtag/js";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vs(e,t,n,r,i){return as(this,void 0,void 0,(function(){var o,a;return ss(this,(function(s){switch(s.label){case 0:return i&&i.global?(e(us.EVENT,n,r),[2]):[3,1];case 1:return[4,t];case 2:o=s.sent(),a=os(os({},r),{send_to:o}),e(us.EVENT,n,a),s.label=3;case 3:return[2]}}))}))}function gs(e,t,n,r){return as(this,void 0,void 0,(function(){var i;return ss(this,(function(o){switch(o.label){case 0:return r&&r.global?(e(us.SET,{screen_name:n}),[2,Promise.resolve()]):[3,1];case 1:return[4,t];case 2:i=o.sent(),e(us.CONFIG,i,{update:!0,screen_name:n}),o.label=3;case 3:return[2]}}))}))}function _s(e,t,n,r){return as(this,void 0,void 0,(function(){var i;return ss(this,(function(o){switch(o.label){case 0:return r&&r.global?(e(us.SET,{user_id:n}),[2,Promise.resolve()]):[3,1];case 1:return[4,t];case 2:i=o.sent(),e(us.CONFIG,i,{update:!0,user_id:n}),o.label=3;case 3:return[2]}}))}))}function ys(e,t,n,r){return as(this,void 0,void 0,(function(){var i,o,a,s,u;return ss(this,(function(c){switch(c.label){case 0:if(!r||!r.global)return[3,1];for(i={},o=0,a=Object.keys(n);o<a.length;o++)s=a[o],i["user_properties."+s]=n[s];return e(us.SET,i),[2,Promise.resolve()];case 1:return[4,t];case 2:u=c.sent(),e(us.CONFIG,u,{update:!0,user_properties:n}),c.label=3;case 3:return[2]}}))}))}function ms(e,t){return as(this,void 0,void 0,(function(){var n;return ss(this,(function(r){switch(r.label){case 0:return[4,e];case 1:return n=r.sent(),window["ga-disable-"+n]=!t,[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["EVENT"]="event",e["SET"]="set",e["CONFIG"]="config"})(us||(us={})),function(e){e["ADD_SHIPPING_INFO"]="add_shipping_info",e["ADD_PAYMENT_INFO"]="add_payment_info",e["ADD_TO_CART"]="add_to_cart",e["ADD_TO_WISHLIST"]="add_to_wishlist",e["BEGIN_CHECKOUT"]="begin_checkout",e["CHECKOUT_PROGRESS"]="checkout_progress",e["EXCEPTION"]="exception",e["GENERATE_LEAD"]="generate_lead",e["LOGIN"]="login",e["PAGE_VIEW"]="page_view",e["PURCHASE"]="purchase",e["REFUND"]="refund",e["REMOVE_FROM_CART"]="remove_from_cart",e["SCREEN_VIEW"]="screen_view",e["SEARCH"]="search",e["SELECT_CONTENT"]="select_content",e["SELECT_ITEM"]="select_item",e["SELECT_PROMOTION"]="select_promotion",e["SET_CHECKOUT_OPTION"]="set_checkout_option",e["SHARE"]="share",e["SIGN_UP"]="sign_up",e["TIMING_COMPLETE"]="timing_complete",e["VIEW_CART"]="view_cart",e["VIEW_ITEM"]="view_item",e["VIEW_ITEM_LIST"]="view_item_list",e["VIEW_PROMOTION"]="view_promotion",e["VIEW_SEARCH_RESULTS"]="view_search_results"}(cs||(cs={}));var bs,ws=new s["b"]("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e,t){var n=document.createElement("script");n.src=ds+"?l="+e+"&id="+t,n.async=!0,document.head.appendChild(n)}function Ts(e){var t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}function Os(e,t,n,r,i,o){return as(this,void 0,void 0,(function(){var a,s,u,c;return ss(this,(function(l){switch(l.label){case 0:a=r[i],l.label=1;case 1:return l.trys.push([1,7,,8]),a?[4,t[a]]:[3,3];case 2:return l.sent(),[3,6];case 3:return[4,Promise.all(n)];case 4:return s=l.sent(),u=s.find((function(e){return e.measurementId===i})),u?[4,t[u.appId]]:[3,6];case 5:l.sent(),l.label=6;case 6:return[3,8];case 7:return c=l.sent(),ws.error(c),[3,8];case 8:return e(us.CONFIG,i,o),[2]}}))}))}function Is(e,t,n,r,i){return as(this,void 0,void 0,(function(){var o,a,s,u,c,l,h,f,p;return ss(this,(function(d){switch(d.label){case 0:return d.trys.push([0,4,,5]),o=[],i&&i["send_to"]?(a=i["send_to"],Array.isArray(a)||(a=[a]),[4,Promise.all(n)]):[3,2];case 1:for(s=d.sent(),u=function(e){var n=s.find((function(t){return t.measurementId===e})),r=n&&t[n.appId];if(!r)return o=[],"break";o.push(r)},c=0,l=a;c<l.length;c++)if(h=l[c],f=u(h),"break"===f)break;d.label=2;case 2:return 0===o.length&&(o=Object.values(t)),[4,Promise.all(o)];case 3:return d.sent(),e(us.EVENT,r,i||{}),[3,5];case 4:return p=d.sent(),ws.error(p),[3,5];case 5:return[2]}}))}))}function Es(e,t,n,r){function i(i,o,a){return as(this,void 0,void 0,(function(){var s;return ss(this,(function(u){switch(u.label){case 0:return u.trys.push([0,6,,7]),i!==us.EVENT?[3,2]:[4,Is(e,t,n,o,a)];case 1:return u.sent(),[3,5];case 2:return i!==us.CONFIG?[3,4]:[4,Os(e,t,n,r,o,a)];case 3:return u.sent(),[3,5];case 4:e(us.SET,o),u.label=5;case 5:return[3,7];case 6:return s=u.sent(),ws.error(s),[3,7];case 7:return[2]}}))}))}return i}function Ss(e,t,n,r,i){var o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=Es(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function ks(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(ds))return r}return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ps=(bs={},bs["already-exists"]="A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",bs["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",bs["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate: {$reason}",bs["invalid-analytics-context"]="Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",bs["indexeddb-unavailable"]="IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",bs["fetch-throttle"]="The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",bs["config-fetch-failed"]="Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",bs["no-api-key"]='The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',bs["no-app-id"]='The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',bs),Ns=new a["b"]("analytics","Analytics",Ps),xs=30,Rs=1e3,js=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t=Rs),this.throttleMetadata=e,this.intervalMillis=t}return e.prototype.getThrottleMetadata=function(e){return this.throttleMetadata[e]},e.prototype.setThrottleMetadata=function(e,t){this.throttleMetadata[e]=t},e.prototype.deleteThrottleMetadata=function(e){delete this.throttleMetadata[e]},e}(),As=new js;function Ds(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function Ms(e){var t;return as(this,void 0,void 0,(function(){var n,r,i,o,a,s,u;return ss(this,(function(c){switch(c.label){case 0:return n=e.appId,r=e.apiKey,i={method:"GET",headers:Ds(r)},o=ps.replace("{app-id}",n),[4,fetch(o,i)];case 1:if(a=c.sent(),200===a.status||304===a.status)return[3,6];s="",c.label=2;case 2:return c.trys.push([2,4,,5]),[4,a.json()];case 3:return u=c.sent(),(null===(t=u.error)||void 0===t?void 0:t.message)&&(s=u.error.message),[3,5];case 4:return c.sent(),[3,5];case 5:throw Ns.create("config-fetch-failed",{httpStatus:a.status,responseMessage:s});case 6:return[2,a.json()]}}))}))}function Ls(e,t,n){return void 0===t&&(t=As),as(this,void 0,void 0,(function(){var r,i,o,a,s,u,c=this;return ss(this,(function(l){if(r=e.options,i=r.appId,o=r.apiKey,a=r.measurementId,!i)throw Ns.create("no-app-id");if(!o){if(a)return[2,{measurementId:a,appId:i}];throw Ns.create("no-api-key")}return s=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Bs,setTimeout((function(){return as(c,void 0,void 0,(function(){return ss(this,(function(e){return u.abort(),[2]}))}))}),void 0!==n?n:fs),[2,Fs({appId:i,apiKey:o,measurementId:a},s,u,t)]}))}))}function Fs(e,t,n,r){var i=t.throttleEndTimeMillis,o=t.backoffCount;return void 0===r&&(r=As),as(this,void 0,void 0,(function(){var t,s,u,c,l,h,f;return ss(this,(function(p){switch(p.label){case 0:t=e.appId,s=e.measurementId,p.label=1;case 1:return p.trys.push([1,3,,4]),[4,qs(n,i)];case 2:return p.sent(),[3,4];case 3:if(u=p.sent(),s)return ws.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+s+' provided in the "measurementId" field in the local Firebase config. ['+u.message+"]"),[2,{appId:t,measurementId:s}];throw u;case 4:return p.trys.push([4,6,,7]),[4,Ms(e)];case 5:return c=p.sent(),r.deleteThrottleMetadata(t),[2,c];case 6:if(l=p.sent(),!Us(l)){if(r.deleteThrottleMetadata(t),s)return ws.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+s+' provided in the "measurementId" field in the local Firebase config. ['+l.message+"]"),[2,{appId:t,measurementId:s}];throw l}return h=503===Number(l.customData.httpStatus)?Object(a["j"])(o,r.intervalMillis,xs):Object(a["j"])(o,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:o+1},r.setThrottleMetadata(t,f),ws.debug("Calling attemptFetch again in "+h+" millis"),[2,Fs(e,f,n,r)];case 7:return[2]}}))}))}function qs(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((function(){clearTimeout(o),r(Ns.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Us(e){if(!(e instanceof a["c"])||!e.customData)return!1;var t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}var Bs=function(){function e(){this.listeners=[]}return e.prototype.addEventListener=function(e){this.listeners.push(e)},e.prototype.abort=function(){this.listeners.forEach((function(e){return e()}))},e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(){return as(this,void 0,void 0,(function(){var e;return ss(this,(function(t){switch(t.label){case 0:return Object(a["x"])()?[3,1]:(ws.warn(Ns.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),[2,!1]);case 1:return t.trys.push([1,3,,4]),[4,Object(a["O"])()];case 2:return t.sent(),[3,4];case 3:return e=t.sent(),ws.warn(Ns.create("indexeddb-unavailable",{errorInfo:e}).message),[2,!1];case 4:return[2,!0]}}))}))}function Ks(e,t,n,r,i,o){return as(this,void 0,void 0,(function(){var a,s,u,c,l,h,f;return ss(this,(function(p){switch(p.label){case 0:return a=Ls(e),a.then((function(t){n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&ws.warn("The measurement ID in the local Firebase config ("+e.options.measurementId+") does not match the measurement ID fetched from the server ("+t.measurementId+"). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return ws.error(e)})),t.push(a),s=Ws().then((function(e){return e?r.getId():void 0})),[4,Promise.all([a,s])];case 1:return u=p.sent(),c=u[0],l=u[1],ks()||Cs(o,c.measurementId),i("js",new Date),f={},f[hs]="firebase",f.update=!0,h=f,null!=l&&(h[ls]=l),i(us.CONFIG,c.measurementId,h),[2,c.measurementId]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hs,Vs,zs={},Gs=[],Qs={},Ys="dataLayer",$s="gtag",Js=!1;function Xs(e){if(Js)throw Ns.create("already-initialized");e.dataLayerName&&(Ys=e.dataLayerName),e.gtagName&&($s=e.gtagName)}function Zs(){var e=[];if(Object(a["t"])()&&e.push("This is a browser extension environment."),Object(a["e"])()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"("+(t+1)+") "+e})).join(" "),n=Ns.create("invalid-analytics-context",{errorInfo:t});ws.warn(n.message)}}function eu(e,t){Zs();var n=e.options.appId;if(!n)throw Ns.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Ns.create("no-api-key");ws.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+e.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=zs[n])throw Ns.create("already-exists",{id:n});if(!Js){Ts(Ys);var r=Ss(zs,Gs,Qs,Ys,$s),i=r.wrappedGtag,o=r.gtagCore;Vs=i,Hs=o,Js=!0}zs[n]=Ks(e,Gs,Qs,t,Hs,Ys);var a={app:e,logEvent:function(e,t,r){vs(Vs,zs[n],e,t,r).catch((function(e){return ws.error(e)}))},setCurrentScreen:function(e,t){gs(Vs,zs[n],e,t).catch((function(e){return ws.error(e)}))},setUserId:function(e,t){_s(Vs,zs[n],e,t).catch((function(e){return ws.error(e)}))},setUserProperties:function(e,t){ys(Vs,zs[n],e,t).catch((function(e){return ws.error(e)}))},setAnalyticsCollectionEnabled:function(e){ms(zs[n],e).catch((function(e){return ws.error(e)}))},INTERNAL:{delete:function(){return delete zs[n],Promise.resolve()}}};return a}var tu="@firebase/analytics",nu="0.6.9",ru="analytics";function iu(e){function t(e){try{var t=e.getProvider(ru).getImmediate();return{logEvent:t.logEvent}}catch(n){throw Ns.create("interop-component-reg-failed",{reason:n})}}e.INTERNAL.registerComponent(new d["a"](ru,(function(e){var t=e.getProvider("app").getImmediate(),n=e.getProvider("installations").getImmediate();return eu(t,n)}),"PUBLIC").setServiceProps({settings:Xs,EventName:cs,isSupported:ou})),e.INTERNAL.registerComponent(new d["a"]("analytics-internal",t,"PRIVATE")),e.registerVersion(tu,nu)}function ou(){return as(this,void 0,void 0,(function(){var e;return ss(this,(function(t){switch(t.label){case 0:if(Object(a["t"])())return[2,!1];if(!Object(a["e"])())return[2,!1];if(!Object(a["x"])())return[2,!1];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,Object(a["O"])()];case 2:return e=t.sent(),[2,e];case 3:return t.sent(),[2,!1];case 4:return[2]}}))}))}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */iu(o["a"]);var au=function(){return au=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},au.apply(this,arguments)};function su(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function uu(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;Object.create;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cu,lu=function(){function e(e,t,n,r){this.client=e,this.storage=t,this.storageCache=n,this.logger=r}return e.prototype.isCachedDataFresh=function(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var n=Date.now()-t,r=n<=e;return this.logger.debug("Config fetch cache check. Cache age millis: "+n+". Cache max age millis (minimumFetchIntervalMillis setting): "+e+". Is cache hit: "+r+"."),r},e.prototype.fetch=function(e){return su(this,void 0,void 0,(function(){var t,n,r,i,o;return uu(this,(function(a){switch(a.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return t=a.sent(),n=t[0],r=t[1],r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n)?[2,r]:(e.eTag=r&&r.eTag,[4,this.client.fetch(e)]);case 2:return i=a.sent(),o=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===i.status&&o.push(this.storage.setLastSuccessfulFetchResponse(i)),[4,Promise.all(o)];case 3:return a.sent(),[2,i]}}))}))},e}(),hu=(cu={},cu["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",cu["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",cu["registration-api-key"]="Undefined API key. Check Firebase app initialization.",cu["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",cu["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",cu["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",cu["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",cu["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",cu["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",cu["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',cu["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',cu["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",cu["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",cu),fu=new a["b"]("remoteconfig","Remote Config",hu);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(e,t){return e instanceof a["c"]&&-1!==e.code.indexOf(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(e){return void 0===e&&(e=navigator),e.languages&&e.languages[0]||e.language}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vu=function(){function e(e,t,n,r,i,o){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=n,this.projectId=r,this.apiKey=i,this.appId=o}return e.prototype.fetch=function(e){return su(this,void 0,void 0,(function(){var t,n,r,i,o,a,s,u,c,l,h,f,p,d,v,g,_,y,m;return uu(this,(function(b){switch(b.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:t=b.sent(),n=t[0],r=t[1],i=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=i+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,a={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},s={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:du()},u={method:"POST",headers:a,body:JSON.stringify(s)},c=fetch(o,u),l=new Promise((function(t,n){e.signal.addEventListener((function(){var e=new Error("The operation was aborted.");e.name="AbortError",n(e)}))})),b.label=2;case 2:return b.trys.push([2,5,,6]),[4,Promise.race([c,l])];case 3:return b.sent(),[4,c];case 4:return h=b.sent(),[3,6];case 5:throw f=b.sent(),p="fetch-client-network","AbortError"===f.name&&(p="fetch-timeout"),fu.create(p,{originalErrorMessage:f.message});case 6:if(d=h.status,v=h.headers.get("ETag")||void 0,200!==h.status)return[3,11];y=void 0,b.label=7;case 7:return b.trys.push([7,9,,10]),[4,h.json()];case 8:return y=b.sent(),[3,10];case 9:throw m=b.sent(),fu.create("fetch-client-parse",{originalErrorMessage:m.message});case 10:g=y["entries"],_=y["state"],b.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===_?d=500:"NO_CHANGE"===_?d=304:"NO_TEMPLATE"!==_&&"EMPTY_CONFIG"!==_||(g={}),304!==d&&200!==d)throw fu.create("fetch-status",{httpStatus:d});return[2,{status:d,eTag:v,config:g}]}}))}))},e}(),gu=function(){function e(){this.listeners=[]}return e.prototype.addEventListener=function(e){this.listeners.push(e)},e.prototype.abort=function(){this.listeners.forEach((function(e){return e()}))},e}(),_u=!1,yu="",mu=0,bu=["1","true","t","yes","y","on"],wu=function(){function e(e,t){void 0===t&&(t=yu),this._source=e,this._value=t}return e.prototype.asString=function(){return this._value},e.prototype.asBoolean=function(){return"static"===this._source?_u:bu.indexOf(this._value.toLowerCase())>=0},e.prototype.asNumber=function(){if("static"===this._source)return mu;var e=Number(this._value);return isNaN(e)&&(e=mu),e},e.prototype.getSource=function(){return this._source},e}(),Cu=6e4,Tu=432e5,Ou=function(){function e(e,t,n,r,i){this.app=e,this._client=t,this._storageCache=n,this._storage=r,this._logger=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:Cu,minimumFetchIntervalMillis:Tu},this.defaultConfig={}}return e.prototype.setLogLevel=function(e){switch(e){case"debug":this._logger.logLevel=s["a"].DEBUG;break;case"silent":this._logger.logLevel=s["a"].SILENT;break;default:this._logger.logLevel=s["a"].ERROR}},Object.defineProperty(e.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!1,configurable:!0}),e.prototype.activate=function(){return su(this,void 0,void 0,(function(){var e,t,n;return uu(this,(function(r){switch(r.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return e=r.sent(),t=e[0],n=e[1],t&&t.config&&t.eTag&&t.eTag!==n?[4,Promise.all([this._storageCache.setActiveConfig(t.config),this._storage.setActiveConfigEtag(t.eTag)])]:[2,!1];case 2:return r.sent(),[2,!0]}}))}))},e.prototype.ensureInitialized=function(){var e=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then((function(){e._isInitializationComplete=!0}))),this._initializePromise},e.prototype.fetch=function(){return su(this,void 0,void 0,(function(){var e,t,n,r=this;return uu(this,(function(i){switch(i.label){case 0:e=new gu,setTimeout((function(){return su(r,void 0,void 0,(function(){return uu(this,(function(t){return e.abort(),[2]}))}))}),this.settings.fetchTimeoutMillis),i.label=1;case 1:return i.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:e})];case 2:return i.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return i.sent(),[3,6];case 4:return t=i.sent(),n=pu(t,"fetch-throttle")?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(n)];case 5:throw i.sent(),t;case 6:return[2]}}))}))},e.prototype.fetchAndActivate=function(){return su(this,void 0,void 0,(function(){return uu(this,(function(e){switch(e.label){case 0:return[4,this.fetch()];case 1:return e.sent(),[2,this.activate()]}}))}))},e.prototype.getAll=function(){var e=this;return Iu(this._storageCache.getActiveConfig(),this.defaultConfig).reduce((function(t,n){return t[n]=e.getValue(n),t}),{})},e.prototype.getBoolean=function(e){return this.getValue(e).asBoolean()},e.prototype.getNumber=function(e){return this.getValue(e).asNumber()},e.prototype.getString=function(e){return this.getValue(e).asString()},e.prototype.getValue=function(e){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+e+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var t=this._storageCache.getActiveConfig();return t&&void 0!==t[e]?new wu("remote",t[e]):this.defaultConfig&&void 0!==this.defaultConfig[e]?new wu("default",String(this.defaultConfig[e])):(this._logger.debug('Returning static value for key "'+e+'". Define a default or remote value if this is unintentional.'),new wu("static"))},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(au(au({},e),t))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(e,t){var n=e.target.error||void 0;return fu.create(t,{originalErrorMessage:n&&n.message})}var Su="app_namespace_store",ku="firebase_remote_config",Pu=1;function Nu(){return new Promise((function(e,t){var n=indexedDB.open(ku,Pu);n.onerror=function(e){t(Eu(e,"storage-open"))},n.onsuccess=function(t){e(t.target.result)},n.onupgradeneeded=function(e){var t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(Su,{keyPath:"compositeKey"})}}}))}var xu=function(){function e(e,t,n,r){void 0===r&&(r=Nu()),this.appId=e,this.appName=t,this.namespace=n,this.openDbPromise=r}return e.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},e.prototype.setLastFetchStatus=function(e){return this.set("last_fetch_status",e)},e.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},e.prototype.setLastSuccessfulFetchTimestampMillis=function(e){return this.set("last_successful_fetch_timestamp_millis",e)},e.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},e.prototype.setLastSuccessfulFetchResponse=function(e){return this.set("last_successful_fetch_response",e)},e.prototype.getActiveConfig=function(){return this.get("active_config")},e.prototype.setActiveConfig=function(e){return this.set("active_config",e)},e.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},e.prototype.setActiveConfigEtag=function(e){return this.set("active_config_etag",e)},e.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},e.prototype.setThrottleMetadata=function(e){return this.set("throttle_metadata",e)},e.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},e.prototype.get=function(e){return su(this,void 0,void 0,(function(){var t,n=this;return uu(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return t=r.sent(),[2,new Promise((function(r,i){var o=t.transaction([Su],"readonly"),a=o.objectStore(Su),s=n.createCompositeKey(e);try{var u=a.get(s);u.onerror=function(e){i(Eu(e,"storage-get"))},u.onsuccess=function(e){var t=e.target.result;r(t?t.value:void 0)}}catch(c){i(fu.create("storage-get",{originalErrorMessage:c&&c.message}))}}))]}}))}))},e.prototype.set=function(e,t){return su(this,void 0,void 0,(function(){var n,r=this;return uu(this,(function(i){switch(i.label){case 0:return[4,this.openDbPromise];case 1:return n=i.sent(),[2,new Promise((function(i,o){var a=n.transaction([Su],"readwrite"),s=a.objectStore(Su),u=r.createCompositeKey(e);try{var c=s.put({compositeKey:u,value:t});c.onerror=function(e){o(Eu(e,"storage-set"))},c.onsuccess=function(){i()}}catch(l){o(fu.create("storage-set",{originalErrorMessage:l&&l.message}))}}))]}}))}))},e.prototype.delete=function(e){return su(this,void 0,void 0,(function(){var t,n=this;return uu(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return t=r.sent(),[2,new Promise((function(r,i){var o=t.transaction([Su],"readwrite"),a=o.objectStore(Su),s=n.createCompositeKey(e);try{var u=a.delete(s);u.onerror=function(e){i(Eu(e,"storage-delete"))},u.onsuccess=function(){r()}}catch(c){i(fu.create("storage-delete",{originalErrorMessage:c&&c.message}))}}))]}}))}))},e.prototype.createCompositeKey=function(e){return[this.appId,this.appName,this.namespace,e].join()},e}(),Ru=function(){function e(e){this.storage=e}return e.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},e.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},e.prototype.getActiveConfig=function(){return this.activeConfig},e.prototype.loadFromStorage=function(){return su(this,void 0,void 0,(function(){var e,t,n,r,i,o;return uu(this,(function(a){switch(a.label){case 0:return e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),[4,e];case 1:return r=a.sent(),r&&(this.lastFetchStatus=r),[4,t];case 2:return i=a.sent(),i&&(this.lastSuccessfulFetchTimestampMillis=i),[4,n];case 3:return o=a.sent(),o&&(this.activeConfig=o),[2]}}))}))},e.prototype.setLastFetchStatus=function(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)},e.prototype.setLastSuccessfulFetchTimestampMillis=function(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)},e.prototype.setActiveConfig=function(e){return this.activeConfig=e,this.storage.setActiveConfig(e)},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ju(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((function(){clearTimeout(o),r(fu.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Au(e){if(!(e instanceof a["c"])||!e.customData)return!1;var t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}var Du=function(){function e(e,t){this.client=e,this.storage=t}return e.prototype.fetch=function(e){return su(this,void 0,void 0,(function(){var t;return uu(this,(function(n){switch(n.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return t=n.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(e,t)]}}))}))},e.prototype.attemptFetch=function(e,t){var n=t.throttleEndTimeMillis,r=t.backoffCount;return su(this,void 0,void 0,(function(){var t,i,o;return uu(this,(function(s){switch(s.label){case 0:return[4,ju(e.signal,n)];case 1:s.sent(),s.label=2;case 2:return s.trys.push([2,5,,7]),[4,this.client.fetch(e)];case 3:return t=s.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return s.sent(),[2,t];case 5:if(i=s.sent(),!Au(i))throw i;return o={throttleEndTimeMillis:Date.now()+Object(a["j"])(r),backoffCount:r+1},[4,this.storage.setThrottleMetadata(o)];case 6:return s.sent(),[2,this.attemptFetch(e,o)];case 7:return[2]}}))}))},e}(),Mu="@firebase/remote-config",Lu="0.1.36";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fu(e){function t(t,n){var r=n.instanceIdentifier,i=t.getProvider("app").getImmediate(),o=t.getProvider("installations").getImmediate();if("undefined"===typeof window)throw fu.create("registration-window");var a=i.options,u=a.projectId,c=a.apiKey,l=a.appId;if(!u)throw fu.create("registration-project-id");if(!c)throw fu.create("registration-api-key");if(!l)throw fu.create("registration-app-id");r=r||"firebase";var h=new xu(l,i.name,r),f=new Ru(h),p=new s["b"](Mu);p.logLevel=s["a"].ERROR;var d=new vu(o,e.SDK_VERSION,r,u,c,l),v=new Du(d,h),g=new lu(v,h,f,p),_=new Ou(i,g,f,h,p);return _.ensureInitialized(),_}e.INTERNAL.registerComponent(new d["a"]("remoteConfig",t,"PUBLIC").setMultipleInstances(!0)),e.registerVersion(Mu,Lu)}Fu(o["a"]);var qu="firebase",Uu="8.4.2";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
o["a"].registerVersion(qu,Uu,"app");var Bu="firebase",Wu="8.4.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n\nTypescript:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n"),o["a"].registerVersion(Bu,Wu);var Ku=n("17e1"),Hu={data:function(){return{hostID:this.$route.params.hostID,roomID:this.$route.params.roomID,roomName:null,hostNickName:null,attendeesPendingArr:[],attendeesApprovedArr:[],attendeeApproved:!1,attendeeJoined:!1}},components:{},methods:{toggleApproval:function(e){if(this.user&&this.user.uid==this.hostID){var t=Ku["a"].collection("users").doc(this.user.uid).collection("rooms").doc(this.roomID).collection("attendees").doc(e);t.get().then((function(e){var n=e.data().approved;console.log("approved",n),n?t.update({approved:!n}):t.update({approved:!0})}))}},deleteAttendee:function(e){this.user&&this.user.uid==this.hostID&&Ku["a"].collection("users").doc(this.user.uid).collection("rooms").doc(this.roomID).collection("attendees").doc(e).delete()},doJoin:function(){this.$refs.webrtc.join(),this.attendeeJoined=!0},doLeave:function(){this.$refs.webrtc.leave(),this.attendeeJoined=!1},doAttendeeJoined:function(e){console.log("join");var t=Ku["a"].collection("users").doc(this.hostID).collection("rooms").doc(this.roomID).collection("attendees").doc(this.user.uid);t.update({webRTCID:e})},doAttendeeLeft:function(e){console.log("left");var t=Ku["a"].collection("users").doc(this.hostID).collection("rooms").doc(this.roomID).collection("attendees").doc(this.user.uid);t.update({webRTCID:null})}},props:["user"],mounted:function(){var e=this,t=Ku["a"].collection("users").doc(this.$route.params.hostID).collection("rooms").doc(this.$route.params.roomID);t.get().then((function(t){t.exists?e.roomName=t.data().name:e.$router.push("/")})),t.collection("attendees").onSnapshot((function(t){var n=!1,r=[],i=[];t.forEach((function(t){e.hostID===t.id&&(e.hostNickName=t.data().nickName),e.user&&e.user.uid==t.id&&(n=!0),t.data().approved?(e.user.uid==t.id&&(e.attendeeApproved=!0),i.push({id:t.id,nickName:t.data().nickName,approved:t.data().approved,webRTCID:t.data().webRTCID})):(e.user.uid==t.id&&(e.attendeeApproved=!1),r.push({id:t.id,nickName:t.data().nickName,approved:t.data().approved,webRTCID:t.data().webRTCID}))})),n||e.$router.push("/checkin/".concat(e.hostID,"/").concat(e.roomID)),e.attendeesPendingArr=r,e.attendeesApprovedArr=i}))}},Vu=Hu,zu=n("2877"),Gu=Object(zu["a"])(Vu,r,i,!1,null,null,null);t["default"]=Gu.exports},8418:function(e,t,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var a=r(t);a in e?i.f(e,a,o(0,n)):e[a]=n}},9802:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return u}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};Object.create;function a(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a}function u(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}Object.create},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),a=n("861d"),s=n("7b0b"),u=n("50c4"),c=n("8418"),l=n("65f0"),h=n("1dde"),f=n("b622"),p=n("2d00"),d=f("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",_=p>=51||!i((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),y=h("concat"),m=function(e){if(!a(e))return!1;var t=e[d];return void 0!==t?!!t:o(e)},b=!_||!y;r({target:"Array",proto:!0,forced:b},{concat:function(e){var t,n,r,i,o,a=s(this),h=l(a,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?a:arguments[t],m(o)){if(i=u(o.length),f+i>v)throw TypeError(g);for(n=0;n<i;n++,f++)n in o&&c(h,f,o[n])}else{if(f>=v)throw TypeError(g);c(h,f++,o)}return h.length=f,h}})},"9dbb":function(e,t,n){(function(e,n){n(t)})(0,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,o=new Promise((function(o,a){i=e[t].apply(e,r),n(i).then(o,a)}));return o.request=i,o}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new l(e,i.request)}))}function o(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function u(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function c(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function f(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function p(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new f(n)}function d(e){this._db=e}function v(e,t,n){var i=r(indexedDB,"open",[e,t]),o=i.request;return o&&(o.onupgradeneeded=function(e){n&&n(new p(o.result,e.oldVersion,o.transaction))}),i.then((function(e){return new d(e)}))}function g(e){return r(indexedDB,"deleteDatabase",[e])}o(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(l,"_cursor",["direction","key","primaryKey","value"]),a(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new l(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},o(h,"_store",["name","keyPath","indexNames","autoIncrement"]),a(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(h,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},o(f,"_tx",["objectStoreNames","mode"]),s(f,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},o(p,"_db",["name","version","objectStoreNames"]),s(p,"_db",IDBDatabase,["deleteObjectStore","close"]),d.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),s(d,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,o=i[e].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[c,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=v,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}))},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("44ad"),o=n("fc6a"),a=n("a640"),s=[].join,u=i!=Object,c=a("join",",");r({target:"Array",proto:!0,forced:u||!c},{join:function(e){return s.call(o(this),void 0===e?",":e)}})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},b0c0:function(e,t,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,u="name";r&&!(u in o)&&i(o,u,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(e){return""}}})},b727:function(e,t,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),s=n("65f0"),u=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,l=4==e,h=6==e,f=7==e,p=5==e||h;return function(d,v,g,_){for(var y,m,b=o(d),w=i(b),C=r(v,g,3),T=a(w.length),O=0,I=_||s,E=t?I(d,T):n||f?I(d,0):void 0;T>O;O++)if((p||O in w)&&(y=w[O],m=C(y,O,b),e))if(t)E[O]=m;else if(m)switch(e){case 3:return!0;case 5:return y;case 6:return O;case 2:u.call(E,y)}else switch(e){case 4:return!1;case 7:u.call(E,y)}return h?-1:c||l?l:E}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},dd40:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e947:function(e,t,n){"use strict";(function(e,t){var r=n("cc84"),i=n("ffa6"),o=n("a8e9"),a=n("9802"),s=n("abfd"),u="@firebase/database",c="0.9.11",l=function(){function e(e){this.domStorage_=e,this.prefix_="firebase:"}return e.prototype.set=function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(o["K"])(t))},e.prototype.get=function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(o["E"])(t)},e.prototype.remove=function(e){this.domStorage_.removeItem(this.prefixedName_(e))},e.prototype.prefixedName_=function(e){return this.prefix_+e},e.prototype.toString=function(){return this.domStorage_.toString()},e}(),h=function(){function e(){this.cache_={},this.isInMemoryStorage=!0}return e.prototype.set=function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t},e.prototype.get=function(e){return Object(o["k"])(this.cache_,e)?this.cache_[e]:null},e.prototype.remove=function(e){delete this.cache_[e]},e}(),f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new l(t)}}catch(n){}return new h},p=f("localStorage"),d=f("sessionStorage"),v=new s["b"]("@firebase/database"),g=function(){var e=1;return function(){return e++}}(),_=function(e){var t=Object(o["J"])(e),n=new o["d"];n.update(t);var r=n.digest();return o["h"].encodeByteArray(r)},y=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n="",r=0;r<e.length;r++){var i=e[r];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?n+=y.apply(null,i):n+="object"===typeof i?Object(o["K"])(i):i,n+=" "}return n},m=null,b=!0,w=function(e,t){Object(o["f"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(v.logLevel=s["a"].VERBOSE,m=v.log.bind(v),t&&d.set("logging_enabled",!0)):"function"===typeof e?m=e:(m=null,d.remove("logging_enabled"))},C=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(!0===b&&(b=!1,null===m&&!0===d.get("logging_enabled")&&w(!0)),m){var n=y.apply(null,e);m(n)}},T=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];C.apply(void 0,Object(a["d"])([e],Object(a["c"])(t)))}},O=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE INTERNAL ERROR: "+y.apply(void 0,Object(a["d"])([],Object(a["c"])(e)));v.error(n)},I=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE FATAL ERROR: "+y.apply(void 0,Object(a["d"])([],Object(a["c"])(e)));throw v.error(n),new Error(n)},E=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE WARNING: "+y.apply(void 0,Object(a["d"])([],Object(a["c"])(e)));v.warn(n)},S=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&E("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},k=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P=function(e){if(Object(o["A"])()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},N="[MIN_NAME]",x="[MAX_NAME]",R=function(e,t){if(e===t)return 0;if(e===N||t===x)return-1;if(t===N||e===x)return 1;var n=V(e),r=V(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},j=function(e,t){return e===t?0:e<t?-1:1},A=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(o["K"])(t))},D=function(e){if("object"!==typeof e||null===e)return Object(o["K"])(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=Object(o["K"])(t[i]),r+=":",r+=D(e[t[i]]);return r+="}",r},M=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function L(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var F=function(e){Object(o["f"])(!k(e),"Invalid JSON number");var t,n,r,i,a,s=11,u=52,c=(1<<s-1)-1;0===e?(n=0,r=0,t=1/e===-1/0?1:0):(t=e<0,e=Math.abs(e),e>=Math.pow(2,1-c)?(i=Math.min(Math.floor(Math.log(e)/Math.LN2),c),n=i+c,r=Math.round(e*Math.pow(2,u-i)-Math.pow(2,u))):(n=0,r=Math.round(e/Math.pow(2,1-c-u))));var l=[];for(a=u;a;a-=1)l.push(r%2?1:0),r=Math.floor(r/2);for(a=s;a;a-=1)l.push(n%2?1:0),n=Math.floor(n/2);l.push(t?1:0),l.reverse();var h=l.join(""),f="";for(a=0;a<64;a+=8){var p=parseInt(h.substr(a,8),2).toString(16);1===p.length&&(p="0"+p),f+=p}return f.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},U=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function B(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}var W=new RegExp("^-?(0*)\\d{1,10}$"),K=-2147483648,H=2147483647,V=function(e){if(W.test(e)){var t=Number(e);if(t>=K&&t<=H)return t}return null},z=function(e){try{e()}catch(t){setTimeout((function(){var e=t.stack||"";throw E("Exception was thrown by user callback.",e),t}),Math.floor(0))}},G=function(){var e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Q=function(e,t){var n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n},Y=function(){function e(e,t,n){var r=this;this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.get().then((function(e){return r.auth_=e}))}return e.prototype.getToken=function(e){return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(C("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):Promise.resolve(null)},e.prototype.addTokenChangeListener=function(e){this.auth_?this.auth_.addAuthTokenListener(e):(setTimeout((function(){return e(null)}),0),this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)})))},e.prototype.removeTokenChangeListener=function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))},e.prototype.notifyForInvalidToken=function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',E(e)},e}(),$=function(){function e(){}return e.prototype.getToken=function(t){return Promise.resolve({accessToken:e.EMULATOR_AUTH_TOKEN})},e.prototype.addTokenChangeListener=function(t){t(e.EMULATOR_AUTH_TOKEN)},e.prototype.removeTokenChangeListener=function(e){},e.prototype.notifyForInvalidToken=function(){},e.EMULATOR_AUTH_TOKEN="owner",e}(),J="5",X="v",Z="s",ee="r",te="f",ne=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,re="ls",ie="p",oe="websocket",ae="long_polling",se=function(){function e(e,t,n,r,i,o,a){void 0===i&&(i=!1),void 0===o&&(o=""),void 0===a&&(a=!1),this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}return e.prototype.isCacheableHost=function(){return"s-"===this.internalHost.substr(0,2)},e.prototype.isCustomHost=function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain},Object.defineProperty(e.prototype,"host",{get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))},enumerable:!1,configurable:!0}),e.prototype.toString=function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e},e.prototype.toURLString=function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return""+e+this.host+"/"+t},e}();function ue(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function ce(e,t,n){var r;if(Object(o["f"])("string"===typeof t,"typeof type must == string"),Object(o["f"])("object"===typeof n,"typeof params must == object"),t===oe)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ae)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}ue(e)&&(n["ns"]=e.namespace);var i=[];return L(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le=function(){function e(){this.counters_={}}return e.prototype.incrementCounter=function(e,t){void 0===t&&(t=1),Object(o["k"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t},e.prototype.get=function(){return Object(o["m"])(this.counters_)},e}(),he={},fe={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){var t=e.toString();return he[t]||(he[t]=new le),he[t]}function de(e,t){var n=e.toString();return fe[n]||(fe[n]=t()),fe[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve=function(){function e(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e.prototype.closeAfter=function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},e.prototype.handleResponse=function(e,t){var n=this;this.pendingResponses[e]=t;var r=function(){var e=i.pendingResponses[i.currentResponseNum];delete i.pendingResponses[i.currentResponseNum];for(var t=function(t){e[t]&&z((function(){n.onMessage_(e[t])}))},r=0;r<e.length;++r)t(r);if(i.currentResponseNum===i.closeAfterResponse)return i.onClose&&(i.onClose(),i.onClose=null),"break";i.currentResponseNum++},i=this;while(this.pendingResponses[this.currentResponseNum]){var o=r();if("break"===o)break}},e}(),ge="start",_e="close",ye="pLPCommand",me="pRTLPCB",be="id",we="pw",Ce="ser",Te="cb",Oe="seg",Ie="ts",Ee="d",Se="dframe",ke=1870,Pe=30,Ne=ke-Pe,xe=25e3,Re=3e4,je=function(){function e(e,t,n,r,i){this.connId=e,this.repoInfo=t,this.applicationId=n,this.transportSessionId=r,this.lastSessionId=i,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(e),this.stats_=pe(t),this.urlFn=function(e){return ce(t,ae,e)}}return e.prototype.open=function(e,t){var n=this;this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){n.log_("Timed out trying to connect."),n.onClosed_(),n.connectTimeoutTimer_=null}),Math.floor(Re)),P((function(){if(!n.isClosed_){n.scriptTagHolder=new Ae((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object(a["c"])(e,5),i=r[0],o=r[1],s=r[2];r[3],r[4];if(n.incrementIncomingBytes_(e),n.scriptTagHolder)if(n.connectTimeoutTimer_&&(clearTimeout(n.connectTimeoutTimer_),n.connectTimeoutTimer_=null),n.everConnected_=!0,i===ge)n.id=o,n.password=s;else{if(i!==_e)throw new Error("Unrecognized command received: "+i);o?(n.scriptTagHolder.sendNewPolls=!1,n.myPacketOrderer.closeAfter(o,(function(){n.onClosed_()}))):n.onClosed_()}}),(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object(a["c"])(e,2),i=r[0],o=r[1];n.incrementIncomingBytes_(e),n.myPacketOrderer.handleResponse(i,o)}),(function(){n.onClosed_()}),n.urlFn);var e={};e[ge]="t",e[Ce]=Math.floor(1e8*Math.random()),n.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=n.scriptTagHolder.uniqueCallbackIdentifier),e[X]=J,n.transportSessionId&&(e[Z]=n.transportSessionId),n.lastSessionId&&(e[re]=n.lastSessionId),n.applicationId&&(e[ie]=n.applicationId),"undefined"!==typeof location&&location.hostname&&ne.test(location.hostname)&&(e[ee]=te);var t=n.urlFn(e);n.log_("Connecting via long-poll to "+t),n.scriptTagHolder.addTag(t,(function(){}))}}))},e.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},e.forceAllow=function(){e.forceAllow_=!0},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){return!Object(o["A"])()&&(!!e.forceAllow_||!e.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!U())},e.prototype.markConnectionHealthy=function(){},e.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},e.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},e.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},e.prototype.send=function(e){var t=Object(o["K"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=Object(o["i"])(t),r=M(n,Ne),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++},e.prototype.addDisconnectPingFrame=function(e,t){if(!Object(o["A"])()){this.myDisconnFrame=document.createElement("iframe");var n={};n[Se]="t",n[be]=e,n[we]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}},e.prototype.incrementIncomingBytes_=function(e){var t=Object(o["K"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)},e}(),Ae=function(){function e(t,n,r,i){if(this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o["A"])())this.commandCB=t,this.onMessageCB=n;else{this.uniqueCallbackIdentifier=g(),window[ye+this.uniqueCallbackIdentifier]=t,window[me+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();var a="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){var s=document.domain;a='<script>document.domain="'+s+'";<\/script>'}var u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(c){C("frame writing exception"),c.stack&&C(c.stack),C(c)}}}return e.createIFrame_=function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{var t=e.contentWindow.document;t||C("No IE domain setting required")}catch(r){var n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e},e.prototype.close=function(){var e=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0)));var t=this.onDisconnect;t&&(this.onDisconnect=null,t())},e.prototype.startLongPoll=function(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());},e.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e[be]=this.myID,e[we]=this.myPW,e[Ce]=this.currentSerial;var t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){var i=this.pendingSegs[0];if(!(i.d.length+Pe+n.length<=ke))break;var o=this.pendingSegs.shift();n=n+"&"+Oe+r+"="+o.seg+"&"+Ie+r+"="+o.ts+"&"+Ee+r+"="+o.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1},e.prototype.enqueueSegment=function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()},e.prototype.addLongPollTag_=function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(xe)),o=function(){clearTimeout(i),r()};this.addTag(e,o)},e.prototype.addTag=function(e,t){var n=this;Object(o["A"])()?this.doNodeLongPoll(e,t):setTimeout((function(){try{if(!n.sendNewPolls)return;var r=n.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){var e=r.readyState;e&&"loaded"!==e&&"complete"!==e||(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=function(){C("Long-poll script failed to load: "+e),n.sendNewPolls=!1,n.close()},n.myIFrame.doc.body.appendChild(r)}catch(i){}}),Math.floor(1))},e}(),De="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){De=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le=16384,Fe=45e3,qe=null;"undefined"!==typeof MozWebSocket?qe=MozWebSocket:"undefined"!==typeof WebSocket&&(qe=WebSocket);var Ue=function(){function t(e,n,r,i,o){this.connId=e,this.applicationId=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=pe(n),this.connURL=t.connectionURL_(n,i,o),this.nodeAdmin=n.nodeAdmin}return t.connectionURL_=function(e,t,n){var r={};return r[X]=J,!Object(o["A"])()&&"undefined"!==typeof location&&location.hostname&&ne.test(location.hostname)&&(r[ee]=te),t&&(r[Z]=t),n&&(r[re]=n),ce(e,oe,r)},t.prototype.open=function(t,n){var r=this;this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(o["A"])()){var i=this.nodeAdmin?"AdminNode":"Node",a={headers:{"User-Agent":"Firebase/"+J+"/"+De+"/"+e.platform+"/"+i,"X-Firebase-GMPID":this.applicationId||""}},s=Object({NODE_ENV:"production",BASE_URL:"/"}),u=0===this.connURL.indexOf("wss://")?s["HTTPS_PROXY"]||s["https_proxy"]:s["HTTP_PROXY"]||s["http_proxy"];u&&(a["proxy"]={origin:u}),this.mySock=new qe(this.connURL,[],a)}else{a={headers:{"X-Firebase-GMPID":this.applicationId||""}};this.mySock=new qe(this.connURL,[],a)}}catch(l){this.log_("Error instantiating WebSocket.");var c=l.message||l.data;return c&&this.log_(c),void this.onClosed_()}this.mySock.onopen=function(){r.log_("Websocket connected."),r.everConnected_=!0},this.mySock.onclose=function(){r.log_("Websocket connection was disconnected."),r.mySock=null,r.onClosed_()},this.mySock.onmessage=function(e){r.handleIncomingFrame(e)},this.mySock.onerror=function(e){r.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&r.log_(t),r.onClosed_()}},t.prototype.start=function(){},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){var e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&null!==qe&&!t.forceDisallow_},t.previouslyFailed=function(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")},t.prototype.markConnectionHealthy=function(){p.remove("previous_websocket_failure")},t.prototype.appendFrame_=function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=Object(o["E"])(t);this.onMessage(n)}},t.prototype.handleNewFrameCount_=function(e){this.totalFrames=e,this.frames=[]},t.prototype.extractFrameCount_=function(e){if(Object(o["f"])(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e},t.prototype.handleIncomingFrame=function(e){if(null!==this.mySock){var t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}},t.prototype.send=function(e){this.resetKeepAlive();var t=Object(o["K"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=M(t,Le);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])},t.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},t.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},t.prototype.resetKeepAlive=function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(Fe))},t.prototype.sendString_=function(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},t.responsesRequiredToBeHealthy=2,t.healthyTimeout=3e4,t}(),Be=function(){function e(e){this.initTransports_(e)}return Object.defineProperty(e,"ALL_TRANSPORTS",{get:function(){return[je,Ue]},enumerable:!1,configurable:!0}),e.prototype.initTransports_=function(t){var n,r,i=Ue&&Ue["isAvailable"](),o=i&&!Ue.previouslyFailed();if(t.webSocketOnly&&(i||E("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[Ue];else{var s=this.transports_=[];try{for(var u=Object(a["e"])(e.ALL_TRANSPORTS),c=u.next();!c.done;c=u.next()){var l=c.value;l&&l["isAvailable"]()&&s.push(l)}}catch(h){n={error:h}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}}},e.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")},e.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},e}(),We=6e4,Ke=5e3,He=10240,Ve=102400,ze="t",Ge="d",Qe="s",Ye="r",$e="e",Je="o",Xe="a",Ze="n",et="p",tt="h",nt=function(){function e(e,t,n,r,i,o,a,s){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.onMessage_=r,this.onReady_=i,this.onDisconnect_=o,this.onKill_=a,this.lastSessionId=s,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new Be(t),this.log_("Connection created"),this.start_()}return e.prototype.start_=function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,void 0,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Q((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>Ve?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>He?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))},e.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},e.prototype.disconnReceiver_=function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}},e.prototype.connReceiver_=function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}},e.prototype.sendRequest=function(e){var t={t:"d",d:e};this.sendData_(t)},e.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},e.prototype.onSecondaryControl_=function(e){if(ze in e){var t=e[ze];t===Xe?this.upgradeIfSecondaryHealthy_():t===Ye?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Je&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},e.prototype.onSecondaryMessageReceived_=function(e){var t=A("t",e),n=A("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}},e.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}))},e.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ze,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},e.prototype.onPrimaryMessageReceived_=function(e){var t=A("t",e),n=A("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)},e.prototype.onDataMessage_=function(e){this.onPrimaryResponse_(),this.onMessage_(e)},e.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},e.prototype.onControl_=function(e){var t=A(ze,e);if(Ge in e){var n=e[Ge];if(t===tt)this.onHandshake_(n);else if(t===Ze){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Qe?this.onConnectionShutdown_(n):t===Ye?this.onReset_(n):t===$e?O("Server Error: "+n):t===Je?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):O("Unknown control packet command: "+t)}},e.prototype.onHandshake_=function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),J!==n&&E("Protocol version mismatch detected"),this.tryStartUpgrade_())},e.prototype.tryStartUpgrade_=function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)},e.prototype.startUpgrade_=function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Q((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(We))},e.prototype.onReset_=function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())},e.prototype.onConnectionEstablished_=function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Q((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(Ke))},e.prototype.sendPingOnPrimaryIfNecessary_=function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:et,d:{}}}))},e.prototype.onSecondaryConnectionLost_=function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()},e.prototype.onConnectionLost_=function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()},e.prototype.onConnectionShutdown_=function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()},e.prototype.sendData_=function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)},e.prototype.close=function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},e.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},e}(),rt=function(){function e(){}return e.prototype.put=function(e,t,n,r){},e.prototype.merge=function(e,t,n,r){},e.prototype.refreshAuthToken=function(e){},e.prototype.onDisconnectPut=function(e,t,n){},e.prototype.onDisconnectMerge=function(e,t,n){},e.prototype.onDisconnectCancel=function(e,t){},e.prototype.reportStats=function(e){},e}(),it=function(){function e(e){this.allowedEvents_=e,this.listeners_={},Object(o["f"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}return e.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Array.isArray(this.listeners_[e]))for(var r=Object(a["d"])([],Object(a["c"])(this.listeners_[e])),i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)},e.prototype.on=function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)},e.prototype.off=function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)},e.prototype.validateEventType_=function(e){Object(o["f"])(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)},e}(),ot=function(e){function t(){var t=e.call(this,["online"])||this;return t.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(o["y"])()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return Object(a["b"])(t,e),t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(e){return Object(o["f"])("online"===e,"Unknown event type: "+e),[this.online_]},t.prototype.currentlyOnline=function(){return this.online_},t}(it),at=32,st=768,ut=function(){function e(e,t){if(void 0===t){this.pieces_=e.split("/");for(var n=0,r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}return e.prototype.toString=function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return new ut("")}function lt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ht(e){return e.pieces_.length-e.pieceNum_}function ft(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function dt(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function vt(e,t){return void 0===t&&(t=0),e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function _t(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ut)for(r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{var i=t.split("/");for(r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ut(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function mt(e,t){var n=lt(e),r=lt(t);if(null===n)return t;if(n===r)return mt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){for(var n=vt(e,0),r=vt(t,0),i=0;i<n.length&&i<r.length;i++){var o=R(n[i],r[i]);if(0!==o)return o}return n.length===r.length?0:n.length<r.length?-1:1}function wt(e,t){if(ht(e)!==ht(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ct(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(ht(e)>ht(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Tt=function(){function e(e,t){this.errorPrefix_=t,this.parts_=vt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(var n=0;n<this.parts_.length;n++)this.byteLength_+=Object(o["I"])(this.parts_[n]);Et(this)}return e}();function Ot(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(o["I"])(t),Et(e)}function It(e){var t=e.parts_.pop();e.byteLength_-=Object(o["I"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Et(e){if(e.byteLength_>st)throw new Error(e.errorPrefix_+"has a key path longer than "+st+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt,Pt,Nt=function(e){function t(){var t,n,r=e.call(this,["visible"])||this;return"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(n="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(n="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(n="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(n="webkitvisibilitychange",t="webkitHidden")),r.visible_=!0,n&&document.addEventListener(n,(function(){var e=!document[t];e!==r.visible_&&(r.visible_=e,r.trigger("visible",e))}),!1),r}return Object(a["b"])(t,e),t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(e){return Object(o["f"])("visible"===e,"Unknown event type: "+e),[this.visible_]},t}(it),xt=1e3,Rt=3e5,jt=3e3,At=3e4,Dt=1.3,Mt=3e4,Lt="server_kill",Ft=3,qt=function(e){function t(n,r,i,a,s,u,c){var l=e.call(this)||this;if(l.repoInfo_=n,l.applicationId_=r,l.onDataUpdate_=i,l.onConnectStatus_=a,l.onServerInfoUpdate_=s,l.authTokenProvider_=u,l.authOverride_=c,l.id=t.nextPersistentConnectionId_++,l.log_=T("p:"+l.id+":"),l.interruptReasons_={},l.listens=new Map,l.outstandingPuts_=[],l.outstandingGets_=[],l.outstandingPutCount_=0,l.outstandingGetCount_=0,l.onDisconnectRequestQueue_=[],l.connected_=!1,l.reconnectDelay_=xt,l.maxReconnectDelay_=Rt,l.securityDebugCallback_=null,l.lastSessionId=null,l.establishConnectionTimer_=null,l.visible_=!1,l.requestCBHash_={},l.requestNumber_=0,l.realtime_=null,l.authToken_=null,l.forceTokenRefresh_=!1,l.invalidAuthTokenCount_=0,l.firstConnection_=!0,l.lastConnectionAttemptTime_=null,l.lastConnectionEstablishedTime_=null,c&&!Object(o["A"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return l.scheduleConnect_(0),Nt.getInstance().on("visible",l.onVisible_,l),-1===n.host.indexOf("fblocal")&&ot.getInstance().on("online",l.onOnline_,l),l}return Object(a["b"])(t,e),t.prototype.sendRequest=function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(o["K"])(i)),Object(o["f"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)},t.prototype.get=function(e){var t=this,n=new o["a"],r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:function(e){var i=e["d"];"ok"===e["s"]?(t.onDataUpdate_(r["p"],i,!1,null),n.resolve(i)):n.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;var a=this.outstandingGets_.length-1;return this.connected_||setTimeout((function(){var e=t.outstandingGets_[a];void 0!==e&&i===e&&(delete t.outstandingGets_[a],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),t.log_("get "+a+" timed out on connection"),n.reject(new Error("Client is offline.")))}),jt),this.connected_&&this.sendGet_(a),n.promise},t.prototype.listen=function(e,t,n,r){var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),Object(o["f"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o["f"])(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var s={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,s),this.connected_&&this.sendListen_(s)},t.prototype.sendGet_=function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))},t.prototype.sendListen_=function(e){var n=this,r=e.query,i=r._path.toString(),o=r._queryIdentifier;this.log_("Listen on "+i+" for "+o);var a={p:i},s="q";e.tag&&(a["q"]=r._queryObject,a["t"]=e.tag),a["h"]=e.hashFn(),this.sendRequest(s,a,(function(a){var s=a["d"],u=a["s"];t.warnOnListenWarnings_(s,r);var c=n.listens.get(i)&&n.listens.get(i).get(o);c===e&&(n.log_("listen response",a),"ok"!==u&&n.removeListen_(i,o),e.onComplete&&e.onComplete(u,s))}))},t.warnOnListenWarnings_=function(e,t){if(e&&"object"===typeof e&&Object(o["k"])(e,"w")){var n=Object(o["H"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();E("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding "+r+" at "+i+" to your security rules for better performance.")}}},t.prototype.refreshAuthToken=function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)},t.prototype.reduceReconnectDelayIfAdminCredential_=function(e){var t=e&&40===e.length;(t||Object(o["r"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=At)},t.prototype.tryAuth=function(){var e=this;if(this.connected_&&this.authToken_){var t=this.authToken_,n=Object(o["D"])(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r["noauth"]=!0:"object"===typeof this.authOverride_&&(r["authvar"]=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n["s"],i=n["d"]||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}},t.prototype.unlisten=function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o["f"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");var i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)},t.prototype.sendUnlisten_=function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)},t.prototype.onDisconnectPut=function(e,t,n){this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})},t.prototype.onDisconnectMerge=function(e,t,n){this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})},t.prototype.onDisconnectCancel=function(e,t){this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})},t.prototype.sendOnDisconnect_=function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e["s"],e["d"])}),Math.floor(0))}))},t.prototype.put=function(e,t,n,r){this.putInternal("p",e,t,n,r)},t.prototype.merge=function(e,t,n,r){this.putInternal("m",e,t,n,r)},t.prototype.putInternal=function(e,t,n,r,i){var o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;var a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)},t.prototype.sendPut_=function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r["s"],r["d"])}))},t.prototype.reportStats=function(e){var t=this;if(this.connected_){var n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){var n=e["s"];if("ok"!==n){var r=e["d"];t.log_("reportStats","Error sending stats: "+r)}}))}},t.prototype.onDataMessage_=function(e){if("r"in e){this.log_("from server: "+Object(o["K"])(e));var t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}},t.prototype.onDataPush_=function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):O("Unrecognized action received from server: "+Object(o["K"])(e)+"\nAre you using the latest client?")},t.prototype.onReady_=function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},t.prototype.scheduleConnect_=function(e){var t=this;Object(o["f"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))},t.prototype.onVisible_=function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e},t.prototype.onOnline_=function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},t.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){var e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Mt&&(this.reconnectDelay_=xt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var t=(new Date).getTime()-this.lastConnectionAttemptTime_,n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dt)}this.onConnectStatus_(!1)},t.prototype.establishConnection_=function(){var e=this;if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;var n=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+t.nextConnectionId_++,s=this,u=this.lastSessionId,c=!1,l=null,h=function(){l?l.close():(c=!0,i())},f=function(e){Object(o["f"])(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(e)};this.realtime_={close:h,sendRequest:f};var p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1,this.authTokenProvider_.getToken(p).then((function(e){c?C("getToken() completed but was canceled"):(C("getToken() completed. Creating connection."),s.authToken_=e&&e.accessToken,l=new nt(a,s.repoInfo_,s.applicationId_,n,r,i,(function(e){E(e+" ("+s.repoInfo_.toString()+")"),s.interrupt(Lt)}),u))})).then(null,(function(t){s.log_("Failed to get token: "+t),c||(e.repoInfo_.nodeAdmin&&E(t),h())}))}},t.prototype.interrupt=function(e){C("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},t.prototype.resume=function(e){C("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(o["v"])(this.interruptReasons_)&&(this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0))},t.prototype.handleTimestamp_=function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})},t.prototype.cancelSentTransactions_=function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])},t.prototype.onListenRevoked_=function(e,t){var n;n=t?t.map((function(e){return D(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")},t.prototype.removeListen_=function(e,t){var n,r=new ut(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n},t.prototype.onAuthRevoked_=function(e,t){C("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=At,this.authTokenProvider_.notifyForInvalidToken()))},t.prototype.onSecurityDebugPacket_=function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))},t.prototype.restoreState_=function(){var e,t,n,r;this.tryAuth();try{for(var i=Object(a["e"])(this.listens.values()),o=i.next();!o.done;o=i.next()){var s=o.value;try{for(var u=(n=void 0,Object(a["e"])(s.values())),c=u.next();!c.done;c=u.next()){var l=c.value;this.sendListen_(l)}}catch(p){n={error:p}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}}}catch(d){e={error:d}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}for(var h=0;h<this.outstandingPuts_.length;h++)this.outstandingPuts_[h]&&this.sendPut_(h);while(this.onDisconnectRequestQueue_.length){var f=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}for(h=0;h<this.outstandingGets_.length;h++)this.outstandingGets_[h]&&this.sendGet_(h)},t.prototype.sendConnectStats_=function(){var e={},t="js";Object(o["A"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+De.replace(/\./g,"-")]=1,Object(o["y"])()?e["framework.cordova"]=1:Object(o["B"])()&&(e["framework.reactnative"]=1),this.reportStats(e)},t.prototype.shouldReconnect_=function(){var e=ot.getInstance().currentlyOnline();return Object(o["v"])(this.interruptReasons_)&&e},t.nextPersistentConnectionId_=0,t.nextConnectionId_=0,t}(rt),Ut=function(){function e(e,t){this.name=e,this.node=t}return e.Wrap=function(t,n){return new e(t,n)},e}(),Bt=function(){function e(){}return e.prototype.getCompare=function(){return this.compare.bind(this)},e.prototype.indexedValueChanged=function(e,t){var n=new Ut(N,e),r=new Ut(N,t);return 0!==this.compare(n,r)},e.prototype.minPost=function(){return Ut.MIN},e}(),Wt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a["b"])(t,e),Object.defineProperty(t,"__EMPTY_NODE",{get:function(){return kt},set:function(e){kt=e},enumerable:!1,configurable:!0}),t.prototype.compare=function(e,t){return R(e.name,t.name)},t.prototype.isDefinedOn=function(e){throw Object(o["g"])("KeyIndex.isDefinedOn not expected to be called.")},t.prototype.indexedValueChanged=function(e,t){return!1},t.prototype.minPost=function(){return Ut.MIN},t.prototype.maxPost=function(){return new Ut(x,kt)},t.prototype.makePost=function(e,t){return Object(o["f"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ut(e,kt)},t.prototype.toString=function(){return".key"},t}(Bt),Kt=new Wt,Ht=function(){function e(e,t,n,r,i){void 0===i&&(i=null),this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];var o=1;while(!e.isEmpty())if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}return e.prototype.getNext=function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e},e.prototype.hasNext=function(){return this.nodeStack_.length>0},e.prototype.peek=function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}},e}(),Vt=function(){function e(t,n,r,i,o){this.key=t,this.value=n,this.color=null!=r?r:e.RED,this.left=null!=i?i:Gt.EMPTY_NODE,this.right=null!=o?o:Gt.EMPTY_NODE}return e.prototype.copy=function(t,n,r,i,o){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)},e.prototype.count=function(){return this.left.count()+1+this.right.count()},e.prototype.isEmpty=function(){return!1},e.prototype.inorderTraversal=function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)},e.prototype.reverseTraversal=function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)},e.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},e.prototype.minKey=function(){return this.min_().key},e.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},e.prototype.insert=function(e,t,n){var r=this,i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()},e.prototype.removeMin_=function(){if(this.left.isEmpty())return Gt.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()},e.prototype.remove=function(e,t){var n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Gt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()},e.prototype.isRed_=function(){return this.color},e.prototype.fixUp_=function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e},e.prototype.moveRedLeft_=function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e},e.prototype.moveRedRight_=function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e},e.prototype.rotateLeft_=function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)},e.prototype.rotateRight_=function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)},e.prototype.colorFlip_=function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)},e.prototype.checkMaxDepth_=function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1},e.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)},e.RED=!0,e.BLACK=!1,e}(),zt=function(){function e(){}return e.prototype.copy=function(e,t,n,r,i){return this},e.prototype.insert=function(e,t,n){return new Vt(e,t,null)},e.prototype.remove=function(e,t){return this},e.prototype.count=function(){return 0},e.prototype.isEmpty=function(){return!0},e.prototype.inorderTraversal=function(e){return!1},e.prototype.reverseTraversal=function(e){return!1},e.prototype.minKey=function(){return null},e.prototype.maxKey=function(){return null},e.prototype.check_=function(){return 0},e.prototype.isRed_=function(){return!1},e}(),Gt=function(){function e(t,n){void 0===n&&(n=e.EMPTY_NODE),this.comparator_=t,this.root_=n}return e.prototype.insert=function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Vt.BLACK,null,null))},e.prototype.remove=function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Vt.BLACK,null,null))},e.prototype.get=function(e){var t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null},e.prototype.getPredecessorKey=function(e){var t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},e.prototype.isEmpty=function(){return this.root_.isEmpty()},e.prototype.count=function(){return this.root_.count()},e.prototype.minKey=function(){return this.root_.minKey()},e.prototype.maxKey=function(){return this.root_.maxKey()},e.prototype.inorderTraversal=function(e){return this.root_.inorderTraversal(e)},e.prototype.reverseTraversal=function(e){return this.root_.reverseTraversal(e)},e.prototype.getIterator=function(e){return new Ht(this.root_,null,this.comparator_,!1,e)},e.prototype.getIteratorFrom=function(e,t){return new Ht(this.root_,e,this.comparator_,!1,t)},e.prototype.getReverseIteratorFrom=function(e,t){return new Ht(this.root_,e,this.comparator_,!0,t)},e.prototype.getReverseIterator=function(e){return new Ht(this.root_,null,this.comparator_,!0,e)},e.EMPTY_NODE=new zt,e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qt(e,t){return R(e.name,t.name)}function Yt(e,t){return R(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e){Pt=e}var Jt,Xt,Zt,en=function(e){return"number"===typeof e?"number:"+F(e):"string:"+e},tn=function(e){if(e.isLeafNode()){var t=e.val();Object(o["f"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(o["k"])(t,".sv"),"Priority must be a string or number.")}else Object(o["f"])(e===Pt||e.isEmpty(),"priority of unexpected type.");Object(o["f"])(e===Pt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},nn=function(){function e(t,n){void 0===n&&(n=e.__childrenNodeConstructor.EMPTY_NODE),this.value_=t,this.priorityNode_=n,this.lazyHash_=null,Object(o["f"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),tn(this.priorityNode_)}return Object.defineProperty(e,"__childrenNodeConstructor",{get:function(){return Jt},set:function(e){Jt=e},enumerable:!1,configurable:!0}),e.prototype.isLeafNode=function(){return!0},e.prototype.getPriority=function(){return this.priorityNode_},e.prototype.updatePriority=function(t){return new e(this.value_,t)},e.prototype.getImmediateChild=function(t){return".priority"===t?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.getChild=function(t){return yt(t)?this:".priority"===lt(t)?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.hasChild=function(){return!1},e.prototype.getPredecessorChildName=function(e,t){return null},e.prototype.updateImmediateChild=function(t,n){return".priority"===t?this.updatePriority(n):n.isEmpty()&&".priority"!==t?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)},e.prototype.updateChild=function(t,n){var r=lt(t);return null===r?n:n.isEmpty()&&".priority"!==r?this:(Object(o["f"])(".priority"!==r||1===ht(t),".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(t),n)))},e.prototype.isEmpty=function(){return!1},e.prototype.numChildren=function(){return 0},e.prototype.forEachChild=function(e,t){return!1},e.prototype.val=function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},e.prototype.hash=function(){if(null===this.lazyHash_){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+en(this.priorityNode_.val())+":");var t=typeof this.value_;e+=t+":",e+="number"===t?F(this.value_):this.value_,this.lazyHash_=_(e)}return this.lazyHash_},e.prototype.getValue=function(){return this.value_},e.prototype.compareTo=function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(Object(o["f"])(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))},e.prototype.compareToLeafNode_=function(t){var n=typeof t.value_,r=typeof this.value_,i=e.VALUE_TYPE_ORDER.indexOf(n),a=e.VALUE_TYPE_ORDER.indexOf(r);return Object(o["f"])(i>=0,"Unknown leaf type: "+n),Object(o["f"])(a>=0,"Unknown leaf type: "+r),i===a?"object"===r?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:a-i},e.prototype.withIndex=function(){return this},e.prototype.isIndexed=function(){return!0},e.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1},e.VALUE_TYPE_ORDER=["object","boolean","number","string"],e}();function rn(e){Xt=e}function on(e){Zt=e}var an,sn,un=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a["b"])(t,e),t.prototype.compare=function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?R(e.name,t.name):i},t.prototype.isDefinedOn=function(e){return!e.getPriority().isEmpty()},t.prototype.indexedValueChanged=function(e,t){return!e.getPriority().equals(t.getPriority())},t.prototype.minPost=function(){return Ut.MIN},t.prototype.maxPost=function(){return new Ut(x,new nn("[PRIORITY-POST]",Zt))},t.prototype.makePost=function(e,t){var n=Xt(e);return new Ut(t,new nn("[PRIORITY-POST]",n))},t.prototype.toString=function(){return".priority"},t}(Bt),cn=new un,ln=Math.log(2),hn=function(){function e(e){var t=function(e){return parseInt(Math.log(e)/ln,10)},n=function(e){return parseInt(Array(e+1).join("1"),2)};this.count=t(e+1),this.current_=this.count-1;var r=n(this.count);this.bits_=e+1&r}return e.prototype.nextBitIsOne=function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e},e}(),fn=function(e,t,n,r){e.sort(t);var i=function(t,r){var o,a,s=r-t;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return o=e[u],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,c,l)},o=function(t){for(var r=null,o=null,a=e.length,s=function(t,r){var o=a-t,s=a;a-=t;var c=i(o+1,s),l=e[o],h=n?n(l):l;u(new Vt(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(o=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Vt.BLACK):(s(h,Vt.BLACK),s(h,Vt.RED))}return o},a=new hn(e.length),s=o(a);return new Gt(r||t,s)},pn={},dn=function(){function e(e,t){this.indexes_=e,this.indexSet_=t}return Object.defineProperty(e,"Default",{get:function(){return Object(o["f"])(pn&&cn,"ChildrenNode.ts has not been loaded"),an=an||new e({".priority":pn},{".priority":cn}),an},enumerable:!1,configurable:!0}),e.prototype.get=function(e){var t=Object(o["H"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gt?t:null},e.prototype.hasIndex=function(e){return Object(o["k"])(this.indexSet_,e.toString())},e.prototype.addIndex=function(t,n){Object(o["f"])(t!==Kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");var r,i=[],s=!1,u=n.getIterator(Ut.Wrap),c=u.getNext();while(c)s=s||t.isDefinedOn(c.node),i.push(c),c=u.getNext();r=s?fn(i,t.getCompare()):pn;var l=t.toString(),h=Object(a["a"])({},this.indexSet_);h[l]=t;var f=Object(a["a"])({},this.indexes_);return f[l]=r,new e(f,h)},e.prototype.addToIndexes=function(t,n){var r=this,i=Object(o["F"])(this.indexes_,(function(e,i){var a=Object(o["H"])(r.indexSet_,i);if(Object(o["f"])(a,"Missing index implementation for "+i),e===pn){if(a.isDefinedOn(t.node)){var s=[],u=n.getIterator(Ut.Wrap),c=u.getNext();while(c)c.name!==t.name&&s.push(c),c=u.getNext();return s.push(t),fn(s,a.getCompare())}return pn}var l=n.get(t.name),h=e;return l&&(h=h.remove(new Ut(t.name,l))),h.insert(t,t.node)}));return new e(i,this.indexSet_)},e.prototype.removeFromIndexes=function(t,n){var r=Object(o["F"])(this.indexes_,(function(e){if(e===pn)return e;var r=n.get(t.name);return r?e.remove(new Ut(t.name,r)):e}));return new e(r,this.indexSet_)},e}(),vn=function(){function e(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&tn(this.priorityNode_),this.children_.isEmpty()&&Object(o["f"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(e,"EMPTY_NODE",{get:function(){return sn||(sn=new e(new Gt(Yt),null,dn.Default))},enumerable:!1,configurable:!0}),e.prototype.isLeafNode=function(){return!1},e.prototype.getPriority=function(){return this.priorityNode_||sn},e.prototype.updatePriority=function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)},e.prototype.getImmediateChild=function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?sn:t},e.prototype.getChild=function(e){var t=lt(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))},e.prototype.hasChild=function(e){return null!==this.children_.get(e)},e.prototype.updateImmediateChild=function(t,n){if(Object(o["f"])(n,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(n);var r=new Ut(t,n),i=void 0,a=void 0;n.isEmpty()?(i=this.children_.remove(t),a=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),a=this.indexMap_.addToIndexes(r,this.children_));var s=i.isEmpty()?sn:this.priorityNode_;return new e(i,s,a)},e.prototype.updateChild=function(e,t){var n=lt(e);if(null===n)return t;Object(o["f"])(".priority"!==lt(e)||1===ht(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)},e.prototype.isEmpty=function(){return this.children_.isEmpty()},e.prototype.numChildren=function(){return this.children_.count()},e.prototype.val=function(t){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(cn,(function(a,s){n[a]=s.val(t),r++,o&&e.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):o=!1})),!t&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},e.prototype.hash=function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+en(this.getPriority().val())+":"),this.forEachChild(cn,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":_(e)}return this.lazyHash_},e.prototype.getPredecessorChildName=function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Ut(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)},e.prototype.getFirstChildName=function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()},e.prototype.getFirstChild=function(e){var t=this.getFirstChildName(e);return t?new Ut(t,this.children_.get(t)):null},e.prototype.getLastChildName=function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()},e.prototype.getLastChild=function(e){var t=this.getLastChildName(e);return t?new Ut(t,this.children_.get(t)):null},e.prototype.forEachChild=function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)},e.prototype.getIterator=function(e){return this.getIteratorFrom(e.minPost(),e)},e.prototype.getIteratorFrom=function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));var r=this.children_.getIteratorFrom(e.name,Ut.Wrap),i=r.peek();while(null!=i&&t.compare(i,e)<0)r.getNext(),i=r.peek();return r},e.prototype.getReverseIterator=function(e){return this.getReverseIteratorFrom(e.maxPost(),e)},e.prototype.getReverseIteratorFrom=function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));var r=this.children_.getReverseIteratorFrom(e.name,Ut.Wrap),i=r.peek();while(null!=i&&t.compare(i,e)>0)r.getNext(),i=r.peek();return r},e.prototype.compareTo=function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0},e.prototype.withIndex=function(t){if(t===Kt||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)},e.prototype.isIndexed=function(e){return e===Kt||this.indexMap_.hasIndex(e)},e.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){var n=this.getIterator(cn),r=t.getIterator(cn),i=n.getNext(),o=r.getNext();while(i&&o){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1},e.prototype.resolveIndex_=function(e){return e===Kt?null:this.indexMap_.get(e.toString())},e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,e}(),gn=function(e){function t(){return e.call(this,new Gt(Yt),vn.EMPTY_NODE,dn.Default)||this}return Object(a["b"])(t,e),t.prototype.compareTo=function(e){return e===this?0:1},t.prototype.equals=function(e){return e===this},t.prototype.getPriority=function(){return this},t.prototype.getImmediateChild=function(e){return vn.EMPTY_NODE},t.prototype.isEmpty=function(){return!1},t}(vn),_n=new gn;Object.defineProperties(Ut,{MIN:{value:new Ut(N,vn.EMPTY_NODE)},MAX:{value:new Ut(x,_n)}}),Wt.__EMPTY_NODE=vn.EMPTY_NODE,nn.__childrenNodeConstructor=vn,$t(_n),on(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yn=!0;function mn(e,t){if(void 0===t&&(t=null),null===e)return vn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(o["f"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){var n=e;return new nn(n,mn(t))}if(e instanceof Array||!yn){var r=vn.EMPTY_NODE;return L(e,(function(t,n){if(Object(o["k"])(e,t)&&"."!==t.substring(0,1)){var i=mn(n);!i.isLeafNode()&&i.isEmpty()||(r=r.updateImmediateChild(t,i))}})),r.updatePriority(mn(t))}var i=[],a=!1,s=e;if(L(s,(function(e,t){if("."!==e.substring(0,1)){var n=mn(t);n.isEmpty()||(a=a||!n.getPriority().isEmpty(),i.push(new Ut(e,n)))}})),0===i.length)return vn.EMPTY_NODE;var u=fn(i,Qt,(function(e){return e.name}),Yt);if(a){var c=fn(i,cn.getCompare());return new vn(u,mn(t),new dn({".priority":c},{".priority":cn}))}return new vn(u,mn(t),dn.Default)}rn(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bn=function(e){function t(t){var n=e.call(this)||this;return n.indexPath_=t,Object(o["f"])(!yt(t)&&".priority"!==lt(t),"Can't create PathIndex with empty path or .priority key"),n}return Object(a["b"])(t,e),t.prototype.extractChild=function(e){return e.getChild(this.indexPath_)},t.prototype.isDefinedOn=function(e){return!e.getChild(this.indexPath_).isEmpty()},t.prototype.compare=function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?R(e.name,t.name):i},t.prototype.makePost=function(e,t){var n=mn(e),r=vn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ut(t,r)},t.prototype.maxPost=function(){var e=vn.EMPTY_NODE.updateChild(this.indexPath_,_n);return new Ut(x,e)},t.prototype.toString=function(){return vt(this.indexPath_,0).join("/")},t}(Bt),wn=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a["b"])(t,e),t.prototype.compare=function(e,t){var n=e.node.compareTo(t.node);return 0===n?R(e.name,t.name):n},t.prototype.isDefinedOn=function(e){return!0},t.prototype.indexedValueChanged=function(e,t){return!e.equals(t)},t.prototype.minPost=function(){return Ut.MIN},t.prototype.maxPost=function(){return Ut.MAX},t.prototype.makePost=function(e,t){var n=mn(e);return new Ut(t,n)},t.prototype.toString=function(){return".value"},t}(Bt),Cn=new wn,Tn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",On="-",In="z",En=786,Sn=function(){var e=0,t=[];return function(n){var r,i=n===e;e=n;var a=new Array(8);for(r=7;r>=0;r--)a[r]=Tn.charAt(n%64),n=Math.floor(n/64);Object(o["f"])(0===n,"Cannot push at time == 0");var s=a.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)s+=Tn.charAt(t[r]);return Object(o["f"])(20===s.length,"nextPushId: Length should be 20."),s}}(),kn=function(e){if(e===""+H)return On;var t=V(e);if(null!=t)return""+(t+1);for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e.charAt(r);if(n.length<En)return n.push(On),n.join("");var i=n.length-1;while(i>=0&&n[i]===In)i--;if(-1===i)return x;var o=n[i],a=Tn.charAt(Tn.indexOf(o)+1);return n[i]=a,n.slice(0,i+1).join("")},Pn=function(e){if(e===""+K)return N;var t=V(e);if(null!=t)return""+(t-1);for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e.charAt(r);return n[n.length-1]===On?1===n.length?""+H:(delete n[n.length-1],n.join("")):(n[n.length-1]=Tn.charAt(Tn.indexOf(n[n.length-1])-1),n.join("")+In.repeat(En-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nn(e){return{type:"value",snapshotNode:e}}function xn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Rn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function jn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function An(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn=function(){function e(e){this.index_=e}return e.prototype.updateChild=function(e,t,n,r,i,a){Object(o["f"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var s=e.getImmediateChild(t);return s.getChild(r).equals(n.getChild(r))&&s.isEmpty()===n.isEmpty()?e:(null!=a&&(n.isEmpty()?e.hasChild(t)?a.trackChildChange(Rn(t,s)):Object(o["f"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?a.trackChildChange(xn(t,n)):a.trackChildChange(jn(t,n,s))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))},e.prototype.updateFullNode=function(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cn,(function(e,r){t.hasChild(e)||n.trackChildChange(Rn(e,r))})),t.isLeafNode()||t.forEachChild(cn,(function(t,r){if(e.hasChild(t)){var i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(jn(t,r,i))}else n.trackChildChange(xn(t,r))}))),t.withIndex(this.index_)},e.prototype.updatePriority=function(e,t){return e.isEmpty()?vn.EMPTY_NODE:e.updatePriority(t)},e.prototype.filtersNodes=function(){return!1},e.prototype.getIndexedFilter=function(){return this},e.prototype.getIndex=function(){return this.index_},e}(),Mn=function(){function e(t){this.indexedFilter_=new Dn(t.getIndex()),this.index_=t.getIndex(),this.startPost_=e.getStartPost_(t),this.endPost_=e.getEndPost_(t)}return e.prototype.getStartPost=function(){return this.startPost_},e.prototype.getEndPost=function(){return this.endPost_},e.prototype.matches=function(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0},e.prototype.updateChild=function(e,t,n,r,i,o){return this.matches(new Ut(t,n))||(n=vn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)},e.prototype.updateFullNode=function(e,t,n){t.isLeafNode()&&(t=vn.EMPTY_NODE);var r=t.withIndex(this.index_);r=r.updatePriority(vn.EMPTY_NODE);var i=this;return t.forEachChild(cn,(function(e,t){i.matches(new Ut(e,t))||(r=r.updateImmediateChild(e,vn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)},e.prototype.updatePriority=function(e,t){return e},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.indexedFilter_},e.prototype.getIndex=function(){return this.index_},e.getStartPost_=function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()},e.getEndPost_=function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()},e}(),Ln=function(){function e(e){this.rangedFilter_=new Mn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}return e.prototype.updateChild=function(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ut(t,n))||(n=vn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)},e.prototype.updateFullNode=function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=vn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){r=vn.EMPTY_NODE.withIndex(this.index_);var i=void 0;i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);var o=0;while(i.hasNext()&&o<this.limit_){var a=i.getNext(),s=void 0;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,!s)break;r=r.updateImmediateChild(a.name,a.node),o++}}else{r=t.withIndex(this.index_),r=r.updatePriority(vn.EMPTY_NODE);var u=void 0,c=void 0,l=void 0;i=void 0;if(this.reverse_){i=r.getReverseIterator(this.index_),u=this.rangedFilter_.getEndPost(),c=this.rangedFilter_.getStartPost();var h=this.index_.getCompare();l=function(e,t){return h(t,e)}}else i=r.getIterator(this.index_),u=this.rangedFilter_.getStartPost(),c=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();o=0;var f=!1;while(i.hasNext()){a=i.getNext();!f&&l(u,a)<=0&&(f=!0);s=f&&o<this.limit_&&l(a,c)<=0;s?o++:r=r.updateImmediateChild(a.name,vn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)},e.prototype.updatePriority=function(e,t){return e},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},e.prototype.getIndex=function(){return this.index_},e.prototype.fullLimitUpdateChild_=function(e,t,n,r,i){var a;if(this.reverse_){var s=this.index_.getCompare();a=function(e,t){return s(t,e)}}else a=this.index_.getCompare();var u=e;Object(o["f"])(u.numChildren()===this.limit_,"");var c=new Ut(t,n),l=this.reverse_?u.getFirstChild(this.index_):u.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(u.hasChild(t)){var f=u.getImmediateChild(t),p=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=p&&(p.name===t||u.hasChild(p.name)))p=r.getChildAfterChild(this.index_,p,this.reverse_);var d=null==p?1:a(p,c),v=h&&!n.isEmpty()&&d>=0;if(v)return null!=i&&i.trackChildChange(jn(t,n,f)),u.updateImmediateChild(t,n);null!=i&&i.trackChildChange(Rn(t,f));var g=u.updateImmediateChild(t,vn.EMPTY_NODE),_=null!=p&&this.rangedFilter_.matches(p);return _?(null!=i&&i.trackChildChange(xn(p.name,p.node)),g.updateImmediateChild(p.name,p.node)):g}return n.isEmpty()?e:h&&a(l,c)>=0?(null!=i&&(i.trackChildChange(Rn(l.name,l.node)),i.trackChildChange(xn(t,n))),u.updateImmediateChild(t,n).updateImmediateChild(l.name,vn.EMPTY_NODE)):e},e}(),Fn=function(){function e(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}return e.prototype.hasStart=function(){return this.startSet_},e.prototype.hasStartAfter=function(){return this.startAfterSet_},e.prototype.hasEndBefore=function(){return this.endBeforeSet_},e.prototype.isViewFromLeft=function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_},e.prototype.getIndexStartValue=function(){return Object(o["f"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},e.prototype.getIndexStartName=function(){return Object(o["f"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N},e.prototype.hasEnd=function(){return this.endSet_},e.prototype.getIndexEndValue=function(){return Object(o["f"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},e.prototype.getIndexEndName=function(){return Object(o["f"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:x},e.prototype.hasLimit=function(){return this.limitSet_},e.prototype.hasAnchoredLimit=function(){return this.limitSet_&&""!==this.viewFrom_},e.prototype.getLimit=function(){return Object(o["f"])(this.limitSet_,"Only valid if limit has been set"),this.limit_},e.prototype.getIndex=function(){return this.index_},e.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},e.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===cn},e.prototype.copy=function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e){return e.loadsAllData()?new Dn(e.getIndex()):e.hasLimit()?new Ln(e):new Mn(e)}function Un(e,t){var n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Bn(e,t){var n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Wn(e,t,n){var r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Kn(e,t,n){var r;if(e.index_===Kt)"string"===typeof t&&(t=kn(t)),r=Wn(e,t,n);else{var i=void 0;i=null==n?x:kn(n),r=Wn(e,t,i)}return r.startAfterSet_=!0,r}function Hn(e,t,n){var r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Vn(e,t,n){var r,i;return e.index_===Kt?("string"===typeof t&&(t=Pn(t)),i=Hn(e,t,n)):(r=null==n?N:Pn(n),i=Hn(e,t,r)),i.endBeforeSet_=!0,i}function zn(e,t){var n=e.copy();return n.index_=t,n}function Gn(e){var t,n={};return e.isDefault()||(e.index_===cn?t="$priority":e.index_===Cn?t="$value":e.index_===Kt?t="$key":(Object(o["f"])(e.index_ instanceof bn,"Unrecognized index type!"),t=e.index_.toString()),n["orderBy"]=Object(o["K"])(t),e.startSet_&&(n["startAt"]=Object(o["K"])(e.indexStartValue_),e.startNameSet_&&(n["startAt"]+=","+Object(o["K"])(e.indexStartName_))),e.endSet_&&(n["endAt"]=Object(o["K"])(e.indexEndValue_),e.endNameSet_&&(n["endAt"]+=","+Object(o["K"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n["limitToFirst"]=e.limit_:n["limitToLast"]=e.limit_)),n}function Qn(e){var t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn=function(e){function t(t,n,r){var i=e.call(this)||this;return i.repoInfo_=t,i.onDataUpdate_=n,i.authTokenProvider_=r,i.log_=T("p:rest:"),i.listens_={},i}return Object(a["b"])(t,e),t.prototype.reportStats=function(e){throw new Error("Method not implemented.")},t.getListenId_=function(e,t){return void 0!==t?"tag$"+t:(Object(o["f"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())},t.prototype.listen=function(e,n,r,i){var a=this,s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);var u=t.getListenId_(e,r),c={};this.listens_[u]=c;var l=Gn(e._queryParams);this.restRequest_(s+".json",l,(function(e,t){var n,l=t;(404===e&&(l=null,e=null),null===e&&a.onDataUpdate_(s,l,!1,r),Object(o["H"])(a.listens_,u)===c)&&(n=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(n,null))}))},t.prototype.unlisten=function(e,n){var r=t.getListenId_(e,n);delete this.listens_[r]},t.prototype.get=function(e){var t=this,n=Gn(e._queryParams),r=e._path.toString(),i=new o["a"];return this.restRequest_(r+".json",n,(function(e,n){var o=n;404===e&&(o=null,e=null),null===e?(t.onDataUpdate_(r,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise},t.prototype.refreshAuthToken=function(e){},t.prototype.restRequest_=function(e,t,n){var r=this;void 0===t&&(t={}),t["format"]="export",this.authTokenProvider_.getToken(!1).then((function(i){var a=i&&i.accessToken;a&&(t["auth"]=a);var s=(r.repoInfo_.secure?"https://":"http://")+r.repoInfo_.host+e+"?ns="+r.repoInfo_.namespace+Object(o["G"])(t);r.log_("Sending REST request for "+s);var u=new XMLHttpRequest;u.onreadystatechange=function(){if(n&&4===u.readyState){r.log_("REST Response for "+s+" received. status:",u.status,"response:",u.responseText);var e=null;if(u.status>=200&&u.status<300){try{e=Object(o["E"])(u.responseText)}catch(t){E("Failed to parse JSON response for "+s+": "+u.responseText)}n(null,e)}else 401!==u.status&&404!==u.status&&E("Got unsuccessful REST response for "+s+" Status: "+u.status),n(u.status);n=null}},u.open("GET",s,!0),u.send()}))},t}(rt),$n=function(){function e(){this.rootNode_=vn.EMPTY_NODE}return e.prototype.getNode=function(e){return this.rootNode_.getChild(e)},e.prototype.updateSnapshot=function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jn(){return{value:null,children:new Map}}function Xn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=lt(t);e.children.has(r)||e.children.set(r,Jn());var i=e.children.get(r);t=ft(t),Xn(i,t,n)}}function Zn(e,t){if(yt(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;var n=e.value;return e.value=null,n.forEachChild(cn,(function(t,n){Xn(e,new ut(t),n)})),Zn(e,t)}if(e.children.size>0){var r=lt(t);if(t=ft(t),e.children.has(r)){var i=Zn(e.children.get(r),t);i&&e.children.delete(r)}return 0===e.children.size}return!0}function er(e,t,n){null!==e.value?n(t,e.value):tr(e,(function(e,r){var i=new ut(t.toString()+"/"+e);er(r,i,n)}))}function tr(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nr,rr=function(){function e(e){this.collection_=e,this.last_=null}return e.prototype.get=function(){var e=this.collection_.get(),t=Object(a["a"])({},e);return this.last_&&L(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t},e}(),ir=1e4,or=3e4,ar=3e5,sr=function(){function e(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new rr(e);var n=ir+(or-ir)*Math.random();Q(this.reportStats_.bind(this),Math.floor(n))}return e.prototype.reportStats_=function(){var e=this,t=this.statsListener_.get(),n={},r=!1;L(t,(function(t,i){i>0&&Object(o["k"])(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),Q(this.reportStats_.bind(this),Math.floor(2*Math.random()*ar))},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e,t){e.statsToReport_[t]=!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(nr||(nr={}));var fr,pr=function(){function e(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=nr.ACK_USER_WRITE,this.source=cr()}return e.prototype.operationForChild=function(t){if(yt(this.path)){if(null!=this.affectedTree.value)return Object(o["f"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new ut(t));return new e(ct(),n,this.revert)}return Object(o["f"])(lt(this.path)===t,"operationForChild called for unrelated child."),new e(ft(this.path),this.affectedTree,this.revert)},e}(),dr=function(){function e(e,t){this.source=e,this.path=t,this.type=nr.LISTEN_COMPLETE}return e.prototype.operationForChild=function(t){return yt(this.path)?new e(this.source,ct()):new e(this.source,ft(this.path))},e}(),vr=function(){function e(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=nr.OVERWRITE}return e.prototype.operationForChild=function(t){return yt(this.path)?new e(this.source,ct(),this.snap.getImmediateChild(t)):new e(this.source,ft(this.path),this.snap)},e}(),gr=function(){function e(e,t,n){this.source=e,this.path=t,this.children=n,this.type=nr.MERGE}return e.prototype.operationForChild=function(t){if(yt(this.path)){var n=this.children.subtree(new ut(t));return n.isEmpty()?null:n.value?new vr(this.source,ct(),n.value):new e(this.source,ct(),n)}return Object(o["f"])(lt(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,ft(this.path),this.children)},e.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},e}(),_r=function(){function e(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}return e.prototype.isFullyInitialized=function(){return this.fullyInitialized_},e.prototype.isFiltered=function(){return this.filtered_},e.prototype.isCompleteForPath=function(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;var t=lt(e);return this.isCompleteForChild(t)},e.prototype.isCompleteForChild=function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)},e.prototype.getNode=function(){return this.node_},e}(),yr=function(){function e(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t,n,r){var i=[],o=[];return t.forEach((function(t){"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(An(t.childName,t.snapshotNode))})),br(e,i,"child_removed",t,r,n),br(e,i,"child_added",t,r,n),br(e,i,"child_moved",o,r,n),br(e,i,"child_changed",t,r,n),br(e,i,"value",t,r,n),i}function br(e,t,n,r,i,o){var a=r.filter((function(e){return e.type===n}));a.sort((function(t,n){return Cr(e,t,n)})),a.forEach((function(n){var r=wr(e,n,o);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function wr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Cr(e,t,n){if(null==t.childName||null==n.childName)throw Object(o["g"])("Should only compare child_ events.");var r=new Ut(t.childName,t.snapshotNode),i=new Ut(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e,t){return{eventCache:e,serverCache:t}}function Or(e,t,n,r){return Tr(new _r(t,n,r),e.serverCache)}function Ir(e,t,n,r){return Tr(e.eventCache,new _r(t,n,r))}function Er(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Sr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kr=function(){return fr||(fr=new Gt(j)),fr},Pr=function(){function e(e,t){void 0===t&&(t=kr()),this.value=e,this.children=t}return e.fromObject=function(t){var n=new e(null);return L(t,(function(e,t){n=n.set(new ut(e),t)})),n},e.prototype.isEmpty=function(){return null===this.value&&this.children.isEmpty()},e.prototype.findRootMostMatchingPathAndValue=function(e,t){if(null!=this.value&&t(this.value))return{path:ct(),value:this.value};if(yt(e))return null;var n=lt(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){var o=_t(new ut(n),i.path);return{path:o,value:i.value}}return null}return null},e.prototype.findRootMostValueAndPath=function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))},e.prototype.subtree=function(t){if(yt(t))return this;var n=lt(t),r=this.children.get(n);return null!==r?r.subtree(ft(t)):new e(null)},e.prototype.set=function(t,n){if(yt(t))return new e(n,this.children);var r=lt(t),i=this.children.get(r)||new e(null),o=i.set(ft(t),n),a=this.children.insert(r,o);return new e(this.value,a)},e.prototype.remove=function(t){if(yt(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=lt(t),r=this.children.get(n);if(r){var i=r.remove(ft(t)),o=void 0;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),null===this.value&&o.isEmpty()?new e(null):new e(this.value,o)}return this},e.prototype.get=function(e){if(yt(e))return this.value;var t=lt(e),n=this.children.get(t);return n?n.get(ft(e)):null},e.prototype.setTree=function(t,n){if(yt(t))return n;var r=lt(t),i=this.children.get(r)||new e(null),o=i.setTree(ft(t),n),a=void 0;return a=o.isEmpty()?this.children.remove(r):this.children.insert(r,o),new e(this.value,a)},e.prototype.fold=function(e){return this.fold_(ct(),e)},e.prototype.fold_=function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(_t(e,r),t)})),t(e,this.value,n)},e.prototype.findOnPath=function(e,t){return this.findOnPath_(e,ct(),t)},e.prototype.findOnPath_=function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(yt(e))return null;var i=lt(e),o=this.children.get(i);return o?o.findOnPath_(ft(e),_t(t,i),n):null},e.prototype.foreachOnPath=function(e,t){return this.foreachOnPath_(e,ct(),t)},e.prototype.foreachOnPath_=function(t,n,r){if(yt(t))return this;this.value&&r(n,this.value);var i=lt(t),o=this.children.get(i);return o?o.foreachOnPath_(ft(t),_t(n,i),r):new e(null)},e.prototype.foreach=function(e){this.foreach_(ct(),e)},e.prototype.foreach_=function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(_t(e,n),t)})),this.value&&t(e,this.value)},e.prototype.foreachChild=function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))},e}(),Nr=function(){function e(e){this.writeTree_=e}return e.empty=function(){return new e(new Pr(null))},e}();function xr(e,t,n){if(yt(t))return new Nr(new Pr(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,o=r.value,a=mt(i,t);return o=o.updateChild(a,n),new Nr(e.writeTree_.set(i,o))}var s=new Pr(n),u=e.writeTree_.setTree(t,s);return new Nr(u)}function Rr(e,t,n){var r=e;return L(n,(function(e,n){r=xr(r,_t(t,e),n)})),r}function jr(e,t){if(yt(t))return Nr.empty();var n=e.writeTree_.setTree(t,new Pr(null));return new Nr(n)}function Ar(e,t){return null!=Dr(e,t)}function Dr(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(mt(n.path,t)):null}function Mr(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,(function(e,n){t.push(new Ut(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Ut(e,n.value))})),t}function Lr(e,t){if(yt(t))return e;var n=Dr(e,t);return new Nr(null!=n?new Pr(n):e.writeTree_.subtree(t))}function Fr(e){return e.writeTree_.isEmpty()}function qr(e,t){return Ur(ct(),e.writeTree_,t)}function Ur(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(Object(o["f"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ur(_t(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(_t(e,".priority"),r)),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(e,t){return li(t,e)}function Wr(e,t,n,r,i){Object(o["f"])(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=xr(e.visibleWrites,t,n)),e.lastWriteId=r}function Kr(e,t,n,r){Object(o["f"])(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Rr(e.visibleWrites,t,n),e.lastWriteId=r}function Hr(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Vr(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));Object(o["f"])(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);var i=r.visible,a=!1,s=e.allWrites.length-1;while(i&&s>=0){var u=e.allWrites[s];u.visible&&(s>=n&&zr(u,r.path)?i=!1:Ct(r.path,u.path)&&(a=!0)),s--}if(i){if(a)return Gr(e),!0;if(r.snap)e.visibleWrites=jr(e.visibleWrites,r.path);else{var c=r.children;L(c,(function(t){e.visibleWrites=jr(e.visibleWrites,_t(r.path,t))}))}return!0}return!1}function zr(e,t){if(e.snap)return Ct(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&Ct(_t(e.path,n),t))return!0;return!1}function Gr(e){e.visibleWrites=Yr(e.allWrites,Qr,ct()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Qr(e){return e.visible}function Yr(e,t,n){for(var r=Nr.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var s=a.path,u=void 0;if(a.snap)Ct(n,s)?(u=mt(n,s),r=xr(r,u,a.snap)):Ct(s,n)&&(u=mt(s,n),r=xr(r,ct(),a.snap.getChild(u)));else{if(!a.children)throw Object(o["g"])("WriteRecord should have .snap or .children");if(Ct(n,s))u=mt(n,s),r=Rr(r,u,a.children);else if(Ct(s,n))if(u=mt(s,n),yt(u))r=Rr(r,ct(),a.children);else{var c=Object(o["H"])(a.children,lt(u));if(c){var l=c.getChild(ft(u));r=xr(r,ct(),l)}}}}}return r}function $r(e,t,n,r,i){if(r||i){var o=Lr(e.visibleWrites,t);if(!i&&Fr(o))return n;if(i||null!=n||Ar(o,ct())){var a=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ct(e.path,t)||Ct(t,e.path))},s=Yr(e.allWrites,a,t);l=n||vn.EMPTY_NODE;return qr(s,l)}return null}var u=Dr(e.visibleWrites,t);if(null!=u)return u;var c=Lr(e.visibleWrites,t);if(Fr(c))return n;if(null!=n||Ar(c,ct())){var l=n||vn.EMPTY_NODE;return qr(c,l)}return null}function Jr(e,t,n){var r=vn.EMPTY_NODE,i=Dr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(cn,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var o=Lr(e.visibleWrites,t);return n.forEachChild(cn,(function(e,t){var n=qr(Lr(o,new ut(e)),t);r=r.updateImmediateChild(e,n)})),Mr(o).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}var a=Lr(e.visibleWrites,t);return Mr(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}function Xr(e,t,n,r,i){Object(o["f"])(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=_t(t,n);if(Ar(e.visibleWrites,a))return null;var s=Lr(e.visibleWrites,a);return Fr(s)?i.getChild(n):qr(s,i.getChild(n))}function Zr(e,t,n,r){var i=_t(t,n),o=Dr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){var a=Lr(e.visibleWrites,i);return qr(a,r.getNode().getImmediateChild(n))}return null}function ei(e,t){return Dr(e.visibleWrites,t)}function ti(e,t,n,r,i,o,a){var s,u=Lr(e.visibleWrites,t),c=Dr(u,ct());if(null!=c)s=c;else{if(null==n)return[];s=qr(u,n)}if(s=s.withIndex(a),s.isEmpty()||s.isLeafNode())return[];var l=[],h=a.getCompare(),f=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),p=f.getNext();while(p&&l.length<i)0!==h(p,r)&&l.push(p),p=f.getNext();return l}function ni(){return{visibleWrites:Nr.empty(),allWrites:[],lastWriteId:-1}}function ri(e,t,n,r){return $r(e.writeTree,e.treePath,t,n,r)}function ii(e,t){return Jr(e.writeTree,e.treePath,t)}function oi(e,t,n,r){return Xr(e.writeTree,e.treePath,t,n,r)}function ai(e,t){return ei(e.writeTree,_t(e.treePath,t))}function si(e,t,n,r,i,o){return ti(e.writeTree,e.treePath,t,n,r,i,o)}function ui(e,t,n){return Zr(e.writeTree,e.treePath,t,n)}function ci(e,t){return li(_t(e.treePath,t),e.writeTree)}function li(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hi=function(){function e(){this.changeMap=new Map}return e.prototype.trackChildChange=function(e){var t=e.type,n=e.childName;Object(o["f"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(o["f"])(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,jn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Rn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,xn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(o["g"])("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,jn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)},e.prototype.getChanges=function(){return Array.from(this.changeMap.values())},e}(),fi=function(){function e(){}return e.prototype.getCompleteChild=function(e){return null},e.prototype.getChildAfterChild=function(e,t,n){return null},e}(),pi=new fi,di=function(){function e(e,t,n){void 0===n&&(n=null),this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}return e.prototype.getCompleteChild=function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new _r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ui(this.writes_,e,n)},e.prototype.getChildAfterChild=function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Sr(this.viewCache_),i=si(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vi(e){return{filter:e}}function gi(e,t){Object(o["f"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(o["f"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function _i(e,t,n,r,i){var a,s,u=new hi;if(n.type===nr.OVERWRITE){var c=n;c.source.fromUser?a=wi(e,t,c.path,c.snap,r,i,u):(Object(o["f"])(c.source.fromServer,"Unknown source."),s=c.source.tagged||t.serverCache.isFiltered()&&!yt(c.path),a=bi(e,t,c.path,c.snap,r,i,s,u))}else if(n.type===nr.MERGE){var l=n;l.source.fromUser?a=Ti(e,t,l.path,l.children,r,i,u):(Object(o["f"])(l.source.fromServer,"Unknown source."),s=l.source.tagged||t.serverCache.isFiltered(),a=Ii(e,t,l.path,l.children,r,i,s,u))}else if(n.type===nr.ACK_USER_WRITE){var h=n;a=h.revert?ki(e,t,h.path,r,i,u):Ei(e,t,h.path,h.affectedTree,r,i,u)}else{if(n.type!==nr.LISTEN_COMPLETE)throw Object(o["g"])("Unknown operation type: "+n.type);a=Si(e,t,n.path,r,u)}var f=u.getChanges();return yi(t,a,f),{viewCache:a,changes:f}}function yi(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Er(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Nn(Er(t)))}}function mi(e,t,n,r,i,a){var s=t.eventCache;if(null!=ai(r,n))return t;var u=void 0,c=void 0;if(yt(n))if(Object(o["f"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var l=Sr(t),h=l instanceof vn?l:vn.EMPTY_NODE,f=ii(r,h);u=e.filter.updateFullNode(t.eventCache.getNode(),f,a)}else{var p=ri(r,Sr(t));u=e.filter.updateFullNode(t.eventCache.getNode(),p,a)}else{var d=lt(n);if(".priority"===d){Object(o["f"])(1===ht(n),"Can't have a priority with additional path components");var v=s.getNode();c=t.serverCache.getNode();var g=oi(r,n,v,c);u=null!=g?e.filter.updatePriority(v,g):s.getNode()}else{var _=ft(n),y=void 0;if(s.isCompleteForChild(d)){c=t.serverCache.getNode();var m=oi(r,n,s.getNode(),c);y=null!=m?s.getNode().getImmediateChild(d).updateChild(_,m):s.getNode().getImmediateChild(d)}else y=ui(r,d,t.serverCache);u=null!=y?e.filter.updateChild(s.getNode(),d,y,_,i,a):s.getNode()}}return Or(t,u,s.isFullyInitialized()||yt(n),e.filter.filtersNodes())}function bi(e,t,n,r,i,o,a,s){var u,c=t.serverCache,l=a?e.filter:e.filter.getIndexedFilter();if(yt(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var f=lt(n);if(!c.isCompleteForPath(n)&&ht(n)>1)return t;var p=ft(n),d=c.getNode().getImmediateChild(f),v=d.updateChild(p,r);u=".priority"===f?l.updatePriority(c.getNode(),v):l.updateChild(c.getNode(),f,v,p,pi,null)}var g=Ir(t,u,c.isFullyInitialized()||yt(n),l.filtersNodes()),_=new di(i,g,o);return mi(e,g,n,i,_,s)}function wi(e,t,n,r,i,o,a){var s,u,c=t.eventCache,l=new di(i,t,o);if(yt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,a),s=Or(t,u,!0,e.filter.filtersNodes());else{var h=lt(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Or(t,u,c.isFullyInitialized(),c.isFiltered());else{var f=ft(n),p=c.getNode().getImmediateChild(h),d=void 0;if(yt(f))d=r;else{var v=l.getCompleteChild(h);d=null!=v?".priority"===pt(f)&&v.getChild(gt(f)).isEmpty()?v:v.updateChild(f,r):vn.EMPTY_NODE}if(p.equals(d))s=t;else{var g=e.filter.updateChild(c.getNode(),h,d,f,l,a);s=Or(t,g,c.isFullyInitialized(),e.filter.filtersNodes())}}}return s}function Ci(e,t){return e.eventCache.isCompleteForChild(t)}function Ti(e,t,n,r,i,o,a){var s=t;return r.foreach((function(r,u){var c=_t(n,r);Ci(t,lt(c))&&(s=wi(e,s,c,u,i,o,a))})),r.foreach((function(r,u){var c=_t(n,r);Ci(t,lt(c))||(s=wi(e,s,c,u,i,o,a))})),s}function Oi(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function Ii(e,t,n,r,i,o,a,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=yt(n)?r:new Pr(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=t.serverCache.getNode().getImmediateChild(n),h=Oi(e,u,r);c=bi(e,c,new ut(n),h,i,o,a,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!u){var h=t.serverCache.getNode().getImmediateChild(n),f=Oi(e,h,r);c=bi(e,c,new ut(n),f,i,o,a,s)}})),c}function Ei(e,t,n,r,i,o,a){if(null!=ai(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(yt(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return bi(e,t,n,u.getNode().getChild(n),i,o,s,a);if(yt(n)){var c=new Pr(null);return u.getNode().forEachChild(Kt,(function(e,t){c=c.set(new ut(e),t)})),Ii(e,t,n,c,i,o,s,a)}return t}var l=new Pr(null);return r.foreach((function(e,t){var r=_t(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Ii(e,t,n,l,i,o,s,a)}function Si(e,t,n,r,i){var o=t.serverCache,a=Ir(t,o.getNode(),o.isFullyInitialized()||yt(n),o.isFiltered());return mi(e,a,n,r,pi,i)}function ki(e,t,n,r,i,a){var s;if(null!=ai(r,n))return t;var u=new di(r,t,i),c=t.eventCache.getNode(),l=void 0;if(yt(n)||".priority"===lt(n)){var h=void 0;if(t.serverCache.isFullyInitialized())h=ri(r,Sr(t));else{var f=t.serverCache.getNode();Object(o["f"])(f instanceof vn,"serverChildren would be complete if leaf node"),h=ii(r,f)}h=h,l=e.filter.updateFullNode(c,h,a)}else{var p=lt(n),d=ui(r,p,t.serverCache);null==d&&t.serverCache.isCompleteForChild(p)&&(d=c.getImmediateChild(p)),l=null!=d?e.filter.updateChild(c,p,d,ft(n),u,a):t.eventCache.getNode().hasChild(p)?e.filter.updateChild(c,p,vn.EMPTY_NODE,ft(n),u,a):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=ri(r,Sr(t)),s.isLeafNode()&&(l=e.filter.updateFullNode(l,s,a)))}return s=t.serverCache.isFullyInitialized()||null!=ai(r,ct()),Or(t,l,s,e.filter.filtersNodes())}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pi,Ni=function(){function e(e,t){this.query_=e,this.eventRegistrations_=[];var n=this.query_._queryParams,r=new Dn(n.getIndex()),i=qn(n);this.processor_=vi(i);var o=t.serverCache,a=t.eventCache,s=r.updateFullNode(vn.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(vn.EMPTY_NODE,a.getNode(),null),c=new _r(s,o.isFullyInitialized(),r.filtersNodes()),l=new _r(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Tr(l,c),this.eventGenerator_=new yr(this.query_)}return Object.defineProperty(e.prototype,"query",{get:function(){return this.query_},enumerable:!1,configurable:!0}),e}();function xi(e){return e.viewCache_.serverCache.getNode()}function Ri(e){return Er(e.viewCache_)}function ji(e,t){var n=Sr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(lt(t)).isEmpty())?n.getChild(t):null}function Ai(e){return 0===e.eventRegistrations_.length}function Di(e,t){e.eventRegistrations_.push(t)}function Mi(e,t,n){var r=[];if(n){Object(o["f"])(null==t,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach((function(e){var t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){for(var a=[],s=0;s<e.eventRegistrations_.length;++s){var u=e.eventRegistrations_[s];if(u.matches(t)){if(t.hasAnyCallback()){a=a.concat(e.eventRegistrations_.slice(s+1));break}}else a.push(u)}e.eventRegistrations_=a}else e.eventRegistrations_=[];return r}function Li(e,t,n,r){t.type===nr.MERGE&&null!==t.source.queryId&&(Object(o["f"])(Sr(e.viewCache_),"We should always have a full cache before handling merges"),Object(o["f"])(Er(e.viewCache_),"Missing event cache, even though we have a server cache"));var i=e.viewCache_,a=_i(e.processor_,i,t,n,r);return gi(e.processor_,a.viewCache),Object(o["f"])(a.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,qi(e,a.changes,a.viewCache.eventCache.getNode(),null)}function Fi(e,t){var n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){var i=n.getNode();i.forEachChild(cn,(function(e,t){r.push(xn(e,t))}))}return n.isFullyInitialized()&&r.push(Nn(n.getNode())),qi(e,r,n.getNode(),t)}function qi(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return mr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui,Bi=function(){function e(){this.views=new Map}return e}();function Wi(e){Object(o["f"])(!Pi,"__referenceConstructor has already been defined"),Pi=e}function Ki(){return Object(o["f"])(Pi,"Reference.ts has not been loaded"),Pi}function Hi(e){return 0===e.views.size}function Vi(e,t,n,r){var i,s,u=t.source.queryId;if(null!==u){var c=e.views.get(u);return Object(o["f"])(null!=c,"SyncTree gave us an op for an invalid query."),Li(c,t,n,r)}var l=[];try{for(var h=Object(a["e"])(e.views.values()),f=h.next();!f.done;f=h.next()){c=f.value;l=l.concat(Li(c,t,n,r))}}catch(p){i={error:p}}finally{try{f&&!f.done&&(s=h.return)&&s.call(h)}finally{if(i)throw i.error}}return l}function zi(e,t,n,r,i){var o=t._queryIdentifier,a=e.views.get(o);if(!a){var s=ri(n,i?r:null),u=!1;s?u=!0:r instanceof vn?(s=ii(n,r),u=!1):(s=vn.EMPTY_NODE,u=!1);var c=Tr(new _r(s,u,!1),new _r(r,i,!1));return new Ni(t,c)}return a}function Gi(e,t,n,r,i,o){var a=zi(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,a),Di(a,n),Fi(a,n)}function Qi(e,t,n,r){var i,o,s=t._queryIdentifier,u=[],c=[],l=Zi(e);if("default"===s)try{for(var h=Object(a["e"])(e.views.entries()),f=h.next();!f.done;f=h.next()){var p=Object(a["c"])(f.value,2),d=p[0],v=p[1];c=c.concat(Mi(v,n,r)),Ai(v)&&(e.views.delete(d),v.query._queryParams.loadsAllData()||u.push(v.query))}}catch(g){i={error:g}}finally{try{f&&!f.done&&(o=h.return)&&o.call(h)}finally{if(i)throw i.error}}else{v=e.views.get(s);v&&(c=c.concat(Mi(v,n,r)),Ai(v)&&(e.views.delete(s),v.query._queryParams.loadsAllData()||u.push(v.query)))}return l&&!Zi(e)&&u.push(new(Ki())(t._repo,t._path)),{removed:u,events:c}}function Yi(e){var t,n,r=[];try{for(var i=Object(a["e"])(e.views.values()),o=i.next();!o.done;o=i.next()){var s=o.value;s.query._queryParams.loadsAllData()||r.push(s)}}catch(u){t={error:u}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}function $i(e,t){var n,r,i=null;try{for(var o=Object(a["e"])(e.views.values()),s=o.next();!s.done;s=o.next()){var u=s.value;i=i||ji(u,t)}}catch(c){n={error:c}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i}function Ji(e,t){var n=t._queryParams;if(n.loadsAllData())return eo(e);var r=t._queryIdentifier;return e.views.get(r)}function Xi(e,t){return null!=Ji(e,t)}function Zi(e){return null!=eo(e)}function eo(e){var t,n;try{for(var r=Object(a["e"])(e.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(s){t={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e){Object(o["f"])(!Ui,"__referenceConstructor has already been defined"),Ui=e}function no(){return Object(o["f"])(Ui,"Reference.ts has not been loaded"),Ui}var ro=1,io=function(){function e(e){this.listenProvider_=e,this.syncPointTree_=new Pr(null),this.pendingWriteTree_=ni(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return e}();function oo(e,t,n,r,i){return Wr(e.pendingWriteTree_,t,n,r,i),i?mo(e,new vr(cr(),t,n)):[]}function ao(e,t,n,r){Kr(e.pendingWriteTree_,t,n,r);var i=Pr.fromObject(n);return mo(e,new gr(cr(),t,i))}function so(e,t,n){void 0===n&&(n=!1);var r=Hr(e.pendingWriteTree_,t),i=Vr(e.pendingWriteTree_,t);if(i){var o=new Pr(null);return null!=r.snap?o=o.set(ct(),!0):L(r.children,(function(e){o=o.set(new ut(e),!0)})),mo(e,new pr(r.path,o,n))}return[]}function uo(e,t,n){return mo(e,new vr(lr(),t,n))}function co(e,t,n){var r=Pr.fromObject(n);return mo(e,new gr(lr(),t,r))}function lo(e,t){return mo(e,new dr(lr(),t))}function ho(e,t,n){var r=Io(e,n);if(r){var i=Eo(r),o=i.path,a=i.queryId,s=mt(o,t),u=new dr(hr(a),s);return So(e,o,u)}return[]}function fo(e,t,n,r){var i=t._path,o=e.syncPointTree_.get(i),a=[];if(o&&("default"===t._queryIdentifier||Xi(o,t))){var s=Qi(o,t,n,r);Hi(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));var u=s.removed;a=s.events;var c=-1!==u.findIndex((function(e){return e._queryParams.loadsAllData()})),l=e.syncPointTree_.findOnPath(i,(function(e,t){return Zi(t)}));if(c&&!l){var h=e.syncPointTree_.subtree(i);if(!h.isEmpty())for(var f=ko(h),p=0;p<f.length;++p){var d=f[p],v=d.query,g=Co(e,d);e.listenProvider_.startListening(Po(v),To(e,v),g.hashFn,g.onComplete)}}if(!l&&u.length>0&&!r)if(c){var _=null;e.listenProvider_.stopListening(Po(t),_)}else u.forEach((function(t){var n=e.queryToTagMap.get(Oo(t));e.listenProvider_.stopListening(Po(t),n)}));No(e,u)}return a}function po(e,t,n,r){var i=Io(e,r);if(null!=i){var o=Eo(i),a=o.path,s=o.queryId,u=mt(a,t),c=new vr(hr(s),u,n);return So(e,a,c)}return[]}function vo(e,t,n,r){var i=Io(e,r);if(i){var o=Eo(i),a=o.path,s=o.queryId,u=mt(a,t),c=Pr.fromObject(n),l=new gr(hr(s),u,c);return So(e,a,l)}return[]}function go(e,t,n){var r=t._path,i=null,a=!1;e.syncPointTree_.foreachOnPath(r,(function(e,t){var n=mt(e,r);i=i||$i(t,n),a=a||Zi(t)}));var s,u=e.syncPointTree_.get(r);if(u?(a=a||Zi(u),i=i||$i(u,ct())):(u=new Bi,e.syncPointTree_=e.syncPointTree_.set(r,u)),null!=i)s=!0;else{s=!1,i=vn.EMPTY_NODE;var c=e.syncPointTree_.subtree(r);c.foreachChild((function(e,t){var n=$i(t,ct());n&&(i=i.updateImmediateChild(e,n))}))}var l=Xi(u,t);if(!l&&!t._queryParams.loadsAllData()){var h=Oo(t);Object(o["f"])(!e.queryToTagMap.has(h),"View does not exist, but we have a tag");var f=xo();e.queryToTagMap.set(h,f),e.tagToQueryMap.set(f,h)}var p=Br(e.pendingWriteTree_,r),d=Gi(u,t,n,p,i,s);if(!l&&!a){var v=Ji(u,t);d=d.concat(Ro(e,t,v))}return d}function _o(e,t,n){var r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(function(e,n){var r=mt(e,t),i=$i(n,r);if(i)return i}));return $r(i,t,o,n,r)}function yo(e,t){var n=t._path,r=null;e.syncPointTree_.foreachOnPath(n,(function(e,t){var i=mt(e,n);r=r||$i(t,i)}));var i=e.syncPointTree_.get(n);i?r=r||$i(i,ct()):(i=new Bi,e.syncPointTree_=e.syncPointTree_.set(n,i));var o=null!=r,a=o?new _r(r,!0,!1):null,s=Br(e.pendingWriteTree_,t._path),u=zi(i,t,s,o?a.getNode():vn.EMPTY_NODE,o);return Ri(u)}function mo(e,t){return bo(t,e.syncPointTree_,null,Br(e.pendingWriteTree_,ct()))}function bo(e,t,n,r){if(yt(e.path))return wo(e,t,n,r);var i=t.get(ct());null==n&&null!=i&&(n=$i(i,ct()));var o=[],a=lt(e.path),s=e.operationForChild(a),u=t.children.get(a);if(u&&s){var c=n?n.getImmediateChild(a):null,l=ci(r,a);o=o.concat(bo(s,u,c,l))}return i&&(o=o.concat(Vi(i,e,r,n))),o}function wo(e,t,n,r){var i=t.get(ct());null==n&&null!=i&&(n=$i(i,ct()));var o=[];return t.children.inorderTraversal((function(t,i){var a=n?n.getImmediateChild(t):null,s=ci(r,t),u=e.operationForChild(t);u&&(o=o.concat(wo(u,i,a,s)))})),i&&(o=o.concat(Vi(i,e,r,n))),o}function Co(e,t){var n=t.query,r=To(e,n);return{hashFn:function(){var e=xi(t)||vn.EMPTY_NODE;return e.hash()},onComplete:function(t){if("ok"===t)return r?ho(e,n._path,r):lo(e,n._path);var i=B(t,n);return fo(e,n,null,i)}}}function To(e,t){var n=Oo(t);return e.queryToTagMap.get(n)}function Oo(e){return e._path.toString()+"$"+e._queryIdentifier}function Io(e,t){return e.tagToQueryMap.get(t)}function Eo(e){var t=e.indexOf("$");return Object(o["f"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function So(e,t,n){var r=e.syncPointTree_.get(t);Object(o["f"])(r,"Missing sync point for query tag that we're tracking");var i=Br(e.pendingWriteTree_,t);return Vi(r,n,i,null)}function ko(e){return e.fold((function(e,t,n){if(t&&Zi(t)){var r=eo(t);return[r]}var i=[];return t&&(i=Yi(t)),L(n,(function(e,t){i=i.concat(t)})),i}))}function Po(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(no())(e._repo,e._path):e}function No(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=Oo(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function xo(){return ro++}function Ro(e,t,n){var r=t._path,i=To(e,t),a=Co(e,n),s=e.listenProvider_.startListening(Po(t),i,a.hashFn,a.onComplete),u=e.syncPointTree_.subtree(r);if(i)Object(o["f"])(!Zi(u.value),"If we're adding a query, it shouldn't be shadowed");else for(var c=u.fold((function(e,t,n){if(!yt(e)&&t&&Zi(t))return[eo(t).query];var r=[];return t&&(r=r.concat(Yi(t).map((function(e){return e.query})))),L(n,(function(e,t){r=r.concat(t)})),r})),l=0;l<c.length;++l){var h=c[l];e.listenProvider_.stopListening(Po(h),To(e,h))}return s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jo=function(){function e(e){this.node_=e}return e.prototype.getImmediateChild=function(t){var n=this.node_.getImmediateChild(t);return new e(n)},e.prototype.node=function(){return this.node_},e}(),Ao=function(){function e(e,t){this.syncTree_=e,this.path_=t}return e.prototype.getImmediateChild=function(t){var n=_t(this.path_,t);return new e(this.syncTree_,n)},e.prototype.node=function(){return _o(this.syncTree_,this.path_)},e}(),Do=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Mo=function(e,t,n){return e&&"object"===typeof e?(Object(o["f"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Lo(e[".sv"],t,n):"object"===typeof e[".sv"]?Fo(e[".sv"],t):void Object(o["f"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Lo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(o["f"])(!1,"Unexpected server value: "+e)}},Fo=function(e,t,n){e.hasOwnProperty("increment")||Object(o["f"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e["increment"];"number"!==typeof r&&Object(o["f"])(!1,"Unexpected increment value: "+r);var i=t.node();if(Object(o["f"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i,s=a.getValue();return"number"!==typeof s?r:s+r},qo=function(e,t,n,r){return Bo(t,new Ao(n,e),r)},Uo=function(e,t,n){return Bo(e,new jo(t),n)};function Bo(e,t,n){var r,i=e.getPriority().val(),o=Mo(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var a=e,s=Mo(a.getValue(),t,n);return s!==a.getValue()||o!==a.getPriority().val()?new nn(s,mn(o)):e}var u=e;return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new nn(o))),u.forEachChild(cn,(function(e,i){var o=Bo(i,t.getImmediateChild(e),n);o!==i&&(r=r.updateImmediateChild(e,o))})),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wo=function(){function e(e,t,n){void 0===e&&(e=""),void 0===t&&(t=null),void 0===n&&(n={children:{},childCount:0}),this.name=e,this.parent=t,this.node=n}return e}();function Ko(e,t){var n=t instanceof ut?t:new ut(t),r=e,i=lt(n);while(null!==i){var a=Object(o["H"])(r.node.children,i)||{children:{},childCount:0};r=new Wo(i,r,a),n=ft(n),i=lt(n)}return r}function Ho(e){return e.node.value}function Vo(e,t){e.node.value=t,Xo(e)}function zo(e){return e.node.childCount>0}function Go(e){return void 0===Ho(e)&&!zo(e)}function Qo(e,t){L(e.node.children,(function(n,r){t(new Wo(n,e,r))}))}function Yo(e,t,n,r){n&&!r&&t(e),Qo(e,(function(e){Yo(e,t,!0,r)})),n&&r&&t(e)}function $o(e,t,n){var r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Jo(e){return new ut(null===e.parent?e.name:Jo(e.parent)+"/"+e.name)}function Xo(e){null!==e.parent&&Zo(e.parent,e.name,e)}function Zo(e,t,n){var r=Go(n),i=Object(o["k"])(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Xo(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Xo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ea=/[\[\].#$\/\u0000-\u001F\u007F]/,ta=/[\[\].#$\u0000-\u001F\u007F]/,na=10485760,ra=function(e){return"string"===typeof e&&0!==e.length&&!ea.test(e)},ia=function(e){return"string"===typeof e&&0!==e.length&&!ta.test(e)},oa=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ia(e)},aa=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!k(e)||e&&"object"===typeof e&&Object(o["k"])(e,".sv")},sa=function(e,t,n,r){r&&void 0===t||ua(Object(o["o"])(e,"value"),t,n)},ua=function(e,t,n){var r=n instanceof ut?new Tt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(r));if("function"===typeof t)throw new Error(e+"contains a function "+St(r)+" with contents = "+t.toString());if(k(t))throw new Error(e+"contains "+t.toString()+" "+St(r));if("string"===typeof t&&t.length>na/3&&Object(o["I"])(t)>na)throw new Error(e+"contains a string greater than "+na+" utf8 bytes "+St(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){var i=!1,a=!1;if(L(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!ra(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ot(r,t),ua(e,n,r),It(r)})),i&&a)throw new Error(e+' contains ".value" child '+St(r)+" in addition to actual children.")}},ca=function(e,t){var n,r;for(n=0;n<t.length;n++){r=t[n];for(var i=vt(r),o=0;o<i.length;o++)if(".priority"===i[o]&&o===i.length-1);else if(!ra(i[o]))throw new Error(e+"contains an invalid key ("+i[o]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(bt);var a=null;for(n=0;n<t.length;n++){if(r=t[n],null!==a&&Ct(a,r))throw new Error(e+"contains a path "+a.toString()+" that is ancestor of another path "+r.toString());a=r}},la=function(e,t,n,r){if(!r||void 0!==t){var i=Object(o["o"])(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");var a=[];L(t,(function(e,t){var r=new ut(e);if(ua(i,t,_t(n,r)),".priority"===pt(r)&&!aa(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(r)})),ca(i,a)}},ha=function(e,t,n){if(!n||void 0!==t){if(k(t))throw new Error(Object(o["o"])(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!aa(t))throw new Error(Object(o["o"])(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},fa=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Object(o["o"])(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},pa=function(e,t,n,r){if((!r||void 0!==n)&&!ra(n))throw new Error(Object(o["o"])(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},da=function(e,t,n,r){if((!r||void 0!==n)&&!ia(n))throw new Error(Object(o["o"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},va=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),da(e,t,n,r)},ga=function(e,t){if(".info"===lt(t))throw new Error(e+" failed = Can't modify data under /.info/")},_a=function(e,t){var n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!ra(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!oa(n))throw new Error(Object(o["o"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},ya=function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!==typeof n)throw new Error(Object(o["o"])(e,t)+"must be a boolean.")},ma=function(){function e(){this.eventLists_=[],this.recursionDepth_=0}return e}();function ba(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();null===n||wt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function wa(e,t,n){ba(e,n),Ta(e,(function(e){return wt(e,t)}))}function Ca(e,t,n){ba(e,n),Ta(e,(function(e){return Ct(e,t)||Ct(t,e)}))}function Ta(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i){var o=i.path;t(o)?(Oa(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Oa(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();m&&C("event: "+n.toString()),z(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ia="repo_interrupt",Ea=25,Sa=function(){function e(e,t,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ma,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jn(),this.transactionQueueTree_=new Wo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},e}();function ka(e,t,n){if(e.stats_=pe(e.repoInfo_),e.forceRestClient_||G())e.server_=new Yn(e.repoInfo_,(function(t,n,r,i){xa(e,t,n,r,i)}),e.authTokenProvider_),setTimeout((function(){return ja(e,!0)}),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o["K"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new qt(e.repoInfo_,t,(function(t,n,r,i){xa(e,t,n,r,i)}),(function(t){ja(e,t)}),(function(t){Aa(e,t)}),e.authTokenProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.statsReporter_=de(e.repoInfo_,(function(){return new sr(e.stats_,e.server_)})),e.infoData_=new $n,e.infoSyncTree_=new io({startListening:function(t,n,r,i){var o=[],a=e.infoData_.getNode(t._path);return a.isEmpty()||(o=uo(e.infoSyncTree_,t._path,a),setTimeout((function(){i("ok")}),0)),o},stopListening:function(){}}),Da(e,"connected",!1),e.serverSyncTree_=new io({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var o=i(n,r);Ca(e.eventQueue_,t._path,o)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function Pa(e){var t=e.infoData_.getNode(new ut(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Na(e){return Do({timestamp:Pa(e)})}function xa(e,t,n,r,i){e.dataUpdateCount++;var a=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var s=[];if(i)if(r){var u=Object(o["F"])(n,(function(e){return mn(e)}));s=vo(e.serverSyncTree_,a,u,i)}else{var c=mn(n);s=po(e.serverSyncTree_,a,c,i)}else if(r){var l=Object(o["F"])(n,(function(e){return mn(e)}));s=co(e.serverSyncTree_,a,l)}else{var h=mn(n);s=uo(e.serverSyncTree_,a,h)}var f=a;s.length>0&&(f=rs(e,a)),Ca(e.eventQueue_,f,s)}function Ra(e,t){e.interceptServerDataCallback_=t}function ja(e,t){Da(e,"connected",t),!1===t&&Ua(e)}function Aa(e,t){L(t,(function(t,n){Da(e,t,n)}))}function Da(e,t,n){var r=new ut("/.info/"+t),i=mn(n);e.infoData_.updateSnapshot(r,i);var o=uo(e.infoSyncTree_,r,i);Ca(e.eventQueue_,r,o)}function Ma(e){return e.nextWriteId_++}function La(e,t){var n=yo(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((function(n){var r=mn(n),i=uo(e.serverSyncTree_,t._path,r);return wa(e.eventQueue_,t._path,i),Promise.resolve(r)}),(function(n){return Ja(e,"get for query "+Object(o["K"])(t)+" failed: "+n),Promise.reject(new Error(n))}))}function Fa(e,t,n,r,i){Ja(e,"set",{path:t.toString(),value:n,priority:r});var o=Na(e),a=mn(n,r),s=_o(e.serverSyncTree_,t),u=Uo(a,s,o),c=Ma(e),l=oo(e.serverSyncTree_,t,u,c,!0);ba(e.eventQueue_,l),e.server_.put(t.toString(),a.val(!0),(function(n,r){var o="ok"===n;o||E("set at "+t+" failed: "+n);var a=so(e.serverSyncTree_,c,!o);Ca(e.eventQueue_,t,a),Xa(e,i,n,r)}));var h=cs(e,t);rs(e,h),Ca(e.eventQueue_,h,[])}function qa(e,t,n,r){Ja(e,"update",{path:t.toString(),value:n});var i=!0,o=Na(e),a={};if(L(n,(function(n,r){i=!1,a[n]=qo(_t(t,n),mn(r),e.serverSyncTree_,o)})),i)C("update() called with empty data.  Don't do anything."),Xa(e,r,"ok",void 0);else{var s=Ma(e),u=ao(e.serverSyncTree_,t,a,s);ba(e.eventQueue_,u),e.server_.merge(t.toString(),n,(function(n,i){var o="ok"===n;o||E("update at "+t+" failed: "+n);var a=so(e.serverSyncTree_,s,!o),u=a.length>0?rs(e,t):t;Ca(e.eventQueue_,u,a),Xa(e,r,n,i)})),L(n,(function(n){var r=cs(e,_t(t,n));rs(e,r)})),Ca(e.eventQueue_,t,[])}}function Ua(e){Ja(e,"onDisconnectEvents");var t=Na(e),n=Jn();er(e.onDisconnect_,ct(),(function(r,i){var o=qo(r,i,e.serverSyncTree_,t);Xn(n,r,o)}));var r=[];er(n,ct(),(function(t,n){r=r.concat(uo(e.serverSyncTree_,t,n));var i=cs(e,t);rs(e,i)})),e.onDisconnect_=Jn(),Ca(e.eventQueue_,ct(),r)}function Ba(e,t,n){e.server_.onDisconnectCancel(t.toString(),(function(r,i){"ok"===r&&Zn(e.onDisconnect_,t),Xa(e,n,r,i)}))}function Wa(e,t,n,r){var i=mn(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),(function(n,o){"ok"===n&&Xn(e.onDisconnect_,t,i),Xa(e,r,n,o)}))}function Ka(e,t,n,r,i){var o=mn(n,r);e.server_.onDisconnectPut(t.toString(),o.val(!0),(function(n,r){"ok"===n&&Xn(e.onDisconnect_,t,o),Xa(e,i,n,r)}))}function Ha(e,t,n,r){if(Object(o["v"])(n))return C("onDisconnect().update() called with empty data.  Don't do anything."),void Xa(e,r,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,(function(i,o){"ok"===i&&L(n,(function(n,r){var i=mn(r);Xn(e.onDisconnect_,_t(t,n),i)})),Xa(e,r,i,o)}))}function Va(e,t,n){var r;r=".info"===lt(t._path)?go(e.infoSyncTree_,t,n):go(e.serverSyncTree_,t,n),wa(e.eventQueue_,t._path,r)}function za(e,t,n){var r;r=".info"===lt(t._path)?fo(e.infoSyncTree_,t,n):fo(e.serverSyncTree_,t,n),wa(e.eventQueue_,t._path,r)}function Ga(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Ia)}function Qa(e){e.persistentConnection_&&e.persistentConnection_.resume(Ia)}function Ya(e,t){if(void 0===t&&(t=!1),"undefined"!==typeof console){var n;t?(e.statsListener_||(e.statsListener_=new rr(e.stats_)),n=e.statsListener_.get()):n=e.stats_.get();var r=Object.keys(n).reduce((function(e,t){return Math.max(t.length,e)}),0);L(n,(function(e,t){for(var n=e,i=e.length;i<r+2;i++)n+=" ";console.log(n+t)}))}}function $a(e,t){e.stats_.incrementCounter(t),ur(e.statsReporter_,t)}function Ja(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r="";e.persistentConnection_&&(r=e.persistentConnection_.id+":"),C.apply(void 0,Object(a["d"])([r],Object(a["c"])(t)))}function Xa(e,t,n,r){t&&z((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var o=new Error(i);o.code=e,t(o)}}))}function Za(e,t,n,r,i,a){Ja(e,"transaction on "+t);var s={path:t,update:n,onComplete:r,status:null,order:g(),applyLocally:a,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},u=es(e,t,void 0);s.currentInputSnapshot=u;var c=s.update(u.val());if(void 0===c)s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete&&s.onComplete(null,!1,s.currentInputSnapshot);else{ua("transaction failed: Data returned ",c,s.path),s.status=0;var l=Ko(e.transactionQueueTree_,t),h=Ho(l)||[];h.push(s),Vo(l,h);var f=void 0;if("object"===typeof c&&null!==c&&Object(o["k"])(c,".priority"))f=Object(o["H"])(c,".priority"),Object(o["f"])(aa(f),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{var p=_o(e.serverSyncTree_,t)||vn.EMPTY_NODE;f=p.getPriority().val()}var d=Na(e),v=mn(c,f),_=Uo(v,u,d);s.currentOutputSnapshotRaw=v,s.currentOutputSnapshotResolved=_,s.currentWriteId=Ma(e);var y=oo(e.serverSyncTree_,t,_,s.currentWriteId,s.applyLocally);Ca(e.eventQueue_,t,y),ts(e,e.transactionQueueTree_)}}function es(e,t,n){return _o(e.serverSyncTree_,t,n)||vn.EMPTY_NODE}function ts(e,t){if(void 0===t&&(t=e.transactionQueueTree_),t||us(e,t),Ho(t)){var n=as(e,t);Object(o["f"])(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&ns(e,Jo(t),n)}else zo(t)&&Qo(t,(function(t){ts(e,t)}))}function ns(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=es(e,t,r),a=i,s=i.hash(),u=0;u<n.length;u++){var c=n[u];Object(o["f"])(0===c.status,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;var l=mt(t,c.path);a=a.updateChild(l,c.currentOutputSnapshotRaw)}var h=a.val(!0),f=t;e.server_.put(f.toString(),h,(function(r){Ja(e,"transaction put response",{path:f.toString(),status:r});var i=[];if("ok"===r){for(var o=[],a=function(t){n[t].status=2,i=i.concat(so(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},s=0;s<n.length;s++)a(s);us(e,Ko(e.transactionQueueTree_,t)),ts(e,e.transactionQueueTree_),Ca(e.eventQueue_,t,i);for(s=0;s<o.length;s++)z(o[s])}else{if("datastale"===r)for(s=0;s<n.length;s++)3===n[s].status?n[s].status=4:n[s].status=0;else{E("transaction at "+f.toString()+" failed: "+r);for(s=0;s<n.length;s++)n[s].status=4,n[s].abortReason=r}rs(e,t)}}),s)}function rs(e,t){var n=os(e,t),r=Jo(n),i=as(e,n);return is(e,i,r),r}function is(e,t,n){if(0!==t.length){for(var r=[],i=[],a=t.filter((function(e){return 0===e.status})),s=a.map((function(e){return e.currentWriteId})),u=function(a){var u,c=t[a],l=mt(n,c.path),h=!1;if(Object(o["f"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,i=i.concat(so(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=Ea)h=!0,u="maxretry",i=i.concat(so(e.serverSyncTree_,c.currentWriteId,!0));else{var f=es(e,c.path,s);c.currentInputSnapshot=f;var p=t[a].update(f.val());if(void 0!==p){ua("transaction failed: Data returned ",p,c.path);var d=mn(p),v="object"===typeof p&&null!=p&&Object(o["k"])(p,".priority");v||(d=d.updatePriority(f.getPriority()));var g=c.currentWriteId,_=Na(e),y=Uo(d,f,_);c.currentOutputSnapshotRaw=d,c.currentOutputSnapshotResolved=y,c.currentWriteId=Ma(e),s.splice(s.indexOf(g),1),i=i.concat(oo(e.serverSyncTree_,c.path,y,c.currentWriteId,c.applyLocally)),i=i.concat(so(e.serverSyncTree_,g,!0))}else h=!0,u="nodata",i=i.concat(so(e.serverSyncTree_,c.currentWriteId,!0))}Ca(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,function(e){setTimeout(e,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&("nodata"===u?r.push((function(){return t[a].onComplete(null,!1,t[a].currentInputSnapshot)})):r.push((function(){return t[a].onComplete(new Error(u),!1,null)}))))},c=0;c<t.length;c++)u(c);us(e,e.transactionQueueTree_);for(c=0;c<r.length;c++)z(r[c]);ts(e,e.transactionQueueTree_)}}function os(e,t){var n,r=e.transactionQueueTree_;n=lt(t);while(null!==n&&void 0===Ho(r))r=Ko(r,n),t=ft(t),n=lt(t);return r}function as(e,t){var n=[];return ss(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function ss(e,t,n){var r=Ho(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Qo(t,(function(t){ss(e,t,n)}))}function us(e,t){var n=Ho(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Vo(t,n.length>0?n:void 0)}Qo(t,(function(t){us(e,t)}))}function cs(e,t){var n=Jo(os(e,t)),r=Ko(e.transactionQueueTree_,t);return $o(r,(function(t){ls(e,t)})),ls(e,r),Yo(r,(function(t){ls(e,t)})),n}function ls(e,t){var n=Ho(t);if(n){for(var r=[],i=[],a=-1,s=0;s<n.length;s++)3===n[s].status||(1===n[s].status?(Object(o["f"])(a===s-1,"All SENT items should be at beginning of queue."),a=s,n[s].status=3,n[s].abortReason="set"):(Object(o["f"])(0===n[s].status,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(so(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));-1===a?Vo(t,void 0):n.length=a+1,Ca(e.eventQueue_,Jo(t),i);for(s=0;s<r.length;s++)z(r[s])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(o){}t+="/"+i}return t}function fs(e){var t,n,r={};"?"===e.charAt(0)&&(e=e.substring(1));try{for(var i=Object(a["e"])(e.split("&")),o=i.next();!o.done;o=i.next()){var s=o.value;if(0!==s.length){var u=s.split("=");2===u.length?r[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):E("Invalid query segment '"+s+"' in query '"+e+"'")}}}catch(c){t={error:c}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}var ps=function(e,t){var n=ds(e),r=n.namespace;"firebase.com"===n.domain&&I(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||I("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S();var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new se(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new ut(n.pathString)}},ds=function(e){var t="",n="",r="",i="",o="",a=!0,s="https",u=443;if("string"===typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=hs(e.substring(l,h)));var f=fs(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(a="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{var d=t.indexOf(".");r=t.substring(0,d).toLowerCase(),n=t.substring(d+1),o=r}"ns"in f&&(o=f["ns"])}return{host:t,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}},vs=function(){function e(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}return e.prototype.getPath=function(){var e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path},e.prototype.getEventType=function(){return this.eventType},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+Object(o["K"])(this.snapshot.exportVal())},e}(),gs=function(){function e(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}return e.prototype.getPath=function(){return this.path},e.prototype.getEventType=function(){return"cancel"},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.path.toString()+":cancel"},e}(),_s=function(){function e(e,t){this.snapshotCallback=e,this.cancelCallback=t}return e.prototype.onValue=function(e,t){this.snapshotCallback.call(null,e,t)},e.prototype.onCancel=function(e){return Object(o["f"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)},Object.defineProperty(e.prototype,"hasCancelCallback",{get:function(){return!!this.cancelCallback},enumerable:!1,configurable:!0}),e.prototype.matches=function(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context},e}(),ys=function(){function e(e,t){this._repo=e,this._path=t}return e.prototype.cancel=function(){var e=new o["a"];return Ba(this._repo,this._path,e.wrapCallback((function(){}))),e.promise},e.prototype.remove=function(){ga("OnDisconnect.remove",this._path);var e=new o["a"];return Wa(this._repo,this._path,null,e.wrapCallback((function(){}))),e.promise},e.prototype.set=function(e){ga("OnDisconnect.set",this._path),sa("OnDisconnect.set",e,this._path,!1);var t=new o["a"];return Wa(this._repo,this._path,e,t.wrapCallback((function(){}))),t.promise},e.prototype.setWithPriority=function(e,t){ga("OnDisconnect.setWithPriority",this._path),sa("OnDisconnect.setWithPriority",e,this._path,!1),ha("OnDisconnect.setWithPriority",t,!1);var n=new o["a"];return Ka(this._repo,this._path,e,t,n.wrapCallback((function(){}))),n.promise},e.prototype.update=function(e){ga("OnDisconnect.update",this._path),la("OnDisconnect.update",e,this._path,!1);var t=new o["a"];return Ha(this._repo,this._path,e,t.wrapCallback((function(){}))),t.promise},e}(),ms=function(){function e(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}return Object.defineProperty(e.prototype,"key",{get:function(){return yt(this._path)?null:pt(this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ref",{get:function(){return new Ts(this._repo,this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_queryIdentifier",{get:function(){var e=Qn(this._queryParams),t=D(e);return"{}"===t?"default":t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_queryObject",{get:function(){return Qn(this._queryParams)},enumerable:!1,configurable:!0}),e.prototype.isEqual=function(t){if(t=Object(o["p"])(t),!(t instanceof e))return!1;var n=this._repo===t._repo,r=wt(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i},e.prototype.toJSON=function(){return this.toString()},e.prototype.toString=function(){return this._repo.toString()+dt(this._path)},e}();function bs(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function ws(e){var t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Kt){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){var a=e.getIndexStartName();if(a!==N)throw new Error(r);if("string"!==typeof t)throw new Error(i)}if(e.hasEnd()){var s=e.getIndexEndName();if(s!==x)throw new Error(r);if("string"!==typeof n)throw new Error(i)}}else if(e.getIndex()===cn){if(null!=t&&!aa(t)||null!=n&&!aa(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(o["f"])(e.getIndex()instanceof bn||e.getIndex()===Cn,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Cs(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}var Ts=function(e){function t(t,n){return e.call(this,t,n,new Fn,!1)||this}return Object(a["b"])(t,e),Object.defineProperty(t.prototype,"parent",{get:function(){var e=gt(this._path);return null===e?null:new t(this._repo,e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){var e=this;while(null!==e.parent)e=e.parent;return e},enumerable:!1,configurable:!0}),t}(ms),Os=function(){function e(e,t,n){this._node=e,this.ref=t,this._index=n}return Object.defineProperty(e.prototype,"priority",{get:function(){return this._node.getPriority().val()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this.ref.key},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._node.numChildren()},enumerable:!1,configurable:!0}),e.prototype.child=function(t){var n=new ut(t),r=Ss(this.ref,t);return new e(this._node.getChild(n),r,cn)},e.prototype.exists=function(){return!this._node.isEmpty()},e.prototype.exportVal=function(){return this._node.val(!0)},e.prototype.forEach=function(t){var n=this;if(this._node.isLeafNode())return!1;var r=this._node;return!!r.forEachChild(this._index,(function(r,i){return t(new e(i,Ss(n.ref,r),cn))}))},e.prototype.hasChild=function(e){var t=new ut(e);return!this._node.getChild(t).isEmpty()},e.prototype.hasChildren=function(){return!this._node.isLeafNode()&&!this._node.isEmpty()},e.prototype.toJSON=function(){return this.exportVal()},e.prototype.val=function(){return this._node.val()},e}();function Is(e,t){return e=Object(o["p"])(e),e._checkNotDeleted("ref"),void 0!==t?Ss(e._root,t):e._root}function Es(e,t){e=Object(o["p"])(e),e._checkNotDeleted("refFromURL");var n=ps(t,e._repo.repoInfo_.nodeAdmin);_a("refFromURL",n);var r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||I("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),Is(e,n.path.toString())}function Ss(e,t){return e=Object(o["p"])(e),null===lt(e._path)?va("child","path",t,!1):da("child","path",t,!1),new Ts(e._repo,_t(e._path,t))}function ks(e,t){e=Object(o["p"])(e),ga("push",e._path),sa("push",t,e._path,!0);var n,r=Pa(e._repo),i=Sn(r),a=Ss(e,i),s=Ss(e,i);return n=null!=t?Ns(s,t).then((function(){return s})):Promise.resolve(s),a.then=n.then.bind(n),a.catch=n.then.bind(n,void 0),a}function Ps(e){return ga("remove",e._path),Ns(e,null)}function Ns(e,t){e=Object(o["p"])(e),ga("set",e._path),sa("set",t,e._path,!1);var n=new o["a"];return Fa(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}function xs(e,t){e=Object(o["p"])(e),ga("setPriority",e._path),ha("setPriority",t,!1);var n=new o["a"];return Fa(e._repo,_t(e._path,".priority"),t,null,n.wrapCallback((function(){}))),n.promise}function Rs(e,t,n){if(ga("setWithPriority",e._path),sa("setWithPriority",t,e._path,!1),ha("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";var r=new o["a"];return Fa(e._repo,e._path,t,n,r.wrapCallback((function(){}))),r.promise}function js(e,t){la("update",t,e._path,!1);var n=new o["a"];return qa(e._repo,e._path,t,n.wrapCallback((function(){}))),n.promise}function As(e){return e=Object(o["p"])(e),La(e._repo,e).then((function(t){return new Os(t,new Ts(e._repo,e._path),e._queryParams.getIndex())}))}var Ds=function(){function e(e){this.callbackContext=e}return e.prototype.respondsTo=function(e){return"value"===e},e.prototype.createEvent=function(e,t){var n=t._queryParams.getIndex();return new vs("value",this,new Os(e.snapshotNode,new Ts(t._repo,t._path),n))},e.prototype.getEventRunner=function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,null)}},e.prototype.createCancelEvent=function(e,t){return this.callbackContext.hasCancelCallback?new gs(this,e,t):null},e.prototype.matches=function(t){return t instanceof e&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))},e.prototype.hasAnyCallback=function(){return null!==this.callbackContext},e}(),Ms=function(){function e(e){this.callbacks=e}return e.prototype.respondsTo=function(e){var t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,Object(o["k"])(this.callbacks,t)},e.prototype.createCancelEvent=function(e,t){return this.callbacks["cancel"].hasCancelCallback?new gs(this,e,t):null},e.prototype.createEvent=function(e,t){Object(o["f"])(null!=e.childName,"Child events should have a childName.");var n=Ss(new Ts(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new vs(e.type,this,new Os(e.snapshotNode,n,r),e.prevName)},e.prototype.getEventRunner=function(e){if("cancel"===e.getEventType()){var t=this.callbacks["cancel"];return function(){return t.onCancel(e.error)}}var n=this.callbacks[e.eventType];return function(){return n.onValue(e.snapshot,e.prevName)}},e.prototype.matches=function(t){var n=this;if(t instanceof e){if(!this.callbacks||!t.callbacks)return!0;var r=Object.keys(t.callbacks),i=Object.keys(this.callbacks),o=r.length,a=i.length;if(o===a){if(1===o){var s=r[0],u=i[0];return u===s&&(!t.callbacks[s]||!this.callbacks[u]||t.callbacks[s].matches(this.callbacks[u]))}return i.every((function(e){return t.callbacks[e].matches(n.callbacks[e])}))}}return!1},e.prototype.hasAnyCallback=function(){return null!==this.callbacks},e}();function Ls(e,t,n,r,i){var o,a;if("object"===typeof r&&(a=void 0,i=r),"function"===typeof r&&(a=r),i&&i.onlyOnce){var s=n,u=function(t,n){s(t,n),za(e._repo,e,l)};u.userCallback=n.userCallback,u.context=n.context,n=u}var c=new _s(n,a||void 0),l="value"===t?new Ds(c):new Ms((o={},o[t]=c,o));return Va(e._repo,e,l),function(){return za(e._repo,e,l)}}function Fs(e,t,n,r){return Ls(e,"value",t,n,r)}function qs(e,t,n,r){return Ls(e,"child_added",t,n,r)}function Us(e,t,n,r){return Ls(e,"child_changed",t,n,r)}function Bs(e,t,n,r){return Ls(e,"child_moved",t,n,r)}function Ws(e,t,n,r){return Ls(e,"child_removed",t,n,r)}function Ks(e,t,n){var r=null,i=null,o=n?new _s(n):null;"value"===t?r=new Ds(o):t&&(n&&(i={},i[t]=o),r=new Ms(i)),za(e._repo,e,r)}var Hs=function(){function e(){}return e}(),Vs=function(e){function t(t,n){var r=e.call(this)||this;return r._value=t,r._key=n,r}return Object(a["b"])(t,e),t.prototype._apply=function(e){sa("endAt",this._value,e._path,!0);var t=Hn(e._queryParams,this._value,this._key);if(Cs(t),ws(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ms(e._repo,e._path,t,e._orderByCalled)},t}(Hs);function zs(e,t){return pa("endAt","key",t,!0),new Vs(e,t)}var Gs=function(e){function t(t,n){var r=e.call(this)||this;return r._value=t,r._key=n,r}return Object(a["b"])(t,e),t.prototype._apply=function(e){sa("endBefore",this._value,e._path,!1);var t=Vn(e._queryParams,this._value,this._key);if(Cs(t),ws(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ms(e._repo,e._path,t,e._orderByCalled)},t}(Hs);function Qs(e,t){return pa("endBefore","key",t,!0),new Gs(e,t)}var Ys=function(e){function t(t,n){var r=e.call(this)||this;return r._value=t,r._key=n,r}return Object(a["b"])(t,e),t.prototype._apply=function(e){sa("startAt",this._value,e._path,!0);var t=Wn(e._queryParams,this._value,this._key);if(Cs(t),ws(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ms(e._repo,e._path,t,e._orderByCalled)},t}(Hs);function $s(e,t){return void 0===e&&(e=null),pa("startAt","key",t,!0),new Ys(e,t)}var Js=function(e){function t(t,n){var r=e.call(this)||this;return r._value=t,r._key=n,r}return Object(a["b"])(t,e),t.prototype._apply=function(e){sa("startAfter",this._value,e._path,!1);var t=Kn(e._queryParams,this._value,this._key);if(Cs(t),ws(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ms(e._repo,e._path,t,e._orderByCalled)},t}(Hs);function Xs(e,t){return pa("startAfter","key",t,!0),new Js(e,t)}var Zs=function(e){function t(t){var n=e.call(this)||this;return n._limit=t,n}return Object(a["b"])(t,e),t.prototype._apply=function(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ms(e._repo,e._path,Un(e._queryParams,this._limit),e._orderByCalled)},t}(Hs);function eu(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Zs(e)}var tu=function(e){function t(t){var n=e.call(this)||this;return n._limit=t,n}return Object(a["b"])(t,e),t.prototype._apply=function(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ms(e._repo,e._path,Bn(e._queryParams,this._limit),e._orderByCalled)},t}(Hs);function nu(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new tu(e)}var ru=function(e){function t(t){var n=e.call(this)||this;return n._path=t,n}return Object(a["b"])(t,e),t.prototype._apply=function(e){bs(e,"orderByChild");var t=new ut(this._path);if(yt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");var n=new bn(t),r=zn(e._queryParams,n);return ws(r),new ms(e._repo,e._path,r,!0)},t}(Hs);function iu(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return da("orderByChild","path",e,!1),new ru(e)}var ou=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a["b"])(t,e),t.prototype._apply=function(e){bs(e,"orderByKey");var t=zn(e._queryParams,Kt);return ws(t),new ms(e._repo,e._path,t,!0)},t}(Hs);function au(){return new ou}var su=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a["b"])(t,e),t.prototype._apply=function(e){bs(e,"orderByPriority");var t=zn(e._queryParams,cn);return ws(t),new ms(e._repo,e._path,t,!0)},t}(Hs);function uu(){return new su}var cu=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a["b"])(t,e),t.prototype._apply=function(e){bs(e,"orderByValue");var t=zn(e._queryParams,Cn);return ws(t),new ms(e._repo,e._path,t,!0)},t}(Hs);function lu(){return new cu}var hu=function(e){function t(t,n){var r=e.call(this)||this;return r._value=t,r._key=n,r}return Object(a["b"])(t,e),t.prototype._apply=function(e){if(sa("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Vs(this._value,this._key)._apply(new Ys(this._value,this._key)._apply(e))},t}(Hs);function fu(e,t){return pa("equalTo","key",t,!0),new hu(e,t)}function pu(e){for(var t,n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var s=Object(o["p"])(e);try{for(var u=Object(a["e"])(r),c=u.next();!c.done;c=u.next()){var l=c.value;s=l._apply(s)}}catch(h){t={error:h}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return s}Wi(Ts),to(Ts);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var du="FIREBASE_DATABASE_EMULATOR_HOST",vu={},gu=!1;function _u(e,t,n){e.repoInfo_=new se(t+":"+n,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),e.repoInfo_.nodeAdmin&&(e.authTokenProvider_=new $)}function yu(t,n,r,i){var o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||I("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),C("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");var a,s=ps(o,i),u=s.repoInfo,c=void 0;"undefined"!==typeof e&&(c=Object({NODE_ENV:"production",BASE_URL:"/"})[du]),c?(a=!0,o="http://"+c+"?ns="+u.namespace,s=ps(o,i),u=s.repoInfo):a=!s.repoInfo.secure;var l=i&&a?new $:new Y(t.name,t.options,n);_a("Invalid Firebase Database URL",s),yt(s.path)||I("Database URL must point to the root of a Firebase Database (not including a child path).");var h=bu(u,t,l);return new Cu(h,t)}function mu(e,t){var n=vu[t];n&&n[e.key]===e||I("Database "+t+"("+e.repoInfo_+") has already been deleted."),Ga(e),delete n[e.key]}function bu(e,t,n){var r=vu[t.name];r||(r={},vu[t.name]=r);var i=r[e.toURLString()];return i&&I("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Sa(e,gu,n),r[e.toURLString()]=i,i}function wu(e){gu=e}var Cu=function(){function e(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}return Object.defineProperty(e.prototype,"_repo",{get:function(){return this._instanceStarted||(ka(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_root",{get:function(){return this._rootInternal||(this._rootInternal=new Ts(this._repo,ct())),this._rootInternal},enumerable:!1,configurable:!0}),e.prototype._delete=function(){return this._checkNotDeleted("delete"),mu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null,Promise.resolve()},e.prototype._checkNotDeleted=function(e){null===this._rootInternal&&I("Cannot call "+e+" on a deleted database.")},e}();function Tu(e,t,n){e=Object(o["p"])(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&I("Cannot call useEmulator() after instance has already been initialized."),_u(e._repo,t,n)}function Ou(e){e=Object(o["p"])(e),e._checkNotDeleted("goOffline"),Ga(e._repo)}function Iu(e){e=Object(o["p"])(e),e._checkNotDeleted("goOnline"),Qa(e._repo)}function Eu(e,t){w(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Su={".sv":"timestamp"};function ku(){return Su}function Pu(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nu=function(){function e(e,t){this.committed=e,this.snapshot=t}return e.prototype.toJSON=function(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}();function xu(e,t,n){var r;if(e=Object(o["p"])(e),ga("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";var i=null===(r=null===n||void 0===n?void 0:n.applyLocally)||void 0===r||r,a=new o["a"],s=function(t,n,r){var i=null;t?a.reject(t):(i=new Os(r,new Ts(e._repo,e._path),cn),a.resolve(new Nu(n,i)))},u=Fs(e,(function(){}));return Za(e._repo,e._path,t,s,u,i),a.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ru=function(){function e(e){this._delegate=e}return e.prototype.cancel=function(e){Object(o["L"])("OnDisconnect.cancel",0,1,arguments.length),Object(o["M"])("OnDisconnect.cancel","onComplete",e,!0);var t=this._delegate.cancel();return e&&t.then((function(){return e(null)}),(function(t){return e(t)})),t},e.prototype.remove=function(e){Object(o["L"])("OnDisconnect.remove",0,1,arguments.length),Object(o["M"])("OnDisconnect.remove","onComplete",e,!0);var t=this._delegate.remove();return e&&t.then((function(){return e(null)}),(function(t){return e(t)})),t},e.prototype.set=function(e,t){Object(o["L"])("OnDisconnect.set",1,2,arguments.length),Object(o["M"])("OnDisconnect.set","onComplete",t,!0);var n=this._delegate.set(e);return t&&n.then((function(){return t(null)}),(function(e){return t(e)})),n},e.prototype.setWithPriority=function(e,t,n){Object(o["L"])("OnDisconnect.setWithPriority",2,3,arguments.length),Object(o["M"])("OnDisconnect.setWithPriority","onComplete",n,!0);var r=this._delegate.setWithPriority(e,t);return n&&r.then((function(){return n(null)}),(function(e){return n(e)})),r},e.prototype.update=function(e,t){if(Object(o["L"])("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){for(var n={},r=0;r<e.length;++r)n[""+r]=e[r];e=n,E("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(o["M"])("OnDisconnect.update","onComplete",t,!0);var i=this._delegate.update(e);return t&&i.then((function(){return t(null)}),(function(e){return t(e)})),i},e}(),ju=function(){function e(e,t){this.committed=e,this.snapshot=t}return e.prototype.toJSON=function(){return Object(o["L"])("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}(),Au=function(){function e(e,t){this._database=e,this._delegate=t}return e.prototype.val=function(){return Object(o["L"])("DataSnapshot.val",0,0,arguments.length),this._delegate.val()},e.prototype.exportVal=function(){return Object(o["L"])("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()},e.prototype.toJSON=function(){return Object(o["L"])("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()},e.prototype.exists=function(){return Object(o["L"])("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()},e.prototype.child=function(t){return Object(o["L"])("DataSnapshot.child",0,1,arguments.length),t=String(t),da("DataSnapshot.child","path",t,!1),new e(this._database,this._delegate.child(t))},e.prototype.hasChild=function(e){return Object(o["L"])("DataSnapshot.hasChild",1,1,arguments.length),da("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)},e.prototype.getPriority=function(){return Object(o["L"])("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority},e.prototype.forEach=function(t){var n=this;return Object(o["L"])("DataSnapshot.forEach",1,1,arguments.length),Object(o["M"])("DataSnapshot.forEach","action",t,!1),this._delegate.forEach((function(r){return t(new e(n._database,r))}))},e.prototype.hasChildren=function(){return Object(o["L"])("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()},Object.defineProperty(e.prototype,"key",{get:function(){return this._delegate.key},enumerable:!1,configurable:!0}),e.prototype.numChildren=function(){return Object(o["L"])("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size},e.prototype.getRef=function(){return Object(o["L"])("DataSnapshot.ref",0,0,arguments.length),new Mu(this._database,this._delegate.ref)},Object.defineProperty(e.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),e}(),Du=function(){function e(e,t){this.database=e,this._delegate=t}return e.prototype.on=function(t,n,r,i){var a,s=this;Object(o["L"])("Query.on",2,4,arguments.length),Object(o["M"])("Query.on","callback",n,!1);var u=e.getCancelAndContextArgs_("Query.on",r,i),c=function(e,t){n.call(u.context,new Au(s.database,e),t)};c.userCallback=n,c.context=u.context;var l=null===(a=u.cancel)||void 0===a?void 0:a.bind(u.context);switch(t){case"value":return Fs(this._delegate,c,l),n;case"child_added":return qs(this._delegate,c,l),n;case"child_removed":return Ws(this._delegate,c,l),n;case"child_changed":return Us(this._delegate,c,l),n;case"child_moved":return Bs(this._delegate,c,l),n;default:throw new Error(Object(o["o"])("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},e.prototype.off=function(e,t,n){if(Object(o["L"])("Query.off",0,3,arguments.length),fa("Query.off",e,!0),Object(o["M"])("Query.off","callback",t,!0),Object(o["N"])("Query.off","context",n,!0),t){var r=function(){};r.userCallback=t,r.context=n,Ks(this._delegate,e,r)}else Ks(this._delegate,e)},e.prototype.get=function(){var e=this;return As(this._delegate).then((function(t){return new Au(e.database,t)}))},e.prototype.once=function(t,n,r,i){var a=this;Object(o["L"])("Query.once",1,4,arguments.length),Object(o["M"])("Query.once","callback",n,!0);var s=e.getCancelAndContextArgs_("Query.on",r,i),u=new o["a"],c=function(e,t){var r=new Au(a.database,e);n&&n.call(s.context,r,t),u.resolve(r)};c.userCallback=n,c.context=s.context;var l=function(e){s.cancel&&s.cancel.call(s.context,e),u.reject(e)};switch(t){case"value":Fs(this._delegate,c,l,{onlyOnce:!0});break;case"child_added":qs(this._delegate,c,l,{onlyOnce:!0});break;case"child_removed":Ws(this._delegate,c,l,{onlyOnce:!0});break;case"child_changed":Us(this._delegate,c,l,{onlyOnce:!0});break;case"child_moved":Bs(this._delegate,c,l,{onlyOnce:!0});break;default:throw new Error(Object(o["o"])("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return u.promise},e.prototype.limitToFirst=function(t){return Object(o["L"])("Query.limitToFirst",1,1,arguments.length),new e(this.database,pu(this._delegate,eu(t)))},e.prototype.limitToLast=function(t){return Object(o["L"])("Query.limitToLast",1,1,arguments.length),new e(this.database,pu(this._delegate,nu(t)))},e.prototype.orderByChild=function(t){return Object(o["L"])("Query.orderByChild",1,1,arguments.length),new e(this.database,pu(this._delegate,iu(t)))},e.prototype.orderByKey=function(){return Object(o["L"])("Query.orderByKey",0,0,arguments.length),new e(this.database,pu(this._delegate,au()))},e.prototype.orderByPriority=function(){return Object(o["L"])("Query.orderByPriority",0,0,arguments.length),new e(this.database,pu(this._delegate,uu()))},e.prototype.orderByValue=function(){return Object(o["L"])("Query.orderByValue",0,0,arguments.length),new e(this.database,pu(this._delegate,lu()))},e.prototype.startAt=function(t,n){return void 0===t&&(t=null),Object(o["L"])("Query.startAt",0,2,arguments.length),new e(this.database,pu(this._delegate,$s(t,n)))},e.prototype.startAfter=function(t,n){return void 0===t&&(t=null),Object(o["L"])("Query.startAfter",0,2,arguments.length),new e(this.database,pu(this._delegate,Xs(t,n)))},e.prototype.endAt=function(t,n){return void 0===t&&(t=null),Object(o["L"])("Query.endAt",0,2,arguments.length),new e(this.database,pu(this._delegate,zs(t,n)))},e.prototype.endBefore=function(t,n){return void 0===t&&(t=null),Object(o["L"])("Query.endBefore",0,2,arguments.length),new e(this.database,pu(this._delegate,Qs(t,n)))},e.prototype.equalTo=function(t,n){return Object(o["L"])("Query.equalTo",1,2,arguments.length),new e(this.database,pu(this._delegate,fu(t,n)))},e.prototype.toString=function(){return Object(o["L"])("Query.toString",0,0,arguments.length),this._delegate.toString()},e.prototype.toJSON=function(){return Object(o["L"])("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()},e.prototype.isEqual=function(t){if(Object(o["L"])("Query.isEqual",1,1,arguments.length),!(t instanceof e)){var n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(t._delegate)},e.getCancelAndContextArgs_=function(e,t,n){var r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,Object(o["M"])(e,"cancel",r.cancel,!0),r.context=n,Object(o["N"])(e,"context",r.context,!0);else if(t)if("object"===typeof t&&null!==t)r.context=t;else{if("function"!==typeof t)throw new Error(Object(o["o"])(e,"cancelOrContext")+" must either be a cancel callback or a context object.");r.cancel=t}return r},Object.defineProperty(e.prototype,"ref",{get:function(){return new Mu(this.database,new Ts(this._delegate._repo,this._delegate._path))},enumerable:!1,configurable:!0}),e}(),Mu=function(e){function t(t,n){var r=e.call(this,t,new ms(n._repo,n._path,new Fn,!1))||this;return r.database=t,r._delegate=n,r}return Object(a["b"])(t,e),t.prototype.getKey=function(){return Object(o["L"])("Reference.key",0,0,arguments.length),this._delegate.key},t.prototype.child=function(e){return Object(o["L"])("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new t(this.database,Ss(this._delegate,e))},t.prototype.getParent=function(){Object(o["L"])("Reference.parent",0,0,arguments.length);var e=this._delegate.parent;return e?new t(this.database,e):null},t.prototype.getRoot=function(){return Object(o["L"])("Reference.root",0,0,arguments.length),new t(this.database,this._delegate.root)},t.prototype.set=function(e,t){Object(o["L"])("Reference.set",1,2,arguments.length),Object(o["M"])("Reference.set","onComplete",t,!0);var n=Ns(this._delegate,e);return t&&n.then((function(){return t(null)}),(function(e){return t(e)})),n},t.prototype.update=function(e,t){if(Object(o["L"])("Reference.update",1,2,arguments.length),Array.isArray(e)){for(var n={},r=0;r<e.length;++r)n[""+r]=e[r];e=n,E("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ga("Reference.update",this._delegate._path),Object(o["M"])("Reference.update","onComplete",t,!0);var i=js(this._delegate,e);return t&&i.then((function(){return t(null)}),(function(e){return t(e)})),i},t.prototype.setWithPriority=function(e,t,n){Object(o["L"])("Reference.setWithPriority",2,3,arguments.length),Object(o["M"])("Reference.setWithPriority","onComplete",n,!0);var r=Rs(this._delegate,e,t);return n&&r.then((function(){return n(null)}),(function(e){return n(e)})),r},t.prototype.remove=function(e){Object(o["L"])("Reference.remove",0,1,arguments.length),Object(o["M"])("Reference.remove","onComplete",e,!0);var t=Ps(this._delegate);return e&&t.then((function(){return e(null)}),(function(t){return e(t)})),t},t.prototype.transaction=function(e,t,n){var r=this;Object(o["L"])("Reference.transaction",1,3,arguments.length),Object(o["M"])("Reference.transaction","transactionUpdate",e,!1),Object(o["M"])("Reference.transaction","onComplete",t,!0),ya("Reference.transaction","applyLocally",n,!0);var i=xu(this._delegate,e,{applyLocally:n}).then((function(e){return new ju(e.committed,new Au(r.database,e.snapshot))}));return t&&i.then((function(e){return t(null,e.committed,e.snapshot)}),(function(e){return t(e,!1,null)})),i},t.prototype.setPriority=function(e,t){Object(o["L"])("Reference.setPriority",1,2,arguments.length),Object(o["M"])("Reference.setPriority","onComplete",t,!0);var n=xs(this._delegate,e);return t&&n.then((function(){return t(null)}),(function(e){return t(e)})),n},t.prototype.push=function(e,n){var r=this;Object(o["L"])("Reference.push",0,2,arguments.length),Object(o["M"])("Reference.push","onComplete",n,!0);var i=ks(this._delegate,e),a=i.then((function(e){return new t(r.database,e)}));n&&a.then((function(){return n(null)}),(function(e){return n(e)}));var s=new t(this.database,i);return s.then=a.then.bind(a),s.catch=a.catch.bind(a,void 0),s},t.prototype.onDisconnect=function(){return ga("Reference.onDisconnect",this._delegate._path),new Ru(new ys(this._delegate._repo,this._delegate._path))},Object.defineProperty(t.prototype,"key",{get:function(){return this.getKey()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this.getParent()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this.getRoot()},enumerable:!1,configurable:!0}),t}(Du),Lu=function(){function e(e,t){var n=this;this._delegate=e,this.app=t,this.INTERNAL={delete:function(){return n._delegate._delete()}}}return e.prototype.useEmulator=function(e,t){Tu(this._delegate,e,t)},e.prototype.ref=function(e){if(Object(o["L"])("database.ref",0,1,arguments.length),e instanceof Mu){var t=Es(this._delegate,e.toString());return new Mu(this,t)}t=Is(this._delegate,e);return new Mu(this,t)},e.prototype.refFromURL=function(e){var t="database.refFromURL";Object(o["L"])(t,1,1,arguments.length);var n=Es(this._delegate,e);return new Mu(this,n)},e.prototype.goOffline=function(){return Object(o["L"])("database.goOffline",0,0,arguments.length),Ou(this._delegate)},e.prototype.goOnline=function(){return Object(o["L"])("database.goOnline",0,0,arguments.length),Iu(this._delegate)},e.ServerValue={TIMESTAMP:ku(),increment:function(e){return Pu(e)}},e}(),Fu=function(){Ue.forceDisallow(),je.forceAllow()},qu=function(){je.forceDisallow()},Uu=function(){return Ue["isAvailable"]()},Bu=function(e,t){var n=e._delegate._repo.persistentConnection_;n.securityDebugCallback_=t},Wu=function(e,t){Ya(e._delegate._repo,t)},Ku=function(e,t){$a(e._delegate._repo,t)},Hu=function(e){return e._delegate._repo.dataUpdateCount},Vu=function(e,t){return Ra(e._delegate._repo,t)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(e){var t=e.app,n=e.url,r=e.version,o=e.customAuthImpl,a=e.namespace,s=e.nodeAdmin,u=void 0!==s&&s;Me(r);var c=new i["c"]("auth-internal",new i["b"]("database-standalone"));return c.setComponent(new i["a"]("auth-internal",(function(){return o}),"PRIVATE")),{instance:new Lu(yu(t,c,n,u),t),namespace:a}}var Gu=Object.freeze({__proto__:null,forceLongPolling:Fu,forceWebSockets:qu,isWebSocketsAvailable:Uu,setSecurityDebugCallback:Bu,stats:Wu,statsIncrementCounter:Ku,dataUpdateCount:Hu,interceptServerData:Vu,initStandalone:zu}),Qu=qt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},qt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var Yu=nt,$u=function(e){var t=qt.prototype.put;return qt.prototype.put=function(n,r,i,o){void 0!==o&&(o=e()),t.call(this,n,r,i,o)},function(){qt.prototype.put=t}},Ju=se,Xu=function(e){return e._delegate._queryIdentifier},Zu=function(e){wu(e)},ec=Object.freeze({__proto__:null,DataConnection:Qu,RealTimeConnection:Yu,hijackHash:$u,ConnectionTarget:Ju,queryIdentifier:Xu,forceRestClient:Zu}),tc=Lu.ServerValue;function nc(e){Me(e.SDK_VERSION);var n=e.INTERNAL.registerComponent(new i["a"]("database",(function(e,t){var n=t.instanceIdentifier,r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal");return new Lu(yu(r,i,n),r)}),"PUBLIC").setServiceProps({Reference:Mu,Query:Du,Database:Lu,DataSnapshot:Au,enableLogging:Eu,INTERNAL:Gu,ServerValue:tc,TEST_ACCESS:ec}).setMultipleInstances(!0));e.registerVersion(u,c),Object(o["A"])()&&(t.exports=n)}nc(r["a"])}).call(this,n("4362"),n("dd40")(e))}}]);
//# sourceMappingURL=chunk-1d3e4be8.f89ef8d6.js.map