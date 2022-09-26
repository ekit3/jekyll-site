# jekyll-site

## quickstart

### with docker

If you have docker installed, you can start your instance with the following command :

```shell
docker run --rm --volume=$(pwd):/srv/jekyll -p 4000:4000 -p 8888:8888 jekyll/jekyll:3.8 jekyll serve --force_polling --livereload --livereload-port 8888 --host 0.0.0.0
```

then go to [http://localhost:4000](http://localhost:4000)

### with ruby

```shell
gem install jekyll bundler
bundle install
bundle exec jekyll serve --force_polling --livereload --livereload-port 8888 --host 0.0.0.0
```

### upadte folder `_posts` sub module 

```shell
git submodule update --remote                                                                             
```