---
layout: post_no_comments
title: Java libs hard to live without
---

<span class="drops">S</span>ince late 2012 I'm creating software with Java and there's quite a few libs which I can't forget anymore, because I'm constantly in need of them. Here they are listed, each with a brief explanation of what they're for:

### [Google Gson]

JSON has became the de-facto standard for data representation in the Web. As I'm always having to parse documents and build my Java objects with data coming from a JSON files this lib is the best for the job I've encountered so far.

Gson also lets you be briefer with your code by being able to build an object directly from the JSON input. For example, suppose you have the following class with two attributes in your program:

{% highlight java %}

public class Song {
  private String title;
  private String author;

  ...
}

{% endhighlight %}

And suppose the JSON document your're parsing is like:

{% highlight json %}
{
  "title": "Under My Thumb",
  "author": "The Rolling Stones"
}
{% endhighlight %}


Then you can build your `Song` object directly (without having to set each attribute) from the JSON like this:

{% highlight java %}

Song u = gson.fromJson(element, Song.class);

{% endhighlight %}

### [async-http-client] from Ning

If you need to perform HTTP request in your Java program, then this is the lib for you. Besides the ability to easily perform asynchronous HTTP requests `async-http-client` allows you to easily set your request headers.

### [junit]

Testing is an important step in the process of writing good, maintainable software. Whether you follow or not the TDD <a href="#foot-link-1">[1]</a> practices, this lib is probably the right one for your unit tests. Junit offers an immense set of assertion methods and matchers. Another plus is that Junit is very mature (in fact, Junit is believed to be the first TDD lib to exist!) and thus there are a lot of IDE plugins and such helper tools to make our lives easier.

[Google Gson]:https://sites.google.com/site/gson/
[async-http-client]:https://github.com/asynchttpclient/async-http-client/
[google-guice]: https://code.google.com/p/google-guice/
[junit]: http://junit.org/

<p class="foot-link" id="foot-link-1">[1]: TDD, Test-Driven Development is a software development practice that advocates writing test code first to ensure the actual code works as expected. This practice often leads to better, safer code and improves project maintainability.</p>
