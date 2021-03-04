<template>
<Layout>
    <h1>{{$page.redditPost.title}}</h1>
    <img :src="$page.redditPost.img" alt="img" >
</Layout>   
</template>
<page-query>
query RedditPost ($path: String!){
  redditPost: redditPost(path: $path){
    id
    title
    path
    
  }
}
</page-query>

<script>
export default {
    metaInfo (){
return{
    title: this.$page.redditPost.title
}
    }
}
</script>