---
layout: post
title: How to Contribute to an Open Source Project with Git and GitHub
---

<span class="drops">O</span>ne of the most awesome things an open source developer can do is give back to the community. With git and GitHub it's easier than ever. However, I spent some time trying to figure out how to do it properly, without ruining my work or messing up with the VCS. This post is the compilation of the steps I had to take before submitting my patch.

First, clone the project:

<pre class="terminal">  $ git clone https://github.com/whymirror/hpricot.git </pre>

Then <span class="small_code">cd</span> into the repo and create a branch where your changes will be made:

<pre class="terminal">  $ git branch my_patch && git checkout my_patch </pre>

Now comes the most important part, when you CODE.

After making your changes and WRITING THE TESTS (I'm making sure you won't forget it), add the tweaked and/or new files and <span class="small_code">git commit</span> 'em.

Now, get back to the master branch and run <span class="small_code">git pull</span>, so you make sure you're getting the latest version of the origin before submitting your code:

<pre class="terminal">  $ git checkout master && git pull </pre>

Now checkout into the my_patch branch again and run:

<pre class="terminal">  $ git rebase </pre>

You'll then fork the project on GitHub and tell git where your remote repo is:

<pre class="terminal">  $ git remote add my_hpricot git@github.com:rodrigoalvesvieira/hpricot.git  </pre>

Obviously you'll then push your code to your remote repo:

<pre class="terminal">  $ git push my_hpricot my_patch </pre>

Now it's when GitHub makes a difference:

* Go to your projects GitHub repo and navigate to the branch where your work lives and click on "Pull Request".

Fill the form, tell the author what you just did, explain your changes to the code and wait for the merge!

That's it, of course there may be a specific project that demands more procedures for accepting contributions but the one I explained here will do the job for most projects.