jQuery(document).ready(function(h){h.getJSON(all_images_json,function(t){h.each(t,function(t,a){var o,e,d,n,i=a.width,s=(a.height,a.date),r=a.uid,p=a.credit,c=a.caption,g=a.alt,l=a.format;o=r,e=l,d=i,n=[],h.each(["200","400","600","800","1200","2400"],function(t,a){if(a<d){var i="https://s3.amazonaws.com/digitalgov/"+o+"_w"+a+"."+e,s="https://s3.amazonaws.com/digitalgov/"+o+"_w"+a+"bw."+e;n.push(i,s)}}),root_url;if(400<i)var m="https://s3.amazonaws.com/digitalgov/"+r+"_w400."+l;else m="https://s3.amazonaws.com/digitalgov/"+r+"."+l;var v=["<div class='card-img'>","<div class='media'>","<img src='"+m+"'>","<p>"+c+"</p>","</div>","<div class='img-data'>","<div class='box'>","<p><strong>uid:</strong> "+r+"</p>","<p><strong>credit:</strong> "+p+"</p>","<p><strong>caption:</strong> "+c+"</p>","<p><strong>alt:</strong> "+g+"</p>","<div class='code'>","<p class='label'>Use this field in the front matter</p>",'<pre>primary_image: "'+r+'"</pre>',"</div>","<div class='code'>","<p class='label'>Use this shortcode in the content body</p>",'<pre>{{< img src="'+r+'" >}}</pre>',"</div>","<p class='edit btn'><a target='_new' href='https://github.com/GSA/digitalgov.gov/edit/master/data/images/"+r+".yml' title='view on GitHub'>Edit on GitHub »</a></p>","</div>","<p class='meta'>Uploaded on "+s+"</p>","</div>","</div>"].join("\n");h("#stream-images").append(v)})})});