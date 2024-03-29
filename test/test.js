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

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-kumaraswamy-quantile' );
var cdf = require( '@stdlib/stats-base-dists-kumaraswamy-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-kumaraswamy-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-kumaraswamy-logpdf' );
var pdf = require( '@stdlib/stats-base-dists-kumaraswamy-pdf' );
var kurtosis = require( '@stdlib/stats-base-dists-kumaraswamy-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-kumaraswamy-skewness' );
var variance = require( '@stdlib/stats-base-dists-kumaraswamy-variance' );
var stdev = require( '@stdlib/stats-base-dists-kumaraswamy-stdev' );
var mode = require( '@stdlib/stats-base-dists-kumaraswamy-mode' );
var mean = require( '@stdlib/stats-base-dists-kumaraswamy-mean' );
var Kumaraswamy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Kumaraswamy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `a` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Kumaraswamy( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a `b` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Kumaraswamy( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `a` and `b`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Kumaraswamy( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var kumaraswamy = new Kumaraswamy();
	t.strictEqual( kumaraswamy instanceof Kumaraswamy, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );
	t.strictEqual( kumaraswamy instanceof Kumaraswamy, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var kumaraswamy = Kumaraswamy();
	t.strictEqual( kumaraswamy instanceof Kumaraswamy, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	kumaraswamy = Kumaraswamy( 2.0, 4.0 );
	t.strictEqual( kumaraswamy instanceof Kumaraswamy, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `a`', function test( t ) {
	var kumaraswamy;

	kumaraswamy = new Kumaraswamy( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( kumaraswamy, 'a' ), true, 'has property' );
	t.strictEqual( kumaraswamy.a, 2.0, 'returns expected value' );

	kumaraswamy.a = 3.0;
	t.strictEqual( kumaraswamy.a, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `a` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var kumaraswamy = new Kumaraswamy();
			kumaraswamy.a = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `b`', function test( t ) {
	var kumaraswamy;

	kumaraswamy = new Kumaraswamy( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( kumaraswamy, 'b' ), true, 'has property' );
	t.strictEqual( kumaraswamy.b, 4.0, 'returns expected value' );

	kumaraswamy.b = 3.0;
	t.strictEqual( kumaraswamy.b, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `b` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var kumaraswamy = new Kumaraswamy();
			kumaraswamy.b = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var kumaraswamy;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'kurtosis' ), true, 'has property' );

	kumaraswamy = new Kumaraswamy( 2.0, 4.5 );
	t.strictEqual( kumaraswamy.kurtosis, kurtosis( 2.0, 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var kumaraswamy;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'mean' ), true, 'has property' );

	kumaraswamy = new Kumaraswamy( 2.0, 2.0 );
	t.strictEqual( kumaraswamy.mean, mean( 2.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var kumaraswamy;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'mode' ), true, 'has property' );

	kumaraswamy = new Kumaraswamy( 2.0, 3.0 );
	t.strictEqual( kumaraswamy.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var kumaraswamy;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'skewness' ), true, 'has property' );

	kumaraswamy = new Kumaraswamy( 0.5, 3.2 );
	t.strictEqual( kumaraswamy.skewness, skewness( 0.5, 3.2 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var kumaraswamy;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'stdev' ), true, 'has property' );

	kumaraswamy = new Kumaraswamy( 3.0, 5.0 );
	t.strictEqual( kumaraswamy.stdev, stdev( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var kumaraswamy;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'variance' ), true, 'has property' );

	kumaraswamy = new Kumaraswamy( 3.0, 5.0 );
	t.strictEqual( kumaraswamy.variance, variance( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var kumaraswamy;
	var y;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Kumaraswamy.prototype.cdf ), true, 'has method' );

	kumaraswamy = new Kumaraswamy();
	y = kumaraswamy.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (CDF)', function test( t ) {
	var kumaraswamy;
	var y;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Kumaraswamy.prototype.logcdf ), true, 'has method' );

	kumaraswamy = new Kumaraswamy();
	y = kumaraswamy.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (PDF)', function test( t ) {
	var kumaraswamy;
	var y;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Kumaraswamy.prototype.logpdf ), true, 'has method' );

	kumaraswamy = new Kumaraswamy();
	y = kumaraswamy.logpdf( 0.2 );

	t.strictEqual( y, logpdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var kumaraswamy;
	var y;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Kumaraswamy.prototype.pdf ), true, 'has method' );

	kumaraswamy = new Kumaraswamy();
	y = kumaraswamy.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var kumaraswamy;
	var y;

	t.strictEqual( hasOwnProp( Kumaraswamy.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Kumaraswamy.prototype.quantile ), true, 'has method' );

	kumaraswamy = new Kumaraswamy();
	y = kumaraswamy.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});
