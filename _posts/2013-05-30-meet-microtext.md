---
layout: post_no_comments
title: Meet Microtext.js
---

<span class="drops">S</span>imple text processing functions is something we write all the time. Often, these functions are the same, for example, for hiding full email addresses for prevent fetching from web bots. You get it.

If you finding yourself constantly needing these functions, [Microtext.js] is the JS micro lib for you!

Coming from a Rails background I am used to do much of this processing in the Helper's level. However, Rails Helpers can be noticeably slow and often the bottleneck of many Rails apps is in the view rendering, where Helper works interfere a lot.

Well, if we can delegate this processing to the browser, making our app's response time decrease and without slowing down the app in the user side (remember, a website slow for its scripts are too bad too) then we should do it.

I just wrote down the motivation for this very simple project. Now let's go to the cool moment of the party, the code:

What about the good old string truncation operations? Here it is:

{% highlight js %}

Microtext.truncate("Lewis Pirenne", 10) // "Lewis Pire..."
{% endhighlight %}

Can we get the initials for a name? Sure!

{% highlight js %}

Microtext.getInitials("Bor Alurin"); // "B. A"
{% endhighlight %}


Need to hide an email address partially to prevent bots from fetching it?

{% highlight js %}

Microtext.hideEmail("rodrigo@example.com"); // "rod...@example.com"
{% endhighlight %}

These are just a few examples. Currently, Microtext.js features 10 functions [1] but more should be added. Can you think of a text processing operation you do often? Send a Pull Request or [send me] an email and I'll consider adding it.

[Microtext.js]: https://github.com/rodrigoalvesvieira/microtext.js
[send me]: mailto:rodrigovieira1994@gmail.com
[1]: You can see their full demonstration and documentation in the [README](https://github.com/rodrigoalvesvieira/microtext.js/blob/master/README.md)
