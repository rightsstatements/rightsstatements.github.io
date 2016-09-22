---
layout: page
title: Rights Statements - Buttons and other assets
section_id: documentation
---

# Buttons and other assets

<div class="box">
## Buttons

Below you find svg and png versions of our buttons that are intended for use as links to the rights statements. For each button we provide a version with blue text and a black and white version. You can also download [a zip file with all button images]({{ site.url }}{{ site.baseurl }}/files/buttons/rs_buttons_all.zip) which also includes a black version with a fully transparent background and a white version with a fully transparent background of each button.

  <div class="row" markdown="0">

  {% for member in site.data.assets %}

    <div class="medium-4 columns">
      <div class="row">
        <h3>{{ member.name }}</h3>
      </div>
      {% for button in member.buttons %}
      <div class="row">
        <div class="statement-buttons">
          <div class="statement-button">
            {% capture file_url %}{{ site.url }}{{ site.baseurl }}/files/buttons/{{ button }}.dark-white-interior-blue-type{% endcapture %}
            <img src="{{ file_url }}.svg" />
            <h4>Download</h4>
            <a href="{{ file_url }}.svg">SVG</a> <a href="{{ file_url }}.png">PNG</a>
          </div>
          <div class="statement-button">
            {% capture file_url %} {{ site.url }}{{ site.baseurl }}/files/buttons/{{ button }}.dark-white-interior{% endcapture %}
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

## Icons

Below you find the three icons for the three different categories of rights statements. For each icon we are providing both an svg and a png version. You can also download [a zip file with all icons]({{ site.url }}{{ site.baseurl }}/files/icons/rs_icons_all.zip) which also includes a black version with a fully transparent background and a white version with a fully transparent background of each icon.

  <div class="row" markdown="0">

  {% for member in site.data.assets %}

    <div class="medium-4 columns">
      <div class="row">
        <h3>{{ member.name }}</h3>
      </div>
      {% for icon in member.icons %}
      <div class="row">
        <div class="statement-icon">
          {% capture file_url %}{{ site.url }}{{ site.baseurl }}/files/icons/{{ icon }}.Icon-Only.dark{% endcapture %}
          <img src="{{ file_url }}.svg" />
          <h4>Download</h4>
          <a href="{{ file_url }}.svg">SVG</a> <a href="{{ file_url }}.png">PNG</a>
        </div>
      </div>
      {% endfor %}
    </div>

  {% endfor %}

  </div>

</div>
