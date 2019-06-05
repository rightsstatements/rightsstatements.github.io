---
layout: page
title: Rights Statements - Buttons and other assets
section_id: documentation
lang: en
---

# Buttons and other assets

On this page you find the statement buttons and icons that you can use when applying the rights statements online. Please refer to our [guidelines for applying the rights statements]({{ site.baseurl }}/en/documentation/usage_guidelines.html) for more information on how to correctly apply the rights statements online.

<div class="box">
## Buttons

Below you find SVG and PNG versions of our buttons that are intended for use as links to the rights statements. For each button we provide a version with blue text and a black and white version. You can also download [a ZIP file with all button images]({{ site.baseurl }}/files/buttons/rs_buttons_all.zip) which also includes a black version with a fully transparent background and a white version with a fully transparent background of each button.

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
            {% capture file_url %}{{ site.baseurl }}/files/buttons/{{ button }}.dark-white-interior-blue-type{% endcapture %}
            <img src="{{ file_url }}.svg" />
            <h4>Download</h4>
            <a href="{{ file_url }}.svg">SVG</a> <a href="{{ file_url }}.png">PNG</a>
          </div>
          <div class="statement-button">
            {% capture file_url %} {{ site.baseurl }}/files/buttons/{{ button }}.dark-white-interior{% endcapture %}
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

<div class="box">
## Icons

Below you find the three icons for the three different categories of rights statements. For each icon we are providing both an SVG and a PNG version. You can also download [a ZIP file with all icons]({{ site.baseurl }}/files/icons/rs_icons_all.zip) which also includes a black version with a fully transparent background and a white version with a fully transparent background of each icon.

  <div class="row" markdown="0">

  {% for member in site.data.assets %}

    <div class="medium-4 columns">
      <div class="row">
        <h3>{{ member.name }}</h3>
      </div>
      {% for icon in member.icons %}
      <div class="row">
        <div class="statement-icon">
          {% capture file_url %}{{ site.baseurl }}/files/icons/{{ icon }}.Icon-Only.dark{% endcapture %}
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
