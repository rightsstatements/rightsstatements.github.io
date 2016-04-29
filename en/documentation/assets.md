---
layout: page
title: Rights Statements - Buttons and other assets
section_id: documentation
---

# Buttons and other assets

## Buttons

<div class="box" markdown="0">
  <div class="row">
  
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
</div>
