---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: post
---
<div id="posts">
    COUCOU!!!!!!!!!!!!!!!
    <ul>
        {% for post in site.posts %}
        <li>
            <span class="date">{{ post.date | date: '%B %d, %Y' }}</span>
            <h3><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></h3>
            <p class="description">{% if post.description %}{{ post.description  | strip_html | strip_newlines | truncate: 250 }}{% else %}{{ post.content | strip_html | strip_newlines | truncate: 250 }}{% endif %}</p>
        </li>
        {% endfor %}
    </ul>
    <h2>{{ site.data.samplelist.docs_list_title }}</h2>
</div>
