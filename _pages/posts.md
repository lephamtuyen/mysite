---
layout: archive
title: "Posts"
permalink: /posts/
author_profile: true
---

<div class="grid__wrapper">
  {% capture written_year %}'None'{% endcapture %}
	{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html%}
  {% endfor %}
</div>