---
title: Time to consider a new linux distro
description: I'm exploring new options for productivity focused distros. Video games are proving a bit too distracting.
date: 2026-02-19
---

# Avoiding Productivity Time Sinks

## Why now?
I'm enjoying manually, artisanally written code. Writing directly in my editor, leaning on my LSP rather than AI autocompletions, feels mentally freeing. I feel significantly less tied down when making design decisions. I'm gaining fluency in the language and understanding more through the passive absorption of just writing out the syntax.

I'm ashamed to admit I never fully understood the arrow function before. Why it existed, why it was always nested in function declarations. But I'm starting to literally think differently just by typing it out. It's weird that reading code doesn't really teach you the language. Working this way also helps me debug configurations sooner. If my LSP doesn't detect something, I sort it out immediately. I can sense when something is amiss because my editor is tracking these things for me.

As I enjoy this artisanal craft more and appreciate simplicity and the overall design process, I can feel it drawing me in again. I'm eager to implement something new. I know this is the case because instead of having some movie or TV show playing in the background while I game, I'm keeping my editor open and programming between breaks.

I've heard this is a popular sentiment among other developers. Video games are a prime distraction. It's not uncommon to remove the possibility of gaming from the equation entirely. It's a powerful and seemingly universally understood phenomenon. Gaming slows growth. I have much more growing to do, and I have this feeling that this is a move in the right direction.

## The Hidden Costs
I started learning to program with AI a few years ago when GPT would spit out bits of code you could copy paste that were relatively close to Stack Overflow solutions. I saw the writing on the wall that this was going to be a useful tool, and since I love to learn the craft by learning the tools, I added it to my workflow.

In doing so it opened a new door that isn't unlike the video games door. It feels completely separate from my direction as a developer. They're strangely similar in that they both feel like an escape hatch. Struggling with an error message? Just copy paste it and get out quickly. Messing around with something too long? Break the friction and ask the AI.

## Claude Code's Gotcha
There's another hidden cost I didn't realize until recently. With Claude Code, you don't communicate the surrounding context yourself. You don't need to mentally describe environment conditions, folder locations, or pathing. It checks those things for you. The NEXTAUTH_URL variable is a perfect example. I didn't even know it existed. I got so far away from the documentation that I didn't realize my redirect URI was dependent on this variable. I'm a bit ashamed to admit that.

There's little benefit to lying to myself about it. I should have known that existed. Another symptom of relying on AI too much. I should be closer to the documentation.

## Metrics for Progress
One thing I've noticed about when I'm truly in a flow state is that I have many documentation pages open at the end of the session. My browser is literally a mess of links and dashboards to clean up. When it isn't a mess, I usually don't feel nearly as accomplished at the end of the day. I don't feel like I personally did much.

Another metric I want to track is how happy I am with the product I'm building. The less AI, the better I feel towards my product. I feel pride when I work on something, so I just want to work on it more. I feel that sense of ownership when something turns out well. My dashboard for my most recent project is incredibly clean and I'm really happy with it. I find myself looking at it in my spare time just to admire it. Same goes for my database. I'll just run SQL queries to look at the data structures I've built.

To summarize: when I have a browser mess and revisit my project often, I know I've moved in the right direction.

<div class="flex flex-row justify-center items-center gap-8">
    <img src="images/admin-panel.png" alt="Ecommercy Admin " style="max-width: 600px; corder-radius 8px"/>
    <img src="images/admin-item-panel.png" alt="Ecommercy Admin Item Creation pal I've been working on" style="max-width: 600px; corder-radius 8px"/>
</div>
## Ecommerce for Amy (surprise if you end up reading this)

Theres aren't complete dashboards as they are filled with dummy data. But it helps me to know when something is complete to know to incrementally to switch between tasks. AI is great for dummy data. I find myself just staring at these knowing I'm able to just slap this into existence. This project has been insanely rewarding to work on. I just finished wrapper routers on the frontend and the backend. I can now automatically protect any routes I create on the application. Everything looks aboslutely beautiful. Springboot is an amazing service. The backend and frontend truly are complete domains in an of themselves both obviously have their own significant ranges of complexity. 

Its been wird to see how much I've been enjoying both. for context this is going to be a surprise website for my sister to be able to ship her products for her business (should she choose to use it).

## TODOs as a Tool
This feels like a whole new world. It always bugged me to run into multiple issues at once. Say your DB route isn't fully configured with business logic but the HTTP route is fully tested and working. You want to make sure the frontend design would work for your use case so you quickly test things, but you don't want to forget to implement the business logic later.

Enter TODOs. The solution for this ADHD-adjacent problem. There are LSPs that can track your TODOs. You can jump to them in a list to see all the bits of code you need to revisit. It's so convenient when your head is full of different things you need to do but other things need precedence. They reduce that jumping-around anxiety so much. They reduce that in-the-moment paralyzing anxiety when something gets really overwhelming. This feels like a good escape button for that.

It's mostly about peace of mind. It feels disproportionately valuable to offload that mental compute in the moment. Say I'm building a backend route and I know I want to support image URLs but I just want to create the DB object first. I finish the HTTP route and slap a TODO in the function: "remember to finish imageUrl field". Then it exists in the codebase indefinitely. When I jump to it with the TODO LSP, I immediately remember the context, why I left it there, and what's left to do. I can divert to finishing that task.

It's so, so good.

## The Hunt for a New Distro
I'm currently using Pop!_OS on my main desktop. I bought a fancy GPU that's nearing the end of its life. I wanted to make as much use of it as I could before starting work, but that's becoming shortsighted now with the other issues I'm feeling.

I'm considering Arch-like distros. I know I said a few blog posts ago that I wouldn't because it's a productivity time sink. But it appears to have the benefit of being just annoying enough with Nvidia drivers that I might avoid the prospect of Linux gaming altogether.

I'm leaning towards three options: Ubuntu for the server experience, Omarchy for the opinionated minimalist defaults, and raw Arch. Ubuntu probably seems the best but more research needs to be done. I don't want another configuration time sink and want to simulate working development environments as closely as possible.

## Resistance as a Tool
Resistance is something I've learned I have control over. In the past few years it's been my cheat code for growing as a person. I see the value in that absolutely. Being strategic with it isn't something I see people do very often.

I get why kicking back and taking it easy is sometimes necessary, and it's tough to know when you have opportunities to do so. But you're either growing or dying. You either grow or shrivel, and I'd like to think I'm not at the tail end of my growth curve yet. I feel like I have much more I'd like to accomplish. Thus today I realistically consider removing video games altogether from my life.

## Cool Side Note
I configured a dev-docs plugin to hopefully support my development journey with staying closer to the documentation. Holy crap its better than google. I always wondered how the leetcode wizards figured their stuff out. I think I know now how they got to where they were. 

It's always crazy to me to me how many different ways there are to learning web development. There are ways to download this documentation locally completely offline. It's amazing to be indexed 

### [Dev-Docs Weblink](https://devdocs.io/)

## Its Too Damn Clean. No internet required.

 All this documentation fuzzy searchable with a keyboard shortcut! I had no idea the root documentation was so explicit and well made. 

### Using arrow functions

```js
// An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// Arrow functions without parameters
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);

```
