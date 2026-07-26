---
title: Lemons and Lemonade
description: How a fallen-through offer turned into a better internship, and what I'm learning about writing real software
date: 2026-07-26
---

# When Life Gives You Lemons, Make Lemonade

## I stumbled my way into a fantastic internship

I wasn't expecting to find anything after HiFinance didn't pan out. They were ready to give me an offer, but they ended up relocating to Toronto and could only offer a 4-month internship. Massively disappointing. I lost out on guaranteed Kubernetes experience and a chance to work with Next.js on the frontend.

## Then life threw me a curveball

At the eleventh hour, after the university sent out a forgiveness email waiving the work term due to economic conditions, I landed a single internship interview. I wasn't expecting it to go as well as it did, maybe because of how absurd the timing was, coming so soon after I'd resumed applications following my big break (the "big break" being a month of moping about the other internship falling through). But the interview went well.

I talked through my experience, including the e-commerce platform I'd been building for my sister's small business. I've been at the company about a month now, and I can see exactly why I got the internship. It lines up almost perfectly with what I was already doing on my own, and Evan scouted me and matched my experience to the role better than I could have.

Suffice to say, I was offered the internship.

## What I'm learning

I'm learning exactly why I kept running into problems with my personal projects. I'm learning what it means to actually speak the language of software engineering, mostly by relearning the ancient art of hand-typed code and memorizing syntax I used to lean on tools for. My gap was in modeling responsibility: I understood private/protected/static ownership implicitly, but I'd never modeled solutions using them in a way that let the language actually work for me.

This internship has already been incredibly valuable, mostly because I'm learning how rough my own code actually is. I'm finding all the code smells I used to miss completely: duplication, misallocated responsibility, doing too much, god objects, all of it. I can smell the smelly code now.

A lot of what I used to dismiss as minor, I can now see are organizational issues. Most of what I was missing was organizational. That's exactly why I'd been craving an internship or real work experience on a larger codebase. Maintainable code teaches you far more than anything you can pick up on your own. The expectation that code be written to last comes with a whole layer of design and engineering I hadn't been exposed to.

## I'm going to be a better developer

I'm going to be a better developer. A better engineer. I'm finally starting to speak the language properly, and it's hard to overstate how valuable this internship has already been.

# The downsides

## There are no free lunches

There are a few downsides. One is that I'm working on a virtual workstation running on a Ryzen EPYC CPU. Plenty of RAM, but the single-core performance is painfully slow. Running the .NET backend with hot reload, it would sometimes take up to 5 seconds to navigate between files after saving a change: the backend would detect the change, hot-reload the server (slowly), and then the LSP diagnostics would rerender. I have no idea why VS Code is so much slower than Neovim for navigation (it's got to be some kind of second-class citizen somewhere in the loading hierarchy), but it was becoming genuinely unusable at times.

I'm trying not to make too much of a fuss about it. Realistically it's slowing me down a fair amount waiting for things to recompile between changes. I imagine the senior-engineer instinct here is to just write it right the first time, but I'd rather make mistakes as quickly and often as possible.

## VS Code vs. Neovim (my beloved)

It's been a nice change of pace, honestly. Not having to hunt through years of configs, GitHub READMEs, and open issues just to get the basics working. What probably would have taken me a month to configure in Neovim took two days to replicate in VS Code. I'd almost considered switching over full time.

But I'm not going to. Going back to doing things my way, it's so much faster. I can't stand how slow VS Code gets. I don't know if it's the work machine or just too many buffers open, but by Friday it was getting genuinely frustrating: save a change, wait 5 seconds for the linter to rerender, then switch files. That turns a 5-minute fix into an hour, fast.

## The other downsides

It's a Windows-everything environment: Azure Blobs, MSSQL, Azurite, Azure DevOps, and .NET Core. ASP.NET Core has actually been great to work with; it's close enough to Java that I really enjoy it. I like object-oriented languages, and I'd guess a big part of the 2016 .NET rewrite was chasing feature parity with Spring Boot, which it's actually gotten quite close to.

The other downside is working with a real IT team for permissions and security. Minimum-access policies mean no access to the Ubuntu apt repo, no access to Anthropic's site on the machine, and no copy-pasting between the virtual workstation and my local machine. Insane, but understandable. It's why I've given up on running Neovim instead of VS Code. I can't even reach Anthropic directly. I have to go through GitHub Copilot to interface with Claude, since that's the route with a liability agreement already in place.

That's the real reason I gave up on Neovim, at least for now. There's no realistic way I'd get to a usable setup by having IT vet every individual installation dependency one at a time. If a single one failed a background check, the whole setup falls apart. Which is a shame, but it's probably good for me to know how to work in more than one editor. In hindsight, learning how to configure plain Vim into a workable IDE would have been a much easier sell to IT than a full Neovim config.

## None of that really matters

I've already learned how to write real code, and honestly, none of the rest matters much next to that. I'm starting to think like an actual developer. I could always model a problem well enough to get an LLM to implement it for me, but I'd never developed the extra layer on top: the sense of taste, the instinct for what's clean. I'm not saying I have none of that. I'm saying there are ingredients and recipes I'd been using that turned out to be a lot messier than I realized.

I'm looking forward to learning a lot more. I'll do a dedicated post on how I actually landed this internship soon. It's been a long gap between entries.
