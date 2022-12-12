<?php
// anyという投稿タイプの１投稿を表示するテンプレート

/*
  single-XXX.phpではいきなりget_post()でOK
  もし正しい投稿をとれない場合はURLからslugかIDを取り出してget_post($args)に渡す。
*/
$post = get_post();
// var_dump($post);

$id = $post->ID;


// stripe_tagsをすると自動でhtmlタグ等を削除してくれるので安心
$title = strip_tags($post->post_title);


$content = $post->post_content;

$thumbnail = get_the_post_thumbnail_url($id, 'large');

$ogpImg = !!$thumbnail ? $thumbnail : get_template_directory_uri().'/assets/images/ogp.jpg';

global $ogpImg;

?>

<div></div>
