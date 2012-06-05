---
layout: post
title: Unix Goodies Part 3 - Head
---

<span class="drops">W</span>e often need to quickly read the contents of files in the console. Sometimes the file is just too big and we want to read only the first lines so cal (1) ins't appropriate. When this is the case, **head** to the rescue!

The _head_ tool does just this, tell us only the first lines of a given file.

<pre class="terminal">
  $ head file.html
</pre>

Did you think about printing "heads" of multiple files?

<pre class="terminal">
  $ cat file.html file.rb
</pre>

Now, of course you may want to print only the first **number** lines of a file, assuming that <span class="small_code">number = 1</span>:

<pre class="terminal">
  $ cat -n number script.rb
</pre>

That's it, hope _head_ helps you! (It'll most likely do :) )

[1]

[1]: /unix-goodies-1-cat



