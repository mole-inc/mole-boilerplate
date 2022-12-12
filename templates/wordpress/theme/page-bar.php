<?php
// スラッグがbarという固定ページのテンプレート

/*
  get_the_ID()すると問答無用で表示しているページのIDを取れるので、
  それをget_field('field', $id)等に使える
*/
$id = get_the_ID();

?>

<?php
$pageTitle = 'INDEX'; // ここで$pageTitleに入れた値がtitleになるはず
$ogpImg = get_template_directory_uri().'/assets/images/ogp.jpg';
// get_template_directory_uri()で /wp-content/themes/テーマ のディレクトリまでの絶対パスを取れる

global $pageTitle;
global $ogpImg;
get_template_part('components/head');
?>
