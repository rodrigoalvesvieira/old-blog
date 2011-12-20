---
layout: post
title: Generating XLS files in Rails
---

<span class="drops">O</span>ften we want to export data from our Rails apps in the form of external (and downloadable) documents. If XLS (Microsoft Excel) is the format you need, a gem called "to_xls (to_xls)":https://github.com/splendeo/to_xls lets you do that without too much effort. Let's get started!

We must precede everything adding the gem to the Gemfile:

<div class="code">
  <script src="https://gist.github.com/1499221.js?file=Gemfile"></script>
</div>

Then, tell Rails that you need another Mime Type for the XLS files:

<div class="code">
  <script src="https://gist.github.com/1499221.js?file=mime_types.rb"></script>
</div>

Now we start having fun. In the <span class="small_code">reports</span> method, we define how our (XLS) document should look like. Since we probably don't want all the attributes of our objects to be displayed, we pass to the <span class="small_code">columns</span> option only those that we want in the file:

<div class="code">
  <script src="https://gist.github.com/1499221.js?file=cities_controller.rb"></script>
</div>

Use the <span class="small_code">headers</span> option to specify the text that we want the headers to display, as shown in line 10 of the file above.

After setting our document's content, we pass it to the <span class="small_code">send_sata</span> method so the browser will download the file when a request to the XLS format is performed.

Also, pass the <span class="small_code">filename</span> option to customize - guess what - the filename. In this code the filename should look like <span class="small_code">Berkeley-reports-20-12-2011.xls</span>.

Now let's go to our view and add a link to download the report:

<div class="code">
  <script src="https://gist.github.com/1499221.js?file=reports.html.erb"></script>
</div>

Done! Now go generate some XLS! 
