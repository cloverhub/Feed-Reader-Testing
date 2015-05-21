/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	* a related set of tests. This suite is all about the RSS
	* feeds definitions, the allFeeds variable in our application.
	*/
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* DONE: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */
		// forEach loop to go through each feed
		it('URLs are defined and not empty', function() {
			allFeeds.forEach(function(feed) {
				// test that url is defined
				expect(feed.url).toBeDefined();
				// test that url is not empty
				expect(feed.url.length).not.toBe(0);
			});
		});

		/* DONE: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */
		// forEach loop to go through each feed
		it('names are defined and not empty', function() {
			allFeeds.forEach(function(feed){
				// test that name is defined
				expect(feed.name).toBeDefined();
				// test that feed is not empty
				expect(feed.name.length).not.toBe(0);
			});
		});

	});


	/* DONE: Write a new test suite named "The menu" */
	describe('The menu', function() {
		/* DONE: Write a test that ensures the menu element is
		 * hidden by default. You'll have to analyze the HTML and
		 * the CSS to determine how we're performing the
		 * hiding/showing of the menu element.
		 */
		// test that the menu-hidden class is true
		it('is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});

		 /* DONE: Write a test that ensures the menu changes
		  * visibility when the menu icon is clicked. This test
		  * should have two expectations: does the menu display when
		  * clicked and does it hide when clicked again.
		  */
		// test that first click on the menu link unhides menu (class menu-hidden is false)
		it('changes visibility when the menu icon is clicked', function() {
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(false);
		// test that second click on the menu link re-hides menu (class menu-hidden is true)
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(true);
		}); 
	});

	/* DONE: Write a new test suite named "Initial Entries" */
	describe('Initial Entries', function() {
		/* DONE: Write a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test wil require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */
		// async loadFeed
		beforeEach(function(done) {
			loadFeed(0, done);
		});
		// test that entry length is not zero
		it('contains at least one entry', function() {
			expect($(".entry").length).not.toBe(0);
		});
	});
	/* DONE: Write a new test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {
		/* DONE: Write a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */
		// establish a first feed variable to test against and load async
		var feedOne = $('.feed').html();
		beforeEach(function(done) {
			loadFeed(0, done);
		});

		// test second feed vs first feed and ensure results don't match
		it('shows next feed changes', function(done) {
			var feedTwo = $('.feed').html();
			expect(feedTwo).not.toBe(feedOne);
			done();
		});
	});

}());
