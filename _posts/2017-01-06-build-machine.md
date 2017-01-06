---
title: "Build PC for running deep reinforcement learning tasks"
excerpt: 'Assembling PC for deep reinforcement learning<br/><br/><br/>'
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: https://c1.staticflickr.com/1/534/31744635880_a24435e692_h.jpg
  teaser: https://c1.staticflickr.com/1/534/31744635880_a24435e692_h.jpg
categories:
  - PC
  - Deep Reinforcement Learning
tags:
  - PC
  - DRL
---

To handle heavy tasks of deep reinforcement learning (DRL), a PC needs to have a strong configuration with GPU included. 
After referenced a lot of articles on the Internet (mainly from [this](http://graphific.github.io/posts/building-a-deep-learning-dream-machine/)), I finally choose a configuration, which can meet my requirements.
This is information of the PC's configuration:

| Hardware | Name | Description | Price |
|:--------|:-------:|--------:|
| Motherboard   | [X99E_WS](https://www.asus.com/Motherboards/X99E_WS/)  | Allow to add multiple GPUs | 500$   |
| CPU   | [Intell Core i7-5930K](http://ark.intel.com/products/82931/Intel-Core-i7-5930K-Processor-15M-Cache-up-to-3_70-GHz)  | Not too much important (because we have GPU) | 650$   |
| GPU   | [NVIDIA GTX 1080](https://www.nvidia.com/en-us/geforce/products/10series/geforce-gtx-1080/)  | Defeat most of GPU except Titan series (expensive) | 700$  |
| Ram   | 32GB DDR4 | Nothing special. We can upgrade later | 200$  |
| SSD   | [500 GB Samsung 850 EVO](http://www.samsung.com/semiconductor/minisite/ssd/product/consumer/850evo.html)  | Fast enough to read/write IOs | 200$  |
| PSU   | [Leadex Gold 1000W](http://www.super-flower.com.tw/products_detail.php?class=2&sn=17&ID=99&lang==)  | Enough to supply electric to whole PC | 250$  |
| CPU Cooler | [CNPS10X Optima](http://www.zalman.com/contents/products/view.html?no=344)  | Best for CPU Socket 2011v3 | 50$  |
| Case   | Stealth (A domestic brand in Korea) | A good thing from this PC case is that it has a lot of fans | 50$  |
|=====
| Total   |   		| 	|2600$	|

{% capture fig_img %}
![Foo](https://c1.staticflickr.com/1/534/31744635880_a24435e692_h.jpg)
{% endcapture %}
<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>PC's hardware.</figcaption>
</figure>

As an amateur, I must spend almost two days for assembling the PC and installing softwares (Ubuntu, Tensorflow and other stuffs).

I end the setup by running a new DRL algorithm called DDPG in swing-up pendulum task. The code is written in Python and you can find them in [here](https://github.com/pemami4911/deep-rl).

<figure class="align-center" style="width: 320px">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/ddpg_swing.gif" alt="">
  <figcaption>Running DDPG with swing-up pendulum (OpenAI Gym)</figcaption>
</figure> 

Finally, the PC run well and I hoped that this PC will help me do more research tasks in deep reinforcement learning during PhD life :)