/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var kurtosis = require( '@stdlib/stats-base-dists-kumaraswamy-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-kumaraswamy-mean' );
var mode = require( '@stdlib/stats-base-dists-kumaraswamy-mode' );
var skewness = require( '@stdlib/stats-base-dists-kumaraswamy-skewness' );
var stdev = require( '@stdlib/stats-base-dists-kumaraswamy-stdev' );
var variance = require( '@stdlib/stats-base-dists-kumaraswamy-variance' );
var cdf = require( '@stdlib/stats-base-dists-kumaraswamy-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-kumaraswamy-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-kumaraswamy-logpdf' );
var pdf = require( '@stdlib/stats-base-dists-kumaraswamy-pdf' );
var quantile = require( '@stdlib/stats-base-dists-kumaraswamy-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function kumaraswamyCDF( x ) {
	return cdf( x, this.a, this.b );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function kumaraswamyLogCDF( x ) {
	return logcdf( x, this.a, this.b );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function kumaraswamyLogPDF( x ) {
	return logpdf( x, this.a, this.b );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function kumaraswamyPDF( x ) {
	return pdf( x, this.a, this.b );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function kumaraswamyQuantile( p ) {
	return quantile( p, this.a, this.b );
}


// MAIN //

/**
* Kumaraswamy's double bounded distribution constructor.
*
* @constructor
* @param {PositiveNumber} [a=1.0] - first shape parameter
* @param {PositiveNumber} [b=1.0] - second shape parameter
* @throws {TypeError} `a` must be a positive number
* @throws {TypeError} `b` must be a positive number
* @returns {Kumaraswamy} distribution instance
*
* @example
* var kumaraswamy = new Kumaraswamy( 1.0, 1.0 );
*
* var y = kumaraswamy.cdf( 0.8 );
* // returns 0.8
*
* var v = kumaraswamy.mode;
* // returns NaN
*/
function Kumaraswamy() {
	var a;
	var b;
	if ( !(this instanceof Kumaraswamy) ) {
		if ( arguments.length === 0 ) {
			return new Kumaraswamy();
		}
		return new Kumaraswamy( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		a = arguments[ 0 ];
		b = arguments[ 1 ];
		if ( !isPositive( a ) ) {
			throw new TypeError( format( 'invalid argument. First shape parameter must be a positive number. Value: `%s`.', a ) );
		}
		if ( !isPositive( b ) ) {
			throw new TypeError( format( 'invalid argument. Second shape parameter must be a positive number. Value: `%s`.', b ) );
		}
	} else {
		a = 1.0;
		b = 1.0;
	}
	defineProperty( this, 'a', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return a;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			a = value;
		}
	});
	defineProperty( this, 'b', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return b;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			b = value;
		}
	});
	return this;
}

/**
* Kumaraswamy's double bounded distribution excess kurtosis.
*
* @name kurtosis
* @memberof Kumaraswamy.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );
*
* var v = kumaraswamy.kurtosis;
* // returns ~2.704
*/
setReadOnlyAccessor( Kumaraswamy.prototype, 'kurtosis', function get() {
	return kurtosis( this.a, this.b );
});

/**
* Kumaraswamy's double bounded distribution expected value.
*
* @name mean
* @memberof Kumaraswamy.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );
*
* var v = kumaraswamy.mean;
* // returns ~0.481
*/
setReadOnlyAccessor( Kumaraswamy.prototype, 'mean', function get() {
	return mean( this.a, this.b );
});

/**
* Kumaraswamy's double bounded distribution mode.
*
* @name mode
* @memberof Kumaraswamy.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );
*
* var v = kumaraswamy.mode;
* // returns ~0.503
*/
setReadOnlyAccessor( Kumaraswamy.prototype, 'mode', function get() {
	return mode( this.a, this.b );
});

/**
* Kumaraswamy's double bounded distribution skewness.
*
* @name skewness
* @memberof Kumaraswamy.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );
*
* var v = kumaraswamy.skewness;
* // returns ~-0.201
*/
setReadOnlyAccessor( Kumaraswamy.prototype, 'skewness', function get() {
	return skewness( this.a, this.b );
});

/**
* Kumaraswamy's double bounded distribution standard deviation.
*
* @name stdev
* @memberof Kumaraswamy.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );
*
* var v = kumaraswamy.stdev;
* // returns ~0.13
*/
setReadOnlyAccessor( Kumaraswamy.prototype, 'stdev', function get() {
	return stdev( this.a, this.b );
});

/**
* Kumaraswamy's double bounded distribution variance.
*
* @name variance
* @memberof Kumaraswamy.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );
*
* var v = kumaraswamy.variance;
* // returns ~0.017
*/
setReadOnlyAccessor( Kumaraswamy.prototype, 'variance', function get() {
	return variance( this.a, this.b );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Kumaraswamy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );
*
* var v = kumaraswamy.cdf( 0.5 );
* // returns ~0.684
*/
setReadOnly( Kumaraswamy.prototype, 'cdf', kumaraswamyCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name logcdf
* @memberof Kumaraswamy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );
*
* var v = kumaraswamy.logcdf( 0.5 );
* // returns ~-0.38
*/
setReadOnly( Kumaraswamy.prototype, 'logcdf', kumaraswamyLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name logpdf
* @memberof Kumaraswamy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );
*
* var v = kumaraswamy.logpdf( 0.9 );
* // returns ~-3.008
*/
setReadOnly( Kumaraswamy.prototype, 'logpdf', kumaraswamyLogPDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Kumaraswamy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );
*
* var v = kumaraswamy.pdf( 0.9 );
* // returns ~0.049
*/
setReadOnly( Kumaraswamy.prototype, 'pdf', kumaraswamyPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Kumaraswamy.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );
*
* var v = kumaraswamy.quantile( 0.5 );
* // returns ~0.399
*/
setReadOnly( Kumaraswamy.prototype, 'quantile', kumaraswamyQuantile );


// EXPORTS //

module.exports = Kumaraswamy;
