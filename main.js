(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getProducts, getCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony import */ var can_ndjson_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! can-ndjson-stream */ "./node_modules/can-ndjson-stream/can-ndjson-stream.js");
/* harmony import */ var can_ndjson_stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(can_ndjson_stream__WEBPACK_IMPORTED_MODULE_0__);


const g = typeof window !== 'undefined' ? window : global;
const supportsStream = typeof g.ReadableStream !== 'undefined';
const ENDPOINT = 'https://dog-things-api.bitovi.com';

async function getProducts(callback) {
  let url = `${ENDPOINT}/product${supportsStream ? '' : '?json'}`;

  if(supportsStream) {
    let cb = Zone.current.wrap(callback);
    let res = await fetch(url);
    let stream = can_ndjson_stream__WEBPACK_IMPORTED_MODULE_0___default()(res.body);
    let reader = stream.getReader();
  
    while (true) {
      const {done, value} = await reader.read();
      if (done) return;
      cb(value);
    }
  } else {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      let json = JSON.parse(xhr.responseText);
      callback(json);
    };
  }
}

async function getCart() {
  let url = `${ENDPOINT}/cart`;

  if(supportsStream) {
    let res = await  fetch(url);

    let json = await res.json();
    return json;
  } else {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
        let json = JSON.parse(xhr.responseText);
        resolve(json);
      };
      xhr.onerror = reject;
    });
  }
}

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"app\">\n  <header class=\"App-header\">\n    <div class=\"header-left\">\n      <div class=\"app-logo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"85\" height=\"56\" viewBox=\"0 0 85 56\">\n          <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0 -1)\">\n            <path class=\"logo-bone\" d=\"M61.7077255,13.593398 L77.7995563,13.593398 C77.7995563,11.3521842 79.6727414,9.53532137 81.9834323,9.53532137 C84.2941232,9.53532137 86.1673083,11.3521842 86.1673083,13.593398 C86.1673083,15.0049126 85.4243151,16.2481096 84.2969729,16.9751286 C85.4243151,17.7021476 86.1673083,18.9453446 86.1673083,20.3568591 C86.1673083,22.598073 84.2941232,24.4149358 81.9834323,24.4149358 C79.6727414,24.4149358 77.7995563,22.598073 77.7995563,20.3568591 L61.7077255,20.3568591 C61.7077255,22.598073 59.8345404,24.4149358 57.5238495,24.4149358 C55.2131586,24.4149358 53.3399735,22.598073 53.3399735,20.3568591 C53.3399735,18.9453446 54.0829666,17.7021476 55.2103089,16.9751286 C54.0829666,16.2481096 53.3399735,15.0049126 53.3399735,13.593398 C53.3399735,11.3521842 55.2131586,9.53532137 57.5238495,9.53532137 C59.8345404,9.53532137 61.7077255,11.3521842 61.7077255,13.593398 Z\" transform=\"rotate(-46 69.754 16.975)\"/>\n            <path class=\"logo-dog \" d=\"M17.616,12.456 C17.616,13.9440074 17.3400028,15.2279946 16.788,16.308 C16.2359972,17.3880054 15.5080045,18.2759965 14.604,18.972 C13.6999955,19.6680035 12.6800057,20.1799984 11.544,20.508 C10.4079943,20.8360016 9.25600584,21 8.088,21 L1.752,21 L1.752,4.008 L7.896,4.008 C9.096006,4.008 10.2799942,4.1479986 11.448,4.428 C12.6160058,4.7080014 13.6559954,5.17199676 14.568,5.82 C15.4800046,6.46800324 16.2159972,7.33599456 16.776,8.424 C17.3360028,9.51200544 17.616,10.855992 17.616,12.456 Z M13.344,12.456 C13.344,11.4959952 13.1880016,10.7000032 12.876,10.068 C12.5639984,9.43599684 12.1480026,8.93200188 11.628,8.556 C11.1079974,8.17999812 10.5160033,7.9120008 9.852,7.752 C9.18799668,7.5919992 8.50400352,7.512 7.8,7.512 L5.76,7.512 L5.76,17.448 L7.704,17.448 C8.44000368,17.448 9.1479966,17.3640008 9.828,17.196 C10.5080034,17.0279992 11.1079974,16.7520019 11.628,16.368 C12.1480026,15.9839981 12.5639984,15.4720032 12.876,14.832 C13.1880016,14.1919968 13.344,13.4000047 13.344,12.456 Z M32.784,14.976 C32.784,15.9520049 32.6080018,16.835996 32.256,17.628 C31.9039982,18.420004 31.424003,19.0919972 30.816,19.644 C30.207997,20.1960028 29.504004,20.6239985 28.704,20.928 C27.903996,21.2320015 27.0480046,21.384 26.136,21.384 C25.2399955,21.384 24.388004,21.2320015 23.58,20.928 C22.771996,20.6239985 22.068003,20.1960028 21.468,19.644 C20.867997,19.0919972 20.3920018,18.420004 20.04,17.628 C19.6879982,16.835996 19.512,15.9520049 19.512,14.976 C19.512,13.9999951 19.6879982,13.1200039 20.04,12.336 C20.3920018,11.5519961 20.867997,10.8880027 21.468,10.344 C22.068003,9.79999728 22.771996,9.38400144 23.58,9.096 C24.388004,8.80799856 25.2399955,8.664 26.136,8.664 C27.0480046,8.664 27.903996,8.80799856 28.704,9.096 C29.504004,9.38400144 30.207997,9.79999728 30.816,10.344 C31.424003,10.8880027 31.9039982,11.5519961 32.256,12.336 C32.6080018,13.1200039 32.784,13.9999951 32.784,14.976 Z M28.992,14.976 C28.992,14.5919981 28.9280006,14.2160018 28.8,13.848 C28.6719994,13.4799982 28.4880012,13.1560014 28.248,12.876 C28.0079988,12.5959986 27.7120018,12.3680009 27.36,12.192 C27.0079982,12.0159991 26.6000023,11.928 26.136,11.928 C25.6719977,11.928 25.2640018,12.0159991 24.912,12.192 C24.5599982,12.3680009 24.2680012,12.5959986 24.036,12.876 C23.8039988,13.1560014 23.6280006,13.4799982 23.508,13.848 C23.3879994,14.2160018 23.328,14.5919981 23.328,14.976 C23.328,15.3600019 23.3879994,15.7359982 23.508,16.104 C23.6280006,16.4720018 23.8079988,16.8039985 24.048,17.1 C24.2880012,17.3960015 24.5839982,17.6319991 24.936,17.808 C25.2880018,17.9840009 25.6959977,18.072 26.16,18.072 C26.6240023,18.072 27.0319982,17.9840009 27.384,17.808 C27.7360018,17.6319991 28.0319988,17.3960015 28.272,17.1 C28.5120012,16.8039985 28.6919994,16.4720018 28.812,16.104 C28.9320006,15.7359982 28.992,15.3600019 28.992,14.976 Z M47.952,19.872 C47.952,21.0400058 47.7840017,22.0559957 47.448,22.92 C47.1119983,23.7840043 46.640003,24.4999972 46.032,25.068 C45.423997,25.6360028 44.6840044,26.0599986 43.812,26.34 C42.9399956,26.6200014 41.9760053,26.76 40.92,26.76 C39.8639947,26.76 38.7800056,26.6000016 37.668,26.28 C36.5559944,25.9599984 35.5920041,25.496003 34.776,24.888 L36.744,22.08 C37.3200029,22.5920026 37.9559965,22.9719988 38.652,23.22 C39.3480035,23.4680012 40.0319966,23.592 40.704,23.592 C41.8560058,23.592 42.7079972,23.288003 43.26,22.68 C43.8120028,22.071997 44.088,21.264005 44.088,20.256 L44.088,19.536 L44.016,19.536 C43.6479982,20.0160024 43.1520031,20.3999986 42.528,20.688 C41.9039969,20.9760014 41.192004,21.12 40.392,21.12 C39.4799954,21.12 38.6720035,20.9560016 37.968,20.628 C37.2639965,20.2999984 36.6680024,19.8560028 36.18,19.296 C35.6919976,18.7359972 35.3200013,18.0840037 35.064,17.34 C34.8079987,16.5959963 34.68,15.8080042 34.68,14.976 C34.68,14.1439958 34.8079987,13.3520038 35.064,12.6 C35.3200013,11.8479962 35.6919976,11.1840029 36.18,10.608 C36.6680024,10.0319971 37.2639965,9.57200172 37.968,9.228 C38.6720035,8.88399828 39.4719955,8.712 40.368,8.712 C41.1200038,8.712 41.8399966,8.86399848 42.528,9.168 C43.2160034,9.47200152 43.7679979,9.9439968 44.184,10.584 L44.232,10.584 L44.232,9.048 L47.952,9.048 L47.952,19.872 Z M44.208,14.952 C44.208,14.551998 44.1400007,14.1680018 44.004,13.8 C43.8679993,13.4319982 43.6720013,13.1080014 43.416,12.828 C43.1599987,12.5479986 42.8560018,12.3280008 42.504,12.168 C42.1519982,12.0079992 41.7520022,11.928 41.304,11.928 C40.8559978,11.928 40.4600017,12.0079992 40.116,12.168 C39.7719983,12.3280008 39.4800012,12.5439986 39.24,12.816 C38.9999988,13.0880014 38.8160006,13.4079982 38.688,13.776 C38.5599994,14.1440018 38.496,14.5359979 38.496,14.952 C38.496,15.352002 38.5599994,15.7359982 38.688,16.104 C38.8160006,16.4720018 38.9999988,16.7959986 39.24,17.076 C39.4800012,17.3560014 39.7719983,17.5799992 40.116,17.748 C40.4600017,17.9160008 40.8559978,18 41.304,18 C41.7520022,18 42.1559982,17.9160008 42.516,17.748 C42.8760018,17.5799992 43.1799988,17.3600014 43.428,17.088 C43.6760012,16.8159986 43.8679993,16.4960018 44.004,16.128 C44.1400007,15.7599982 44.208,15.3680021 44.208,14.952 Z\"/>\n            <path class=\"logo-things\" d=\"M8.667,50 L6.723,50 L6.723,32.612 L0.324,32.612 L0.324,30.884 L15.066,30.884 L15.066,32.612 L8.667,32.612 L8.667,50 Z M19.308,39.443 C19.6500017,38.7049963 20.216996,38.1200022 21.009,37.688 C21.801004,37.2559978 22.6469955,37.04 23.547,37.04 C25.149008,37.04 26.350496,37.5169952 27.1515,38.471 C27.952504,39.4250048 28.353,40.6849922 28.353,42.251 L28.353,50 L26.517,50 L26.517,43.007 C26.517,42.3409967 26.4630005,41.7380027 26.355,41.198 C26.2469995,40.6579973 26.0625013,40.1945019 25.8015,39.8075 C25.5404987,39.4204981 25.1895022,39.1190011 24.7485,38.903 C24.3074978,38.6869989 23.7540033,38.579 23.088,38.579 C22.6019976,38.579 22.1295023,38.677999 21.6705,38.876 C21.2114977,39.074001 20.8020018,39.375498 20.442,39.7805 C20.0819982,40.185502 19.7940011,40.6984969 19.578,41.3195 C19.3619989,41.9405031 19.254,42.6739958 19.254,43.52 L19.254,50 L17.418,50 L17.418,29.588 L19.254,29.588 L19.254,39.443 L19.308,39.443 Z M34.998,50 L33.162,50 L33.162,37.364 L34.998,37.364 L34.998,50 Z M35.376,32.504 C35.376,32.8820019 35.2410013,33.1924988 34.971,33.4355 C34.7009986,33.6785012 34.4040016,33.8 34.08,33.8 C33.7559984,33.8 33.4590013,33.6785012 33.189,33.4355 C32.9189986,33.1924988 32.784,32.8820019 32.784,32.504 C32.784,32.1259981 32.9189986,31.8155012 33.189,31.5725 C33.4590013,31.3294988 33.7559984,31.208 34.08,31.208 C34.4040016,31.208 34.7009986,31.3294988 34.971,31.5725 C35.2410013,31.8155012 35.376,32.1259981 35.376,32.504 Z M41.562,37.364 C41.5980002,37.7060017 41.6249999,38.0839979 41.643,38.498 C41.6610001,38.9120021 41.67,39.2539986 41.67,39.524 L41.724,39.524 C42.0840018,38.7859963 42.6689959,38.1875023 43.479,37.7285 C44.289004,37.2694977 45.1439955,37.04 46.044,37.04 C47.646008,37.04 48.847496,37.5169952 49.6485,38.471 C50.449504,39.4250048 50.85,40.6849922 50.85,42.251 L50.85,50 L49.014,50 L49.014,43.007 C49.014,42.3409967 48.9600005,41.7380027 48.852,41.198 C48.7439995,40.6579973 48.5595013,40.1945019 48.2985,39.8075 C48.0374987,39.4204981 47.6865022,39.1190011 47.2455,38.903 C46.8044978,38.6869989 46.2510033,38.579 45.585,38.579 C45.0989976,38.579 44.6265023,38.677999 44.1675,38.876 C43.7084977,39.074001 43.2990018,39.375498 42.939,39.7805 C42.5789982,40.185502 42.2910011,40.6984969 42.075,41.3195 C41.8589989,41.9405031 41.751,42.6739958 41.751,43.52 L41.751,50 L39.915,50 L39.915,40.145 C39.915,39.8029983 39.9060001,39.3620027 39.888,38.822 C39.8699999,38.2819973 39.8430002,37.7960022 39.807,37.364 L41.562,37.364 Z M56.307,52.538 C56.8110025,53.1860032 57.4994956,53.7349977 58.3725,54.185 C59.2455044,54.6350022 60.1679951,54.86 61.14,54.86 C62.0400045,54.86 62.8049968,54.7295013 63.435,54.4685 C64.0650031,54.2074987 64.5734981,53.8520022 64.9605,53.402 C65.3475019,52.9519978 65.6309991,52.425503 65.811,51.8225 C65.9910009,51.219497 66.081,50.5760034 66.081,49.892 L66.081,47.516 L66.027,47.516 C65.5409976,48.308004 64.8525045,48.9199978 63.9615,49.352 C63.0704955,49.7840022 62.1660046,50 61.248,50 C60.257995,50 59.362504,49.8380016 58.5615,49.514 C57.760496,49.1899984 57.0765028,48.7445028 56.5095,48.1775 C55.9424972,47.6104972 55.5015016,46.931004 55.1865,46.139 C54.8714984,45.346996 54.714,44.4920046 54.714,43.574 C54.714,42.6739955 54.8714984,41.828004 55.1865,41.036 C55.5015016,40.243996 55.9424972,39.551003 56.5095,38.957 C57.0765028,38.362997 57.760496,37.8950017 58.5615,37.553 C59.362504,37.2109983 60.257995,37.04 61.248,37.04 C62.1660046,37.04 63.0659956,37.2559978 63.948,37.688 C64.8300044,38.1200022 65.5229975,38.7409959 66.027,39.551 L66.081,39.551 L66.081,37.364 L67.917,37.364 L67.917,49.892 C67.917,50.5760034 67.8225009,51.3049961 67.6335,52.079 C67.4444991,52.8530039 67.0935026,53.5639968 66.5805,54.212 C66.0674974,54.8600032 65.3700044,55.3999978 64.488,55.832 C63.6059956,56.2640022 62.463007,56.48 61.059,56.48 C59.8889941,56.48 58.7730053,56.2550022 57.711,55.805 C56.6489947,55.3549978 55.7400038,54.734004 54.984,53.942 L56.307,52.538 Z M56.658,43.52 C56.658,44.1860033 56.7659989,44.815997 56.982,45.41 C57.1980011,46.004003 57.508498,46.5259978 57.9135,46.976 C58.318502,47.4260022 58.817997,47.7814987 59.412,48.0425 C60.006003,48.3035013 60.6809962,48.434 61.437,48.434 C62.1390035,48.434 62.786997,48.3170012 63.381,48.083 C63.975003,47.8489988 64.4879978,47.5160022 64.92,47.084 C65.3520022,46.6519978 65.6894988,46.134503 65.9325,45.5315 C66.1755012,44.928497 66.297,44.2580037 66.297,43.52 C66.297,42.8539967 66.1755012,42.224003 65.9325,41.63 C65.6894988,41.035997 65.3520022,40.5140023 64.92,40.064 C64.4879978,39.6139977 63.975003,39.2540014 63.381,38.984 C62.786997,38.7139987 62.1390035,38.579 61.437,38.579 C60.6809962,38.579 60.006003,38.7139987 59.412,38.984 C58.817997,39.2540014 58.318502,39.6139977 57.9135,40.064 C57.508498,40.5140023 57.1980011,41.035997 56.982,41.63 C56.7659989,42.224003 56.658,42.8539967 56.658,43.52 Z M79.449,40.361 C79.1789986,39.8389974 78.7695027,39.4115017 78.2205,39.0785 C77.6714973,38.7454983 77.0460035,38.579 76.344,38.579 C76.0199984,38.579 75.6960016,38.6149996 75.372,38.687 C75.0479984,38.7590004 74.7600013,38.8759992 74.508,39.038 C74.2559987,39.2000008 74.0535008,39.4069987 73.9005,39.659 C73.7474992,39.9110013 73.671,40.2079983 73.671,40.55 C73.671,41.144003 73.9139976,41.5984984 74.4,41.9135 C74.8860024,42.2285016 75.6509948,42.4939989 76.695,42.71 C78.1890075,43.0160015 79.2914964,43.4614971 80.0025,44.0465 C80.7135036,44.6315029 81.069,45.418995 81.069,46.409 C81.069,47.1290036 80.9295014,47.7364975 80.6505,48.2315 C80.3714986,48.7265025 80.0070022,49.1314984 79.557,49.4465 C79.1069977,49.7615016 78.5985028,49.9864993 78.0315,50.1215 C77.4644972,50.2565007 76.8930029,50.324 76.317,50.324 C75.3629952,50.324 74.4360045,50.126002 73.536,49.73 C72.6359955,49.333998 71.8980029,48.7130042 71.322,47.867 L72.78,46.787 C73.1040016,47.3450028 73.5809968,47.8129981 74.211,48.191 C74.8410031,48.5690019 75.5339962,48.758 76.29,48.758 C76.686002,48.758 77.0639982,48.7220004 77.424,48.65 C77.7840018,48.5779996 78.0989986,48.4520009 78.369,48.272 C78.6390013,48.0919991 78.8549992,47.8625014 79.017,47.5835 C79.1790008,47.3044986 79.26,46.9580021 79.26,46.544 C79.26,45.8779967 78.9405032,45.3785017 78.3015,45.0455 C77.6624968,44.7124983 76.740006,44.4020014 75.534,44.114 C75.1559981,44.0239995 74.7555021,43.9115007 74.3325,43.7765 C73.9094979,43.6414993 73.5180018,43.4435013 73.158,43.1825 C72.7979982,42.9214987 72.5010012,42.593002 72.267,42.197 C72.0329988,41.800998 71.916,41.306003 71.916,40.712 C71.916,40.0639968 72.0419987,39.5105023 72.294,39.0515 C72.5460013,38.5924977 72.8834979,38.2145015 73.3065,37.9175 C73.7295021,37.6204985 74.2109973,37.4000007 74.751,37.256 C75.2910027,37.1119993 75.8489971,37.04 76.425,37.04 C77.3070044,37.04 78.1619959,37.237998 78.99,37.634 C79.8180041,38.030002 80.4389979,38.5879964 80.853,39.308 L79.449,40.361 Z\"/>\n          </g>\n        </svg>\n      </div>\n    </div>\n\n    <div class=\"header-right\">\n      <app-cart></app-cart>\n    </div>\n  </header>\n\n  <main>\n    <p *ngIf=\"isCart()\">Cart stuff here</p>\n    <section class=\"product-page\" *ngIf=\"isProducts()\">\n      <aside class=\"sideoptions\">\n        <h1>Categories</h1>\n        <ul>\n          <li>Bones</li>\n          <li>Food brands</li>\n          <li>Leashes</li>\n          <li>Beds</li>\n          <li>Treats</li>\n          <li>Crates</li>\n        </ul>\n      </aside>\n      <app-product-list></app-product-list>\n    </section>\n  </main>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dog-things-angular';
        this.page = 'products';
    }
    AppComponent.prototype.isCart = function () {
        return this.page === 'cart';
    };
    AppComponent.prototype.isProducts = function () {
        return this.page === 'products';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"/cart\" class=\"cart-link\">\n  <img class=\"cart-img\" src=\"assets/shopping-cart.svg\" alt=\"shopping cart\" />\n  <span id=\"cart-count\" class=\"cart-count\">{{ count }}</span>\n</a>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.js */ "./src/api.js");



var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
        this.count = 0;
        this.loadCart();
    };
    CartComponent.prototype.loadCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cart;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_js__WEBPACK_IMPORTED_MODULE_2__["getCart"]()];
                    case 1:
                        cart = _a.sent();
                        this.count = cart.count;
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CartComponent.prototype, "count", void 0);
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-of-products {\n  padding: 0;\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 80px;\n  flex: 1 1;\n}\n\n.list-of-products.horizontal {\n  grid-template-columns: none;\n  grid-gap: 30px;\n}\n\n.list-of-products > li {\n  display: flex;\n  flex-direction: column;\n  background: white;\n  padding: 2em;\n  box-shadow: 0px 3px 0px rgba(0, 0, 0, .2);\n}\n\n.list-of-products.horizontal > li {\n  flex-direction: row;\n  padding: 1em;\n}\n\n.list-of-products > li:hover {\n  box-shadow: 0px 10px 30px rgba(0, 0, 0, .2);\n  border-top: 8px solid var(--mainColor);\n  cursor: pointer;\n  transition-property: box-shadow;\n  transition-duration: 500ms;\n  transition-timing-function: ease-in;\n}\n\n.list-of-products > li:hover .product-info h2 {\n  color: var(--fontColorLinks);\n}\n\n.list-of-products > li > aside {\n  width: 100%;\n  height: 190px;\n  display: flex;\n  justify-content: center;\n}\n\n.list-of-products.horizontal > li > aside {\n  height: 115px;\n  flex: 1;\n}\n\n.list-of-products > li .product-info {\n  line-height: 1.5em;\n}\n\n.list-of-products.horizontal > li > .product-info {\n  height: 105px;\n  overflow: hidden;\n  flex: 3;\n}\n\n.list-of-products .product-image {\n  max-height: 100%;\n}\n\n.list-of-products > li .product-info h2 {\n  color: var(--fontColorTitles);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsNERBQTREO0VBQzVELGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1vZi1wcm9kdWN0cyB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBncmlkLWdhcDogODBweDtcbiAgZmxleDogMSAxO1xufVxuXG4ubGlzdC1vZi1wcm9kdWN0cy5ob3Jpem9udGFsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lO1xuICBncmlkLWdhcDogMzBweDtcbn1cblxuLmxpc3Qtb2YtcHJvZHVjdHMgPiBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyZW07XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xufVxuXG4ubGlzdC1vZi1wcm9kdWN0cy5ob3Jpem9udGFsID4gbGkge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5saXN0LW9mLXByb2R1Y3RzID4gbGk6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgdmFyKC0tbWFpbkNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG59XG5cbi5saXN0LW9mLXByb2R1Y3RzID4gbGk6aG92ZXIgLnByb2R1Y3QtaW5mbyBoMiB7XG4gIGNvbG9yOiB2YXIoLS1mb250Q29sb3JMaW5rcyk7XG59XG5cbi5saXN0LW9mLXByb2R1Y3RzID4gbGkgPiBhc2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxpc3Qtb2YtcHJvZHVjdHMuaG9yaXpvbnRhbCA+IGxpID4gYXNpZGUge1xuICBoZWlnaHQ6IDExNXB4O1xuICBmbGV4OiAxO1xufVxuXG4ubGlzdC1vZi1wcm9kdWN0cyA+IGxpIC5wcm9kdWN0LWluZm8ge1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbi5saXN0LW9mLXByb2R1Y3RzLmhvcml6b250YWwgPiBsaSA+IC5wcm9kdWN0LWluZm8ge1xuICBoZWlnaHQ6IDEwNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4OiAzO1xufVxuXG4ubGlzdC1vZi1wcm9kdWN0cyAucHJvZHVjdC1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ubGlzdC1vZi1wcm9kdWN0cyA+IGxpIC5wcm9kdWN0LWluZm8gaDIge1xuICBjb2xvcjogdmFyKC0tZm9udENvbG9yVGl0bGVzKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-list\">\n  <ul class=\"list-of-products horizontal\">\n    <li *ngFor=\"let product of products | async\">\n      <aside>\n        <img src=\"{{ product.image }}\" class=\"product-image\" alt=\"The product\" />\n      </aside>\n\n      <div class=\"product-info\">\n        <h2>{{ product.name }}</h2>\n        <div class=\"product-desc\">\n          {{ product.desc }}\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.js */ "./src/api.js");




var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var cont = true;
            var allProducts = [];
            _api_js__WEBPACK_IMPORTED_MODULE_3__["getProducts"](function (product) {
                if (cont) {
                    allProducts.push(product);
                    observer.next(allProducts);
                }
            });
            return {
                unsubscribe: function () {
                    cont = false;
                }
            };
        });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matthew/dev/dog-things-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map