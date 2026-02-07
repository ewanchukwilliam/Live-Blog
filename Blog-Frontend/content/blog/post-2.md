---
title: Why I Bought Old Dell PowerEdge R720s (Knowing Nothing About Them)
description: Power draw alone is $20/month for 2 nodes. The savings are in compute, not electricity.
date: 2025-01-07
---

# My Perilous journey into self hosting 

## Why am I doing this?

I'm cheap and curious. I was spending $70 CAD per month just on the EKS control plane. Not the nodes, not the storage, not the load balancers. Just the control plane sitting there existing. So I bought a couple old Dell PowerEdge R720s off eBay without knowing anything about server management.

## The learning curve

I downloaded Proxmox VE not really knowing what a hypervisor was. Grabbed a handful of ISOs (Ubuntu Server, Debian, TrueNAS) figuring I'd learn by breaking things. Thats usually how it goes for me.

The first problem? I bought an SSD optical drive caddy to replace the DVD drive for faster boot times. It got lost in the mail. So now I'm booting off a hard drive and these things take forever to POST. We're talking minutes. BIOS checks, RAID controller stuff, iDRAC doing whatever iDRAC does. I could make coffee waiting for the login screen.

## Current state

Because of the slow boot times I'm holding off on major configuration. Doesn't make sense to set up complex networking when every reboot costs me five minutes of staring at a Dell logo.

I've downloaded the .iso for Arch, Ubuntu, Kali, and run them all through proxmox. I've measure the power draw with 4 small form factor front bay hdd drives to be at most 160Watts. The servers come with built in power management thats instanely convenient. I'm enjoying how terminal heavy everything is on this side of development.

Once the replacement SSD caddy arrives I'll clone the boot drive and actually configure the RAID array properly. Maybe figure out what all those iDRAC options do.

## The plan

I want to run Kubernetes but don't need it running all the time. The plan is to use [KEDA](https://keda.sh/) to spin clusters up and down based on traffic. Zero traffic? Zero nodes. Someone hits the site? Spin up, serve, spin down. Combined with iDRAC power management the servers could sleep when idle.

## Is it actually cheaper? 

Power draw for 2 nodes running is already around $20 CAD/month. So the savings aren't in electricity. They're in compute. For $20/month in power I get dual Xeon E5s, 128GB+ of ECC RAM, and enough drive bays to hoard data forever. Try getting that on AWS for $20.

## Upcoming decision time

Do I move away from my beloved neovim? I find I wast more time building my configuration that I do designing software. the most I can say I benefit is the grit in debugging community developed plugins. They can be absolutely terrible and everyone has their own way of doing things bu they still have value. I want to learn to contribute to open source more because of working with this stuff but alas the big question...

is it worth it? I'm thinking about moving to vim. I've made a disgusting custom configuration that is difficult to maintain. I think the direction of neovim being wholey custom to a developer is shooting itself in the foot a bit. It's like the Arch of linux. you can say you know lots more about computers/editors but in reality are you more productive because of it? I don't really know. I might be better served with raw vim. I see its still more popular than regular neovim so I'm questioning where I move to in the future. I'm seeing the value of single mindedness and simplicity. Well developed software should be built in mind of others and maintainability I often dont see with neovim plugins. but then again I may still not be contributing enough to open source to have a valid opinion in that arena.  

for future reference, I doubt I'll ever touch arch and risk the productivity sink of trying to mess around with that. 

ghist? yes I'm going to look into simplifying from neovim to vim. 


Still figuring things out but thats the fun part I guess.
