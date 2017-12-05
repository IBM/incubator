# *IBMCode: Incubator Repository*

*IBMCode: Incubator Repository* is a developer driven content platform for hosting all sorts of content-specific work being done inside of IBM Cloud and the Digital Business Group. This will be a central repo to track and complete projects of multiple teams and tribes, fostering cooperation and innovation between teams.

What can you publish through this repository?

1. Code Patterns
2. Blog posts
3. How-Tos
4. Tech Talks


#### Workflow

* [Open an issue ](#open-an-issue)

* [Propose an incubator issue](#propose-an-incubator-issue)
* [Approve an incubator issue](#approve-an-incubator-issue)
* [Create an incubator issue](#create-an-incubator-issue)
* [Create a series of incubator issues](#create-a-series-of-incubator-issues)
* [Review an incubator issue](#review-an-incubator-issue)
* [Publish an incubator issue](#publish-an-incubator-issue)

#### Style Guide

* [Style and tone of an incubator issue](#style-and-tone-of-an-incubator-issue)
* [Length of an incubator issue](#length-of-an-incubator-issue)
* [Elements of an incubator issue](#elements-of-an-incubator-issue)
* [Writing style of an incubator issue](#writing-style-of-an-incubator-issue)


## Propose an incubator issue

Person(s) Involved: **How-To Author**

1. Create a [new issue](https://github.com/IBM/incubator/issues/new)

Ensure the issue states the following:

  * The title of the issue or content you want to create
  * Brief description of the content or issue  
  * What the issue accomplishes or the gist of the content
  * Why this is an acceptable use or resources or dev cycles
  * Who is the target audience
  * Which business unit you report to

> NOTE: Looking to help but don't have an idea? Check out our ['help wanted'](https://github.com/IBM/incubator/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) tag.

## Approve an incubator issue

Person(s) Involved: **incubator developer admins**

1. If a reviewer believes it to be a good fit they will leave a comment in the issue stating that you are able to begin working on your issue. If your issue requires assistance, be sure to tag the issue with the "Help Wanted" tag. Remember to tag the issue with an "approved" label.

2. If a reviewer needs additional feedback they will leave questions and comments in the issue and tag it with the "awaiting author feedback" label.

3. In either case, ensure the issue is tagged with the "how-to" label, and assigned to the person who submitted the issue or that it's been assigned to the appropriate person(s)

## Create an incubator issue

Person(s) Involved: **incubator author**

1. Fork and clone this repository, create a new branch to work on, and start a new How-To post

```
$ git clone git@github.com:<username>/incubator.git
$ cd incubator
$ git checkout -b <name-of-issue>
```

2. Create a new folder in the top level of the project for your new How-To: ``/<name-of-howto>``

Here are a few tips for creating a How-To:

  * Use dashes *-* in place of whitespaces for your How-To directory name. Do not use whitespaces.

  * You may copy an existing How-To and modify the date, author(s), author(s) email, and title in the ``info.json`` file. The ``info.json`` file should be placed in the top level of your How-To directory.
    * For example: `/<name-of-howto>/info.json`

  * The How-To tutorial instructions and content should be placed in a file called ``readme.md`` and should be located in the top level of your How-To directory.
    * For example: `/<name-of-howto>/readme.md`

  * Any images should be placed in the `/<name-of-howto>/images` directory.
    * For example: `/<name-of-howto>/images/bacon.gif`

  * Any static files like scripts should be placed in the `/<name-of-howto>/static` directory.
    * For example: `/<name-of-howto>/static/find-bacon.js`

3. Edit the new file using your favorite text editor
4. Reference any images and static content you include using the relative path. For example: `images/bacon.gif` and `static/find-bacon.js`
5. Push the branch up to your fork and create a pull request
6. Add a link to the PR to the issue you opened.

### Create a series of IBMCode How-Tos

Creating a series is beneficial if the original How-To is too long, consider breaking it up in logical places. A How-To series should have a parent How-To that introduces the series and links back to all of them. A How-To series should maintain the following directory structure:

```
.
|-<name-of-101-howto>/
|-<name-of-201-howto>/
|-<name-of-301-howto>/
|-<name-of-parent-howto>/
```

## Review an IBMCode How-To

Person(s) Involved: **Developer / Developer Advocate & Publisher / Editor**

Each pull request needs an approval from the following parties before it can get merged. Simply leave a +1 or approve the Pull Request, do **not** merge the pull request until **two** parties have approved it.

1. A developer or developer advocate to OK the technical content
2. A publisher or editor to OK the writing and style
3. If you're the second person to review and approve the pull request you can merge it

## Publish an IBMCode How-To

1. Once merged into the `master` branch of the `https://github.ibm.com/IBMCode/howtos` repository an automated Jenkins job will handle processing the new or updated How-To. The final How-To will live at [https://developer.ibm.com/code/howtos](https://developer.ibm.com/code/howtos).

# Style Guide

The section below describes a minimal set of instructions on the look and feel of an IBMCode How-To. For complete information check out [https://w3.ibm.com/developer/create-guides/tutorials](https://w3.ibm.com/developer/create-guides/tutorials).

### Style and tone of an IBMCode How-To

* Keep it conversational and informal.
* State what the reader is doing and then provide a single way of doing it.
* Be careful with humor
* Use the second person point of view in your instructions. For example, “In this how-to guide, you will install ….”

### Length of an IBMCode How-To

There is no right answer to the question of how long a how-to guide should be since different tasks take varying lengths of time to complete. The key is to respect your audience’s time. A set of steps that takes 15 or 20 minutes to complete is reasonable; a how-to that takes three or four hours to finish is probably too long. If you suspect your guide is too long, it probably is. Look for ways to shorten the guide, either by finding a more efficient way to complete the task or by breaking it into several different how-to guides.

### Elements of an IBMCode How-To

#### Learning objectives

In three-to-five sentences, state the purpose of your How-To, your intended readership, and the benefits readers can gain from it. Aim to grab the reader’s interest quickly, using terms they are likely to search on and relate to.

#### Prerequisites

List or describe any skills, tools, experience, or specific conditions required to perform the tutorial. Include version levels for any required tools or platforms. Include links to necessary resources whenever possible.

#### Estimated time

Provide guidance on how long it will reasonably take to complete the steps under normal circumstances.

#### Body

Include detailed, step-by-step instructions to perform the task or goal you are trying to achieve. Add screenshots and diagrams to add interest and make the steps easier to follow. Tables, videos, and photographs are also encourages.

#### Summary

State any closing remarks about the task or goal you described and its importance. Reiterate specific benefits the reader can expect from completing your tutorial.

#### Additional resources

List important related links that can further engage readers and deepen their understanding of your topic or subject area, such as presentations, a graphic, a video, web or community pages, or reusable assets. Including these links at the end of the tutorial can minimize distraction for readers.

## Writing style of an IBMCode How-To

* Use [github flavored markdown](https://github.github.com/gfm/)
* Tone should be: technical, friendly, comprehensive and clear
* Include enough detail to make your tutorial useful and appealing to others, regardless of level of expertise
* Include only fully tested instructions
* Avoid nesting steps to more than two levels, if possible
* List all authors with title and organization.
* Use the following conventions:
  * Try to start each step or section with a verb
  * Use **bold** ``**bold**`` to emphasize text that is particularly important, and for any GUI element.
  * Use *italics* ``*italics*`` when defining a new term, or for titles of books, journals, or publications
  * Use ``code`` font \`\`code\`\` for anything that the reader must type, or for names of methods, classes, keywords, variables, interfaces, attributes, and other code
  * Use ``"``quotation marks``"`` for links to articles, papers, and headings cited.
