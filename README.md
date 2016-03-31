# rightsstatements.org CMS

This CMS uses [jekyll](https://jekyllrb.com/). No plugins are currently in use, allowing deployment to [GitHub Pages](https://pages.github.com/).

## Editing content

Pages live in their language-specific directory. Since we are launching with English only, currently all pages are located in [en](https://github.com/rightsstatements/rightsstatements.github.io/tree/master/en) or a sub-directory thereof. To edit e.g. the [FAQ](https://github.com/rightsstatements/rightsstatements.github.io/blob/master/en/documentation/faq.md), simply locate that file on GitHub and click on the pen icon in the upper right-hand corner:

![Locate file](files/images/file.png?raw=true)

All pages start with a block containing [Jekyll "front matter"](https://jekyllrb.com/docs/frontmatter/) followed by the actual content written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). The only front matter used at this time is `layout` (which can be `page` or `front` in the special case of the landing page), `title` and `section_id` (which is used to group menu items). Valid values for `section_id` are `statements`, `about`, `documentation` and `get_involved`. In case of the FAQ, set it to `documentation` since they are a child of that section in the menu:

![Edit file](files/images/edit.png?raw=true)

Once you are done with editing an individual file, commit the changes right to the `master` branch:

![Edit file](files/images/commit.png?raw=true)

This will cause changes to be visible directly on http://rightsstatements.github.io. When you are done making all changes you wish to publish to the live site, click on "New pull request":

![Open pull request](files/images/open_pull_request.png?raw=true)

Create a pull request from the `master` to the `production` branch:

![Create pull request](files/images/create_pull_request.png?raw=true)

## Adding content

To add content, navigate to [en](https://github.com/rightsstatements/rightsstatements.github.io/tree/master/en) or a sub-directory thereof and click on "New file":

![New file](files/images/new_file.png?raw=true)

Then, assign a file name with the `.md` extension, add the front matter and finally your content:

![Add file](files/images/add_file.png?raw=true)

When you are done, commit the file to `master` and create a pull request as described above.

## Managing assets

If you have assets such as images or PDFs to add, navigate to the [files](https://github.com/rightsstatements/rightsstatements.github.io/tree/master/files) directory:

![Upload files](files/images/upload_files.png?raw=true)

Then, click on "Upload files":

![Choose files](files/images/choose_files.png?raw=true)

When done adding files, again commit them to the `master` branch and create a pull request as described above. To reference an asset from a page, take a note of the file name and create a link or embed an image like so:

    [Link caption]({{ site.baseurl }}/files/document.pdf)
    ![Image text]({{ site.baseurl }}/files/images/picture.png)

## Managing the menu structure

The menu is built from the [nav.yml](https://github.com/rightsstatements/rightsstatements.github.io/blob/master/_data/nav.yml). All top level entries consist of a `name`, the `path` and a `section_id`. Currently only one level of child entries is supported, these entries only have a `name` and the `path`. Any paths starting with `http://` are interpreted as external links, the others are interpreted as internal and prefixed with the current language automatically.
