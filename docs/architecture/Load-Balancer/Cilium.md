# Cilium + LB-IPAM + L2 Announcements

## Overview

Cilium is a Kubernetes CNI based on eBPF that provides networking, security, and load balancing capabilities.

When combined with LB-IPAM and L2 Announcements, Cilium can allocate and advertise external LoadBalancer IPs without requiring an external cloud provider.

## Components

- **LB-IPAM**: Allocates LoadBalancer IPs from a defined pool.
- **L2 Announcements**: Uses ARP (IPv4) or NDP (IPv6) to announce the VIP on the local network.
- **eBPF datapath**: Performs high-performance load balancing inside the node.

## How It Works

1. A Service of type `LoadBalancer` is created.
2. LB-IPAM assigns an IP from a configured pool.
3. One node announces the IP at Layer 2 (ARP/NDP).
4. Traffic hitting the VIP is handled via eBPF and distributed to backend Pods.

## Pros

- High performance (eBPF-based)
- No extra load balancer component
- Integrated networking + security + LB
- Good for modern Kubernetes clusters

## Cons

- More complex to configure
- Requires Cilium as CNI
