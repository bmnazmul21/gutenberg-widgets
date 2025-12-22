<?php
$query = run_posts_query();

while ($query->have_posts()):
    $query->the_post();
?>
    <h4><?php the_title(); ?></h4>
<?php

endwhile;
wp_reset_postdata();


?>