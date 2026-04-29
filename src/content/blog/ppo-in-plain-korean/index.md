---
title: "PPO, in Plain Korean"
sub: "Why proximal policy optimization clicks once you stop reading the paper"
kicker: "Essay"
date: "2026-02-28"
readTime: "12 min"
tags: ["RL", "ML"]
excerpt: "An attempt to write the explanation I wish someone had handed me at the start of my RL coursework — half intuition, half code, mostly diagrams."
---

The first time I read the PPO paper, I understood roughly sixty percent of the sentences and none of the intuition. That's not a knock on Schulman et al. — it's a fair description of what a research paper is for. Papers prove things. They are not required to explain why the thing they're proving is the obvious next move.

This essay is the explanation I wanted at the start of my RL coursework. It assumes you know what a policy is, you've heard of gradient descent, and you're suspicious that there's a simpler story underneath the math.

## Why trust regions exist

Policy gradient methods have a fundamental instability: a single bad update can collapse a policy from "decent" to "random" in one step, and you can't easily undo it. Early methods like TRPO tried to fix this by constraining how far the policy was allowed to move in a single update — a "trust region" around the current policy.

The constraint worked. The implementation was a nightmare. TRPO requires computing a matrix inverse that scales quadratically with the number of parameters. For networks of any real size, this is not practical.

> "The goal of PPO is to get the stability of TRPO with none of the second-order math."

## The clipping trick

PPO's answer is elegant in its crudeness: instead of formally constraining the update, just clip the objective function when the policy moves too far.

The key quantity is the probability ratio $r_t(\theta)$ — how much more (or less) likely the new policy is to take the action that was taken, compared to the old policy:

$$r_t(\theta) = \frac{\pi_\theta(a_t | s_t)}{\pi_{\theta_{old}}(a_t | s_t)}$$

If $r_t$ is far from 1, the policies have diverged. PPO clips $r_t$ to the interval $[1-\varepsilon, 1+\varepsilon]$ — typically $\varepsilon = 0.2$ — before using it in the objective. This means there's a hard limit on how much credit (or blame) the new policy can claim for an action.

```python
def ppo_clip_loss(ratio, advantage, epsilon=0.2):
    clipped = torch.clamp(ratio, 1 - epsilon, 1 + epsilon)
    return -torch.min(ratio * advantage, clipped * advantage).mean()
```

## What the clipping actually prevents

Here's the intuition that clicked for me. Suppose an action turned out to be very good (large positive advantage). Without clipping, the optimizer would push the policy hard toward that action. But the advantage estimate is noisy — it's computed from a finite sample of experience — so the optimizer might be overconfident.

Clipping says: "I'll only take credit for actions where my new policy is within 20% of my old policy. Outside that range, I stop benefiting from the update." This limits how aggressively the policy changes in a single step.

## Why it works in practice

PPO is not theoretically tight. The clipping is a heuristic. But it turns out to be a very good heuristic: it's sample-efficient, stable across a wide range of environments, and simple enough that you can debug it when it breaks.

When I implemented it for the protein sequence design project, the stability gain over a vanilla policy gradient was immediate and obvious. The loss curves stopped oscillating. The policy stopped collapsing after good runs.

Sometimes the right tool is the one you can actually use.
