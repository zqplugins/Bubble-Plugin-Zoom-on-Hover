function(instance, properties, context) {


var zoom = (properties.zoom/100);
    
var basicstyle = `  


#${properties.id} {
	 transition: transform .2s; /* Animation */

    }

#${properties.id}:hover {
  transform: scale(${zoom}); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

`

$('<style>'+ basicstyle +'</style>').appendTo('head');  


}