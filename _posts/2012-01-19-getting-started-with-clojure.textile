---
layout: post
title: Getting started with Clojure
---

<span class="drops">I</span>'ve been playing with Clojure for a little while and, although it seems *very* new to me (due to its Lisp ancestry, and I come from a Ruby and JavaScript background), I'm eager to learn it and to start building software with it. This post is a guide and overview of the language for beginners.

First, Clojure runs on the JVM. Yes, it means you can use Java libraries (including the standard library) from inside your Clojure projects, pack them as _jars_, etc.

h2. REPL

Clojure comes with a read/eval/print loop tool called <span class="small_code">clj</span> that lets you evaluate code instantly. Unfortunately, the _REPL_ doesn't come with some handy features like historic and tab completion by default, but you can add these via "IClojure (IClojure project on GitHub)":https://github.com/cosmin/IClojure.

I couldn't resist the idea of aliasing the _REPL_ as _clojure_ to call it via the command-line, so here's what I did:

<div class="code">
  <script src="https://gist.github.com/1633098.js?file=gistfile1.sh"></script>
</div>

h2. Leiningen

There's a build and automation tool for Clojure projects called Leiningen, or _lein_. Leiningen may be used for open source and private code. It's widely adopted throughout the community and is very mature.

Clojure open source projects are often shared as Java Archives in the "Clojars":http://clojars.org/ repository. 

A project using _lein_ must have its specification defined within a file called _project.clj_ similar to a _package.json_ in Node.js projects or to a _.gemspec_ file in a Ruby Gem.

Here is a sample _project.clj_ from Leiningen's README:

<div class="code">
  <script src="https://gist.github.com/1633098.js?file=project.clj"></script>
</div>

There was also another build tool for Clojure called "cake":https://github.com/flatland/cake. But apparently it has been discontinued.

h2. ClojureScript

ClojureScript is a compiler for JavaScript, it's intended to generate highly optimized JS code, based on Google Closure compiler. It can also target other JavaScript environments other than browsers like Node.js.

The project's GitHub Wiki has a "Start Guide":https://github.com/clojure/clojurescript/wiki/Quick-Start with detailed information about the compilation methods and options.

A more in-depth look at ClojureScript is provided by "this blog post":http://clojure.com/blog/2011/07/22/introducing-clojurescript.html by Stuart Sierra on the Clojure Blog.

h2. Web Development

The current _de facto_ web framework for Clojure is "Noir":http://www.webnoir.org/. Noir is very straightforward and easy to use, it also seems to be inspired in Ruby's "Sinatra":http://www.sinatrarb.com so if you come from Ruby you'll have a good time using it.

Alternatively, "composure":https://github.com/weavejester/compojure is another web framework that apparently was inspired by Sinatra, too. 

Also, there is "clj-http":https://github.com/dakrone/clj-http, a HTTP library with a very concise API. If you want to send request to web pages, get response and etc, I highly recommend you to use it.

h2. ORMs

Clojure has some good ORMs, at the time of this writing, there are already  mature libraries for connection to many databases:

* "Korma":http://sqlkorma.com/ - for Postgres, MySQL, Oracle, Microsoft SQL
* "congomongo":https://github.com/aboekhoff/congomongo - for MongoDB
* "clj-redis":https://github.com/djhworld/clj-redis and "redis-clojure":https://github.com/tavisrudd/redis-clojure - for Redis
* "":https://github.com/clojure-clutch/clutch - for CouchDB

Of all these, Korma is the one that amazes me more. What a beautiful API it provides! Anyway, if you think that some adapters are missing, remember that you can use a library written for Java such as the "riak-java-client":https://github.com/basho/riak-java-client by Basho. 

h2. Concurrency

You may already have heard about how Clojure approaches concurrency. You may have heard good things ;). In fact, one of the goals of the language is to offer full multi-threaded  programming ability, via its functional programming techniques and other features like "Atoms":http://clojure.org/atoms and "Refs":http://clojure.org/refs.

IBM is got a "very complete article":http://www.ibm.com/developerworks/java/library/wa-clojure/index.html on Clojure's concurrency model.

h2. Deployment

"Heroku announced":http://blog.heroku.com/archives/2011/7/5/clojure_on_heroku/, several months ago, that it runs Clojure apps. Also, remember that Clojure projects can be easily packed as <span class="small_code">jars</span> thus it can easily run on Google App Engine. In fact, whenever JVM is available, Clojure may run.

h2. More

If you read this post until here, then I assume you're kind of excited with Clojure, too. So I have here some links to resources on the Internet that will help you:

*  "clojure-koans":https://github.com/functional-koans/clojure-koans - A set of exercises for learning Clojure
*  "disclojure":http://disclojure.org/ - A website about all things clojure
*  "planet clojure":http://planet.clojure.in/ - A blog that indexes many posts on Clojure from all over the Internet
*  "Clojure Blog":http://clojure.com/blog/ - The Clojure official blog

I hope this blog post not only left you enthusiastic about Clojure but also helped you get started with the language and its ecosystem. See you in the next posts, I'll write more about Clojure! 
