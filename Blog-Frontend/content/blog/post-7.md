---
title: Take Home Exams
description: I go over the take home exam I received from the HiFinance team
date: 2026-02-24
---

# My first attempt at a take home exam

To preface — I was late on this application entirely. At the University of Alberta there's a co-op job board that posts listings for students to apply for. I had been watching this one for a while. The company felt more focused as a later-stage startup than my previous internship, and they already seemed to have a stronger university presence and a larger existing customer base.

I won't get too deep into detail about them, but they are AI-oriented and didn't require a technical interview. They did, however, have a take home exam to complete.

I missed the deadline while finishing up my resume the night before the cut-off — entirely my fault. But when I checked their online posting, it was still open, so I emailed the hiring manager Mike directly. He was very friendly and understanding, and actually said it was better for visibility that I had reached out. It would be fine to complete the exam a bit later.

**Pro tip:** don't be afraid to email hiring managers directly. The worst they can say is no.

## The take home exam

It was a Next.js and FastAPI codebase. The task was to implement an information page for individual clients, with the ability to add notes and create new clients. When I reached out over email, Mike dropped a hint to go above and beyond — to be thoughtful of the user experience, not just throw AI at the problem, and to actually read through the code first.

This gave me a lot of creative freedom. I took more time to plan and read through everything carefully, which revealed that the codebase was using Mantine for styling. I really wanted to rewrite it in Tailwind so I could layer in shadcn and deliver a polished table dashboard, but part of the requirements was to match and follow existing patterns in the codebase.

That constraint turned out to be a good thing. It pushed me to focus on the features themselves and gave me a chance to practice SCSS outside of Tailwind.

### A side note on Tailwind

I'm finding more and more that Tailwind doesn't properly detect image properties. Starting to appreciate what people mean by the leaky abstraction problem.

## My implementation

At my last internship, I always wanted to design my own autocomplete engine for text input fields. It never felt like something I could justify prioritizing on the agile board — it wasn't a bug or immediately important, and it was outside my experience at the time.

But this assignment said to have fun with it, so I went for it. It turned out really clean and taught me a lot about generating suggestions on the fly.

My previous internship already had a citation reference generator schema in place, so I never got to implement one from scratch. Here I also built suggested follow-ups for clients based on previous comments, with inline highlighted suggestions. Both features ended up being way simpler than I expected, and I learned a lot just from getting them working. The suggestion states had plenty of time to generate and only really needed to update between note uploads, so there was plenty of room to iterate without things breaking.

## How it turned out

It took about 10 hours to get everything working cleanly within their existing codebase conventions — folder structure, environment import patterns, migration files, all of it.

The autocomplete approach is straightforward: set up a listener for a pause in typing, then after a set delay, send a prompt containing the context, user background, and output formatting instructions. I found an Instructor module that handled things cleanly without being too heavy-handed, which worked really well.

Inline ghost text wasn't realistic in the time I had, so I went with a tooltip suggestion with a tab-complete annotation instead. The context was clean, Claude Haiku was fast enough to keep it feeling responsive, and the global summary context made the suggestions actually useful alongside the suggested actions I also implemented.

Those suggested interactions involved a longer async process: after a note was saved to the database, an AI-generated client summary was created and three recommended actions were generated — each with a reference to the note ID it was based on and the suggestion itself. Both ran asynchronously, which kept things snappy on the frontend.

## Result

It worked really well. I got completely absorbed in it and spent way more time than I probably should have — but even if they don't love having to review all that code, I genuinely want to incorporate more AI into my projects going forward. It was surprisingly simple to actually pull off.

I honestly want to fork the repo and keep working on it. Realistically I shouldn't, and should stay focused on practicing the basics. But the urge is there.

## The marketplace

I took a short break from the frontend to focus strictly on the backend. Something I keep noticing: any shortcut I take implementation-wise, I dread having to return to later. I'm not sure what to call this effect, but it's real.

For some form elements I let AI generate and style them instead of doing it myself, and now I don't want to touch them. It's an odd reluctance — not that the code is wrong, just that it doesn't feel like mine. I'm much slower when I implement things myself, but I also never avoid going back to it.

## But here's the thing

I learn so much more when I write the code myself. I almost want to disable Claude Code's ability to write any code at all. There are muscles I want to keep flexing, and I want the brain workout. I crave it.

There's also been this almost forgotten feeling of reading AI output and just not liking the implementation despite it being technically correct. AI has no style.

I ran into this today while trying to configure image handling. I asked Claude what my options were, even though I was already leaning toward mounting the files in a shared directory. It told me the images wouldn't persist because of Docker — but that's not really right. They wouldn't persist because they weren't tracked in version control, and there's no deployment method yet, so Docker wasn't even the relevant constraint. It was mimicking reasoning, not actually doing it. Easy to forget sometimes.

## Options for image handling

I'm planning on self-hosting this thing, partly to keep costs as low as possible for my sister's business — ideally zero overhead for her. I could store images locally on the server, but even I don't love that solution.

There's real value in keeping both the front and backend stateless: better portability, easier maintenance, fewer long-term TODOs to track. It also gives me a chance to actually set up a content delivery network for images, which I haven't done before.

The real decision is whether to keep an S3 bucket close to where I host and serve it through the Next.js server, or go client-side. Given the scale, routing through Next.js is probably the more sensible option — no need to manage whatever bucket is geographically closest to the user at any given time.

# Designing infrastructure just butters my eggroll

<div class="flex flex-row justify-center items-center gap-8">
    <img src="images/butters-my-eggroll.png" alt="egg" style="max-width: 500px; corner-radius: 8px; padding: 16px;"/> </div>
