![Zen Digital Garden](./assets/digital_garden.webp)

# ZenMD

## What
https://www.npmjs.com/package/zenmd

A convention-over-configuration static site generator, eliminating all boilerplate and framework setup, requires no decisions or input from the user, freeing them to focus solely on writing and creating.

## Who
Crafted for the neurodivergent minimalist with ADHD, this simplifies the process, cutting through the clutter of decision-making and lengthy steps to one command.

## Why
It is an attempt in answering: 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How many steps does it take to publish markdown to a simple static blog with images and links between pages? 10? 20? Why not less than 5?</p>&mdash; Shao | 少蒙 (@randomor) <a href="https://twitter.com/randomor/status/1713069918252675531?ref_src=twsrc%5Etfw">October 14, 2023</a></blockquote> 

## How is it different?
Started looking around, yet, no tool does this combination of things:
- With one command, transforms a folder of markdown files (usually takes more than a handful of steps).
- No extra config, no fluff and distractions that's not content.
- Supports internal links: `[another page](./another-link.md)`
- Supports wiki links: `[[another page]]`
- Supports images.
- Allows custom layouts in multiple levels of directories.
- Layout support any value from frontmatter.

ZenMD fills the gap above, and also opens up a few interesting workflows:
- (Bring your own) BYO editor, note-taker
	- Tested with simple Obsidian vaults, VS Code (with Markdown Notes extension), Bear Notes exports.
- BYO static site host, Netlify, Vercel, or Cloudflare Pages
- Back to the Future/Past, #nobuild, #noserver: 
	- Preview the generated site by opening the `.html` pages directly, without an app server
	- html layout editing without a build process
- An out-of-the-box minimalist layout that support dark and light theme, using Tailwind Typography. 

## What is this good for?
- Allow anyone to quickly transform their directory of markdown knowledge base or personal note vault into a digital garden.
- Create a simple wiki, using wiki links and GitHub as the CMS.
- For anyone to create a site in 30 seconds, using their existing markdown content.