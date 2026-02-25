---
title: Take Home Exams
description: I go over the take home exam I received from the HiFinance team
date: 2026-02-24
---

# My first attempt at a take home exam  

To preface I was late in this application entirely. At the University of alberta There's a co-op job board that post's listings for co-op students to apply for. I had been watching this application for a while as it was a bit more focusd an late stage start up wise than my previous internship. 

They seemed to already have much more of a university presence and had a larger existing customer base. I won't get too much inot detial about them but they are AI oriented and claude and didn't require a technical portion. But the did have a take home exam to complete. 

I missed the deadline preparing my resume the night before the cut-off. entirely my fault but I checked their online posting and found that it was still open so I emailed the hiring manager Mike directly. #ProTip He was very friendly and understanding of my situation and actually said it was better for visibility that I had reached out and that it would be fine to complete the exam later. 

## The take home exam I completed.

It was in a Next.js and FastApi codebase. Immediately off the bat the exam was to implement an information page for individual clients that has the ability to add additional notes and the ability to create clients. when I had reached out over email he actually gave me an email hint to go above and beyond and to be more thoughtful of the user experience, and to not just throw AI at the problem and to read the code. 

This proved very useful and actually let me have some creative freedom with my implementation. I took a bit more time to plan out everything for my feature and to read through everything to completee. which it unfortunately revealed that the codebase was using Mantine for styling. I really really wanted to rewrite in tailwind so I could add shadcn to really wow them with a fancy table dashboard but part of the requirements of that assignment was to match and follow existing patterns in the codebase. 

This turned out to be a good thing and made me focus on feature's to wow them instead and let me practice my scss skills outside tailwind. 

### side note

I'm finding more often than not the tailwind library doesnt properly detect image properties. Starting to understand the leaky abstraction problem. 

## My implementation? 

at my last internship I really wanted to design my own autocompletion engine for the text input field. It never felt like something that I could prioritize on the agile board as it was something I'd never worked with nor was it a bug or something that wasn't immediately important. 

But part of the requirements for the assignments mentioned to have fun with it. Thus I attempted it and it actually turned out really clean. It also taught me a alot about generating auto suggestions for a user. 

My previous internship already had something in place for a citation reference generator schema. so I never got to implement it start to finish, but it was also something I knew I could complete so I also generated some suggested follow ups for clients based on previous comments with highlighting suggestions. 

I learned so much about just getting this to work. All of it turned out to be way more simple than I was expecting. There were only a few values in which we needed to be able to append to the notes and the suggestion states had all the time in the world to generate and only really needed to update between note uploads so there was a lot of room for failure. 

## how did it turn out?

It took me 10 hours to get working cleanly with their existing codebase conventions like folder structure and env import patterns and migration files. But it actually turned out really well. All you need for the auto completion for input fields is to create a listener for a pause and then after a given amount of time to just send out a prompt containing the instructions and background knowledge for the user and how to format the output. 

There was an Instructor module I found that was less heavy handed with the instructions which ended up working really well. Inline ghost text was not really possible in the time required for the implementation so I opted with a tooltip suggestion with a tab complete annotation which ended up working really well. the context was clean, the haiku claude model was absolutely fast enough for it to work within a reasonable amount of time, and the global summary context worked well enough for it to actually be useful in tandem with the the suggested actions I also implemented. 

The suggested interactions included a longer asyn process in which after a note was inserted into the db an AI generated summary on the customer was created and 3 recommended actions were also generated in which had 2 datatypes, a reference to the note id in which the recommendation was generated around and the suggestion itself. both in wchih could run asynchronously. 

## result

It worked really well! I was enthralled in it and spent way more time then I should have on it but even if they don't enjoy having to review all of that code. I want to incorporate more ai in my projects. it was surprisingly simple to actually implement. 

I honeslty want to fork the repo and keep working on it in a vibe codey way. 

reslistically I shouldnt and should just keep focusing on practicing the basics. 
