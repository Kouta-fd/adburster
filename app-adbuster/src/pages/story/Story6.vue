<template>
  <div class="body">
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <p>no.3 透明から浮かび出す</p>
    <div class="videoWrap">
      <video class="video" src="../../assets/video/emerged.mp4" loop autoplay muted></video>
      <img class="frame" src="../../assets/imgs/frame3.png">
    </div>
    <router-link class="next" to="/story7">次へ</router-link>
  </div>
</template>

<style scoped>
.storyBackImg{
  margin: 0;
  padding: 0;
  position: relative;
  z-index: -1;
  width: 100%;
}

p{
  font-family: "YuMincho", serif;
  font-size: 50px;
  color: white;
  text-decoration: underline;
  position: fixed;
  left: 50%;
  top: 0%;
  transform: translate(-50%, 0%);
}
.next{
  color: white;
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 30px;
}

.videoWrap{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60%;
  width: 45%;
  overflow: hidden;
}

.video {
  width: 200%;
  height:135%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.frame{
  width: 95%;
  height: 105%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.body{
  position: fixed;
  overflow: hidden;
  width: 100%;
}
</style>
