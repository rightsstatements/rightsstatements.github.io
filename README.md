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

## Implementing translations

[Transifex](https://www.transifex.com/graphthinking-gmbh/rightsstatementsorg/) is used to carry out translations of the website. The relevant resources are tagged with the category `website`. Please get in touch with the [maintainers](https://www.transifex.com/graphthinking-gmbh/rightsstatementsorg/settings/maintainers/) to add a new language to the project.

To incorporate updates or new translations:

* Install [`tx`](https://docs.transifex.com/client/introduction) and run [`tx pull`](https://docs.transifex.com/client/pull#command-options).
* Edit `_config.yml` and `_config_production.yml` to add keys and associated translations for the language you're editing.
* If provided, add any PDF documentation related to the translation to the `files` directory.

## Editing content

### Access CMS

Open [`/admin/`](https://rightsstatements.org/admin/) and log in with your GitHub account.

### Creating a new post

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
[PDF]({{site.url}}/files/160611proposal_for_implementation_UND.pdf)
```




## 🚀 Automated Release & Deployment Process

This repository uses automated workflows to manage deployments. Code deployment to target environments is triggered upon creation of new
**Git Releases**.

### ⚠️ Important: Deletion Behavior
* **Automatic Roll-Forward/Fall-Back:** If a currently active Git Release is deleted, the system will automatically trigger a deployment for whichever release becomes the next available/valid version. Please exercise extreme caution when deleting releases in this repository.

---

### ⚙️ How it Works

The deployment pipeline bridges Git and Jenkins using webhook automation through the following steps:


```

[ Git Release Created ]
│
▼
[ Webhook Event Fired ]
│
▼
[ Jenkins Job Triggered ] ──► (Passes Release Tag Info)
│
▼
[ Automated Deployment ]  ──► (Checkouts latest tag, Builds & Deploys)

```

1. **Create Release** A developer creates and publishes a new Release in Git with a specific version tag (e.g., `v1.2.0`).
   
2. **Webhook Trigger** The Git platform detects the release creation event and immediately fires an automated webhook payload.
   
3. **Jenkins Execution** The webhook securely triggers our dedicated Jenkins deployment job, passing along the specific release tag information.
   
4. **Automated Deployment** Jenkins checkouts the latest release code matching that tag, builds the required software artifacts, and automatically deploys them to the target environment.
