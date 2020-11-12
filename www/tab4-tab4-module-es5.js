(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"toolbar\">\n      <ion-title>\n        <img src=\"../assets/icon/1.png\" class=\"imagem\" />\n      </ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Suspensão</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <header>\n    <div class=\"card-img-overlay\">\n      <h2 class=\"animated wow fadeInLeft\">\n        Cassação\n      </h2>\n    </div>\n  </header>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 mb-5\">\n        <h3 class=\"mt-5 mb-5\">Cassação de CNH:</h3>\n        <p>\n          Caso o infrator estiver conduzindo veículo, durante o período de suspensão, estará sujeito à imposição\n          de multa, conforme disposto o art.162, inciso II, do CTB, e à instauração do processo de cassação da\n          CNH, de acordo com o art.263, inciso I, do CTB. O condutor com a CNH cassada ficará obrigatoriamente 2\n          anos sem poder dirigir e só poderá solicitar a reabilitação após esse prazo, passando novamente por todo\n          o processo para obter o documento.\n        </p>\n        <p class=\"mt-5\">\n          DA CASSAÇÃO DO DOCUMENTO DE HABILITAÇÃO<br>\n          Art. 19. Deverá ser instaurado processo administrativo de cassação do documento de habilitação, pela\n          autoridade de trânsito do órgão executivo de seu registro, observado no que couber as disposições dos\n          Capítulos IV, V e VI, desta Resolução, quando:<br>\n\n          <ion-icon name=\"caret-forward-outline\" class=\"caret\"></ion-icon>I - suspenso o direito de dirigir, o infrator\n          conduzir qualquer veículo;<br>\n          <ion-icon name=\"caret-forward-outline\" class=\"caret\"></ion-icon>II - no caso de reincidência, no prazo de doze\n          meses, das infrações previstas no inciso III do art. 162 e nos arts. 163, 164, 165, 173, 174 e 175, todos do\n          CTB.<br>\n          <ion-icon name=\"caret-forward-outline\" class=\"caret\"></ion-icon>V - é possível a instauração do processo de\n          cassação do documento de habilitação do proprietário que não realizar a indicação do condutor infrator de que\n          trata o art. 257, § 7º, do CTB.\n        </p>\n      </div>\n\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab4/tab4-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab4/tab4-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab4PageRoutingModule */

    /***/
    function srcAppTab4Tab4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function () {
        return Tab4PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var routes = [{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
      }];

      var Tab4PageRoutingModule = function Tab4PageRoutingModule() {
        _classCallCheck(this, Tab4PageRoutingModule);
      };

      Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab4PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.module.ts ***!
      \*************************************/

    /*! exports provided: Tab4PageModule */

    /***/
    function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
        return Tab4PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab4-routing.module */
      "./src/app/tab4/tab4-routing.module.ts");
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var Tab4PageModule = function Tab4PageModule() {
        _classCallCheck(this, Tab4PageModule);
      };

      Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _tab4_page__WEBPACK_IMPORTED_MODULE_8__["Tab4Page"]
        }]), _tab4_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab4PageRoutingModule"]],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_8__["Tab4Page"]]
      })], Tab4PageModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".toolbar {\n  background-color: black;\n  justify-content: center;\n  align-items: center;\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70px;\n}\n\n.ion-header {\n  margin-bottom: 0;\n}\n\n.toolbar {\n  background-color: black;\n  justify-content: center;\n  align-items: center;\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70px;\n}\n\n.card-img-overlay {\n  background-image: url(\"/assets/imagens/sobre3.png\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n  height: 100px;\n  padding-top: 0;\n}\n\n.h2 {\n  font-size: 50px;\n  font-weight: 900;\n  color: #ffffff;\n  margin-top: 3%;\n  text-shadow: 10px 10px 10px #000000;\n}\n\nh3 {\n  padding-top: 20px;\n  font-family: Georgia;\n  font-size: 30px;\n}\n\n.caret {\n  color: red;\n  margin-right: 5px;\n}\n\n.md-form {\n  padding-bottom: 10px;\n}\n\nspan {\n  color: red;\n  font-size: 13px;\n  font-weight: bold;\n}\n\np {\n  line-height: 2;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 20px;\n}\n\nh2 {\n  font-size: 30px;\n  font-weight: 900;\n  color: #ffffff;\n  margin-top: 0%;\n  text-shadow: 5px 5px 10px #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG1EQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLG9CQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBTVIiLCJmaWxlIjoic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG5cbiAgLmlvbi1oZWFkZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG5cbi5jYXJkLWltZy1vdmVybGF5e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZW5zL3NvYnJlMy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5oMntcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggIzAwMDAwMDtcbn1cbmgze1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5jYXJldHtcbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufSBcbi5tZC1mb3Jte1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuc3BhbntcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0gXG5we1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59IFxuXG4gICAgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDA7XG4gICAgfVxuICAgICAgICBcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab4/tab4.page.ts ***!
      \***********************************/

    /*! exports provided: Tab4Page */

    /***/
    function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
        return Tab4Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Tab4Page = /*#__PURE__*/function () {
        function Tab4Page() {
          _classCallCheck(this, Tab4Page);
        }

        _createClass(Tab4Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Tab4Page;
      }();

      Tab4Page.ctorParameters = function () {
        return [];
      };

      Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab4.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab4.page.scss */
        "./src/app/tab4/tab4.page.scss"))["default"]]
      })], Tab4Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab4-tab4-module-es5.js.map