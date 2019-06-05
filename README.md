# rightsstatements.org CMS

This CMS uses [Jekyll](https://jekyllrb.com/).

## Deployment

No Jekyll plugins are currently in use, allowing deployment to [GitHub Pages](https://pages.github.com/). Committing or merging into the `master` branch automatically triggers a rebuild of the pages available at http://rightsstatements.github.io/. Committing or merging into either `master` or `production` also triggers a build of the site to be pushed into `master-pages` or `production-pages` respectively. To deploy such a build (from your local machine), you can use the `site.yml` ansible playbook:

    $ git clone https://github.com/rightsstatements/rights-deploy.git
    $ cd rights-deploy
    $ ansible-playbook -i {staging|production} -u {user} site.yml

This will install the Apache webserver and configure a virtual host according to the settings defined in the `[site:vars]` section of the inventory file. As is, the inventory files will expose the site on port 8080 and use `master-pages` and `production-pages` for the `staging` and `production` inventories respectively. Note that this requires a user account with the appropriate permissions on the staging and/or the production server.

Please also note that port 8080 is blocked for the outside on our target servers, which makes it necessary to also configure the proxy:

    $ ansible-playbook -i {staging|production} -u {user} proxy.yml

Please also note that it is not necessary to deploy the `master-pages` to the staging server, because http://rightsstatements.github.io/ always shows the corresponding build.

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

NB: a Pull Request shall be merged only after the build has completed. Doing otherwise may create a build error.

After this, deploy the site (or have it deployed by someone with the right permission) on the staging and/or the production server using the instructions in the Deployment section above.

## Implementing translations

To implement translations:

* Add a new directory using the language tag for the language you're adding. (It's probably easiest to copy from one of the existing translations, e.g. `es`).
* Edit each of the following files, pasting in translations and ensuring that the `lang` key in the YAML front matter gets set. For example, for language `xx`:
  - `xx/index.md`
  - `xx/statements/collection-ic.md`
  - `xx/statements/collection-nc.md`
  - `xx/statements/collection-other.md`
  - `xx/statements/index.html`
  - `xx/statements/vocab.md`
* Edit `_config.yml`, `_config_develop.yml`, and `_config_production.yml` to add keys and associated translations for the language you're editing.
* Also edit `_data/nav.yml` and `_data/slides.yml` adding appropriate keys and associated translations for the language you're editing.
* Confirm that there are no non-breaking spaces (`\u00A0`), no "smart quotes", and no em- or en-dashes.
* If provided, add any PDF documentation related to the translation to the `files` directory.

See also notes on implementing translations for the [rights app](https://github.com/rightsstatements/rights-app/blob/master/README.md) and the [data model](https://github.com/rightsstatements/data-model/blob/master/README.md) for more information.

## Adding content

To add content, navigate to [en](https://github.com/rightsstatements/rightsstatements.github.io/tree/master/en) or a sub-directory thereof and click on "New file":

![New file](files/images/new_file.png?raw=true)

Then, assign a file name with the `.md` extension, add the front matter and finally your content:

![Add file](files/images/add_file.png?raw=true)

When you are done, commit the file to `master` and create a pull request as described above.
After this, deploy the site (or have it deployed by someone with the right permission) on the staging and/or the production server using the instructions in the Deployment section above.

## Managing assets

If you have assets such as images or PDFs to add, navigate to the [files](https://github.com/rightsstatements/rightsstatements.github.io/tree/master/files) directory:

![Upload files](files/images/upload_files.png?raw=true)

Then, click on "Upload files":

![Choose files](files/images/choose_files.png?raw=true)

When done adding files, again commit them to the `master` branch and create a pull request as described above. To reference an asset from a page, take a note of the file name and create a link or embed an image like so:

    [Link caption]({{ site.baseurl }}/files/document.pdf)
    ![Image text]({{ site.baseurl }}/files/images/picture.png)

After this, deploy the site (or have it deployed by someone with the right permission) on the staging and/or the production server using the instructions in the Deployment section above.

NB: adding some files may require changing existing redirections (notably, for the whitepaper URIs). These updates currently need to be done in three different config files at the root of the repository: `_config.yml`, `_config_develop.yml` and `_config_production.yml`.

## Managing the menu structure

The menu is built from the [nav.yml](https://github.com/rightsstatements/rightsstatements.github.io/blob/master/_data/nav.yml). All top level entries consist of a `name`, the `path` and a `section_id`. Currently only one level of child entries is supported, these entries only have a `name` and the `path`. Any paths starting with `http://` are interpreted as external links, the others are interpreted as internal and prefixed with the current language automatically.
