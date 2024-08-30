# ZenShelf

## Why another book tracker app?

Goodreads remains unchanged a decade after Amazon's acquisition. LibraryThing is also running out of steam and feels like an old and unrepaired bookshelf. [Douban](https://douban.com), which is what LibraryThing could have been with its modern website design and native apps, was burdened by the Chinese internet identity system and made unusable.

I found my way back into reading and was looking to maintain my library. I downloaded all the apps below.

![[book-trackers.jpeg]]

These apps feel overwhelming, with views full of empty lists and categories, trackers and timers, and subscription popups every time you open them. Still, it feels like there is something missing.

On a fateful Sunday night, I discovered [OpenLibrary](https://openlibrary.org/), and they have a book search API. The next day, I asked Claude to create an iOS app with a grid of book covers and an ISBN camera scanner. In an hour, I was scanning an ISBN barcode with my own phone camera into a grid of books, which already felt useful.

![[zenshelf-initial-design.jpeg]]

I spent the next two days talking to ChatGPT [^1] to generate the perfect icon, which took me to the middle row below. I created v4 using Figma. I put it on the phone and realized it had too many details, and eventually arrived at v5.

![[zenshelf-icons-evolution.jpeg]]

I shared the progress with my kids; they loved it and look forward to starting using it to track their readings. Now I really need to put it on TestFlight and ship this eventually.

## Where are we at?

After a couple more days of intense collaboration with Cursor and Claude, we now have an app that:
- Has a great icon [^2].
- Can search a book by title, author, or ISBN, or scan an ISBN barcode, or import from Goodreads in batch.
- Opens to a grid of book covers, with three sections: reading, to read, done.
	- Easy to share your shelf just by snapping a screenshot.
- Allows you to mark a book with different statuses if you long-press the covers.
- Allows you to rate the book as well.
- Lets you search your shelf.
- Allows you to export the bookshelf into a CSV or JSON file.
- Allows you to reset the bookshelf and start anew.
- Supports iPhone and iPad.
- Syncs over iCloud.

### What it doesn't have

The core experience is just the grid of book covers; there isn't even a book detail view. I'm hoping to add it later, but it won't be in the first version as I do want to spend some time making it interesting. 
It doesn't have a way to add a book that doesn't have an ISBN or isn't catalogued by OpenLibrary. But that's your prompt to contribute to OpenLibrary. Create an account, upload your cover there, and then import your books. 
Although it's planned, you can only rate the book and not review it. However, when importing from Goodreads, it will import your review, so you don't have to import it in the future again.
It doesn't have a paywall or subscription. I need to understand the market more to determine the revenue model. 

## What's next?

If you enjoy reading and want to maintain a private bookshelf, you can help by installing this via TestFlight and taking it for a test drive.

## Footnotes
[^1]: The prompt was like _"create a minimalist brand marks icon for a bookshelf app ZenShelf"_ and keep asking for more options until you find something.
[^2]: I'm biased, but it might be the best icon among all book trackers. It still could use some polishing, like a better inner shadow or fewer details on the pot. However, I know I'm procrastinating if I spend the third day on these icons, no matter how fun it was. I'm all ears, though, if you have ideas on improving it. DM on X, please.