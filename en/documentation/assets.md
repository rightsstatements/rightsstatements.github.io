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
        <div class="statement-buttons">
          <div class="statement-button">
            {% capture file_url %} {{ site.url }}{{ site.baseurl }}/files/icons/{{ button }}.dark-white-interior-blue-type{% endcapture %}
            <img src="{{ file_url }}.svg" />
            <h4>Download</h4>
            <a href="{{ file_url }}.svg">SVG</a> <a href="{{ file_url }}.png">PNG</a>
          </div>
          <div class="statement-button">
            {% capture file_url %} {{ site.url }}{{ site.baseurl }}/files/icons/{{ button }}.dark-white-interior{% endcapture %}
            <img src="{{ file_url }}.svg" />
            <h4>Download</h4>
            <a href="{{ file_url }}.svg">SVG</a> <a href="{{ file_url }}.png">PNG</a>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>

  {% endfor %}

  </div>
</div>
