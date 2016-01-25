# rightsstatements.org CMS

This CMS uses [jekyll](https://jekyllrb.com/). No plugins are currently in use, allowing deployment to [GitHub Pages](https://pages.github.com/).

## Adding content

You can add both, [posts](http://jekyllrb.com/docs/posts/):

    $ echo "
    ---
    layout: post
    title: Hello, world!
    author: John Doe <john@doe.com>
    ---

    Lorem ipsum dolor sit amet ...
    " > en/_posts/2016-01-25-hello-world.md

and [pages](http://jekyllrb.com/docs/pages/):

    $ echo "
    ---
    layout: page
    title: My new page!
    author: John Doe <john@doe.com>
    ---

    Lorem ipsum dolor sit amet ...
    " > en/my-new-page.md

## Multilinguality

To add translated content, simply use the same slug (the date may differ) in the corresponding language's directory:

    $ echo "
    ---
    layout: post
    title: Hallo, Welt!
    author: John Doe <john@doe.com>
    ---

    Lorem ipsum dolor sit amet ...
    " > de/_posts/2016-01-25-hello-world.md


## Static content

Static content such as images live in the `files` directory. To properly reference a file, prefix it with `{{ site.baseurl }}`:

    ![dpla]({{ site.baseurl }}/files/dpla.jpg)

## Deployment

To deploy to GitHub Pages, simply pull any changes into the `gh-pages` branch.

To deploy to a server with jekyll installed:

    $ git clone https://github.com/graphthinking/rights-site.git
    $ cd rights-site
    $ jekyll serve

This will start jekyll on port 4000.

To deploy to a server without jekyll, generate the site and copy the resulting `_site` directory to a webserver:

    $ git clone https://github.com/graphthinking/rights-site.git
    $ cd rights-site
    $ jekyll build
    $ scp -r _site/* user@host:/path/to/web/root
