<template>
    <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <img :src="tweet.img">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p><strong>{{tweet.name}}</strong> <small>{{tweet.handle}}</small></p>
              <p>{{tweet.tweet}}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
</template>

<script>
export default{
  name: 'tweet',
  props: {
    tweet: Object
  }
}
</script>
