/**
 * The Scroll Event Utility
 *
 * @module aui-scroll
 */

var Lang = A.Lang,
	isNumber = Lang.isNumber,
	isString = Lang.isString,

	HOST = 'host',
	NAME = 'scroll',

	BOTTOM ='bottom',
	DELAY = 'delay',
	DOWN = 'down',
	EDGE_PROXIMITY = 'edgeProximity',
	LAST_STATE = 'lastState',
	LEFT = 'left',
	MAX_COORDINATE = 'maxCoordinate',
	RIGHT = 'right',
	TOP = 'top',
	UP = 'up',

	APPROACHING = '-approaching',
	AVAILABLE = '-available',
	EDGE = '-edge',
	START = '-start',

	SCROLL = NAME;
/**
 *
 * Fires events for scroll directions and node boundaries
 *
 * Quick Example:<br/>
 *
 *	<pre><code>
 *		node.plug(A.Scroll);
 *		node.scroll.on('down-edge', function(event) {
 *			alert('we scrolled to the bottom!');
 *		});
 *	</code></pre>
 *
 *
 * @class Scroll
 * @constructor
 * @extends Plugin.Base
 */

var Scroll = A.Component.create(
	{
		/**
		 * Static property provides a string to identify the class.
		 *
		 * @property Scroll.NAME
		 * @type String
		 * @static
		 */
		NAME: NAME,

		/**
		 * Static property provides a string to identify the namespace.
		 *
		 * @property Scroll.NS
		 * @type String
		 * @static
		 */
		NS: NAME,

		/**
		 * Static property used to define the default attribute
		 * configuration for the Scroll.
		 *
		 * @property Scroll.ATTRS
		 * @type Object
		 * @static
		 */
		ATTRS: {
			/**
			 * The number of milliseconds that the _onScroll method should be delayed by.
			 *
			 * @attribute delay
			 * @type Number
			 */
			delay: {
				validator: isNumber,
				value: null
			},

			/**
			 * The state of the previous scroll event.
			 *
			 * @attribute lastState
			 * @type Object
			 */
			lastState: {
				value: {
					scrollLeft: 0,
					scrollTop: 0
				}
			},

			/**
			 * The maximum XY-coordinate or Width/Height of the scrollable host node.
			 *
			 * @attribute maxCoordinate
			 * @type Object
			 */
			maxCoordinate: {
				value: null
			},

			/**
			 * The distance between the edge and the beginning of an area whose
			 * scroll instance will fire an "-edge-approaching" event.
			 *
			 * @attribute edgeProximity
			 */
			edgeProximity: {
				setter: function(val) {
					var instance = this;

					var value = 0;

					if (isNumber(val)) {
						value = val;
					}
					else if (isString(val)) {
						value = (Lang.toInt(val) / 100);
					}

					return value;
				},
				value: null
			}
		},

		EXTENDS: A.Plugin.Base,

		prototype: {
			/**
			 * Construction logic executed during LoadingMask instantiation. Lifecycle.
			 *
			 * @method initializer
			 * @protected
			 */
			initializer: function(config) {
				var instance = this;

				var host = A.one(config.host);

				instance._host = host;

				host.on(SCROLL, A.bind(instance._onScroll, instance));

				instance._reset();
			},

			_onScroll: function(event) {
				var instance = this;

				var edgeProximity = instance.get(EDGE_PROXIMITY);
				var lastState = instance.get(LAST_STATE);
				var maxCoordinate = instance.get(MAX_COORDINATE);

				var node = instance._host._node;

				var scrollLeft = node.scrollLeft;
				var scrollTop = node.scrollTop;

				var maxCoordinateX = maxCoordinate.x;
				var maxCoordinateY = maxCoordinate.y;

				var isPercentage = (edgeProximity % 1) !== 0;

				var edgeProximityX = isPercentage ? (maxCoordinateX * edgeProximity) : edgeProximity;
				var edgeProximityY = isPercentage ? (maxCoordinateY * edgeProximity) : edgeProximity;

				var scrolledDown = (scrollTop > lastState.scrollTop);
				var scrolledLeft = (scrollLeft < lastState.scrollLeft);
				var scrolledRight = (scrollLeft > lastState.scrollLeft);
				var scrolledUp = (scrollTop < lastState.scrollTop);

				var availableScrollX = (scrollLeft - maxCoordinateX);
				var availableScrollY = (scrollTop - maxCoordinateY);

				var state = {
					availableScrollX: availableScrollX,
					availableScrollY: availableScrollY,
					scrollLeft: scrollLeft,
					scrollTop: scrollTop,
					scrolledDown: scrolledDown,
					scrolledLeft: scrolledLeft,
					scrolledRight: scrolledRight,
					scrolledUp: scrolledUp
				};

				// Up
				if (scrolledUp) {
					instance.fire(UP, state);

					if ((scrollTop - edgeProximityY) <= 0) {
						instance.fire(TOP + EDGE, state);
					}

					if (scrollTop < 0) {
						instance.fire(UP + AVAILABLE, state);

						if (lastState.availableScrollY >= 0) {
							instance.fire(UP + AVAILABLE + START, state);
						}
					}

					if (!lastState.scrolledTop) {
						instance.fire(UP + START, state);
					}
				}

				// Down
				if (scrolledDown) {
					instance.fire(DOWN, state);

					if ((availableScrollY + edgeProximityY) >= 0) {
						instance.fire(BOTTOM + EDGE, state);
					}

					if (availableScrollY > 0) {
						instance.fire(DOWN + AVAILABLE, state);

						if (lastState.availableScrollY < 1) {
							instance.fire(DOWN + AVAILABLE + START, state);
						}
					}

					if (!lastState.scrolledDown) {
						instance.fire(DOWN + START, state);
					}
				}

				// Left
				if (scrolledLeft) {
					instance.fire(LEFT, state);

					if ((scrollLeft - edgeProximityX) <= 0) {
						instance.fire(LEFT + EDGE, state);
					}

					if (availableScrollX > 0) {
						instance.fire(LEFT + AVAILABLE, state);

						if (lastState.availableScrollX < 1) {
							instance.fire(LEFT + AVAILABLE + START, state);
						}
					}

					if (!lastState.scroledlLeft) {
						instance.fire(LEFT + START, state);
					}
				}

				// Right
				if (scrolledRight) {
					instance.fire(RIGHT, state);

					if ((availableScrollX + edgeProximityX) >= 0) {
						instance.fire(RIGHT + EDGE, state);
					}

					if (availableScrollX > 0) {
						instance.fire(RIGHT + AVAILABLE, state);

						if (lastState.availableScrollX < 1) {
							instance.fire(RIGHT + AVAILABLE + START, state);
						}
					}

					if (!lastState.scrolledRight) {
						instance.fire(RIGHT + START, state);
					}
				}

				// Reset
				if ((availableScrollX > 0) || (availableScrollY > 0) || (scrollLeft < 0) || (scrollTop < 0) ) {
					instance._reset();
				}

				instance.set(LAST_STATE, state);

				clearTimeout(instance._delay);

				instance._delay = setTimeout(instance._reset.bind(instance), instance.get(DELAY));
			},

			_reset: function() {
				var instance = this;

				var lastState = instance.get(LAST_STATE);

				lastState.availableScrollX = 0;
				lastState.availableScrollY = 0;

				instance.set(LAST_STATE, lastState);

				var host = instance._host;

				var node = host._node;

				instance.set(
					MAX_COORDINATE,
					{
						x: (node.scrollWidth - host.innerWidth()),
						y: (node.scrollHeight - host.innerHeight())
					}
				);
			}
		}
	}
);

A.Scroll = Scroll;