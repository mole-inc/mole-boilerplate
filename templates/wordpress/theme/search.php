<?php
// 検索等のテンプレートファイル

$queryVar = get_query_var('paged') ? get_query_var('paged') : 1; // 現状のページ送り番号を取得
$queryArgs = array(
  'post_type' => ['any', 'other'], // ここを配列にすると投稿タイプをまたいで
  'posts_per_page' => 10, //必要な数値を入力
  'paged' => $queryVar,
  'orderby' => 'date',
	'order' => 'DESC',
  /*
    $_GET["string"]でURLからgetパラメータを取得できる
    URL例：https://any.co.jp/any?s=検索したいワード
  */
  's' => $_GET["s"],
);

$filtered = new WP_Query($queryArgs);
$filteredPosts = $filtered->posts;
$filteredTotal = $filtered->found_posts; // 投稿の全数を取得できる。posts_per_pageの数と組み合わせてpagerを実装できる
?>


<?php
  foreach ($filteredPosts as $key => $post):
    $id = $post->ID;
    $permalink = get_permalink($id); // 投稿へのリンクを取得できる
    $title = $post->post_title;
?>
<?php
  endforeach;
?>
