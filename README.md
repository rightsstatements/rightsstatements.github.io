# rightsstatements.org CMS

This CMS uses [Jekyll](https://jekyllrb.com/).

## Deployment

Create a new OAuth app on GitHub [https://github.com/settings/applications/new](https://github.com/settings/applications/new)

![Oauth](files/images/gitHubOauthApp.png)

On [Netlify](https://www.netlify.com/) create a new deploy choosing the repository and using this configuration.

`Build & deploy` -> `Build settings`

![](files/images/buildSettings.png)

`Build & deploy` -> `Deploy contexts`

![](files/images/deployContexts.png)

On `Identity`, enable identity with GitHub as external provider.

![](files/images/identity.png)

In `Access control` -> `OAuth`, install an new GitHub provider and set the `Client ID` and `Client Secret` generated on GitHub.

![](files/images/OAuth.png)

Set this environment variables `Build & deploy` -> `Environment`

![](files/images/enviromentVar.png)

## Implementing translations

ToDo

## Editing content

### Access CMS

Open `/admin` and log in with GitHub.

### Creating a new post

Click `New Blog`

![](files/images/newPost.png)

Add a **title**, **date**, **body** and click save.

![](files/images/createPost.png)

**By default new post are not published** and have the status *draft*, to publish them is necessary to click the `Publish` button

Is also possible to see a preview of the post by clicking `View Preview`, this link takes a while to load since new previews trigger separate build.

![](files/images/post.png)

Changing the status will only affect how is shown in the workflow view and not publish it.

![](files/images/workflow.png)

## Managing assets

Click media on the top bar.

![](files/images/media1.png)

Click upload and choose your asset.

![](files/images/media2.png)

New images can be added by pressing the button in the editor.

![](files/images/addImg.png)

Other files must be added as markdown.

```
[PDF](/files/160611proposal_for_implementation_UND.pdf)
```
