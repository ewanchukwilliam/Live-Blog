---
title: Giving a Damn
description: on trust, responsibility, and the weight of code
date: 2026-10-08
---

# Earning trust

## Being responsible
My boss went on holidays and basically handed me the keys. He trusted me with a lot more of our infrastructure than an intern usually gets.

Being trusted like that is foreign to me. There's something about being in the office instead of working from home that builds that kind of trust with a team.

Maybe it's my boss seeing every wart and my unkempt hair from the desk behind me. Maybe it's watching me fumble around in the dark. Maybe it's shock and awe at the way I handicap myself with the terminal and my aversion to mice.

## Or maybe it's that they can see I care
The Pragmatic Programmer strikes again. I talked about it last post, but it's so dense with insight that I keep coming back to it. The very first tip in the book is to care about your craft, and the whole thing leans hard on taking responsibility for the code you write.

That felt strange to me at first. Getting it working is enough, no?

That's what I thought until this internship. Getting it working is maybe 30% of the value of the work. Sure, you learn what's possible, but you never learn what should be possible. The rest is maintaining what you built, and maintaining a system well is an art.

People are watching to see if you care about that art. Last post I wrote about broken windows, how one sign of neglect invites more until the whole building goes. Caring about the craft means not leaving those windows broken, and that means slowing down.

My pipeline project dragged out an extra week. I tested every migration manually in different git branch environments, making sure no code change could accidentally deploy a migration and nothing could leave behind permanent state we couldn't easily roll back. I obsessed over every one of them. In other words, I gave a fuck.

I ended up with a pipeline clean enough to deploy both our staging and development environments. If I'd slopped my way through it instead, I can't imagine he would have handed me the keys.

So I need to keep slowing down and doing things properly, and honestly, I want to.

What I didn't expect was the reason slowing down matters so much. It comes down to weight.

## The weight of a decision
Software engineers of yesteryear, the ones who learned from scratch through books, blogs and Stack Overflow, already understand this concept well. Few of them can articulate it. But once you're the one writing the code, you feel how much easier it is to do it right the first time.

When I prototyped, I always tried to salvage the code. I figured a working version was all I was supposed to aim for. That breaks two principles from the book. Prototypes are meant to be thrown away, and good design is design that's easy to change.

Thinking back on it now, I had it completely backwards. Nothing felt "done" to me until it was hard to change and hard to work with. No more bells and whistles, as complete as it could ever be.

You may cringe at that, but I really did program that way. AI was a contributor, and early on I treated it like a mentor. Like it was a better Google.

## If LLMs can distill brilliant engineers, why can't I?
The short answer is that the brilliant engineers don't like using LLMs. Not because they're bad at using them, but because LLMs interrupt a major part of their workflow.

At some point writing the code becomes the easy part. Anything you can imagine can be realized with the right syntax. But for them there's an extra step, and it never shows up in the code an LLM learns from. They're weighing the code.

## The weight of code itself
Sure, you can read about it, or hear podcasters who are better programmers than you say it out loud. The idea that code has mass is a lot like that old saying about code being harder to read than it is to write.

That mass is what they're constantly bouncing around in their heads when they plan and make decisions. All that time at the whiteboard looks like indulgence, but it's how they make sensible decisions.

You have to predict what you'll be working with eight months from now, when you won't have a clue what you were thinking as you wrote the code you're about to write today.

It's inevitable. You have to document. Even while I'm writing code, I can feel pieces of the puzzle slipping out of my head.

The more I plan and the more I write down, the less I have to review later, and the less time I waste agonizing over decisions I might never know the answers to.

The code I write today is HEAVY. How would you like to arrange your boulders? In nice groups? One giant pile? Unsorted? Spread out?

Would you like every file in this folder to depend on a helper file with a weird name, hidden in a folder under the mattress you've had since 6th grade?

No! God no, you wouldn't. Sure it's clever, sure the code looks nice, but it's disorganized. Every boulder left lying around is another broken window. The computer doesn't care if you forget what you did.

Only you can bear that burden.

## LLMs are an exosuit for that weight
LLMs had just gotten good enough to be useful when I started programming, so code always felt weightless to me. Any bad decision I made could just be snapped away.

Hey, where's that file I was working on? What standards does this project use? How should I organize this so other developers can follow it?

Those all seemed like harmless questions to hand off. After all, LLMs are the future. But every one of those questions is part of the weight, and handing them off meant I never had to feel it. I was naive to fall for that.

Actually practicing the craft is teaching me that yeah, the code is still HEAVY. Every commit is another 5 lbs you carry through the rest of the feature. The exosuit carries it for you, but it doesn't make it any lighter.

When it finally lands on your senior's doorstep in the inevitable PR, at the end of your long journey through the feature, you'll find it weighs exactly as much as it would have if no agent had helped you at all.

## Knowing the weight up front
I've been trying to think about code differently now. Whenever I look back on this, I picture a silly scooter with a jet engine strapped to it and monster truck wheels.

If I'd known the weight of the decisions I was making, I wouldn't have bothered starting with the scooter at all...

The thing is, all code carries weight, good and bad. Bad code tends to drag unrelated code down with it when you try to move it around, but good code is heavy too.

## Programming is also massless
There's a flip side to this. Nothing is stopping me from designing and building anything I could ever dream of. Documentation hurdles keep my feet on the ground, sure, but you really can make shitty code do the job.

There's no limit to the weight ones and zeros can carry. You can put an elephant on a train on a plane on a rocket, and it might still manage to compact dirt in your imaginary world.

Can you? Yes. Should you?

Depends.

## Do you want to share your world with anyone other than yourself?
If it's just you, carry whatever you want. The weight only matters once someone else has to help you carry it.

That's what taking responsibility means to me now. Caring enough about the people who come after you to slow down, keep the windows fixed, and figure out which weights are too heavy to bring on the journey. Then having the discipline to leave them behind.

People can tell when you care. Maybe that's why I'm the one holding the keys while he's away.
