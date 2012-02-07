---
layout: post
title: Developing for The Web With Clojure and Noir
---

<span class="small_code">N</span>oir is a small, neat, sinatra-based web application framework for Clojure written by [Chris Granger] that amazed me when I first tried to exercise my Clojure skills for Web Development. In this blog post I'm gonna help you get started with this library, already assuming that you're a [little familiar to the language's ecosystem].

First steps
-----------

If you are into Clojure, you certainly have [Leiningen] installed, so you can simply use it to install _Noir_ in your local machine:

<pre class="terminal">
  $ lein plugin install lein-noir 1.3.0-alpha5
</pre>

And then generate the app's structure with:

<pre class="terminal">
  $ lein noir new my-app &amp; &amp; cd my-app 
</pre>

This command generates a simple but ready-to-go code structure for the app as a _Git_ repository, creates its README and _project.clj_ file among the directories for the dependencies, tests, views, assets, etc. The generated directory for the app will be like this:

<pre class="terminal">
  
  $ tree
    .
    |-- README.md
    |-- project.clj
    |-- resources
    |   `-- public
    |       |-- css
    |       |   `-- reset.css
    |       |-- img
    |       `-- js
    |-- src
    |   `-- my-app
    |       |-- models
    |       |-- server.clj
    |       `-- views
    |           |-- common.clj
    |           `-- welcome.clj
    `-- test
        `-- my-app

    11 directories, 6 files
</pre>

Now start the server with and visit _http://localhost:8080/_:

<pre class="terminal">
  $ lein run
</pre>

Adding Dependencies
-------------------

If you need another library simple add it to your _project.clj_ as a dependency:

{% highlight clojure %}

(defproject my-app "0.1.0-SNAPSHOT"
            :description "This  this!"
            :dependencies [[org.clojure/clojure "1.3.0"]
                           [noir "1.2.1"]
                           [twitter-api "0.6.4"]]
            :main my-app.server)

{% endhighlight %}

And run:

<pre class="terminal">
  $ lein deps
</pre>

Leiningen will install the new library - <span class="small_code">twitter-api</span> in this case - to the _lib_ folder.

Creating Pages
------------

Adding pages to the website is quite easy, just open the file at _src/my-app/views_ and define the route:

{% highlight clojure %}

;; Not specifying request method:

(defpage "/welcome" []
         (common/layout
           [:p "Welcome to tweet-noir"]))
           
;; Specifying request method:
    
(defpage [:get "/hello"] [] "Hello, via get HTTP verb")

{% endhighlight %}

There's a plentiful of ways for creating your pages. Of course for any medium-sized app you'll want to set different pages, to be used via different request methods, using different templates, etc. The [Noir Documentation] covers very well this topic.

Creating layouts
--------------

You may have observed that _Noir_ already ships with a nice layout when you create your app. This is located at <i>my_app/src/my_app/views</i>. Notice that it's the <i>my_app</i> directory (with a "_" underscore character) under _src_ that that hosts your templates, not <i>my-app</i> which will also be created by _Noir_.

The initial template itself lives in the _common.clj_ file, where you write your HTML using the [Hiccup] template language, which is not obligatory, [enlive] is a good alternative.

Managing Assets
---------------

_Noir_ is got a place for the static files of your web application. They are located at <i>my_app/resources/public</i>, _Noir_ gives each type of static files (CSS, JavaScript, Images) a directory, for you to place them. 

Conclusion
----------

Noir is very well designed and that's what makes it so nice to use. I can easily see myself writing my next web services with it! Hopefully this article helped you begin your _Noir_ fun and also got you excited with the framework like I got ;)

I'll write more about _Noir_ in the upcoming weeks, [subscribe to the blog feed] to get them, if you're interested :)

[subscribe to the blog feed]: /atom.xml
[enlive]: https://github.com/cgrand/enlive
[Hiccup]: http://weavejester.github.com/hiccup/
[Noir Documentation]: http://www.webnoir.org/tutorials/routes
[Chris Granger]: http://chris-granger.com/
[Clojars]: http://clojars.org
[little familiar to the language's ecosystem]: /getting-started-with-clojure
[Leiningen]: https://github.com/technomancy/leiningen

