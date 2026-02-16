# Kube-VIP (Leader Election per-Service + ARP Mode)

## Overview

Kube-VIP is a lightweight Kubernetes LoadBalancer implementation that provides Virtual IP (VIP) management using leader election.

It can be used for both:

- Control plane HA
- Service LoadBalancer IPs

## How It Works (ARP Mode)

1. A Service of type `LoadBalancer` is created.
2. Kube-VIP assigns a VIP.
3. One node becomes the leader (via leader election).
4. The leader advertises the VIP using ARP.
5. If the leader node fails, a new node takes over and re-announces the IP.

## Architecture

- Leader election per-service
- ARP-based Layer 2 announcement
- No BGP required

## Pros

- Simple and lightweight
- Works in bare-metal environments
- Easy HA for control plane

## Cons

- One active node per VIP
- Not as feature-rich as eBPF-based solutions
