# *Incubator: How-To*

*Incubatore: How-To* is a Developer driven content platform for hosting "How-To" guides. An IBMCode How-To guide is an effective way to engage your fellow developer, it is well-written, and forms an end-to-end set of instructions for achieving a goal. A IBMCode How-To can focus on IBM products, open source technologies, or an emerging technology. A successful IBMCode How-To should explain: 1) what it is trying to achieve, 2) why that is important, and 3) how to do it.

#### Workflow

* [Propose an Incubator How-To](#propose-an-ibmcode-how-to)
* [Approve an Incubator How-To](#approve-an-ibmcode-how-to)
* [Create an Incubator How-To](#create-an-ibmcode-how-to)
* [Create a series of Incubator How-Tos](#create-a-series-of-ibmcode-how-tos)
* [Review an Incubator How-To](#review-an-ibmcode-how-to)
* [Publish an Incubator How-To](#publish-an-ibmcode-how-to)

#### Style Guide

* [Style and tone of an Incubator How-To](#style-and-tone-of-an-ibmcode-how-to)
* [Length of an Incubator How-To](#length-of-an-ibmcode-how-to)
* [Elements of an Incubator How-To](#elements-of-an-ibmcode-how-to)
* [Writing style of an Incubator How-To](#writing-style-of-an-ibmcode-how-to)

## Propose an Incubator How-To

Person(s) Involved: **How-To Author**

1. Create a [new issue](https://github.com/IBM/incubator/issues/new)

Ensure the issue states the following:

  * The title of the How-To you want to create
  * Brief description of the how-to steps
  * List of technologies you will be highlighting
  * What the how-to accomplishes
  * Why this is a good solution
  * Who is the target audience
  * Which business unit you report to

> NOTE: Looking to help but don't have an idea? Check out our ['help wanted'](https://github.com/IBM/incubator/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) tag.

## Approve an Incubator How-To

Person(s) Involved: **Offering Manager / Developer Advocate**

1. If a reviewer believes it to be a good fit they will leave a comment in the issue stating that you are able to begin writing your tutorial. Remember to tag the issue with an "approved" label.

2. If a reviewer needs additional feedback they will leave questions and comments in the issue and tag it with the "awaiting author feedback" label.

3. In either case, ensure the issue is tagged with the "how-to" label, and assigned to the person who submitted the issue.

## Create an Incubator How-To

Person(s) Involved: **How-To Author**

1. Fork and clone this repository, create a new branch to work on, and start a new How-To post

```
$ git clone git@github.com:IBM/incubator.git
$ cd incubator
$ git checkout -b <name-of-howto>
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

### Create a series of Incubator How-Tos

Creating a series is beneficial if the original How-To is too long, consider breaking it up in logical places. A How-To series should have a parent How-To that introduces the series and links back to all of them. A How-To series should maintain the following directory structure:

```
.
|-<name-of-101-howto>/
|-<name-of-201-howto>/
|-<name-of-301-howto>/
|-<name-of-parent-howto>/
```

## Review an Incubator How-To

Person(s) Involved: **Developer / Developer Advocate & Publisher / Editor**

Each pull request needs an approval from the following parties before it can get merged. Simply leave a +1 or approve the Pull Request, do **not** merge the pull request until **two** parties have approved it.

1. A developer or developer advocate to OK the technical content
2. A publisher or editor to OK the writing and style
3. If you're the second person to review and approve the pull request you can merge it

## Publish an Incubator How-To

1. Once merged into the `master` branch of the `https://github.ibm.com/IBMCode/howtos` repository an automated Jenkins job will handle processing the new or updated How-To. The final How-To will live at [https://developer.ibm.com/code/howtos](https://developer.ibm.com/code/howtos).

# Style Guide

The section below describes a minimal set of instructions on the look and feel of an IBMCode How-To. For complete information check out [https://w3.ibm.com/developer/create-guides/tutorials](https://w3.ibm.com/developer/create-guides/tutorials).

### Style and tone of an Incubator How-To

* Keep it conversational and informal.
* State what the reader is doing and then provide a single way of doing it.
* Be careful with humor
* Use the second person point of view in your instructions. For example, “In this how-to guide, you will install ….”

### Length of an Incubator How-To

There is no right answer to the question of how long a how-to guide should be since different tasks take varying lengths of time to complete. The key is to respect your audience’s time. A set of steps that takes 15 or 20 minutes to complete is reasonable; a how-to that takes three or four hours to finish is probably too long. If you suspect your guide is too long, it probably is. Look for ways to shorten the guide, either by finding a more efficient way to complete the task or by breaking it into several different how-to guides.

### Elements of an Incubator How-To

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

## Writing style of an Incubator How-To

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
