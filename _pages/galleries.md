---
layout: archive
title: "Galleries"
permalink: /galleries/
author_profile: false
---
<div class="grid__wrapper">
  {% for post in site.galleries %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>