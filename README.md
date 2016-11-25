# cursore-line
Стили
<pre><code><link href="style-cursor.min.css" rel="stylesheet"></code></pre>



Подключем под картинку
<pre><code>
<div class='__timeline'>
    <div class='__timecodes'></div>
 </div>
</code></pre>



Подключем в конце


<pre><code>
<script src="slide-cursor.min.js"></script>
<script>
    $(".thumbs li").timelineSlider({
        imgClass: '.stdimage', // Класс картинки с изображениям Default
        imgCalc: 'cnt' // Атрибут щетчика Default
    });
</script>

<style>
    .__timeline .position {
        background-color: rgba(255,255,255,0.7); /* цвет линии Default */
    }
    .__timeline .col:hover .position {
        background-color: #f73185;  /* цвет линии Default */
    }
</style>
</code></pre>
