require "jekyll-spark"

module Jekyll
  class SearchComponent < ComponentTag
    def template(context)
      render = %Q[
        <div class="search-component">
          toDo create component from bootstrap
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  "Search",
  Jekyll::SearchComponent,
)