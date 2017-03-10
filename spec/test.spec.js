/**
 * Created by mlutton on 3/9/17.
 */


describe("test momentjs", function () {

	describe("ISO String Support", function () {
		var day;
		var moment = require('moment');

		beforeEach(function () {
			day = moment(1489621483000);
		});

		it("supports parsing an epoch", function () {
			expect(day.toISOString()).toBe('2017-03-15T23:44:43.000Z');
		});

		it("supports adding 7 days to current date", function () {
			expect(day.add(7, 'days').toISOString()).toBe('2017-03-22T23:44:43.000Z')
		});

		it("supports adding 1 week to current date", function () {
			expect(day.add(1, 'week').toISOString()).toBe('2017-03-22T23:44:43.000Z')
		});

		it("supports adding 1 month to current date", function () {
			expect(day.add(1, 'month').toISOString()).toBe('2017-04-15T23:44:43.000Z')
		});

	});

	describe("Timezone Support", function () {
		var m;
		var moment = require('moment-timezone');

		it("supports Los Angeles timezone", function () {
			m = moment.tz(1489621483000, 'America/Los_Angeles');
			expect(m.format()).toBe('2017-03-15T16:44:43-07:00');
		});

		it("supports Chicago timezone", function () {
			m = moment.tz(1489621483000, 'America/Chicago');
			expect(m.format()).toBe('2017-03-15T18:44:43-05:00');
		});
	})

	describe("One-Off Months Support Starting with 3/31/2017", function () {
		var day;
		var moment = require('moment');

		beforeEach(function () {
			day = moment(1491003883000);
		});

		it("supports parsing an epoch", function () {
			expect(day.toISOString()).toBe('2017-03-31T23:44:43.000Z');
		});

		it("supports adding 1 month to current date", function () {
			expect(day.add(1, 'month').toISOString()).toBe('2017-04-30T23:44:43.000Z')
		});

	});

	describe("Generating Labels Based On Date, Time, Timezone, and Frequency", function () {
		var dayChicago;
		var dayTokyo;
		var currentSelectedDate;
		var moment = require('moment');


		describe("For Standard Chicago Dates", function () {
			beforeEach(function () {
				dayChicago = moment.tz("2013-11-18 11:55", "America/Chicago");
			});

			it("supports parsing a standard date time format ", function () {
				expect(dayChicago.toISOString()).toBe('2013-11-18T17:55:00.000Z');
			});

			it("supports adding 1 month to current date", function () {
				expect(dayChicago.add(1, 'month').toISOString()).toBe('2013-12-18T17:55:00.000Z')
			});

			it("supports adding 1 week to current date", function () {
				expect(dayChicago.add(1, 'week').toISOString()).toBe('2013-11-25T17:55:00.000Z')
			});
		})

		describe("For Rollover Chicago Dates", function () {
			beforeEach(function () {
				dayChicago = moment.tz("2016-03-31 11:55", "America/Chicago");
			});

			it("supports parsing a standard date time format ", function () {
				expect(dayChicago.toISOString()).toBe('2016-03-31T16:55:00.000Z');
			});

			it("supports adding 1 month to current date", function () {
				expect(dayChicago.add(1, 'month').toISOString()).toBe('2016-04-30T16:55:00.000Z')
			});

			it("supports adding 1 week to current date", function () {
				expect(dayChicago.add(1, 'week').toISOString()).toBe('2016-04-07T16:55:00.000Z')
			});
		})

		describe("For Standard Tokyo Dates", function () {
			beforeEach(function () {
				dayTokyo = moment.tz("2013-11-18 11:55", "Asia/Tokyo");
			});

			it("supports parsing a standard date time format ", function () {
				expect(dayTokyo.toISOString()).toBe('2013-11-18T02:55:00.000Z');
			});

			it("supports adding 1 month to current date", function () {
				expect(dayTokyo.add(1, 'month').toISOString()).toBe('2013-12-18T02:55:00.000Z')
			});

			it("supports adding 1 week to current date", function () {
				expect(dayTokyo.add(1, 'week').toISOString()).toBe('2013-11-25T02:55:00.000Z')
			});
		})

		describe("For Rollover Tokyo Dates", function () {
			beforeEach(function () {
				dayTokyo = moment.tz("2016-02-01 00:00", "Asia/Tokyo");
			});

			it("supports parsing a standard date time format ", function () {
				expect(dayTokyo.toISOString()).toBe('2016-01-31T15:00:00.000Z');
			});

			it("supports adding 1 month to current date", function () {
				expect(dayTokyo.add(1, 'month').toISOString()).toBe('2016-02-29T15:00:00.000Z')
			});

			it("supports adding 1 week to current date", function () {
				expect(dayTokyo.add(2, 'month').toISOString()).toBe('2016-03-31T15:00:00.000Z')
			});
		})

		describe("For Rollover California Dates", function () {
			beforeEach(function () {
				currentSelectedDate = moment.tz("2017-01-28 23:30", "America/Los_Angeles");
			});

			it("supports parsing a standard date time format ", function () {
				expect(currentSelectedDate.toISOString()).toBe('2017-01-29T07:30:00.000Z');
			});

			it("supports adding 1 month to current date", function () {
				expect(currentSelectedDate.add(1, 'month').toISOString()).toBe('2017-03-01T07:30:00.000Z')
			});

			it("supports adding 2 month to current date", function () {
				expect(currentSelectedDate.add(2, 'month').toISOString()).toBe('2017-03-29T06:30:00.000Z')
			});

			it("supports adding 3 month to current date", function () {
				expect(currentSelectedDate.add(3, 'month').toISOString()).toBe('2017-04-29T06:30:00.000Z')
			});
		})
	});
});