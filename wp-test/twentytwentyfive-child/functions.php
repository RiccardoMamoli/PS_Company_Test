<?php

function tema_child_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));
}
add_action('wp_enqueue_scripts', 'tema_child_enqueue_styles');


function tema_child_enqueue_custom_js() {
    wp_enqueue_script(
        'custom-js', 
        get_stylesheet_directory_uri() . '/js/custom.js', 
        array(), 
        null, 
        true 
    );
}
add_action('wp_enqueue_scripts', 'tema_child_enqueue_custom_js');



function tema_child_custom_footer_message() {
    echo '<p style="text-align:center;"> Sto usando un hook personalizzato in questo punto!</p>';
}


add_action('wp_footer', 'tema_child_custom_footer_message');


function tema_child_add_script_to_head() {
    ?>
    <script type="text/javascript">
       for (let i = 0; i < 12; i++) {
        console.log(i)
       }
    </script>
    <?php
}

// Aggiungi la funzione al hook wp_head
add_action('wp_head', 'tema_child_add_script_to_head');

