<?php get_template_part('components/head'); ?>

<main class="Page">
  <div style="
    display: grid;
    place-items: center;
    width: 100%;
    height: calc(var(--vh) * 100);
    background-color: gray;
  ">
    <?php get_template_part('components/logo', null, ['fill'=>'#ffffff']); ?>
  </div>
</main>

<?php get_template_part('components/foot'); ?>
