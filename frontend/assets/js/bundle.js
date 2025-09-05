/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form-control.ts":
/*!*****************************!*\
  !*** ./src/form-control.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\nconst form = document.querySelector('#form-validate');\nconst errors = {};\nif (form) {\n    form.addEventListener('submit', e => {\n        e.preventDefault();\n        const target = e.target;\n        const formData = new FormData(target);\n        const data = {};\n        formData.forEach((value, key) => {\n            data[key] = value.toString();\n        });\n        // Limpa mensagens antigas\n        form.querySelectorAll('.error-message').forEach(el => el.remove());\n        const isValid = validateForm(data);\n        console.log(isValid ? \"Form válido\" : \"Form inválido\");\n    });\n    function validateForm(data) {\n        // Limpa erros antigos\n        for (const key in errors)\n            delete errors[key];\n        if (!data.username)\n            errors[\"username\"] = \"*O campo usuário é obrigatório\";\n        if (!data.email)\n            errors[\"email\"] = \"*O campo email é obrigatório\";\n        if (data.password !== data.passwordRepeat)\n            errors[\"passwordRepeat\"] = \"*As senhas não coincidem\";\n        toThrowError(errors);\n        return Object.keys(errors).length === 0;\n    }\n    function toThrowError(error) {\n        for (const key in error) {\n            const input = form?.querySelector(`#${key}`);\n            if (input) {\n                const span = document.createElement('span');\n                span.className = 'error-message';\n                span.style.color = 'red';\n                span.textContent = error[key];\n                input.insertAdjacentElement('afterend', span);\n            }\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://aulasts/./src/form-control.ts?\n}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_control_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-control.ts */ \"./src/form-control.ts\");\n\n\n\n//# sourceURL=webpack://aulasts/./src/index.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;