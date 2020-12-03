module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge/actions */ \"@shopify/app-bridge/actions\");\n/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        descriptionHtml\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n`;\n\nclass ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    const app = this.context;\n\n    const redirectToProduct = () => {\n      const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__[\"Redirect\"].create(app);\n      redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__[\"Redirect\"].Action.APP, '/edit-products');\n    };\n\n    const twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__[\"Query\"], {\n      query: GET_PRODUCTS_BY_ID,\n      variables: {\n        ids: store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids')\n      },\n      children: ({\n        data,\n        loading,\n        error\n      }) => {\n        if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n          children: \"Loading\\u2026\"\n        });\n        if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n          children: error.message\n        });\n        console.log(data);\n        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"ResourceList\"], {\n            showHeader: true,\n            resourceName: {\n              singular: 'Product',\n              plural: 'Products'\n            },\n            items: data.nodes,\n            renderItem: item => {\n              const media = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Thumbnail\"], {\n                source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',\n                alt: item.images.edges[0] ? item.images.edges[0].node.altText : ''\n              });\n\n              const price = item.variants.edges[0].node.price;\n              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"ResourceList\"].Item, {\n                id: item.id,\n                media: media,\n                accessibilityLabel: `View details for ${item.title}`,\n                onClick: () => {\n                  store_js__WEBPACK_IMPORTED_MODULE_5___default.a.set('item', item);\n                  redirectToProduct();\n                },\n                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"].Item, {\n                    fill: true,\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"TextStyle\"], {\n                        variation: \"strong\",\n                        children: item.title\n                      })\n                    })\n                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"].Item, {\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"p\", {\n                      children: [\"$\", price]\n                    })\n                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"].Item, {\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"p\", {\n                      children: [\"Expires on \", twoWeeksFromNow, \" \"]\n                    })\n                  })]\n                })\n              });\n            }\n          })\n        });\n      }\n    });\n  }\n\n}\n\n_defineProperty(ResourceListWithProducts, \"contextType\", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__[\"Context\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourceListWithProducts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdC5qcz8zZDY1Il0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYXBwIiwiY29udGV4dCIsInJlZGlyZWN0VG9Qcm9kdWN0IiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsImRpc3BhdGNoIiwiQWN0aW9uIiwiQVBQIiwidHdvV2Vla3NGcm9tTm93IiwiRGF0ZSIsIm5vdyIsInRvRGF0ZVN0cmluZyIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIiwic2V0IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBR0EsTUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTNCQTs7QUE2QkEsTUFBTUMsd0JBQU4sU0FBdUNDLDRDQUFLLENBQUNDLFNBQTdDLENBQXVEO0FBR25EQyxRQUFNLEdBQUc7QUFDUCxVQUFNQyxHQUFHLEdBQUcsS0FBS0MsT0FBakI7O0FBQ0EsVUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtBQUM5QixZQUFNQyxRQUFR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dXJjZUxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQge1xuICAgIENhcmQsXG4gICAgUmVzb3VyY2VMaXN0LFxuICAgIFN0YWNrLFxuICAgIFRleHRTdHlsZSxcbiAgICBUaHVtYm5haWwsXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcblxuXG5jb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXG4gIHF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6IFtJRCFdISkge1xuICAgIG5vZGVzKGlkczogJGlkcykge1xuICAgICAgLi4uIG9uIFByb2R1Y3Qge1xuICAgICAgICB0aXRsZVxuICAgICAgICBoYW5kbGVcbiAgICAgICAgZGVzY3JpcHRpb25IdG1sXG4gICAgICAgIGlkXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xuICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OiAxKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBjb250ZXh0VHlwZSA9IENvbnRleHQ7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBhcHAgPSB0aGlzLmNvbnRleHQ7XG4gICAgICBjb25zdCByZWRpcmVjdFRvUHJvZHVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVkaXJlY3QgPSBSZWRpcmVjdC5jcmVhdGUoYXBwKTtcbiAgICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goXG4gICAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCxcbiAgICAgICAgICAnL2VkaXQtcHJvZHVjdHMnLFxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgICAgY29uc3QgdHdvV2Vla3NGcm9tTm93ID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDEyMDk2ZTUpLnRvRGF0ZVN0cmluZygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17eyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfX0+XG4gICAgICAgICAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0hlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdQcm9kdWN0JywgcGx1cmFsOiAnUHJvZHVjdHMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRhLm5vZGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUb1Byb2R1Y3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiB7dHdvV2Vla3NGcm9tTm93fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9RdWVyeT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0czsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ResourceList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList.js\");\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';\n\n //resource selections stored in local storage for dev\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      open: false\n    });\n\n    _defineProperty(this, \"handleSelection\", resources => {\n      const idsFromResources = resources.selection.map(product => product.id);\n      this.setState({\n        open: false\n      });\n      store_js__WEBPACK_IMPORTED_MODULE_4___default.a.set('ids', idsFromResources);\n    });\n  }\n\n  render() {\n    //check for empty state... if merchant has selected products yet\n    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids');\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"TitleBar\"], {\n        title: \"mixchat\",\n        primaryAction: {\n          content: 'Select Products',\n          onAction: () => this.setState({\n            open: true\n          })\n        }\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"ResourcePicker\"], {\n        resourceType: \"Product\",\n        showVariants: false,\n        open: this.state.open,\n        onSelection: resources => this.handleSelection(resources),\n        onCancel: () => this.setState({\n          open: false\n        })\n      }), emptyState ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"EmptyState\"], {\n          heading: \"Discount your products temporarily\",\n          action: {\n            content: 'Select products',\n            onAction: () => this.setState({\n              open: true\n            })\n          },\n          image: img,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n            children: \"Select products to change their price temporarily.\"\n          })\n        })\n      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_ResourceList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {})]\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImltZyIsIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJvcGVuIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwic3RvcmUiLCJzZXQiLCJyZW5kZXIiLCJlbXB0eVN0YXRlIiwiZ2V0IiwiY29udGVudCIsIm9uQWN0aW9uIiwic3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsR0FBRyxHQUFHLG1FQUFaO0FBQ0E7Q0FHQTs7QUFHQSxNQUFNQyxLQUFOLFNBQW9CQyw0Q0FBSyxDQUFDQyxTQUExQixDQUFvQztBQUFBO0FBQUE7O0FBQUEsbUNBQ3hCO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBRHdCOztBQUFBLDZDQXlDYkMsU0FBRCxJQUFlO0FBQzdCLFlBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXlCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0MsRUFBN0MsQ0FBekI7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFBRVAsWUFBSSxFQUFFO0FBQVIsT0FBZDtBQUNBUSxxREFBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixFQUFpQlAsZ0JBQWpCO0FBQ0gsS0E3QytCO0FBQUE7O0FBRWhDUSxRQUFNLEdBQUc7QUFDTDtBQUNBLFVBQU1DLFVBQVUsR0FBRyxDQUFDSCwrQ0FBSyxDQUFDSSxHQUFOLENBQVUsS0FBVixDQUFwQjtBQUNBLHdCQUNJLCtEQUFDLHFEQUFEO0FBQUEsOEJBQ0ksOERBQUMsa0VBQUQ7QUFDSSxhQUFLLEVBQUMsU0FEVjtBQUVJLHFCQUFhLEVBQUU7QUFDWEMsaUJBQU8sRUFBRSxpQkFERTtBQUVYQyxrQkFBUSxFQUFFLE1BQU0sS0FBS1AsUUFBTCxDQUFjO0FBQUVQLGdCQUFJLEVBQUU7QUFBUixXQUFkO0FBRkw7QUFGbkIsUUFESixlQVFJLDhEQUFDLHdFQUFEO0FBQ0ksb0JBQVksRUFBQyxTQURqQjtBQUVJLG9CQUFZLEVBQUUsS0FGbEI7QUFHSSxZQUFJLEVBQUUsS0FBS2UsS0FBTCxDQUFXZixJQUhyQjtBQUlJLG1CQUFXLEVBQUdDLFNBQUQsSUFBZSxLQUFLZSxlQUFMLENBQXFCZixTQUFyQixDQUpoQztBQUtJLGdCQUFRLEVBQUUsTUFBTSxLQUFLTSxRQUFMLENBQWM7QUFBRVAsY0FBSSxFQUFFO0FBQVIsU0FBZDtBQUxwQixRQVJKLEVBZUtXLFVBQVUsZ0JBQ1gsOERBQUMsdURBQUQ7QUFBQSwrQkFDSSw4REFBQywyREFBRDtBQUNJLGlCQUFPLEVBQUMsb0NBRFo7QUFFSSxnQkFBTSxFQUFFO0FBQ0pFLG1CQUFPLEVBQUUsaUJBREw7QUFFSkMsb0JBQVEsRUFBRSxNQUFNLEtBQUtQLFFBQUwsQ0FBYztBQUFFUCxrQkFBSSxFQUFFO0FBQVIsYUFBZDtBQUZaLFdBRlo7QUFNSSxlQUFLLEVBQUVKLEdBTlg7QUFBQSxpQ0FRSTtBQUFBO0FBQUE7QUFSSjtBQURKLFFBRFcsZ0JBY1AsOERBQUMsZ0VBQUQsS0E3QlI7QUFBQSxNQURKO0FBbUNIOztBQXhDK0I7O0FBZ0RyQkMsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2UgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IFJlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzb3VyY2VMaXN0JztcblxuLy9yZXNvdXJjZSBzZWxlY3Rpb25zIHN0b3JlZCBpbiBsb2NhbCBzdG9yYWdlIGZvciBkZXZcblxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7IG9wZW46IGZhbHNlIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL2NoZWNrIGZvciBlbXB0eSBzdGF0ZS4uLiBpZiBtZXJjaGFudCBoYXMgc2VsZWN0ZWQgcHJvZHVjdHMgeWV0XG4gICAgICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KCdpZHMnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgICAgIDxUaXRsZUJhclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIm1peGNoYXRcIlxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IFByb2R1Y3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcykgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlbXB0eVN0YXRlID8gKFxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiRGlzY291bnQgeW91ciBwcm9kdWN0cyB0ZW1wb3JhcmlseVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltZ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIHRvIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvUGFnZT5cblxuICAgICAgICApXG4gICAgfVxuICAgIGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZXMpID0+IHtcbiAgICAgICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXG4gICAgICAgIHN0b3JlLnNldCgnaWRzJywgaWRzRnJvbVJlc291cmNlcyk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/app-bridge/actions":
/*!**********************************************!*\
  !*** external "@shopify/app-bridge/actions" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge/actions\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIj8wNmMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge/actions\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiPzMyZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QvanN4LXJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-runtime\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });