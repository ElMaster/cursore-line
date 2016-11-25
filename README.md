# cursore-line

<h4>Стили</h4>
<pre><code>style-cursor.min.css</code></pre>
<p>Под картинку надо <br>
&lt;div class='__timeline'&gt;<br>
    &lt;div class='__timecodes'&gt;&lt;/div&gt;<br>
&lt;/div&gt;
</p>
<h4>Подключем в конце</h4>


<pre><code>
    slide-cursor.min.js


    $(".thumbs li").timelineSlider({
        imgClass: '.stdimage', // Класс картинки с изображениям Default
        imgCalc: 'cnt' // Атрибут щетчика Default
    });



    .__timeline .position {
        background-color: rgba(255,255,255,0.7); /* цвет линии Default */
    }
    .__timeline .col:hover .position {
        background-color: #f73185;  /* цвет линии Default */
    }

</code></pre>
