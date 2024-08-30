# ZenShelf

## Why another book tracker app?
GoodReads remain unchanged a decade after Amazon acquisition.
LibraryThing also running out of steam, feels like an old and unrepaired bookshelf.
[Douban](https://douban.com), which is what LibraryThing could have been, with it's modern designed websites and native apps, was burdened by the Chinese internet identity system and made unusable. 

I found my way back into reading and was looking to maintain my library. I've downloaded all the apps below. 

![[book-trackers.jpeg]]

These apps feels overwhelming, with view full of empty lists and categories, trackers and timers, subscription popup every time you open. Still feel like there is something missing.

On a faithful Sunday night, I discovered [OpenLibrary](https://openlibrary.org/), and they have a book search api. The next day, I asked Claude to create an iOS app with a grid of book covers and a ISBN camera scanner. In a hour, I'm scanning an ISBN barcode with my own phone camera into a grid of books, that feels like already useful.

![[zenshelf-initial-design.jpeg]]

I spent the next two days talking to ChatGPT [^1] to generate the perfect icon, which took me to the middle row below. I created the v4 using Figma. Put it on the phone and realized it's too much details, and eventually arrived at v5.

![[zenshelf-icons-evolution.jpeg]]

I shared the progress with my kids, they loved it and look forward to start using it to track their readings. Now I really need to put it on TestFlight and ship this eventually.

## Where are we at?

After a couple more days of intense collaborating with Cursor and Claude. We now have an app that:
- Has a great icon [^2]
- Can search a book by title, author, or ISBN, or scan an ISBN bar code, or import from GoodReads in batch.
- Opens to a grid of book covers, with three sections: reading, to read, done.
	- Easy to share your shelf just by snapping a screenshot.
- You can mark a book as these status if you long press the covers.
- You can rate the book as well.
- You can search your shelf.
- Allow you export the bookshelf into a CSV or JSON file.
- Allow you to reset the bookshelf and start anew.
- Supports iPhone and iPad.
- Syncs over iCloud.
### What it doesn't have
The core experience is just the grid of book covers, there is not even a book detail view. I'm hoping to add it later. But it won't be in the first version as I do want to spend sometime to make it interesting. 
It doesn't have a way to add book that doesn't have an ISBN that's not catalogued by OpenLibrary. But that's your prompt to contribute to OpenLibrary. Create an account, upload your cover there, and then import your books. 
Although it's planned, you can only rate the book and not review the book. Although when importing from GoodReads, it will import your review, so you don't have to import it in the future again.
It doesn't have a paywall or subscription. I need to understand the market more to understand the revenue model. 

## What's next?

If you enjoy reading and wanted to maintain a private bookshelf, you can help by installing this via TestFlight and test drive it. 

## Footnotes
[^1]: Prompt was like _"create a minimalist brand marks icon for a bookshelf app ZenShelf"_ and keep asking for more options until you found something
[^2]: I'm biased but maybe the best icon among all book trackers. It still could need some polishing like better inner shadow or less details on the pot. However if I know I'm procrastinating if I'm spending the third day on these icons, no matter how fun it was. I'm all ears tho if you have ideas on improving it. DM on X please.