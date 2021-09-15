<?php
  global $pageId;

  $siteTitle = 'TITLE';
  $siteDescription = 'DESCRIPTION';
?>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <?php if (is_front_page()) { ?>
    <title><?php echo $siteTitle;?></title>
    <meta content="<?php echo $siteTitle;?>" property="og:title">
    <meta content="<?php echo $siteTitle;?>" property="og:site_name" />
    <meta content="<?php echo home_url(); ?>" property="og:url">
    <meta content="website" property="og:type">
    <link rel="canonical" href="<?php echo home_url(); ?>">
  <?php } elseif ($pageTitle != '') { ?>
    <title><?php echo $pageTitle;?> | <?php echo $siteTitle;?></title>
    <meta content="<?php echo $pageTitle;?> | <?php echo $siteTitle;?>" property="og:title">
    <meta content="<?php echo $pageTitle;?> | <?php echo $siteTitle;?>" property="og:site_name" />
    <meta content="<?php echo home_url(); ?>" property="og:url">
    <meta content="article" property="og:type">
    <link rel="canonical" href="<?php echo get_the_permalink(); ?>">
  <?php } else { ?>
    <title><?php echo get_the_title() ? get_the_title() : 'PAGE NOT FOUND'; ?> | <?php echo $siteTitle;?></title>
    <meta content="<?php echo get_the_title() ? get_the_title() : 'PAGE NOT FOUND'; ?> | <?php echo $siteTitle;?>" property="og:title">
    <meta content="<?php echo get_the_title() ? get_the_title() : 'PAGE NOT FOUND'; ?> | <?php echo $siteTitle;?>" property="og:site_name" />
    <meta content="<?php echo get_the_permalink(); ?>" property="og:url">
    <meta content="article" property="og:type">
    <link rel="canonical" href="<?php echo get_the_permalink(); ?>">
  <?php } ?>

  <meta name="description" content="<?php echo $siteDescription;?>">
  <meta property="og:description" content="<?php echo $siteDescription;?>" />

  <?php if ($ogpImg != '') { ?>
    <meta property="og:image" content="<?php echo $ogpImg; ?>" />
  <?php } else { ?>
    <meta property="og:image" content="<?php echo get_template_directory_uri();?>/assets/images/ogp.jpg" />
  <?php } ?>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="<?php echo $siteTitle;?>" />

  <link rel="icon" href="<?php echo get_template_directory_uri();?>/assets/favicon.svg">

  <?php
    wp_head();
  ?>
