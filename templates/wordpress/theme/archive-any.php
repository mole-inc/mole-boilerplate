<?php
// anyという投稿タイプの一覧テンプレート
/*
  wordpressのglobalループを経由して投稿を取得すると wp_reset_query() をしなきゃいけなくなるので
  原則WP_Query($args)でpostを取得し、それをforeachする形で取得＆表示
*/

$queryVar = get_query_var('paged') ? get_query_var('paged') : 1; // 現状のページ送り番号を取得
$queryArgs = [
  'post_type' => 'any', // archive-XXX のXXX部分を入力
  'posts_per_page' => 10, //必要な数値を入力
  'paged' => $queryVar,
  'orderby' => 'date',
	'order' => 'DESC',
];
$any = new WP_Query($queryArgs);
$anyPosts = $any->posts;
$anyTotal = $any->found_posts; // 投稿の全数を取得できる。posts_per_pageの数と組み合わせてpagerを実装できる

//
?>

<?php
$pageTitle = 'INDEX'; // ここで$pageTitleに入れた値がtitleになるはず
$ogpImg = get_template_directory_uri().'/assets/images/ogp.jpg';
// get_template_directory_uri()で /wp-content/themes/テーマ のディレクトリまでの絶対パスを取れる

global $pageTitle;
global $ogpImg;
get_template_part('components/head');
?>


<?php
  foreach ($anyPosts as $key => $post):
    $id = $post->ID;
    $permalink = get_permalink($id); // 投稿へのリンクを取得できる
    $title = $post->post_title;
    $termsFoo = get_the_terms($id, 'foo'); // 投稿に紐づいているfooタクソノミーを配列で取得できる
    $fieldBaz = get_field('baz', $id);
    $date = get_the_date('Y.m.d', $id);
    $thumb = get_the_post_thumbnail_url($id, 'full');
?>
<?php
  endforeach;
?>
