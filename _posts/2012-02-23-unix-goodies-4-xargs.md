---
layout: post
title: Unix Goodies Part 4 - xargs
---

![Terminal](/public/images/computer_terminal.jpg "Terminal")

<span class="drops">O</span>ften, in the command-line, we need to pass the output of a program as arguments to another. Pipe (<span class="small_code">|</span>) may do the trick, but pipe alone passes only one argument. When you need to pass multiple items, you can use pipe with <span class="small_code">xargs</span>, which solves your problems.

To illustrate <span class="small_code">xargs</span> in action, I show you the following command:

<pre class="terminal">
  $ pidof emacs | xargs kill
</pre>

Suppose your computer is got two running instances of Emacs, <span class="small_code">pidof</span> will list them and <span class="small_code">xargs</span> will handle the passing properly to <span class="small_code">kill</span>.

What happens there is that every output member of the first command is passed individually as argument to the second one. <span class="small_code">xargs</span> is <span class="small_code">stdio</span>'s playtool.

This very command makes <span class="small_code">kill</span> raise a "not enough arguments" exception if you omit <span class="small_code">xargs</span>.

Favorite Snippet
----------------

There is this one command that I find very useful and use in a regular basis in my <span class="small_code">Git</span> workflow.

<pre class="terminal">
  $ git ls-files --deleted | xargs git rm
</pre>

This passes all deleted files from the current repo to <span class="small_code">git rm</span> thus letting you avoid removing each file individually from the Git index. We could call it <span class="small_code">git rm .</span>.

That's it, hope I have clearly showed you how <span class="small_code">xargs</span> can help you during your day-to-day tasks in the console. For more info on the program, consult its manual page.
