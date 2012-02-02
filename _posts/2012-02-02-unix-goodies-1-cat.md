---
layout: post
title: Unix Goodies #1 - Cat
---

<span class="drops">U</span>nix gives us tools that let us perform any simple task we can do with a Computer. 

_Cat_ is one of these tools, when called, from the command line, it sends the contents of the given file to _STDOUT_:

<pre class="terminal">
  $ cat file.html
</pre>

It can even print the contents of multiple files:

<pre class="terminal">
  $ cat html_file.html ruby_file.rb python_file.py
</pre>

The "Cat" name comes from "con*cat*enate". Are you asking yourself why? Read on, turns out _cat_ actually concatenates stuff!!

<pre class="terminal">
  $ cat first_name.txt last_name.txt > full_name.text
</pre>

The previous command gets the contents of the <i>first_name.txt</i> and <i>last_name.txt</i> files and writes it to a new file called <i>full_name.txt</i>. Now you see that you can also write files from _cat_.

While reading files, it's very useful to know where a given line is located (its line number), thus _cat_ gives you the _-n_ option:

<pre class="terminal">
  $ cat -n file.rb
</pre>

<script type="text/javascript">
  $("article h1").text("Unix Goodies #1 - Cat");
</script>
