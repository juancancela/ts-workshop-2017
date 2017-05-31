(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Application_1 = __webpack_require__(2);
	new Application_1.default(3000);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var express = __webpack_require__(3);
	var Person_1 = __webpack_require__(4);
	var Department_1 = __webpack_require__(7);
	var Address_1 = __webpack_require__(8);
	var DepartmentService_1 = __webpack_require__(9);
	var PersonService_1 = __webpack_require__(11);
	var Application = (function () {
	    function Application(port) {
	        var app = express();
	        app.get('/', function (req, res) {
	            res.send('Hello World!');
	        });
	        app.get('/person', function (req, res) {
	            var person = new Person_1.default("Marquitos", "El de la Pizza", 29);
	            var personService = new PersonService_1.default();
	            res.send(personService.create(person).display());
	        });
	        app.get('/department', function (req, res) {
	            var address = new Address_1.default("Honduras", "1212");
	            var department = new Department_1.default("A3", address.display());
	            var departmentService = new DepartmentService_1.default();
	            res.send(departmentService.create(department).getId());
	        });
	        app.listen(port, function () {
	            console.log('Example app listening on port 3000!');
	        });
	    }
	    return Application;
	}());
	exports.default = Application;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Person = (function () {
	    function Person(name, last_name, age) {
	        this.name = name;
	        this.last_name = last_name;
	        this.age = age;
	    }
	    Person.prototype.getId = function () {
	        return "1";
	    };
	    Person.prototype.display = function () {
	        return this.name + ", " + this.last_name + ": " + this.age;
	    };
	    return Person;
	}());
	exports.default = Person;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	const root = __webpack_require__(6).path;
	
	module.exports = {
	    entry: `${root}/src/start.ts`,
	    target: 'node',
	    externals: [
	        /^[a-z\-0-9]+$/ // Ignore node_modules folder
	    ],
	    output: {
	        filename: 'app.js',
	        path: `${root}/build`,
	        libraryTarget: "commonjs"
	    },
	    resolve: {
	        // Add in `.ts` and `.tsx` as a resolvable extension.
	        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
	    },
	    resolveLoader: {
	        root: [`${root}/node_modules`]
	    },
	    module: {
	        loaders: [{
	            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
	            test: /\.tsx?$/,
	            exclude: 'node_modules',
	            loader: 'ts-loader'
	        }]
	    },
	    devtool: '#source-map'
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("app-root-path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Department = (function () {
	    function Department(name, address) {
	        this.name = name;
	        this.address = address;
	    }
	    Department.prototype.getId = function () {
	        return "2";
	    };
	    Department.prototype.display = function () {
	        return this.name + ", " + this.address;
	    };
	    return Department;
	}());
	exports.default = Department;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Address = (function () {
	    function Address(street, number) {
	        this.street = street;
	        this.number = number;
	    }
	    Address.prototype.getId = function () {
	        return "3";
	    };
	    Address.prototype.display = function () {
	        return this.street + ", " + this.number;
	    };
	    return Address;
	}());
	exports.default = Address;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var Repository_1 = __webpack_require__(10);
	var DepartmentService = (function (_super) {
	    __extends(DepartmentService, _super);
	    function DepartmentService() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return DepartmentService;
	}(Repository_1.default));
	exports.default = DepartmentService;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var store = {};
	var Repository = (function () {
	    function Repository() {
	    }
	    Repository.prototype.create = function (instance) {
	        store[instance.getId()] = instance;
	        return instance;
	    };
	    Repository.prototype.read = function (id) {
	        return store[id];
	    };
	    return Repository;
	}());
	exports.default = Repository;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var Repository_1 = __webpack_require__(10);
	var PersonService = (function (_super) {
	    __extends(PersonService, _super);
	    function PersonService() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return PersonService;
	}(Repository_1.default));
	exports.default = PersonService;


/***/ })
/******/ ])));
//# sourceMappingURL=app.js.map