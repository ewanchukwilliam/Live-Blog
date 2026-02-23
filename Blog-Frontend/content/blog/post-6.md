---
title: Imposter Syndrome
description: I explore for myself what it means to be a fraud
date: 2026-02-22
---

# What does Imposter Syndrome mean?

My short answer: it's a real, justifiable anxiety about your sense of security in your career. Not paranoia, not low self-esteem. Just a rational response to knowing your position isn't guaranteed.

During the tech gold rush, which we no longer reside in, I think people felt this more acutely than it deserved. The market was so forgiving that a junior developer with basic skills could land an incredible role. Knowing that, of course you'd wonder if you actually earned your seat. But that era is over, and the feeling has taken on a different character. It's less about luck and more about whether you can compete.

Strangely, imposter syndrome is not something I've felt much, which is odd compared to most people I know. I've been thinking about why today, partly because some co-op anxiety forced the question. I've watched plenty of developers online talk about copy-pasting from Stack Overflow and feeling hollow about it, and I think that's what drives the feeling for most people. If you know you're cutting corners, you know you're faking it.

## When it finally hit

That immunity wore off recently, though not because of my internship. The internship was genuinely valuable — I'll come back to that. The problem was what came after it. I went a full semester without writing much code at all, and by the time I started looking for work again, the atrophy was obvious. I'd worked with PostgreSQL and Redis nearly every day at that job, but operating within an existing system is different from building one. I understood the surface, not the structure, and a semester of inactivity made that gap impossible to ignore.

I barely touched up my resume despite having real things to add, not out of laziness but out of a paralysis about claiming credit for work I wasn't sure I fully understood.

The job market didn't help. Knowing that three other people would take your spot if you slipped makes it hard to feel secure. That's really all imposter syndrome is: a rational anxiety about replaceability. The walls aren't imaginary. They are closing in, for everyone. The question is just what you're doing about it.

If the answer is nothing, of course you'd feel like a fraud.

## Why I felt immune for so long

What kept me grounded wasn't skill. It was identity. I started my CS degree in 2023 without having written a single line of production code. By most definitions, I had no business being confident. But I'd been messing around with computers since I was a kid, and that gave me a sense of belonging in the space that my actual skill level didn't yet justify.

I remember being around 12 and accidentally hitting F11 on a webpage, landing in the developer tools. I started modifying the HTML on people's Facebook profiles and screenshotting it to pretend I'd hacked their accounts. I was a little malicious, but I was also, technically, writing HTML. That fascination, the thrill of understanding something others couldn't figure out, stuck with me. I think it planted a stronger sense of direction than anything I later did in school.

So when imposter syndrome is described as feeling like you don't belong, I never quite recognized myself in that. I always felt like I belonged here. I just didn't always have the work to prove it.

## Why the break last semester

The honest reason I lost momentum is that I was dieting aggressively while trying to keep my grades up. Attempting both at the same time burned through every cognitive reserve I had, and my passion for coding went with it for a few months. Cutting 50lbs in six months is a serious metabolic undertaking. It taxes your mental capacity in ways that aren't obvious until you're on the other side of it.

I was lucky to have university as a buffer. I wasn't employed and my grades held, so I had room to recover. But if you're considering something similar: don't, unless you have a bigger safety net than I did. There's a reason people joke about the freshman fifteen. Your brain needs fuel.

## Building as the antidote

The fix has been straightforward: build something real.

I've been working on PrintMarket, a full ecommerce site I'm building for my sister. She's been dealing with an injured leg and the reduced activity that comes with it, so the hope is that a platform for her business gives her something productive to focus on. If I can build something genuinely useful for someone I care about, that feels like a real reason to have this degree. It's also been the most clarifying thing I've done as a developer. Building end to end forces you to confront gaps in your understanding quickly and honestly. I've shipped plenty of projects before, but they were mostly exploratory. I'd never intentionally held myself to a production quality bar until now. Two months ago I was genuinely an imposter with respect to full stack development, regardless of what my resume said. Now I can see the shape of what I didn't know, which means I can actually close it.

The tech stack has been part of what makes it so rewarding. On the frontend I'm using Next.js with TypeScript. Working with a type-safe language changed how I write software. It slows you down in the short term and forces precision you'd otherwise skip, but it produces noticeably better code. On the backend I'm using Java and Spring Boot, which introduced me to a set of design patterns I hadn't worked with before: controllers for HTTP, JPA for repository transactions, service modules for business logic. What surprised me is how cleanly the design philosophies of both sides map onto each other. Learning them in parallel gave me a structural understanding of full stack development I don't think I'd have gotten any other way.

Implementing proper authentication has been another highlight. Setting up OAuth with Google and Apple sign-in required understanding the full auth flow end to end, which is the kind of thing that's easy to hand off to a library without ever really grasping. The same goes for Stripe payment webhooks. Wiring up webhook listeners, validating signatures, and handling asynchronous payment events taught me more about event-driven design in practice than I'd picked up from any amount of reading. These are the kinds of problems you only encounter when you're building something that actually needs to work.

Properly implementing SSR and CSR has also been a revelation. Being able to choose the rendering strategy at the component level rather than making a blanket decision for the whole app is the kind of flexibility that's hard to appreciate until you actually need it. I honestly don't know why you'd build a modern frontend any other way.

I feel like a builder again. My first internship boss used that word when he described why he hired me, and I think he was right. That quality had just gone dormant for a while. Even earlier, when I worked construction, I noticed that getting absorbed in the tooling was always a reliable sign that I was genuinely engaged with the work. That same feeling is back.

## The cure

I think what I'm doing now is the cure. Building again has given me a certainty about my direction that isn't easily shaken. I have clear goals, genuine interest in the work, and a track record of finding my way back when I lose it. That's enough.

There will be setbacks. The job market is difficult, the field moves fast, and I'm still junior by most measures. But as long as I don't stop building, I think I'll be okay.

Plus it's tech. Trump can't nuke the global economy for that much longer... can he?

## One more thing

I want to be clear about something: my internship taught me an enormous amount. I learned how to ship production code, how teams actually coordinate on a codebase, how to work within real constraints, and how to push through problems that don't have a clean answer. Those aren't small things. Before it, I'd quietly avoid things like asynchronous redis worker jobs or WebSocket connections and stick to what I already knew. By the end, I wasn't doing that anymore.

What it also gave me, maybe more than anything, was the confidence that I could build anything if I needed to. There was no secret ingredient. The engineers I worked with were experienced because they had shipped a lot, not because they had access to knowledge I didn't. The gap between junior and senior is mostly just volume of hard problems worked through. They'll outpace you in almost every way, but they're still learning too.

That realization has carried over into everything since. I can now pick up an unfamiliar framework and make real design decisions with it from day one. The framework is just a checklist of requirements. The thinking underneath it is the same, and the internship is a big part of why I believe that.
