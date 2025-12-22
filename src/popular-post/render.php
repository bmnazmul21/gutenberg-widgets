<?php
$query = new WP_Query(array(
    'post_type' => 'post',
    'meta_key' => 'block_post_visit',
    'orderby' => array('meta_value_num' => 'DESC')
));

while ($query->have_posts()):
    $query->the_post();
?>
    <h4><?php the_title(); ?></h4>
<?php

endwhile;
wp_reset_postdata();


?>