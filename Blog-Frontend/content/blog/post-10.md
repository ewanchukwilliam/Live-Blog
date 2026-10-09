---
title: Giving a Damn
description: on trust, responsibility, and the weight of code
date: 2026-10-08
---

# Earning trust

## Being responsible
My boss left on a work trip and basically handed me the keys. Most interns don't get trusted with that much of the infrastructure, and I'm not used to it.

I keep wondering what changed. Maybe it's being in the office instead of working from home. Maybe it's him watching from the desk behind me while I pull my hair out over something stupid. Maybe it's shock and awe at the way I handicap myself with the terminal and my aversion to mice.

## Or maybe it's that he can see I care
The Pragmatic Programmer strikes again. I covered it last post, but the book is so dense I keep coming back to it. The very first tip is to care about your craft, and the whole thing hammers on taking responsibility for the code you write.

That sounded strange to me at first. Getting it working is enough, no?

That's what I thought until this internship. Getting it working is maybe 30% of the value. It shows you what's possible, but it never shows you what should be possible. The other 70% is maintaining what you built, and maintaining a system well is an art.

People are watching to see if you care about that art. Last post I wrote about broken windows, how one sign of neglect invites more until the whole building rots. Caring about the craft means you don't leave windows broken, and that means slowing down.

My pipeline project dragged out an extra week. I tested every migration manually in different git branch environments to make sure no code change could accidentally deploy a migration, and nothing could leave behind permanent state we couldn't easily roll back. I obsessed over every single one. In other words, I gave a damn.

The result was a pipeline clean enough to deploy both staging and development. If I'd slopped my way through it, I can't imagine he would have handed me the keys.

So I need to keep slowing down and doing things properly. And honestly, I want to.

What I didn't expect was why slowing down matters so much. It comes down to weight.

## The weight of a decision
Software engineers of yesteryear, the ones who learned from scratch through books, blogs and Stack Overflow, already understand this. Few of them can put it into words. But once you're the one writing the code, you feel how much easier it is to do it right the first time.

When I prototyped, I always tried to salvage the code. I figured a working version was the whole goal. That breaks two principles from the book. Prototypes are meant to be thrown away, and good design is design that's easy to change.

Looking back, I had it completely backwards. Nothing felt "done" to me until it was hard to change and miserable to work with. No more bells and whistles, as complete as it could ever be.

You may cringe at that, but I really did program that way. AI was a contributor, and early on I treated it like a mentor. Like a better Google.

## If LLMs can distill the brilliant engineers, why can't I?
The short answer is that the Brilliant Engineers don't like using LLMs. Not because they're bad at it, but because it interrupts a major part of how they work.

At some point writing the code becomes the easy part. Anything you can imagine can be built with the right syntax. But for them there's an extra step, and it never shows up in the code an LLM learns from. They're weighing it.

## The WEIGHT of code itself
You can read about it, or hear podcasters who are better programmers than you say it out loud. The idea that code has mass is a cousin of that old line about code being harder to read than it is to write.

That mass is what they're always bouncing around in their heads when they plan and make decisions. That whiteboard masturbation isn't self-indulgent. It's how they make sensible decisions.

You have to predict what you'll be working with eight months from now, when you won't have a fucking clue what you were thinking when you wrote the code you're about to write today.

It's inevitable. You have to document. Even while I'm writing code I can feel pieces of the puzzle slipping out of my head.

The more I plan and the more I write down, the less I have to review, and the less time I waste agonizing over decisions I might never know the answers to.

The weight of the code I write today is HEAVY. How would you like to arrange your boulders? In nice groups? One giant pile? Unsorted? Spread out?

Would you like every file in this folder tied to a helper file with a weird name, stashed in a folder under the mattress you've had since 6th grade?

NO! God no, you wouldn't. Sure it's clever, sure the code looks nice, but it's a mess. Every boulder left lying around is another broken window. The computer doesn't care if you forget what you did.

Only you can bear that burden.

## LLMs are an exosuit for that weight
LLMs had just gotten good enough to be useful when I started programming, so code always felt weightless. Every bad decision could just be snapped away.

Hey, where's that file I was working on? What standards does this project use? How should I organize this so other developers can follow it?

Harmless questions to hand off, right? After all, LLMs are the future. But every one of those questions is part of the weight, and handing them off meant I never felt it. I guess I was just naive prey.

Actually practicing the craft is teaching me that YEAH, the code is still HEAVY. Every commit is another 5 lbs you carry through the rest of the feature. The exosuit carries it for you. It doesn't make it any lighter.

When it finally lands on your senior's doorstep in the inevitable PR at the end of your long trek through the feature, it weighs exactly what it would have if no agent had helped you at all.

## Knowing the weight up front
I've been trying to think about code differently. Whenever I look back on this, I picture a silly scooter with a jet engine strapped to it, riding on monster truck wheels.

If I'd known the weight of the decisions I was making, I wouldn't have bothered starting with the scooter at all...

Thing is, all code carries weight, good and bad. Bad code drags unrelated code down with it when you try to move it. But good code is heavy too.

## Programming is also massless
There's a flip side. Nothing is stopping me from designing and building anything I could ever dream of. Documentation keeps my feet on the ground, sure, but you really can make shitty code do the job.

There's no limit to the weight ones and zeros can carry. You can put an elephant on a train on a plane on a rocket and maybe still use it to compact dirt in your imaginary world.

Can you? Yes. Should you?

Depends.

## Do you want to share your world with anyone but yourself?
If it's just you, carry whatever you want. The weight only matters once someone else has to help you carry it.

That's what responsibility means to me now. You slow down. You keep the windows fixed. You learn which weights are too heavy to bring on the journey, and you have the guts to leave them behind.

People can tell when you give a damn. Maybe that's why I'm the one holding the keys while he's away.
