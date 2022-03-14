<?php

add_action("wp_enqueue_scripts", function () {
  if(strpos($_SERVER["HTTP_HOST"], "localhost") === false) {
    return;
  }
  wp_enqueue_script("vite", "http://localhost:3000/@vite/client", [], null);
  wp_enqueue_script("main", "http://localhost:3000/assets/scripts/main.js", ["vite"], null);
});

add_filter("script_loader_tag", function ($tag, $handle, $src) {
  if(strpos($_SERVER["HTTP_HOST"], "localhost") === false) {
    return $tag;
  }
  if (!in_array($handle, ["vite", "main"], true)) {
    return $tag;
  }
  $tag = sprintf("<script type='module' src='%s' id='%s-js'></script>\n", $src, esc_attr($handle));
  return $tag;
}, 10, 3);

function getStyle() {
  if(strpos($_SERVER["HTTP_HOST"], "localhost") !== false) {
    return;
  }
  $manifest = get_template_directory_uri().'/assets/build/manifest.json';
  $json = json_decode(file_get_contents($manifest), true);
  $target = $json['assets/scripts/main.js']['css'][0];
  $url = get_template_directory_uri().'/assets/build/'.$target;

  echo '<link rel="stylesheet" href="'.$url .'">'."\n";
}

function getScripts() {
  if(strpos($_SERVER["HTTP_HOST"], "localhost") !== false) {
    return;
  }
  $manifest = get_template_directory_uri().'/assets/build/manifest.json';
  $json = json_decode(file_get_contents($manifest), true);
  $target = $json['assets/scripts/main.js']['file'];
  $url = get_template_directory_uri().'/assets/build/'.$target;
  echo '<script type="module" src="'.$url.'"></script>'."\n";
}

add_theme_support('post-thumbnails');

// wp_head()の整理
remove_action('wp_head', 'feed_links', 2 );
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wp_shortlink_wp_head');
remove_action( 'wp_head', 'rel_canonical' );
// remove_filter('the_content', 'wpautop');


function remove_post_supports() {
  // remove_post_type_support( 'post', 'title' ); // タイトル
  // remove_post_type_support('page', 'editor'); //本文
  remove_post_type_support( 'post', 'author' ); // 作成者
  remove_post_type_support( 'post', 'thumbnail' ); // アイキャッチ
  remove_post_type_support('post', 'excerpt'); // 抜粋
  remove_post_type_support('post', 'trackbacks'); // トラックバック
  // remove_post_type_support( 'post', 'custom-fields' ); // カスタムフィールド
  remove_post_type_support('post', 'comments'); // コメント
  remove_post_type_support('post', 'revisions'); // リビジョン
  remove_post_type_support('post', 'page-attributes'); // ページ属性
  remove_post_type_support('page', 'post-formats'); // 投稿フォーマット
  // unregister_taxonomy_for_object_type( 'category', 'post' ); // カテゴリ
  // unregister_taxonomy_for_object_type( 'post_tag', 'post' ); // タグ
}
add_action('init', 'remove_post_supports');


function remove_admin_menu() {
  //remove_menu_page( 'index.php' );                // ダッシュボード
  remove_menu_page('edit.php'); // 投稿
  //remove_menu_page( 'upload.php' );               // メディア
  //remove_menu_page( 'edit.php?post_type=page' );  // 固定ページ
  remove_menu_page('edit-comments.php'); // コメント
  //remove_menu_page( 'themes.php' );               // 外観
  //emove_menu_page( 'plugins.php' );              // プラグイン
  //remove_menu_page( 'users.php' );                // ユーザー
  //remove_menu_page( 'tools.php' );                // ツール
  //remove_menu_page( 'options-general.php' );      // 設定
}
add_action('admin_menu', 'remove_admin_menu', 999);


function disableImageResize( $size ) {
  // unset( $size['thumbnail'] );
  // unset( $size['medium'] );
  // unset( $size['large'] );
  unset( $size['medium_large'] );
  unset( $size['1536x1536'] );
  unset( $size['2048x2048'] );
  return $size;
}
add_filter( 'intermediate_image_sizes_advanced', 'disableImageResize' );
add_filter( 'big_image_size_threshold', '__return_false' );


function useBlockEditor($use_block_editor, $post) {
  if ( 'page' === $post->post_type ) {
    $use_block_editor = false;
  }
  return $use_block_editor;
}
add_filter( 'use_block_editor_for_post', 'useBlockEditor', 10, 2 );


function filter_ptags_on_images($content){
  return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}
add_filter('the_content', 'filter_ptags_on_images');


function getIdBySlug($page_slug) {
  return get_page_by_path($page_slug)->ID;
}
