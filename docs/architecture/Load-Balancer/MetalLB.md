# MetalLB (Layer 2 Mode)

## Overview

MetalLB is a popular LoadBalancer implementation for bare-metal Kubernetes clusters.

In Layer 2 mode, it provides external IPs by responding to ARP requests for assigned VIPs.

## How Layer 2 Mode Works

1. A Service of type `LoadBalancer` is created.
2. MetalLB assigns an IP from a configured pool.
3. One node announces ownership of that IP using ARP.
4. Traffic sent to the VIP is routed to that node and forwarded to Pods.

## Architecture

- IP address pool configuration
- Speaker component announces IP
- Controller manages IP assignments

## Pros

- Simple to deploy
- Widely adopted
- No BGP required in L2 mode

## Cons

- Single-node ownership per IP
- Not as performant as eBPF-based solutions
- Advanced routing requires BGP mode
