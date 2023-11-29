<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{

        }
    },
    methods:{
        goExchangePage(){
            this.$router.push('/Exchange')
        },
        goMainPage(){
            this.$router.push('/')
        },
        goInternPage(){
            this.$router.push('/Intern')
        }
    },
    components:{
    // RouterLink,
    } 
}
</script>

<template>
<!-- CONTENT   -->
<div class="content">
    <div class="firstArea">
<!-- 交換 -->
        <div class="exchange">
            <div class="exchangeTitle">
                <span>交換留學</span>
            </div>
            <div class="exchangePhoto">
                <img @click="goExchangePage" src="../../public/mainPagePhoto/exchange photo.jpg" alt="">
            </div>
        </div>
<!-- 關於我 -->
        <div class="profile">
            <div class="profileTitle">
                <span>關於我</span>
            </div>
            <div class="profilePhoto">
                <img @click="goMainPage" src="../../public/mainPagePhoto/profile photo.jpg" alt="">
            </div>
        </div>
<!-- 實習 -->
        <div class="internship">
            <div class="internshipTitle">
                <span>日本實習</span>
            </div>
            <div class="internshipPhoto">
                <img @click="goInternPage" src="../../public/mainPagePhoto/intern photo.jpg" alt="">
            </div>
        </div>
    </div>
<!-- 學歷和證照 -->
    <div class="middleArea">
        <div class="school">
            <p>學歷 <i class="fa-solid fa-school fa-2xs"></i></p>
        <ul>
            <li><small>2016/09-2020/06</small> 義守大學 應用日語學系</li>
            <li><small>2017/09-2018/08</small> 芝浦工業大学 <small>(交換留學)</small></li>
            <li><small>2019/07-2020/01</small> 杉乃井ホテル <small>(實習)</small></li>
        </ul>
        </div>
        <div class="skill">
            <p>檢定證照 <i class="fa-solid fa-file-lines fa-2xs"></i></p>
        <ul>
            <li>BJT J2</li>
            <li>JLPT N2</li>
            <li>TOIEC 800</li>
        </ul>
        </div>
    </div>
<!-- 工作經歷 -->
    <div class="buttonArea">
        <div class="work">
            <p>工作經歷 <i class="fa-solid fa-briefcase fa-2xs"></i></p>
        <ul>
            <li><small>2020/10-2021/06</small> 台灣住精科技 業務助理 <small>(契約．產休代職)</small></li>
            <li><small>2021/07-2022/03</small> 華虹服務整合 廠內翻譯協調人員</li>
            <li><small>2022/04-2022/07</small> 聯享光電 櫃台總務 <small>(打工．產休代職)</small></li>
            <li><small>2022/08-2023/08</small> 小舍河粉 外場</li>
        </ul>
        </div>
    </div>
    </div>
<!-- footer -->
    <div class="footer">
        <div class="icon">
            <a href="https://www.facebook.com/profile.php?id=100000413875005"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCDHgnA4iWN2hHZprapj4_zQ"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://www.instagram.com/tiiing_yaaa_dayo0w0/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/zawarudoooooooo"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
<!-- <RouterView /> -->
</template>

<style lang="scss" scoped>
.content{
    width: 100vw;
    height: 120vh;
    text-align: center;
    color: rgb(99, 113, 109);

    .firstArea{
        width: 100vw;
        display: flex;
        justify-content: space-around;

//交換
        .exchange{
            .exchangeTitle{
                margin-bottom: 2vmin;

                span{
                    font-size: 24pt;
                }
            }
            .exchangePhoto{
                height: 35vh;
                img{
                    width: 35vmin;
                    height: 35vmin;
                    border-radius: 5px;
                    transition: 0.3s;

                &:hover{
                    scale: 1.1;
                    opacity: 0.5;
                }

                &:active{
                    scale: 1;
                    border-radius: 50%;
                }
                }
            }
        }    

//關於我
        .profile{
            .profileTitle{
                margin-bottom: 2vmin;

                span{
                    font-size: 24pt;
                }
            }
            .profilePhoto{
                height: 35vh;
                img{
                    width: 35vmin;
                    height: 35vmin;
                    border-radius: 5px;
                    transition: 0.3s;

                &:hover{
                    scale: 1.1;
                    opacity: 0.5;
                }

                &:active{
                    scale: 1;
                    border-radius: 50%;
                }
                }
            }
        }

//實習
        .internship{
            .internshipTitle{
                margin-bottom: 2vmin;

                span{
                    font-size: 24pt;
                }
            }
            .internshipPhoto{
                height: 35vh;
                img{
                    width: 36vmin;
                    height: 35vmin;
                    border-radius: 5px;
                    transition: 0.3s;

                &:hover{
                    scale: 1.1;
                    opacity: 0.5;
                }

                &:active{
                    scale: 1;
                    border-radius: 50%;
                }
                }
            }
        }      
    }

//學歷和證照    
    .middleArea{
        width: 70vw;
        height: 40vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-left: 25vmin;
        .school{

            p{
                font-size: 22pt;
            }

            ul{
                display: inline-block;

                li{
                font-size: 13pt;
                }
            }
        }
        .skill{
            p{
                font-size: 22pt;
            }

            ul{
                display: inline-block;

                li{
                    font-size: 13pt;
                }
            }
        }
    }

//工作經歷    
    .buttonArea{
        height: 25vh;
        .work{
            p{
                font-size: 22pt;
            }
        
            ul{
                display: inline-block;

                li{
                    font-size: 13pt;
                }
            }
        }
    }
}

    .footer{
        width: 100vw;
        height: 10vh;
        background-color: lavender;

        .icon{
            font-size: 18pt;
            color: rgb(99, 113, 109);
            text-align: center;

            i{
                color: aliceblue;
                margin-right: 2vmin;
                margin-top: 4vmin;
                transition: 0.3s;

                &:hover{
                    color: lightblue;
                }

                &:active{
                    color: rgb(99, 113, 109);
                }
            }
        }
    } 
</style>