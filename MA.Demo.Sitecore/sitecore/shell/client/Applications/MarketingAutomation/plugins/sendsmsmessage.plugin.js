(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@sitecore/ma-core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@sitecore/ma-core"], factory);
	else if(typeof exports === 'object')
		exports["publishActivities"] = factory(require("@angular/core"), require("@sitecore/ma-core"));
	else
		root["publishActivities"] = factory(root["@angular/core"], root["@sitecore/ma-core"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
exports.root = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(1);
var toSubscriber_1 = __webpack_require__(23);
var observable_1 = __webpack_require__(15);
var pipe_1 = __webpack_require__(27);
/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remove this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2.5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source || !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    /** @deprecated internal use only */ Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    /* tslint:enable:max-line-length */
    /**
     * Used to stitch together functional operators into a chain.
     * @method pipe
     * @return {Observable} the Observable result of all of the operators having
     * been called in the order they were passed in.
     *
     * @example
     *
     * import { map, filter, scan } from 'rxjs/operators';
     *
     * Rx.Observable.interval(1000)
     *   .pipe(
     *     filter(x => x % 2 === 0),
     *     map(x => x + x),
     *     scan((acc, x) => acc + x)
     *   )
     *   .subscribe(x => console.log(x))
     */
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i - 0] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    /* tslint:enable:max-line-length */
    Observable.prototype.toPromise = function (PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(9);
var Subscription_1 = __webpack_require__(24);
var Observer_1 = __webpack_require__(13);
var rxSubscriber_1 = __webpack_require__(14);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    // HACK(benlesh): To resolve an issue where Node users may have multiple
                    // copies of rxjs in their node_modules directory.
                    if (isTrustedSubscriber(destinationOrNext)) {
                        var trustedSubscriber = destinationOrNext[rxSubscriber_1.rxSubscriber]();
                        this.syncErrorThrowable = trustedSubscriber.syncErrorThrowable;
                        this.destination = trustedSubscriber;
                        trustedSubscriber.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    /** @deprecated internal use only */ Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    /** @deprecated internal use only */ SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
function isTrustedSubscriber(obj) {
    return obj instanceof Subscriber || ('syncErrorThrowable' in obj && obj[rxSubscriber_1.rxSubscriber]);
}
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ɵregisterLocaleData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgLocaleLocalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NgLocalization; });
/* unused harmony export registerLocaleData */
/* unused harmony export Plural */
/* unused harmony export NumberFormatStyle */
/* unused harmony export FormStyle */
/* unused harmony export TranslationWidth */
/* unused harmony export FormatWidth */
/* unused harmony export NumberSymbol */
/* unused harmony export WeekDay */
/* unused harmony export getCurrencySymbol */
/* unused harmony export getLocaleDayPeriods */
/* unused harmony export getLocaleDayNames */
/* unused harmony export getLocaleMonthNames */
/* unused harmony export getLocaleId */
/* unused harmony export getLocaleEraNames */
/* unused harmony export getLocaleWeekEndRange */
/* unused harmony export getLocaleFirstDayOfWeek */
/* unused harmony export getLocaleDateFormat */
/* unused harmony export getLocaleDateTimeFormat */
/* unused harmony export getLocaleExtraDayPeriodRules */
/* unused harmony export getLocaleExtraDayPeriods */
/* unused harmony export getLocalePluralCase */
/* unused harmony export getLocaleTimeFormat */
/* unused harmony export getLocaleNumberSymbol */
/* unused harmony export getLocaleNumberFormat */
/* unused harmony export getLocaleCurrencyName */
/* unused harmony export getLocaleCurrencySymbol */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return parseCookieValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonModule; });
/* unused harmony export DeprecatedI18NPipesModule */
/* unused harmony export NgClass */
/* unused harmony export NgForOf */
/* unused harmony export NgForOfContext */
/* unused harmony export NgIf */
/* unused harmony export NgIfContext */
/* unused harmony export NgPlural */
/* unused harmony export NgPluralCase */
/* unused harmony export NgStyle */
/* unused harmony export NgSwitch */
/* unused harmony export NgSwitchCase */
/* unused harmony export NgSwitchDefault */
/* unused harmony export NgTemplateOutlet */
/* unused harmony export NgComponentOutlet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DOCUMENT; });
/* unused harmony export AsyncPipe */
/* unused harmony export DatePipe */
/* unused harmony export I18nPluralPipe */
/* unused harmony export I18nSelectPipe */
/* unused harmony export JsonPipe */
/* unused harmony export LowerCasePipe */
/* unused harmony export CurrencyPipe */
/* unused harmony export DecimalPipe */
/* unused harmony export PercentPipe */
/* unused harmony export SlicePipe */
/* unused harmony export UpperCasePipe */
/* unused harmony export TitleCasePipe */
/* unused harmony export DeprecatedDatePipe */
/* unused harmony export DeprecatedCurrencyPipe */
/* unused harmony export DeprecatedDecimalPipe */
/* unused harmony export DeprecatedPercentPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PLATFORM_BROWSER_ID; });
/* unused harmony export ɵPLATFORM_SERVER_ID */
/* unused harmony export ɵPLATFORM_WORKER_APP_ID */
/* unused harmony export ɵPLATFORM_WORKER_UI_ID */
/* unused harmony export isPlatformBrowser */
/* unused harmony export isPlatformServer */
/* unused harmony export isPlatformWorkerApp */
/* unused harmony export isPlatformWorkerUi */
/* unused harmony export VERSION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PlatformLocation; });
/* unused harmony export LOCATION_INITIALIZED */
/* unused harmony export LocationStrategy */
/* unused harmony export APP_BASE_HREF */
/* unused harmony export HashLocationStrategy */
/* unused harmony export PathLocationStrategy */
/* unused harmony export Location */
/* unused harmony export ɵe */
/* unused harmony export ɵd */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DEPRECATED_PLURAL_FN; });
/* unused harmony export ɵb */
/* unused harmony export ɵg */
/* unused harmony export ɵf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(6);
/**
 * @license Angular v5.2.11
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This class should not be used directly by an application developer. Instead, use
 * {\@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
 * agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms that angular supports. For example, `\@angular/platform-browser` provides an
 * implementation specific to the browser environment, while `\@angular/platform-webworker` provides
 * one suitable for use with web workers.
 *
 * The `PlatformLocation` class is used directly by all implementations of {\@link LocationStrategy}
 * when they need to interact with the DOM apis like pushState, popState, etc...
 *
 * {\@link LocationStrategy} in turn is used by the {\@link Location} service which is used directly
 * by the {\@link Router} in order to navigate between routes. Since all interactions between {\@link
 * Router} /
 * {\@link Location} / {\@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
 * class they are all platform independent.
 *
 * \@stable
 * @abstract
 */
var PlatformLocation = /** @class */ (function () {
    function PlatformLocation() {
    }
    return PlatformLocation;
}());
/**
 * \@whatItDoes indicates when a location is initialized
 * \@experimental
 */
var LOCATION_INITIALIZED = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Location Initialized');
/**
 * A serializable version of the event from onPopState or onHashChange
 *
 * \@experimental
 * @record
 */

/**
 * \@experimental
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `LocationStrategy` is responsible for representing and reading route state
 * from the browser's URL. Angular provides two strategies:
 * {\@link HashLocationStrategy} and {\@link PathLocationStrategy}.
 *
 * This is used under the hood of the {\@link Location} service.
 *
 * Applications should use the {\@link Router} or {\@link Location} services to
 * interact with application route state.
 *
 * For instance, {\@link HashLocationStrategy} produces URLs like
 * `http://example.com#/foo`, and {\@link PathLocationStrategy} produces
 * `http://example.com/foo` as an equivalent URL.
 *
 * See these two classes for more.
 *
 * \@stable
 * @abstract
 */
var LocationStrategy = /** @class */ (function () {
    function LocationStrategy() {
    }
    return LocationStrategy;
}());
/**
 * The `APP_BASE_HREF` token represents the base href to be used with the
 * {\@link PathLocationStrategy}.
 *
 * If you're using {\@link PathLocationStrategy}, you must provide a provider to a string
 * representing the URL prefix that should be preserved when generating and recognizing
 * URLs.
 *
 * ### Example
 *
 * ```typescript
 * import {Component, NgModule} from '\@angular/core';
 * import {APP_BASE_HREF} from '\@angular/common';
 *
 * \@NgModule({
 *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
 * })
 * class AppModule {}
 * ```
 *
 * \@stable
 */
var APP_BASE_HREF = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('appBaseHref');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental
 * @record
 */

/**
 * \@whatItDoes `Location` is a service that applications can use to interact with a browser's URL.
 * \@description
 * Depending on which {\@link LocationStrategy} is used, `Location` will either persist
 * to the URL's path or the URL's hash segment.
 *
 * Note: it's better to use {\@link Router#navigate} service to trigger route changes. Use
 * `Location` only if you need to interact with or create normalized URLs outside of
 * routing.
 *
 * `Location` is responsible for normalizing the URL against the application's base href.
 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
 * trailing slash:
 * - `/my/app/user/123` is normalized
 * - `my/app/user/123` **is not** normalized
 * - `/my/app/user/123/` **is not** normalized
 *
 * ### Example
 * {\@example common/location/ts/path_location_component.ts region='LocationComponent'}
 * \@stable
 */
var Location = /** @class */ (function () {
    function Location(platformStrategy) {
        var _this = this;
        /**
         * \@internal
         */
        this._subject = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._platformStrategy = platformStrategy;
        var /** @type {?} */ browserBaseHref = this._platformStrategy.getBaseHref();
        this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
        this._platformStrategy.onPopState(function (ev) {
            _this._subject.emit({
                'url': _this.path(true),
                'pop': true,
                'type': ev.type,
            });
        });
    }
    /**
     * Returns the normalized URL path.
     */
    // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
    // removed.
    /**
     * Returns the normalized URL path.
     * @param {?=} includeHash
     * @return {?}
     */
    Location.prototype.path = /**
     * Returns the normalized URL path.
     * @param {?=} includeHash
     * @return {?}
     */
    function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        return this.normalize(this._platformStrategy.path(includeHash));
    };
    /**
     * Normalizes the given path and compares to the current normalized path.
     */
    /**
     * Normalizes the given path and compares to the current normalized path.
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    Location.prototype.isCurrentPathEqualTo = /**
     * Normalizes the given path and compares to the current normalized path.
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    function (path, query) {
        if (query === void 0) { query = ''; }
        return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
    };
    /**
     * Given a string representing a URL, returns the normalized URL path without leading or
     * trailing slashes.
     */
    /**
     * Given a string representing a URL, returns the normalized URL path without leading or
     * trailing slashes.
     * @param {?} url
     * @return {?}
     */
    Location.prototype.normalize = /**
     * Given a string representing a URL, returns the normalized URL path without leading or
     * trailing slashes.
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
    };
    /**
     * Given a string representing a URL, returns the platform-specific external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     */
    /**
     * Given a string representing a URL, returns the platform-specific external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     * @param {?} url
     * @return {?}
     */
    Location.prototype.prepareExternalUrl = /**
     * Given a string representing a URL, returns the platform-specific external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (url && url[0] !== '/') {
            url = '/' + url;
        }
        return this._platformStrategy.prepareExternalUrl(url);
    };
    // TODO: rename this method to pushState
    /**
     * Changes the browsers URL to the normalized version of the given URL, and pushes a
     * new item onto the platform's history.
     */
    /**
     * Changes the browsers URL to the normalized version of the given URL, and pushes a
     * new item onto the platform's history.
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    Location.prototype.go = /**
     * Changes the browsers URL to the normalized version of the given URL, and pushes a
     * new item onto the platform's history.
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    function (path, query) {
        if (query === void 0) { query = ''; }
        this._platformStrategy.pushState(null, '', path, query);
    };
    /**
     * Changes the browsers URL to the normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     */
    /**
     * Changes the browsers URL to the normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    Location.prototype.replaceState = /**
     * Changes the browsers URL to the normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    function (path, query) {
        if (query === void 0) { query = ''; }
        this._platformStrategy.replaceState(null, '', path, query);
    };
    /**
     * Navigates forward in the platform's history.
     */
    /**
     * Navigates forward in the platform's history.
     * @return {?}
     */
    Location.prototype.forward = /**
     * Navigates forward in the platform's history.
     * @return {?}
     */
    function () { this._platformStrategy.forward(); };
    /**
     * Navigates back in the platform's history.
     */
    /**
     * Navigates back in the platform's history.
     * @return {?}
     */
    Location.prototype.back = /**
     * Navigates back in the platform's history.
     * @return {?}
     */
    function () { this._platformStrategy.back(); };
    /**
     * Subscribe to the platform's `popState` events.
     */
    /**
     * Subscribe to the platform's `popState` events.
     * @param {?} onNext
     * @param {?=} onThrow
     * @param {?=} onReturn
     * @return {?}
     */
    Location.prototype.subscribe = /**
     * Subscribe to the platform's `popState` events.
     * @param {?} onNext
     * @param {?=} onThrow
     * @param {?=} onReturn
     * @return {?}
     */
    function (onNext, onThrow, onReturn) {
        return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
    };
    /**
     * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
     * is.
     * @param {?} params
     * @return {?}
     */
    Location.normalizeQueryParams = /**
     * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
     * is.
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return params && params[0] !== '?' ? '?' + params : params;
    };
    /**
     * Given 2 parts of a url, join them with a slash if needed.
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    Location.joinWithSlash = /**
     * Given 2 parts of a url, join them with a slash if needed.
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        if (start.length == 0) {
            return end;
        }
        if (end.length == 0) {
            return start;
        }
        var /** @type {?} */ slashes = 0;
        if (start.endsWith('/')) {
            slashes++;
        }
        if (end.startsWith('/')) {
            slashes++;
        }
        if (slashes == 2) {
            return start + end.substring(1);
        }
        if (slashes == 1) {
            return start + end;
        }
        return start + '/' + end;
    };
    /**
     * If url has a trailing slash, remove it, otherwise return url as is. This
     * method looks for the first occurence of either #, ?, or the end of the
     * line as `/` characters after any of these should not be replaced.
     * @param {?} url
     * @return {?}
     */
    Location.stripTrailingSlash = /**
     * If url has a trailing slash, remove it, otherwise return url as is. This
     * method looks for the first occurence of either #, ?, or the end of the
     * line as `/` characters after any of these should not be replaced.
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var /** @type {?} */ match = url.match(/#|\?|$/);
        var /** @type {?} */ pathEndIdx = match && match.index || url.length;
        var /** @type {?} */ droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
        return url.slice(0, droppedSlashIdx) + url.slice(pathEndIdx);
    };
    Location.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Location.ctorParameters = function () { return [
        { type: LocationStrategy, },
    ]; };
    return Location;
}());
/**
 * @param {?} baseHref
 * @param {?} url
 * @return {?}
 */
function _stripBaseHref(baseHref, url) {
    return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
}
/**
 * @param {?} url
 * @return {?}
 */
function _stripIndexHtml(url) {
    return url.replace(/\/index.html$/, '');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Use URL hash for storing application location data.
 * \@description
 * `HashLocationStrategy` is a {\@link LocationStrategy} used to configure the
 * {\@link Location} service to represent its state in the
 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
 * of the browser's URL.
 *
 * For instance, if you call `location.go('/foo')`, the browser's URL will become
 * `example.com#/foo`.
 *
 * ### Example
 *
 * {\@example common/location/ts/hash_location_component.ts region='LocationComponent'}
 *
 * \@stable
 */
var HashLocationStrategy = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(HashLocationStrategy, _super);
    function HashLocationStrategy(_platformLocation, _baseHref) {
        var _this = _super.call(this) || this;
        _this._platformLocation = _platformLocation;
        _this._baseHref = '';
        if (_baseHref != null) {
            _this._baseHref = _baseHref;
        }
        return _this;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    HashLocationStrategy.prototype.onPopState = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._platformLocation.onPopState(fn);
        this._platformLocation.onHashChange(fn);
    };
    /**
     * @return {?}
     */
    HashLocationStrategy.prototype.getBaseHref = /**
     * @return {?}
     */
    function () { return this._baseHref; };
    /**
     * @param {?=} includeHash
     * @return {?}
     */
    HashLocationStrategy.prototype.path = /**
     * @param {?=} includeHash
     * @return {?}
     */
    function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        // the hash value is always prefixed with a `#`
        // and if it is empty then it will stay empty
        var /** @type {?} */ path = this._platformLocation.hash;
        if (path == null)
            path = '#';
        return path.length > 0 ? path.substring(1) : path;
    };
    /**
     * @param {?} internal
     * @return {?}
     */
    HashLocationStrategy.prototype.prepareExternalUrl = /**
     * @param {?} internal
     * @return {?}
     */
    function (internal) {
        var /** @type {?} */ url = Location.joinWithSlash(this._baseHref, internal);
        return url.length > 0 ? ('#' + url) : url;
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} path
     * @param {?} queryParams
     * @return {?}
     */
    HashLocationStrategy.prototype.pushState = /**
     * @param {?} state
     * @param {?} title
     * @param {?} path
     * @param {?} queryParams
     * @return {?}
     */
    function (state, title, path, queryParams) {
        var /** @type {?} */ url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
        if (url.length == 0) {
            url = this._platformLocation.pathname;
        }
        this._platformLocation.pushState(state, title, url);
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} path
     * @param {?} queryParams
     * @return {?}
     */
    HashLocationStrategy.prototype.replaceState = /**
     * @param {?} state
     * @param {?} title
     * @param {?} path
     * @param {?} queryParams
     * @return {?}
     */
    function (state, title, path, queryParams) {
        var /** @type {?} */ url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
        if (url.length == 0) {
            url = this._platformLocation.pathname;
        }
        this._platformLocation.replaceState(state, title, url);
    };
    /**
     * @return {?}
     */
    HashLocationStrategy.prototype.forward = /**
     * @return {?}
     */
    function () { this._platformLocation.forward(); };
    /**
     * @return {?}
     */
    HashLocationStrategy.prototype.back = /**
     * @return {?}
     */
    function () { this._platformLocation.back(); };
    HashLocationStrategy.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HashLocationStrategy.ctorParameters = function () { return [
        { type: PlatformLocation, },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [APP_BASE_HREF,] },] },
    ]; };
    return HashLocationStrategy;
}(LocationStrategy));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Use URL for storing application location data.
 * \@description
 * `PathLocationStrategy` is a {\@link LocationStrategy} used to configure the
 * {\@link Location} service to represent its state in the
 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
 * browser's URL.
 *
 * If you're using `PathLocationStrategy`, you must provide a {\@link APP_BASE_HREF}
 * or add a base element to the document. This URL prefix that will be preserved
 * when generating and recognizing URLs.
 *
 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * Similarly, if you add `<base href='/my/app'/>` to the document and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * ### Example
 *
 * {\@example common/location/ts/path_location_component.ts region='LocationComponent'}
 *
 * \@stable
 */
var PathLocationStrategy = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(PathLocationStrategy, _super);
    function PathLocationStrategy(_platformLocation, href) {
        var _this = _super.call(this) || this;
        _this._platformLocation = _platformLocation;
        if (href == null) {
            href = _this._platformLocation.getBaseHrefFromDOM();
        }
        if (href == null) {
            throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
        }
        _this._baseHref = href;
        return _this;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    PathLocationStrategy.prototype.onPopState = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._platformLocation.onPopState(fn);
        this._platformLocation.onHashChange(fn);
    };
    /**
     * @return {?}
     */
    PathLocationStrategy.prototype.getBaseHref = /**
     * @return {?}
     */
    function () { return this._baseHref; };
    /**
     * @param {?} internal
     * @return {?}
     */
    PathLocationStrategy.prototype.prepareExternalUrl = /**
     * @param {?} internal
     * @return {?}
     */
    function (internal) {
        return Location.joinWithSlash(this._baseHref, internal);
    };
    /**
     * @param {?=} includeHash
     * @return {?}
     */
    PathLocationStrategy.prototype.path = /**
     * @param {?=} includeHash
     * @return {?}
     */
    function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        var /** @type {?} */ pathname = this._platformLocation.pathname +
            Location.normalizeQueryParams(this._platformLocation.search);
        var /** @type {?} */ hash = this._platformLocation.hash;
        return hash && includeHash ? "" + pathname + hash : pathname;
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    PathLocationStrategy.prototype.pushState = /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    function (state, title, url, queryParams) {
        var /** @type {?} */ externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
        this._platformLocation.pushState(state, title, externalUrl);
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    PathLocationStrategy.prototype.replaceState = /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    function (state, title, url, queryParams) {
        var /** @type {?} */ externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
        this._platformLocation.replaceState(state, title, externalUrl);
    };
    /**
     * @return {?}
     */
    PathLocationStrategy.prototype.forward = /**
     * @return {?}
     */
    function () { this._platformLocation.forward(); };
    /**
     * @return {?}
     */
    PathLocationStrategy.prototype.back = /**
     * @return {?}
     */
    function () { this._platformLocation.back(); };
    PathLocationStrategy.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PathLocationStrategy.ctorParameters = function () { return [
        { type: PlatformLocation, },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [APP_BASE_HREF,] },] },
    ]; };
    return PathLocationStrategy;
}(LocationStrategy));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
/**
 * \@internal
 */
var CURRENCIES = {
    'AOA': [, 'Kz'],
    'ARS': [, '$'],
    'AUD': ['A$', '$'],
    'BAM': [, 'KM'],
    'BBD': [, '$'],
    'BDT': [, '৳'],
    'BMD': [, '$'],
    'BND': [, '$'],
    'BOB': [, 'Bs'],
    'BRL': ['R$'],
    'BSD': [, '$'],
    'BWP': [, 'P'],
    'BYN': [, 'р.'],
    'BZD': [, '$'],
    'CAD': ['CA$', '$'],
    'CLP': [, '$'],
    'CNY': ['CN¥', '¥'],
    'COP': [, '$'],
    'CRC': [, '₡'],
    'CUC': [, '$'],
    'CUP': [, '$'],
    'CZK': [, 'Kč'],
    'DKK': [, 'kr'],
    'DOP': [, '$'],
    'EGP': [, 'E£'],
    'ESP': [, '₧'],
    'EUR': ['€'],
    'FJD': [, '$'],
    'FKP': [, '£'],
    'GBP': ['£'],
    'GEL': [, '₾'],
    'GIP': [, '£'],
    'GNF': [, 'FG'],
    'GTQ': [, 'Q'],
    'GYD': [, '$'],
    'HKD': ['HK$', '$'],
    'HNL': [, 'L'],
    'HRK': [, 'kn'],
    'HUF': [, 'Ft'],
    'IDR': [, 'Rp'],
    'ILS': ['₪'],
    'INR': ['₹'],
    'ISK': [, 'kr'],
    'JMD': [, '$'],
    'JPY': ['¥'],
    'KHR': [, '៛'],
    'KMF': [, 'CF'],
    'KPW': [, '₩'],
    'KRW': ['₩'],
    'KYD': [, '$'],
    'KZT': [, '₸'],
    'LAK': [, '₭'],
    'LBP': [, 'L£'],
    'LKR': [, 'Rs'],
    'LRD': [, '$'],
    'LTL': [, 'Lt'],
    'LVL': [, 'Ls'],
    'MGA': [, 'Ar'],
    'MMK': [, 'K'],
    'MNT': [, '₮'],
    'MUR': [, 'Rs'],
    'MXN': ['MX$', '$'],
    'MYR': [, 'RM'],
    'NAD': [, '$'],
    'NGN': [, '₦'],
    'NIO': [, 'C$'],
    'NOK': [, 'kr'],
    'NPR': [, 'Rs'],
    'NZD': ['NZ$', '$'],
    'PHP': [, '₱'],
    'PKR': [, 'Rs'],
    'PLN': [, 'zł'],
    'PYG': [, '₲'],
    'RON': [, 'lei'],
    'RUB': [, '₽'],
    'RUR': [, 'р.'],
    'RWF': [, 'RF'],
    'SBD': [, '$'],
    'SEK': [, 'kr'],
    'SGD': [, '$'],
    'SHP': [, '£'],
    'SRD': [, '$'],
    'SSP': [, '£'],
    'STD': [, 'Db'],
    'SYP': [, '£'],
    'THB': [, '฿'],
    'TOP': [, 'T$'],
    'TRY': [, '₺'],
    'TTD': [, '$'],
    'TWD': ['NT$', '$'],
    'UAH': [, '₴'],
    'USD': ['$'],
    'UYU': [, '$'],
    'VEF': [, 'Bs'],
    'VND': ['₫'],
    'XAF': ['FCFA'],
    'XCD': ['EC$', '$'],
    'XOF': ['CFA'],
    'XPF': ['CFPF'],
    'ZAR': [, 'R'],
    'ZMW': [, 'ZK'],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
/**
 * @param {?} n
 * @return {?}
 */
function plural(n) {
    var /** @type {?} */ i = Math.floor(Math.abs(n)), /** @type {?} */ v = n.toString().replace(/^[^.]*\.?/, '').length;
    if (i === 1 && v === 0)
        return 1;
    return 5;
}
var localeEn = [
    'en',
    [
        ['a', 'p'],
        ['AM', 'PM'],
    ],
    [
        ['AM', 'PM'],
        ,
    ],
    [
        ['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    ],
    ,
    [
        ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'
        ]
    ],
    ,
    [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']], 0, [6, 0],
    ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
    ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
    [
        '{1}, {0}',
        ,
        '{1} \'at\' {0}',
    ],
    ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
    ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'], '$', 'US Dollar', plural
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental i18n support is experimental.
 */
var LOCALE_DATA = {};
/**
 * Register global data to be used internally by Angular. See the
 * {\@linkDocs guide/i18n#i18n-pipes "I18n guide"} to know how to import additional locale data.
 *
 * \@experimental i18n support is experimental.
 * @param {?} data
 * @param {?=} localeId
 * @param {?=} extraData
 * @return {?}
 */
function registerLocaleData(data, localeId, extraData) {
    if (typeof localeId !== 'string') {
        extraData = localeId;
        localeId = data[0 /* LocaleId */];
    }
    localeId = localeId.toLowerCase().replace(/_/g, '-');
    LOCALE_DATA[localeId] = data;
    if (extraData) {
        LOCALE_DATA[localeId][18 /* ExtraData */] = extraData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
var NumberFormatStyle = {
    Decimal: 0,
    Percent: 1,
    Currency: 2,
    Scientific: 3,
};
NumberFormatStyle[NumberFormatStyle.Decimal] = "Decimal";
NumberFormatStyle[NumberFormatStyle.Percent] = "Percent";
NumberFormatStyle[NumberFormatStyle.Currency] = "Currency";
NumberFormatStyle[NumberFormatStyle.Scientific] = "Scientific";
/** @enum {number} */
var Plural = {
    Zero: 0,
    One: 1,
    Two: 2,
    Few: 3,
    Many: 4,
    Other: 5,
};
Plural[Plural.Zero] = "Zero";
Plural[Plural.One] = "One";
Plural[Plural.Two] = "Two";
Plural[Plural.Few] = "Few";
Plural[Plural.Many] = "Many";
Plural[Plural.Other] = "Other";
/** @enum {number} */
var FormStyle = {
    Format: 0,
    Standalone: 1,
};
FormStyle[FormStyle.Format] = "Format";
FormStyle[FormStyle.Standalone] = "Standalone";
/** @enum {number} */
var TranslationWidth = {
    Narrow: 0,
    Abbreviated: 1,
    Wide: 2,
    Short: 3,
};
TranslationWidth[TranslationWidth.Narrow] = "Narrow";
TranslationWidth[TranslationWidth.Abbreviated] = "Abbreviated";
TranslationWidth[TranslationWidth.Wide] = "Wide";
TranslationWidth[TranslationWidth.Short] = "Short";
/** @enum {number} */
var FormatWidth = {
    Short: 0,
    Medium: 1,
    Long: 2,
    Full: 3,
};
FormatWidth[FormatWidth.Short] = "Short";
FormatWidth[FormatWidth.Medium] = "Medium";
FormatWidth[FormatWidth.Long] = "Long";
FormatWidth[FormatWidth.Full] = "Full";
/** @enum {number} */
var NumberSymbol = {
    Decimal: 0,
    Group: 1,
    List: 2,
    PercentSign: 3,
    PlusSign: 4,
    MinusSign: 5,
    Exponential: 6,
    SuperscriptingExponent: 7,
    PerMille: 8,
    Infinity: 9,
    NaN: 10,
    TimeSeparator: 11,
    CurrencyDecimal: 12,
    CurrencyGroup: 13,
};
NumberSymbol[NumberSymbol.Decimal] = "Decimal";
NumberSymbol[NumberSymbol.Group] = "Group";
NumberSymbol[NumberSymbol.List] = "List";
NumberSymbol[NumberSymbol.PercentSign] = "PercentSign";
NumberSymbol[NumberSymbol.PlusSign] = "PlusSign";
NumberSymbol[NumberSymbol.MinusSign] = "MinusSign";
NumberSymbol[NumberSymbol.Exponential] = "Exponential";
NumberSymbol[NumberSymbol.SuperscriptingExponent] = "SuperscriptingExponent";
NumberSymbol[NumberSymbol.PerMille] = "PerMille";
NumberSymbol[NumberSymbol.Infinity] = "Infinity";
NumberSymbol[NumberSymbol.NaN] = "NaN";
NumberSymbol[NumberSymbol.TimeSeparator] = "TimeSeparator";
NumberSymbol[NumberSymbol.CurrencyDecimal] = "CurrencyDecimal";
NumberSymbol[NumberSymbol.CurrencyGroup] = "CurrencyGroup";
/** @enum {number} */
var WeekDay = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
};
WeekDay[WeekDay.Sunday] = "Sunday";
WeekDay[WeekDay.Monday] = "Monday";
WeekDay[WeekDay.Tuesday] = "Tuesday";
WeekDay[WeekDay.Wednesday] = "Wednesday";
WeekDay[WeekDay.Thursday] = "Thursday";
WeekDay[WeekDay.Friday] = "Friday";
WeekDay[WeekDay.Saturday] = "Saturday";
/**
 * The locale id for the chosen locale (e.g `en-GB`).
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @return {?}
 */
function getLocaleId(locale) {
    return findLocaleData(locale)[0 /* LocaleId */];
}
/**
 * Periods of the day (e.g. `[AM, PM]` for en-US).
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @param {?} formStyle
 * @param {?} width
 * @return {?}
 */
function getLocaleDayPeriods(locale, formStyle, width) {
    var /** @type {?} */ data = findLocaleData(locale);
    var /** @type {?} */ amPmData = /** @type {?} */ ([data[1 /* DayPeriodsFormat */], data[2 /* DayPeriodsStandalone */]]);
    var /** @type {?} */ amPm = getLastDefinedValue(amPmData, formStyle);
    return getLastDefinedValue(amPm, width);
}
/**
 * Days of the week for the Gregorian calendar (e.g. `[Sunday, Monday, ... Saturday]` for en-US).
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @param {?} formStyle
 * @param {?} width
 * @return {?}
 */
function getLocaleDayNames(locale, formStyle, width) {
    var /** @type {?} */ data = findLocaleData(locale);
    var /** @type {?} */ daysData = /** @type {?} */ ([data[3 /* DaysFormat */], data[4 /* DaysStandalone */]]);
    var /** @type {?} */ days = getLastDefinedValue(daysData, formStyle);
    return getLastDefinedValue(days, width);
}
/**
 * Months of the year for the Gregorian calendar (e.g. `[January, February, ...]` for en-US).
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @param {?} formStyle
 * @param {?} width
 * @return {?}
 */
function getLocaleMonthNames(locale, formStyle, width) {
    var /** @type {?} */ data = findLocaleData(locale);
    var /** @type {?} */ monthsData = /** @type {?} */ ([data[5 /* MonthsFormat */], data[6 /* MonthsStandalone */]]);
    var /** @type {?} */ months = getLastDefinedValue(monthsData, formStyle);
    return getLastDefinedValue(months, width);
}
/**
 * Eras for the Gregorian calendar (e.g. AD/BC).
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @param {?} width
 * @return {?}
 */
function getLocaleEraNames(locale, width) {
    var /** @type {?} */ data = findLocaleData(locale);
    var /** @type {?} */ erasData = /** @type {?} */ (data[7 /* Eras */]);
    return getLastDefinedValue(erasData, width);
}
/**
 * First day of the week for this locale, based on english days (Sunday = 0, Monday = 1, ...).
 * For example in french the value would be 1 because the first day of the week is Monday.
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @return {?}
 */
function getLocaleFirstDayOfWeek(locale) {
    var /** @type {?} */ data = findLocaleData(locale);
    return data[8 /* FirstDayOfWeek */];
}
/**
 * Range of days in the week that represent the week-end for this locale, based on english days
 * (Sunday = 0, Monday = 1, ...).
 * For example in english the value would be [6,0] for Saturday to Sunday.
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @return {?}
 */
function getLocaleWeekEndRange(locale) {
    var /** @type {?} */ data = findLocaleData(locale);
    return data[9 /* WeekendRange */];
}
/**
 * Date format that depends on the locale.
 *
 * There are four basic date formats:
 * - `full` should contain long-weekday (EEEE), year (y), long-month (MMMM), day (d).
 *
 *  For example, English uses `EEEE, MMMM d, y`, corresponding to a date like
 *  "Tuesday, September 14, 1999".
 *
 * - `long` should contain year, long-month, day.
 *
 *  For example, `MMMM d, y`, corresponding to a date like "September 14, 1999".
 *
 * - `medium` should contain year, abbreviated-month (MMM), day.
 *
 *  For example, `MMM d, y`, corresponding to a date like "Sep 14, 1999".
 *  For languages that do not use abbreviated months, use the numeric month (MM/M). For example,
 *  `y/MM/dd`, corresponding to a date like "1999/09/14".
 *
 * - `short` should contain year, numeric-month (MM/M), and day.
 *
 *  For example, `M/d/yy`, corresponding to a date like "9/14/99".
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @param {?} width
 * @return {?}
 */
function getLocaleDateFormat(locale, width) {
    var /** @type {?} */ data = findLocaleData(locale);
    return getLastDefinedValue(data[10 /* DateFormat */], width);
}
/**
 * Time format that depends on the locale.
 *
 * The standard formats include four basic time formats:
 * - `full` should contain hour (h/H), minute (mm), second (ss), and zone (zzzz).
 * - `long` should contain hour, minute, second, and zone (z)
 * - `medium` should contain hour, minute, second.
 * - `short` should contain hour, minute.
 *
 * Note: The patterns depend on whether the main country using your language uses 12-hour time or
 * not:
 * - For 12-hour time, use a pattern like `hh:mm a` using h to mean a 12-hour clock cycle running
 * 1 through 12 (midnight plus 1 minute is 12:01), or using K to mean a 12-hour clock cycle
 * running 0 through 11 (midnight plus 1 minute is 0:01).
 * - For 24-hour time, use a pattern like `HH:mm` using H to mean a 24-hour clock cycle running 0
 * through 23 (midnight plus 1 minute is 0:01), or using k to mean a 24-hour clock cycle running
 * 1 through 24 (midnight plus 1 minute is 24:01).
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @param {?} width
 * @return {?}
 */
function getLocaleTimeFormat(locale, width) {
    var /** @type {?} */ data = findLocaleData(locale);
    return getLastDefinedValue(data[11 /* TimeFormat */], width);
}
/**
 * Date-time format that depends on the locale.
 *
 * The date-time pattern shows how to combine separate patterns for date (represented by {1})
 * and time (represented by {0}) into a single pattern. It usually doesn't need to be changed.
 * What you want to pay attention to are:
 * - possibly removing a space for languages that don't use it, such as many East Asian languages
 * - possibly adding a comma, other punctuation, or a combining word
 *
 * For example:
 * - English uses `{1} 'at' {0}` or `{1}, {0}` (depending on date style), while Japanese uses
 *  `{1}{0}`.
 * - An English formatted date-time using the combining pattern `{1}, {0}` could be
 *  `Dec 10, 2010, 3:59:49 PM`. Notice the comma and space between the date portion and the time
 *  portion.
 *
 * There are four formats (`full`, `long`, `medium`, `short`); the determination of which to use
 * is normally based on the date style. For example, if the date has a full month and weekday
 * name, the full combining pattern will be used to combine that with a time. If the date has
 * numeric month, the short version of the combining pattern will be used to combine that with a
 * time. English uses `{1} 'at' {0}` for full and long styles, and `{1}, {0}` for medium and short
 * styles.
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @param {?} width
 * @return {?}
 */
function getLocaleDateTimeFormat(locale, width) {
    var /** @type {?} */ data = findLocaleData(locale);
    var /** @type {?} */ dateTimeFormatData = /** @type {?} */ (data[12 /* DateTimeFormat */]);
    return getLastDefinedValue(dateTimeFormatData, width);
}
/**
 * Number symbol that can be used to replace placeholders in number formats.
 * See {\@link NumberSymbol} for more information.
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @param {?} symbol
 * @return {?}
 */
function getLocaleNumberSymbol(locale, symbol) {
    var /** @type {?} */ data = findLocaleData(locale);
    var /** @type {?} */ res = data[13 /* NumberSymbols */][symbol];
    if (typeof res === 'undefined') {
        if (symbol === NumberSymbol.CurrencyDecimal) {
            return data[13 /* NumberSymbols */][NumberSymbol.Decimal];
        }
        else if (symbol === NumberSymbol.CurrencyGroup) {
            return data[13 /* NumberSymbols */][NumberSymbol.Group];
        }
    }
    return res;
}
/**
 * Number format that depends on the locale.
 *
 * Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
 * when used to format the number 12345.678 could result in "12'345,67". That would happen if the
 * grouping separator for your language is an apostrophe, and the decimal separator is a comma.
 *
 * <b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders;
 * they stand for the decimal separator, and so on, and are NOT real characters.
 * You must NOT "translate" the placeholders; for example, don't change `.` to `,` even though in
 * your language the decimal point is written with a comma. The symbols should be replaced by the
 * local equivalents, using the Number Symbols for your language.
 *
 * Here are the special characters used in number patterns:
 *
 * | Symbol | Meaning |
 * |--------|---------|
 * | . | Replaced automatically by the character used for the decimal point. |
 * | , | Replaced by the "grouping" (thousands) separator. |
 * | 0 | Replaced by a digit (or zero if there aren't enough digits). |
 * | # | Replaced by a digit (or nothing if there aren't enough). |
 * | ¤ | This will be replaced by a currency symbol, such as $ or USD. |
 * | % | This marks a percent format. The % symbol may change position, but must be retained. |
 * | E | This marks a scientific format. The E symbol may change position, but must be retained. |
 * | ' | Special characters used as literal characters are quoted with ASCII single quotes. |
 *
 * You can find more information
 * [on the CLDR website](http://cldr.unicode.org/translation/number-patterns)
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @param {?} type
 * @return {?}
 */
function getLocaleNumberFormat(locale, type) {
    var /** @type {?} */ data = findLocaleData(locale);
    return data[14 /* NumberFormats */][type];
}
/**
 * The symbol used to represent the currency for the main country using this locale (e.g. $ for
 * the locale en-US).
 * The symbol will be `null` if the main country cannot be determined.
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @return {?}
 */
function getLocaleCurrencySymbol(locale) {
    var /** @type {?} */ data = findLocaleData(locale);
    return data[15 /* CurrencySymbol */] || null;
}
/**
 * The name of the currency for the main country using this locale (e.g. USD for the locale
 * en-US).
 * The name will be `null` if the main country cannot be determined.
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @return {?}
 */
function getLocaleCurrencyName(locale) {
    var /** @type {?} */ data = findLocaleData(locale);
    return data[16 /* CurrencyName */] || null;
}
/**
 * The locale plural function used by ICU expressions to determine the plural case to use.
 * See {\@link NgPlural} for more information.
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @return {?}
 */
function getLocalePluralCase(locale) {
    var /** @type {?} */ data = findLocaleData(locale);
    return data[17 /* PluralCase */];
}
/**
 * @param {?} data
 * @return {?}
 */
function checkFullData(data) {
    if (!data[18 /* ExtraData */]) {
        throw new Error("Missing extra locale data for the locale \"" + data[0 /* LocaleId */] + "\". Use \"registerLocaleData\" to load new data. See the \"I18n guide\" on angular.io to know more.");
    }
}
/**
 * Rules used to determine which day period to use (See `dayPeriods` below).
 * The rules can either be an array or a single value. If it's an array, consider it as "from"
 * and "to". If it's a single value then it means that the period is only valid at this exact
 * value.
 * There is always the same number of rules as the number of day periods, which means that the
 * first rule is applied to the first day period and so on.
 * You should fallback to AM/PM when there are no rules available.
 *
 * Note: this is only available if you load the full locale data.
 * See the {\@linkDocs guide/i18n#i18n-pipes "I18n guide"} to know how to import additional locale
 * data.
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @return {?}
 */
function getLocaleExtraDayPeriodRules(locale) {
    var /** @type {?} */ data = findLocaleData(locale);
    checkFullData(data);
    var /** @type {?} */ rules = data[18 /* ExtraData */][2 /* ExtraDayPeriodsRules */] || [];
    return rules.map(function (rule) {
        if (typeof rule === 'string') {
            return extractTime(rule);
        }
        return [extractTime(rule[0]), extractTime(rule[1])];
    });
}
/**
 * Day Periods indicate roughly how the day is broken up in different languages (e.g. morning,
 * noon, afternoon, midnight, ...).
 * You should use the function {\@link getLocaleExtraDayPeriodRules} to determine which period to
 * use.
 * You should fallback to AM/PM when there are no day periods available.
 *
 * Note: this is only available if you load the full locale data.
 * See the {\@linkDocs guide/i18n#i18n-pipes "I18n guide"} to know how to import additional locale
 * data.
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @param {?} formStyle
 * @param {?} width
 * @return {?}
 */
function getLocaleExtraDayPeriods(locale, formStyle, width) {
    var /** @type {?} */ data = findLocaleData(locale);
    checkFullData(data);
    var /** @type {?} */ dayPeriodsData = /** @type {?} */ ([
        data[18 /* ExtraData */][0 /* ExtraDayPeriodFormats */],
        data[18 /* ExtraData */][1 /* ExtraDayPeriodStandalone */]
    ]);
    var /** @type {?} */ dayPeriods = getLastDefinedValue(dayPeriodsData, formStyle) || [];
    return getLastDefinedValue(dayPeriods, width) || [];
}
/**
 * Returns the first value that is defined in an array, going backwards.
 *
 * To avoid repeating the same data (e.g. when "format" and "standalone" are the same) we only
 * add the first one to the locale data arrays, the other ones are only defined when different.
 * We use this function to retrieve the first defined value.
 *
 * \@experimental i18n support is experimental.
 * @template T
 * @param {?} data
 * @param {?} index
 * @return {?}
 */
function getLastDefinedValue(data, index) {
    for (var /** @type {?} */ i = index; i > -1; i--) {
        if (typeof data[i] !== 'undefined') {
            return data[i];
        }
    }
    throw new Error('Locale data API: locale data undefined');
}
/**
 * Extract the hours and minutes from a string like "15:45"
 * @param {?} time
 * @return {?}
 */
function extractTime(time) {
    var _a = time.split(':'), h = _a[0], m = _a[1];
    return { hours: +h, minutes: +m };
}
/**
 * Finds the locale data for a locale id
 *
 * \@experimental i18n support is experimental.
 * @param {?} locale
 * @return {?}
 */
function findLocaleData(locale) {
    var /** @type {?} */ normalizedLocale = locale.toLowerCase().replace(/_/g, '-');
    var /** @type {?} */ match = LOCALE_DATA[normalizedLocale];
    if (match) {
        return match;
    }
    // let's try to find a parent locale
    var /** @type {?} */ parentLocale = normalizedLocale.split('-')[0];
    match = LOCALE_DATA[parentLocale];
    if (match) {
        return match;
    }
    if (parentLocale === 'en') {
        return localeEn;
    }
    throw new Error("Missing locale data for the locale \"" + locale + "\".");
}
/**
 * Return the currency symbol for a given currency code, or the code if no symbol available
 * (e.g.: format narrow = $, format wide = US$, code = USD)
 *
 * \@experimental i18n support is experimental.
 * @param {?} code
 * @param {?} format
 * @return {?}
 */
function getCurrencySymbol(code, format) {
    var /** @type {?} */ currency = CURRENCIES[code] || [];
    var /** @type {?} */ symbolNarrow = currency[1];
    if (format === 'narrow' && typeof symbolNarrow === 'string') {
        return symbolNarrow;
    }
    return currency[0] || code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated from v5
 */
var DEPRECATED_PLURAL_FN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('UseV4Plurals');
/**
 * \@experimental
 * @abstract
 */
var NgLocalization = /** @class */ (function () {
    function NgLocalization() {
    }
    return NgLocalization;
}());
/**
 * Returns the plural category for a given value.
 * - "=value" when the case exists,
 * - the plural category otherwise
 * @param {?} value
 * @param {?} cases
 * @param {?} ngLocalization
 * @param {?=} locale
 * @return {?}
 */
function getPluralCategory(value, cases, ngLocalization, locale) {
    var /** @type {?} */ key = "=" + value;
    if (cases.indexOf(key) > -1) {
        return key;
    }
    key = ngLocalization.getPluralCategory(value, locale);
    if (cases.indexOf(key) > -1) {
        return key;
    }
    if (cases.indexOf('other') > -1) {
        return 'other';
    }
    throw new Error("No plural message found for value \"" + value + "\"");
}
/**
 * Returns the plural case based on the locale
 *
 * \@experimental
 */
var NgLocaleLocalization = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(NgLocaleLocalization, _super);
    function NgLocaleLocalization(locale, /** @deprecated from v5 */
        deprecatedPluralFn) {
        var _this = _super.call(this) || this;
        _this.locale = locale;
        _this.deprecatedPluralFn = deprecatedPluralFn;
        return _this;
    }
    /**
     * @param {?} value
     * @param {?=} locale
     * @return {?}
     */
    NgLocaleLocalization.prototype.getPluralCategory = /**
     * @param {?} value
     * @param {?=} locale
     * @return {?}
     */
    function (value, locale) {
        var /** @type {?} */ plural = this.deprecatedPluralFn ? this.deprecatedPluralFn(locale || this.locale, value) :
            getLocalePluralCase(locale || this.locale)(value);
        switch (plural) {
            case Plural.Zero:
                return 'zero';
            case Plural.One:
                return 'one';
            case Plural.Two:
                return 'two';
            case Plural.Few:
                return 'few';
            case Plural.Many:
                return 'many';
            default:
                return 'other';
        }
    };
    NgLocaleLocalization.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    NgLocaleLocalization.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [DEPRECATED_PLURAL_FN,] },] },
    ]; };
    return NgLocaleLocalization;
}(NgLocalization));
/**
 * Returns the plural case based on the locale
 *
 * @deprecated from v5 the plural case function is in locale data files common/locales/*.ts
 * \@experimental
 * @param {?} locale
 * @param {?} nLike
 * @return {?}
 */
function getPluralCase(locale, nLike) {
    // TODO(vicb): lazy compute
    if (typeof nLike === 'string') {
        nLike = parseInt(/** @type {?} */ (nLike), 10);
    }
    var /** @type {?} */ n = /** @type {?} */ (nLike);
    var /** @type {?} */ nDecimal = n.toString().replace(/^[^.]*\.?/, '');
    var /** @type {?} */ i = Math.floor(Math.abs(n));
    var /** @type {?} */ v = nDecimal.length;
    var /** @type {?} */ f = parseInt(nDecimal, 10);
    var /** @type {?} */ t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
    var /** @type {?} */ lang = locale.split('-')[0].toLowerCase();
    switch (lang) {
        case 'af':
        case 'asa':
        case 'az':
        case 'bem':
        case 'bez':
        case 'bg':
        case 'brx':
        case 'ce':
        case 'cgg':
        case 'chr':
        case 'ckb':
        case 'ee':
        case 'el':
        case 'eo':
        case 'es':
        case 'eu':
        case 'fo':
        case 'fur':
        case 'gsw':
        case 'ha':
        case 'haw':
        case 'hu':
        case 'jgo':
        case 'jmc':
        case 'ka':
        case 'kk':
        case 'kkj':
        case 'kl':
        case 'ks':
        case 'ksb':
        case 'ky':
        case 'lb':
        case 'lg':
        case 'mas':
        case 'mgo':
        case 'ml':
        case 'mn':
        case 'nb':
        case 'nd':
        case 'ne':
        case 'nn':
        case 'nnh':
        case 'nyn':
        case 'om':
        case 'or':
        case 'os':
        case 'ps':
        case 'rm':
        case 'rof':
        case 'rwk':
        case 'saq':
        case 'seh':
        case 'sn':
        case 'so':
        case 'sq':
        case 'ta':
        case 'te':
        case 'teo':
        case 'tk':
        case 'tr':
        case 'ug':
        case 'uz':
        case 'vo':
        case 'vun':
        case 'wae':
        case 'xog':
            if (n === 1)
                return Plural.One;
            return Plural.Other;
        case 'ak':
        case 'ln':
        case 'mg':
        case 'pa':
        case 'ti':
            if (n === Math.floor(n) && n >= 0 && n <= 1)
                return Plural.One;
            return Plural.Other;
        case 'am':
        case 'as':
        case 'bn':
        case 'fa':
        case 'gu':
        case 'hi':
        case 'kn':
        case 'mr':
        case 'zu':
            if (i === 0 || n === 1)
                return Plural.One;
            return Plural.Other;
        case 'ar':
            if (n === 0)
                return Plural.Zero;
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
                return Plural.Few;
            if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
                return Plural.Many;
            return Plural.Other;
        case 'ast':
        case 'ca':
        case 'de':
        case 'en':
        case 'et':
        case 'fi':
        case 'fy':
        case 'gl':
        case 'it':
        case 'nl':
        case 'sv':
        case 'sw':
        case 'ur':
        case 'yi':
            if (i === 1 && v === 0)
                return Plural.One;
            return Plural.Other;
        case 'be':
            if (n % 10 === 1 && !(n % 100 === 11))
                return Plural.One;
            if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
                !(n % 100 >= 12 && n % 100 <= 14))
                return Plural.Few;
            if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
                n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
                return Plural.Many;
            return Plural.Other;
        case 'br':
            if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
                return Plural.One;
            if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
                return Plural.Two;
            if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) &&
                !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 ||
                    n % 100 >= 90 && n % 100 <= 99))
                return Plural.Few;
            if (!(n === 0) && n % 1e6 === 0)
                return Plural.Many;
            return Plural.Other;
        case 'bs':
        case 'hr':
        case 'sr':
            if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
                return Plural.One;
            if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                !(i % 100 >= 12 && i % 100 <= 14) ||
                f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
                    !(f % 100 >= 12 && f % 100 <= 14))
                return Plural.Few;
            return Plural.Other;
        case 'cs':
        case 'sk':
            if (i === 1 && v === 0)
                return Plural.One;
            if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
                return Plural.Few;
            if (!(v === 0))
                return Plural.Many;
            return Plural.Other;
        case 'cy':
            if (n === 0)
                return Plural.Zero;
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            if (n === 3)
                return Plural.Few;
            if (n === 6)
                return Plural.Many;
            return Plural.Other;
        case 'da':
            if (n === 1 || !(t === 0) && (i === 0 || i === 1))
                return Plural.One;
            return Plural.Other;
        case 'dsb':
        case 'hsb':
            if (v === 0 && i % 100 === 1 || f % 100 === 1)
                return Plural.One;
            if (v === 0 && i % 100 === 2 || f % 100 === 2)
                return Plural.Two;
            if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
                f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
                return Plural.Few;
            return Plural.Other;
        case 'ff':
        case 'fr':
        case 'hy':
        case 'kab':
            if (i === 0 || i === 1)
                return Plural.One;
            return Plural.Other;
        case 'fil':
            if (v === 0 && (i === 1 || i === 2 || i === 3) ||
                v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) ||
                !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
                return Plural.One;
            return Plural.Other;
        case 'ga':
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            if (n === Math.floor(n) && n >= 3 && n <= 6)
                return Plural.Few;
            if (n === Math.floor(n) && n >= 7 && n <= 10)
                return Plural.Many;
            return Plural.Other;
        case 'gd':
            if (n === 1 || n === 11)
                return Plural.One;
            if (n === 2 || n === 12)
                return Plural.Two;
            if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
                return Plural.Few;
            return Plural.Other;
        case 'gv':
            if (v === 0 && i % 10 === 1)
                return Plural.One;
            if (v === 0 && i % 10 === 2)
                return Plural.Two;
            if (v === 0 &&
                (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
                return Plural.Few;
            if (!(v === 0))
                return Plural.Many;
            return Plural.Other;
        case 'he':
            if (i === 1 && v === 0)
                return Plural.One;
            if (i === 2 && v === 0)
                return Plural.Two;
            if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
                return Plural.Many;
            return Plural.Other;
        case 'is':
            if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0))
                return Plural.One;
            return Plural.Other;
        case 'ksh':
            if (n === 0)
                return Plural.Zero;
            if (n === 1)
                return Plural.One;
            return Plural.Other;
        case 'kw':
        case 'naq':
        case 'se':
        case 'smn':
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            return Plural.Other;
        case 'lag':
            if (n === 0)
                return Plural.Zero;
            if ((i === 0 || i === 1) && !(n === 0))
                return Plural.One;
            return Plural.Other;
        case 'lt':
            if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
                return Plural.One;
            if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 &&
                !(n % 100 >= 11 && n % 100 <= 19))
                return Plural.Few;
            if (!(f === 0))
                return Plural.Many;
            return Plural.Other;
        case 'lv':
        case 'prg':
            if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
                v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
                return Plural.Zero;
            if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
                !(v === 2) && f % 10 === 1)
                return Plural.One;
            return Plural.Other;
        case 'mk':
            if (v === 0 && i % 10 === 1 || f % 10 === 1)
                return Plural.One;
            return Plural.Other;
        case 'mt':
            if (n === 1)
                return Plural.One;
            if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
                return Plural.Few;
            if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
                return Plural.Many;
            return Plural.Other;
        case 'pl':
            if (i === 1 && v === 0)
                return Plural.One;
            if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                !(i % 100 >= 12 && i % 100 <= 14))
                return Plural.Few;
            if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 ||
                v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
                return Plural.Many;
            return Plural.Other;
        case 'pt':
            if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2))
                return Plural.One;
            return Plural.Other;
        case 'ro':
            if (i === 1 && v === 0)
                return Plural.One;
            if (!(v === 0) || n === 0 ||
                !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
                return Plural.Few;
            return Plural.Other;
        case 'ru':
        case 'uk':
            if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
                return Plural.One;
            if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                !(i % 100 >= 12 && i % 100 <= 14))
                return Plural.Few;
            if (v === 0 && i % 10 === 0 ||
                v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
                return Plural.Many;
            return Plural.Other;
        case 'shi':
            if (i === 0 || n === 1)
                return Plural.One;
            if (n === Math.floor(n) && n >= 2 && n <= 10)
                return Plural.Few;
            return Plural.Other;
        case 'si':
            if (n === 0 || n === 1 || i === 0 && f === 1)
                return Plural.One;
            return Plural.Other;
        case 'sl':
            if (v === 0 && i % 100 === 1)
                return Plural.One;
            if (v === 0 && i % 100 === 2)
                return Plural.Two;
            if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))
                return Plural.Few;
            return Plural.Other;
        case 'tzm':
            if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99)
                return Plural.One;
            return Plural.Other;
        // When there is no specification, the default is always "other"
        // Spec: http://cldr.unicode.org/index/cldr-spec/plural-rules
        // > other (required—general plural form — also used if the language only has a single form)
        default:
            return Plural.Other;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} cookieStr
 * @param {?} name
 * @return {?}
 */
function parseCookieValue(cookieStr, name) {
    name = encodeURIComponent(name);
    for (var _i = 0, _a = cookieStr.split(';'); _i < _a.length; _i++) {
        var cookie = _a[_i];
        var /** @type {?} */ eqIndex = cookie.indexOf('=');
        var _b = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)], cookieName = _b[0], cookieValue = _b[1];
        if (cookieName.trim() === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Adds and removes CSS classes on an HTML element.
 *
 * \@howToUse
 * ```
 *     <some-element [ngClass]="'first second'">...</some-element>
 *
 *     <some-element [ngClass]="['first', 'second']">...</some-element>
 *
 *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
 *
 *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
 *
 *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
 * ```
 *
 * \@description
 *
 * The CSS classes are updated as follows, depending on the type of the expression evaluation:
 * - `string` - the CSS classes listed in the string (space delimited) are added,
 * - `Array` - the CSS classes declared as Array elements are added,
 * - `Object` - keys are CSS classes that get added when the expression given in the value
 *              evaluates to a truthy value, otherwise they are removed.
 *
 * \@stable
 */
var NgClass = /** @class */ (function () {
    function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
        this._iterableDiffers = _iterableDiffers;
        this._keyValueDiffers = _keyValueDiffers;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._initialClasses = [];
    }
    Object.defineProperty(NgClass.prototype, "klass", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._removeClasses(this._initialClasses);
            this._initialClasses = typeof v === 'string' ? v.split(/\s+/) : [];
            this._applyClasses(this._initialClasses);
            this._applyClasses(this._rawClass);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgClass.prototype, "ngClass", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._removeClasses(this._rawClass);
            this._applyClasses(this._initialClasses);
            this._iterableDiffer = null;
            this._keyValueDiffer = null;
            this._rawClass = typeof v === 'string' ? v.split(/\s+/) : v;
            if (this._rawClass) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisListLikeIterable"])(this._rawClass)) {
                    this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create();
                }
                else {
                    this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgClass.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._iterableDiffer) {
            var /** @type {?} */ iterableChanges = this._iterableDiffer.diff(/** @type {?} */ (this._rawClass));
            if (iterableChanges) {
                this._applyIterableChanges(iterableChanges);
            }
        }
        else if (this._keyValueDiffer) {
            var /** @type {?} */ keyValueChanges = this._keyValueDiffer.diff(/** @type {?} */ (this._rawClass));
            if (keyValueChanges) {
                this._applyKeyValueChanges(keyValueChanges);
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgClass.prototype._applyKeyValueChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
        changes.forEachChangedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
        changes.forEachRemovedItem(function (record) {
            if (record.previousValue) {
                _this._toggleClass(record.key, false);
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgClass.prototype._applyIterableChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) {
            if (typeof record.item === 'string') {
                _this._toggleClass(record.item, true);
            }
            else {
                throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵstringify"])(record.item));
            }
        });
        changes.forEachRemovedItem(function (record) { return _this._toggleClass(record.item, false); });
    };
    /**
     * Applies a collection of CSS classes to the DOM element.
     *
     * For argument of type Set and Array CSS class names contained in those collections are always
     * added.
     * For argument of type Map CSS class name in the map's key is toggled based on the value (added
     * for truthy and removed for falsy).
     * @param {?} rawClassVal
     * @return {?}
     */
    NgClass.prototype._applyClasses = /**
     * Applies a collection of CSS classes to the DOM element.
     *
     * For argument of type Set and Array CSS class names contained in those collections are always
     * added.
     * For argument of type Map CSS class name in the map's key is toggled based on the value (added
     * for truthy and removed for falsy).
     * @param {?} rawClassVal
     * @return {?}
     */
    function (rawClassVal) {
        var _this = this;
        if (rawClassVal) {
            if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                (/** @type {?} */ (rawClassVal)).forEach(function (klass) { return _this._toggleClass(klass, true); });
            }
            else {
                Object.keys(rawClassVal).forEach(function (klass) { return _this._toggleClass(klass, !!rawClassVal[klass]); });
            }
        }
    };
    /**
     * Removes a collection of CSS classes from the DOM element. This is mostly useful for cleanup
     * purposes.
     * @param {?} rawClassVal
     * @return {?}
     */
    NgClass.prototype._removeClasses = /**
     * Removes a collection of CSS classes from the DOM element. This is mostly useful for cleanup
     * purposes.
     * @param {?} rawClassVal
     * @return {?}
     */
    function (rawClassVal) {
        var _this = this;
        if (rawClassVal) {
            if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                (/** @type {?} */ (rawClassVal)).forEach(function (klass) { return _this._toggleClass(klass, false); });
            }
            else {
                Object.keys(rawClassVal).forEach(function (klass) { return _this._toggleClass(klass, false); });
            }
        }
    };
    /**
     * @param {?} klass
     * @param {?} enabled
     * @return {?}
     */
    NgClass.prototype._toggleClass = /**
     * @param {?} klass
     * @param {?} enabled
     * @return {?}
     */
    function (klass, enabled) {
        var _this = this;
        klass = klass.trim();
        if (klass) {
            klass.split(/\s+/g).forEach(function (klass) {
                if (enabled) {
                    _this._renderer.addClass(_this._ngEl.nativeElement, klass);
                }
                else {
                    _this._renderer.removeClass(_this._ngEl.nativeElement, klass);
                }
            });
        }
    };
    NgClass.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngClass]' },] },
    ];
    /** @nocollapse */
    NgClass.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    NgClass.propDecorators = {
        "klass": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class',] },],
        "ngClass": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgClass;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Instantiates a single {\@link Component} type and inserts its Host View into current View.
 * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
 *
 * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
 * any existing component will get destroyed.
 *
 * ### Fine tune control
 *
 * You can control the component creation process by using the following optional attributes:
 *
 * * `ngComponentOutletInjector`: Optional custom {\@link Injector} that will be used as parent for
 * the Component. Defaults to the injector of the current view container.
 *
 * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
 * section of the component, if exists.
 *
 * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
 * module, then load a component from that module.
 *
 * ### Syntax
 *
 * Simple
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
 * ```
 *
 * Customized injector/content
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   injector: injectorExpression;
 *                                   content: contentNodesExpression;">
 * </ng-container>
 * ```
 *
 * Customized ngModuleFactory
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   ngModuleFactory: moduleFactory;">
 * </ng-container>
 * ```
 * ## Example
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
 *
 * A more complete example with additional options:
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
 * A more complete example with ngModuleFactory:
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='NgModuleFactoryExample'}
 *
 * \@experimental
 */
var NgComponentOutlet = /** @class */ (function () {
    function NgComponentOutlet(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._componentRef = null;
        this._moduleRef = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgComponentOutlet.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._viewContainerRef.clear();
        this._componentRef = null;
        if (this.ngComponentOutlet) {
            var /** @type {?} */ elInjector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
            if (changes['ngComponentOutletNgModuleFactory']) {
                if (this._moduleRef)
                    this._moduleRef.destroy();
                if (this.ngComponentOutletNgModuleFactory) {
                    var /** @type {?} */ parentModule = elInjector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]);
                    this._moduleRef = this.ngComponentOutletNgModuleFactory.create(parentModule.injector);
                }
                else {
                    this._moduleRef = null;
                }
            }
            var /** @type {?} */ componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver :
                elInjector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]);
            var /** @type {?} */ componentFactory = componentFactoryResolver.resolveComponentFactory(this.ngComponentOutlet);
            this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, elInjector, this.ngComponentOutletContent);
        }
    };
    /**
     * @return {?}
     */
    NgComponentOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._moduleRef)
            this._moduleRef.destroy();
    };
    NgComponentOutlet.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngComponentOutlet]' },] },
    ];
    /** @nocollapse */
    NgComponentOutlet.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    ]; };
    NgComponentOutlet.propDecorators = {
        "ngComponentOutlet": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "ngComponentOutletInjector": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "ngComponentOutletContent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "ngComponentOutletNgModuleFactory": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgComponentOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@stable
 * @template T
 */
var NgForOfContext = /** @class */ (function () {
    function NgForOfContext($implicit, ngForOf, index, count) {
        this.$implicit = $implicit;
        this.ngForOf = ngForOf;
        this.index = index;
        this.count = count;
    }
    Object.defineProperty(NgForOfContext.prototype, "first", {
        get: /**
         * @return {?}
         */
        function () { return this.index === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForOfContext.prototype, "last", {
        get: /**
         * @return {?}
         */
        function () { return this.index === this.count - 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForOfContext.prototype, "even", {
        get: /**
         * @return {?}
         */
        function () { return this.index % 2 === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForOfContext.prototype, "odd", {
        get: /**
         * @return {?}
         */
        function () { return !this.even; },
        enumerable: true,
        configurable: true
    });
    return NgForOfContext;
}());
/**
 * The `NgForOf` directive instantiates a template once per item from an iterable. The context
 * for each instantiated template inherits from the outer context with the given loop variable
 * set to the current item from the iterable.
 *
 * ### Local Variables
 *
 * `NgForOf` provides several exported values that can be aliased to local variables:
 *
 * - `$implicit: T`: The value of the individual items in the iterable (`ngForOf`).
 * - `ngForOf: NgIterable<T>`: The value of the iterable expression. Useful when the expression is
 * more complex then a property access, for example when using the async pipe (`userStreams |
 * async`).
 * - `index: number`: The index of the current item in the iterable.
 * - `first: boolean`: True when the item is the first item in the iterable.
 * - `last: boolean`: True when the item is the last item in the iterable.
 * - `even: boolean`: True when the item has an even index in the iterable.
 * - `odd: boolean`: True when the item has an odd index in the iterable.
 *
 * ```
 * <li *ngFor="let user of userObservable | async as users; index as i; first as isFirst">
 *    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
 * </li>
 * ```
 *
 * ### Change Propagation
 *
 * When the contents of the iterator changes, `NgForOf` makes the corresponding changes to the DOM:
 *
 * * When an item is added, a new instance of the template is added to the DOM.
 * * When an item is removed, its template instance is removed from the DOM.
 * * When items are reordered, their respective templates are reordered in the DOM.
 * * Otherwise, the DOM element for that item will remain the same.
 *
 * Angular uses object identity to track insertions and deletions within the iterator and reproduce
 * those changes in the DOM. This has important implications for animations and any stateful
 * controls (such as `<input>` elements which accept user input) that are present. Inserted rows can
 * be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state
 * such as user input.
 *
 * It is possible for the identities of elements in the iterator to change while the data does not.
 * This can happen, for example, if the iterator produced from an RPC to the server, and that
 * RPC is re-run. Even if the data hasn't changed, the second response will produce objects with
 * different identities, and Angular will tear down the entire DOM and rebuild it (as if all old
 * elements were deleted and all new elements inserted). This is an expensive operation and should
 * be avoided if possible.
 *
 * To customize the default tracking algorithm, `NgForOf` supports `trackBy` option.
 * `trackBy` takes a function which has two arguments: `index` and `item`.
 * If `trackBy` is given, Angular tracks changes by the return value of the function.
 *
 * ### Syntax
 *
 * - `<li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>`
 *
 * With `<ng-template>` element:
 *
 * ```
 * <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
 *   <li>...</li>
 * </ng-template>
 * ```
 *
 * ### Example
 *
 * See a [live demo](http://plnkr.co/edit/KVuXxDp0qinGDyo307QW?p=preview) for a more detailed
 * example.
 *
 * \@stable
 * @template T
 */
var NgForOf = /** @class */ (function () {
    function NgForOf(_viewContainer, _template, _differs) {
        this._viewContainer = _viewContainer;
        this._template = _template;
        this._differs = _differs;
        this._differ = null;
    }
    Object.defineProperty(NgForOf.prototype, "ngForTrackBy", {
        get: /**
         * @return {?}
         */
        function () { return this._trackByFn; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])() && fn != null && typeof fn !== 'function') {
                // TODO(vicb): use a log service once there is a public one available
                if (/** @type {?} */ (console) && /** @type {?} */ (console.warn)) {
                    console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ". " +
                        "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.");
                }
            }
            this._trackByFn = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForOf.prototype, "ngForTemplate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // TODO(TS2.1): make TemplateRef<Partial<NgForRowOf<T>>> once we move to TS v2.1
            // The current type is too restrictive; a template that just uses index, for example,
            // should be acceptable.
            if (value) {
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgForOf.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('ngForOf' in changes) {
            // React on ngForOf changes only once all inputs have been initialized
            var /** @type {?} */ value = changes['ngForOf'].currentValue;
            if (!this._differ && value) {
                try {
                    this._differ = this._differs.find(value).create(this.ngForTrackBy);
                }
                catch (/** @type {?} */ e) {
                    throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + getTypeNameForDebugging(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NgForOf.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ) {
            var /** @type {?} */ changes = this._differ.diff(this.ngForOf);
            if (changes)
                this._applyChanges(changes);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgForOf.prototype._applyChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ insertTuples = [];
        changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
                var /** @type {?} */ view = _this._viewContainer.createEmbeddedView(_this._template, new NgForOfContext(/** @type {?} */ ((null)), _this.ngForOf, -1, -1), currentIndex);
                var /** @type {?} */ tuple = new RecordViewTuple(item, view);
                insertTuples.push(tuple);
            }
            else if (currentIndex == null) {
                _this._viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                var /** @type {?} */ view = /** @type {?} */ ((_this._viewContainer.get(adjustedPreviousIndex)));
                _this._viewContainer.move(view, currentIndex);
                var /** @type {?} */ tuple = new RecordViewTuple(item, /** @type {?} */ (view));
                insertTuples.push(tuple);
            }
        });
        for (var /** @type {?} */ i = 0; i < insertTuples.length; i++) {
            this._perViewChange(insertTuples[i].view, insertTuples[i].record);
        }
        for (var /** @type {?} */ i = 0, /** @type {?} */ ilen = this._viewContainer.length; i < ilen; i++) {
            var /** @type {?} */ viewRef = /** @type {?} */ (this._viewContainer.get(i));
            viewRef.context.index = i;
            viewRef.context.count = ilen;
        }
        changes.forEachIdentityChange(function (record) {
            var /** @type {?} */ viewRef = /** @type {?} */ (_this._viewContainer.get(record.currentIndex));
            viewRef.context.$implicit = record.item;
        });
    };
    /**
     * @param {?} view
     * @param {?} record
     * @return {?}
     */
    NgForOf.prototype._perViewChange = /**
     * @param {?} view
     * @param {?} record
     * @return {?}
     */
    function (view, record) {
        view.context.$implicit = record.item;
    };
    NgForOf.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngFor][ngForOf]' },] },
    ];
    /** @nocollapse */
    NgForOf.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], },
    ]; };
    NgForOf.propDecorators = {
        "ngForOf": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "ngForTrackBy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "ngForTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgForOf;
}());
/**
 * @template T
 */
var RecordViewTuple = /** @class */ (function () {
    function RecordViewTuple(record, view) {
        this.record = record;
        this.view = view;
    }
    return RecordViewTuple;
}());
/**
 * @param {?} type
 * @return {?}
 */
function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Conditionally includes a template based on the value of an `expression`.
 *
 * `ngIf` evaluates the `expression` and then renders the `then` or `else` template in its place
 * when expression is truthy or falsy respectively. Typically the:
 *  - `then` template is the inline template of `ngIf` unless bound to a different value.
 *  - `else` template is blank unless it is bound.
 *
 * ## Most common usage
 *
 * The most common usage of the `ngIf` directive is to conditionally show the inline template as
 * seen in this example:
 * {\@example common/ngIf/ts/module.ts region='NgIfSimple'}
 *
 * ## Showing an alternative template using `else`
 *
 * If it is necessary to display a template when the `expression` is falsy use the `else` template
 * binding as shown. Note that the `else` binding points to a `<ng-template>` labeled `#elseBlock`.
 * The template can be defined anywhere in the component view but is typically placed right after
 * `ngIf` for readability.
 *
 * {\@example common/ngIf/ts/module.ts region='NgIfElse'}
 *
 * ## Using non-inlined `then` template
 *
 * Usually the `then` template is the inlined template of the `ngIf`, but it can be changed using
 * a binding (just like `else`). Because `then` and `else` are bindings, the template references can
 * change at runtime as shown in this example.
 *
 * {\@example common/ngIf/ts/module.ts region='NgIfThenElse'}
 *
 * ## Storing conditional result in a variable
 *
 * A common pattern is that we need to show a set of properties from the same object. If the
 * object is undefined, then we have to use the safe-traversal-operator `?.` to guard against
 * dereferencing a `null` value. This is especially the case when waiting on async data such as
 * when using the `async` pipe as shown in following example:
 *
 * ```
 * Hello {{ (userStream|async)?.last }}, {{ (userStream|async)?.first }}!
 * ```
 *
 * There are several inefficiencies in the above example:
 *  - We create multiple subscriptions on `userStream`. One for each `async` pipe, or two in the
 *    example above.
 *  - We cannot display an alternative screen while waiting for the data to arrive asynchronously.
 *  - We have to use the safe-traversal-operator `?.` to access properties, which is cumbersome.
 *  - We have to place the `async` pipe in parenthesis.
 *
 * A better way to do this is to use `ngIf` and store the result of the condition in a local
 * variable as shown in the the example below:
 *
 * {\@example common/ngIf/ts/module.ts region='NgIfAs'}
 *
 * Notice that:
 *  - We use only one `async` pipe and hence only one subscription gets created.
 *  - `ngIf` stores the result of the `userStream|async` in the local variable `user`.
 *  - The local `user` can then be bound repeatedly in a more efficient way.
 *  - No need to use the safe-traversal-operator `?.` to access properties as `ngIf` will only
 *    display the data if `userStream` returns a value.
 *  - We can display an alternative template while waiting for the data.
 *
 * ### Syntax
 *
 * Simple form:
 * - `<div *ngIf="condition">...</div>`
 * - `<ng-template [ngIf]="condition"><div>...</div></ng-template>`
 *
 * Form with an else block:
 * ```
 * <div *ngIf="condition; else elseBlock">...</div>
 * <ng-template #elseBlock>...</ng-template>
 * ```
 *
 * Form with a `then` and `else` block:
 * ```
 * <div *ngIf="condition; then thenBlock else elseBlock"></div>
 * <ng-template #thenBlock>...</ng-template>
 * <ng-template #elseBlock>...</ng-template>
 * ```
 *
 * Form with storing the value locally:
 * ```
 * <div *ngIf="condition as value; else elseBlock">{{value}}</div>
 * <ng-template #elseBlock>...</ng-template>
 * ```
 *
 * \@stable
 */
var NgIf = /** @class */ (function () {
    function NgIf(_viewContainer, templateRef) {
        this._viewContainer = _viewContainer;
        this._context = new NgIfContext();
        this._thenTemplateRef = null;
        this._elseTemplateRef = null;
        this._thenViewRef = null;
        this._elseViewRef = null;
        this._thenTemplateRef = templateRef;
    }
    Object.defineProperty(NgIf.prototype, "ngIf", {
        set: /**
         * @param {?} condition
         * @return {?}
         */
        function (condition) {
            this._context.$implicit = this._context.ngIf = condition;
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgIf.prototype, "ngIfThen", {
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this._thenTemplateRef = templateRef;
            this._thenViewRef = null; // clear previous view if any.
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgIf.prototype, "ngIfElse", {
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this._elseTemplateRef = templateRef;
            this._elseViewRef = null; // clear previous view if any.
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgIf.prototype._updateView = /**
     * @return {?}
     */
    function () {
        if (this._context.$implicit) {
            if (!this._thenViewRef) {
                this._viewContainer.clear();
                this._elseViewRef = null;
                if (this._thenTemplateRef) {
                    this._thenViewRef =
                        this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
                }
            }
        }
        else {
            if (!this._elseViewRef) {
                this._viewContainer.clear();
                this._thenViewRef = null;
                if (this._elseTemplateRef) {
                    this._elseViewRef =
                        this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
                }
            }
        }
    };
    NgIf.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngIf]' },] },
    ];
    /** @nocollapse */
    NgIf.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    ]; };
    NgIf.propDecorators = {
        "ngIf": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "ngIfThen": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "ngIfElse": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgIf;
}());
/**
 * \@stable
 */
var NgIfContext = /** @class */ (function () {
    function NgIfContext() {
        this.$implicit = null;
        this.ngIf = null;
    }
    return NgIfContext;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SwitchView = /** @class */ (function () {
    function SwitchView(_viewContainerRef, _templateRef) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
        this._created = false;
    }
    /**
     * @return {?}
     */
    SwitchView.prototype.create = /**
     * @return {?}
     */
    function () {
        this._created = true;
        this._viewContainerRef.createEmbeddedView(this._templateRef);
    };
    /**
     * @return {?}
     */
    SwitchView.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this._created = false;
        this._viewContainerRef.clear();
    };
    /**
     * @param {?} created
     * @return {?}
     */
    SwitchView.prototype.enforceState = /**
     * @param {?} created
     * @return {?}
     */
    function (created) {
        if (created && !this._created) {
            this.create();
        }
        else if (!created && this._created) {
            this.destroy();
        }
    };
    return SwitchView;
}());
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Adds / removes DOM sub-trees when the nest match expressions matches the switch
 *             expression.
 *
 * \@howToUse
 * ```
 *     <container-element [ngSwitch]="switch_expression">
 *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *       <ng-container *ngSwitchCase="match_expression_3">
 *         <!-- use a ng-container to group multiple root nodes -->
 *         <inner-element></inner-element>
 *         <inner-other-element></inner-other-element>
 *       </ng-container>
 *       <some-element *ngSwitchDefault>...</some-element>
 *     </container-element>
 * ```
 * \@description
 *
 * `NgSwitch` stamps out nested views when their match expression value matches the value of the
 * switch expression.
 *
 * In other words:
 * - you define a container element (where you place the directive with a switch expression on the
 * `[ngSwitch]="..."` attribute)
 * - you define inner views inside the `NgSwitch` and place a `*ngSwitchCase` attribute on the view
 * root elements.
 *
 * Elements within `NgSwitch` but outside of a `NgSwitchCase` or `NgSwitchDefault` directives will
 * be preserved at the location.
 *
 * The `ngSwitchCase` directive informs the parent `NgSwitch` of which view to display when the
 * expression is evaluated.
 * When no matching expression is found on a `ngSwitchCase` view, the `ngSwitchDefault` view is
 * stamped out.
 *
 * \@stable
 */
var NgSwitch = /** @class */ (function () {
    function NgSwitch() {
        this._defaultUsed = false;
        this._caseCount = 0;
        this._lastCaseCheckIndex = 0;
        this._lastCasesMatched = false;
    }
    Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._ngSwitch = newValue;
            if (this._caseCount === 0) {
                this._updateDefaultCases(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    NgSwitch.prototype._addCase = /**
     * \@internal
     * @return {?}
     */
    function () { return this._caseCount++; };
    /** @internal */
    /**
     * \@internal
     * @param {?} view
     * @return {?}
     */
    NgSwitch.prototype._addDefault = /**
     * \@internal
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (!this._defaultViews) {
            this._defaultViews = [];
        }
        this._defaultViews.push(view);
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSwitch.prototype._matchCase = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ matched = value == this._ngSwitch;
        this._lastCasesMatched = this._lastCasesMatched || matched;
        this._lastCaseCheckIndex++;
        if (this._lastCaseCheckIndex === this._caseCount) {
            this._updateDefaultCases(!this._lastCasesMatched);
            this._lastCaseCheckIndex = 0;
            this._lastCasesMatched = false;
        }
        return matched;
    };
    /**
     * @param {?} useDefault
     * @return {?}
     */
    NgSwitch.prototype._updateDefaultCases = /**
     * @param {?} useDefault
     * @return {?}
     */
    function (useDefault) {
        if (this._defaultViews && useDefault !== this._defaultUsed) {
            this._defaultUsed = useDefault;
            for (var /** @type {?} */ i = 0; i < this._defaultViews.length; i++) {
                var /** @type {?} */ defaultView = this._defaultViews[i];
                defaultView.enforceState(useDefault);
            }
        }
    };
    NgSwitch.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngSwitch]' },] },
    ];
    /** @nocollapse */
    NgSwitch.ctorParameters = function () { return []; };
    NgSwitch.propDecorators = {
        "ngSwitch": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgSwitch;
}());
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Creates a view that will be added/removed from the parent {\@link NgSwitch} when the
 *             given expression evaluate to respectively the same/different value as the switch
 *             expression.
 *
 * \@howToUse
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 * </container-element>
 * ```
 * \@description
 *
 * Insert the sub-tree when the expression evaluates to the same value as the enclosing switch
 * expression.
 *
 * If multiple match expressions match the switch expression value, all of them are displayed.
 *
 * See {\@link NgSwitch} for more details and example.
 *
 * \@stable
 */
var NgSwitchCase = /** @class */ (function () {
    function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
        this.ngSwitch = ngSwitch;
        ngSwitch._addCase();
        this._view = new SwitchView(viewContainer, templateRef);
    }
    /**
     * @return {?}
     */
    NgSwitchCase.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); };
    NgSwitchCase.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngSwitchCase]' },] },
    ];
    /** @nocollapse */
    NgSwitchCase.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: NgSwitch, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ]; };
    NgSwitchCase.propDecorators = {
        "ngSwitchCase": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgSwitchCase;
}());
/**
 * \@ngModule CommonModule
 * \@whatItDoes Creates a view that is added to the parent {\@link NgSwitch} when no case expressions
 * match the
 *             switch expression.
 *
 * \@howToUse
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   <some-other-element *ngSwitchDefault>...</some-other-element>
 * </container-element>
 * ```
 *
 * \@description
 *
 * Insert the sub-tree when no case expressions evaluate to the same value as the enclosing switch
 * expression.
 *
 * See {\@link NgSwitch} for more details and example.
 *
 * \@stable
 */
var NgSwitchDefault = /** @class */ (function () {
    function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
        ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
    }
    NgSwitchDefault.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngSwitchDefault]' },] },
    ];
    /** @nocollapse */
    NgSwitchDefault.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: NgSwitch, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ]; };
    return NgSwitchDefault;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
 *
 * \@howToUse
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
 *   <ng-template ngPluralCase="=1">there is one</ng-template>
 *   <ng-template ngPluralCase="few">there are a few</ng-template>
 * </some-element>
 * ```
 *
 * \@description
 *
 * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
 * that match the switch expression's pluralization category.
 *
 * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
 * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
 * expression:
 * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
 *   matches the switch expression exactly,
 * - otherwise, the view will be treated as a "category match", and will only display if exact
 *   value matches aren't found and the value maps to its category for the defined locale.
 *
 * See http://cldr.unicode.org/index/cldr-spec/plural-rules
 *
 * \@experimental
 */
var NgPlural = /** @class */ (function () {
    function NgPlural(_localization) {
        this._localization = _localization;
        this._caseViews = {};
    }
    Object.defineProperty(NgPlural.prototype, "ngPlural", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._switchValue = value;
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @param {?} switchView
     * @return {?}
     */
    NgPlural.prototype.addCase = /**
     * @param {?} value
     * @param {?} switchView
     * @return {?}
     */
    function (value, switchView) { this._caseViews[value] = switchView; };
    /**
     * @return {?}
     */
    NgPlural.prototype._updateView = /**
     * @return {?}
     */
    function () {
        this._clearViews();
        var /** @type {?} */ cases = Object.keys(this._caseViews);
        var /** @type {?} */ key = getPluralCategory(this._switchValue, cases, this._localization);
        this._activateView(this._caseViews[key]);
    };
    /**
     * @return {?}
     */
    NgPlural.prototype._clearViews = /**
     * @return {?}
     */
    function () {
        if (this._activeView)
            this._activeView.destroy();
    };
    /**
     * @param {?} view
     * @return {?}
     */
    NgPlural.prototype._activateView = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (view) {
            this._activeView = view;
            this._activeView.create();
        }
    };
    NgPlural.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngPlural]' },] },
    ];
    /** @nocollapse */
    NgPlural.ctorParameters = function () { return [
        { type: NgLocalization, },
    ]; };
    NgPlural.propDecorators = {
        "ngPlural": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgPlural;
}());
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Creates a view that will be added/removed from the parent {\@link NgPlural} when the
 *             given expression matches the plural expression according to CLDR rules.
 *
 * \@howToUse
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">...</ng-template>
 *   <ng-template ngPluralCase="other">...</ng-template>
 * </some-element>
 * ```
 *
 * See {\@link NgPlural} for more details and example.
 *
 * \@experimental
 */
var NgPluralCase = /** @class */ (function () {
    function NgPluralCase(value, template, viewContainer, ngPlural) {
        this.value = value;
        var /** @type {?} */ isANumber = !isNaN(Number(value));
        ngPlural.addCase(isANumber ? "=" + value : value, new SwitchView(viewContainer, template));
    }
    NgPluralCase.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngPluralCase]' },] },
    ];
    /** @nocollapse */
    NgPluralCase.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"], args: ['ngPluralCase',] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: NgPlural, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ]; };
    return NgPluralCase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Update an HTML element styles.
 *
 * \@howToUse
 * ```
 * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
 *
 * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
 *
 * <some-element [ngStyle]="objExp">...</some-element>
 * ```
 *
 * \@description
 *
 * The styles are updated according to the value of the expression evaluation:
 * - keys are style names with an optional `.<unit>` suffix (ie 'top.px', 'font-style.em'),
 * - values are the values assigned to those properties (expressed in the given unit).
 *
 * \@stable
 */
var NgStyle = /** @class */ (function () {
    function NgStyle(_differs, _ngEl, _renderer) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
    }
    Object.defineProperty(NgStyle.prototype, "ngStyle", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._ngStyle = v;
            if (!this._differ && v) {
                this._differ = this._differs.find(v).create();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgStyle.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ) {
            var /** @type {?} */ changes = this._differ.diff(this._ngStyle);
            if (changes) {
                this._applyChanges(changes);
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgStyle.prototype._applyChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        changes.forEachRemovedItem(function (record) { return _this._setStyle(record.key, null); });
        changes.forEachAddedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
        changes.forEachChangedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
    };
    /**
     * @param {?} nameAndUnit
     * @param {?} value
     * @return {?}
     */
    NgStyle.prototype._setStyle = /**
     * @param {?} nameAndUnit
     * @param {?} value
     * @return {?}
     */
    function (nameAndUnit, value) {
        var _a = nameAndUnit.split('.'), name = _a[0], unit = _a[1];
        value = value != null && unit ? "" + value + unit : value;
        if (value != null) {
            this._renderer.setStyle(this._ngEl.nativeElement, name, /** @type {?} */ (value));
        }
        else {
            this._renderer.removeStyle(this._ngEl.nativeElement, name);
        }
    };
    NgStyle.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngStyle]' },] },
    ];
    /** @nocollapse */
    NgStyle.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    NgStyle.propDecorators = {
        "ngStyle": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgStyle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Inserts an embedded view from a prepared `TemplateRef`
 *
 * \@howToUse
 * ```
 * <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
 * ```
 *
 * \@description
 *
 * You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
 * `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
 * by the local template `let` declarations.
 *
 * Note: using the key `$implicit` in the context object will set its value as default.
 *
 * ## Example
 *
 * {\@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
 *
 * \@stable
 */
var NgTemplateOutlet = /** @class */ (function () {
    function NgTemplateOutlet(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgTemplateOutlet.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ recreateView = this._shouldRecreateView(changes);
        if (recreateView) {
            if (this._viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
            }
            if (this.ngTemplateOutlet) {
                this._viewRef = this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext);
            }
        }
        else {
            if (this._viewRef && this.ngTemplateOutletContext) {
                this._updateExistingContext(this.ngTemplateOutletContext);
            }
        }
    };
    /**
     * We need to re-create existing embedded view if:
     * - templateRef has changed
     * - context has changes
     *
     * We mark context object as changed when the corresponding object
     * shape changes (new properties are added or existing properties are removed).
     * In other words we consider context with the same properties as "the same" even
     * if object reference changes (see https://github.com/angular/angular/issues/13407).
     * @param {?} changes
     * @return {?}
     */
    NgTemplateOutlet.prototype._shouldRecreateView = /**
     * We need to re-create existing embedded view if:
     * - templateRef has changed
     * - context has changes
     *
     * We mark context object as changed when the corresponding object
     * shape changes (new properties are added or existing properties are removed).
     * In other words we consider context with the same properties as "the same" even
     * if object reference changes (see https://github.com/angular/angular/issues/13407).
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ ctxChange = changes['ngTemplateOutletContext'];
        return !!changes['ngTemplateOutlet'] || (ctxChange && this._hasContextShapeChanged(ctxChange));
    };
    /**
     * @param {?} ctxChange
     * @return {?}
     */
    NgTemplateOutlet.prototype._hasContextShapeChanged = /**
     * @param {?} ctxChange
     * @return {?}
     */
    function (ctxChange) {
        var /** @type {?} */ prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        var /** @type {?} */ currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (var _i = 0, currCtxKeys_1 = currCtxKeys; _i < currCtxKeys_1.length; _i++) {
                var propName = currCtxKeys_1[_i];
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @param {?} ctx
     * @return {?}
     */
    NgTemplateOutlet.prototype._updateExistingContext = /**
     * @param {?} ctx
     * @return {?}
     */
    function (ctx) {
        for (var _i = 0, _a = Object.keys(ctx); _i < _a.length; _i++) {
            var propName = _a[_i];
            (/** @type {?} */ (this._viewRef.context))[propName] = (/** @type {?} */ (this.ngTemplateOutletContext))[propName];
        }
    };
    NgTemplateOutlet.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngTemplateOutlet]' },] },
    ];
    /** @nocollapse */
    NgTemplateOutlet.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    ]; };
    NgTemplateOutlet.propDecorators = {
        "ngTemplateOutletContext": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "ngTemplateOutlet": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgTemplateOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A collection of Angular directives that are likely to be used in each and every Angular
 * application.
 */
var COMMON_DIRECTIVES = [
    NgClass,
    NgComponentOutlet,
    NgForOf,
    NgIf,
    NgTemplateOutlet,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgPlural,
    NgPluralCase,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NAMED_FORMATS = {};
var DATE_FORMATS_SPLIT = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
/** @enum {number} */
var ZoneWidth = {
    Short: 0,
    ShortGMT: 1,
    Long: 2,
    Extended: 3,
};
ZoneWidth[ZoneWidth.Short] = "Short";
ZoneWidth[ZoneWidth.ShortGMT] = "ShortGMT";
ZoneWidth[ZoneWidth.Long] = "Long";
ZoneWidth[ZoneWidth.Extended] = "Extended";
/** @enum {number} */
var DateType = {
    FullYear: 0,
    Month: 1,
    Date: 2,
    Hours: 3,
    Minutes: 4,
    Seconds: 5,
    Milliseconds: 6,
    Day: 7,
};
DateType[DateType.FullYear] = "FullYear";
DateType[DateType.Month] = "Month";
DateType[DateType.Date] = "Date";
DateType[DateType.Hours] = "Hours";
DateType[DateType.Minutes] = "Minutes";
DateType[DateType.Seconds] = "Seconds";
DateType[DateType.Milliseconds] = "Milliseconds";
DateType[DateType.Day] = "Day";
/** @enum {number} */
var TranslationType = {
    DayPeriods: 0,
    Days: 1,
    Months: 2,
    Eras: 3,
};
TranslationType[TranslationType.DayPeriods] = "DayPeriods";
TranslationType[TranslationType.Days] = "Days";
TranslationType[TranslationType.Months] = "Months";
TranslationType[TranslationType.Eras] = "Eras";
/**
 * Transforms a date to a locale string based on a pattern and a timezone
 *
 * \@internal
 * @param {?} date
 * @param {?} format
 * @param {?} locale
 * @param {?=} timezone
 * @return {?}
 */
function formatDate(date, format, locale, timezone) {
    var /** @type {?} */ namedFormat = getNamedFormat(locale, format);
    format = namedFormat || format;
    var /** @type {?} */ parts = [];
    var /** @type {?} */ match;
    while (format) {
        match = DATE_FORMATS_SPLIT.exec(format);
        if (match) {
            parts = parts.concat(match.slice(1));
            var /** @type {?} */ part = parts.pop();
            if (!part) {
                break;
            }
            format = part;
        }
        else {
            parts.push(format);
            break;
        }
    }
    var /** @type {?} */ dateTimezoneOffset = date.getTimezoneOffset();
    if (timezone) {
        dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
        date = convertTimezoneToLocal(date, timezone, true);
    }
    var /** @type {?} */ text = '';
    parts.forEach(function (value) {
        var /** @type {?} */ dateFormatter = getDateFormatter(value);
        text += dateFormatter ?
            dateFormatter(date, locale, dateTimezoneOffset) :
            value === '\'\'' ? '\'' : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
    });
    return text;
}
/**
 * @param {?} locale
 * @param {?} format
 * @return {?}
 */
function getNamedFormat(locale, format) {
    var /** @type {?} */ localeId = getLocaleId(locale);
    NAMED_FORMATS[localeId] = NAMED_FORMATS[localeId] || {};
    if (NAMED_FORMATS[localeId][format]) {
        return NAMED_FORMATS[localeId][format];
    }
    var /** @type {?} */ formatValue = '';
    switch (format) {
        case 'shortDate':
            formatValue = getLocaleDateFormat(locale, FormatWidth.Short);
            break;
        case 'mediumDate':
            formatValue = getLocaleDateFormat(locale, FormatWidth.Medium);
            break;
        case 'longDate':
            formatValue = getLocaleDateFormat(locale, FormatWidth.Long);
            break;
        case 'fullDate':
            formatValue = getLocaleDateFormat(locale, FormatWidth.Full);
            break;
        case 'shortTime':
            formatValue = getLocaleTimeFormat(locale, FormatWidth.Short);
            break;
        case 'mediumTime':
            formatValue = getLocaleTimeFormat(locale, FormatWidth.Medium);
            break;
        case 'longTime':
            formatValue = getLocaleTimeFormat(locale, FormatWidth.Long);
            break;
        case 'fullTime':
            formatValue = getLocaleTimeFormat(locale, FormatWidth.Full);
            break;
        case 'short':
            var /** @type {?} */ shortTime = getNamedFormat(locale, 'shortTime');
            var /** @type {?} */ shortDate = getNamedFormat(locale, 'shortDate');
            formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Short), [shortTime, shortDate]);
            break;
        case 'medium':
            var /** @type {?} */ mediumTime = getNamedFormat(locale, 'mediumTime');
            var /** @type {?} */ mediumDate = getNamedFormat(locale, 'mediumDate');
            formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Medium), [mediumTime, mediumDate]);
            break;
        case 'long':
            var /** @type {?} */ longTime = getNamedFormat(locale, 'longTime');
            var /** @type {?} */ longDate = getNamedFormat(locale, 'longDate');
            formatValue =
                formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Long), [longTime, longDate]);
            break;
        case 'full':
            var /** @type {?} */ fullTime = getNamedFormat(locale, 'fullTime');
            var /** @type {?} */ fullDate = getNamedFormat(locale, 'fullDate');
            formatValue =
                formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Full), [fullTime, fullDate]);
            break;
    }
    if (formatValue) {
        NAMED_FORMATS[localeId][format] = formatValue;
    }
    return formatValue;
}
/**
 * @param {?} str
 * @param {?} opt_values
 * @return {?}
 */
function formatDateTime(str, opt_values) {
    if (opt_values) {
        str = str.replace(/\{([^}]+)}/g, function (match, key) {
            return (opt_values != null && key in opt_values) ? opt_values[key] : match;
        });
    }
    return str;
}
/**
 * @param {?} num
 * @param {?} digits
 * @param {?=} minusSign
 * @param {?=} trim
 * @param {?=} negWrap
 * @return {?}
 */
function padNumber(num, digits, minusSign, trim, negWrap) {
    if (minusSign === void 0) { minusSign = '-'; }
    var /** @type {?} */ neg = '';
    if (num < 0 || (negWrap && num <= 0)) {
        if (negWrap) {
            num = -num + 1;
        }
        else {
            num = -num;
            neg = minusSign;
        }
    }
    var /** @type {?} */ strNum = '' + num;
    while (strNum.length < digits)
        strNum = '0' + strNum;
    if (trim) {
        strNum = strNum.substr(strNum.length - digits);
    }
    return neg + strNum;
}
/**
 * Returns a date formatter that transforms a date into its locale digit representation
 * @param {?} name
 * @param {?} size
 * @param {?=} offset
 * @param {?=} trim
 * @param {?=} negWrap
 * @return {?}
 */
function dateGetter(name, size, offset, trim, negWrap) {
    if (offset === void 0) { offset = 0; }
    if (trim === void 0) { trim = false; }
    if (negWrap === void 0) { negWrap = false; }
    return function (date, locale) {
        var /** @type {?} */ part = getDatePart(name, date, size);
        if (offset > 0 || part > -offset) {
            part += offset;
        }
        if (name === DateType.Hours && part === 0 && offset === -12) {
            part = 12;
        }
        return padNumber(part, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign), trim, negWrap);
    };
}
/**
 * @param {?} name
 * @param {?} date
 * @param {?} size
 * @return {?}
 */
function getDatePart(name, date, size) {
    switch (name) {
        case DateType.FullYear:
            return date.getFullYear();
        case DateType.Month:
            return date.getMonth();
        case DateType.Date:
            return date.getDate();
        case DateType.Hours:
            return date.getHours();
        case DateType.Minutes:
            return date.getMinutes();
        case DateType.Seconds:
            return date.getSeconds();
        case DateType.Milliseconds:
            var /** @type {?} */ div = size === 1 ? 100 : (size === 2 ? 10 : 1);
            return Math.round(date.getMilliseconds() / div);
        case DateType.Day:
            return date.getDay();
        default:
            throw new Error("Unknown DateType value \"" + name + "\".");
    }
}
/**
 * Returns a date formatter that transforms a date into its locale string representation
 * @param {?} name
 * @param {?} width
 * @param {?=} form
 * @param {?=} extended
 * @return {?}
 */
function dateStrGetter(name, width, form, extended) {
    if (form === void 0) { form = FormStyle.Format; }
    if (extended === void 0) { extended = false; }
    return function (date, locale) {
        return getDateTranslation(date, locale, name, width, form, extended);
    };
}
/**
 * Returns the locale translation of a date for a given form, type and width
 * @param {?} date
 * @param {?} locale
 * @param {?} name
 * @param {?} width
 * @param {?} form
 * @param {?} extended
 * @return {?}
 */
function getDateTranslation(date, locale, name, width, form, extended) {
    switch (name) {
        case TranslationType.Months:
            return getLocaleMonthNames(locale, form, width)[date.getMonth()];
        case TranslationType.Days:
            return getLocaleDayNames(locale, form, width)[date.getDay()];
        case TranslationType.DayPeriods:
            var /** @type {?} */ currentHours_1 = date.getHours();
            var /** @type {?} */ currentMinutes_1 = date.getMinutes();
            if (extended) {
                var /** @type {?} */ rules = getLocaleExtraDayPeriodRules(locale);
                var /** @type {?} */ dayPeriods_1 = getLocaleExtraDayPeriods(locale, form, width);
                var /** @type {?} */ result_1;
                rules.forEach(function (rule, index) {
                    if (Array.isArray(rule)) {
                        // morning, afternoon, evening, night
                        var _a = rule[0], hoursFrom = _a.hours, minutesFrom = _a.minutes;
                        var _b = rule[1], hoursTo = _b.hours, minutesTo = _b.minutes;
                        if (currentHours_1 >= hoursFrom && currentMinutes_1 >= minutesFrom &&
                            (currentHours_1 < hoursTo ||
                                (currentHours_1 === hoursTo && currentMinutes_1 < minutesTo))) {
                            result_1 = dayPeriods_1[index];
                        }
                    }
                    else {
                        // noon or midnight
                        var hours = rule.hours, minutes = rule.minutes;
                        if (hours === currentHours_1 && minutes === currentMinutes_1) {
                            result_1 = dayPeriods_1[index];
                        }
                    }
                });
                if (result_1) {
                    return result_1;
                }
            }
            // if no rules for the day periods, we use am/pm by default
            return getLocaleDayPeriods(locale, form, /** @type {?} */ (width))[currentHours_1 < 12 ? 0 : 1];
        case TranslationType.Eras:
            return getLocaleEraNames(locale, /** @type {?} */ (width))[date.getFullYear() <= 0 ? 0 : 1];
        default:
            // This default case is not needed by TypeScript compiler, as the switch is exhaustive.
            // However Closure Compiler does not understand that and reports an error in typed mode.
            // The `throw new Error` below works around the problem, and the unexpected: never variable
            // makes sure tsc still checks this code is unreachable.
            var /** @type {?} */ unexpected = name;
            throw new Error("unexpected translation type " + unexpected);
    }
}
/**
 * Returns a date formatter that transforms a date and an offset into a timezone with ISO8601 or
 * GMT format depending on the width (eg: short = +0430, short:GMT = GMT+4, long = GMT+04:30,
 * extended = +04:30)
 * @param {?} width
 * @return {?}
 */
function timeZoneGetter(width) {
    return function (date, locale, offset) {
        var /** @type {?} */ zone = -1 * offset;
        var /** @type {?} */ minusSign = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
        var /** @type {?} */ hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
        switch (width) {
            case ZoneWidth.Short:
                return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) +
                    padNumber(Math.abs(zone % 60), 2, minusSign);
            case ZoneWidth.ShortGMT:
                return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 1, minusSign);
            case ZoneWidth.Long:
                return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
                    padNumber(Math.abs(zone % 60), 2, minusSign);
            case ZoneWidth.Extended:
                if (offset === 0) {
                    return 'Z';
                }
                else {
                    return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
                        padNumber(Math.abs(zone % 60), 2, minusSign);
                }
            default:
                throw new Error("Unknown zone width \"" + width + "\"");
        }
    };
}
var JANUARY = 0;
var THURSDAY = 4;
/**
 * @param {?} year
 * @return {?}
 */
function getFirstThursdayOfYear(year) {
    var /** @type {?} */ firstDayOfYear = (new Date(year, JANUARY, 1)).getDay();
    return new Date(year, 0, 1 + ((firstDayOfYear <= THURSDAY) ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
}
/**
 * @param {?} datetime
 * @return {?}
 */
function getThursdayThisWeek(datetime) {
    return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (THURSDAY - datetime.getDay()));
}
/**
 * @param {?} size
 * @param {?=} monthBased
 * @return {?}
 */
function weekGetter(size, monthBased) {
    if (monthBased === void 0) { monthBased = false; }
    return function (date, locale) {
        var /** @type {?} */ result;
        if (monthBased) {
            var /** @type {?} */ nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
            var /** @type {?} */ today = date.getDate();
            result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
        }
        else {
            var /** @type {?} */ firstThurs = getFirstThursdayOfYear(date.getFullYear());
            var /** @type {?} */ thisThurs = getThursdayThisWeek(date);
            var /** @type {?} */ diff = thisThurs.getTime() - firstThurs.getTime();
            result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week
        }
        return padNumber(result, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
    };
}
var DATE_FORMATS = {};
/**
 * @param {?} format
 * @return {?}
 */
function getDateFormatter(format) {
    if (DATE_FORMATS[format]) {
        return DATE_FORMATS[format];
    }
    var /** @type {?} */ formatter;
    switch (format) {
        // Era name (AD/BC)
        case 'G':
        case 'GG':
        case 'GGG':
            formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Abbreviated);
            break;
        case 'GGGG':
            formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Wide);
            break;
        case 'GGGGG':
            formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Narrow);
            break;
        // 1 digit representation of the year, e.g. (AD 1 => 1, AD 199 => 199)
        case 'y':
            formatter = dateGetter(DateType.FullYear, 1, 0, false, true);
            break;
        // 2 digit representation of the year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
        case 'yy':
            formatter = dateGetter(DateType.FullYear, 2, 0, true, true);
            break;
        // 3 digit representation of the year, padded (000-999). (e.g. AD 2001 => 01, AD 2010 => 10)
        case 'yyy':
            formatter = dateGetter(DateType.FullYear, 3, 0, false, true);
            break;
        // 4 digit representation of the year (e.g. AD 1 => 0001, AD 2010 => 2010)
        case 'yyyy':
            formatter = dateGetter(DateType.FullYear, 4, 0, false, true);
            break;
        // Month of the year (1-12), numeric
        case 'M':
        case 'L':
            formatter = dateGetter(DateType.Month, 1, 1);
            break;
        case 'MM':
        case 'LL':
            formatter = dateGetter(DateType.Month, 2, 1);
            break;
        // Month of the year (January, ...), string, format
        case 'MMM':
            formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Abbreviated);
            break;
        case 'MMMM':
            formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Wide);
            break;
        case 'MMMMM':
            formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Narrow);
            break;
        // Month of the year (January, ...), string, standalone
        case 'LLL':
            formatter =
                dateStrGetter(TranslationType.Months, TranslationWidth.Abbreviated, FormStyle.Standalone);
            break;
        case 'LLLL':
            formatter =
                dateStrGetter(TranslationType.Months, TranslationWidth.Wide, FormStyle.Standalone);
            break;
        case 'LLLLL':
            formatter =
                dateStrGetter(TranslationType.Months, TranslationWidth.Narrow, FormStyle.Standalone);
            break;
        // Week of the year (1, ... 52)
        case 'w':
            formatter = weekGetter(1);
            break;
        case 'ww':
            formatter = weekGetter(2);
            break;
        // Week of the month (1, ...)
        case 'W':
            formatter = weekGetter(1, true);
            break;
        // Day of the month (1-31)
        case 'd':
            formatter = dateGetter(DateType.Date, 1);
            break;
        case 'dd':
            formatter = dateGetter(DateType.Date, 2);
            break;
        // Day of the Week
        case 'E':
        case 'EE':
        case 'EEE':
            formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Abbreviated);
            break;
        case 'EEEE':
            formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Wide);
            break;
        case 'EEEEE':
            formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Narrow);
            break;
        case 'EEEEEE':
            formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Short);
            break;
        // Generic period of the day (am-pm)
        case 'a':
        case 'aa':
        case 'aaa':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated);
            break;
        case 'aaaa':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide);
            break;
        case 'aaaaa':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow);
            break;
        // Extended period of the day (midnight, at night, ...), standalone
        case 'b':
        case 'bb':
        case 'bbb':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated, FormStyle.Standalone, true);
            break;
        case 'bbbb':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide, FormStyle.Standalone, true);
            break;
        case 'bbbbb':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow, FormStyle.Standalone, true);
            break;
        // Extended period of the day (midnight, night, ...), standalone
        case 'B':
        case 'BB':
        case 'BBB':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated, FormStyle.Format, true);
            break;
        case 'BBBB':
            formatter =
                dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide, FormStyle.Format, true);
            break;
        case 'BBBBB':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow, FormStyle.Format, true);
            break;
        // Hour in AM/PM, (1-12)
        case 'h':
            formatter = dateGetter(DateType.Hours, 1, -12);
            break;
        case 'hh':
            formatter = dateGetter(DateType.Hours, 2, -12);
            break;
        // Hour of the day (0-23)
        case 'H':
            formatter = dateGetter(DateType.Hours, 1);
            break;
        // Hour in day, padded (00-23)
        case 'HH':
            formatter = dateGetter(DateType.Hours, 2);
            break;
        // Minute of the hour (0-59)
        case 'm':
            formatter = dateGetter(DateType.Minutes, 1);
            break;
        case 'mm':
            formatter = dateGetter(DateType.Minutes, 2);
            break;
        // Second of the minute (0-59)
        case 's':
            formatter = dateGetter(DateType.Seconds, 1);
            break;
        case 'ss':
            formatter = dateGetter(DateType.Seconds, 2);
            break;
        // Fractional second padded (0-9)
        case 'S':
            formatter = dateGetter(DateType.Milliseconds, 1);
            break;
        case 'SS':
            formatter = dateGetter(DateType.Milliseconds, 2);
            break;
        // = millisecond
        case 'SSS':
            formatter = dateGetter(DateType.Milliseconds, 3);
            break;
        // Timezone ISO8601 short format (-0430)
        case 'Z':
        case 'ZZ':
        case 'ZZZ':
            formatter = timeZoneGetter(ZoneWidth.Short);
            break;
        // Timezone ISO8601 extended format (-04:30)
        case 'ZZZZZ':
            formatter = timeZoneGetter(ZoneWidth.Extended);
            break;
        // Timezone GMT short format (GMT+4)
        case 'O':
        case 'OO':
        case 'OOO':
        // Should be location, but fallback to format O instead because we don't have the data yet
        case 'z':
        case 'zz':
        case 'zzz':
            formatter = timeZoneGetter(ZoneWidth.ShortGMT);
            break;
        // Timezone GMT long format (GMT+0430)
        case 'OOOO':
        case 'ZZZZ':
        // Should be location, but fallback to format O instead because we don't have the data yet
        case 'zzzz':
            formatter = timeZoneGetter(ZoneWidth.Long);
            break;
        default:
            return null;
    }
    DATE_FORMATS[format] = formatter;
    return formatter;
}
/**
 * @param {?} timezone
 * @param {?} fallback
 * @return {?}
 */
function timezoneToOffset(timezone, fallback) {
    // Support: IE 9-11 only, Edge 13-15+
    // IE/Edge do not "understand" colon (`:`) in timezone
    timezone = timezone.replace(/:/g, '');
    var /** @type {?} */ requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
}
/**
 * @param {?} date
 * @param {?} minutes
 * @return {?}
 */
function addDateMinutes(date, minutes) {
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
}
/**
 * @param {?} date
 * @param {?} timezone
 * @param {?} reverse
 * @return {?}
 */
function convertTimezoneToLocal(date, timezone, reverse) {
    var /** @type {?} */ reverseValue = reverse ? -1 : 1;
    var /** @type {?} */ dateTimezoneOffset = date.getTimezoneOffset();
    var /** @type {?} */ timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    return addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} type
 * @param {?} value
 * @return {?}
 */
function invalidPipeArgumentError(type, value) {
    return Error("InvalidPipeArgument: '" + value + "' for pipe '" + Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵstringify"])(type) + "'");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ISO8601_DATE_REGEX = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a date according to locale rules.
 * \@howToUse `date_expression | date[:format[:timezone[:locale]]]`
 * \@description
 *
 * Where:
 * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
 * (https://www.w3.org/TR/NOTE-datetime).
 * - `format` indicates which date/time components to include. The format can be predefined as
 *   shown below (all examples are given for `en-US`) or custom as shown in the table.
 *   - `'short'`: equivalent to `'M/d/yy, h:mm a'` (e.g. `6/15/15, 9:03 AM`)
 *   - `'medium'`: equivalent to `'MMM d, y, h:mm:ss a'` (e.g. `Jun 15, 2015, 9:03:01 AM`)
 *   - `'long'`: equivalent to `'MMMM d, y, h:mm:ss a z'` (e.g. `June 15, 2015 at 9:03:01 AM GMT+1`)
 *   - `'full'`: equivalent to `'EEEE, MMMM d, y, h:mm:ss a zzzz'` (e.g. `Monday, June 15, 2015 at
 * 9:03:01 AM GMT+01:00`)
 *   - `'shortDate'`: equivalent to `'M/d/yy'` (e.g. `6/15/15`)
 *   - `'mediumDate'`: equivalent to `'MMM d, y'` (e.g. `Jun 15, 2015`)
 *   - `'longDate'`: equivalent to `'MMMM d, y'` (e.g. `June 15, 2015`)
 *   - `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` (e.g. `Monday, June 15, 2015`)
 *   - `'shortTime'`: equivalent to `'h:mm a'` (e.g. `9:03 AM`)
 *   - `'mediumTime'`: equivalent to `'h:mm:ss a'` (e.g. `9:03:01 AM`)
 *   - `'longTime'`: equivalent to `'h:mm:ss a z'` (e.g. `9:03:01 AM GMT+1`)
 *   - `'fullTime'`: equivalent to `'h:mm:ss a zzzz'` (e.g. `9:03:01 AM GMT+01:00`)
 *  - `timezone` to be used for formatting. It understands UTC/GMT and the continental US time zone
 *  abbreviations, but for general use, use a time zone offset, for example,
 *  `'+0430'` (4 hours, 30 minutes east of the Greenwich meridian)
 *  If not specified, the local system timezone of the end-user's browser will be used.
 *  - `locale` is a `string` defining the locale to use (uses the current {\@link LOCALE_ID} by
 * default)
 *
 *
 *  | Field Type         | Format      | Description                                                   | Example Value                                              |
 *  |--------------------|-------------|---------------------------------------------------------------|------------------------------------------------------------|
 *  | Era                | G, GG & GGG | Abbreviated                                                   | AD                                                         |
 *  |                    | GGGG        | Wide                                                          | Anno Domini                                                |
 *  |                    | GGGGG       | Narrow                                                        | A                                                          |
 *  | Year               | y           | Numeric: minimum digits                                       | 2, 20, 201, 2017, 20173                                    |
 *  |                    | yy          | Numeric: 2 digits + zero padded                               | 02, 20, 01, 17, 73                                         |
 *  |                    | yyy         | Numeric: 3 digits + zero padded                               | 002, 020, 201, 2017, 20173                                 |
 *  |                    | yyyy        | Numeric: 4 digits or more + zero padded                       | 0002, 0020, 0201, 2017, 20173                              |
 *  | Month              | M           | Numeric: 1 digit                                              | 9, 12                                                      |
 *  |                    | MM          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
 *  |                    | MMM         | Abbreviated                                                   | Sep                                                        |
 *  |                    | MMMM        | Wide                                                          | September                                                  |
 *  |                    | MMMMM       | Narrow                                                        | S                                                          |
 *  | Month standalone   | L           | Numeric: 1 digit                                              | 9, 12                                                      |
 *  |                    | LL          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
 *  |                    | LLL         | Abbreviated                                                   | Sep                                                        |
 *  |                    | LLLL        | Wide                                                          | September                                                  |
 *  |                    | LLLLL       | Narrow                                                        | S                                                          |
 *  | Week of year       | w           | Numeric: minimum digits                                       | 1... 53                                                    |
 *  |                    | ww          | Numeric: 2 digits + zero padded                               | 01... 53                                                   |
 *  | Week of month      | W           | Numeric: 1 digit                                              | 1... 5                                                     |
 *  | Day of month       | d           | Numeric: minimum digits                                       | 1                                                          |
 *  |                    | dd          | Numeric: 2 digits + zero padded                               | 01                                                          |
 *  | Week day           | E, EE & EEE | Abbreviated                                                   | Tue                                                        |
 *  |                    | EEEE        | Wide                                                          | Tuesday                                                    |
 *  |                    | EEEEE       | Narrow                                                        | T                                                          |
 *  |                    | EEEEEE      | Short                                                         | Tu                                                         |
 *  | Period             | a, aa & aaa | Abbreviated                                                   | am/pm or AM/PM                                             |
 *  |                    | aaaa        | Wide (fallback to `a` when missing)                           | ante meridiem/post meridiem                                |
 *  |                    | aaaaa       | Narrow                                                        | a/p                                                        |
 *  | Period*            | B, BB & BBB | Abbreviated                                                   | mid.                                                       |
 *  |                    | BBBB        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
 *  |                    | BBBBB       | Narrow                                                        | md                                                         |
 *  | Period standalone* | b, bb & bbb | Abbreviated                                                   | mid.                                                       |
 *  |                    | bbbb        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
 *  |                    | bbbbb       | Narrow                                                        | md                                                         |
 *  | Hour 1-12          | h           | Numeric: minimum digits                                       | 1, 12                                                      |
 *  |                    | hh          | Numeric: 2 digits + zero padded                               | 01, 12                                                     |
 *  | Hour 0-23          | H           | Numeric: minimum digits                                       | 0, 23                                                      |
 *  |                    | HH          | Numeric: 2 digits + zero padded                               | 00, 23                                                     |
 *  | Minute             | m           | Numeric: minimum digits                                       | 8, 59                                                      |
 *  |                    | mm          | Numeric: 2 digits + zero padded                               | 08, 59                                                     |
 *  | Second             | s           | Numeric: minimum digits                                       | 0... 59                                                    |
 *  |                    | ss          | Numeric: 2 digits + zero padded                               | 00... 59                                                   |
 *  | Fractional seconds | S           | Numeric: 1 digit                                              | 0... 9                                                     |
 *  |                    | SS          | Numeric: 2 digits + zero padded                               | 00... 99                                                   |
 *  |                    | SSS         | Numeric: 3 digits + zero padded (= milliseconds)              | 000... 999                                                 |
 *  | Zone               | z, zz & zzz | Short specific non location format (fallback to O)            | GMT-8                                                      |
 *  |                    | zzzz        | Long specific non location format (fallback to OOOO)          | GMT-08:00                                                  |
 *  |                    | Z, ZZ & ZZZ | ISO8601 basic format                                          | -0800                                                      |
 *  |                    | ZZZZ        | Long localized GMT format                                     | GMT-8:00                                                   |
 *  |                    | ZZZZZ       | ISO8601 extended format + Z indicator for offset 0 (= XXXXX)  | -08:00                                                     |
 *  |                    | O, OO & OOO | Short localized GMT format                                    | GMT-8                                                      |
 *  |                    | OOOO        | Long localized GMT format                                     | GMT-08:00                                                  |
 *
 *
 * When the expression is a ISO string without time (e.g. 2016-09-19) the time zone offset is not
 * applied and the formatted text will have the same day, month and year of the expression.
 *
 * WARNINGS:
 * - this pipe has only access to en-US locale data by default. If you want to localize the dates
 *   in another language, you will have to import data for other locales.
 *   See the {\@linkDocs guide/i18n#i18n-pipes "I18n guide"} to know how to import additional locale
 *   data.
 * - Fields suffixed with * are only available in the extra dataset.
 *   See the {\@linkDocs guide/i18n#i18n-pipes "I18n guide"} to know how to import extra locale
 *   data.
 * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
 *   Instead users should treat the date as an immutable object and change the reference when the
 *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
 *   which would be an expensive operation).
 *
 * ### Examples
 *
 * Assuming `dateObj` is (year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11)
 * in the _local_ time and locale is 'en-US':
 *
 * {\@example common/pipes/ts/date_pipe.ts region='DatePipe'}
 *
 * \@stable
 */
var DatePipe = /** @class */ (function () {
    function DatePipe(locale) {
        this.locale = locale;
    }
    /**
     * @param {?} value
     * @param {?=} format
     * @param {?=} timezone
     * @param {?=} locale
     * @return {?}
     */
    DatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} format
     * @param {?=} timezone
     * @param {?=} locale
     * @return {?}
     */
    function (value, format, timezone, locale) {
        if (format === void 0) { format = 'mediumDate'; }
        if (value == null || value === '' || value !== value)
            return null;
        if (typeof value === 'string') {
            value = value.trim();
        }
        var /** @type {?} */ date;
        var /** @type {?} */ match;
        if (isDate$1(value)) {
            date = value;
        }
        else if (!isNaN(value - parseFloat(value))) {
            date = new Date(parseFloat(value));
        }
        else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
            /**
             * For ISO Strings without time the day, month and year must be extracted from the ISO String
             * before Date creation to avoid time offset and errors in the new Date.
             * If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
             * date, some browsers (e.g. IE 9) will throw an invalid Date error
             * If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
             * is applied
             * Note: ISO months are 0 for January, 1 for February, ...
             */
            var _a = value.split('-').map(function (val) { return +val; }), y = _a[0], m = _a[1], d = _a[2];
            date = new Date(y, m - 1, d);
        }
        else if ((typeof value === 'string') && (match = value.match(ISO8601_DATE_REGEX))) {
            date = isoStringToDate(match);
        }
        else {
            date = new Date(value);
        }
        if (!isDate$1(date)) {
            throw invalidPipeArgumentError(DatePipe, value);
        }
        return formatDate(date, format, locale || this.locale, timezone);
    };
    DatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'date', pure: true },] },
    ];
    /** @nocollapse */
    DatePipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    return DatePipe;
}());
/**
 * \@internal
 * @param {?} match
 * @return {?}
 */
function isoStringToDate(match) {
    var /** @type {?} */ date = new Date(0);
    var /** @type {?} */ tzHour = 0;
    var /** @type {?} */ tzMin = 0;
    // match[8] means that the string contains "Z" (UTC) or a timezone like "+01:00" or "+0100"
    var /** @type {?} */ dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
    var /** @type {?} */ timeSetter = match[8] ? date.setUTCHours : date.setHours;
    // if there is a timezone defined like "+01:00" or "+0100"
    if (match[9]) {
        tzHour = +(match[9] + match[10]);
        tzMin = +(match[9] + match[11]);
    }
    dateSetter.call(date, +(match[1]), +(match[2]) - 1, +(match[3]));
    var /** @type {?} */ h = +(match[4] || '0') - tzHour;
    var /** @type {?} */ m = +(match[5] || '0') - tzMin;
    var /** @type {?} */ s = +(match[6] || '0');
    var /** @type {?} */ ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
    timeSetter.call(date, h, m, s, ms);
    return date;
}
/**
 * @param {?} value
 * @return {?}
 */
function isDate$1(value) {
    return value instanceof Date && !isNaN(value.valueOf());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumberFormatter = /** @class */ (function () {
    function NumberFormatter() {
    }
    /**
     * @param {?} num
     * @param {?} locale
     * @param {?} style
     * @param {?=} opts
     * @return {?}
     */
    NumberFormatter.format = /**
     * @param {?} num
     * @param {?} locale
     * @param {?} style
     * @param {?=} opts
     * @return {?}
     */
    function (num, locale, style, opts) {
        if (opts === void 0) { opts = {}; }
        var minimumIntegerDigits = opts.minimumIntegerDigits, minimumFractionDigits = opts.minimumFractionDigits, maximumFractionDigits = opts.maximumFractionDigits, currency = opts.currency, _a = opts.currencyAsSymbol, currencyAsSymbol = _a === void 0 ? false : _a;
        var /** @type {?} */ options = {
            minimumIntegerDigits: minimumIntegerDigits,
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits,
            style: NumberFormatStyle[style].toLowerCase()
        };
        if (style == NumberFormatStyle.Currency) {
            options.currency = typeof currency == 'string' ? currency : undefined;
            options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
        }
        return new Intl.NumberFormat(locale, options).format(num);
    };
    return NumberFormatter;
}());
var DATE_FORMATS_SPLIT$1 = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
var PATTERN_ALIASES = {
    // Keys are quoted so they do not get renamed during closure compilation.
    'yMMMdjms': datePartGetterFactory(combine([
        digitCondition('year', 1),
        nameCondition('month', 3),
        digitCondition('day', 1),
        digitCondition('hour', 1),
        digitCondition('minute', 1),
        digitCondition('second', 1),
    ])),
    'yMdjm': datePartGetterFactory(combine([
        digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1),
        digitCondition('hour', 1), digitCondition('minute', 1)
    ])),
    'yMMMMEEEEd': datePartGetterFactory(combine([
        digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4),
        digitCondition('day', 1)
    ])),
    'yMMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
    'yMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
    'yMd': datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
    'jms': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
    'jm': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
};
var DATE_FORMATS$1 = {
    // Keys are quoted so they do not get renamed.
    'yyyy': datePartGetterFactory(digitCondition('year', 4)),
    'yy': datePartGetterFactory(digitCondition('year', 2)),
    'y': datePartGetterFactory(digitCondition('year', 1)),
    'MMMM': datePartGetterFactory(nameCondition('month', 4)),
    'MMM': datePartGetterFactory(nameCondition('month', 3)),
    'MM': datePartGetterFactory(digitCondition('month', 2)),
    'M': datePartGetterFactory(digitCondition('month', 1)),
    'LLLL': datePartGetterFactory(nameCondition('month', 4)),
    'L': datePartGetterFactory(nameCondition('month', 1)),
    'dd': datePartGetterFactory(digitCondition('day', 2)),
    'd': datePartGetterFactory(digitCondition('day', 1)),
    'HH': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false)))),
    'H': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
    'hh': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true)))),
    'h': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
    'jj': datePartGetterFactory(digitCondition('hour', 2)),
    'j': datePartGetterFactory(digitCondition('hour', 1)),
    'mm': digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
    'm': datePartGetterFactory(digitCondition('minute', 1)),
    'ss': digitModifier(datePartGetterFactory(digitCondition('second', 2))),
    's': datePartGetterFactory(digitCondition('second', 1)),
    // while ISO 8601 requires fractions to be prefixed with `.` or `,`
    // we can be just safely rely on using `sss` since we currently don't support single or two digit
    // fractions
    'sss': datePartGetterFactory(digitCondition('second', 3)),
    'EEEE': datePartGetterFactory(nameCondition('weekday', 4)),
    'EEE': datePartGetterFactory(nameCondition('weekday', 3)),
    'EE': datePartGetterFactory(nameCondition('weekday', 2)),
    'E': datePartGetterFactory(nameCondition('weekday', 1)),
    'a': hourClockExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
    'Z': timeZoneGetter$1('short'),
    'z': timeZoneGetter$1('long'),
    'ww': datePartGetterFactory({}),
    // Week of year, padded (00-53). Week 01 is the week with the
    // first Thursday of the year. not support ?
    'w': datePartGetterFactory({}),
    // Week of year (0-53). Week 1 is the week with the first Thursday
    // of the year not support ?
    'G': datePartGetterFactory(nameCondition('era', 1)),
    'GG': datePartGetterFactory(nameCondition('era', 2)),
    'GGG': datePartGetterFactory(nameCondition('era', 3)),
    'GGGG': datePartGetterFactory(nameCondition('era', 4))
};
/**
 * @param {?} inner
 * @return {?}
 */
function digitModifier(inner) {
    return function (date, locale) {
        var /** @type {?} */ result = inner(date, locale);
        return result.length == 1 ? '0' + result : result;
    };
}
/**
 * @param {?} inner
 * @return {?}
 */
function hourClockExtractor(inner) {
    return function (date, locale) { return inner(date, locale).split(' ')[1]; };
}
/**
 * @param {?} inner
 * @return {?}
 */
function hourExtractor(inner) {
    return function (date, locale) { return inner(date, locale).split(' ')[0]; };
}
/**
 * @param {?} date
 * @param {?} locale
 * @param {?} options
 * @return {?}
 */
function intlDateFormat(date, locale, options) {
    return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
}
/**
 * @param {?} timezone
 * @return {?}
 */
function timeZoneGetter$1(timezone) {
    // To workaround `Intl` API restriction for single timezone let format with 24 hours
    var /** @type {?} */ options = { hour: '2-digit', hour12: false, timeZoneName: timezone };
    return function (date, locale) {
        var /** @type {?} */ result = intlDateFormat(date, locale, options);
        // Then extract first 3 letters that related to hours
        return result ? result.substring(3) : '';
    };
}
/**
 * @param {?} options
 * @param {?} value
 * @return {?}
 */
function hour12Modify(options, value) {
    options.hour12 = value;
    return options;
}
/**
 * @param {?} prop
 * @param {?} len
 * @return {?}
 */
function digitCondition(prop, len) {
    var /** @type {?} */ result = {};
    result[prop] = len === 2 ? '2-digit' : 'numeric';
    return result;
}
/**
 * @param {?} prop
 * @param {?} len
 * @return {?}
 */
function nameCondition(prop, len) {
    var /** @type {?} */ result = {};
    if (len < 4) {
        result[prop] = len > 1 ? 'short' : 'narrow';
    }
    else {
        result[prop] = 'long';
    }
    return result;
}
/**
 * @param {?} options
 * @return {?}
 */
function combine(options) {
    return options.reduce(function (merged, opt) { return (Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __assign */])({}, merged, opt)); }, {});
}
/**
 * @param {?} ret
 * @return {?}
 */
function datePartGetterFactory(ret) {
    return function (date, locale) { return intlDateFormat(date, locale, ret); };
}
var DATE_FORMATTER_CACHE = new Map();
/**
 * @param {?} format
 * @param {?} date
 * @param {?} locale
 * @return {?}
 */
function dateFormatter(format, date, locale) {
    var /** @type {?} */ fn = PATTERN_ALIASES[format];
    if (fn)
        return fn(date, locale);
    var /** @type {?} */ cacheKey = format;
    var /** @type {?} */ parts = DATE_FORMATTER_CACHE.get(cacheKey);
    if (!parts) {
        parts = [];
        var /** @type {?} */ match = void 0;
        DATE_FORMATS_SPLIT$1.exec(format);
        var /** @type {?} */ _format = format;
        while (_format) {
            match = DATE_FORMATS_SPLIT$1.exec(_format);
            if (match) {
                parts = parts.concat(match.slice(1));
                _format = /** @type {?} */ ((parts.pop()));
            }
            else {
                parts.push(_format);
                _format = null;
            }
        }
        DATE_FORMATTER_CACHE.set(cacheKey, parts);
    }
    return parts.reduce(function (text, part) {
        var /** @type {?} */ fn = DATE_FORMATS$1[part];
        return text + (fn ? fn(date, locale) : partToTime(part));
    }, '');
}
/**
 * @param {?} part
 * @return {?}
 */
function partToTime(part) {
    return part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
}
var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    /**
     * @param {?} date
     * @param {?} locale
     * @param {?} pattern
     * @return {?}
     */
    DateFormatter.format = /**
     * @param {?} date
     * @param {?} locale
     * @param {?} pattern
     * @return {?}
     */
    function (date, locale, pattern) {
        return dateFormatter(pattern, date, locale);
    };
    return DateFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
  */
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a date according to locale rules.
 * \@howToUse `date_expression | date[:format]`
 * \@description
 *
 * Where:
 * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
 * (https://www.w3.org/TR/NOTE-datetime).
 * - `format` indicates which date/time components to include. The format can be predefined as
 *   shown below or custom as shown in the table.
 *   - `'medium'`: equivalent to `'yMMMdjms'` (e.g. `Sep 3, 2010, 12:05:08 PM` for `en-US`)
 *   - `'short'`: equivalent to `'yMdjm'` (e.g. `9/3/2010, 12:05 PM` for `en-US`)
 *   - `'fullDate'`: equivalent to `'yMMMMEEEEd'` (e.g. `Friday, September 3, 2010` for `en-US`)
 *   - `'longDate'`: equivalent to `'yMMMMd'` (e.g. `September 3, 2010` for `en-US`)
 *   - `'mediumDate'`: equivalent to `'yMMMd'` (e.g. `Sep 3, 2010` for `en-US`)
 *   - `'shortDate'`: equivalent to `'yMd'` (e.g. `9/3/2010` for `en-US`)
 *   - `'mediumTime'`: equivalent to `'jms'` (e.g. `12:05:08 PM` for `en-US`)
 *   - `'shortTime'`: equivalent to `'jm'` (e.g. `12:05 PM` for `en-US`)
 *
 *
 *  | Component | Symbol | Narrow | Short Form   | Long Form         | Numeric   | 2-digit   |
 *  |-----------|:------:|--------|--------------|-------------------|-----------|-----------|
 *  | era       |   G    | G (A)  | GGG (AD)     | GGGG (Anno Domini)| -         | -         |
 *  | year      |   y    | -      | -            | -                 | y (2015)  | yy (15)   |
 *  | month     |   M    | L (S)  | MMM (Sep)    | MMMM (September)  | M (9)     | MM (09)   |
 *  | day       |   d    | -      | -            | -                 | d (3)     | dd (03)   |
 *  | weekday   |   E    | E (S)  | EEE (Sun)    | EEEE (Sunday)     | -         | -         |
 *  | hour      |   j    | -      | -            | -                 | j (13)    | jj (13)   |
 *  | hour12    |   h    | -      | -            | -                 | h (1 PM)  | hh (01 PM)|
 *  | hour24    |   H    | -      | -            | -                 | H (13)    | HH (13)   |
 *  | minute    |   m    | -      | -            | -                 | m (5)     | mm (05)   |
 *  | second    |   s    | -      | -            | -                 | s (9)     | ss (09)   |
 *  | timezone  |   z    | -      | -            | z (Pacific Standard Time)| -  | -         |
 *  | timezone  |   Z    | -      | Z (GMT-8:00) | -                 | -         | -         |
 *  | timezone  |   a    | -      | a (PM)       | -                 | -         | -         |
 *
 * In javascript, only the components specified will be respected (not the ordering,
 * punctuations, ...) and details of the formatting will be dependent on the locale.
 *
 * Timezone of the formatted text will be the local system timezone of the end-user's machine.
 *
 * When the expression is a ISO string without time (e.g. 2016-09-19) the time zone offset is not
 * applied and the formatted text will have the same day, month and year of the expression.
 *
 * WARNINGS:
 * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
 *   Instead users should treat the date as an immutable object and change the reference when the
 *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
 *   which would be an expensive operation).
 * - this pipe uses the Internationalization API. Therefore it is only reliable in Chrome and Opera
 *   browsers.
 *
 * ### Examples
 *
 * Assuming `dateObj` is (year: 2010, month: 9, day: 3, hour: 12 PM, minute: 05, second: 08)
 * in the _local_ time and locale is 'en-US':
 *
 * {\@example common/pipes/ts/date_pipe.ts region='DeprecatedDatePipe'}
 *
 * \@stable
 */
var DeprecatedDatePipe = /** @class */ (function () {
    function DeprecatedDatePipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} pattern
     * @return {?}
     */
    DeprecatedDatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} pattern
     * @return {?}
     */
    function (value, pattern) {
        if (pattern === void 0) { pattern = 'mediumDate'; }
        if (value == null || value === '' || value !== value)
            return null;
        var /** @type {?} */ date;
        if (typeof value === 'string') {
            value = value.trim();
        }
        if (isDate(value)) {
            date = value;
        }
        else if (!isNaN(value - parseFloat(value))) {
            date = new Date(parseFloat(value));
        }
        else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
            /**
             * For ISO Strings without time the day, month and year must be extracted from the ISO String
             * before Date creation to avoid time offset and errors in the new Date.
             * If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
             * date, some browsers (e.g. IE 9) will throw an invalid Date error
             * If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the
             * timeoffset
             * is applied
             * Note: ISO months are 0 for January, 1 for February, ...
             */
            var _a = value.split('-').map(function (val) { return parseInt(val, 10); }), y = _a[0], m = _a[1], d = _a[2];
            date = new Date(y, m - 1, d);
        }
        else {
            date = new Date(value);
        }
        if (!isDate(date)) {
            var /** @type {?} */ match = void 0;
            if ((typeof value === 'string') && (match = value.match(ISO8601_DATE_REGEX))) {
                date = isoStringToDate(match);
            }
            else {
                throw invalidPipeArgumentError(DeprecatedDatePipe, value);
            }
        }
        return DateFormatter.format(date, this._locale, DeprecatedDatePipe._ALIASES[pattern] || pattern);
    };
    /**
     * \@internal
     */
    DeprecatedDatePipe._ALIASES = {
        'medium': 'yMMMdjms',
        'short': 'yMdjm',
        'fullDate': 'yMMMMEEEEd',
        'longDate': 'yMMMMd',
        'mediumDate': 'yMMMd',
        'shortDate': 'yMd',
        'mediumTime': 'jms',
        'shortTime': 'jm'
    };
    DeprecatedDatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'date', pure: true },] },
    ];
    /** @nocollapse */
    DeprecatedDatePipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    return DeprecatedDatePipe;
}());
/**
 * @param {?} value
 * @return {?}
 */
function isDate(value) {
    return value instanceof Date && !isNaN(value.valueOf());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
var MAX_DIGITS = 22;
var DECIMAL_SEP = '.';
var ZERO_CHAR = '0';
var PATTERN_SEP = ';';
var GROUP_SEP = ',';
var DIGIT_CHAR = '#';
var CURRENCY_CHAR = '¤';
var PERCENT_CHAR = '%';
/**
 * Transform a number to a locale string based on a style and a format
 *
 * \@internal
 * @param {?} value
 * @param {?} locale
 * @param {?} style
 * @param {?=} digitsInfo
 * @param {?=} currency
 * @return {?}
 */
function formatNumber$1(value, locale, style, digitsInfo, currency) {
    if (currency === void 0) { currency = null; }
    var /** @type {?} */ res = { str: null };
    var /** @type {?} */ format = getLocaleNumberFormat(locale, style);
    var /** @type {?} */ num;
    // Convert strings to numbers
    if (typeof value === 'string' && !isNaN(+value - parseFloat(value))) {
        num = +value;
    }
    else if (typeof value !== 'number') {
        res.error = value + " is not a number";
        return res;
    }
    else {
        num = value;
    }
    var /** @type {?} */ pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
    var /** @type {?} */ formattedText = '';
    var /** @type {?} */ isZero = false;
    if (!isFinite(num)) {
        formattedText = getLocaleNumberSymbol(locale, NumberSymbol.Infinity);
    }
    else {
        var /** @type {?} */ parsedNumber = parseNumber(num);
        if (style === NumberFormatStyle.Percent) {
            parsedNumber = toPercent(parsedNumber);
        }
        var /** @type {?} */ minInt = pattern.minInt;
        var /** @type {?} */ minFraction = pattern.minFrac;
        var /** @type {?} */ maxFraction = pattern.maxFrac;
        if (digitsInfo) {
            var /** @type {?} */ parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);
            if (parts === null) {
                res.error = digitsInfo + " is not a valid digit info";
                return res;
            }
            var /** @type {?} */ minIntPart = parts[1];
            var /** @type {?} */ minFractionPart = parts[3];
            var /** @type {?} */ maxFractionPart = parts[5];
            if (minIntPart != null) {
                minInt = parseIntAutoRadix(minIntPart);
            }
            if (minFractionPart != null) {
                minFraction = parseIntAutoRadix(minFractionPart);
            }
            if (maxFractionPart != null) {
                maxFraction = parseIntAutoRadix(maxFractionPart);
            }
            else if (minFractionPart != null && minFraction > maxFraction) {
                maxFraction = minFraction;
            }
        }
        roundNumber(parsedNumber, minFraction, maxFraction);
        var /** @type {?} */ digits = parsedNumber.digits;
        var /** @type {?} */ integerLen = parsedNumber.integerLen;
        var /** @type {?} */ exponent = parsedNumber.exponent;
        var /** @type {?} */ decimals = [];
        isZero = digits.every(function (d) { return !d; });
        // pad zeros for small numbers
        for (; integerLen < minInt; integerLen++) {
            digits.unshift(0);
        }
        // pad zeros for small numbers
        for (; integerLen < 0; integerLen++) {
            digits.unshift(0);
        }
        // extract decimals digits
        if (integerLen > 0) {
            decimals = digits.splice(integerLen, digits.length);
        }
        else {
            decimals = digits;
            digits = [0];
        }
        // format the integer digits with grouping separators
        var /** @type {?} */ groups = [];
        if (digits.length >= pattern.lgSize) {
            groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(''));
        }
        while (digits.length > pattern.gSize) {
            groups.unshift(digits.splice(-pattern.gSize, digits.length).join(''));
        }
        if (digits.length) {
            groups.unshift(digits.join(''));
        }
        var /** @type {?} */ groupSymbol = currency ? NumberSymbol.CurrencyGroup : NumberSymbol.Group;
        formattedText = groups.join(getLocaleNumberSymbol(locale, groupSymbol));
        // append the decimal digits
        if (decimals.length) {
            var /** @type {?} */ decimalSymbol = currency ? NumberSymbol.CurrencyDecimal : NumberSymbol.Decimal;
            formattedText += getLocaleNumberSymbol(locale, decimalSymbol) + decimals.join('');
        }
        if (exponent) {
            formattedText += getLocaleNumberSymbol(locale, NumberSymbol.Exponential) + '+' + exponent;
        }
    }
    if (num < 0 && !isZero) {
        formattedText = pattern.negPre + formattedText + pattern.negSuf;
    }
    else {
        formattedText = pattern.posPre + formattedText + pattern.posSuf;
    }
    if (style === NumberFormatStyle.Currency && currency !== null) {
        res.str = formattedText
            .replace(CURRENCY_CHAR, currency)
            .replace(CURRENCY_CHAR, '');
        return res;
    }
    if (style === NumberFormatStyle.Percent) {
        res.str = formattedText.replace(new RegExp(PERCENT_CHAR, 'g'), getLocaleNumberSymbol(locale, NumberSymbol.PercentSign));
        return res;
    }
    res.str = formattedText;
    return res;
}
/**
 * @param {?} format
 * @param {?=} minusSign
 * @return {?}
 */
function parseNumberFormat(format, minusSign) {
    if (minusSign === void 0) { minusSign = '-'; }
    var /** @type {?} */ p = {
        minInt: 1,
        minFrac: 0,
        maxFrac: 0,
        posPre: '',
        posSuf: '',
        negPre: '',
        negSuf: '',
        gSize: 0,
        lgSize: 0
    };
    var /** @type {?} */ patternParts = format.split(PATTERN_SEP);
    var /** @type {?} */ positive = patternParts[0];
    var /** @type {?} */ negative = patternParts[1];
    var /** @type {?} */ positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ?
        positive.split(DECIMAL_SEP) :
        [
            positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1),
            positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)
        ], /** @type {?} */
    integer = positiveParts[0], /** @type {?} */ fraction = positiveParts[1] || '';
    p.posPre = integer.substr(0, integer.indexOf(DIGIT_CHAR));
    for (var /** @type {?} */ i = 0; i < fraction.length; i++) {
        var /** @type {?} */ ch = fraction.charAt(i);
        if (ch === ZERO_CHAR) {
            p.minFrac = p.maxFrac = i + 1;
        }
        else if (ch === DIGIT_CHAR) {
            p.maxFrac = i + 1;
        }
        else {
            p.posSuf += ch;
        }
    }
    var /** @type {?} */ groups = integer.split(GROUP_SEP);
    p.gSize = groups[1] ? groups[1].length : 0;
    p.lgSize = (groups[2] || groups[1]) ? (groups[2] || groups[1]).length : 0;
    if (negative) {
        var /** @type {?} */ trunkLen = positive.length - p.posPre.length - p.posSuf.length, /** @type {?} */
        pos = negative.indexOf(DIGIT_CHAR);
        p.negPre = negative.substr(0, pos).replace(/'/g, '');
        p.negSuf = negative.substr(pos + trunkLen).replace(/'/g, '');
    }
    else {
        p.negPre = minusSign + p.posPre;
        p.negSuf = p.posSuf;
    }
    return p;
}
/**
 * @param {?} parsedNumber
 * @return {?}
 */
function toPercent(parsedNumber) {
    // if the number is 0, don't do anything
    if (parsedNumber.digits[0] === 0) {
        return parsedNumber;
    }
    // Getting the current number of decimals
    var /** @type {?} */ fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
    if (parsedNumber.exponent) {
        parsedNumber.exponent += 2;
    }
    else {
        if (fractionLen === 0) {
            parsedNumber.digits.push(0, 0);
        }
        else if (fractionLen === 1) {
            parsedNumber.digits.push(0);
        }
        parsedNumber.integerLen += 2;
    }
    return parsedNumber;
}
/**
 * Parses a number.
 * Significant bits of this parse algorithm came from https://github.com/MikeMcl/big.js/
 * @param {?} num
 * @return {?}
 */
function parseNumber(num) {
    var /** @type {?} */ numStr = Math.abs(num) + '';
    var /** @type {?} */ exponent = 0, /** @type {?} */ digits, /** @type {?} */ integerLen;
    var /** @type {?} */ i, /** @type {?} */ j, /** @type {?} */ zeros;
    // Decimal point?
    if ((integerLen = numStr.indexOf(DECIMAL_SEP)) > -1) {
        numStr = numStr.replace(DECIMAL_SEP, '');
    }
    // Exponential form?
    if ((i = numStr.search(/e/i)) > 0) {
        // Work out the exponent.
        if (integerLen < 0)
            integerLen = i;
        integerLen += +numStr.slice(i + 1);
        numStr = numStr.substring(0, i);
    }
    else if (integerLen < 0) {
        // There was no decimal point or exponent so it is an integer.
        integerLen = numStr.length;
    }
    // Count the number of leading zeros.
    for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++) {
        /* empty */
    }
    if (i === (zeros = numStr.length)) {
        // The digits are all zero.
        digits = [0];
        integerLen = 1;
    }
    else {
        // Count the number of trailing zeros
        zeros--;
        while (numStr.charAt(zeros) === ZERO_CHAR)
            zeros--;
        // Trailing zeros are insignificant so ignore them
        integerLen -= i;
        digits = [];
        // Convert string to array of digits without leading/trailing zeros.
        for (j = 0; i <= zeros; i++, j++) {
            digits[j] = +numStr.charAt(i);
        }
    }
    // If the number overflows the maximum allowed digits then use an exponent.
    if (integerLen > MAX_DIGITS) {
        digits = digits.splice(0, MAX_DIGITS - 1);
        exponent = integerLen - 1;
        integerLen = 1;
    }
    return { digits: digits, exponent: exponent, integerLen: integerLen };
}
/**
 * Round the parsed number to the specified number of decimal places
 * This function changes the parsedNumber in-place
 * @param {?} parsedNumber
 * @param {?} minFrac
 * @param {?} maxFrac
 * @return {?}
 */
function roundNumber(parsedNumber, minFrac, maxFrac) {
    if (minFrac > maxFrac) {
        throw new Error("The minimum number of digits after fraction (" + minFrac + ") is higher than the maximum (" + maxFrac + ").");
    }
    var /** @type {?} */ digits = parsedNumber.digits;
    var /** @type {?} */ fractionLen = digits.length - parsedNumber.integerLen;
    var /** @type {?} */ fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
    // The index of the digit to where rounding is to occur
    var /** @type {?} */ roundAt = fractionSize + parsedNumber.integerLen;
    var /** @type {?} */ digit = digits[roundAt];
    if (roundAt > 0) {
        // Drop fractional digits beyond `roundAt`
        digits.splice(Math.max(parsedNumber.integerLen, roundAt));
        // Set non-fractional digits beyond `roundAt` to 0
        for (var /** @type {?} */ j = roundAt; j < digits.length; j++) {
            digits[j] = 0;
        }
    }
    else {
        // We rounded to zero so reset the parsedNumber
        fractionLen = Math.max(0, fractionLen);
        parsedNumber.integerLen = 1;
        digits.length = Math.max(1, roundAt = fractionSize + 1);
        digits[0] = 0;
        for (var /** @type {?} */ i = 1; i < roundAt; i++)
            digits[i] = 0;
    }
    if (digit >= 5) {
        if (roundAt - 1 < 0) {
            for (var /** @type {?} */ k = 0; k > roundAt; k--) {
                digits.unshift(0);
                parsedNumber.integerLen++;
            }
            digits.unshift(1);
            parsedNumber.integerLen++;
        }
        else {
            digits[roundAt - 1]++;
        }
    }
    // Pad out with zeros to get the required fraction length
    for (; fractionLen < Math.max(0, fractionSize); fractionLen++)
        digits.push(0);
    var /** @type {?} */ dropTrailingZeros = fractionSize !== 0;
    // Minimal length = nb of decimals required + current nb of integers
    // Any number besides that is optional and can be removed if it's a trailing 0
    var /** @type {?} */ minLen = minFrac + parsedNumber.integerLen;
    // Do any carrying, e.g. a digit was rounded up to 10
    var /** @type {?} */ carry = digits.reduceRight(function (carry, d, i, digits) {
        d = d + carry;
        digits[i] = d < 10 ? d : d - 10; // d % 10
        if (dropTrailingZeros) {
            // Do not keep meaningless fractional trailing zeros (e.g. 15.52000 --> 15.52)
            if (digits[i] === 0 && i >= minLen) {
                digits.pop();
            }
            else {
                dropTrailingZeros = false;
            }
        }
        return d >= 10 ? 1 : 0; // Math.floor(d / 10);
    }, 0);
    if (carry) {
        digits.unshift(carry);
        parsedNumber.integerLen++;
    }
}
/**
 * \@internal
 * @param {?} text
 * @return {?}
 */
function parseIntAutoRadix(text) {
    var /** @type {?} */ result = parseInt(text);
    if (isNaN(result)) {
        throw new Error('Invalid integer literal when parsing ' + text);
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} pipe
 * @param {?} locale
 * @param {?} value
 * @param {?} style
 * @param {?=} digits
 * @param {?=} currency
 * @param {?=} currencyAsSymbol
 * @return {?}
 */
function formatNumber(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
    if (currency === void 0) { currency = null; }
    if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
    if (value == null)
        return null;
    // Convert strings to numbers
    value = typeof value === 'string' && !isNaN(+value - parseFloat(value)) ? +value : value;
    if (typeof value !== 'number') {
        throw invalidPipeArgumentError(pipe, value);
    }
    var /** @type {?} */ minInt;
    var /** @type {?} */ minFraction;
    var /** @type {?} */ maxFraction;
    if (style !== NumberFormatStyle.Currency) {
        // rely on Intl default for currency
        minInt = 1;
        minFraction = 0;
        maxFraction = 3;
    }
    if (digits) {
        var /** @type {?} */ parts = digits.match(NUMBER_FORMAT_REGEXP);
        if (parts === null) {
            throw new Error(digits + " is not a valid digit info for number pipes");
        }
        if (parts[1] != null) {
            // min integer digits
            minInt = parseIntAutoRadix(parts[1]);
        }
        if (parts[3] != null) {
            // min fraction digits
            minFraction = parseIntAutoRadix(parts[3]);
        }
        if (parts[5] != null) {
            // max fraction digits
            maxFraction = parseIntAutoRadix(parts[5]);
        }
    }
    return NumberFormatter.format(/** @type {?} */ (value), locale, style, {
        minimumIntegerDigits: minInt,
        minimumFractionDigits: minFraction,
        maximumFractionDigits: maxFraction,
        currency: currency,
        currencyAsSymbol: currencyAsSymbol,
    });
}
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a number according to locale rules.
 * \@howToUse `number_expression | number[:digitInfo]`
 *
 * Formats a number as text. Group sizing and separator and other locale-specific
 * configurations are based on the active locale.
 *
 * where `expression` is a number:
 *  - `digitInfo` is a `string` which has a following format: <br>
 *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
 *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
 *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
 *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
 *
 * For more information on the acceptable range for each of these numbers and other
 * details see your native internationalization library.
 *
 * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
 * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
 *
 * ### Example
 *
 * {\@example common/pipes/ts/number_pipe.ts region='DeprecatedNumberPipe'}
 *
 * \@stable
 */
var DeprecatedDecimalPipe = /** @class */ (function () {
    function DeprecatedDecimalPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @return {?}
     */
    DeprecatedDecimalPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} digits
     * @return {?}
     */
    function (value, digits) {
        return formatNumber(DeprecatedDecimalPipe, this._locale, value, NumberFormatStyle.Decimal, digits);
    };
    DeprecatedDecimalPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'number' },] },
    ];
    /** @nocollapse */
    DeprecatedDecimalPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    return DeprecatedDecimalPipe;
}());
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a number as a percentage according to locale rules.
 * \@howToUse `number_expression | percent[:digitInfo]`
 *
 * \@description
 *
 * Formats a number as percentage.
 *
 * - `digitInfo` See {\@link DecimalPipe} for detailed description.
 *
 * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
 * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
 *
 * ### Example
 *
 * {\@example common/pipes/ts/percent_pipe.ts region='DeprecatedPercentPipe'}
 *
 * \@stable
 */
var DeprecatedPercentPipe = /** @class */ (function () {
    function DeprecatedPercentPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @return {?}
     */
    DeprecatedPercentPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} digits
     * @return {?}
     */
    function (value, digits) {
        return formatNumber(DeprecatedPercentPipe, this._locale, value, NumberFormatStyle.Percent, digits);
    };
    DeprecatedPercentPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'percent' },] },
    ];
    /** @nocollapse */
    DeprecatedPercentPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    return DeprecatedPercentPipe;
}());
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a number as currency using locale rules.
 * \@howToUse `number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]`
 * \@description
 *
 * Use `currency` to format a number as currency.
 *
 * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
 *    as `USD` for the US dollar and `EUR` for the euro.
 * - `symbolDisplay` is a boolean indicating whether to use the currency symbol or code.
 *   - `true`: use symbol (e.g. `$`).
 *   - `false`(default): use code (e.g. `USD`).
 * - `digitInfo` See {\@link DecimalPipe} for detailed description.
 *
 * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
 * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
 *
 * ### Example
 *
 * {\@example common/pipes/ts/currency_pipe.ts region='DeprecatedCurrencyPipe'}
 *
 * \@stable
 */
var DeprecatedCurrencyPipe = /** @class */ (function () {
    function DeprecatedCurrencyPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} symbolDisplay
     * @param {?=} digits
     * @return {?}
     */
    DeprecatedCurrencyPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} symbolDisplay
     * @param {?=} digits
     * @return {?}
     */
    function (value, currencyCode, symbolDisplay, digits) {
        if (currencyCode === void 0) { currencyCode = 'USD'; }
        if (symbolDisplay === void 0) { symbolDisplay = false; }
        return formatNumber(DeprecatedCurrencyPipe, this._locale, value, NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
    };
    DeprecatedCurrencyPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'currency' },] },
    ];
    /** @nocollapse */
    DeprecatedCurrencyPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    return DeprecatedCurrencyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A collection of deprecated i18n pipes that require intl api
 *
 * @deprecated from v5
 */
var COMMON_DEPRECATED_I18N_PIPES = [DeprecatedDecimalPipe, DeprecatedPercentPipe, DeprecatedCurrencyPipe, DeprecatedDatePipe];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ObservableStrategy = /** @class */ (function () {
    function ObservableStrategy() {
    }
    /**
     * @param {?} async
     * @param {?} updateLatestValue
     * @return {?}
     */
    ObservableStrategy.prototype.createSubscription = /**
     * @param {?} async
     * @param {?} updateLatestValue
     * @return {?}
     */
    function (async, updateLatestValue) {
        return async.subscribe({ next: updateLatestValue, error: function (e) { throw e; } });
    };
    /**
     * @param {?} subscription
     * @return {?}
     */
    ObservableStrategy.prototype.dispose = /**
     * @param {?} subscription
     * @return {?}
     */
    function (subscription) { subscription.unsubscribe(); };
    /**
     * @param {?} subscription
     * @return {?}
     */
    ObservableStrategy.prototype.onDestroy = /**
     * @param {?} subscription
     * @return {?}
     */
    function (subscription) { subscription.unsubscribe(); };
    return ObservableStrategy;
}());
var PromiseStrategy = /** @class */ (function () {
    function PromiseStrategy() {
    }
    /**
     * @param {?} async
     * @param {?} updateLatestValue
     * @return {?}
     */
    PromiseStrategy.prototype.createSubscription = /**
     * @param {?} async
     * @param {?} updateLatestValue
     * @return {?}
     */
    function (async, updateLatestValue) {
        return async.then(updateLatestValue, function (e) { throw e; });
    };
    /**
     * @param {?} subscription
     * @return {?}
     */
    PromiseStrategy.prototype.dispose = /**
     * @param {?} subscription
     * @return {?}
     */
    function (subscription) { };
    /**
     * @param {?} subscription
     * @return {?}
     */
    PromiseStrategy.prototype.onDestroy = /**
     * @param {?} subscription
     * @return {?}
     */
    function (subscription) { };
    return PromiseStrategy;
}());
var _promiseStrategy = new PromiseStrategy();
var _observableStrategy = new ObservableStrategy();
/**
 * \@ngModule CommonModule
 * \@whatItDoes Unwraps a value from an asynchronous primitive.
 * \@howToUse `observable_or_promise_expression | async`
 * \@description
 * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
 * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
 * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
 * potential memory leaks.
 *
 *
 * ## Examples
 *
 * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
 * promise.
 *
 * {\@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
 *
 * It's also possible to use `async` with Observables. The example below binds the `time` Observable
 * to the view. The Observable continuously updates the view with the current time.
 *
 * {\@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
 *
 * \@stable
 */
var AsyncPipe = /** @class */ (function () {
    function AsyncPipe(_ref) {
        this._ref = _ref;
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
        this._strategy = /** @type {?} */ ((null));
    }
    /**
     * @return {?}
     */
    AsyncPipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._dispose();
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AsyncPipe.prototype.transform = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (!this._obj) {
            if (obj) {
                this._subscribe(obj);
            }
            this._latestReturnedValue = this._latestValue;
            return this._latestValue;
        }
        if (obj !== this._obj) {
            this._dispose();
            return this.transform(/** @type {?} */ (obj));
        }
        if (this._latestValue === this._latestReturnedValue) {
            return this._latestReturnedValue;
        }
        this._latestReturnedValue = this._latestValue;
        return __WEBPACK_IMPORTED_MODULE_0__angular_core__["WrappedValue"].wrap(this._latestValue);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AsyncPipe.prototype._subscribe = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        this._obj = obj;
        this._strategy = this._selectStrategy(obj);
        this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AsyncPipe.prototype._selectStrategy = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisPromise"])(obj)) {
            return _promiseStrategy;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisObservable"])(obj)) {
            return _observableStrategy;
        }
        throw invalidPipeArgumentError(AsyncPipe, obj);
    };
    /**
     * @return {?}
     */
    AsyncPipe.prototype._dispose = /**
     * @return {?}
     */
    function () {
        this._strategy.dispose(/** @type {?} */ ((this._subscription)));
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
    };
    /**
     * @param {?} async
     * @param {?} value
     * @return {?}
     */
    AsyncPipe.prototype._updateLatestValue = /**
     * @param {?} async
     * @param {?} value
     * @return {?}
     */
    function (async, value) {
        if (async === this._obj) {
            this._latestValue = value;
            this._ref.markForCheck();
        }
    };
    AsyncPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'async', pure: false },] },
    ];
    /** @nocollapse */
    AsyncPipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    return AsyncPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms text to lowercase.
 *
 * {\@example  common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe' }
 *
 * \@stable
 */
var LowerCasePipe = /** @class */ (function () {
    function LowerCasePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    LowerCasePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value)
            return value;
        if (typeof value !== 'string') {
            throw invalidPipeArgumentError(LowerCasePipe, value);
        }
        return value.toLowerCase();
    };
    LowerCasePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'lowercase' },] },
    ];
    /** @nocollapse */
    LowerCasePipe.ctorParameters = function () { return []; };
    return LowerCasePipe;
}());
/**
 * Helper method to transform a single word to titlecase.
 *
 * \@stable
 * @param {?} word
 * @return {?}
 */
function titleCaseWord(word) {
    if (!word)
        return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
}
/**
 * Transforms text to titlecase.
 *
 * \@stable
 */
var TitleCasePipe = /** @class */ (function () {
    function TitleCasePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TitleCasePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value)
            return value;
        if (typeof value !== 'string') {
            throw invalidPipeArgumentError(TitleCasePipe, value);
        }
        return value.split(/\b/g).map(function (word) { return titleCaseWord(word); }).join('');
    };
    TitleCasePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'titlecase' },] },
    ];
    /** @nocollapse */
    TitleCasePipe.ctorParameters = function () { return []; };
    return TitleCasePipe;
}());
/**
 * Transforms text to uppercase.
 *
 * \@stable
 */
var UpperCasePipe = /** @class */ (function () {
    function UpperCasePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    UpperCasePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value)
            return value;
        if (typeof value !== 'string') {
            throw invalidPipeArgumentError(UpperCasePipe, value);
        }
        return value.toUpperCase();
    };
    UpperCasePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'uppercase' },] },
    ];
    /** @nocollapse */
    UpperCasePipe.ctorParameters = function () { return []; };
    return UpperCasePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _INTERPOLATION_REGEXP = /#/g;
/**
 * \@ngModule CommonModule
 * \@whatItDoes Maps a value to a string that pluralizes the value according to locale rules.
 * \@howToUse `expression | i18nPlural:mapping[:locale]`
 * \@description
 *
 *  Where:
 *  - `expression` is a number.
 *  - `mapping` is an object that mimics the ICU format, see
 *    http://userguide.icu-project.org/formatparse/messages
 *  - `locale` is a `string` defining the locale to use (uses the current {\@link LOCALE_ID} by
 * default)
 *
 *  ## Example
 *
 * {\@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
 *
 * \@experimental
 */
var I18nPluralPipe = /** @class */ (function () {
    function I18nPluralPipe(_localization) {
        this._localization = _localization;
    }
    /**
     * @param {?} value
     * @param {?} pluralMap
     * @param {?=} locale
     * @return {?}
     */
    I18nPluralPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} pluralMap
     * @param {?=} locale
     * @return {?}
     */
    function (value, pluralMap, locale) {
        if (value == null)
            return '';
        if (typeof pluralMap !== 'object' || pluralMap === null) {
            throw invalidPipeArgumentError(I18nPluralPipe, pluralMap);
        }
        var /** @type {?} */ key = getPluralCategory(value, Object.keys(pluralMap), this._localization, locale);
        return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
    };
    I18nPluralPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'i18nPlural', pure: true },] },
    ];
    /** @nocollapse */
    I18nPluralPipe.ctorParameters = function () { return [
        { type: NgLocalization, },
    ]; };
    return I18nPluralPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 * \@whatItDoes Generic selector that displays the string that matches the current value.
 * \@howToUse `expression | i18nSelect:mapping`
 * \@description
 *
 *  Where `mapping` is an object that indicates the text that should be displayed
 *  for different values of the provided `expression`.
 *  If none of the keys of the mapping match the value of the `expression`, then the content
 *  of the `other` key is returned when present, otherwise an empty string is returned.
 *
 *  ## Example
 *
 * {\@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
 *
 *  \@experimental
 */
var I18nSelectPipe = /** @class */ (function () {
    function I18nSelectPipe() {
    }
    /**
     * @param {?} value
     * @param {?} mapping
     * @return {?}
     */
    I18nSelectPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} mapping
     * @return {?}
     */
    function (value, mapping) {
        if (value == null)
            return '';
        if (typeof mapping !== 'object' || typeof value !== 'string') {
            throw invalidPipeArgumentError(I18nSelectPipe, mapping);
        }
        if (mapping.hasOwnProperty(value)) {
            return mapping[value];
        }
        if (mapping.hasOwnProperty('other')) {
            return mapping['other'];
        }
        return '';
    };
    I18nSelectPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'i18nSelect', pure: true },] },
    ];
    /** @nocollapse */
    I18nSelectPipe.ctorParameters = function () { return []; };
    return I18nSelectPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 * \@whatItDoes Converts value into JSON string.
 * \@howToUse `expression | json`
 * \@description
 *
 * Converts value into string using `JSON.stringify`. Useful for debugging.
 *
 * ### Example
 * {\@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
 *
 * \@stable
 */
var JsonPipe = /** @class */ (function () {
    function JsonPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    JsonPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return JSON.stringify(value, null, 2); };
    JsonPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'json', pure: false },] },
    ];
    /** @nocollapse */
    JsonPipe.ctorParameters = function () { return []; };
    return JsonPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a number according to locale rules.
 * \@howToUse `number_expression | number[:digitInfo[:locale]]`
 *
 * Formats a number as text. Group sizing and separator and other locale-specific
 * configurations are based on the active locale.
 *
 * where `expression` is a number:
 *  - `digitInfo` is a `string` which has a following format: <br>
 *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
 *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
 *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
 *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
 *  - `locale` is a `string` defining the locale to use (uses the current {\@link LOCALE_ID} by
 * default)
 *
 * For more information on the acceptable range for each of these numbers and other
 * details see your native internationalization library.
 *
 * ### Example
 *
 * {\@example common/pipes/ts/number_pipe.ts region='NumberPipe'}
 *
 * \@stable
 */
var DecimalPipe = /** @class */ (function () {
    function DecimalPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    DecimalPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    function (value, digits, locale) {
        if (isEmpty(value))
            return null;
        locale = locale || this._locale;
        var _a = formatNumber$1(value, locale, NumberFormatStyle.Decimal, digits), str = _a.str, error = _a.error;
        if (error) {
            throw invalidPipeArgumentError(DecimalPipe, error);
        }
        return str;
    };
    DecimalPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'number' },] },
    ];
    /** @nocollapse */
    DecimalPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    return DecimalPipe;
}());
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a number as a percentage according to locale rules.
 * \@howToUse `number_expression | percent[:digitInfo[:locale]]`
 *
 * \@description
 *
 * Formats a number as percentage.
 *
 * - `digitInfo` See {\@link DecimalPipe} for detailed description.
 *  - `locale` is a `string` defining the locale to use (uses the current {\@link LOCALE_ID} by
 * default)
 *
 * ### Example
 *
 * {\@example common/pipes/ts/percent_pipe.ts region='PercentPipe'}
 *
 * \@stable
 */
var PercentPipe = /** @class */ (function () {
    function PercentPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    PercentPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    function (value, digits, locale) {
        if (isEmpty(value))
            return null;
        locale = locale || this._locale;
        var _a = formatNumber$1(value, locale, NumberFormatStyle.Percent, digits), str = _a.str, error = _a.error;
        if (error) {
            throw invalidPipeArgumentError(PercentPipe, error);
        }
        return str;
    };
    PercentPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'percent' },] },
    ];
    /** @nocollapse */
    PercentPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    return PercentPipe;
}());
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a number as currency using locale rules.
 * \@howToUse `number_expression | currency[:currencyCode[:display[:digitInfo[:locale]]]]`
 * \@description
 *
 * Use `currency` to format a number as currency.
 *
 * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
 *    as `USD` for the US dollar and `EUR` for the euro.
 * - `display` indicates whether to show the currency symbol or the code.
 *   - `code`: use code (e.g. `USD`).
 *   - `symbol`(default): use symbol (e.g. `$`).
 *   - `symbol-narrow`: some countries have two symbols for their currency, one regular and one
 *   narrow (e.g. the canadian dollar CAD has the symbol `CA$` and the symbol-narrow `$`).
 *   - boolean (deprecated from v5): `true` for symbol and false for `code`
 *   If there is no narrow symbol for the chosen currency, the regular symbol will be used.
 * - `digitInfo` See {\@link DecimalPipe} for detailed description.
 *  - `locale` is a `string` defining the locale to use (uses the current {\@link LOCALE_ID} by
 * default)
 *
 * ### Example
 *
 * {\@example common/pipes/ts/currency_pipe.ts region='CurrencyPipe'}
 *
 * \@stable
 */
var CurrencyPipe = /** @class */ (function () {
    function CurrencyPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    CurrencyPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    function (value, currencyCode, display, digits, locale) {
        if (display === void 0) { display = 'symbol'; }
        if (isEmpty(value))
            return null;
        locale = locale || this._locale;
        if (typeof display === 'boolean') {
            if (/** @type {?} */ (console) && /** @type {?} */ (console.warn)) {
                console.warn("Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are \"code\", \"symbol\" or \"symbol-narrow\".");
            }
            display = display ? 'symbol' : 'code';
        }
        var /** @type {?} */ currency = currencyCode || 'USD';
        if (display !== 'code') {
            currency = getCurrencySymbol(currency, display === 'symbol' ? 'wide' : 'narrow');
        }
        var _a = formatNumber$1(value, locale, NumberFormatStyle.Currency, digits, currency), str = _a.str, error = _a.error;
        if (error) {
            throw invalidPipeArgumentError(CurrencyPipe, error);
        }
        return str;
    };
    CurrencyPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'currency' },] },
    ];
    /** @nocollapse */
    CurrencyPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    return CurrencyPipe;
}());
/**
 * @param {?} value
 * @return {?}
 */
function isEmpty(value) {
    return value == null || value === '' || value !== value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 * \@whatItDoes Creates a new List or String containing a subset (slice) of the elements.
 * \@howToUse `array_or_string_expression | slice:start[:end]`
 * \@description
 *
 * Where the input expression is a `List` or `String`, and:
 * - `start`: The starting index of the subset to return.
 *   - **a positive integer**: return the item at `start` index and all items after
 *     in the list or string expression.
 *   - **a negative integer**: return the item at `start` index from the end and all items after
 *     in the list or string expression.
 *   - **if positive and greater than the size of the expression**: return an empty list or string.
 *   - **if negative and greater than the size of the expression**: return entire list or string.
 * - `end`: The ending index of the subset to return.
 *   - **omitted**: return all items until the end.
 *   - **if positive**: return all items before `end` index of the list or string.
 *   - **if negative**: return all items before `end` index from the end of the list or string.
 *
 * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
 * and `String.prototype.slice()`.
 *
 * When operating on a [List], the returned list is always a copy even when all
 * the elements are being returned.
 *
 * When operating on a blank value, the pipe returns the blank value.
 *
 * ## List Example
 *
 * This `ngFor` example:
 *
 * {\@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
 *
 * produces the following:
 *
 *     <li>b</li>
 *     <li>c</li>
 *
 * ## String Examples
 *
 * {\@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
 *
 * \@stable
 */
var SlicePipe = /** @class */ (function () {
    function SlicePipe() {
    }
    /**
     * @param {?} value
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    SlicePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    function (value, start, end) {
        if (value == null)
            return value;
        if (!this.supports(value)) {
            throw invalidPipeArgumentError(SlicePipe, value);
        }
        return value.slice(start, end);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    SlicePipe.prototype.supports = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) { return typeof obj === 'string' || Array.isArray(obj); };
    SlicePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'slice', pure: false },] },
    ];
    /** @nocollapse */
    SlicePipe.ctorParameters = function () { return []; };
    return SlicePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A collection of Angular pipes that are likely to be used in each and every application.
 */
var COMMON_PIPES = [
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    I18nPluralPipe,
    I18nSelectPipe,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The module that includes all the basic Angular directives like {\@link NgIf}, {\@link NgForOf}, ...
 *
 * \@stable
 */
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [COMMON_DIRECTIVES, COMMON_PIPES],
                    exports: [COMMON_DIRECTIVES, COMMON_PIPES],
                    providers: [
                        { provide: NgLocalization, useClass: NgLocaleLocalization },
                    ],
                },] },
    ];
    /** @nocollapse */
    CommonModule.ctorParameters = function () { return []; };
    return CommonModule;
}());
var ɵ0 = getPluralCase;
/**
 * A module that contains the deprecated i18n pipes.
 *
 * @deprecated from v5
 */
var DeprecatedI18NPipesModule = /** @class */ (function () {
    function DeprecatedI18NPipesModule() {
    }
    DeprecatedI18NPipesModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [COMMON_DEPRECATED_I18N_PIPES],
                    exports: [COMMON_DEPRECATED_I18N_PIPES],
                    providers: [{ provide: DEPRECATED_PLURAL_FN, useValue: ɵ0 }],
                },] },
    ];
    /** @nocollapse */
    DeprecatedI18NPipesModule.ctorParameters = function () { return []; };
    return DeprecatedI18NPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
 *
 * Note: Document might not be available in the Application Context when Application and Rendering
 * Contexts are not the same (e.g. when running the application into a Web Worker).
 *
 * \@stable
 */
var DOCUMENT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('DocumentToken');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var PLATFORM_BROWSER_ID = 'browser';
var PLATFORM_SERVER_ID = 'server';
var PLATFORM_WORKER_APP_ID = 'browserWorkerApp';
var PLATFORM_WORKER_UI_ID = 'browserWorkerUi';
/**
 * Returns whether a platform id represents a browser platform.
 * \@experimental
 * @param {?} platformId
 * @return {?}
 */
function isPlatformBrowser(platformId) {
    return platformId === PLATFORM_BROWSER_ID;
}
/**
 * Returns whether a platform id represents a server platform.
 * \@experimental
 * @param {?} platformId
 * @return {?}
 */
function isPlatformServer(platformId) {
    return platformId === PLATFORM_SERVER_ID;
}
/**
 * Returns whether a platform id represents a web worker app platform.
 * \@experimental
 * @param {?} platformId
 * @return {?}
 */
function isPlatformWorkerApp(platformId) {
    return platformId === PLATFORM_WORKER_APP_ID;
}
/**
 * Returns whether a platform id represents a web worker UI platform.
 * \@experimental
 * @param {?} platformId
 * @return {?}
 */
function isPlatformWorkerUi(platformId) {
    return platformId === PLATFORM_WORKER_UI_ID;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('5.2.11');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=common.js.map


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AbstractControlDirective */
/* unused harmony export AbstractFormGroupDirective */
/* unused harmony export CheckboxControlValueAccessor */
/* unused harmony export ControlContainer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NgControlStatus; });
/* unused harmony export NgControlStatusGroup */
/* unused harmony export NgForm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NgModel; });
/* unused harmony export NgModelGroup */
/* unused harmony export RadioControlValueAccessor */
/* unused harmony export FormControlDirective */
/* unused harmony export FormControlName */
/* unused harmony export FormGroupDirective */
/* unused harmony export FormArrayName */
/* unused harmony export FormGroupName */
/* unused harmony export NgSelectOption */
/* unused harmony export SelectControlValueAccessor */
/* unused harmony export SelectMultipleControlValueAccessor */
/* unused harmony export CheckboxRequiredValidator */
/* unused harmony export EmailValidator */
/* unused harmony export MaxLengthValidator */
/* unused harmony export MinLengthValidator */
/* unused harmony export PatternValidator */
/* unused harmony export RequiredValidator */
/* unused harmony export FormBuilder */
/* unused harmony export AbstractControl */
/* unused harmony export FormArray */
/* unused harmony export FormControl */
/* unused harmony export FormGroup */
/* unused harmony export NG_ASYNC_VALIDATORS */
/* unused harmony export NG_VALIDATORS */
/* unused harmony export Validators */
/* unused harmony export VERSION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FormsModule; });
/* unused harmony export ReactiveFormsModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return InternalFormsSharedModule; });
/* unused harmony export ɵz */
/* unused harmony export ɵx */
/* unused harmony export ɵy */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* unused harmony export ɵe */
/* unused harmony export ɵf */
/* unused harmony export ɵg */
/* unused harmony export ɵbf */
/* unused harmony export ɵbb */
/* unused harmony export ɵbc */
/* unused harmony export ɵh */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RadioControlRegistry; });
/* unused harmony export ɵbd */
/* unused harmony export ɵbe */
/* unused harmony export ɵj */
/* unused harmony export ɵk */
/* unused harmony export ɵl */
/* unused harmony export ɵn */
/* unused harmony export ɵm */
/* unused harmony export ɵo */
/* unused harmony export ɵq */
/* unused harmony export ɵp */
/* unused harmony export ɵs */
/* unused harmony export ɵt */
/* unused harmony export ɵv */
/* unused harmony export ɵu */
/* unused harmony export ɵw */
/* unused harmony export ɵr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(40);
/**
 * @license Angular v5.2.11
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * \@stable
 * @abstract
 */
var AbstractControlDirective = /** @class */ (function () {
    function AbstractControlDirective() {
    }
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        /** The value of the control. */
        get: /**
         * The value of the control.
         * @return {?}
         */
        function () { return this.control ? this.control.value : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         */
        get: /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         * @return {?}
         */
        function () { return this.control ? this.control.valid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         */
        get: /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         * @return {?}
         */
        function () { return this.control ? this.control.invalid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
        /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         */
        get: /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         * @return {?}
         */
        function () { return this.control ? this.control.pending : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         */
        get: /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         * @return {?}
         */
        function () { return this.control ? this.control.disabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         */
        get: /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         * @return {?}
         */
        function () { return this.control ? this.control.enabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        /**
         * Returns any errors generated by failing validation. If there
         * are no errors, it will return null.
         */
        get: /**
         * Returns any errors generated by failing validation. If there
         * are no errors, it will return null.
         * @return {?}
         */
        function () { return this.control ? this.control.errors : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         */
        get: /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        function () { return this.control ? this.control.pristine : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         */
        get: /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        function () { return this.control ? this.control.dirty : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        /**
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        get: /**
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         * @return {?}
         */
        function () { return this.control ? this.control.touched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () { return this.control ? this.control.status : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         */
        get: /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */
        function () { return this.control ? this.control.untouched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        /**
         * Emits an event every time the validation status of the control
         * is re-calculated.
         */
        get: /**
         * Emits an event every time the validation status of the control
         * is re-calculated.
         * @return {?}
         */
        function () {
            return this.control ? this.control.statusChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        /**
         * Emits an event every time the value of the control changes, in
         * the UI or programmatically.
         */
        get: /**
         * Emits an event every time the value of the control changes, in
         * the UI or programmatically.
         * @return {?}
         */
        function () {
            return this.control ? this.control.valueChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        /**
         * Returns an array that represents the path from the top-level form
         * to this control. Each index is the string name of the control on
         * that level.
         */
        get: /**
         * Returns an array that represents the path from the top-level form
         * to this control. Each index is the string name of the control on
         * that level.
         * @return {?}
         */
        function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * For more information, see {@link AbstractControl}.
     */
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * For more information, see {\@link AbstractControl}.
     * @param {?=} value
     * @return {?}
     */
    AbstractControlDirective.prototype.reset = /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * For more information, see {\@link AbstractControl}.
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = undefined; }
        if (this.control)
            this.control.reset(value);
    };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     */
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.hasError = /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    function (errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    };
    /**
     * Returns error data if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     */
    /**
     * Returns error data if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.getError = /**
     * Returns error data if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    function (errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    };
    return AbstractControlDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A directive that contains multiple {\@link NgControl}s.
 *
 * Only used by the forms module.
 *
 * \@stable
 * @abstract
 */
var ControlContainer = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * Get the form to which this container belongs.
         */
        get: /**
         * Get the form to which this container belongs.
         * @return {?}
         */
        function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * Get the path to this container.
         */
        get: /**
         * Get the path to this container.
         * @return {?}
         */
        function () { return null; },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} value
 * @return {?}
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * Providers for validators to be used for {\@link FormControl}s in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * ### Example
 *
 * ```typescript
 * \@Directive({
 *   selector: '[custom-validator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return {"custom": true};
 *   }
 * }
 * ```
 *
 * \@stable
 */
var NG_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('NgValidators');
/**
 * Providers for asynchronous validators to be used for {\@link FormControl}s
 * in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * See {\@link NG_VALIDATORS} for more details.
 *
 * \@stable
 */
var NG_ASYNC_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('NgAsyncValidators');
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * Provides a set of validators used by form controls.
 *
 * A validator is a function that processes a {\@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ```typescript
 * var loginControl = new FormControl("", Validators.required)
 * ```
 *
 * \@stable
 */
var Validators = /** @class */ (function () {
    function Validators() {
    }
    /**
     * Validator that requires controls to have a value greater than a number.
     *`min()` exists only as a function, not as a directive. For example,
     * `control = new FormControl('', Validators.min(3));`.
     */
    /**
     * Validator that requires controls to have a value greater than a number.
     * `min()` exists only as a function, not as a directive. For example,
     * `control = new FormControl('', Validators.min(3));`.
     * @param {?} min
     * @return {?}
     */
    Validators.min = /**
     * Validator that requires controls to have a value greater than a number.
     * `min()` exists only as a function, not as a directive. For example,
     * `control = new FormControl('', Validators.min(3));`.
     * @param {?} min
     * @return {?}
     */
    function (min) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
        };
    };
    /**
     * Validator that requires controls to have a value less than a number.
     * `max()` exists only as a function, not as a directive. For example,
     * `control = new FormControl('', Validators.max(15));`.
     */
    /**
     * Validator that requires controls to have a value less than a number.
     * `max()` exists only as a function, not as a directive. For example,
     * `control = new FormControl('', Validators.max(15));`.
     * @param {?} max
     * @return {?}
     */
    Validators.max = /**
     * Validator that requires controls to have a value less than a number.
     * `max()` exists only as a function, not as a directive. For example,
     * `control = new FormControl('', Validators.max(15));`.
     * @param {?} max
     * @return {?}
     */
    function (max) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
            return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
        };
    };
    /**
     * Validator that requires controls to have a non-empty value.
     */
    /**
     * Validator that requires controls to have a non-empty value.
     * @param {?} control
     * @return {?}
     */
    Validators.required = /**
     * Validator that requires controls to have a non-empty value.
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
    /**
     * Validator that requires control value to be true.
     */
    /**
     * Validator that requires control value to be true.
     * @param {?} control
     * @return {?}
     */
    Validators.requiredTrue = /**
     * Validator that requires control value to be true.
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return control.value === true ? null : { 'required': true };
    };
    /**
     * Validator that performs email validation.
     */
    /**
     * Validator that performs email validation.
     * @param {?} control
     * @return {?}
     */
    Validators.email = /**
     * Validator that performs email validation.
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * Validator that requires controls to have a value of a minimum length.
     */
    /**
     * Validator that requires controls to have a value of a minimum length.
     * @param {?} minLength
     * @return {?}
     */
    Validators.minLength = /**
     * Validator that requires controls to have a value of a minimum length.
     * @param {?} minLength
     * @return {?}
     */
    function (minLength) {
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires controls to have a value of a maximum length.
     */
    /**
     * Validator that requires controls to have a value of a maximum length.
     * @param {?} maxLength
     * @return {?}
     */
    Validators.maxLength = /**
     * Validator that requires controls to have a value of a maximum length.
     * @param {?} maxLength
     * @return {?}
     */
    function (maxLength) {
        return function (control) {
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires a control to match a regex to its value.
     */
    /**
     * Validator that requires a control to match a regex to its value.
     * @param {?} pattern
     * @return {?}
     */
    Validators.pattern = /**
     * Validator that requires a control to match a regex to its value.
     * @param {?} pattern
     * @return {?}
     */
    function (pattern) {
        if (!pattern)
            return Validators.nullValidator;
        var /** @type {?} */ regex;
        var /** @type {?} */ regexStr;
        if (typeof pattern === 'string') {
            regexStr = '';
            if (pattern.charAt(0) !== '^')
                regexStr += '^';
            regexStr += pattern;
            if (pattern.charAt(pattern.length - 1) !== '$')
                regexStr += '$';
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        };
    };
    /**
     * No-op validator.
     */
    /**
     * No-op validator.
     * @param {?} c
     * @return {?}
     */
    Validators.nullValidator = /**
     * No-op validator.
     * @param {?} c
     * @return {?}
     */
    function (c) { return null; };
    /**
     * @param {?} validators
     * @return {?}
     */
    Validators.compose = /**
     * @param {?} validators
     * @return {?}
     */
    function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = /** @type {?} */ (validators.filter(isPresent));
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    /**
     * @param {?} validators
     * @return {?}
     */
    Validators.composeAsync = /**
     * @param {?} validators
     * @return {?}
     */
    function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = /** @type {?} */ (validators.filter(isPresent));
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var /** @type {?} */ observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__["forkJoin"])(observables), _mergeErrors);
        };
    };
    return Validators;
}());
/**
 * @param {?} o
 * @return {?}
 */
function isPresent(o) {
    return o != null;
}
/**
 * @param {?} r
 * @return {?}
 */
function toObservable(r) {
    var /** @type {?} */ obs = Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵisPromise"])(r) ? Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__["fromPromise"])(r) : r;
    if (!(Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵisObservable"])(obs))) {
        throw new Error("Expected validator to return Promise or Observable.");
    }
    return obs;
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
        return errors != null ? Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, /** @type {?} */ ((res)), errors) : /** @type {?} */ ((res));
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `ControlValueAccessor` acts as a bridge between the Angular forms API and a
 * native element in the DOM.
 *
 * Implement this interface if you want to create a custom form control directive
 * that integrates with Angular forms.
 *
 * \@stable
 * @record
 */

/**
 * Used to provide a {\@link ControlValueAccessor} for form controls.
 *
 * See {\@link DefaultValueAccessor} for how to implement one.
 * \@stable
 */
var NG_VALUE_ACCESSOR = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('NgValueAccessor');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return CheckboxControlValueAccessor; }),
    multi: true,
};
/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 *  ### Example
 *  ```
 *  <input type="checkbox" name="rememberLogin" ngModel>
 *  ```
 *
 *  \@stable
 */
var CheckboxControlValueAccessor = /** @class */ (function () {
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    CheckboxControlValueAccessor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                    providers: [CHECKBOX_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    CheckboxControlValueAccessor.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    ]; };
    return CheckboxControlValueAccessor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return DefaultValueAccessor; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 * @return {?}
 */
function _isAndroid() {
    var /** @type {?} */ userAgent = Object(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* ɵgetDOM */])() ? Object(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* ɵgetDOM */])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * Turn this mode on if you want form directives to buffer IME input until compositionend
 * \@experimental
 */
var COMPOSITION_BUFFER_MODE = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('CompositionEventMode');
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" name="searchQuery" ngModel>
 *  ```
 *
 *  \@stable
 */
var DefaultValueAccessor = /** @class */ (function () {
    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /**
         * Whether the user is creating a composition string (IME events).
         */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DefaultValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._handleInput = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionStart = /**
     * \@internal
     * @return {?}
     */
    function () { this._composing = true; };
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionEnd = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    };
    DefaultValueAccessor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                    // TODO: vsavkin replace the above selector with the one below it once
                    // https://github.com/angular/angular/issues/3011 is implemented
                    // selector: '[ngModel],[formControl],[formControlName]',
                    host: {
                        '(input)': '$any(this)._handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '$any(this)._compositionStart()',
                        '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
                    },
                    providers: [DEFAULT_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    DefaultValueAccessor.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [COMPOSITION_BUFFER_MODE,] },] },
    ]; };
    return DefaultValueAccessor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeValidator(validator) {
    if ((/** @type {?} */ (validator)).validate) {
        return function (c) { return (/** @type {?} */ (validator)).validate(c); };
    }
    else {
        return /** @type {?} */ (validator);
    }
}
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeAsyncValidator(validator) {
    if ((/** @type {?} */ (validator)).validate) {
        return function (c) { return (/** @type {?} */ (validator)).validate(c); };
    }
    else {
        return /** @type {?} */ (validator);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return NumberValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a number value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="number" [(ngModel)]="age">
 *  ```
 */
var NumberValueAccessor = /** @class */ (function () {
    function NumberValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumberValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NumberValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    NumberValueAccessor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                    host: {
                        '(change)': 'onChange($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                        '(blur)': 'onTouched()'
                    },
                    providers: [NUMBER_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    NumberValueAccessor.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    ]; };
    return NumberValueAccessor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * A base class that all control directive extend.
 * It binds a {\@link FormControl} object to a DOM element.
 *
 * Used internally by Angular forms.
 *
 * \@stable
 * @abstract
 */
var NgControl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(NgControl, _super);
    function NgControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * \@internal
         */
        _this._parent = null;
        _this.name = null;
        _this.valueAccessor = null;
        /**
         * \@internal
         */
        _this._rawValidators = [];
        /**
         * \@internal
         */
        _this._rawAsyncValidators = [];
        return _this;
    }
    Object.defineProperty(NgControl.prototype, "validator", {
        get: /**
         * @return {?}
         */
        function () { return /** @type {?} */ (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControl.prototype, "asyncValidator", {
        get: /**
         * @return {?}
         */
        function () { return /** @type {?} */ (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    return NgControl;
}(AbstractControlDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return RadioControlValueAccessor; }),
    multi: true
};
/**
 * Internal class used by Angular to uncheck radio buttons with the matching name.
 */
var RadioControlRegistry = /** @class */ (function () {
    function RadioControlRegistry() {
        this._accessors = [];
    }
    /**
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.add = /**
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    function (control, accessor) {
        this._accessors.push([control, accessor]);
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.remove = /**
     * @param {?} accessor
     * @return {?}
     */
    function (accessor) {
        for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.select = /**
     * @param {?} accessor
     * @return {?}
     */
    function (accessor) {
        var _this = this;
        this._accessors.forEach(function (c) {
            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    };
    /**
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype._isSameGroup = /**
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    function (controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    };
    RadioControlRegistry.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    RadioControlRegistry.ctorParameters = function () { return []; };
    return RadioControlRegistry;
}());
/**
 * \@whatItDoes Writes radio control values and listens to radio control changes.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any radio control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use radio buttons with form directives
 *
 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
 * in the same group have the same `name` attribute.  Radio buttons with different `name`
 * attributes do not affect each other.
 *
 * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
 *
 * When using radio buttons in a reactive form, radio buttons in the same group should have the
 * same `formControlName`. You can also add a `name` attribute, but it's optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  \@stable
 */
var RadioControlValueAccessor = /** @class */ (function () {
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this._registry.remove(this); };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._state = value === this.value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function () {
            fn(_this.value);
            _this._registry.select(_this);
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.fireUncheck = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { this.writeValue(value); };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RadioControlValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._checkName = /**
     * @return {?}
     */
    function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._throwNameError = /**
     * @return {?}
     */
    function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    };
    RadioControlValueAccessor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                    providers: [RADIO_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    RadioControlValueAccessor.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
        { type: RadioControlRegistry, },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], },
    ]; };
    RadioControlValueAccessor.propDecorators = {
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "formControlName": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "value": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return RadioControlValueAccessor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return RangeValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a range value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="range" [(ngModel)]="age" >
 *  ```
 */
var RangeValueAccessor = /** @class */ (function () {
    function RangeValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    RangeValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RangeValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    RangeValueAccessor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                    host: {
                        '(change)': 'onChange($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                        '(blur)': 'onTouched()'
                    },
                    providers: [RANGE_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    RangeValueAccessor.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    ]; };
    return RangeValueAccessor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return SelectControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString(id, value) {
    if (id == null)
        return "" + value;
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * \@whatItDoes Writes values and listens to changes on a select element.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any select control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use select controls with form directives
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * If your option values are simple strings, you can bind to the normal `value` property
 * on the option.  If your option values happen to be objects (and you'd like to save the
 * selection in your form as an object), use `ngValue` instead:
 *
 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * In reactive forms, you'll also want to add your form directive (`formControlName` or
 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
 * choice of binding to the  `value` or `ngValue` property on the select's options.
 *
 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Caveat: Option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * Note: We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var SelectControlValueAccessor = /** @class */ (function () {
    function SelectControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        var /** @type {?} */ id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        var /** @type {?} */ valueString = _buildValueString(id, value);
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this.onChange = function (valueString) {
            _this.value = _this._getOptionValue(valueString);
            fn(_this.value);
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectControlValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    SelectControlValueAccessor.prototype._registerOption = /**
     * \@internal
     * @return {?}
     */
    function () { return (this._idCounter++).toString(); };
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionId = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(this._optionMap.get(id), value))
                return id;
        }
        return null;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionValue = /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    function (valueString) {
        var /** @type {?} */ id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    };
    SelectControlValueAccessor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                    providers: [SELECT_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    SelectControlValueAccessor.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    ]; };
    SelectControlValueAccessor.propDecorators = {
        "compareWith": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return SelectControlValueAccessor;
}());
/**
 * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * \@howToUse
 *
 * See docs for {\@link SelectControlValueAccessor} for usage examples.
 *
 * \@stable
 */
var NgSelectOption = /** @class */ (function () {
    function NgSelectOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._select == null)
                return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectOption.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._setElementValue(value);
            if (this._select)
                this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectOption.prototype._setElementValue = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * @return {?}
     */
    NgSelectOption.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    NgSelectOption.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: 'option' },] },
    ];
    /** @nocollapse */
    NgSelectOption.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
        { type: SelectControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] },] },
    ]; };
    NgSelectOption.propDecorators = {
        "ngValue": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngValue',] },],
        "value": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['value',] },],
    };
    return NgSelectOption;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return SelectMultipleControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString$1(id, value) {
    if (id == null)
        return "" + value;
    if (typeof value === 'string')
        value = "'" + value + "'";
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 *
 *  ### Caveat: Options selection
 *
 * Angular uses object identity to select options. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects options by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * \@stable
 */
var SelectMultipleControlValueAccessor = /** @class */ (function () {
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.value = value;
        var /** @type {?} */ optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
        }
        else {
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this.onChange = function (_) {
            var /** @type {?} */ selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                var /** @type {?} */ options = _.selectedOptions;
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    var /** @type {?} */ val = _this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            else {
                var /** @type {?} */ options = /** @type {?} */ (_.options);
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    if (opt.selected) {
                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            _this.value = selected;
            fn(selected);
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._registerOption = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionId = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(/** @type {?} */ ((this._optionMap.get(id)))._value, value))
                return id;
        }
        return null;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionValue = /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    function (valueString) {
        var /** @type {?} */ id = _extractId$1(valueString);
        return this._optionMap.has(id) ? /** @type {?} */ ((this._optionMap.get(id)))._value : valueString;
    };
    SelectMultipleControlValueAccessor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                    host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                    providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    SelectMultipleControlValueAccessor.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    ]; };
    SelectMultipleControlValueAccessor.propDecorators = {
        "compareWith": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return SelectMultipleControlValueAccessor;
}());
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * ### Example
 *
 * ```
 * <select multiple name="city" ngModel>
 *   <option *ngFor="let c of cities" [value]="c"></option>
 * </select>
 * ```
 */
var NgSelectMultipleOption = /** @class */ (function () {
    function NgSelectMultipleOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._select == null)
                return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
            else {
                this._setElementValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setElementValue = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} selected
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setSelected = /**
     * \@internal
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    };
    /**
     * @return {?}
     */
    NgSelectMultipleOption.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    NgSelectMultipleOption.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: 'option' },] },
    ];
    /** @nocollapse */
    NgSelectMultipleOption.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
        { type: SelectMultipleControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] },] },
    ]; };
    NgSelectMultipleOption.propDecorators = {
        "ngValue": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngValue',] },],
        "value": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['value',] },],
    };
    return NgSelectMultipleOption;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
function controlPath(name, parent) {
    return /** @type {?} */ ((parent.path)).concat([name]);
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([/** @type {?} */ ((control.validator)), dir.validator]);
    control.asyncValidator = Validators.composeAsync([/** @type {?} */ ((control.asyncValidator)), dir.asyncValidator]); /** @type {?} */
    ((dir.valueAccessor)).writeValue(control.value);
    setUpViewChangePipeline(control, dir);
    setUpModelChangePipeline(control, dir);
    setUpBlurPipeline(control, dir);
    if (/** @type {?} */ ((dir.valueAccessor)).setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) { /** @type {?} */ ((/** @type {?} */ ((dir.valueAccessor)).setDisabledState))(isDisabled); });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if ((/** @type {?} */ (validator)).registerOnValidatorChange)
            /** @type {?} */ (((/** @type {?} */ (validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if ((/** @type {?} */ (validator)).registerOnValidatorChange)
            /** @type {?} */ (((/** @type {?} */ (validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
    });
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function cleanUpControl(control, dir) {
    /** @type {?} */ ((dir.valueAccessor)).registerOnChange(function () { return _noControlError(dir); }); /** @type {?} */
    ((dir.valueAccessor)).registerOnTouched(function () { return _noControlError(dir); });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control)
        control._clearChangeFns();
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpViewChangePipeline(control, dir) {
    /** @type {?} */ ((dir.valueAccessor)).registerOnChange(function (newValue) {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change')
            updateControl(control, dir);
    });
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpBlurPipeline(control, dir) {
    /** @type {?} */ ((dir.valueAccessor)).registerOnTouched(function () {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange)
            updateControl(control, dir);
        if (control.updateOn !== 'submit')
            control.markAsTouched();
    });
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function updateControl(control, dir) {
    dir.viewToModelUpdate(control._pendingValue);
    if (control._pendingDirty)
        control.markAsDirty();
    control.setValue(control._pendingValue, { emitModelToViewChange: false });
    control._pendingChange = false;
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpModelChangePipeline(control, dir) {
    control.registerOnChange(function (newValue, emitModelEvent) {
        /** @type {?} */ ((
        // control -> view
        dir.valueAccessor)).writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    });
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
/**
 * @param {?} dir
 * @return {?}
 */
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */
function _throwError(dir, message) {
    var /** @type {?} */ messageEnd;
    if (/** @type {?} */ ((dir.path)).length > 1) {
        messageEnd = "path: '" + (/** @type {?} */ ((dir.path))).join(' -> ') + "'";
    }
    else if (/** @type {?} */ ((dir.path))[0]) {
        messageEnd = "name: '" + dir.path + "'";
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + " " + messageEnd);
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    var /** @type {?} */ change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
var BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
/**
 * @param {?} valueAccessor
 * @return {?}
 */
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
}
/**
 * @param {?} form
 * @param {?} directives
 * @return {?}
 */
function syncPendingControls(form, directives) {
    form._syncPendingControls();
    directives.forEach(function (dir) {
        var /** @type {?} */ control = /** @type {?} */ (dir.control);
        if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
        }
    });
}
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    if (!Array.isArray(valueAccessors))
        _throwError(dir, 'Value accessor was not provided as an array for form control with');
    var /** @type {?} */ defaultAccessor = undefined;
    var /** @type {?} */ builtinAccessor = undefined;
    var /** @type {?} */ customAccessor = undefined;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */
function removeDir(list, el) {
    var /** @type {?} */ index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
 *
 * \@stable
 */
var AbstractFormGroupDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._checkParentType(); /** @type {?} */
        ((this.formDirective)).addFormGroup(this);
    };
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * Get the {@link FormGroup} backing this binding.
         */
        get: /**
         * Get the {\@link FormGroup} backing this binding.
         * @return {?}
         */
        function () { return /** @type {?} */ ((this.formDirective)).getFormGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * Get the path to this control group.
         */
        get: /**
         * Get the path to this control group.
         * @return {?}
         */
        function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * Get the {@link Form} to which this group belongs.
         */
        get: /**
         * Get the {\@link Form} to which this group belongs.
         * @return {?}
         */
        function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        get: /**
         * @return {?}
         */
        function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractFormGroupDirective.prototype._checkParentType = /**
     * \@internal
     * @return {?}
     */
    function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AbstractControlStatus = /** @class */ (function () {
    function AbstractControlStatus(cd) {
        this._cd = cd;
    }
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
        get: /**
         * @return {?}
         */
        function () { return this._cd.control ? this._cd.control.untouched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
        get: /**
         * @return {?}
         */
        function () { return this._cd.control ? this._cd.control.touched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
        get: /**
         * @return {?}
         */
        function () { return this._cd.control ? this._cd.control.pristine : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
        get: /**
         * @return {?}
         */
        function () { return this._cd.control ? this._cd.control.dirty : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
        get: /**
         * @return {?}
         */
        function () { return this._cd.control ? this._cd.control.valid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
        get: /**
         * @return {?}
         */
        function () { return this._cd.control ? this._cd.control.invalid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
        get: /**
         * @return {?}
         */
        function () { return this._cd.control ? this._cd.control.pending : false; },
        enumerable: true,
        configurable: true
    });
    return AbstractControlStatus;
}());
var ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status. The following classes are applied as the properties
 * become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * \@stable
 */
var NgControlStatus = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(NgControlStatus, _super);
    function NgControlStatus(cd) {
        return _super.call(this, cd) || this;
    }
    NgControlStatus.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
    ];
    /** @nocollapse */
    NgControlStatus.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] },] },
    ]; };
    return NgControlStatus;
}(AbstractControlStatus));
/**
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatusGroup = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(NgControlStatusGroup, _super);
    function NgControlStatusGroup(cd) {
        return _super.call(this, cd) || this;
    }
    NgControlStatusGroup.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                    host: ngControlStatusHost
                },] },
    ];
    /** @nocollapse */
    NgControlStatusGroup.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] },] },
    ]; };
    return NgControlStatusGroup;
}(AbstractControlStatus));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
 */
var VALID = 'VALID';
/**
 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
 */
var INVALID = 'INVALID';
/**
 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
 * errors are not yet available for the input value.
 */
var PENDING = 'PENDING';
/**
 * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
 * calculations of validity or value.
 */
var DISABLED = 'DISABLED';
/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = (/** @type {?} */ (path)).split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return (/** @type {?} */ (path)).reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls[name] || null;
        }
        if (v instanceof FormArray) {
            return v.at(/** @type {?} */ (name)) || null;
        }
        return null;
    }, control);
}
/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function coerceToValidator(validatorOrOpts) {
    var /** @type {?} */ validator = /** @type {?} */ ((isOptionsObj(validatorOrOpts) ? (/** @type {?} */ (validatorOrOpts)).validators :
        validatorOrOpts));
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
/**
 * @param {?=} asyncValidator
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
    var /** @type {?} */ origAsyncValidator = /** @type {?} */ ((isOptionsObj(validatorOrOpts) ? (/** @type {?} */ (validatorOrOpts)).asyncValidators :
        asyncValidator));
    return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
        origAsyncValidator || null;
}
/**
 * @record
 */

/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function isOptionsObj(validatorOrOpts) {
    return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
        typeof validatorOrOpts === 'object';
}
/**
 * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
 * {\@link FormArray}.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * \@stable
 * @abstract
 */
var AbstractControl = /** @class */ (function () {
    function AbstractControl(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */
        this._onCollectionChange = function () { };
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         */
        this.pristine = true;
        /**
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /**
         * \@internal
         */
        this._onDisabledChange = [];
    }
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         */
        get: /**
         * The parent control.
         * @return {?}
         */
        function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         */
        get: /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         * @return {?}
         */
        function () { return this.status === VALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         */
        get: /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         * @return {?}
         */
        function () { return this.status === INVALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         */
        get: /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         * @return {?}
         */
        function () { return this.status == PENDING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         */
        get: /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         * @return {?}
         */
        function () { return this.status === DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         */
        get: /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         * @return {?}
         */
        function () { return this.status !== DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         */
        get: /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        function () { return !this.pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "untouched", {
        /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         */
        get: /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */
        function () { return !this.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "updateOn", {
        /**
         * Returns the update strategy of the `AbstractControl` (i.e.
         * the event on which the control will update itself).
         * Possible values: `'change'` (default) | `'blur'` | `'submit'`
         */
        get: /**
         * Returns the update strategy of the `AbstractControl` (i.e.
         * the event on which the control will update itself).
         * Possible values: `'change'` (default) | `'blur'` | `'submit'`
         * @return {?}
         */
        function () {
            return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this will overwrite any existing sync validators.
     */
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this will overwrite any existing sync validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setValidators = /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this will overwrite any existing sync validators.
     * @param {?} newValidator
     * @return {?}
     */
    function (newValidator) {
        this.validator = coerceToValidator(newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * will overwrite any existing async validators.
     */
    /**
     * Sets the async validators that are active on this control. Calling this
     * will overwrite any existing async validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setAsyncValidators = /**
     * Sets the async validators that are active on this control. Calling this
     * will overwrite any existing async validators.
     * @param {?} newValidator
     * @return {?}
     */
    function (newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    };
    /**
     * Empties out the sync validator list.
     */
    /**
     * Empties out the sync validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearValidators = /**
     * Empties out the sync validator list.
     * @return {?}
     */
    function () { this.validator = null; };
    /**
     * Empties out the async validator list.
     */
    /**
     * Empties out the async validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearAsyncValidators = /**
     * Empties out the async validator list.
     * @return {?}
     */
    function () { this.asyncValidator = null; };
    /**
     * Marks the control as `touched`.
     *
     * This will also mark all direct ancestors as `touched` to maintain
     * the model.
     */
    /**
     * Marks the control as `touched`.
     *
     * This will also mark all direct ancestors as `touched` to maintain
     * the model.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.markAsTouched = /**
     * Marks the control as `touched`.
     *
     * This will also mark all direct ancestors as `touched` to maintain
     * the model.
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        (/** @type {?} */ (this)).touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, it will also mark all children as `untouched`
     * to maintain the model, and re-calculate the `touched` status of all parent
     * controls.
     */
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, it will also mark all children as `untouched`
     * to maintain the model, and re-calculate the `touched` status of all parent
     * controls.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.markAsUntouched = /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, it will also mark all children as `untouched`
     * to maintain the model, and re-calculate the `touched` status of all parent
     * controls.
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        (/** @type {?} */ (this)).touched = false;
        this._pendingTouched = false;
        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /**
     * Marks the control as `dirty`.
     *
     * This will also mark all direct ancestors as `dirty` to maintain
     * the model.
     */
    /**
     * Marks the control as `dirty`.
     *
     * This will also mark all direct ancestors as `dirty` to maintain
     * the model.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.markAsDirty = /**
     * Marks the control as `dirty`.
     *
     * This will also mark all direct ancestors as `dirty` to maintain
     * the model.
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        (/** @type {?} */ (this)).pristine = false;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
        }
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, it will also mark all children as `pristine`
     * to maintain the model, and re-calculate the `pristine` status of all parent
     * controls.
     */
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, it will also mark all children as `pristine`
     * to maintain the model, and re-calculate the `pristine` status of all parent
     * controls.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.markAsPristine = /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, it will also mark all children as `pristine`
     * to maintain the model, and re-calculate the `pristine` status of all parent
     * controls.
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        (/** @type {?} */ (this)).pristine = true;
        this._pendingDirty = false;
        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /**
     * Marks the control as `pending`.
     */
    /**
     * Marks the control as `pending`.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.markAsPending = /**
     * Marks the control as `pending`.
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        (/** @type {?} */ (this)).status = PENDING;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
        }
    };
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     */
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.disable = /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        (/** @type {?} */ (this)).status = DISABLED;
        (/** @type {?} */ (this)).errors = null;
        this._forEachChild(function (control) { control.disable(Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, opts, { onlySelf: true })); });
        this._updateValue();
        if (opts.emitEvent !== false) {
            (/** @type {?} */ (this.valueChanges)).emit(this.value);
            (/** @type {?} */ (this.statusChanges)).emit(this.status);
        }
        this._updateAncestors(opts);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
    };
    /**
     * Enables the control. This means the control will be included in validation checks and
     * the aggregate value of its parent. Its status is re-calculated based on its value and
     * its validators.
     *
     * If the control has children, all children will be enabled.
     */
    /**
     * Enables the control. This means the control will be included in validation checks and
     * the aggregate value of its parent. Its status is re-calculated based on its value and
     * its validators.
     *
     * If the control has children, all children will be enabled.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.enable = /**
     * Enables the control. This means the control will be included in validation checks and
     * the aggregate value of its parent. Its status is re-calculated based on its value and
     * its validators.
     *
     * If the control has children, all children will be enabled.
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        (/** @type {?} */ (this)).status = VALID;
        this._forEachChild(function (control) { control.enable(Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, opts, { onlySelf: true })); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(opts);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
    };
    /**
     * @param {?} opts
     * @return {?}
     */
    AbstractControl.prototype._updateAncestors = /**
     * @param {?} opts
     * @return {?}
     */
    function (opts) {
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
            this._parent._updatePristine();
            this._parent._updateTouched();
        }
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    AbstractControl.prototype.setParent = /**
     * @param {?} parent
     * @return {?}
     */
    function (parent) { this._parent = parent; };
    /**
     * Re-calculates the value and validation status of the control.
     *
     * By default, it will also update the value and validity of its ancestors.
     */
    /**
     * Re-calculates the value and validation status of the control.
     *
     * By default, it will also update the value and validity of its ancestors.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.updateValueAndValidity = /**
     * Re-calculates the value and validation status of the control.
     *
     * By default, it will also update the value and validity of its ancestors.
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            (/** @type {?} */ (this)).errors = this._runValidator();
            (/** @type {?} */ (this)).status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            (/** @type {?} */ (this.valueChanges)).emit(this.value);
            (/** @type {?} */ (this.statusChanges)).emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype._updateTreeValidity = /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = { emitEvent: true }; }
        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity(opts); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._setInitialStatus = /**
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this)).status = this._allControlsDisabled() ? DISABLED : VALID;
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._runValidator = /**
     * @return {?}
     */
    function () {
        return this.validator ? this.validator(this) : null;
    };
    /**
     * @param {?=} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._runAsyncValidator = /**
     * @param {?=} emitEvent
     * @return {?}
     */
    function (emitEvent) {
        var _this = this;
        if (this.asyncValidator) {
            (/** @type {?} */ (this)).status = PENDING;
            var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
        }
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._cancelExistingSubscription = /**
     * @return {?}
     */
    function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * Sets errors on a form control.
     *
     * This is used when validations are run manually by the user, rather than automatically.
     *
     * Calling `setErrors` will also update the validity of the parent control.
     *
     * ### Example
     *
     * ```
     * const login = new FormControl("someLogin");
     * login.setErrors({
     *   "notUnique": true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({"notUnique": true});
     *
     * login.setValue("someOtherLogin");
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    /**
     * Sets errors on a form control.
     *
     * This is used when validations are run manually by the user, rather than automatically.
     *
     * Calling `setErrors` will also update the validity of the parent control.
     *
     * ### Example
     *
     * ```
     * const login = new FormControl("someLogin");
     * login.setErrors({
     *   "notUnique": true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({"notUnique": true});
     *
     * login.setValue("someOtherLogin");
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.setErrors = /**
     * Sets errors on a form control.
     *
     * This is used when validations are run manually by the user, rather than automatically.
     *
     * Calling `setErrors` will also update the validity of the parent control.
     *
     * ### Example
     *
     * ```
     * const login = new FormControl("someLogin");
     * login.setErrors({
     *   "notUnique": true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({"notUnique": true});
     *
     * login.setValue("someOtherLogin");
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    function (errors, opts) {
        if (opts === void 0) { opts = {}; }
        (/** @type {?} */ (this)).errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * Paths can be passed in as an array or a string delimited by a dot.
     *
     * To get a control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */
    /**
     * Retrieves a child control given the control's name or path.
     *
     * Paths can be passed in as an array or a string delimited by a dot.
     *
     * To get a control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path
     * @return {?}
     */
    AbstractControl.prototype.get = /**
     * Retrieves a child control given the control's name or path.
     *
     * Paths can be passed in as an array or a string delimited by a dot.
     *
     * To get a control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path
     * @return {?}
     */
    function (path) { return _find(this, path, '.'); };
    /**
     * Returns error data if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     */
    /**
     * Returns error data if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.getError = /**
     * Returns error data if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    function (errorCode, path) {
        var /** @type {?} */ control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
    };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     */
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.hasError = /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    function (errorCode, path) { return !!this.getError(errorCode, path); };
    Object.defineProperty(AbstractControl.prototype, "root", {
        /**
         * Retrieves the top-level ancestor of this control.
         */
        get: /**
         * Retrieves the top-level ancestor of this control.
         * @return {?}
         */
        function () {
            var /** @type {?} */ x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._updateControlsErrors = /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    function (emitEvent) {
        (/** @type {?} */ (this)).status = this._calculateStatus();
        if (emitEvent) {
            (/** @type {?} */ (this.statusChanges)).emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._initObservables = /**
     * \@internal
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this)).valueChanges = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        (/** @type {?} */ (this)).statusChanges = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._calculateStatus = /**
     * @return {?}
     */
    function () {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    AbstractControl.prototype._anyControlsHaveStatus = /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return this._anyControls(function (control) { return control.status === status; });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsDirty = /**
     * \@internal
     * @return {?}
     */
    function () {
        return this._anyControls(function (control) { return control.dirty; });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsTouched = /**
     * \@internal
     * @return {?}
     */
    function () {
        return this._anyControls(function (control) { return control.touched; });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype._updatePristine = /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        (/** @type {?} */ (this)).pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype._updateTouched = /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        (/** @type {?} */ (this)).touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} formState
     * @return {?}
     */
    AbstractControl.prototype._isBoxedValue = /**
     * \@internal
     * @param {?} formState
     * @return {?}
     */
    function (formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    AbstractControl.prototype._registerOnCollectionChange = /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onCollectionChange = fn; };
    /** @internal */
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype._setUpdateStrategy = /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (isOptionsObj(opts) && (/** @type {?} */ (opts)).updateOn != null) {
            this._updateOn = /** @type {?} */ (((/** @type {?} */ (opts)).updateOn));
        }
    };
    return AbstractControl;
}());
/**
 * \@whatItDoes Tracks the value and validation status of an individual form control.
 *
 * It is one of the three fundamental building blocks of Angular forms, along with
 * {\@link FormGroup} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormControl}, you can pass in an initial value as the
 * first argument. Example:
 *
 * ```ts
 * const ctrl = new FormControl('some value');
 * console.log(ctrl.value);     // 'some value'
 * ```
 *
 * You can also initialize the control with a form state object on instantiation,
 * which includes both the value and whether or not the control is disabled.
 * You can't use the value key without the disabled key; both are required
 * to use this way of initialization.
 *
 * ```ts
 * const ctrl = new FormControl({value: 'n/a', disabled: true});
 * console.log(ctrl.value);     // 'n/a'
 * console.log(ctrl.status);   // 'DISABLED'
 * ```
 *
 * The second {\@link FormControl} argument can accept one of three things:
 * * a sync validator function
 * * an array of sync validator functions
 * * an options object containing validator and/or async validator functions
 *
 * Example of a single sync validator function:
 *
 * ```ts
 * const ctrl = new FormControl('', Validators.required);
 * console.log(ctrl.value);     // ''
 * console.log(ctrl.status);   // 'INVALID'
 * ```
 *
 * Example using options object:
 *
 * ```ts
 * const ctrl = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * The options object can also be used to define when the control should update.
 * By default, the value and validity of a control updates whenever the value
 * changes. You can configure it to update on the blur event instead by setting
 * the `updateOn` option to `'blur'`.
 *
 * ```ts
 * const c = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * You can also set `updateOn` to `'submit'`, which will delay value and validity
 * updates until the parent form of the control fires a submit event.
 *
 * See its superclass, {\@link AbstractControl}, for more properties and methods.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormControl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FormControl, _super);
    function FormControl(formState, validatorOrOpts, asyncValidator) {
        if (formState === void 0) { formState = null; }
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        /**
         * \@internal
         */
        _this._onChange = [];
        _this._applyFormState(formState);
        _this._setUpdateStrategy(validatorOrOpts);
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._initObservables();
        return _this;
    }
    /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. This defaults to false.
     *
     * If `emitEvent` is `true`, this
     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
     * to true (as it falls through to `updateValueAndValidity`).
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     *
     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
     */
    /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. This defaults to false.
     *
     * If `emitEvent` is `true`, this
     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
     * to true (as it falls through to `updateValueAndValidity`).
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     *
     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.setValue = /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. This defaults to false.
     *
     * If `emitEvent` is `true`, this
     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
     * to true (as it falls through to `updateValueAndValidity`).
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     *
     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        (/** @type {?} */ (this)).value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) { return changeFn(_this.value, options.emitViewToModelChange !== false); });
        }
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     */
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.patchValue = /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        if (options === void 0) { options = {}; }
        this.setValue(value, options);
    };
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * You can also reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * Ex:
     *
     * ```ts
     * this.control.reset('Nancy');
     *
     * console.log(this.control.value);  // 'Nancy'
     * ```
     *
     * OR
     *
     * ```
     * this.control.reset({value: 'Nancy', disabled: true});
     *
     * console.log(this.control.value);  // 'Nancy'
     * console.log(this.control.status);  // 'DISABLED'
     * ```
     */
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * You can also reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * Ex:
     *
     * ```ts
     * this.control.reset('Nancy');
     *
     * console.log(this.control.value);  // 'Nancy'
     * ```
     *
     * OR
     *
     * ```
     * this.control.reset({value: 'Nancy', disabled: true});
     *
     * console.log(this.control.value);  // 'Nancy'
     * console.log(this.control.status);  // 'DISABLED'
     * ```
     * @param {?=} formState
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.reset = /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * You can also reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * Ex:
     *
     * ```ts
     * this.control.reset('Nancy');
     *
     * console.log(this.control.value);  // 'Nancy'
     * ```
     *
     * OR
     *
     * ```
     * this.control.reset({value: 'Nancy', disabled: true});
     *
     * console.log(this.control.value);  // 'Nancy'
     * console.log(this.control.status);  // 'DISABLED'
     * ```
     * @param {?=} formState
     * @param {?=} options
     * @return {?}
     */
    function (formState, options) {
        if (formState === void 0) { formState = null; }
        if (options === void 0) { options = {}; }
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._updateValue = /**
     * \@internal
     * @return {?}
     */
    function () { };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormControl.prototype._anyControls = /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    function (condition) { return false; };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._allControlsDisabled = /**
     * \@internal
     * @return {?}
     */
    function () { return this.disabled; };
    /**
     * Register a listener for change events.
     */
    /**
     * Register a listener for change events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnChange = /**
     * Register a listener for change events.
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange.push(fn); };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._clearChangeFns = /**
     * \@internal
     * @return {?}
     */
    function () {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = function () { };
    };
    /**
     * Register a listener for disabled events.
     */
    /**
     * Register a listener for disabled events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnDisabledChange = /**
     * Register a listener for disabled events.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onDisabledChange.push(fn);
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormControl.prototype._forEachChild = /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    function (cb) { };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._syncPendingControls = /**
     * \@internal
     * @return {?}
     */
    function () {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} formState
     * @return {?}
     */
    FormControl.prototype._applyFormState = /**
     * @param {?} formState
     * @return {?}
     */
    function (formState) {
        if (this._isBoxedValue(formState)) {
            (/** @type {?} */ (this)).value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            (/** @type {?} */ (this)).value = this._pendingValue = formState;
        }
    };
    return FormControl;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
 * instances.
 *
 * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
 * with each control name as the key.  It calculates its status by reducing the statuses
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
 * argument. The key for each child will be the name under which it is registered.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * You can also include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like {\@link FormControl} instances, you can alternatively choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, {validators: passwordMatchValidator, asyncValidators: otherValidator});
 * ```
 *
 * The options object can also be used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls will default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *    one: new FormControl()
 * }, {updateOn: 'blur'});
 * ```
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormGroup = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FormGroup, _super);
    function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpdateStrategy(validatorOrOpts);
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control, so for most cases you'll want
     * to use {@link FormGroup#addControl addControl} instead.
     */
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control, so for most cases you'll want
     * to use {\@link FormGroup#addControl addControl} instead.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.registerControl = /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control, so for most cases you'll want
     * to use {\@link FormGroup#addControl addControl} instead.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    };
    /**
     * Add a control to this group.
     */
    /**
     * Add a control to this group.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.addControl = /**
     * Add a control to this group.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove a control from this group.
     */
    /**
     * Remove a control from this group.
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype.removeControl = /**
     * Remove a control from this group.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     */
    /**
     * Replace an existing control.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.setControl = /**
     * Replace an existing control.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    function (name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * It will return false for disabled controls. If you'd like to check for existence in the group
     * only, use {@link AbstractControl#get get} instead.
     */
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * It will return false for disabled controls. If you'd like to check for existence in the group
     * only, use {\@link AbstractControl#get get} instead.
     * @param {?} controlName
     * @return {?}
     */
    FormGroup.prototype.contains = /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * It will return false for disabled controls. If you'd like to check for existence in the group
     * only, use {\@link AbstractControl#get get} instead.
     * @param {?} controlName
     * @return {?}
     */
    function (controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    };
    /**
     *  Sets the value of the {@link FormGroup}. It accepts an object that matches
     *  the structure of the group, with control names as keys.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.setValue({first: 'Nancy', last: 'Drew'});
     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     *
     *  ```
     */
    /**
     *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
     *  the structure of the group, with control names as keys.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.setValue({first: 'Nancy', last: 'Drew'});
     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     *
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormGroup.prototype.setValue = /**
     *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
     *  the structure of the group, with control names as keys.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.setValue({first: 'Nancy', last: 'Drew'});
     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     *
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(function (name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     *  Patches the value of the {@link FormGroup}. It accepts an object with control
     *  names as keys, and will do its best to match the values to the correct controls
     *  in the group.
     *
     *  It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.patchValue({first: 'Nancy'});
     *  console.log(form.value);   // {first: 'Nancy', last: null}
     *
     *  ```
     */
    /**
     *  Patches the value of the {\@link FormGroup}. It accepts an object with control
     *  names as keys, and will do its best to match the values to the correct controls
     *  in the group.
     *
     *  It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.patchValue({first: 'Nancy'});
     *  console.log(form.value);   // {first: 'Nancy', last: null}
     *
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormGroup.prototype.patchValue = /**
     *  Patches the value of the {\@link FormGroup}. It accepts an object with control
     *  names as keys, and will do its best to match the values to the correct controls
     *  in the group.
     *
     *  It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.patchValue({first: 'Nancy'});
     *  console.log(form.value);   // {first: 'Nancy', last: null}
     *
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        Object.keys(value).forEach(function (name) {
            if (_this.controls[name]) {
                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the {@link FormGroup}. This means by default:
     *
     * * The group and all descendants are marked `pristine`
     * * The group and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * can be a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * ### Example
     *
     * ```ts
     * this.form.reset({first: 'name', last: 'last name'});
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * - OR -
     *
     * ```
     * this.form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */
    /**
     * Resets the {\@link FormGroup}. This means by default:
     *
     * * The group and all descendants are marked `pristine`
     * * The group and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * can be a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * ### Example
     *
     * ```ts
     * this.form.reset({first: 'name', last: 'last name'});
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * - OR -
     *
     * ```
     * this.form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    FormGroup.prototype.reset = /**
     * Resets the {\@link FormGroup}. This means by default:
     *
     * * The group and all descendants are marked `pristine`
     * * The group and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * can be a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * ### Example
     *
     * ```ts
     * this.form.reset({first: 'name', last: 'last name'});
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * - OR -
     *
     * ```
     * this.form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        if (value === void 0) { value = {}; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, name) {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the {@link FormGroup}, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the group.
     */
    /**
     * The aggregate value of the {\@link FormGroup}, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the group.
     * @return {?}
     */
    FormGroup.prototype.getRawValue = /**
     * The aggregate value of the {\@link FormGroup}, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the group.
     * @return {?}
     */
    function () {
        return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : (/** @type {?} */ (control)).getRawValue();
            return acc;
        });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._syncPendingControls = /**
     * \@internal
     * @return {?}
     */
    function () {
        var /** @type {?} */ subtreeUpdated = this._reduceChildren(false, function (updated, child) {
            return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype._throwIfControlMissing = /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormGroup.prototype._forEachChild = /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        var _this = this;
        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._setUpControls = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        this._forEachChild(function (control) {
            control.setParent(_this);
            control._registerOnCollectionChange(_this._onCollectionChange);
        });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._updateValue = /**
     * \@internal
     * @return {?}
     */
    function () { (/** @type {?} */ (this)).value = this._reduceValue(); };
    /** @internal */
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormGroup.prototype._anyControls = /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    function (condition) {
        var _this = this;
        var /** @type {?} */ res = false;
        this._forEachChild(function (control, name) {
            res = res || (_this.contains(name) && condition(control));
        });
        return res;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._reduceValue = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */
    FormGroup.prototype._reduceChildren = /**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */
    function (initValue, fn) {
        var /** @type {?} */ res = initValue;
        this._forEachChild(function (control, name) { res = fn(res, control, name); });
        return res;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._allControlsDisabled = /**
     * \@internal
     * @return {?}
     */
    function () {
        for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
            var controlName = _a[_i];
            if (this.controls[controlName].enabled) {
                return false;
            }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormGroup.prototype._checkAllValuesPresent = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '" + name + "'.");
            }
        });
    };
    return FormGroup;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
 * {\@link FormGroup} or {\@link FormArray} instances.
 *
 * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
 * It calculates its status by reducing the statuses of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormGroup}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
 * argument.
 *
 * ### Example
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * You can also include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators can be passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * The options object can also be used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls will default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that will result in strange and unexpected behavior such
 * as broken change detection.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormArray = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FormArray, _super);
    function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpdateStrategy(validatorOrOpts);
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the {@link AbstractControl} at the given `index` in the array.
     */
    /**
     * Get the {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.at = /**
     * Get the {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    function (index) { return this.controls[index]; };
    /**
     * Insert a new {@link AbstractControl} at the end of the array.
     */
    /**
     * Insert a new {\@link AbstractControl} at the end of the array.
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.push = /**
     * Insert a new {\@link AbstractControl} at the end of the array.
     * @param {?} control
     * @return {?}
     */
    function (control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /** Insert a new {@link AbstractControl} at the given `index` in the array. */
    /**
     * Insert a new {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.insert = /**
     * Insert a new {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    function (index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
    };
    /** Remove the control at the given `index` in the array. */
    /**
     * Remove the control at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.removeAt = /**
     * Remove the control at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
    };
    /**
     * Replace an existing control.
     */
    /**
     * Replace an existing control.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.setControl = /**
     * Replace an existing control.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    function (index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         */
        get: /**
         * Length of the control array.
         * @return {?}
         */
        function () { return this.controls.length; },
        enumerable: true,
        configurable: true
    });
    /**
     *  Sets the value of the {@link FormArray}. It accepts an array that matches
     *  the structure of the control.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.setValue(['Nancy', 'Drew']);
     *  console.log(arr.value);   // ['Nancy', 'Drew']
     *  ```
     */
    /**
     *  Sets the value of the {\@link FormArray}. It accepts an array that matches
     *  the structure of the control.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.setValue(['Nancy', 'Drew']);
     *  console.log(arr.value);   // ['Nancy', 'Drew']
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormArray.prototype.setValue = /**
     *  Sets the value of the {\@link FormArray}. It accepts an array that matches
     *  the structure of the control.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.setValue(['Nancy', 'Drew']);
     *  console.log(arr.value);   // ['Nancy', 'Drew']
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     *  Patches the value of the {@link FormArray}. It accepts an array that matches the
     *  structure of the control, and will do its best to match the values to the correct
     *  controls in the group.
     *
     *  It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.patchValue(['Nancy']);
     *  console.log(arr.value);   // ['Nancy', null]
     *  ```
     */
    /**
     *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
     *  structure of the control, and will do its best to match the values to the correct
     *  controls in the group.
     *
     *  It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.patchValue(['Nancy']);
     *  console.log(arr.value);   // ['Nancy', null]
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormArray.prototype.patchValue = /**
     *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
     *  structure of the control, and will do its best to match the values to the correct
     *  controls in the group.
     *
     *  It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.patchValue(['Nancy']);
     *  console.log(arr.value);   // ['Nancy', null]
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        value.forEach(function (newValue, index) {
            if (_this.at(index)) {
                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the {@link FormArray}. This means by default:
     *
     * * The array and all descendants are marked `pristine`
     * * The array and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state can be a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Example
     *
     * ```ts
     * this.arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * - OR -
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     */
    /**
     * Resets the {\@link FormArray}. This means by default:
     *
     * * The array and all descendants are marked `pristine`
     * * The array and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state can be a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Example
     *
     * ```ts
     * this.arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * - OR -
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    FormArray.prototype.reset = /**
     * Resets the {\@link FormArray}. This means by default:
     *
     * * The array and all descendants are marked `pristine`
     * * The array and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state can be a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Example
     *
     * ```ts
     * this.arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * - OR -
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        if (value === void 0) { value = []; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, index) {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the array.
     */
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    FormArray.prototype.getRawValue = /**
     * The aggregate value of the array, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    function () {
        return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : (/** @type {?} */ (control)).getRawValue();
        });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._syncPendingControls = /**
     * \@internal
     * @return {?}
     */
    function () {
        var /** @type {?} */ subtreeUpdated = this.controls.reduce(function (updated, child) {
            return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype._throwIfControlMissing = /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormArray.prototype._forEachChild = /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        this.controls.forEach(function (control, index) { cb(control, index); });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._updateValue = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        (/** @type {?} */ (this)).value =
            this.controls.filter(function (control) { return control.enabled || _this.disabled; })
                .map(function (control) { return control.value; });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormArray.prototype._anyControls = /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    function (condition) {
        return this.controls.some(function (control) { return control.enabled && condition(control); });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._setUpControls = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        this._forEachChild(function (control) { return _this._registerControl(control); });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormArray.prototype._checkAllValuesPresent = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: " + i + ".");
            }
        });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._allControlsDisabled = /**
     * \@internal
     * @return {?}
     */
    function () {
        for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
            var control = _a[_i];
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype._registerControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    };
    return FormArray;
}(AbstractControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return NgForm; })
};
var resolvedPromise = Promise.resolve(null);
/**
 * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * \@howToUse
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You can export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
 * will give you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, you'll want to use {\@link NgModel} with a
 * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
 * sub-groups within the form.
 *
 * You can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * If you want to import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, you can add `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgForm = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(NgForm, _super);
    function NgForm(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this.submitted = false;
        _this._directives = [];
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this;
    }
    /**
     * @return {?}
     */
    NgForm.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { this._setUpdateStrategy(); };
    Object.defineProperty(NgForm.prototype, "formDirective", {
        get: /**
         * @return {?}
         */
        function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "controls", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addControl = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            (/** @type {?} */ (dir)).control = /** @type {?} */ (container.registerControl(dir.name, dir.control));
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
            _this._directives.push(dir);
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getControl = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) { return /** @type {?} */ (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeControl = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
            removeDir(_this._directives, dir);
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addFormGroup = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            var /** @type {?} */ group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeFormGroup = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getFormGroup = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) { return /** @type {?} */ (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.updateModel = /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    function (dir, value) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ ctrl = /** @type {?} */ (_this.form.get(/** @type {?} */ ((dir.path))));
            ctrl.setValue(value);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { this.control.setValue(value); };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgForm.prototype.onSubmit = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        (/** @type {?} */ (this)).submitted = true;
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    NgForm.prototype.onReset = /**
     * @return {?}
     */
    function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    NgForm.prototype.resetForm = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        (/** @type {?} */ (this)).submitted = false;
    };
    /**
     * @return {?}
     */
    NgForm.prototype._setUpdateStrategy = /**
     * @return {?}
     */
    function () {
        if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} path
     * @return {?}
     */
    NgForm.prototype._findContainer = /**
     * \@internal
     * @param {?} path
     * @return {?}
     */
    function (path) {
        path.pop();
        return path.length ? /** @type {?} */ (this.form.get(path)) : this.form;
    };
    NgForm.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                    providers: [formDirectiveProvider],
                    host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                    outputs: ['ngSubmit'],
                    exportAs: 'ngForm'
                },] },
    ];
    /** @nocollapse */
    NgForm.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    ]; };
    NgForm.propDecorators = {
        "options": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngFormOptions',] },],
    };
    return NgForm;
}(ControlContainer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FormErrorExamples = {
    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TemplateDrivenErrors = /** @class */ (function () {
    function TemplateDrivenErrors() {
    }
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.formGroupNameException = /**
     * @return {?}
     */
    function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.missingNameException = /**
     * @return {?}
     */
    function () {
        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelGroupParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    return TemplateDrivenErrors;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var modelGroupProvider = {
    provide: ControlContainer,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return NgModelGroup; })
};
/**
 * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used as a child of {\@link NgForm} (or in other words,
 * within `<form>` tags).
 *
 * Use this directive if you'd like to create a sub-group within a form. This can
 * come in handy if you want to validate a sub-group of your form separately from
 * the rest of your form, or if some values in your domain model make more sense to
 * consume together in a nested object.
 *
 * Pass in the name you'd like this sub-group to have and it will become the key
 * for the sub-group in the form's full value. You can also export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 * \@stable
 */
var NgModelGroup = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(NgModelGroup, _super);
    function NgModelGroup(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    NgModelGroup.prototype._checkParentType = /**
     * \@internal
     * @return {?}
     */
    function () {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    };
    NgModelGroup.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
    ];
    /** @nocollapse */
    NgModelGroup.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    ]; };
    NgModelGroup.propDecorators = {
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngModelGroup',] },],
    };
    return NgModelGroup;
}(AbstractFormGroupDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding = {
    provide: NgControl,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return NgModel; })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var resolvedPromise$1 = Promise.resolve(null);
/**
 * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
 * to a form control element.
 *
 * The {\@link FormControl} instance will track the value, user interaction, and
 * validation status of the control and keep the view synced with the model. If used
 * within a parent form, the directive will also register itself with the form as a child
 * control.
 *
 * \@howToUse
 *
 * This directive can be used by itself or as part of a larger form. All you need is the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional {\@link Input}. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
 * the domain model in your class as well.
 *
 * If you wish to inspect the properties of the associated {\@link FormControl} (like
 * validity state), you can also export the directive into a local template variable using
 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
 * will fall through to the control anyway, so you can access them directly. You can see a
 * full list of properties directly available in {\@link AbstractControlDirective}.
 *
 * The following is an example of a simple standalone control using `ngModel`:
 *
 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * It's worth noting that in the context of a parent form, you often can skip one-way or
 * two-way binding because the parent form will sync the value for you. You can access
 * its properties by exporting it into a local template variable using `ngForm` (ex:
 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * Take a look at an example of using `ngModel` within a form:
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * To see `ngModel` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgModel = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(NgModel, _super);
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.control = new FormControl();
        /**
         * \@internal
         */
        _this._registered = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this.formDirective && this.formDirective.removeControl(this); };
    Object.defineProperty(NgModel.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "formDirective", {
        get: /**
         * @return {?}
         */
        function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "validator", {
        get: /**
         * @return {?}
         */
        function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "asyncValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    NgModel.prototype.viewToModelUpdate = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpControl = /**
     * @return {?}
     */
    function () {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpdateStrategy = /**
     * @return {?}
     */
    function () {
        if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype._isStandalone = /**
     * @return {?}
     */
    function () {
        return !this._parent || !!(this.options && this.options.standalone);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpStandalone = /**
     * @return {?}
     */
    function () {
        setUpControl(this.control, this);
        this.control.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkForErrors = /**
     * @return {?}
     */
    function () {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkParentType = /**
     * @return {?}
     */
    function () {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkName = /**
     * @return {?}
     */
    function () {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgModel.prototype._updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype._updateDisabled = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
        var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(function () {
            if (isDisabled && !_this.control.disabled) {
                _this.control.disable();
            }
            else if (!isDisabled && _this.control.disabled) {
                _this.control.enable();
            }
        });
    };
    NgModel.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[ngModel]:not([formControlName]):not([formControl])',
                    providers: [formControlBinding],
                    exportAs: 'ngModel'
                },] },
    ];
    /** @nocollapse */
    NgModel.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
    ]; };
    NgModel.propDecorators = {
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "isDisabled": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['disabled',] },],
        "model": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngModel',] },],
        "options": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngModelOptions',] },],
        "update": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"], args: ['ngModelChange',] },],
    };
    return NgModel;
}(NgControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ReactiveErrors = /** @class */ (function () {
    function ReactiveErrors() {
    }
    /**
     * @return {?}
     */
    ReactiveErrors.controlParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.ngModelGroupException = /**
     * @return {?}
     */
    function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.missingFormException = /**
     * @return {?}
     */
    function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.groupParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.arrayParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.disabledAttrWarning = /**
     * @return {?}
     */
    function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    return ReactiveErrors;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding$1 = {
    provide: NgControl,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FormControlDirective; })
};
/**
 * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
 * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
 * {\@link FormControlDirective}.
 *
 * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
 * it does not require that your {\@link FormControl} instance be part of any parent
 * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
 * exists above it.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormControl} instance. See a full list of available properties in
 * {\@link AbstractControl}.
 *
 * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
 * or you can set it programmatically later using {\@link AbstractControl#setValue setValue} or
 * {\@link AbstractControl#patchValue patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
 * {\@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 *  \@stable
 */
var FormControlDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FormControlDirective, _super);
    function FormControlDirective(validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.update = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
        set: /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && /** @type {?} */ ((this.valueAccessor)).setDisabledState) {
                /** @type {?} */ ((/** @type {?} */ ((this.valueAccessor)).setDisabledState))(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    };
    Object.defineProperty(FormControlDirective.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "validator", {
        get: /**
         * @return {?}
         */
        function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlDirective.prototype.viewToModelUpdate = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype._isControlChanged = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        return changes.hasOwnProperty('form');
    };
    FormControlDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
    ];
    /** @nocollapse */
    FormControlDirective.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
    ]; };
    FormControlDirective.propDecorators = {
        "form": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['formControl',] },],
        "model": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngModel',] },],
        "update": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"], args: ['ngModelChange',] },],
        "isDisabled": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['disabled',] },],
    };
    return FormControlDirective;
}(NgControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FormGroupDirective; })
};
/**
 * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive accepts an existing {\@link FormGroup} instance. It will then use this
 * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
 * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
 * and {\@link FormArrayName} directives.
 *
 * **Set value**: You can set the form's initial value when instantiating the
 * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
 * {\@link AbstractControl#setValue setValue} or {\@link AbstractControl#patchValue patchValue}
 * methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
 * to the {\@link FormGroup}'s {\@link AbstractControl#valueChanges valueChanges} event.  You can also
 * listen to its {\@link AbstractControl#statusChanges statusChanges} event to be notified when the
 * validation status is re-calculated.
 *
 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormGroupDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FormGroupDirective, _super);
    function FormGroupDirective(_validators, _asyncValidators) {
        var _this = _super.call(this) || this;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this.submitted = false;
        _this.directives = [];
        _this.form = /** @type {?} */ ((null));
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FormGroupDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    };
    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
        get: /**
         * @return {?}
         */
        function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () { return []; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addControl = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getControl = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) { return /** @type {?} */ (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeControl = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) { removeDir(this.directives, dir); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormGroup = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormGroup = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormGroup = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) { return /** @type {?} */ (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormArray = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormArray = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormArray = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) { return /** @type {?} */ (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    FormGroupDirective.prototype.updateModel = /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    function (dir, value) {
        var /** @type {?} */ ctrl = /** @type {?} */ (this.form.get(dir.path));
        ctrl.setValue(value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FormGroupDirective.prototype.onSubmit = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        (/** @type {?} */ (this)).submitted = true;
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype.onReset = /**
     * @return {?}
     */
    function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    FormGroupDirective.prototype.resetForm = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        (/** @type {?} */ (this)).submitted = false;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroupDirective.prototype._updateDomValue = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        this.directives.forEach(function (dir) {
            var /** @type {?} */ newCtrl = _this.form.get(dir.path);
            if (dir.control !== newCtrl) {
                cleanUpControl(dir.control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                (/** @type {?} */ (dir)).control = newCtrl;
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateRegistrations = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange(function () { });
        this._oldForm = this.form;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateValidators = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([/** @type {?} */ ((this.form.validator)), /** @type {?} */ ((sync))]);
        var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([/** @type {?} */ ((this.form.asyncValidator)), /** @type {?} */ ((async))]);
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._checkFormPresent = /**
     * @return {?}
     */
    function () {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    };
    FormGroupDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[formGroup]',
                    providers: [formDirectiveProvider$1],
                    host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                    exportAs: 'ngForm'
                },] },
    ];
    /** @nocollapse */
    FormGroupDirective.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    ]; };
    FormGroupDirective.propDecorators = {
        "form": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['formGroup',] },],
        "ngSubmit": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    };
    return FormGroupDirective;
}(ControlContainer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FormGroupName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormGroup} you want to link, and
 * will look for a {\@link FormGroup} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form groups can come in handy when you want to validate a sub-group of a
 * form separately from the rest or when you'd like to group the values of certain
 * controls into their own nested object.
 *
 * **Access the group**: You can access the associated {\@link FormGroup} using the
 * {\@link AbstractControl#get get} method. Ex: `this.form.get('name')`.
 *
 * You can also access individual controls within the group using dot syntax.
 * Ex: `this.form.get('name.first')`
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormGroup}, or you can set it programmatically later using
 * {\@link AbstractControl#setValue setValue} or {\@link AbstractControl#patchValue patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the group, you can
 * subscribe to the {\@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
 * {\@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormGroupName = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FormGroupName, _super);
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroupName.prototype._checkParentType = /**
     * \@internal
     * @return {?}
     */
    function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    FormGroupName.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
    ];
    /** @nocollapse */
    FormGroupName.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    ]; };
    FormGroupName.propDecorators = {
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['formGroupName',] },],
    };
    return FormGroupName;
}(AbstractFormGroupDirective));
var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FormArrayName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormArray} you want to link, and
 * will look for a {\@link FormArray} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form arrays can come in handy when you have a group of form controls but
 * you're not sure how many there will be. Form arrays allow you to create new
 * form controls dynamically.
 *
 * **Access the array**: You can access the associated {\@link FormArray} using the
 * {\@link AbstractControl#get get} method on the parent {\@link FormGroup}.
 * Ex: `this.form.get('cities')`.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormArray}, or you can set the value programmatically later using the
 * {\@link FormArray}'s {\@link AbstractControl#setValue setValue} or
 * {\@link AbstractControl#patchValue patchValue} methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the array, you can
 * subscribe to the {\@link FormArray}'s {\@link AbstractControl#valueChanges valueChanges} event.
 * You can also listen to its {\@link AbstractControl#statusChanges statusChanges} event to be
 * notified when the validation status is re-calculated.
 *
 * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by calling
 * its {\@link FormArray#push push} method.
 * Ex: `this.form.get('cities').push(new FormControl());`
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormArrayName = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FormArrayName, _super);
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._checkParentType(); /** @type {?} */
        ((this.formDirective)).addFormArray(this);
    };
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () { return /** @type {?} */ ((this.formDirective)).getFormArray(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent ? /** @type {?} */ (this._parent.formDirective) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        get: /**
         * @return {?}
         */
        function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormArrayName.prototype._checkParentType = /**
     * @return {?}
     */
    function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    FormArrayName.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
    ];
    /** @nocollapse */
    FormArrayName.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    ]; };
    FormArrayName.propDecorators = {
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['formArrayName',] },],
    };
    return FormArrayName;
}(ControlContainer));
/**
 * @param {?} parent
 * @return {?}
 */
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var controlNameBinding = {
    provide: NgControl,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FormControlName; })
};
/**
 * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
 * element by name.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the {\@link FormControl} instance you want to
 * link, and will look for a {\@link FormControl} registered with that name in the
 * closest {\@link FormGroup} or {\@link FormArray} above it.
 *
 * **Access the control**: You can access the {\@link FormControl} associated with
 * this directive by using the {\@link AbstractControl#get get} method.
 * Ex: `this.form.get('first');`
 *
 * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
 * See a full list of available properties in {\@link AbstractControl}.
 *
 *  **Set value**: You can set an initial value for the control when instantiating the
 *  {\@link FormControl}, or you can set it programmatically later using
 *  {\@link AbstractControl#setValue setValue} or {\@link AbstractControl#patchValue patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
 * {\@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormControlName = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FormControlName, _super);
    function FormControlName(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this._added = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlName.prototype, "isDisabled", {
        set: /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlName.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlName.prototype.viewToModelUpdate = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    Object.defineProperty(FormControlName.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () { return controlPath(this.name, /** @type {?} */ ((this._parent))); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "formDirective", {
        get: /**
         * @return {?}
         */
        function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "validator", {
        get: /**
         * @return {?}
         */
        function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return /** @type {?} */ ((composeAsyncValidators(this._rawAsyncValidators)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormControlName.prototype._checkParentType = /**
     * @return {?}
     */
    function () {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype._setUpControl = /**
     * @return {?}
     */
    function () {
        this._checkParentType();
        (/** @type {?} */ (this)).control = this.formDirective.addControl(this);
        if (this.control.disabled && /** @type {?} */ ((this.valueAccessor)).setDisabledState) {
            /** @type {?} */ ((/** @type {?} */ ((this.valueAccessor)).setDisabledState))(true);
        }
        this._added = true;
    };
    FormControlName.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
    ];
    /** @nocollapse */
    FormControlName.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
    ]; };
    FormControlName.propDecorators = {
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['formControlName',] },],
        "model": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngModel',] },],
        "update": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"], args: ['ngModelChange',] },],
        "isDisabled": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['disabled',] },],
    };
    return FormControlName;
}(NgControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An interface that can be implemented by classes that can act as validators.
 *
 * ## Usage
 *
 * ```typescript
 * \@Directive({
 *   selector: '[custom-validator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(c: Control): {[key: string]: any} {
 *     return {"custom": true};
 *   }
 * }
 * ```
 *
 * \@stable
 * @record
 */

/**
 * \@experimental
 * @record
 */

var REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return RequiredValidator; }),
    multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return CheckboxRequiredValidator; }),
    multi: true
};
/**
 * A Directive that adds the `required` validator to any controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * \@stable
 */
var RequiredValidator = /** @class */ (function () {
    function RequiredValidator() {
    }
    Object.defineProperty(RequiredValidator.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = value != null && value !== false && "" + value !== 'false';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    RequiredValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.required ? Validators.required(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RequiredValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    RequiredValidator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                    providers: [REQUIRED_VALIDATOR],
                    host: { '[attr.required]': 'required ? "" : null' }
                },] },
    ];
    /** @nocollapse */
    RequiredValidator.ctorParameters = function () { return []; };
    RequiredValidator.propDecorators = {
        "required": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return RequiredValidator;
}());
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * \@experimental
 */
var CheckboxRequiredValidator = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(CheckboxRequiredValidator, _super);
    function CheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    CheckboxRequiredValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.required ? Validators.requiredTrue(c) : null;
    };
    CheckboxRequiredValidator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                    providers: [CHECKBOX_REQUIRED_VALIDATOR],
                    host: { '[attr.required]': 'required ? "" : null' }
                },] },
    ];
    /** @nocollapse */
    CheckboxRequiredValidator.ctorParameters = function () { return []; };
    return CheckboxRequiredValidator;
}(RequiredValidator));
/**
 * Provider which adds {\@link EmailValidator} to {\@link NG_VALIDATORS}.
 */
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return EmailValidator; }),
    multi: true
};
/**
 * A Directive that adds the `email` validator to controls marked with the
 * `email` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * \@experimental
 */
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    Object.defineProperty(EmailValidator.prototype, "email", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EmailValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._enabled ? Validators.email(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EmailValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    EmailValidator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                    providers: [EMAIL_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    EmailValidator.ctorParameters = function () { return []; };
    EmailValidator.propDecorators = {
        "email": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return EmailValidator;
}());
/**
 * \@stable
 * @record
 */

/**
 * \@stable
 * @record
 */

/**
 * Provider which adds {\@link MinLengthValidator} to {\@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {\@example common/forms/ts/validators/validators.ts region='min'}
 */
var MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return MinLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
 *
 * \@stable
 */
var MinLengthValidator = /** @class */ (function () {
    function MinLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MinLengthValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MinLengthValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.minlength == null ? null : this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MinLengthValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MinLengthValidator.prototype._createValidator = /**
     * @return {?}
     */
    function () {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    };
    MinLengthValidator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                    providers: [MIN_LENGTH_VALIDATOR],
                    host: { '[attr.minlength]': 'minlength ? minlength : null' }
                },] },
    ];
    /** @nocollapse */
    MinLengthValidator.ctorParameters = function () { return []; };
    MinLengthValidator.propDecorators = {
        "minlength": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return MinLengthValidator;
}());
/**
 * Provider which adds {\@link MaxLengthValidator} to {\@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {\@example common/forms/ts/validators/validators.ts region='max'}
 */
var MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return MaxLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
 * `formControl`,
 * or control with `ngModel` that also has a `maxlength` attribute.
 *
 * \@stable
 */
var MaxLengthValidator = /** @class */ (function () {
    function MaxLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MaxLengthValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MaxLengthValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.maxlength != null ? this._validator(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaxLengthValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MaxLengthValidator.prototype._createValidator = /**
     * @return {?}
     */
    function () {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    };
    MaxLengthValidator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                    providers: [MAX_LENGTH_VALIDATOR],
                    host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
                },] },
    ];
    /** @nocollapse */
    MaxLengthValidator.ctorParameters = function () { return []; };
    MaxLengthValidator.propDecorators = {
        "maxlength": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return MaxLengthValidator;
}());
var PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return PatternValidator; }),
    multi: true
};
/**
 * A Directive that adds the `pattern` validator to any controls marked with the
 * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
 * as the regex to validate Control value against.  Follows pattern attribute
 * semantics; i.e. regex must match entire Control value.
 *
 * ### Example
 *
 * ```
 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
 * ```
 * \@stable
 */
var PatternValidator = /** @class */ (function () {
    function PatternValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    PatternValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    PatternValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) { return this._validator(c); };
    /**
     * @param {?} fn
     * @return {?}
     */
    PatternValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    PatternValidator.prototype._createValidator = /**
     * @return {?}
     */
    function () { this._validator = Validators.pattern(this.pattern); };
    PatternValidator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                    providers: [PATTERN_VALIDATOR],
                    host: { '[attr.pattern]': 'pattern ? pattern : null' }
                },] },
    ];
    /** @nocollapse */
    PatternValidator.ctorParameters = function () { return []; };
    PatternValidator.propDecorators = {
        "pattern": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return PatternValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
 *
 * It is essentially syntactic sugar that shortens the `new FormGroup()`,
 * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
 * forms.
 *
 * \@howToUse
 *
 * To use, inject `FormBuilder` into your component class. You can then call its methods
 * directly.
 *
 * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  * **NgModule**: {\@link ReactiveFormsModule}
 *
 * \@stable
 */
var FormBuilder = /** @class */ (function () {
    function FormBuilder() {
    }
    /**
     * Construct a new {@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {@link FormGroup} constructor for more details.
     */
    /**
     * Construct a new {\@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {\@link FormGroup} constructor for more details.
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    FormBuilder.prototype.group = /**
     * Construct a new {\@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {\@link FormGroup} constructor for more details.
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    function (controlsConfig, extra) {
        if (extra === void 0) { extra = null; }
        var /** @type {?} */ controls = this._reduceControls(controlsConfig);
        var /** @type {?} */ validator = extra != null ? extra['validator'] : null;
        var /** @type {?} */ asyncValidator = extra != null ? extra['asyncValidator'] : null;
        return new FormGroup(controls, validator, asyncValidator);
    };
    /**
     * Construct a new {@link FormControl} with the given `formState`,`validator`, and
     * `asyncValidator`.
     *
     * `formState` can either be a standalone value for the form control or an object
     * that contains both a value and a disabled status.
     *
     */
    /**
     * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
     * `asyncValidator`.
     *
     * `formState` can either be a standalone value for the form control or an object
     * that contains both a value and a disabled status.
     *
     * @param {?} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.control = /**
     * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
     * `asyncValidator`.
     *
     * `formState` can either be a standalone value for the form control or an object
     * that contains both a value and a disabled status.
     *
     * @param {?} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    function (formState, validator, asyncValidator) {
        return new FormControl(formState, validator, asyncValidator);
    };
    /**
     * Construct a {@link FormArray} from the given `controlsConfig` array of
     * configuration, with the given optional `validator` and `asyncValidator`.
     */
    /**
     * Construct a {\@link FormArray} from the given `controlsConfig` array of
     * configuration, with the given optional `validator` and `asyncValidator`.
     * @param {?} controlsConfig
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.array = /**
     * Construct a {\@link FormArray} from the given `controlsConfig` array of
     * configuration, with the given optional `validator` and `asyncValidator`.
     * @param {?} controlsConfig
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    function (controlsConfig, validator, asyncValidator) {
        var _this = this;
        var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validator, asyncValidator);
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    FormBuilder.prototype._reduceControls = /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    function (controlsConfig) {
        var _this = this;
        var /** @type {?} */ controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    FormBuilder.prototype._createControl = /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var /** @type {?} */ value = controlConfig[0];
            var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    FormBuilder.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    FormBuilder.ctorParameters = function () { return []; };
    return FormBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Version"]('5.2.11');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * \@experimental
 */
var NgNoValidate = /** @class */ (function () {
    function NgNoValidate() {
    }
    NgNoValidate.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                    host: { 'novalidate': '' },
                },] },
    ];
    /** @nocollapse */
    NgNoValidate.ctorParameters = function () { return []; };
    return NgNoValidate;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
var InternalFormsSharedModule = /** @class */ (function () {
    function InternalFormsSharedModule() {
    }
    InternalFormsSharedModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    declarations: SHARED_FORM_DIRECTIVES,
                    exports: SHARED_FORM_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    InternalFormsSharedModule.ctorParameters = function () { return []; };
    return InternalFormsSharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The ng module for forms.
 * \@stable
 */
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                    providers: [RadioControlRegistry],
                    exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                },] },
    ];
    /** @nocollapse */
    FormsModule.ctorParameters = function () { return []; };
    return FormsModule;
}());
/**
 * The ng module for reactive forms.
 * \@stable
 */
var ReactiveFormsModule = /** @class */ (function () {
    function ReactiveFormsModule() {
    }
    ReactiveFormsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                    providers: [FormBuilder, RadioControlRegistry],
                    exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
                },] },
    ];
    /** @nocollapse */
    ReactiveFormsModule.ctorParameters = function () { return []; };
    return ReactiveFormsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=forms.js.map


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendSmsMessageEditorComponent", function() { return SendSmsMessageEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sitecore_ma_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sitecore_ma_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__sitecore_ma_core__);
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


var SendSmsMessageEditorComponent = (function (_super) {
    __extends(SendSmsMessageEditorComponent, _super);
    function SendSmsMessageEditorComponent(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    SendSmsMessageEditorComponent.prototype.ngOnInit = function () {
        this.message = this.model ? this.model.message || "" : "";
    };
    SendSmsMessageEditorComponent.prototype.serialize = function () {
        return {
            message: this.message,
        };
    };
    SendSmsMessageEditorComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'send-sms-message-editor',
                    template: "\n        <section class=\"content\">\n            <div class=\"form-group\">\n                <div class=\"row send-sms-message-editor\">\n                    <label class=\"col-12 title\">Message to send</label>\n                    <div class=\"col-12\">\n                        <textarea rows=\"6\" type=\"text\" class=\"form-control\" [(ngModel)]=\"message\"></textarea>\n                   </div>\n                </div>\n            </div>\n\n        </section>\n    ",
                    styles: ['']
                },] },
    ];
    SendSmsMessageEditorComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    ]; };
    return SendSmsMessageEditorComponent;
}(__WEBPACK_IMPORTED_MODULE_1__sitecore_ma_core__["EditorBase"]));

//# sourceMappingURL=send-sms-message-editor.component.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(1);
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(1);
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;
//# sourceMappingURL=observable.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ma_core_1 = __webpack_require__(4);
var send_sms_message_activity_1 = __webpack_require__(17);
var send_sms_message_module_ngfactory_1 = __webpack_require__(18);
var send_sms_message_editor_component_1 = __webpack_require__(8);
var SendSmsMessagePlugin = (function () {
    function SendSmsMessagePlugin() {
    }
    SendSmsMessagePlugin = __decorate([
        ma_core_1.Plugin({
            activityDefinitions: [
                {
                    id: '7668d457-31f4-4190-8497-d9408005faa5',
                    activity: send_sms_message_activity_1.SendSmsMessageActivity,
                    editorComponenet: send_sms_message_editor_component_1.SendSmsMessageEditorComponent,
                    editorModuleFactory: send_sms_message_module_ngfactory_1.SendSmsMessageModuleNgFactory
                }
            ]
        })
    ], SendSmsMessagePlugin);
    return SendSmsMessagePlugin;
}());
exports.default = SendSmsMessagePlugin;


/***/ }),
/* 17 */
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
var ma_core_1 = __webpack_require__(4);
var SendSmsMessageActivity = (function (_super) {
    __extends(SendSmsMessageActivity, _super);
    function SendSmsMessageActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendSmsMessageActivity.prototype.getVisual = function () {
        var title = 'Send SMS message';
        var subTitle = 'Send an SMS message';
        var cssClass = this.isDefined ? '' : 'undefined';
        return "\n            <div class=\"viewport-send-sms-editor marketing-action " + cssClass + "\">\n                <span class=\"icon\">\n                    <img src=\"/~/icon/OfficeWhite/32x32/graph_from.png\" />\n              </span>\n                <p class=\"text with-subtitle\" title=\"" + title + "\">\n                    " + title + "\n                    <small class=\"subtitle\" title=\"" + subTitle + "\">" + subTitle + "</small>\n                </p>\n            </div>\n        ";
    };
    Object.defineProperty(SendSmsMessageActivity.prototype, "isDefined", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return SendSmsMessageActivity;
}(ma_core_1.SingleItem));
exports.SendSmsMessageActivity = SendSmsMessageActivity;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendSmsMessageModuleNgFactory", function() { return SendSmsMessageModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__send_sms_message_module__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_send_sms_message_editor_component_ngfactory__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(7);





var SendSmsMessageModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__send_sms_message_module__["a" /* SendSmsMessageModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_2__editor_send_sms_message_editor_component_ngfactory__["a" /* SendSmsMessageEditorComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ɵi */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ɵba */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__send_sms_message_module__["a" /* SendSmsMessageModule */], __WEBPACK_IMPORTED_MODULE_1__send_sms_message_module__["a" /* SendSmsMessageModule */], [])]); });

//# sourceMappingURL=send-sms-message-module.ngfactory.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendSmsMessageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_send_sms_message_editor_component__ = __webpack_require__(8);




var SendSmsMessageModule = (function () {
    function SendSmsMessageModule() {
    }
    SendSmsMessageModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */]
                    ],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__editor_send_sms_message_editor_component__["SendSmsMessageEditorComponent"]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__editor_send_sms_message_editor_component__["SendSmsMessageEditorComponent"]]
                },] },
    ];
    return SendSmsMessageModule;
}());

//# sourceMappingURL=send-sms-message-module.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ForkJoinObservable_1 = __webpack_require__(21);
exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
//# sourceMappingURL=forkJoin.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(2);
var EmptyObservable_1 = __webpack_require__(29);
var isArray_1 = __webpack_require__(10);
var subscribeToResult_1 = __webpack_require__(30);
var OuterSubscriber_1 = __webpack_require__(35);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ForkJoinObservable = (function (_super) {
    __extends(ForkJoinObservable, _super);
    function ForkJoinObservable(sources, resultSelector) {
        _super.call(this);
        this.sources = sources;
        this.resultSelector = resultSelector;
    }
    /* tslint:enable:max-line-length */
    /**
     * Joins last values emitted by passed Observables.
     *
     * <span class="informal">Wait for Observables to complete and then combine last values they emitted.</span>
     *
     * <img src="./img/forkJoin.png" width="100%">
     *
     * `forkJoin` is an operator that takes any number of Observables which can be passed either as an array
     * or directly as arguments. If no input Observables are provided, resulting stream will complete
     * immediately.
     *
     * `forkJoin` will wait for all passed Observables to complete and then it will emit an array with last
     * values from corresponding Observables. So if you pass `n` Observables to the operator, resulting
     * array will have `n` values, where first value is the last thing emitted by the first Observable,
     * second value is the last thing emitted by the second Observable and so on. That means `forkJoin` will
     * not emit more than once and it will complete after that. If you need to emit combined values not only
     * at the end of lifecycle of passed Observables, but also throughout it, try out {@link combineLatest}
     * or {@link zip} instead.
     *
     * In order for resulting array to have the same length as the number of input Observables, whenever any of
     * that Observables completes without emitting any value, `forkJoin` will complete at that moment as well
     * and it will not emit anything either, even if it already has some last values from other Observables.
     * Conversely, if there is an Observable that never completes, `forkJoin` will never complete as well,
     * unless at any point some other Observable completes without emitting value, which brings us back to
     * the previous case. Overall, in order for `forkJoin` to emit a value, all Observables passed as arguments
     * have to emit something at least once and complete.
     *
     * If any input Observable errors at some point, `forkJoin` will error as well and all other Observables
     * will be immediately unsubscribed.
     *
     * Optionally `forkJoin` accepts project function, that will be called with values which normally
     * would land in emitted array. Whatever is returned by project function, will appear in output
     * Observable instead. This means that default project can be thought of as a function that takes
     * all its arguments and puts them into an array. Note that project function will be called only
     * when output Observable is supposed to emit a result.
     *
     * @example <caption>Use forkJoin with operator emitting immediately</caption>
     * const observable = Rx.Observable.forkJoin(
     *   Rx.Observable.of(1, 2, 3, 4),
     *   Rx.Observable.of(5, 6, 7, 8)
     * );
     * observable.subscribe(
     *   value => console.log(value),
     *   err => {},
     *   () => console.log('This is how it ends!')
     * );
     *
     * // Logs:
     * // [4, 8]
     * // "This is how it ends!"
     *
     *
     * @example <caption>Use forkJoin with operator emitting after some time</caption>
     * const observable = Rx.Observable.forkJoin(
     *   Rx.Observable.interval(1000).take(3), // emit 0, 1, 2 every second and complete
     *   Rx.Observable.interval(500).take(4) // emit 0, 1, 2, 3 every half a second and complete
     * );
     * observable.subscribe(
     *   value => console.log(value),
     *   err => {},
     *   () => console.log('This is how it ends!')
     * );
     *
     * // Logs:
     * // [2, 3] after 3 seconds
     * // "This is how it ends!" immediately after
     *
     *
     * @example <caption>Use forkJoin with project function</caption>
     * const observable = Rx.Observable.forkJoin(
     *   Rx.Observable.interval(1000).take(3), // emit 0, 1, 2 every second and complete
     *   Rx.Observable.interval(500).take(4), // emit 0, 1, 2, 3 every half a second and complete
     *   (n, m) => n + m
     * );
     * observable.subscribe(
     *   value => console.log(value),
     *   err => {},
     *   () => console.log('This is how it ends!')
     * );
     *
     * // Logs:
     * // 5 after 3 seconds
     * // "This is how it ends!" immediately after
     *
     * @see {@link combineLatest}
     * @see {@link zip}
     *
     * @param {...SubscribableOrPromise} sources Any number of Observables provided either as an array or as an arguments
     * passed directly to the operator.
     * @param {function} [project] Function that takes values emitted by input Observables and returns value
     * that will appear in resulting Observable instead of default array.
     * @return {Observable} Observable emitting either an array of last values emitted by passed Observables
     * or value from project function.
     * @static true
     * @name forkJoin
     * @owner Observable
     */
    ForkJoinObservable.create = function () {
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i - 0] = arguments[_i];
        }
        if (sources === null || arguments.length === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        var resultSelector = null;
        if (typeof sources[sources.length - 1] === 'function') {
            resultSelector = sources.pop();
        }
        // if the first and only other argument besides the resultSelector is an array
        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
            sources = sources[0];
        }
        if (sources.length === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        return new ForkJoinObservable(sources, resultSelector);
    };
    /** @deprecated internal use only */ ForkJoinObservable.prototype._subscribe = function (subscriber) {
        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
    };
    return ForkJoinObservable;
}(Observable_1.Observable));
exports.ForkJoinObservable = ForkJoinObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ForkJoinSubscriber = (function (_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources, resultSelector) {
        _super.call(this, destination);
        this.sources = sources;
        this.resultSelector = resultSelector;
        this.completed = 0;
        this.haveValues = 0;
        var len = sources.length;
        this.total = len;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
            if (innerSubscription) {
                innerSubscription.outerIndex = i;
                this.add(innerSubscription);
            }
        }
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var destination = this.destination;
        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            var value = resultSelector ? resultSelector.apply(this, values) : values;
            destination.next(value);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=ForkJoinObservable.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__(3);
var rxSubscriber_1 = __webpack_require__(14);
var Observer_1 = __webpack_require__(13);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(10);
var isObject_1 = __webpack_require__(11);
var isFunction_1 = __webpack_require__(9);
var tryCatch_1 = __webpack_require__(25);
var errorObject_1 = __webpack_require__(12);
var UnsubscriptionError_1 = __webpack_require__(26);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__(12);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var noop_1 = __webpack_require__(28);
/* tslint:enable:max-line-length */
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i - 0] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
/* @internal */
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-empty */
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(2);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var EmptyObservable = (function (_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
        _super.call(this);
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits a complete notification.
     *
     * <span class="informal">Just emits 'complete', and nothing else.
     * </span>
     *
     * <img src="./img/empty.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the complete notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then complete.</caption>
     * var result = Rx.Observable.empty().startWith(7);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
     * );
     * result.subscribe(x => console.log(x));
     *
     * // Results in the following to the console:
     * // x is equal to the count on the interval eg(0,1,2,3,...)
     * // x will occur every 1000ms
     * // if x % 2 is equal to 1 print abc
     * // if x % 2 is not equal to 1 nothing will be output
     *
     * @see {@link create}
     * @see {@link never}
     * @see {@link of}
     * @see {@link throw}
     *
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the complete notification.
     * @return {Observable} An "empty" Observable: emits only the complete
     * notification.
     * @static true
     * @name empty
     * @owner Observable
     */
    EmptyObservable.create = function (scheduler) {
        return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function (arg) {
        var subscriber = arg.subscriber;
        subscriber.complete();
    };
    /** @deprecated internal use only */ EmptyObservable.prototype._subscribe = function (subscriber) {
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
        }
        else {
            subscriber.complete();
        }
    };
    return EmptyObservable;
}(Observable_1.Observable));
exports.EmptyObservable = EmptyObservable;
//# sourceMappingURL=EmptyObservable.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(1);
var isArrayLike_1 = __webpack_require__(31);
var isPromise_1 = __webpack_require__(32);
var isObject_1 = __webpack_require__(11);
var Observable_1 = __webpack_require__(2);
var iterator_1 = __webpack_require__(33);
var InnerSubscriber_1 = __webpack_require__(34);
var observable_1 = __webpack_require__(15);
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.closed) {
        return null;
    }
    if (result instanceof Observable_1.Observable) {
        if (result._isScalar) {
            destination.next(result.value);
            destination.complete();
            return null;
        }
        else {
            destination.syncErrorThrowable = true;
            return result.subscribe(destination);
        }
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
            destination.next(result[i]);
        }
        if (!destination.closed) {
            destination.complete();
        }
    }
    else if (isPromise_1.isPromise(result)) {
        result.then(function (value) {
            if (!destination.closed) {
                destination.next(value);
                destination.complete();
            }
        }, function (err) { return destination.error(err); })
            .then(null, function (err) {
            // Escaping the Promise trap: globally throw unhandled errors
            root_1.root.setTimeout(function () { throw err; });
        });
        return destination;
    }
    else if (result && typeof result[iterator_1.iterator] === 'function') {
        var iterator = result[iterator_1.iterator]();
        do {
            var item = iterator.next();
            if (item.done) {
                destination.complete();
                break;
            }
            destination.next(item.value);
            if (destination.closed) {
                break;
            }
        } while (true);
    }
    else if (result && typeof result[observable_1.observable] === 'function') {
        var obs = result[observable_1.observable]();
        if (typeof obs.subscribe !== 'function') {
            destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
        }
        else {
            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
        }
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = ("You provided " + value + " where a stream was expected.")
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        destination.error(new TypeError(msg));
    }
    return null;
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(1);
function symbolIteratorPonyfill(root) {
    var Symbol = root.Symbol;
    if (typeof Symbol === 'function') {
        if (!Symbol.iterator) {
            Symbol.iterator = Symbol('iterator polyfill');
        }
        return Symbol.iterator;
    }
    else {
        // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
        var Set_1 = root.Set;
        if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
            return '@@iterator';
        }
        var Map_1 = root.Map;
        // required for compatability with es6-shim
        if (Map_1) {
            var keys = Object.getOwnPropertyNames(Map_1.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
                if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
                    return key;
                }
            }
        }
        return '@@iterator';
    }
}
exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
exports.iterator = symbolIteratorPonyfill(root_1.root);
/**
 * @deprecated use iterator instead
 */
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        _super.call(this);
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PromiseObservable_1 = __webpack_require__(37);
exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
//# sourceMappingURL=fromPromise.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(2);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PromiseObservable = (function (_super) {
    __extends(PromiseObservable, _super);
    function PromiseObservable(promise, scheduler) {
        _super.call(this);
        this.promise = promise;
        this.scheduler = scheduler;
    }
    /**
     * Converts a Promise to an Observable.
     *
     * <span class="informal">Returns an Observable that just emits the Promise's
     * resolved value, then completes.</span>
     *
     * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
     * Observable. If the Promise resolves with a value, the output Observable
     * emits that resolved value as a `next`, and then completes. If the Promise
     * is rejected, then the output Observable emits the corresponding Error.
     *
     * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
     * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link bindCallback}
     * @see {@link from}
     *
     * @param {PromiseLike<T>} promise The promise to be converted.
     * @param {Scheduler} [scheduler] An optional IScheduler to use for scheduling
     * the delivery of the resolved value (or the rejection).
     * @return {Observable<T>} An Observable which wraps the Promise.
     * @static true
     * @name fromPromise
     * @owner Observable
     */
    PromiseObservable.create = function (promise, scheduler) {
        return new PromiseObservable(promise, scheduler);
    };
    /** @deprecated internal use only */ PromiseObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var promise = this.promise;
        var scheduler = this.scheduler;
        if (scheduler == null) {
            if (this._isScalar) {
                if (!subscriber.closed) {
                    subscriber.next(this.value);
                    subscriber.complete();
                }
            }
            else {
                promise.then(function (value) {
                    _this.value = value;
                    _this._isScalar = true;
                    if (!subscriber.closed) {
                        subscriber.next(value);
                        subscriber.complete();
                    }
                }, function (err) {
                    if (!subscriber.closed) {
                        subscriber.error(err);
                    }
                })
                    .then(null, function (err) {
                    // escape the promise trap, throw unhandled errors
                    root_1.root.setTimeout(function () { throw err; });
                });
            }
        }
        else {
            if (this._isScalar) {
                if (!subscriber.closed) {
                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
                }
            }
            else {
                promise.then(function (value) {
                    _this.value = value;
                    _this._isScalar = true;
                    if (!subscriber.closed) {
                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                    }
                }, function (err) {
                    if (!subscriber.closed) {
                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                    }
                })
                    .then(null, function (err) {
                    // escape the promise trap, throw unhandled errors
                    root_1.root.setTimeout(function () { throw err; });
                });
            }
        }
    };
    return PromiseObservable;
}(Observable_1.Observable));
exports.PromiseObservable = PromiseObservable;
function dispatchNext(arg) {
    var value = arg.value, subscriber = arg.subscriber;
    if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
    }
}
function dispatchError(arg) {
    var err = arg.err, subscriber = arg.subscriber;
    if (!subscriber.closed) {
        subscriber.error(err);
    }
}
//# sourceMappingURL=PromiseObservable.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var map_1 = __webpack_require__(39);
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    return map_1.map(project, thisArg)(this);
}
exports.map = map;
//# sourceMappingURL=map.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        _super.call(this, destination);
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    // NOTE: This looks unoptimized, but it's actually purposefully NOT
    // using try/catch optimizations.
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrowserModule */
/* unused harmony export platformBrowser */
/* unused harmony export Meta */
/* unused harmony export Title */
/* unused harmony export disableDebugTools */
/* unused harmony export enableDebugTools */
/* unused harmony export BrowserTransferStateModule */
/* unused harmony export TransferState */
/* unused harmony export makeStateKey */
/* unused harmony export By */
/* unused harmony export DOCUMENT */
/* unused harmony export EVENT_MANAGER_PLUGINS */
/* unused harmony export EventManager */
/* unused harmony export HAMMER_GESTURE_CONFIG */
/* unused harmony export HammerGestureConfig */
/* unused harmony export DomSanitizer */
/* unused harmony export VERSION */
/* unused harmony export ɵBROWSER_SANITIZATION_PROVIDERS */
/* unused harmony export ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS */
/* unused harmony export ɵinitDomAdapter */
/* unused harmony export ɵBrowserDomAdapter */
/* unused harmony export ɵBrowserPlatformLocation */
/* unused harmony export ɵTRANSITION_ID */
/* unused harmony export ɵBrowserGetTestability */
/* unused harmony export ɵescapeHtml */
/* unused harmony export ɵELEMENT_PROBE_PROVIDERS */
/* unused harmony export ɵDomAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDOM; });
/* unused harmony export ɵsetRootDomAdapter */
/* unused harmony export ɵDomRendererFactory2 */
/* unused harmony export ɵNAMESPACE_URIS */
/* unused harmony export ɵflattenStyles */
/* unused harmony export ɵshimContentAttribute */
/* unused harmony export ɵshimHostAttribute */
/* unused harmony export ɵDomEventsPlugin */
/* unused harmony export ɵHammerGesturesPlugin */
/* unused harmony export ɵKeyEventsPlugin */
/* unused harmony export ɵDomSharedStylesHost */
/* unused harmony export ɵSharedStylesHost */
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* unused harmony export ɵi */
/* unused harmony export ɵg */
/* unused harmony export ɵf */
/* unused harmony export ɵc */
/* unused harmony export ɵh */
/* unused harmony export ɵd */
/* unused harmony export ɵe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tslib__ = __webpack_require__(6);
/**
 * @license Angular v5.2.11
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _DOM = /** @type {?} */ ((null));
/**
 * @return {?}
 */
function getDOM() {
    return _DOM;
}
/**
 * @param {?} adapter
 * @return {?}
 */

/**
 * @param {?} adapter
 * @return {?}
 */
function setRootDomAdapter(adapter) {
    if (!_DOM) {
        _DOM = adapter;
    }
}
/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 * @abstract
 */
var DomAdapter = /** @class */ (function () {
    function DomAdapter() {
        this.resourceLoaderType = /** @type {?} */ ((null));
    }
    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
        /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         */
        get: /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         * @return {?}
         */
        function () { return this._attrToPropMap; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._attrToPropMap = value; },
        enumerable: true,
        configurable: true
    });
    return DomAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides DOM operations in any browser environment.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 * @abstract
 */
var GenericBrowserDomAdapter = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(GenericBrowserDomAdapter, _super);
    function GenericBrowserDomAdapter() {
        var _this = _super.call(this) || this;
        _this._animationPrefix = null;
        _this._transitionEnd = null;
        try {
            var /** @type {?} */ element_1 = _this.createElement('div', document);
            if (_this.getStyle(element_1, 'animationName') != null) {
                _this._animationPrefix = '';
            }
            else {
                var /** @type {?} */ domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                for (var /** @type {?} */ i = 0; i < domPrefixes.length; i++) {
                    if (_this.getStyle(element_1, domPrefixes[i] + 'AnimationName') != null) {
                        _this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
                        break;
                    }
                }
            }
            var /** @type {?} */ transEndEventNames_1 = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            };
            Object.keys(transEndEventNames_1).forEach(function (key) {
                if (_this.getStyle(element_1, key) != null) {
                    _this._transitionEnd = transEndEventNames_1[key];
                }
            });
        }
        catch (/** @type {?} */ e) {
            _this._animationPrefix = null;
            _this._transitionEnd = null;
        }
        return _this;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.getDistributedNodes = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).getDistributedNodes(); };
    /**
     * @param {?} el
     * @param {?} baseUrl
     * @param {?} href
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.resolveAndSetHref = /**
     * @param {?} el
     * @param {?} baseUrl
     * @param {?} href
     * @return {?}
     */
    function (el, baseUrl, href) {
        el.href = href == null ? baseUrl : baseUrl + '/../' + href;
    };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.supportsDOMEvents = /**
     * @return {?}
     */
    function () { return true; };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = /**
     * @return {?}
     */
    function () {
        return typeof (/** @type {?} */ (document.body)).createShadowRoot === 'function';
    };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.getAnimationPrefix = /**
     * @return {?}
     */
    function () { return this._animationPrefix ? this._animationPrefix : ''; };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.getTransitionEnd = /**
     * @return {?}
     */
    function () { return this._transitionEnd ? this._transitionEnd : ''; };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.supportsAnimation = /**
     * @return {?}
     */
    function () {
        return this._animationPrefix != null && this._transitionEnd != null;
    };
    return GenericBrowserDomAdapter;
}(DomAdapter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _attrToPropMap = {
    'class': 'className',
    'innerHtml': 'innerHTML',
    'readonly': 'readOnly',
    'tabindex': 'tabIndex',
};
var DOM_KEY_LOCATION_NUMPAD = 3;
// Map to convert some key or keyIdentifier values to what will be returned by getEventKey
var _keyMap = {
    // The following values are here for cross-browser compatibility and to match the W3C standard
    // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
    '\b': 'Backspace',
    '\t': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    'Del': 'Delete',
    'Esc': 'Escape',
    'Left': 'ArrowLeft',
    'Right': 'ArrowRight',
    'Up': 'ArrowUp',
    'Down': 'ArrowDown',
    'Menu': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'Win': 'OS'
};
// There is a bug in Chrome for numeric keypad keys:
// https://code.google.com/p/chromium/issues/detail?id=155654
// 1, 2, 3 ... are reported as A, B, C ...
var _chromeNumKeyPadMap = {
    'A': '1',
    'B': '2',
    'C': '3',
    'D': '4',
    'E': '5',
    'F': '6',
    'G': '7',
    'H': '8',
    'I': '9',
    'J': '*',
    'K': '+',
    'M': '-',
    'N': '.',
    'O': '/',
    '\x60': '0',
    '\x90': 'NumLock'
};
var nodeContains;
if (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['Node']) {
    nodeContains = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['Node'].prototype.contains || function (node) {
        return !!(this.compareDocumentPosition(node) & 16);
    };
}
/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
var BrowserDomAdapter = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(BrowserDomAdapter, _super);
    function BrowserDomAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} templateHtml
     * @return {?}
     */
    BrowserDomAdapter.prototype.parse = /**
     * @param {?} templateHtml
     * @return {?}
     */
    function (templateHtml) { throw new Error('parse not implemented'); };
    /**
     * @return {?}
     */
    BrowserDomAdapter.makeCurrent = /**
     * @return {?}
     */
    function () { setRootDomAdapter(new BrowserDomAdapter()); };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasProperty = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) { return name in element; };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setProperty = /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (el, name, value) { (/** @type {?} */ (el))[name] = value; };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getProperty = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) { return (/** @type {?} */ (el))[name]; };
    /**
     * @param {?} el
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    BrowserDomAdapter.prototype.invoke = /**
     * @param {?} el
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    function (el, methodName, args) {
        (_a = (/** @type {?} */ (el)))[methodName].apply(_a, args);
        var _a;
    };
    // TODO(tbosch): move this into a separate environment class once we have it
    /**
     * @param {?} error
     * @return {?}
     */
    BrowserDomAdapter.prototype.logError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (window.console) {
            if (console.error) {
                console.error(error);
            }
            else {
                console.log(error);
            }
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    BrowserDomAdapter.prototype.log = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (window.console) {
            window.console.log && window.console.log(error);
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    BrowserDomAdapter.prototype.logGroup = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (window.console) {
            window.console.group && window.console.group(error);
        }
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.logGroupEnd = /**
     * @return {?}
     */
    function () {
        if (window.console) {
            window.console.groupEnd && window.console.groupEnd();
        }
    };
    Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
        get: /**
         * @return {?}
         */
        function () { return _attrToPropMap; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} nodeA
     * @param {?} nodeB
     * @return {?}
     */
    BrowserDomAdapter.prototype.contains = /**
     * @param {?} nodeA
     * @param {?} nodeB
     * @return {?}
     */
    function (nodeA, nodeB) { return nodeContains.call(nodeA, nodeB); };
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    BrowserDomAdapter.prototype.querySelector = /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) { return el.querySelector(selector); };
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    BrowserDomAdapter.prototype.querySelectorAll = /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) { return el.querySelectorAll(selector); };
    /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    BrowserDomAdapter.prototype.on = /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    function (el, evt, listener) { el.addEventListener(evt, listener, false); };
    /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    BrowserDomAdapter.prototype.onAndCancel = /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    function (el, evt, listener) {
        el.addEventListener(evt, listener, false);
        // Needed to follow Dart's subscription semantic, until fix of
        // https://code.google.com/p/dart/issues/detail?id=17406
        return function () { el.removeEventListener(evt, listener, false); };
    };
    /**
     * @param {?} el
     * @param {?} evt
     * @return {?}
     */
    BrowserDomAdapter.prototype.dispatchEvent = /**
     * @param {?} el
     * @param {?} evt
     * @return {?}
     */
    function (el, evt) { el.dispatchEvent(evt); };
    /**
     * @param {?} eventType
     * @return {?}
     */
    BrowserDomAdapter.prototype.createMouseEvent = /**
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        var /** @type {?} */ evt = this.getDefaultDocument().createEvent('MouseEvent');
        evt.initEvent(eventType, true, true);
        return evt;
    };
    /**
     * @param {?} eventType
     * @return {?}
     */
    BrowserDomAdapter.prototype.createEvent = /**
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        var /** @type {?} */ evt = this.getDefaultDocument().createEvent('Event');
        evt.initEvent(eventType, true, true);
        return evt;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    BrowserDomAdapter.prototype.preventDefault = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.returnValue = false;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    BrowserDomAdapter.prototype.isPrevented = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        return evt.defaultPrevented || evt.returnValue != null && !evt.returnValue;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getInnerHTML = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.innerHTML; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getTemplateContent = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return 'content' in el && this.isTemplateElement(el) ? (/** @type {?} */ (el)).content : null;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getOuterHTML = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.outerHTML; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.nodeName = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeName; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.nodeValue = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeValue; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.type = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.type; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.content = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.hasProperty(node, 'content')) {
            return (/** @type {?} */ (node)).content;
        }
        else {
            return node;
        }
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.firstChild = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.firstChild; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.nextSibling = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.nextSibling; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.parentElement = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.parentNode; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.childNodes = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.childNodes; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.childNodesAsList = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var /** @type {?} */ childNodes = el.childNodes;
        var /** @type {?} */ res = new Array(childNodes.length);
        for (var /** @type {?} */ i = 0; i < childNodes.length; i++) {
            res[i] = childNodes[i];
        }
        return res;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.clearNodes = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    };
    /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.appendChild = /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    function (el, node) { el.appendChild(node); };
    /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeChild = /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    function (el, node) { el.removeChild(node); };
    /**
     * @param {?} el
     * @param {?} newChild
     * @param {?} oldChild
     * @return {?}
     */
    BrowserDomAdapter.prototype.replaceChild = /**
     * @param {?} el
     * @param {?} newChild
     * @param {?} oldChild
     * @return {?}
     */
    function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.remove = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        return node;
    };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.insertBefore = /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    function (parent, ref, node) { parent.insertBefore(node, ref); };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} nodes
     * @return {?}
     */
    BrowserDomAdapter.prototype.insertAllBefore = /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} nodes
     * @return {?}
     */
    function (parent, ref, nodes) {
        nodes.forEach(function (n) { return parent.insertBefore(n, ref); });
    };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.insertAfter = /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    function (parent, ref, node) { parent.insertBefore(node, ref.nextSibling); };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setInnerHTML = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.innerHTML = value; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getText = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.textContent; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setText = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.textContent = value; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getValue = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.value; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setValue = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.value = value; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getChecked = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.checked; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setChecked = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.checked = value; };
    /**
     * @param {?} text
     * @return {?}
     */
    BrowserDomAdapter.prototype.createComment = /**
     * @param {?} text
     * @return {?}
     */
    function (text) { return this.getDefaultDocument().createComment(text); };
    /**
     * @param {?} html
     * @return {?}
     */
    BrowserDomAdapter.prototype.createTemplate = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        var /** @type {?} */ t = this.getDefaultDocument().createElement('template');
        t.innerHTML = html;
        return t;
    };
    /**
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createElement = /**
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    function (tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElement(tagName);
    };
    /**
     * @param {?} ns
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createElementNS = /**
     * @param {?} ns
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    function (ns, tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElementNS(ns, tagName);
    };
    /**
     * @param {?} text
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createTextNode = /**
     * @param {?} text
     * @param {?=} doc
     * @return {?}
     */
    function (text, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createTextNode(text);
    };
    /**
     * @param {?} attrName
     * @param {?} attrValue
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createScriptTag = /**
     * @param {?} attrName
     * @param {?} attrValue
     * @param {?=} doc
     * @return {?}
     */
    function (attrName, attrValue, doc) {
        doc = doc || this.getDefaultDocument();
        var /** @type {?} */ el = /** @type {?} */ (doc.createElement('SCRIPT'));
        el.setAttribute(attrName, attrValue);
        return el;
    };
    /**
     * @param {?} css
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createStyleElement = /**
     * @param {?} css
     * @param {?=} doc
     * @return {?}
     */
    function (css, doc) {
        doc = doc || this.getDefaultDocument();
        var /** @type {?} */ style = /** @type {?} */ (doc.createElement('style'));
        this.appendChild(style, this.createTextNode(css, doc));
        return style;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.createShadowRoot = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).createShadowRoot(); };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getShadowRoot = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).shadowRoot; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getHost = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).host; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.clone = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.cloneNode(true); };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getElementsByClassName = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        return element.getElementsByClassName(name);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getElementsByTagName = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        return element.getElementsByTagName(name);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.classList = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { return Array.prototype.slice.call(element.classList, 0); };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    BrowserDomAdapter.prototype.addClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) { element.classList.add(className); };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) { element.classList.remove(className); };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) {
        return element.classList.contains(className);
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?} styleValue
     * @return {?}
     */
    BrowserDomAdapter.prototype.setStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @param {?} styleValue
     * @return {?}
     */
    function (element, styleName, styleValue) {
        element.style[styleName] = styleValue;
    };
    /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeStyle = /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    function (element, stylename) {
        // IE requires '' instead of null
        // see https://github.com/angular/angular/issues/7916
        element.style[stylename] = '';
    };
    /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    BrowserDomAdapter.prototype.getStyle = /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    function (element, stylename) { return element.style[stylename]; };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    function (element, styleName, styleValue) {
        var /** @type {?} */ value = this.getStyle(element, styleName) || '';
        return styleValue ? value == styleValue : value.length > 0;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.tagName = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { return element.tagName; };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.attributeMap = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ res = new Map();
        var /** @type {?} */ elAttrs = element.attributes;
        for (var /** @type {?} */ i = 0; i < elAttrs.length; i++) {
            var /** @type {?} */ attrib = elAttrs.item(i);
            res.set(attrib.name, attrib.value);
        }
        return res;
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.hasAttribute(attribute);
    };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} attribute
     * @return {?}
     */
    function (element, ns, attribute) {
        return element.hasAttributeNS(ns, attribute);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.getAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.getAttribute(attribute);
    };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    function (element, ns, name) {
        return element.getAttributeNS(ns, name);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setAttribute = /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (element, name, value) { element.setAttribute(name, value); };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (element, ns, name, value) {
        element.setAttributeNS(ns, name, value);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) { element.removeAttribute(attribute); };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    function (element, ns, name) {
        element.removeAttributeNS(ns, name);
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.templateAwareRoot = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.createHtmlDocument = /**
     * @return {?}
     */
    function () {
        return document.implementation.createHTMLDocument('fakeTitle');
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getDefaultDocument = /**
     * @return {?}
     */
    function () { return document; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getBoundingClientRect = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        try {
            return el.getBoundingClientRect();
        }
        catch (/** @type {?} */ e) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
    };
    /**
     * @param {?} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.getTitle = /**
     * @param {?} doc
     * @return {?}
     */
    function (doc) { return doc.title; };
    /**
     * @param {?} doc
     * @param {?} newTitle
     * @return {?}
     */
    BrowserDomAdapter.prototype.setTitle = /**
     * @param {?} doc
     * @param {?} newTitle
     * @return {?}
     */
    function (doc, newTitle) { doc.title = newTitle || ''; };
    /**
     * @param {?} n
     * @param {?} selector
     * @return {?}
     */
    BrowserDomAdapter.prototype.elementMatches = /**
     * @param {?} n
     * @param {?} selector
     * @return {?}
     */
    function (n, selector) {
        if (this.isElementNode(n)) {
            return n.matches && n.matches(selector) ||
                n.msMatchesSelector && n.msMatchesSelector(selector) ||
                n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
        }
        return false;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.isTemplateElement = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return this.isElementNode(el) && el.nodeName === 'TEMPLATE';
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isTextNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeType === Node.TEXT_NODE; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isCommentNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeType === Node.COMMENT_NODE; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isElementNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeType === Node.ELEMENT_NODE; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasShadowRoot = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return node.shadowRoot != null && node instanceof HTMLElement;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isShadowRoot = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node instanceof DocumentFragment; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.importIntoDoc = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return document.importNode(this.templateAwareRoot(node), true); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.adoptNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return document.adoptNode(node); };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getHref = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return /** @type {?} */ ((el.getAttribute('href'))); };
    /**
     * @param {?} event
     * @return {?}
     */
    BrowserDomAdapter.prototype.getEventKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ key = event.key;
        if (key == null) {
            key = event.keyIdentifier;
            // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
            // Safari cf
            // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
            if (key == null) {
                return 'Unidentified';
            }
            if (key.startsWith('U+')) {
                key = String.fromCharCode(parseInt(key.substring(2), 16));
                if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                    // There is a bug in Chrome for numeric keypad keys:
                    // https://code.google.com/p/chromium/issues/detail?id=155654
                    // 1, 2, 3 ... are reported as A, B, C ...
                    key = (/** @type {?} */ (_chromeNumKeyPadMap))[key];
                }
            }
        }
        return _keyMap[key] || key;
    };
    /**
     * @param {?} doc
     * @param {?} target
     * @return {?}
     */
    BrowserDomAdapter.prototype.getGlobalEventTarget = /**
     * @param {?} doc
     * @param {?} target
     * @return {?}
     */
    function (doc, target) {
        if (target === 'window') {
            return window;
        }
        if (target === 'document') {
            return doc;
        }
        if (target === 'body') {
            return doc.body;
        }
        return null;
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getHistory = /**
     * @return {?}
     */
    function () { return window.history; };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getLocation = /**
     * @return {?}
     */
    function () { return window.location; };
    /**
     * @param {?} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.getBaseHref = /**
     * @param {?} doc
     * @return {?}
     */
    function (doc) {
        var /** @type {?} */ href = getBaseElementHref();
        return href == null ? null : relativePath(href);
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.resetBaseElement = /**
     * @return {?}
     */
    function () { baseElement = null; };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getUserAgent = /**
     * @return {?}
     */
    function () { return window.navigator.userAgent; };
    /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setData = /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (element, name, value) {
        this.setAttribute(element, 'data-' + name, value);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getData = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        return this.getAttribute(element, 'data-' + name);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.getComputedStyle = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { return getComputedStyle(element); };
    // TODO(tbosch): move this into a separate environment class once we have it
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.supportsWebAnimation = /**
     * @return {?}
     */
    function () {
        return typeof (/** @type {?} */ (Element)).prototype['animate'] === 'function';
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.performanceNow = /**
     * @return {?}
     */
    function () {
        // performance.now() is not available in all browsers, see
        // http://caniuse.com/#search=performance.now
        return window.performance && window.performance.now ? window.performance.now() :
            new Date().getTime();
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.supportsCookies = /**
     * @return {?}
     */
    function () { return true; };
    /**
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getCookie = /**
     * @param {?} name
     * @return {?}
     */
    function (name) { return Object(__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* ɵparseCookieValue */])(document.cookie, name); };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setCookie = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
        // not clear other cookies.
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    };
    return BrowserDomAdapter;
}(GenericBrowserDomAdapter));
var baseElement = null;
/**
 * @return {?}
 */
function getBaseElementHref() {
    if (!baseElement) {
        baseElement = /** @type {?} */ ((document.querySelector('base')));
        if (!baseElement) {
            return null;
        }
    }
    return baseElement.getAttribute('href');
}
// based on urlUtils.js in AngularJS 1
var urlParsingNode;
/**
 * @param {?} url
 * @return {?}
 */
function relativePath(url) {
    if (!urlParsingNode) {
        urlParsingNode = document.createElement('a');
    }
    urlParsingNode.setAttribute('href', url);
    return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
        '/' + urlParsingNode.pathname;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
 *
 * Note: Document might not be available in the Application Context when Application and Rendering
 * Contexts are not the same (e.g. when running the application into a Web Worker).
 *
 * @deprecated import from `\@angular/common` instead.
 */
var DOCUMENT$1 = __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* DOCUMENT */];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function supportsState() {
    return !!window.history.pushState;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {\@link Location}.
 */
var BrowserPlatformLocation = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(BrowserPlatformLocation, _super);
    function BrowserPlatformLocation(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        _this._init();
        return _this;
    }
    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    BrowserPlatformLocation.prototype._init = /**
     * \@internal
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this)).location = getDOM().getLocation();
        this._history = getDOM().getHistory();
    };
    /**
     * @return {?}
     */
    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = /**
     * @return {?}
     */
    function () { return /** @type {?} */ ((getDOM().getBaseHref(this._doc))); };
    /**
     * @param {?} fn
     * @return {?}
     */
    BrowserPlatformLocation.prototype.onPopState = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', fn, false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BrowserPlatformLocation.prototype.onHashChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', fn, false);
    };
    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
        get: /**
         * @return {?}
         */
        function () { return this.location.pathname; },
        set: /**
         * @param {?} newPath
         * @return {?}
         */
        function (newPath) { this.location.pathname = newPath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
        get: /**
         * @return {?}
         */
        function () { return this.location.search; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
        get: /**
         * @return {?}
         */
        function () { return this.location.hash; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    BrowserPlatformLocation.prototype.pushState = /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    function (state, title, url) {
        if (supportsState()) {
            this._history.pushState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    BrowserPlatformLocation.prototype.replaceState = /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    function (state, title, url) {
        if (supportsState()) {
            this._history.replaceState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    /**
     * @return {?}
     */
    BrowserPlatformLocation.prototype.forward = /**
     * @return {?}
     */
    function () { this._history.forward(); };
    /**
     * @return {?}
     */
    BrowserPlatformLocation.prototype.back = /**
     * @return {?}
     */
    function () { this._history.back(); };
    BrowserPlatformLocation.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserPlatformLocation.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [DOCUMENT$1,] },] },
    ]; };
    return BrowserPlatformLocation;
}(__WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* PlatformLocation */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A service that can be used to get and add meta tags.
 *
 * \@experimental
 */
var Meta = /** @class */ (function () {
    function Meta(_doc) {
        this._doc = _doc;
        this._dom = getDOM();
    }
    /**
     * @param {?} tag
     * @param {?=} forceCreation
     * @return {?}
     */
    Meta.prototype.addTag = /**
     * @param {?} tag
     * @param {?=} forceCreation
     * @return {?}
     */
    function (tag, forceCreation) {
        if (forceCreation === void 0) { forceCreation = false; }
        if (!tag)
            return null;
        return this._getOrCreateElement(tag, forceCreation);
    };
    /**
     * @param {?} tags
     * @param {?=} forceCreation
     * @return {?}
     */
    Meta.prototype.addTags = /**
     * @param {?} tags
     * @param {?=} forceCreation
     * @return {?}
     */
    function (tags, forceCreation) {
        var _this = this;
        if (forceCreation === void 0) { forceCreation = false; }
        if (!tags)
            return [];
        return tags.reduce(function (result, tag) {
            if (tag) {
                result.push(_this._getOrCreateElement(tag, forceCreation));
            }
            return result;
        }, []);
    };
    /**
     * @param {?} attrSelector
     * @return {?}
     */
    Meta.prototype.getTag = /**
     * @param {?} attrSelector
     * @return {?}
     */
    function (attrSelector) {
        if (!attrSelector)
            return null;
        return this._dom.querySelector(this._doc, "meta[" + attrSelector + "]") || null;
    };
    /**
     * @param {?} attrSelector
     * @return {?}
     */
    Meta.prototype.getTags = /**
     * @param {?} attrSelector
     * @return {?}
     */
    function (attrSelector) {
        if (!attrSelector)
            return [];
        var /** @type {?} */ list = this._dom.querySelectorAll(this._doc, "meta[" + attrSelector + "]");
        return list ? [].slice.call(list) : [];
    };
    /**
     * @param {?} tag
     * @param {?=} selector
     * @return {?}
     */
    Meta.prototype.updateTag = /**
     * @param {?} tag
     * @param {?=} selector
     * @return {?}
     */
    function (tag, selector) {
        if (!tag)
            return null;
        selector = selector || this._parseSelector(tag);
        var /** @type {?} */ meta = /** @type {?} */ ((this.getTag(selector)));
        if (meta) {
            return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
    };
    /**
     * @param {?} attrSelector
     * @return {?}
     */
    Meta.prototype.removeTag = /**
     * @param {?} attrSelector
     * @return {?}
     */
    function (attrSelector) { this.removeTagElement(/** @type {?} */ ((this.getTag(attrSelector)))); };
    /**
     * @param {?} meta
     * @return {?}
     */
    Meta.prototype.removeTagElement = /**
     * @param {?} meta
     * @return {?}
     */
    function (meta) {
        if (meta) {
            this._dom.remove(meta);
        }
    };
    /**
     * @param {?} meta
     * @param {?=} forceCreation
     * @return {?}
     */
    Meta.prototype._getOrCreateElement = /**
     * @param {?} meta
     * @param {?=} forceCreation
     * @return {?}
     */
    function (meta, forceCreation) {
        if (forceCreation === void 0) { forceCreation = false; }
        if (!forceCreation) {
            var /** @type {?} */ selector = this._parseSelector(meta);
            var /** @type {?} */ elem = /** @type {?} */ ((this.getTag(selector)));
            // It's allowed to have multiple elements with the same name so it's not enough to
            // just check that element with the same name already present on the page. We also need to
            // check if element has tag attributes
            if (elem && this._containsAttributes(meta, elem))
                return elem;
        }
        var /** @type {?} */ element = /** @type {?} */ (this._dom.createElement('meta'));
        this._setMetaElementAttributes(meta, element);
        var /** @type {?} */ head = this._dom.getElementsByTagName(this._doc, 'head')[0];
        this._dom.appendChild(head, element);
        return element;
    };
    /**
     * @param {?} tag
     * @param {?} el
     * @return {?}
     */
    Meta.prototype._setMetaElementAttributes = /**
     * @param {?} tag
     * @param {?} el
     * @return {?}
     */
    function (tag, el) {
        var _this = this;
        Object.keys(tag).forEach(function (prop) { return _this._dom.setAttribute(el, prop, tag[prop]); });
        return el;
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    Meta.prototype._parseSelector = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        var /** @type {?} */ attr = tag.name ? 'name' : 'property';
        return attr + "=\"" + tag[attr] + "\"";
    };
    /**
     * @param {?} tag
     * @param {?} elem
     * @return {?}
     */
    Meta.prototype._containsAttributes = /**
     * @param {?} tag
     * @param {?} elem
     * @return {?}
     */
    function (tag, elem) {
        var _this = this;
        return Object.keys(tag).every(function (key) { return _this._dom.getAttribute(elem, key) === tag[key]; });
    };
    Meta.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Meta.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [DOCUMENT$1,] },] },
    ]; };
    return Meta;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */
var TRANSITION_ID = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('TRANSITION_ID');
/**
 * @param {?} transitionId
 * @param {?} document
 * @param {?} injector
 * @return {?}
 */
function appInitializerFactory(transitionId, document, injector) {
    return function () {
        // Wait for all application initializers to be completed before removing the styles set by
        // the server.
        injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationInitStatus"]).donePromise.then(function () {
            var /** @type {?} */ dom = getDOM();
            var /** @type {?} */ styles = Array.prototype.slice.apply(dom.querySelectorAll(document, "style[ng-transition]"));
            styles.filter(function (el) { return dom.getAttribute(el, 'ng-transition') === transitionId; })
                .forEach(function (el) { return dom.remove(el); });
        });
    };
}
var SERVER_TRANSITION_PROVIDERS = [
    {
        provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"],
        useFactory: appInitializerFactory,
        deps: [TRANSITION_ID, DOCUMENT$1, __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]],
        multi: true
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var BrowserGetTestability = /** @class */ (function () {
    function BrowserGetTestability() {
    }
    /**
     * @return {?}
     */
    BrowserGetTestability.init = /**
     * @return {?}
     */
    function () { Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["setTestabilityGetter"])(new BrowserGetTestability()); };
    /**
     * @param {?} registry
     * @return {?}
     */
    BrowserGetTestability.prototype.addToWindow = /**
     * @param {?} registry
     * @return {?}
     */
    function (registry) {
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['getAngularTestability'] = function (elem, findInAncestors) {
            if (findInAncestors === void 0) { findInAncestors = true; }
            var /** @type {?} */ testability = registry.findTestabilityInTree(elem, findInAncestors);
            if (testability == null) {
                throw new Error('Could not find testability for element.');
            }
            return testability;
        };
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['getAllAngularTestabilities'] = function () { return registry.getAllTestabilities(); };
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['getAllAngularRootElements'] = function () { return registry.getAllRootElements(); };
        var /** @type {?} */ whenAllStable = function (callback /** TODO #9100 */) {
            var /** @type {?} */ testabilities = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['getAllAngularTestabilities']();
            var /** @type {?} */ count = testabilities.length;
            var /** @type {?} */ didWork = false;
            var /** @type {?} */ decrement = function (didWork_ /** TODO #9100 */) {
                didWork = didWork || didWork_;
                count--;
                if (count == 0) {
                    callback(didWork);
                }
            };
            testabilities.forEach(function (testability /** TODO #9100 */) {
                testability.whenStable(decrement);
            });
        };
        if (!__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['frameworkStabilizers']) {
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['frameworkStabilizers'] = [];
        }
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['frameworkStabilizers'].push(whenAllStable);
    };
    /**
     * @param {?} registry
     * @param {?} elem
     * @param {?} findInAncestors
     * @return {?}
     */
    BrowserGetTestability.prototype.findTestabilityInTree = /**
     * @param {?} registry
     * @param {?} elem
     * @param {?} findInAncestors
     * @return {?}
     */
    function (registry, elem, findInAncestors) {
        if (elem == null) {
            return null;
        }
        var /** @type {?} */ t = registry.getTestability(elem);
        if (t != null) {
            return t;
        }
        else if (!findInAncestors) {
            return null;
        }
        if (getDOM().isShadowRoot(elem)) {
            return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
        }
        return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
    };
    return BrowserGetTestability;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * \@experimental
 */
var Title = /** @class */ (function () {
    function Title(_doc) {
        this._doc = _doc;
    }
    /**
     * Get the title of the current HTML document.
     */
    /**
     * Get the title of the current HTML document.
     * @return {?}
     */
    Title.prototype.getTitle = /**
     * Get the title of the current HTML document.
     * @return {?}
     */
    function () { return getDOM().getTitle(this._doc); };
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    /**
     * Set the title of the current HTML document.
     * @param {?} newTitle
     * @return {?}
     */
    Title.prototype.setTitle = /**
     * Set the title of the current HTML document.
     * @param {?} newTitle
     * @return {?}
     */
    function (newTitle) { getDOM().setTitle(this._doc, newTitle); };
    Title.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Title.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [DOCUMENT$1,] },] },
    ]; };
    return Title;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} input
 * @return {?}
 */

/**
 * @param {?} input
 * @return {?}
 */

/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param {?} name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param {?} value The value to export.
 * @return {?}
 */
function exportNgVar(name, value) {
    if (typeof COMPILED === 'undefined' || !COMPILED) {
        // Note: we can't export `ng` when using closure enhanced optimization as:
        // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
        // - we can't declare a closure extern as the namespace `ng` is already used within Google
        //   for typings for angularJS (via `goog.provide('ng....')`).
        var /** @type {?} */ ng = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['ng'] = (/** @type {?} */ (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵglobal"]['ng'])) || {};
        ng[name] = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CORE_TOKENS = {
    'ApplicationRef': __WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"],
    'NgZone': __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"],
};
var INSPECT_GLOBAL_NAME = 'probe';
var CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
/**
 * Returns a {\@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 * @param {?} element
 * @return {?}
 */
function inspectNativeElement(element) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["getDebugNode"])(element);
}
/**
 * @param {?} coreTokens
 * @return {?}
 */
function _createNgProbe(coreTokens) {
    exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
    exportNgVar(CORE_TOKENS_GLOBAL_NAME, Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["a" /* __assign */])({}, CORE_TOKENS, _ngProbeTokensToMap(coreTokens || [])));
    return function () { return inspectNativeElement; };
}
/**
 * @param {?} tokens
 * @return {?}
 */
function _ngProbeTokensToMap(tokens) {
    return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
}
/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
var ELEMENT_PROBE_PROVIDERS = [
    {
        provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"],
        useFactory: _createNgProbe,
        deps: [
            [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgProbeToken"], new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"]()],
        ],
        multi: true,
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@stable
 */
var EVENT_MANAGER_PLUGINS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('EventManagerPlugins');
/**
 * \@stable
 */
var EventManager = /** @class */ (function () {
    function EventManager(plugins, _zone) {
        var _this = this;
        this._zone = _zone;
        this._eventNameToPlugin = new Map();
        plugins.forEach(function (p) { return p.manager = _this; });
        this._plugins = plugins.slice().reverse();
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    EventManager.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var /** @type {?} */ plugin = this._findPluginFor(eventName);
        return plugin.addEventListener(element, eventName, handler);
    };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    EventManager.prototype.addGlobalEventListener = /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (target, eventName, handler) {
        var /** @type {?} */ plugin = this._findPluginFor(eventName);
        return plugin.addGlobalEventListener(target, eventName, handler);
    };
    /**
     * @return {?}
     */
    EventManager.prototype.getZone = /**
     * @return {?}
     */
    function () { return this._zone; };
    /** @internal */
    /**
     * \@internal
     * @param {?} eventName
     * @return {?}
     */
    EventManager.prototype._findPluginFor = /**
     * \@internal
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        var /** @type {?} */ plugin = this._eventNameToPlugin.get(eventName);
        if (plugin) {
            return plugin;
        }
        var /** @type {?} */ plugins = this._plugins;
        for (var /** @type {?} */ i = 0; i < plugins.length; i++) {
            var /** @type {?} */ plugin_1 = plugins[i];
            if (plugin_1.supports(eventName)) {
                this._eventNameToPlugin.set(eventName, plugin_1);
                return plugin_1;
            }
        }
        throw new Error("No event manager plugin found for event " + eventName);
    };
    EventManager.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    EventManager.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [EVENT_MANAGER_PLUGINS,] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], },
    ]; };
    return EventManager;
}());
/**
 * @abstract
 */
var EventManagerPlugin = /** @class */ (function () {
    function EventManagerPlugin(_doc) {
        this._doc = _doc;
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    EventManagerPlugin.prototype.addGlobalEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var /** @type {?} */ target = getDOM().getGlobalEventTarget(this._doc, element);
        if (!target) {
            throw new Error("Unsupported event target " + target + " for event " + eventName);
        }
        return this.addEventListener(target, eventName, handler);
    };
    return EventManagerPlugin;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SharedStylesHost = /** @class */ (function () {
    function SharedStylesHost() {
        /**
         * \@internal
         */
        this._stylesSet = new Set();
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    SharedStylesHost.prototype.addStyles = /**
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        var _this = this;
        var /** @type {?} */ additions = new Set();
        styles.forEach(function (style) {
            if (!_this._stylesSet.has(style)) {
                _this._stylesSet.add(style);
                additions.add(style);
            }
        });
        this.onStylesAdded(additions);
    };
    /**
     * @param {?} additions
     * @return {?}
     */
    SharedStylesHost.prototype.onStylesAdded = /**
     * @param {?} additions
     * @return {?}
     */
    function (additions) { };
    /**
     * @return {?}
     */
    SharedStylesHost.prototype.getAllStyles = /**
     * @return {?}
     */
    function () { return Array.from(this._stylesSet); };
    SharedStylesHost.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    SharedStylesHost.ctorParameters = function () { return []; };
    return SharedStylesHost;
}());
var DomSharedStylesHost = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(DomSharedStylesHost, _super);
    function DomSharedStylesHost(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        _this._hostNodes = new Set();
        _this._styleNodes = new Set();
        _this._hostNodes.add(_doc.head);
        return _this;
    }
    /**
     * @param {?} styles
     * @param {?} host
     * @return {?}
     */
    DomSharedStylesHost.prototype._addStylesToHost = /**
     * @param {?} styles
     * @param {?} host
     * @return {?}
     */
    function (styles, host) {
        var _this = this;
        styles.forEach(function (style) {
            var /** @type {?} */ styleEl = _this._doc.createElement('style');
            styleEl.textContent = style;
            _this._styleNodes.add(host.appendChild(styleEl));
        });
    };
    /**
     * @param {?} hostNode
     * @return {?}
     */
    DomSharedStylesHost.prototype.addHost = /**
     * @param {?} hostNode
     * @return {?}
     */
    function (hostNode) {
        this._addStylesToHost(this._stylesSet, hostNode);
        this._hostNodes.add(hostNode);
    };
    /**
     * @param {?} hostNode
     * @return {?}
     */
    DomSharedStylesHost.prototype.removeHost = /**
     * @param {?} hostNode
     * @return {?}
     */
    function (hostNode) { this._hostNodes.delete(hostNode); };
    /**
     * @param {?} additions
     * @return {?}
     */
    DomSharedStylesHost.prototype.onStylesAdded = /**
     * @param {?} additions
     * @return {?}
     */
    function (additions) {
        var _this = this;
        this._hostNodes.forEach(function (hostNode) { return _this._addStylesToHost(additions, hostNode); });
    };
    /**
     * @return {?}
     */
    DomSharedStylesHost.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this._styleNodes.forEach(function (styleNode) { return getDOM().remove(styleNode); }); };
    DomSharedStylesHost.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DomSharedStylesHost.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [DOCUMENT$1,] },] },
    ]; };
    return DomSharedStylesHost;
}(SharedStylesHost));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NAMESPACE_URIS = {
    'svg': 'http://www.w3.org/2000/svg',
    'xhtml': 'http://www.w3.org/1999/xhtml',
    'xlink': 'http://www.w3.org/1999/xlink',
    'xml': 'http://www.w3.org/XML/1998/namespace',
    'xmlns': 'http://www.w3.org/2000/xmlns/',
};
var COMPONENT_REGEX = /%COMP%/g;
var COMPONENT_VARIABLE = '%COMP%';
var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
/**
 * @param {?} componentShortId
 * @return {?}
 */
function shimContentAttribute(componentShortId) {
    return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
/**
 * @param {?} componentShortId
 * @return {?}
 */
function shimHostAttribute(componentShortId) {
    return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
/**
 * @param {?} compId
 * @param {?} styles
 * @param {?} target
 * @return {?}
 */
function flattenStyles(compId, styles, target) {
    for (var /** @type {?} */ i = 0; i < styles.length; i++) {
        var /** @type {?} */ style = styles[i];
        if (Array.isArray(style)) {
            flattenStyles(compId, style, target);
        }
        else {
            style = style.replace(COMPONENT_REGEX, compId);
            target.push(style);
        }
    }
    return target;
}
/**
 * @param {?} eventHandler
 * @return {?}
 */
function decoratePreventDefault(eventHandler) {
    return function (event) {
        var /** @type {?} */ allowDefaultBehavior = eventHandler(event);
        if (allowDefaultBehavior === false) {
            // TODO(tbosch): move preventDefault into event plugins...
            event.preventDefault();
            event.returnValue = false;
        }
    };
}
var DomRendererFactory2 = /** @class */ (function () {
    function DomRendererFactory2(eventManager, sharedStylesHost) {
        this.eventManager = eventManager;
        this.sharedStylesHost = sharedStylesHost;
        this.rendererByCompId = new Map();
        this.defaultRenderer = new DefaultDomRenderer2(eventManager);
    }
    /**
     * @param {?} element
     * @param {?} type
     * @return {?}
     */
    DomRendererFactory2.prototype.createRenderer = /**
     * @param {?} element
     * @param {?} type
     * @return {?}
     */
    function (element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        switch (type.encapsulation) {
            case __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].Emulated: {
                var /** @type {?} */ renderer = this.rendererByCompId.get(type.id);
                if (!renderer) {
                    renderer =
                        new EmulatedEncapsulationDomRenderer2(this.eventManager, this.sharedStylesHost, type);
                    this.rendererByCompId.set(type.id, renderer);
                }
                (/** @type {?} */ (renderer)).applyToHost(element);
                return renderer;
            }
            case __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].Native:
                return new ShadowDomRenderer(this.eventManager, this.sharedStylesHost, element, type);
            default: {
                if (!this.rendererByCompId.has(type.id)) {
                    var /** @type {?} */ styles = flattenStyles(type.id, type.styles, []);
                    this.sharedStylesHost.addStyles(styles);
                    this.rendererByCompId.set(type.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
        }
    };
    /**
     * @return {?}
     */
    DomRendererFactory2.prototype.begin = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    DomRendererFactory2.prototype.end = /**
     * @return {?}
     */
    function () { };
    DomRendererFactory2.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DomRendererFactory2.ctorParameters = function () { return [
        { type: EventManager, },
        { type: DomSharedStylesHost, },
    ]; };
    return DomRendererFactory2;
}());
var DefaultDomRenderer2 = /** @class */ (function () {
    function DefaultDomRenderer2(eventManager) {
        this.eventManager = eventManager;
        this.data = Object.create(null);
    }
    /**
     * @return {?}
     */
    DefaultDomRenderer2.prototype.destroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    DefaultDomRenderer2.prototype.createElement = /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    function (name, namespace) {
        if (namespace) {
            return document.createElementNS(NAMESPACE_URIS[namespace], name);
        }
        return document.createElement(name);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.createComment = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return document.createComment(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.createText = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return document.createTextNode(value); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    DefaultDomRenderer2.prototype.appendChild = /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    function (parent, newChild) { parent.appendChild(newChild); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    DefaultDomRenderer2.prototype.insertBefore = /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    function (parent, newChild, refChild) {
        if (parent) {
            parent.insertBefore(newChild, refChild);
        }
    };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeChild = /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    function (parent, oldChild) {
        if (parent) {
            parent.removeChild(oldChild);
        }
    };
    /**
     * @param {?} selectorOrNode
     * @return {?}
     */
    DefaultDomRenderer2.prototype.selectRootElement = /**
     * @param {?} selectorOrNode
     * @return {?}
     */
    function (selectorOrNode) {
        var /** @type {?} */ el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) :
            selectorOrNode;
        if (!el) {
            throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
        }
        el.textContent = '';
        return el;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    DefaultDomRenderer2.prototype.parentNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.parentNode; };
    /**
     * @param {?} node
     * @return {?}
     */
    DefaultDomRenderer2.prototype.nextSibling = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nextSibling; };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setAttribute = /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    function (el, name, value, namespace) {
        if (namespace) {
            name = namespace + ":" + name;
            var /** @type {?} */ namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.setAttributeNS(namespaceUri, name, value);
            }
            else {
                el.setAttribute(name, value);
            }
        }
        else {
            el.setAttribute(name, value);
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeAttribute = /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    function (el, name, namespace) {
        if (namespace) {
            var /** @type {?} */ namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.removeAttributeNS(namespaceUri, name);
            }
            else {
                el.removeAttribute(namespace + ":" + name);
            }
        }
        else {
            el.removeAttribute(name);
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    DefaultDomRenderer2.prototype.addClass = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) { el.classList.add(name); };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeClass = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) { el.classList.remove(name); };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setStyle = /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    function (el, style, value, flags) {
        if (flags & __WEBPACK_IMPORTED_MODULE_1__angular_core__["RendererStyleFlags2"].DashCase) {
            el.style.setProperty(style, value, !!(flags & __WEBPACK_IMPORTED_MODULE_1__angular_core__["RendererStyleFlags2"].Important) ? 'important' : '');
        }
        else {
            el.style[style] = value;
        }
    };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeStyle = /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    function (el, style, flags) {
        if (flags & __WEBPACK_IMPORTED_MODULE_1__angular_core__["RendererStyleFlags2"].DashCase) {
            el.style.removeProperty(style);
        }
        else {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            el.style[style] = '';
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setProperty = /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (el, name, value) {
        checkNoSyntheticProp(name, 'property');
        el[name] = value;
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setValue = /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) { node.nodeValue = value; };
    /**
     * @param {?} target
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    DefaultDomRenderer2.prototype.listen = /**
     * @param {?} target
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    function (target, event, callback) {
        checkNoSyntheticProp(event, 'listener');
        if (typeof target === 'string') {
            return /** @type {?} */ (this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback)));
        }
        return /** @type {?} */ ((this.eventManager.addEventListener(target, event, decoratePreventDefault(callback))));
    };
    return DefaultDomRenderer2;
}());
var AT_CHARCODE = '@'.charCodeAt(0);
/**
 * @param {?} name
 * @param {?} nameKind
 * @return {?}
 */
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
    }
}
var EmulatedEncapsulationDomRenderer2 = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(EmulatedEncapsulationDomRenderer2, _super);
    function EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, component) {
        var _this = _super.call(this, eventManager) || this;
        _this.component = component;
        var /** @type {?} */ styles = flattenStyles(component.id, component.styles, []);
        sharedStylesHost.addStyles(styles);
        _this.contentAttr = shimContentAttribute(component.id);
        _this.hostAttr = shimHostAttribute(component.id);
        return _this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    EmulatedEncapsulationDomRenderer2.prototype.applyToHost = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { _super.prototype.setAttribute.call(this, element, this.hostAttr, ''); };
    /**
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    EmulatedEncapsulationDomRenderer2.prototype.createElement = /**
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    function (parent, name) {
        var /** @type {?} */ el = _super.prototype.createElement.call(this, parent, name);
        _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
        return el;
    };
    return EmulatedEncapsulationDomRenderer2;
}(DefaultDomRenderer2));
var ShadowDomRenderer = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(ShadowDomRenderer, _super);
    function ShadowDomRenderer(eventManager, sharedStylesHost, hostEl, component) {
        var _this = _super.call(this, eventManager) || this;
        _this.sharedStylesHost = sharedStylesHost;
        _this.hostEl = hostEl;
        _this.component = component;
        _this.shadowRoot = (/** @type {?} */ (hostEl)).createShadowRoot();
        _this.sharedStylesHost.addHost(_this.shadowRoot);
        var /** @type {?} */ styles = flattenStyles(component.id, component.styles, []);
        for (var /** @type {?} */ i = 0; i < styles.length; i++) {
            var /** @type {?} */ styleEl = document.createElement('style');
            styleEl.textContent = styles[i];
            _this.shadowRoot.appendChild(styleEl);
        }
        return _this;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    ShadowDomRenderer.prototype.nodeOrShadowRoot = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node === this.hostEl ? this.shadowRoot : node; };
    /**
     * @return {?}
     */
    ShadowDomRenderer.prototype.destroy = /**
     * @return {?}
     */
    function () { this.sharedStylesHost.removeHost(this.shadowRoot); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    ShadowDomRenderer.prototype.appendChild = /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    function (parent, newChild) {
        return _super.prototype.appendChild.call(this, this.nodeOrShadowRoot(parent), newChild);
    };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    ShadowDomRenderer.prototype.insertBefore = /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    function (parent, newChild, refChild) {
        return _super.prototype.insertBefore.call(this, this.nodeOrShadowRoot(parent), newChild, refChild);
    };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    ShadowDomRenderer.prototype.removeChild = /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    function (parent, oldChild) {
        return _super.prototype.removeChild.call(this, this.nodeOrShadowRoot(parent), oldChild);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ShadowDomRenderer.prototype.parentNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.nodeOrShadowRoot(_super.prototype.parentNode.call(this, this.nodeOrShadowRoot(node)));
    };
    return ShadowDomRenderer;
}(DefaultDomRenderer2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ɵ0 = function (v) {
    return '__zone_symbol__' + v;
};
/**
 * Detect if Zone is present. If it is then use simple zone aware 'addEventListener'
 * since Angular can do much more
 * efficient bookkeeping than Zone can, because we have additional information. This speeds up
 * addEventListener by 3x.
 */
var __symbol__ = (typeof Zone !== 'undefined') && (/** @type {?} */ (Zone))['__symbol__'] || ɵ0;
var ADD_EVENT_LISTENER = __symbol__('addEventListener');
var REMOVE_EVENT_LISTENER = __symbol__('removeEventListener');
var symbolNames = {};
var FALSE = 'FALSE';
var ANGULAR = 'ANGULAR';
var NATIVE_ADD_LISTENER = 'addEventListener';
var NATIVE_REMOVE_LISTENER = 'removeEventListener';
// use the same symbol string which is used in zone.js
var stopSymbol = '__zone_symbol__propagationStopped';
var stopMethodSymbol = '__zone_symbol__stopImmediatePropagation';
var blackListedEvents = (typeof Zone !== 'undefined') && (/** @type {?} */ (Zone))[__symbol__('BLACK_LISTED_EVENTS')];
var blackListedMap;
if (blackListedEvents) {
    blackListedMap = {};
    blackListedEvents.forEach(function (eventName) { blackListedMap[eventName] = eventName; });
}
var isBlackListedEvent = function (eventName) {
    if (!blackListedMap) {
        return false;
    }
    return blackListedMap.hasOwnProperty(eventName);
};
// a global listener to handle all dom event,
// so we do not need to create a closure everytime
var globalListener = function (event) {
    var /** @type {?} */ symbolName = symbolNames[event.type];
    if (!symbolName) {
        return;
    }
    var /** @type {?} */ taskDatas = this[symbolName];
    if (!taskDatas) {
        return;
    }
    var /** @type {?} */ args = [event];
    if (taskDatas.length === 1) {
        // if taskDatas only have one element, just invoke it
        var /** @type {?} */ taskData = taskDatas[0];
        if (taskData.zone !== Zone.current) {
            // only use Zone.run when Zone.current not equals to stored zone
            return taskData.zone.run(taskData.handler, this, args);
        }
        else {
            return taskData.handler.apply(this, args);
        }
    }
    else {
        // copy tasks as a snapshot to avoid event handlers remove
        // itself or others
        var /** @type {?} */ copiedTasks = taskDatas.slice();
        for (var /** @type {?} */ i = 0; i < copiedTasks.length; i++) {
            // if other listener call event.stopImmediatePropagation
            // just break
            if ((/** @type {?} */ (event))[stopSymbol] === true) {
                break;
            }
            var /** @type {?} */ taskData = copiedTasks[i];
            if (taskData.zone !== Zone.current) {
                // only use Zone.run when Zone.current not equals to stored zone
                taskData.zone.run(taskData.handler, this, args);
            }
            else {
                taskData.handler.apply(this, args);
            }
        }
    }
};
var DomEventsPlugin = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(DomEventsPlugin, _super);
    function DomEventsPlugin(doc, ngZone) {
        var _this = _super.call(this, doc) || this;
        _this.ngZone = ngZone;
        _this.patchEvent();
        return _this;
    }
    /**
     * @return {?}
     */
    DomEventsPlugin.prototype.patchEvent = /**
     * @return {?}
     */
    function () {
        if (!Event || !Event.prototype) {
            return;
        }
        if ((/** @type {?} */ (Event.prototype))[stopMethodSymbol]) {
            // already patched by zone.js
            return;
        }
        var /** @type {?} */ delegate = (/** @type {?} */ (Event.prototype))[stopMethodSymbol] =
            Event.prototype.stopImmediatePropagation;
        Event.prototype.stopImmediatePropagation = function () {
            if (this) {
                this[stopSymbol] = true;
            }
            // should call native delegate in case
            // in some enviroment part of the application
            // will not use the patched Event
            delegate && delegate.apply(this, arguments);
        };
    };
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    /**
     * @param {?} eventName
     * @return {?}
     */
    DomEventsPlugin.prototype.supports = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return true; };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    DomEventsPlugin.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var _this = this;
        /**
         * This code is about to add a listener to the DOM. If Zone.js is present, than
         * `addEventListener` has been patched. The patched code adds overhead in both
         * memory and speed (3x slower) than native. For this reason if we detect that
         * Zone.js is present we use a simple version of zone aware addEventListener instead.
         * The result is faster registration and the zone will be restored.
         * But ZoneSpec.onScheduleTask, ZoneSpec.onInvokeTask, ZoneSpec.onCancelTask
         * will not be invoked
         * We also do manual zone restoration in element.ts renderEventHandlerClosure method.
         *
         * NOTE: it is possible that the element is from different iframe, and so we
         * have to check before we execute the method.
         */
        var /** @type {?} */ self = this;
        var /** @type {?} */ zoneJsLoaded = element[ADD_EVENT_LISTENER];
        var /** @type {?} */ callback = /** @type {?} */ (handler);
        // if zonejs is loaded and current zone is not ngZone
        // we keep Zone.current on target for later restoration.
        if (zoneJsLoaded && (!__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"].isInAngularZone() || isBlackListedEvent(eventName))) {
            var /** @type {?} */ symbolName = symbolNames[eventName];
            if (!symbolName) {
                symbolName = symbolNames[eventName] = __symbol__(ANGULAR + eventName + FALSE);
            }
            var /** @type {?} */ taskDatas = (/** @type {?} */ (element))[symbolName];
            var /** @type {?} */ globalListenerRegistered = taskDatas && taskDatas.length > 0;
            if (!taskDatas) {
                taskDatas = (/** @type {?} */ (element))[symbolName] = [];
            }
            var /** @type {?} */ zone = isBlackListedEvent(eventName) ? Zone.root : Zone.current;
            if (taskDatas.length === 0) {
                taskDatas.push({ zone: zone, handler: callback });
            }
            else {
                var /** @type {?} */ callbackRegistered = false;
                for (var /** @type {?} */ i = 0; i < taskDatas.length; i++) {
                    if (taskDatas[i].handler === callback) {
                        callbackRegistered = true;
                        break;
                    }
                }
                if (!callbackRegistered) {
                    taskDatas.push({ zone: zone, handler: callback });
                }
            }
            if (!globalListenerRegistered) {
                element[ADD_EVENT_LISTENER](eventName, globalListener, false);
            }
        }
        else {
            element[NATIVE_ADD_LISTENER](eventName, callback, false);
        }
        return function () { return _this.removeEventListener(element, eventName, callback); };
    };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    DomEventsPlugin.prototype.removeEventListener = /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    function (target, eventName, callback) {
        var /** @type {?} */ underlyingRemove = target[REMOVE_EVENT_LISTENER];
        // zone.js not loaded, use native removeEventListener
        if (!underlyingRemove) {
            return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
        var /** @type {?} */ symbolName = symbolNames[eventName];
        var /** @type {?} */ taskDatas = symbolName && target[symbolName];
        if (!taskDatas) {
            // addEventListener not using patched version
            // just call native removeEventListener
            return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
        // fix issue 20532, should be able to remove
        // listener which was added inside of ngZone
        var /** @type {?} */ found = false;
        for (var /** @type {?} */ i = 0; i < taskDatas.length; i++) {
            // remove listener from taskDatas if the callback equals
            if (taskDatas[i].handler === callback) {
                found = true;
                taskDatas.splice(i, 1);
                break;
            }
        }
        if (found) {
            if (taskDatas.length === 0) {
                // all listeners are removed, we can remove the globalListener from target
                underlyingRemove.apply(target, [eventName, globalListener, false]);
            }
        }
        else {
            // not found in taskDatas, the callback may be added inside of ngZone
            // use native remove listener to remove the calback
            target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
    };
    DomEventsPlugin.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DomEventsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [DOCUMENT$1,] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], },
    ]; };
    return DomEventsPlugin;
}(EventManagerPlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var EVENT_NAMES = {
    // pan
    'pan': true,
    'panstart': true,
    'panmove': true,
    'panend': true,
    'pancancel': true,
    'panleft': true,
    'panright': true,
    'panup': true,
    'pandown': true,
    // pinch
    'pinch': true,
    'pinchstart': true,
    'pinchmove': true,
    'pinchend': true,
    'pinchcancel': true,
    'pinchin': true,
    'pinchout': true,
    // press
    'press': true,
    'pressup': true,
    // rotate
    'rotate': true,
    'rotatestart': true,
    'rotatemove': true,
    'rotateend': true,
    'rotatecancel': true,
    // swipe
    'swipe': true,
    'swipeleft': true,
    'swiperight': true,
    'swipeup': true,
    'swipedown': true,
    // tap
    'tap': true,
};
/**
 * A DI token that you can use to provide{\@link HammerGestureConfig} to Angular. Use it to configure
 * Hammer gestures.
 *
 * \@experimental
 */
var HAMMER_GESTURE_CONFIG = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('HammerGestureConfig');
/**
 * @record
 */

/**
 * \@experimental
 */
var HammerGestureConfig = /** @class */ (function () {
    function HammerGestureConfig() {
        this.events = [];
        this.overrides = {};
    }
    /**
     * @param {?} element
     * @return {?}
     */
    HammerGestureConfig.prototype.buildHammer = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ mc = new Hammer(element);
        mc.get('pinch').set({ enable: true });
        mc.get('rotate').set({ enable: true });
        for (var /** @type {?} */ eventName in this.overrides) {
            mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
    };
    HammerGestureConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HammerGestureConfig.ctorParameters = function () { return []; };
    return HammerGestureConfig;
}());
var HammerGesturesPlugin = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(HammerGesturesPlugin, _super);
    function HammerGesturesPlugin(doc, _config) {
        var _this = _super.call(this, doc) || this;
        _this._config = _config;
        return _this;
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    HammerGesturesPlugin.prototype.supports = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
            return false;
        }
        if (!(/** @type {?} */ (window)).Hammer) {
            throw new Error("Hammer.js is not loaded, can not bind " + eventName + " event");
        }
        return true;
    };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    HammerGesturesPlugin.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var _this = this;
        var /** @type {?} */ zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        return zone.runOutsideAngular(function () {
            // Creating the manager bind events, must be done outside of angular
            var /** @type {?} */ mc = _this._config.buildHammer(element);
            var /** @type {?} */ callback = function (eventObj) {
                zone.runGuarded(function () { handler(eventObj); });
            };
            mc.on(eventName, callback);
            return function () { return mc.off(eventName, callback); };
        });
    };
    /**
     * @param {?} eventName
     * @return {?}
     */
    HammerGesturesPlugin.prototype.isCustomEvent = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return this._config.events.indexOf(eventName) > -1; };
    HammerGesturesPlugin.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HammerGesturesPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [DOCUMENT$1,] },] },
        { type: HammerGestureConfig, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [HAMMER_GESTURE_CONFIG,] },] },
    ]; };
    return HammerGesturesPlugin;
}(EventManagerPlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
var ɵ0$1 = function (event) { return event.altKey; };
var ɵ1$1 = function (event) { return event.ctrlKey; };
var ɵ2$1 = function (event) { return event.metaKey; };
var ɵ3 = function (event) { return event.shiftKey; };
var MODIFIER_KEY_GETTERS = {
    'alt': ɵ0$1,
    'control': ɵ1$1,
    'meta': ɵ2$1,
    'shift': ɵ3
};
/**
 * \@experimental
 */
var KeyEventsPlugin = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(KeyEventsPlugin, _super);
    function KeyEventsPlugin(doc) {
        return _super.call(this, doc) || this;
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    KeyEventsPlugin.prototype.supports = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return KeyEventsPlugin.parseEventName(eventName) != null; };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    KeyEventsPlugin.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var /** @type {?} */ parsedEvent = /** @type {?} */ ((KeyEventsPlugin.parseEventName(eventName)));
        var /** @type {?} */ outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
        return this.manager.getZone().runOutsideAngular(function () {
            return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
        });
    };
    /**
     * @param {?} eventName
     * @return {?}
     */
    KeyEventsPlugin.parseEventName = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        var /** @type {?} */ parts = eventName.toLowerCase().split('.');
        var /** @type {?} */ domEventName = parts.shift();
        if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
            return null;
        }
        var /** @type {?} */ key = KeyEventsPlugin._normalizeKey(/** @type {?} */ ((parts.pop())));
        var /** @type {?} */ fullKey = '';
        MODIFIER_KEYS.forEach(function (modifierName) {
            var /** @type {?} */ index = parts.indexOf(modifierName);
            if (index > -1) {
                parts.splice(index, 1);
                fullKey += modifierName + '.';
            }
        });
        fullKey += key;
        if (parts.length != 0 || key.length === 0) {
            // returning null instead of throwing to let another plugin process the event
            return null;
        }
        var /** @type {?} */ result = {};
        result['domEventName'] = domEventName;
        result['fullKey'] = fullKey;
        return result;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    KeyEventsPlugin.getEventFullKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ fullKey = '';
        var /** @type {?} */ key = getDOM().getEventKey(event);
        key = key.toLowerCase();
        if (key === ' ') {
            key = 'space'; // for readability
        }
        else if (key === '.') {
            key = 'dot'; // because '.' is used as a separator in event names
        }
        MODIFIER_KEYS.forEach(function (modifierName) {
            if (modifierName != key) {
                var /** @type {?} */ modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                if (modifierGetter(event)) {
                    fullKey += modifierName + '.';
                }
            }
        });
        fullKey += key;
        return fullKey;
    };
    /**
     * @param {?} fullKey
     * @param {?} handler
     * @param {?} zone
     * @return {?}
     */
    KeyEventsPlugin.eventCallback = /**
     * @param {?} fullKey
     * @param {?} handler
     * @param {?} zone
     * @return {?}
     */
    function (fullKey, handler, zone) {
        return function (event /** TODO #9100 */) {
            if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
                zone.runGuarded(function () { return handler(event); });
            }
        };
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} keyName
     * @return {?}
     */
    KeyEventsPlugin._normalizeKey = /**
     * \@internal
     * @param {?} keyName
     * @return {?}
     */
    function (keyName) {
        // TODO: switch to a Map if the mapping grows too much
        switch (keyName) {
            case 'esc':
                return 'escape';
            default:
                return keyName;
        }
    };
    KeyEventsPlugin.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    KeyEventsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [DOCUMENT$1,] },] },
    ]; };
    return KeyEventsPlugin;
}(EventManagerPlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This helper class is used to get hold of an inert tree of DOM elements containing dirty HTML
 * that needs sanitizing.
 * Depending upon browser support we must use one of three strategies for doing this.
 * Support: Safari 10.x -> XHR strategy
 * Support: Firefox -> DomParser strategy
 * Default: InertDocument strategy
 */
var InertBodyHelper = /** @class */ (function () {
    function InertBodyHelper(defaultDoc, DOM) {
        this.defaultDoc = defaultDoc;
        this.DOM = DOM;
        var /** @type {?} */ inertDocument = this.DOM.createHtmlDocument();
        this.inertBodyElement = inertDocument.body;
        if (this.inertBodyElement == null) {
            // usually there should be only one body element in the document, but IE doesn't have any, so
            // we need to create one.
            var /** @type {?} */ inertHtml = this.DOM.createElement('html', inertDocument);
            this.inertBodyElement = this.DOM.createElement('body', inertDocument);
            this.DOM.appendChild(inertHtml, this.inertBodyElement);
            this.DOM.appendChild(inertDocument, inertHtml);
        }
        this.DOM.setInnerHTML(this.inertBodyElement, '<svg><g onload="this.parentNode.remove()"></g></svg>');
        if (this.inertBodyElement.querySelector && !this.inertBodyElement.querySelector('svg')) {
            // We just hit the Safari 10.1 bug - which allows JS to run inside the SVG G element
            // so use the XHR strategy.
            this.getInertBodyElement = this.getInertBodyElement_XHR;
            return;
        }
        this.DOM.setInnerHTML(this.inertBodyElement, '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');
        if (this.inertBodyElement.querySelector && this.inertBodyElement.querySelector('svg img')) {
            // We just hit the Firefox bug - which prevents the inner img JS from being sanitized
            // so use the DOMParser strategy, if it is available.
            // If the DOMParser is not available then we are not in Firefox (Server/WebWorker?) so we
            // fall through to the default strategy below.
            if (isDOMParserAvailable()) {
                this.getInertBodyElement = this.getInertBodyElement_DOMParser;
                return;
            }
        }
        // None of the bugs were hit so it is safe for us to use the default InertDocument strategy
        this.getInertBodyElement = this.getInertBodyElement_InertDocument;
    }
    /**
     * Use XHR to create and fill an inert body element (on Safari 10.1)
     * See
     * https://github.com/cure53/DOMPurify/blob/a992d3a75031cb8bb032e5ea8399ba972bdf9a65/src/purify.js#L439-L449
     * @param {?} html
     * @return {?}
     */
    InertBodyHelper.prototype.getInertBodyElement_XHR = /**
     * Use XHR to create and fill an inert body element (on Safari 10.1)
     * See
     * https://github.com/cure53/DOMPurify/blob/a992d3a75031cb8bb032e5ea8399ba972bdf9a65/src/purify.js#L439-L449
     * @param {?} html
     * @return {?}
     */
    function (html) {
        // We add these extra elements to ensure that the rest of the content is parsed as expected
        // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the
        // `<head>` tag.
        html = '<body><remove></remove>' + html + '</body>';
        try {
            html = encodeURI(html);
        }
        catch (/** @type {?} */ e) {
            return null;
        }
        var /** @type {?} */ xhr = new XMLHttpRequest();
        xhr.responseType = 'document';
        xhr.open('GET', 'data:text/html;charset=utf-8,' + html, false);
        xhr.send(null);
        var /** @type {?} */ body = xhr.response.body;
        body.removeChild(/** @type {?} */ ((body.firstChild)));
        return body;
    };
    /**
     * Use DOMParser to create and fill an inert body element (on Firefox)
     * See https://github.com/cure53/DOMPurify/releases/tag/0.6.7
     *
     * @param {?} html
     * @return {?}
     */
    InertBodyHelper.prototype.getInertBodyElement_DOMParser = /**
     * Use DOMParser to create and fill an inert body element (on Firefox)
     * See https://github.com/cure53/DOMPurify/releases/tag/0.6.7
     *
     * @param {?} html
     * @return {?}
     */
    function (html) {
        // We add these extra elements to ensure that the rest of the content is parsed as expected
        // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the
        // `<head>` tag.
        html = '<body><remove></remove>' + html + '</body>';
        try {
            var /** @type {?} */ body = /** @type {?} */ (new (/** @type {?} */ (window))
                .DOMParser()
                .parseFromString(html, 'text/html')
                .body);
            body.removeChild(/** @type {?} */ ((body.firstChild)));
            return body;
        }
        catch (/** @type {?} */ e) {
            return null;
        }
    };
    /**
     * Use an HTML5 `template` element, if supported, or an inert body element created via
     * `createHtmlDocument` to create and fill an inert DOM element.
     * This is the default sane strategy to use if the browser does not require one of the specialised
     * strategies above.
     * @param {?} html
     * @return {?}
     */
    InertBodyHelper.prototype.getInertBodyElement_InertDocument = /**
     * Use an HTML5 `template` element, if supported, or an inert body element created via
     * `createHtmlDocument` to create and fill an inert DOM element.
     * This is the default sane strategy to use if the browser does not require one of the specialised
     * strategies above.
     * @param {?} html
     * @return {?}
     */
    function (html) {
        // Prefer using <template> element if supported.
        var /** @type {?} */ templateEl = this.DOM.createElement('template');
        if ('content' in templateEl) {
            this.DOM.setInnerHTML(templateEl, html);
            return templateEl;
        }
        this.DOM.setInnerHTML(this.inertBodyElement, html);
        // Support: IE 9-11 only
        // strip custom-namespaced attributes on IE<=11
        if (this.defaultDoc.documentMode) {
            this.stripCustomNsAttrs(this.inertBodyElement);
        }
        return this.inertBodyElement;
    };
    /**
     * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
     * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g.
     * 'ns1:xlink:foo').
     *
     * This is undesirable since we don't want to allow any of these custom attributes. This method
     * strips them all.
     * @param {?} el
     * @return {?}
     */
    InertBodyHelper.prototype.stripCustomNsAttrs = /**
     * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
     * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g.
     * 'ns1:xlink:foo').
     *
     * This is undesirable since we don't want to allow any of these custom attributes. This method
     * strips them all.
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var _this = this;
        this.DOM.attributeMap(el).forEach(function (_, attrName) {
            if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
                _this.DOM.removeAttribute(el, attrName);
            }
        });
        for (var _i = 0, _a = this.DOM.childNodesAsList(el); _i < _a.length; _i++) {
            var n = _a[_i];
            if (this.DOM.isElementNode(n))
                this.stripCustomNsAttrs(/** @type {?} */ (n));
        }
    };
    return InertBodyHelper;
}());
/**
 * We need to determine whether the DOMParser exists in the global context.
 * The try-catch is because, on some browsers, trying to access this property
 * on window can actually throw an error.
 *
 * @suppress {uselessCode}
 * @return {?}
 */
function isDOMParserAvailable() {
    try {
        return !!(/** @type {?} */ (window)).DOMParser;
    }
    catch (/** @type {?} */ e) {
        return false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * This regular expression matches a subset of URLs that will not cause script
 * execution if used in URL context within a HTML document. Specifically, this
 * regular expression matches if (comment from here on and regex copied from
 * Soy's EscapingConventions):
 * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
 * (2) or no protocol.  A protocol must be followed by a colon. The below
 *     allows that by allowing colons only after one of the characters [/?#].
 *     A colon after a hash (#) must be in the fragment.
 *     Otherwise, a colon after a (?) must be in a query.
 *     Otherwise, a colon after a single solidus (/) must be in a path.
 *     Otherwise, a colon after a double solidus (//) must be in the authority
 *     (before port).
 *
 * The pattern disallows &, used in HTML entity declarations before
 * one of the characters in [/?#]. This disallows HTML entities used in the
 * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
 * It also disallows HTML entities in the first path part of a relative path,
 * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
 * that. More importantly, it disallows masking of a colon,
 * e.g. "javascript&#58;...".
 *
 * This regular expression was taken from the Closure sanitization library.
 */
var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 */
var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
/**
 * @param {?} url
 * @return {?}
 */
function sanitizeUrl(url) {
    url = String(url);
    if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN))
        return url;
    if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["isDevMode"])()) {
        getDOM().log("WARNING: sanitizing unsafe URL value " + url + " (see http://g.co/ng/security#xss)");
    }
    return 'unsafe:' + url;
}
/**
 * @param {?} srcset
 * @return {?}
 */
function sanitizeSrcset(srcset) {
    srcset = String(srcset);
    return srcset.split(',').map(function (srcset) { return sanitizeUrl(srcset.trim()); }).join(', ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} tags
 * @return {?}
 */
function tagSet(tags) {
    var /** @type {?} */ res = {};
    for (var _i = 0, _a = tags.split(','); _i < _a.length; _i++) {
        var t = _a[_i];
        res[t] = true;
    }
    return res;
}
/**
 * @param {...?} sets
 * @return {?}
 */
function merge() {
    var sets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sets[_i] = arguments[_i];
    }
    var /** @type {?} */ res = {};
    for (var _a = 0, sets_1 = sets; _a < sets_1.length; _a++) {
        var s = sets_1[_a];
        for (var /** @type {?} */ v in s) {
            if (s.hasOwnProperty(v))
                res[v] = true;
        }
    }
    return res;
}
// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements
// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
var VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
// Safe Block Elements - HTML5
var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
    'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
    'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
// Inline Elements - HTML5
var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
    'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
    'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
// Attributes that have href and hence need to be sanitized
var URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
// Attributes that have special href set hence need to be sanitized
var SRCSET_ATTRS = tagSet('srcset');
var HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
    'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' +
    'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' +
    'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' +
    'valign,value,vspace,width');
// NB: This currently consciously doesn't support SVG. SVG sanitization has had several security
// issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
// innerHTML is required, SVG attributes should be added here.
// NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
// can be sanitized, but they increase security surface area without a legitimate use case, so they
// are left out here.
var VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
/**
 * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
 * attributes.
 */
var SanitizingHtmlSerializer = /** @class */ (function () {
    function SanitizingHtmlSerializer() {
        this.sanitizedSomething = false;
        this.buf = [];
        this.DOM = getDOM();
    }
    /**
     * @param {?} el
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.sanitizeChildren = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
        // However this code never accesses properties off of `document` before deleting its contents
        // again, so it shouldn't be vulnerable to DOM clobbering.
        var /** @type {?} */ current = /** @type {?} */ ((this.DOM.firstChild(el)));
        while (current) {
            if (this.DOM.isElementNode(current)) {
                this.startElement(/** @type {?} */ (current));
            }
            else if (this.DOM.isTextNode(current)) {
                this.chars(/** @type {?} */ ((this.DOM.nodeValue(current))));
            }
            else {
                // Strip non-element, non-text nodes.
                this.sanitizedSomething = true;
            }
            if (this.DOM.firstChild(current)) {
                current = /** @type {?} */ ((this.DOM.firstChild(current)));
                continue;
            }
            while (current) {
                // Leaving the element. Walk up and to the right, closing tags as we go.
                if (this.DOM.isElementNode(current)) {
                    this.endElement(/** @type {?} */ (current));
                }
                var /** @type {?} */ next = this.checkClobberedElement(current, /** @type {?} */ ((this.DOM.nextSibling(current))));
                if (next) {
                    current = next;
                    break;
                }
                current = this.checkClobberedElement(current, /** @type {?} */ ((this.DOM.parentElement(current))));
            }
        }
        return this.buf.join('');
    };
    /**
     * @param {?} element
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.startElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        var /** @type {?} */ tagName = this.DOM.nodeName(element).toLowerCase();
        if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
            this.sanitizedSomething = true;
            return;
        }
        this.buf.push('<');
        this.buf.push(tagName);
        this.DOM.attributeMap(element).forEach(function (value, attrName) {
            var /** @type {?} */ lower = attrName.toLowerCase();
            if (!VALID_ATTRS.hasOwnProperty(lower)) {
                _this.sanitizedSomething = true;
                return;
            }
            // TODO(martinprobst): Special case image URIs for data:image/...
            if (URI_ATTRS[lower])
                value = sanitizeUrl(value);
            if (SRCSET_ATTRS[lower])
                value = sanitizeSrcset(value);
            _this.buf.push(' ');
            _this.buf.push(attrName);
            _this.buf.push('="');
            _this.buf.push(encodeEntities(value));
            _this.buf.push('"');
        });
        this.buf.push('>');
    };
    /**
     * @param {?} current
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.endElement = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var /** @type {?} */ tagName = this.DOM.nodeName(current).toLowerCase();
        if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
            this.buf.push('</');
            this.buf.push(tagName);
            this.buf.push('>');
        }
    };
    /**
     * @param {?} chars
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.chars = /**
     * @param {?} chars
     * @return {?}
     */
    function (chars) { this.buf.push(encodeEntities(chars)); };
    /**
     * @param {?} node
     * @param {?} nextNode
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.checkClobberedElement = /**
     * @param {?} node
     * @param {?} nextNode
     * @return {?}
     */
    function (node, nextNode) {
        if (nextNode && this.DOM.contains(node, nextNode)) {
            throw new Error("Failed to sanitize html because the element is clobbered: " + this.DOM.getOuterHTML(node));
        }
        return nextNode;
    };
    return SanitizingHtmlSerializer;
}());
// Regular Expressions for parsing tags and attributes
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param {?} value
 * @return {?}
 */
function encodeEntities(value) {
    return value.replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, function (match) {
        var /** @type {?} */ hi = match.charCodeAt(0);
        var /** @type {?} */ low = match.charCodeAt(1);
        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    })
        .replace(NON_ALPHANUMERIC_REGEXP, function (match) { return '&#' + match.charCodeAt(0) + ';'; })
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
var inertBodyHelper;
/**
 * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
 * the DOM in a browser environment.
 * @param {?} defaultDoc
 * @param {?} unsafeHtmlInput
 * @return {?}
 */
function sanitizeHtml(defaultDoc, unsafeHtmlInput) {
    var /** @type {?} */ DOM = getDOM();
    var /** @type {?} */ inertBodyElement = null;
    try {
        inertBodyHelper = inertBodyHelper || new InertBodyHelper(defaultDoc, DOM);
        // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
        var /** @type {?} */ unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
        inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
        // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
        // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
        var /** @type {?} */ mXSSAttempts = 5;
        var /** @type {?} */ parsedHtml = unsafeHtml;
        do {
            if (mXSSAttempts === 0) {
                throw new Error('Failed to sanitize html because the input is unstable');
            }
            mXSSAttempts--;
            unsafeHtml = parsedHtml;
            parsedHtml = DOM.getInnerHTML(inertBodyElement);
            inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
        } while (unsafeHtml !== parsedHtml);
        var /** @type {?} */ sanitizer = new SanitizingHtmlSerializer();
        var /** @type {?} */ safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(inertBodyElement) || inertBodyElement);
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["isDevMode"])() && sanitizer.sanitizedSomething) {
            DOM.log('WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).');
        }
        return safeHtml;
    }
    finally {
        // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
        if (inertBodyElement) {
            var /** @type {?} */ parent_1 = DOM.getTemplateContent(inertBodyElement) || inertBodyElement;
            for (var _i = 0, _a = DOM.childNodesAsList(parent_1); _i < _a.length; _i++) {
                var child = _a[_i];
                DOM.removeChild(parent_1, child);
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Regular expression for safe style values.
 *
 * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
 *
 * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
 * font-family) and hence could allow multiple values to get injected, but that should pose no risk
 * of XSS.
 *
 * The function expression checks only for XSS safety, not for CSS validity.
 *
 * This regular expression was taken from the Closure sanitization library, and augmented for
 * transformation values.
 */
var VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
var TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
var COLOR_FNS = '(?:rgb|hsl)a?';
var GRADIENTS = '(?:repeating-)?(?:linear|radial)-gradient';
var CSS3_FNS = '(?:calc|attr)';
var FN_ARGS = '\\([-0-9.%, #a-zA-Z]+\\)';
var SAFE_STYLE_VALUE = new RegExp("^(" + VALUES + "|" +
    ("(?:" + TRANSFORMATION_FNS + "|" + COLOR_FNS + "|" + GRADIENTS + "|" + CSS3_FNS + ")") +
    (FN_ARGS + ")$"), 'g');
/**
 * Matches a `url(...)` value with an arbitrary argument as long as it does
 * not contain parentheses.
 *
 * The URL value still needs to be sanitized separately.
 *
 * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
 * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
 * by observing whether scroll bars are displayed, or character ranges used by a font face
 * definition.
 *
 * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
 * binding a URL value without further cooperation from the page will cause an information leak, and
 * if so, it is just a leak, not a full blown XSS vulnerability.
 *
 * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
 * code is permissive and allows URLs that sanitize otherwise.
 */
var URL_RE = /^url\(([^)]+)\)$/;
/**
 * Checks that quotes (" and ') are properly balanced inside a string. Assumes
 * that neither escape (\) nor any other character that could result in
 * breaking out of a string parsing context are allowed;
 * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
 *
 * This code was taken from the Closure sanitization library.
 * @param {?} value
 * @return {?}
 */
function hasBalancedQuotes(value) {
    var /** @type {?} */ outsideSingle = true;
    var /** @type {?} */ outsideDouble = true;
    for (var /** @type {?} */ i = 0; i < value.length; i++) {
        var /** @type {?} */ c = value.charAt(i);
        if (c === '\'' && outsideDouble) {
            outsideSingle = !outsideSingle;
        }
        else if (c === '"' && outsideSingle) {
            outsideDouble = !outsideDouble;
        }
    }
    return outsideSingle && outsideDouble;
}
/**
 * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
 * value) and returns a value that is safe to use in a browser environment.
 * @param {?} value
 * @return {?}
 */
function sanitizeStyle(value) {
    value = String(value).trim(); // Make sure it's actually a string.
    if (!value)
        return '';
    // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
    // reasoning behind this.
    var /** @type {?} */ urlMatch = value.match(URL_RE);
    if ((urlMatch && sanitizeUrl(urlMatch[1]) === urlMatch[1]) ||
        value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
        return value; // Safe style values.
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["isDevMode"])()) {
        getDOM().log("WARNING: sanitizing unsafe style value " + value + " (see http://g.co/ng/security#xss).");
    }
    return 'unsafe';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Marker interface for a value that's safe to use in a particular context.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as HTML.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as style (CSS).
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as JavaScript.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as a URL linking to a document.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as a URL to load executable code from.
 *
 * \@stable
 * @record
 */

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * \@security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](http://g.co/ng/security).
 *
 * \@stable
 * @abstract
 */
var DomSanitizer = /** @class */ (function () {
    function DomSanitizer() {
    }
    return DomSanitizer;
}());
var DomSanitizerImpl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(DomSanitizerImpl, _super);
    function DomSanitizerImpl(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        return _this;
    }
    /**
     * @param {?} ctx
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.sanitize = /**
     * @param {?} ctx
     * @param {?} value
     * @return {?}
     */
    function (ctx, value) {
        if (value == null)
            return null;
        switch (ctx) {
            case __WEBPACK_IMPORTED_MODULE_1__angular_core__["SecurityContext"].NONE:
                return /** @type {?} */ (value);
            case __WEBPACK_IMPORTED_MODULE_1__angular_core__["SecurityContext"].HTML:
                if (value instanceof SafeHtmlImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'HTML');
                return sanitizeHtml(this._doc, String(value));
            case __WEBPACK_IMPORTED_MODULE_1__angular_core__["SecurityContext"].STYLE:
                if (value instanceof SafeStyleImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'Style');
                return sanitizeStyle(/** @type {?} */ (value));
            case __WEBPACK_IMPORTED_MODULE_1__angular_core__["SecurityContext"].SCRIPT:
                if (value instanceof SafeScriptImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'Script');
                throw new Error('unsafe value used in a script context');
            case __WEBPACK_IMPORTED_MODULE_1__angular_core__["SecurityContext"].URL:
                if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
                    // Allow resource URLs in URL contexts, they are strictly more trusted.
                    return value.changingThisBreaksApplicationSecurity;
                }
                this.checkNotSafeValue(value, 'URL');
                return sanitizeUrl(String(value));
            case __WEBPACK_IMPORTED_MODULE_1__angular_core__["SecurityContext"].RESOURCE_URL:
                if (value instanceof SafeResourceUrlImpl) {
                    return value.changingThisBreaksApplicationSecurity;
                }
                this.checkNotSafeValue(value, 'ResourceURL');
                throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
            default:
                throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
        }
    };
    /**
     * @param {?} value
     * @param {?} expectedType
     * @return {?}
     */
    DomSanitizerImpl.prototype.checkNotSafeValue = /**
     * @param {?} value
     * @param {?} expectedType
     * @return {?}
     */
    function (value, expectedType) {
        if (value instanceof SafeValueImpl) {
            throw new Error("Required a safe " + expectedType + ", got a " + value.getTypeName() + " " +
                "(see http://g.co/ng/security#xss)");
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustHtml = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeHtmlImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustStyle = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeStyleImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustScript = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeScriptImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustUrl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeUrlImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return new SafeResourceUrlImpl(value);
    };
    DomSanitizerImpl.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DomSanitizerImpl.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [DOCUMENT$1,] },] },
    ]; };
    return DomSanitizerImpl;
}(DomSanitizer));
/**
 * @abstract
 */
var SafeValueImpl = /** @class */ (function () {
    function SafeValueImpl(changingThisBreaksApplicationSecurity) {
        // empty
        this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
    }
    /**
     * @return {?}
     */
    SafeValueImpl.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)";
    };
    return SafeValueImpl;
}());
var SafeHtmlImpl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(SafeHtmlImpl, _super);
    function SafeHtmlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeHtmlImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'HTML'; };
    return SafeHtmlImpl;
}(SafeValueImpl));
var SafeStyleImpl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(SafeStyleImpl, _super);
    function SafeStyleImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeStyleImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'Style'; };
    return SafeStyleImpl;
}(SafeValueImpl));
var SafeScriptImpl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(SafeScriptImpl, _super);
    function SafeScriptImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeScriptImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'Script'; };
    return SafeScriptImpl;
}(SafeValueImpl));
var SafeUrlImpl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(SafeUrlImpl, _super);
    function SafeUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeUrlImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'URL'; };
    return SafeUrlImpl;
}(SafeValueImpl));
var SafeResourceUrlImpl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["b" /* __extends */])(SafeResourceUrlImpl, _super);
    function SafeResourceUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeResourceUrlImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'ResourceURL'; };
    return SafeResourceUrlImpl;
}(SafeValueImpl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
    { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"], useValue: __WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* ɵPLATFORM_BROWSER_ID */] },
    { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_INITIALIZER"], useValue: initDomAdapter, multi: true },
    { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* PlatformLocation */], useClass: BrowserPlatformLocation, deps: [DOCUMENT$1] },
    { provide: DOCUMENT$1, useFactory: _document, deps: [] },
];
/**
 * \@security Replacing built-in sanitization providers exposes the application to XSS risks.
 * Attacker-controlled data introduced by an unsanitized provider could expose your
 * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
 * \@experimental
 */
var BROWSER_SANITIZATION_PROVIDERS = [
    { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Sanitizer"], useExisting: DomSanitizer },
    { provide: DomSanitizer, useClass: DomSanitizerImpl, deps: [DOCUMENT$1] },
];
/**
 * \@stable
 */
var platformBrowser = Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["createPlatformFactory"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["platformCore"], 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
/**
 * @return {?}
 */
function initDomAdapter() {
    BrowserDomAdapter.makeCurrent();
    BrowserGetTestability.init();
}
/**
 * @return {?}
 */
function errorHandler() {
    return new __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"]();
}
/**
 * @return {?}
 */
function _document() {
    return document;
}
/**
 * The ng module for the browser.
 *
 * \@stable
 */
var BrowserModule = /** @class */ (function () {
    function BrowserModule(parentModule) {
        if (parentModule) {
            throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
        }
    }
    /**
     * Configures a browser-based application to transition from a server-rendered app, if
     * one is present on the page. The specified parameters must include an application id,
     * which must match between the client and server applications.
     *
     * @experimental
     */
    /**
     * Configures a browser-based application to transition from a server-rendered app, if
     * one is present on the page. The specified parameters must include an application id,
     * which must match between the client and server applications.
     *
     * \@experimental
     * @param {?} params
     * @return {?}
     */
    BrowserModule.withServerTransition = /**
     * Configures a browser-based application to transition from a server-rendered app, if
     * one is present on the page. The specified parameters must include an application id,
     * which must match between the client and server applications.
     *
     * \@experimental
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return {
            ngModule: BrowserModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_ID"], useValue: params.appId },
                { provide: TRANSITION_ID, useExisting: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_ID"] },
                SERVER_TRANSITION_PROVIDERS,
            ],
        };
    };
    BrowserModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    providers: [
                        BROWSER_SANITIZATION_PROVIDERS,
                        { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useFactory: errorHandler, deps: [] },
                        { provide: EVENT_MANAGER_PLUGINS, useClass: DomEventsPlugin, multi: true },
                        { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true },
                        { provide: EVENT_MANAGER_PLUGINS, useClass: HammerGesturesPlugin, multi: true },
                        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
                        DomRendererFactory2,
                        { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["RendererFactory2"], useExisting: DomRendererFactory2 },
                        { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
                        DomSharedStylesHost,
                        __WEBPACK_IMPORTED_MODULE_1__angular_core__["Testability"],
                        EventManager,
                        ELEMENT_PROBE_PROVIDERS,
                        Meta,
                        Title,
                    ],
                    exports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationModule"]]
                },] },
    ];
    /** @nocollapse */
    BrowserModule.ctorParameters = function () { return [
        { type: BrowserModule, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"] },] },
    ]; };
    return BrowserModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var win = typeof window !== 'undefined' && window || /** @type {?} */ ({});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ChangeDetectionPerfRecord = /** @class */ (function () {
    function ChangeDetectionPerfRecord(msPerTick, numTicks) {
        this.msPerTick = msPerTick;
        this.numTicks = numTicks;
    }
    return ChangeDetectionPerfRecord;
}());
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
var AngularProfiler = /** @class */ (function () {
    function AngularProfiler(ref) {
        this.appRef = ref.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
    }
    // tslint:disable:no-console
    /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     */
    /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     * @param {?} config
     * @return {?}
     */
    AngularProfiler.prototype.timeChangeDetection = /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var /** @type {?} */ record = config && config['record'];
        var /** @type {?} */ profileName = 'Change Detection';
        // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
        var /** @type {?} */ isProfilerAvailable = win.console.profile != null;
        if (record && isProfilerAvailable) {
            win.console.profile(profileName);
        }
        var /** @type {?} */ start = getDOM().performanceNow();
        var /** @type {?} */ numTicks = 0;
        while (numTicks < 5 || (getDOM().performanceNow() - start) < 500) {
            this.appRef.tick();
            numTicks++;
        }
        var /** @type {?} */ end = getDOM().performanceNow();
        if (record && isProfilerAvailable) {
            // need to cast to <any> because type checker thinks there's no argument
            // while in fact there is:
            //
            // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
            (/** @type {?} */ (win.console.profileEnd))(profileName);
        }
        var /** @type {?} */ msPerTick = (end - start) / numTicks;
        win.console.log("ran " + numTicks + " change detection cycles");
        win.console.log(msPerTick.toFixed(2) + " ms per check");
        return new ChangeDetectionPerfRecord(msPerTick, numTicks);
    };
    return AngularProfiler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * \@experimental All debugging apis are currently experimental.
 * @template T
 * @param {?} ref
 * @return {?}
 */
function enableDebugTools(ref) {
    exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
    return ref;
}
/**
 * Disables Angular tools.
 *
 * \@experimental All debugging apis are currently experimental.
 * @return {?}
 */
function disableDebugTools() {
    exportNgVar(PROFILER_GLOBAL_NAME, null);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} text
 * @return {?}
 */
function escapeHtml(text) {
    var /** @type {?} */ escapedText = {
        '&': '&a;',
        '"': '&q;',
        '\'': '&s;',
        '<': '&l;',
        '>': '&g;',
    };
    return text.replace(/[&"'<>]/g, function (s) { return escapedText[s]; });
}
/**
 * @param {?} text
 * @return {?}
 */
function unescapeHtml(text) {
    var /** @type {?} */ unescapedText = {
        '&a;': '&',
        '&q;': '"',
        '&s;': '\'',
        '&l;': '<',
        '&g;': '>',
    };
    return text.replace(/&[^;]+;/g, function (s) { return unescapedText[s]; });
}
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * \@experimental
 * @template T
 * @param {?} key
 * @return {?}
 */
function makeStateKey(key) {
    return /** @type {?} */ (key);
}
/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * `TransferState` will be available as an injectable token. To use it import
 * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialzied in a
 * non-lossy manner.
 *
 * \@experimental
 */
var TransferState = /** @class */ (function () {
    function TransferState() {
        this.store = {};
        this.onSerializeCallbacks = {};
    }
    /** @internal */
    /**
     * \@internal
     * @param {?} initState
     * @return {?}
     */
    TransferState.init = /**
     * \@internal
     * @param {?} initState
     * @return {?}
     */
    function (initState) {
        var /** @type {?} */ transferState = new TransferState();
        transferState.store = initState;
        return transferState;
    };
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     */
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     * @template T
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    TransferState.prototype.get = /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     * @template T
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    function (key, defaultValue) {
        return this.store[key] !== undefined ? /** @type {?} */ (this.store[key]) : defaultValue;
    };
    /**
     * Set the value corresponding to a key.
     */
    /**
     * Set the value corresponding to a key.
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    TransferState.prototype.set = /**
     * Set the value corresponding to a key.
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) { this.store[key] = value; };
    /**
     * Remove a key from the store.
     */
    /**
     * Remove a key from the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    TransferState.prototype.remove = /**
     * Remove a key from the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) { delete this.store[key]; };
    /**
     * Test whether a key exists in the store.
     */
    /**
     * Test whether a key exists in the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    TransferState.prototype.hasKey = /**
     * Test whether a key exists in the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) { return this.store.hasOwnProperty(key); };
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     */
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    TransferState.prototype.onSerialize = /**
     * Register a callback to provide the value for a key when `toJson` is called.
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    function (key, callback) {
        this.onSerializeCallbacks[key] = callback;
    };
    /**
     * Serialize the current state of the store to JSON.
     */
    /**
     * Serialize the current state of the store to JSON.
     * @return {?}
     */
    TransferState.prototype.toJson = /**
     * Serialize the current state of the store to JSON.
     * @return {?}
     */
    function () {
        // Call the onSerialize callbacks and put those values into the store.
        for (var /** @type {?} */ key in this.onSerializeCallbacks) {
            if (this.onSerializeCallbacks.hasOwnProperty(key)) {
                try {
                    this.store[key] = this.onSerializeCallbacks[key]();
                }
                catch (/** @type {?} */ e) {
                    console.warn('Exception in onSerialize callback: ', e);
                }
            }
        }
        return JSON.stringify(this.store);
    };
    TransferState.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TransferState.ctorParameters = function () { return []; };
    return TransferState;
}());
/**
 * @param {?} doc
 * @param {?} appId
 * @return {?}
 */
function initTransferState(doc, appId) {
    // Locate the script tag with the JSON data transferred from the server.
    // The id of the script tag is set to the Angular appId + 'state'.
    var /** @type {?} */ script = doc.getElementById(appId + '-state');
    var /** @type {?} */ initialState = {};
    if (script && script.textContent) {
        try {
            initialState = JSON.parse(unescapeHtml(script.textContent));
        }
        catch (/** @type {?} */ e) {
            console.warn('Exception while restoring TransferState for app ' + appId, e);
        }
    }
    return TransferState.init(initialState);
}
/**
 * NgModule to install on the client side while using the `TransferState` to transfer state from
 * server to client.
 *
 * \@experimental
 */
var BrowserTransferStateModule = /** @class */ (function () {
    function BrowserTransferStateModule() {
    }
    BrowserTransferStateModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    providers: [{ provide: TransferState, useFactory: initTransferState, deps: [DOCUMENT$1, __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_ID"]] }],
                },] },
    ];
    /** @nocollapse */
    BrowserTransferStateModule.ctorParameters = function () { return []; };
    return BrowserTransferStateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Predicates for use with {\@link DebugElement}'s query functions.
 *
 * \@experimental All debugging apis are currently experimental.
 */
var By = /** @class */ (function () {
    function By() {
    }
    /**
     * Match all elements.
     *
     * ## Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     */
    /**
     * Match all elements.
     *
     * ## Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     * @return {?}
     */
    By.all = /**
     * Match all elements.
     *
     * ## Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     * @return {?}
     */
    function () { return function (debugElement) { return true; }; };
    /**
     * Match elements by the given CSS selector.
     *
     * ## Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     */
    /**
     * Match elements by the given CSS selector.
     *
     * ## Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     * @param {?} selector
     * @return {?}
     */
    By.css = /**
     * Match elements by the given CSS selector.
     *
     * ## Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        return function (debugElement) {
            return debugElement.nativeElement != null ?
                getDOM().elementMatches(debugElement.nativeElement, selector) :
                false;
        };
    };
    /**
     * Match elements that have the given directive present.
     *
     * ## Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     */
    /**
     * Match elements that have the given directive present.
     *
     * ## Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     * @param {?} type
     * @return {?}
     */
    By.directive = /**
     * Match elements that have the given directive present.
     *
     * ## Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return function (debugElement) { return ((debugElement.providerTokens)).indexOf(type) !== -1; };
    };
    return By;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Version"]('5.2.11');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=platform-browser.js.map


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_SendSmsMessageEditorComponent */
/* unused harmony export View_SendSmsMessageEditorComponent_0 */
/* unused harmony export View_SendSmsMessageEditorComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendSmsMessageEditorComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_sms_message_editor_component__ = __webpack_require__(8);



var styles_SendSmsMessageEditorComponent = [""];
var RenderType_SendSmsMessageEditorComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_SendSmsMessageEditorComponent, data: {} });

function View_SendSmsMessageEditorComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 20, "section", [["class", "content"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 17, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 14, "div", [["class", "row send-sms-message-editor"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 1, "label", [["class", "col-12 title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Message to send"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](10, 0, null, null, 8, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](12, 0, null, null, 5, "textarea", [["class", "form-control"], ["rows", "6"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 13).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 13)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.message = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](13, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](15, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](17, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                   "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.message; _ck(_v, 15, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 17).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 17).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 17).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 17).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 17).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 17).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 17).ngClassPending; _ck(_v, 12, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_SendSmsMessageEditorComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "send-sms-message-editor", [], null, null, null, View_SendSmsMessageEditorComponent_0, RenderType_SendSmsMessageEditorComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__send_sms_message_editor_component__["SendSmsMessageEditorComponent"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SendSmsMessageEditorComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("send-sms-message-editor", __WEBPACK_IMPORTED_MODULE_2__send_sms_message_editor_component__["SendSmsMessageEditorComponent"], View_SendSmsMessageEditorComponent_Host_0, { model: "model" }, {}, []);

//# sourceMappingURL=send-sms-message-editor.component.ngfactory.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=sendsmsmessage.plugin.js.map