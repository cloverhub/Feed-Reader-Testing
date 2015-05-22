$(function() {
	/* Test suite 1: "RSS Feeds" */
	describe('RSS Feeds', function() {
		 /* Test 1A: test that allFeeds variable is defined and not empty */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});
		/* Test 1B: loop through each feed and ensure URL is defined and URL is not empty */
		// forEach loop to go through each feed
		it('URLs are defined and not empty', function() {
			allFeeds.forEach(function(feed) {
				// test that url is defined
				expect(feed.url).toBeDefined();
				// test that url is not empty
				expect(feed.url.length).not.toBe(0);
			});
		});

		/* Test 1C: loop through each feed and ensure name is defined and name is not empty */
		// forEach loop to go through each feed
		it('names are defined and not empty', function() {
			allFeeds.forEach(function(feed){
				// test that name is defined
				expect(feed.name).toBeDefined();
				// test that name is not empty
				expect(feed.name.length).not.toBe(0);
			});
		});
	});

	/* Test suite 2: "The menu" */
	describe('The menu', function() {
		/* Test 2A: ensure menu element is hidden by default */
		// test that the menu-hidden class is true
		it('is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
		/* Test 2B: ensure menu changes visibility when the menu icon is clicked: menu must display when clicked and hide when clicked again */
		// test that first click on the menu link unhides menu (class menu-hidden is false)
		it('changes visibility when the menu icon is clicked', function() {
			// first click
			$('.menu-icon-link').click();
			// menu class should not be menu-hidden on first click
			expect($('body').hasClass('menu-hidden')).toBe(false);
			// second click
			$('.menu-icon-link').click();
			// test that second click on the menu link re-hides menu (class menu-hidden is true)
			expect($('body').hasClass('menu-hidden')).toBe(true);
		}); 
	});

	/* Test suite 3: "Initial Entries" */
	describe('Initial Entries', function() {
		// async loadFeed
		beforeEach(function(done) {
			loadFeed(0, done);
		});
		/* Test 3A: ensure that the loadFeed function is called and completes work and that there is at least one .entry element within the .feed container */
		// test that entry length is not zero
		it('contains at least one entry', function() {
			expect($(".entry").length).not.toBe(0);
		});
	});

	/* Test suite 4: "New Feed Selection" */
	describe('New Feed Selection', function() {
		// implement two variables, one for feed 0 and the second for feed 1
		var feedZero,
			feedOne;
		// async loadFeed again
		beforeEach(function(done) {
			// load feed 0's header title and store as feedZero
			loadFeed(0, function() {
				feedZero = $(".header-title").html();
			});
			// load feed 1's header title and store as feedOne
			loadFeed(1, function() {
				feedOne = $(".header-title").html();
				done();
			});
		});
		/* Test 4A: ensure when a new feed is loaded by the loadFeed function that the content actually changes */
		it('feed content successfully changes', function(done) {
			// compare feedZero to feedOne, they should not be the same
			expect(feedZero).not.toBe(feedOne);
			done();
		});
	});
}());
