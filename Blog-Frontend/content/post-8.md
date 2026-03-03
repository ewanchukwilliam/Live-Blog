---
title: Images
description: Today I struggled with the design of a Content Delivery Network Configuration
date: 2026-02-27
---

# Images are a pain

# insert pain image here

I never though images would be such a specific problem for distributed systems. I wanted at first to just upload the images directly to my server. It would always be through an authenticated route so I wasnt particularly concerned about safety. But in my junior way's I decided to instead of simply complete my task I wanted to configure an image CDN for my ecommerce application.

Granted this is actually the more forward thinking solution for load times and frontend throughput handling. caching images yes could work but it would erase my local bandwidth for self-hosting this thing. It really is the appropriate solution here. simplicity would genuinely be causing me issues with my internet bill. I

Gotta say its amazing how easily configurable an s3 bucket is for file storage. I don't know why people dont just use these for dirt cheap cloud storage. 

## why painful? 
I just thought I was gonna File.Upload my way out of this. but EVERYTHING supports images. Stripe cna take in an image catalog. S3 can publicly expose imageUrls. springboot can handle images. 

The most useful part of all of this? I now know how to handle files on form inputs. that's always been a bit of a black box for me. how do you append that kind of information to a request. is it in the body? I've never had the chance to inspect the request. the internet is very secure and doesn't easily let you inspect the headers for such requests. 

It's a very intentional process to learn about "multipart/form-data" on the frontend its literally just give it a name and append to a list. very simplistic. It's cool that there are so many established protocols for things like this I've got to say. I thought the internet was going to be much messier than this. 

## pain.
Figuring out that stripe strips stringpath urls was not an easy thing to figure out. absolutely everything else was working. Also gotta remind myself to add i a hard rollback for the Inventory Item creation if stripe fails. a silent failure is terrible and annoying. 
