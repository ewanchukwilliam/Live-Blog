---
title: My Neovim Stress Test
description: This is an overdue career stress test for my choice in editor.
date: 2026-01-17
---

# Is Neovim truly enough for professional development?

## Why Neovim?

I have ADHD. I may have jumped the gun a little early into my development journey. I did some research and came across Neovim. People swore it made you faster somehow. I really liked the idea of being closer to the root of development (i.e. the terminal). Everything was customizably minimal to exactly what you need and no more. It was an extremely long term investment I'm still glad I made.

It also gamified my development. Every challenge was an opportunity to level up my skills. Making my git integration more seamless, my LSP navigations more complete, finding a new yazi file manager plugin to speed up terminal operations, wrapping REST requests faster. Everything is a game. You can level up and make anything faster and that idea still appeals to me.

## Where it started to crack

I had my first internship recently. I was given the freedom to use whatever IDE I wanted which was amazing but it came at an unforeseen cost.

I didn't realize how open to mentorship my boss really was. I expected to just be shoved in a closet spamming boilerplate code and doing menial labour. But my boss wanted to be my mentor. I didn't see it as a possibility with how busy he was. I just wanted to be fast and reliable so he didn't have to stall or wait on my behalf.

He actually wanted to help me grow as a developer. He was willing to slow down for my sake just to make sure I learned things properly. It didn't register until way late into the internship. I was so busy trying to get faster I didn't realize I should have focused on being easier to mentor.

My choice in editor got in the way of that. Every debugging issue, every obscure task like global find and replace, was always different for me. I'd have to drop out of the meeting, build the solution or configure it, then rejoin hours later once it's ready. I started avoiding one-on-ones so I could keep my workflow and not have to answer for its shortcomings.

That experience is what inspired this stress test.

## The real problem

Neovim is a strong editor. I've proven my capabilities with it. But the issues surrounding the open source environment have bubbled to the surface one too many times.

I know Java. I've worked in the language often in my classes. But I avoid building projects with it due to Neovim's limited support. There are obviously better choices for Java development like JetBrains IntelliJ or Eclipse.

The writing has been on the wall for a while now. Its stink is all over r/neovim if you just read around. A lot of developers use it as an IDE but they're in very specific roles. It gives me the "I use Arch BTW" vibes of editor choices. I'd rather not lose the employment race before starting.

## The stress test

So here's the deal. I'm building a Spring Boot backend for an ecommerce app for my sister. If Neovim cannot handle this basic real world project, I need to start diverging and learning something else.

If it's not as flexible as I was hoping then the quirks of open source aren't worth the trouble. It would be time to simplify my configurations to a more vim-like setup. If Neovim cannot handle this backend then it's going to continue eating into valuable time that could have been better spent just building and gaining experience. I'm a fan of exponential development and if it cannot do Java then it is not exponential.

I was ready to migrate completely to a new IDE. JetBrains, VSCode, whatever it took. I was not going to make my past mistakes again.

---

# The results

```lua
return {
	'nvim-java/nvim-java',
	config = function()
		require('java').setup()
		vim.lsp.enable('jdtls')
	end,
}
```

That is all it took. I was worried for literally nothing.

Beautiful autocompletions. Snippet completions. Everything I would ever need for Java development. The nvim-java plugin just works with Maven. It sees the entire project directory structure automatically. Nothing needed to be configured by me like with nvim-jdtls.

This works even better than Django's backend. Autocompletions for that backend never worked for anything. It was always a mess of guessing import paths and methods until you saved the file. I never want to work without a typesafe backend ever again.

## Hello Spring Boot

The project structures just make sense. The way things are divided up. Tables are already mapped from class objects to table structures. Django's ORM was impossible to get a field autocompletion annotation out of. It just works in Java. I could cry.

Where have you been all my life. The dependency management. The everything. It's so clean. Even the JDTLS code actions work. You can still generate constructors, getters, setters. It's too clean.

No rugrats.
