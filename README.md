# Image Captions

> **Overview**
>
> This is a JQuery plugin to display animated captions for images

**Usage**

1. Include JQuery in your HTML File
2. Include the Image Captions CSS and JS from the JS and CSS folder in your project
3. Create the following markup

```
        <div class="img-caption" id="slideUp">
                <img src="images/Smiley.png" />
                <div class="caption">
                    <p>Smile Away!</p>
                </div>
        </div>
```

Include the following script on your page to display the caption.

```
        $('div#slideUp').makeCaption({
            animation: 'slide',
            position: 'Below'
        });
```

**Demo**

Visit the following page to see examples [http://patnaikshekhar.github.io/ImageCaptions](http://patnaikshekhar.github.io/ImageCaptions)
