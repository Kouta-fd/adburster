<template>
    <div id="em">
        <div class="ad countAd" id="ad">
        <img class="ad-img" @click="adtouch()" src="../../assets/imgs/ad-example.gif">
        <button class="close-btn" id="close-btn" type="button" @click="adclose('ad')"></button>
        </div>
         <div class="ad2 countAd" id="ad22">
        <img class="ad-img" @click="adtouch()" src="../../assets/imgs/ad-example.gif">
        <button class="close-btn" id="close-btn" type="button" @click="adclose('ad22')"></button>
        </div>
        <div class="ad3 countAd" id="ad33">
        <img class="ad-img" @click="adtouch()" src="../../assets/imgs/ad-example.gif">
        <button class="close-btn" id="close-btn" type="button" @click="adclose('ad33')"></button>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'emergead',
    data() {
        return {
            countAdv: 0
        }
    },

    methods: {
        adclose(id){
            this.$emit('close');
            var ad = document.getElementById(id);
            ad.remove();
        },
        adtouch(){ 
            this.$emit('touch');
        },
        emerge() {
            console.log("emerge");
            var em = document.getElementById("em");
            em.style.display = "block";
        },
        countAd(){
             var count = document.getElementsByClassName("countAd");
             this.countAdv = count.length;
             this.$emit("countAd",this.countAdv);
        }
    },
    mounted() {
        this.countAd();
    }
}
</script>

<style scoped> 
    #em {
        display: none;
    }
    .ad{
        position: relative;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        opacity: 0;
        transform: translate(0px, 100px);
        transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 3s;
    }

    .ad:hover{
        transform: translate(0, 0);
        transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 3s;
        opacity: 1;
    }

    .ad2{
        position: relative;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        opacity: 0;
        transform: translate(200px, 300px);
        transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 3s;
    }
    .ad2:hover{
        transform: translate(200px, 100px);
        transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 3s;
        opacity: 1;
    }

    .ad3{
        position: relative;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        opacity: 0;
        transform: translate(-200px, 500px);
        transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 3s;
    }
    .ad3:hover{
        transform: translate(-200px, 300px);
        transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 3s;
        opacity: 1;
    }

    .ad-img{
        position: absolute;
        width: 100%;
        height: 200px;
    }

    .close-btn{
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: transparent;
        border: none;
    }

    .close-btn:hover{
        color: red;
    }

    .close-btn:after{
        font-family: "fontello";
        content: '\e800';
    }

    .checkbox{
        height: 50%;
    }

    @font-face {
        font-family: 'fontello';
        src: url('../../assets/fonts/fontello.eot?22568919');
        src: url('../../assets/fonts/fontello.eot?22568919#iefix') format('embedded-opentype'),
            url('../../assets/fonts/fontello.woff2?22568919') format('woff2'),
            url('../../assets/fonts/fontello.woff?22568919') format('woff'),
            url('../../assets/fonts/fontello.ttf?22568919') format('truetype'),
            url('../../assets/fonts/fontello.svg?22568919#fontello') format('svg');
        font-weight: normal;
        font-style: normal;
    }
</style>
