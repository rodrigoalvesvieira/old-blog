---
layout: post
title: Generating XLS files in Rails
---

<span class="drops">O</span>ften we want to export data from our Rails apps in the form of external (and downloadable) documents. If XLS (Microsoft Excel) is the format you need, a gem called [to_xls] lets you do that without too much effort. Let's get started!

We must precede everything adding the gem to the _Gemfile_:

{% highlight ruby %}

source 'http://rubygems.org'

gem "to_xls"
# ...

{% endhighlight %}

Then, tell Rails that you need another _Mime Type_ for the XLS files:


{% highlight ruby %}

Mime::Type.register "application/vnd.ms-excel", :xls

{% endhighlight %}

Now we start having fun. In the <span class="small_code">reports</span> method, we define how our (XLS) document should look like. Since we probably don't want all the attributes of our objects to be displayed, we pass to the <span class="small_code">columns</span> option only those that we want in the file:

{% highlight ruby %}

class CitiesController < ApplicationController
  #...
  
  def reports    
    @city = City.find params[:id]
    t = Time.now.strftime("%d-%m-%Y")
    
    file = @city.reports.to_xls(
      columns: 
        [:created_at, :author, :subject, :urgent, :text],
      headers: 
        ["Date", "Author Info", "Subject", "Urgent?", "Text"]
    )
    
    respond_to do |format|
      format.html
      format.xls { 
        send_data file,
        filename: "#{@city.name}-reports-#{t}.xls"
      }
    end
  end

end

{% endhighlight %}

Use the <span class="small_code">headers</span> option to specify the text that we want the headers to display, as shown in line 10 of the file above.

After setting our document's content, we pass it to the <span class="small_code">send_sata</span> method so the browser will download the file when a request to the XLS format is performed.

Also, pass the <span class="small_code">filename</span> option to customize - guess what - the filename. In this code the filename should look like <span class="small_code">Berkeley-reports-20-12-2011.xls</span>.

Now let's go to our view and add a link to download the report:

{% highlight erb %}
...

<% unless @city.reports.length.zero? %>
  <%= link_to "Download XLS", reports_city_path(format: :xls) %>
<% end %>

...

{% endhighlight %}

Done! Now go generate some XLS! 

[to_xls]: https://github.com/splendeo/to_xls
