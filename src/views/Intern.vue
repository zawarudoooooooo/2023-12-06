<script>
</script>

<template>
    <p>別府．大分．杉乃井ホテル</p>
    <div class="scroller_containerOne">
        <div class="scrollerOne">
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 1.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 2.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 3.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 4.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 5.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 6.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 7.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 8.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 9.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 10.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 11.jpg" alt="">
            </div>
        </div>
    </div>

    <div class="scroller_containerTwo">
        <div class="scrollerTwo">
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 12.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 13.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 14.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 15.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 16.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 17.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 18.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 19.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 20.jpg" alt="">
            </div>
            <div class="slide">
                <img src="../../public/internPagePhoto/intern 21.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    p{
        font-size: 28pt;
        text-align: center;
        color: rgb(99, 113, 109);
        margin-bottom: 5vmin;
    }
    .scroller_containerOne {
        height: 35vh;
        overflow: hidden;
        margin-bottom: 10vmin;
        .scrollerOne {
            height: 35vh;
            font-size: 0px;
            white-space: nowrap;
            animation: scroller 30s linear infinite;
            .slide{
                img{
                    width: 25vw;
                    height: 40vh;
                }
            }
        }
    }
    .scroller_containerTwo {
        height: 35vh;
        overflow: hidden;
        margin-bottom: 5vmin;
        .scrollerTwo {
            height: 35vh;
            font-size: 0px;
            white-space: nowrap;
            animation: scroller 30s linear infinite;
            .slide{
                img{
                    width: 25vw;
                    height: 40vh;
                }
            }
        }
    }
    .slide {
        height: 100%;
        //長寬比
        aspect-ratio: 1.5/1;
        margin: 0px 0.78%;
        display: inline-block;
        overflow: hidden;
        border-radius: 10px;
    }
    .slide > img {
        width: 100%;
        height: auto;
    }

    @keyframes scroller {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-162.344%);
        }
    }

    @media(max-width:1200px){
        p{
            margin-bottom: 5vmin;
            margin-top: 5vmin;
        }
        .scroller_containerOne{
            height: 18vh;
            margin-bottom: 10vmin;
            .scrollerOne{
                height: 18vh;
                .slide{
                    img{
                        width: 36vw;
                        height: 18vh;
                    }
                }
            }
        }
        .scroller_containerTwo{
            height: 18vh;
            .scrollerTwo{
                height: 18vh;
                .slide{
                    img{
                        width: 36vw;
                        height: 18vh;
                    }
                }
            }
        }
    }
    @media(max-width:992px){
        p{
            margin-top: 3vmin;
            font-size: 25pt;
        }
        .scroller_containerOne{
            .scrollerOne{
                height: 16vh;
                .slide{
                    img{
                        width: 35vw;
                        height: 16vh;
                    }
                }
            }
        }
        .scroller_containerTwo{
            .scrollerTwo{
                height: 16vh;
                .slide{
                    img{
                        width: 35vw;
                        height: 16vh;
                    }
                }
            }
        }
    }
    @media(max-width:576px){
        p{
            font-size: 16pt;
        }
        .scroller_containerOne{
            margin-bottom: 13vmin;
            height: 15vh;
            .scrollerOne{
                height: 15vh;
                .slide{
                    img{
                        width: 49vw;
                        height: 15vh;
                    }
                }
            }
        }
        .scroller_containerTwo{
            height: 15vh;
            .scrollerTwo{
                height: 15vh;
                .slide{
                    img{
                        width: 49vw;
                        height: 15vh;
                    }
                }
            }
        }
    }
    @media(max-width:414px){
        p{
            font-size: 14pt;
            margin-bottom: 5vmin;
        }
        .scroller_containerOne{
            height: 16vh;
            margin-bottom: 15vmin;
            .scrollerOne{
                height: 16vh;
                .slide{
                    img{
                        width: 52vw;
                        height: 16vh;
                    }
                }
            }
        }
        .scroller_containerTwo{
            height: 16vh;
            .scrollerTwo{
                height: 16vh;
                .slide{
                    img{
                        width: 52vw;
                        height: 16vh;
                    }
                }
            }
        }
    }
</style>
