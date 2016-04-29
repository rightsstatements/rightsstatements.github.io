---
layout: page
title: Rights Statements - Buttons and other assets
section_id: documentation
---

# Buttons and other assets

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

## Buttons

<div class="box row" markdown="0">

{% for member in site.data.assets %}

<div class="medium-4 columns">
  <div class="row">
    <h3>{{ member.name }}</h3>
  </div>
  {% for button in member.buttons %}
  <div class="row">
    <div class="statement-button">
      <img src="{{ site.url }}{{ site.baseurl }}/files/icons/{{ button }}" />
      <h4>Download</h4>
      <a href="{{ site.url }}{{ site.baseurl }}/files/icons/{{ button }}">SVG</a>
    </div>
  </div>
  {% endfor %}
</div>

{% endfor %}

</div>
