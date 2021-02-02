require "jekyll-spark"

module Jekyll
  class SearchComponent < ComponentTag
    def template(context)
      data = @props["data"]
      render = %Q[
        <div>example of SearchComponent</div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  "Search",
  Jekyll::SearchComponent,
)