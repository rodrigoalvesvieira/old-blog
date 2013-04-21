---
layout: post
title: Unix Goodies Part 2 - cal
---

<span class="drops">L</span>ast week I started a series called **Unix Goodies** in which I write a post on a single tool of this platform. In this post I'll write about this little program called **cal**, the Unix's tiny calendar.

To try it out, simply fire up the _console_, and run _cal_:

<pre class="terminal">
  $ cal
</pre>

This is - as you may have guessed - the basic command, which prints out the current month calendar.

Note: I noticed that, on Ubuntu, this command highlights the current day while Mac OS, it doesn't.

Specifying dates
----------------

You can of course refine what _cal_ tells you. If you pass one argument and the program will treat it as a **year**.

<pre class="terminal">
  $ cal 1
</pre>

Will print the entire year calendar for the first year of the Gregorian calendar.

But if you pass two arguments, _cal_ will treat the first one as a month identifier - like 1 for January - and the second as a year.

<pre class="terminal">
  $ cal 1 1994
</pre>

Prints the calendar of January, 1994.

ncal
----

Bonus info! there is this other program for printing dates called **ncal**. The only difference between _ncal_ and _cal_ is the way the week days are print, for _ncal_ prints them vertically while _cal_ does it horizontally.

That's it, folks! Wait for the next post!