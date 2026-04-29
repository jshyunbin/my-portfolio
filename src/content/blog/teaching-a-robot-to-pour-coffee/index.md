---
title: "Teaching a Robot to Pour Coffee"
sub: "Notes from building a UMI rig"
kicker: "Field Notes"
date: "2026-04-12"
readTime: "8 min"
tags: ["Robotics", "UMI", "Lab"]
excerpt: "What I learned wrangling teleoperation hardware, latency budgets, and the unreasonable patience required to debug a gripper at 3am in the lab."
---

The first time the gripper closed on the kettle handle without me touching the joystick, I clapped out loud, alone, at 2:47 in the morning. That moment is the entire reason I came to this lab — and also, in retrospect, the cheapest part of the project.

## What a UMI actually is

A Universal Manipulation Interface is, in its skeletal form, a hand-held gripper rigged with a stereo camera, an IMU, and a piece of fishing line connecting your fingers to a state. You wear it. You do the task. It records. The recordings, after a deal of preprocessing and a generous amount of luck, become demonstrations a policy network can learn from.

The point is not to teleoperate. The point is to gather thousands of demonstrations without strapping the robot itself into a teleop rig — because the robot has a workspace, a power budget, a tendency to draw a small audience of curious grad students. The UMI doesn't. The UMI is a tool you put in a backpack.

> "If teleoperation is a phone call, UMI is a voice note. Slower to debug, much easier to send."

## Three weeks of fishing line

I had thought, naively, that the rig would arrive, that I would calibrate it for an afternoon, and that we would move on to learning. Instead I spent three weeks debugging fishing line tension, IMU drift, and a particularly stubborn USB cable that needed to sit at exactly the right angle to deliver bandwidth.

I am not yet convinced that any of this is generalizable. What I am convinced of is that nothing in the literature prepares you for the shape of a real laboratory: the way a lighting change at 4pm shifts your stereo calibration; the way a Saturday morning power blip costs you Monday's training run.

```python
# clamp grip width to the calibrated home pose
import numpy as np
GRIP_HOME = np.array([0.041, 0.041])  # meters, per finger

def clamp(width):
    return np.clip(width, 0.0, GRIP_HOME.sum())
```

## What I'd tell a past me

Buy two of every cable. Photograph the workbench at the end of every session. Treat the IMU like a small, honest animal: feed it slow rotations and it will tell you the truth.

The kettle still wobbles, sometimes. The policy still confuses the rim of a mug for the lip of a saucer about one time in twelve. But it pours, mostly. And I've learned to take that as a kind of progress that doesn't always show up in a loss curve.
