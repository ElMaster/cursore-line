# cursore-line
Стили
<pre><code>style-cursor.min.css</code></pre>



Подключем под картинку
<pre>
    <code>
        "<div class='__timeline'>
            <div class='__timecodes'></div>
         </div>"
    </code>
</pre>



Подключем в конце


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
