---
layout: post
title: Deploying Noir to Heroku
---

<span class="small_code">I</span>'ve been writing small apps with Noir for a while and, being Noir a web framework, deploying it is a step in the development flow.

In this post I'm going to guide you through deploying Noir apps to [Heroku].

First, <span class="small_code">cd</span> into the project and run

<pre class="terminal">
  $ heroku create --stack cedar
</pre>

This will create the app on Heroku for you and also add this remote repo to your Git config for your use, later.

Note: if it doesn't work, then that's probably because you don't have the [Heroku gem/toolbelt].

You should now create a file called <span class="small_code">Procfile</span>...[yes, I know], this is for telling Heroku how to run the server for your app:

{% highlight sh %}

web: lein run -m my-noir-app.server

{% endhighlight %}

Remember that you should replace my-noir-app.server with the actual namespace of your app.

The Actual Deploy
-----------------

Heroku - adorably - uses Git for deployment. So the following commands should to this job for us:

<pre class="terminal">
  $ git add .
  $ git commit -m "First deploy."
  $ git push heroku master
</pre>

This will send the code to Heroku and manage the app's dependencies via [Leiningen] as well ;)

Now you must specify on which port your app will run:

<pre class="terminal">
  $ heroku config:add PORT=8080
</pre>

Note: Use 8080 or whatever, notice that Noir defines the in <span class="small_code">src/my-noir-app/server.clj file.)

Then, ask Heroku to launch your app:

<pre class="terminal">
  $ heroku scale web=1
</pre>

And that's it!

[Leiningen]: https://github.com/technomancy/leiningen
[Heroku gem/toolbelt]: https://toolbelt.herokuapp.com/osx
[Heroku]: http://heroku.com
[yes, I know]: http://blog.hasmanythrough.com/2011/12/1/i-heard-you-liked-files

