---
layout: post_no_comments
title: Deploying Noir to Heroku
---

<span class="drops">I</span>'ve been writing small apps with Noir for a while and, being Noir a web framework, deploying it is a step in the development flow.

In this post I'm going to guide you through deploying Noir apps to Heroku (1).

First, <span class="small_code">cd</span> into the project and run:

<pre class="terminal">
  $ heroku create --stack cedar
</pre>

This will create the app on Heroku for you and also add this remote repo to your Git config for your use, later.

Note: if it doesn't work, then that's probably because you don't have the Heroku gem/toolbelt (2).

You should now create a file called <span class="small_code">Procfile</span>...yes, I know (3), this is for telling Heroku how to run the server for your app:

{% highlight sh %}

web: lein run -m my-noir-app.server

{% endhighlight %}

Remember that you should replace <span class="small_code">my-noir-app.server</span> with the actual namespace of your app.

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

Note: Use 8080 or whatever, notice that Noir defines the in <span class="small_code">src/my-noir-app/server.clj</span> file.

Then, ask Heroku to launch your app:

<pre class="terminal">
  $ heroku restart
</pre>

And that's it!

[1]
[2]
[3]

[2]: https://toolbelt.herokuapp.com/osx
[1]: http://heroku.com
[3]: http://blog.hasmanythrough.com/2011/12/1/i-heard-you-liked-files

