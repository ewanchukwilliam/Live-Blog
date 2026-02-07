---
title: Why I Bought Old Dell PowerEdge R720s (Knowing Nothing About Them)
description: Power draw alone is $20/month for 2 nodes. The savings are in compute, not electricity.
date: 2025-01-07
---

# Why I Bought Old Dell PowerEdge R720s (Knowing Nothing About Them)

I was spending $70 CAD per month just on the EKS control plane. Not the nodes, not the storage, not the load balancers. Just the control plane sitting there existing.

So I did what any cheap bastard would do: I bought a couple old Dell PowerEdge R720s off eBay without knowing a single thing about server management.

## The Math

$70/month for a control plane that does nothing but exist. For that price, I could own actual hardware in a few months. Enterprise R720s that some company got rid of because they were "old."

## The Learning Curve

I downloaded Proxmox VE not really knowing what a hypervisor was. Grabbed a handful of ISOs (Ubuntu Server, Debian, TrueNAS) figuring I'd learn by breaking things.

The first problem? I bought an SSD optical drive caddy to replace the DVD drive for faster boot times. It got lost in the mail. So now I'm booting off a hard drive, and these things take forever to POST.

We're talking minutes. BIOS checks, RAID controller initialization, iDRAC doing whatever iDRAC does. I could make coffee waiting for the login screen.

## Current State

Because of the slow boot times, I'm holding off on major configuration. It doesn't make sense to set up complex networking when every reboot costs me five minutes of staring at a Dell logo.

Once the replacement SSD caddy arrives:

1. Clone the boot drive to SSD
2. Configure the RAID array properly
3. Set up VLANs
4. Figure out what all those iDRAC options do

## The Plan: KEDA

I want to run Kubernetes but don't need it running all the time. The plan is to use [KEDA](https://keda.sh/) to spin clusters up and down based on traffic. Zero traffic? Zero nodes. Someone hits the site? Spin up, serve, spin down.

Combined with iDRAC power management, the servers could sleep when idle.

## The Reality Check

Power draw for 2 nodes running is already around $20 CAD/month. So the savings aren't in electricity. They're in compute.

For $20/month in power, I get dual Xeon E5s, 128GB+ of ECC RAM, and enough drive bays to hoard data forever. Try getting that on AWS for $20.

## Next Steps

- Wait for that SSD caddy
- Learn iDRAC power management
- Set up monitoring
- Figure out the KEDA autoscaling setup
