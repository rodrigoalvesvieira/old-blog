---
layout: post
title: Unix Goodies Part 1 - Cat
---

<span class="drops">U</span>nix gives us tools that let us perform any simple task we can do with a Computer. These tools generally follows Unix Philosophy and perform specific tasks with **mastery**.

_Cat_ is one of these tools, when called, from the command line, it sends the contents of the given file to _STDOUT_:

<pre class="terminal">
  $ cat file.html
</pre>

It can even print the contents of multiple files:

<pre class="terminal">
  $ cat html_file.html ruby_file.rb python_file.py
</pre>

The "Cat" name comes from con**cat**enate. Are you asking yourself why? Read on, turns out _cat_ actually concatenates stuff!!

<pre class="terminal">
  $ cat first_name.txt last_name.txt > full_name.text
</pre>

The previous command gets the contents of the <span class="small_code">first_name.txt</span> and <span class="small_code">last_name.txt</span> files and writes it to a new file called <span class="small_code">full_name.txt</span>. Now you see that you can also write files from _cat_.

While reading files, it's very useful to know where a given line is located (its line number), thus _cat_ gives you the _-n_ option:

<pre class="terminal">
  $ cat -n file.rb
</pre>

That's it, this is the first post of a series in which I plan to write about dozens of Unix tools, subscribe to the [blog feed] to get them as soon as they are published.

[blog feed]: /atom.xml




