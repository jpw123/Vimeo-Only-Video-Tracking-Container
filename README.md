# Vimeo-Tracker
A js loader and iframe manipulator for the vimeo.ga.js library. Requires

## Install
Requires Jquery version 1.4.3 or later.
Include the vimeocheck.js script before the closing </body> tag.

````html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="vimeotracker/vimeocheck.js"></script>
````

## Initialize
Call the script by using the vimeoCheck() function. This function accepts the following parameters:

**modUrl**: boolean that tells the script to modify the URL with ?api and ?player_id parameters. Also overwrite the iframe ID with the player_id. Defaults to true.

**dataProgress**: boolean that adds the dataProgress attribute to the iframe. Defaults to true.

**dataSeek**: boolean that adds the dataSeek attribute to the iframe. Defaults to true.

**dataBounce**: boolean that adds the dataBounce attribute to the iframe. Defaults to false.

**fullScreen**: boolean that adds the full screen attributes to the iframe. Defaults to true.

**scriptUrl**: string that corresponds to the location of the vimeo.ga.js. Defaults to "modules/vimep.ga.js/vimeo.ga.js".

````javascript
$(document).ready(vimeoCheck(true,true,true,true,true, '/js/vimeo.ga.js'));
````


