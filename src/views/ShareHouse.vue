<script>
import VLazyImage from "v-lazy-image";
export default{
    data(){
        return{

        }
    },
    beforeRouteEnter(to,form,next){
            window.document.body.style.backgroundColor="#fff9ed"
            next()
    },
    beforeRouteLeave(to,form,next){
            window.document.body.style.backgroundColor="#FFF0F5"
            next()
    },
    methods:{
        goExchangePage(){
            this.$router.push('/Exchange')
        },
        goLifePage(){
            this.$router.push('/Life')
        }
    },
    components: {
        VLazyImage
    }
}
</script>

<template>
<!-- IG 個人資訊 -->
    <div class="container">
<!-- IG 個人主頁照片 -->
        <div class="profile">
            <div class="profile-image">
                <img src="../../public/exchagePagePhoto/sharehouse/sharehouse profile page.jpg" alt="">
            </div>
<!-- IG 個人主頁資料 -->
            <div class="profile-user-settings">
                <h1 class="profile-user-name">Share_House</h1>
                <button class="btn profile-edit-btn">南浦和</button>
                <button class="btn profile-settings-btn" aria-label="profile settings" @click="goExchangePage"><i class="fa-solid fa-school"></i></button>
                <button class="btn profile-settings-btn" aria-label="profile settings" @click="goLifePage"><i class="fa-regular fa-images"></i></button>
            </div>
<!-- IG 個人主頁狀態 -->
            <!-- <div class="profile-stats">
                <ul>
                    <li><span class="profile-stat-count"><i class="fa-solid fa-school"></i></span>學校社團</li>
                    <li><span class="profile-stat-count"><i class="fa-solid fa-house"></i></span>share house</li>
                    <li><span class="profile-stat-count"></span>日常生活</li>
                </ul>
            </div> -->
<!-- IG 個人主頁簡介 -->
            <div class="profile-bio">
                <p><span class="profile-real-name"></span>Everyday party ! Party everyday !🎉🍻🥂🍺✨</p>
            </div>
        </div>
    </div>

<!-- IG 貼文區 -->
    <div class="container">
<!-- Share House 相片區域 -->
        <div class="gallery">
            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 1.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 2.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 89</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 5</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 3.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 4.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 38</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 5.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 47</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 6.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 94</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 3</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 7.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 52</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 4</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 8.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 66</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 9.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 45</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 10.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 34</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 11.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 41</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 12.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 30</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 13.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 14.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 89</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 5</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 15.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 16.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 38</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 17.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 47</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 18.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 94</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 3</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 19.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 52</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 4</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 20.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 66</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 21.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 45</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 22.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 34</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 23.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 41</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 24.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 30</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 25.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 94</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 3</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 26.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 52</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 4</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 27.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 66</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 28.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 45</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 29.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 34</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 30.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 41</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 31.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 30</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 32.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 41</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                    </ul>
                </div>
            </div>

            <div class="gallery-item" tabindex="0">
                <v-lazy-image src="../../public/exchagePagePhoto/sharehouse/share 33.jpg" class="gallery-image" alt="" />
                <div class="gallery-item-type">
                    <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>
                </div>
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 30</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="loading">
            <div></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

img {
    display: block;
}

.container {
    max-width: 93.5rem;
    margin: 0 auto;
    padding: 0 2rem;
}

.btn {
    display: inline-block;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
}

.visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
}

/* Profile Section */
.profile {
    padding: 5rem 0;
}

.profile::after {
    content: "";
    display: block;
    clear: both;
}

.profile-image {
    float: left;
    width: calc(33.333% - 1rem);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;
}

.profile-image img {
    width: 35vmin;
    height: 35vmin;
    border-radius: 50%;
}

.profile-user-settings,
.profile-stats,
.profile-bio {
    float: left;
    width: calc(66.666% - 2rem);
}

.profile-user-settings {
    margin-top: 1.1rem;
}

.profile-user-name {
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 300;
}

.profile-edit-btn {
    font-size: 1.4rem;
    line-height: 1.8;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.3rem;
    padding: 0 2.4rem;
    margin-left: 2rem;
}

.profile-settings-btn {
    font-size: 2rem;
    margin-left: 1rem;
}

.profile-stats {
    margin-top: 2.3rem;
}

.profile-stats li {
    display: inline-block;
    font-size: 1.6rem;
    line-height: 1.5;
    margin-right: 4rem;
    cursor: pointer;
}

.profile-stats li:last-of-type {
    margin-right: 0;
}

.profile-bio {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 2.3rem;
}

.profile-real-name,
.profile-stat-count,
.profile-edit-btn {
    font-weight: 600;
}

/* Gallery Section */
.gallery {
    display: flex;
    flex-wrap: wrap;
    margin: -1rem -1rem;
}

.gallery-item {
    position: relative;
    flex: 1 0 22rem;
    margin: 1rem;
    color: #fff;
    cursor: pointer;
}

.gallery-item:hover .gallery-item-info,
.gallery-item:focus .gallery-item-info {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

.gallery-item-info {
    display: none;
}

.gallery-item-info li {
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 600;
}

.gallery-item-likes {
    margin-right: 2.2rem;
}

.gallery-item-type {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
}

.fa-clone,
.fa-comment {
    transform: rotateY(180deg);
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Loader */
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: #333;
  margin: auto;
}

.loading.la-dark {
  color: #333;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 13vmin;
  height: 13vmin;
}

.loading > div {
  width: 100%;
  height: 100%;
  background: transparent;
  border-width: 2px;
  border-radius: 0;
  animation: square-loader 2s infinite ease;
}

.loading > div:after {
  display: inline-block;
  width: 100%;
  vertical-align: top;
  content: "";
  background-color: currentColor;
  animation: square-loader-inner 2s infinite ease-in;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div {
  border-width: 1px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div {
  border-width: 4px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div {
  border-width: 6px;
}

@keyframes square-loader {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes square-loader-inner {
  0% {
    height: 0;
  }

  25% {
    height: 0;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0;
  }
}

/* Media Query */
@media screen and (max-width: 40rem) {
    .profile {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
    }
    .profile::after {
        display: none;
    }
    .profile-image,
    .profile-user-settings,
    .profile-bio,
    .profile-stats {
        float: none;
        width: auto;
    }
    .profile-image img {
        width: 7.7rem;
    }
    .profile-user-settings {
        flex-basis: calc(100% - 10.7rem);
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
    }
    .profile-user-name {
        font-size: 2.2rem;
    }
    .profile-edit-btn {
        order: 1;
        padding: 0;
        text-align: center;
        margin-top: 1rem;
    }
    .profile-edit-btn {
        margin-left: 0;
    }
    .profile-bio {
        font-size: 1.4rem;
        margin-top: 1.5rem;
    }
    .profile-edit-btn,
    .profile-bio,
    .profile-stats {
        flex-basis: 100%;
    }
    .profile-stats {
        order: 1;
        margin-top: 1.5rem;
    }
    .profile-stats ul {
        display: flex;
        text-align: center;
        border-top: 0.1rem solid #dadada;
        border-bottom: 0.1rem solid #dadada;
    }
    .profile-stats li {
        font-size: 1.4rem;
        flex: 1;
        margin: 0;
    }
    .profile-stat-count {
        display: block;
    }
}
@supports (display: grid) {
    .profile {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: repeat(3, auto);
        grid-column-gap: 3rem;
        align-items: center;
    }
    .profile-image {
        grid-row: 1 / -1;
    }
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        grid-gap: 0;
    }
    .profile-image,
    .profile-user-settings,
    .profile-stats,
    .profile-bio,
    .gallery-item,
    .gallery {
        width: auto;
        margin: 0;
    }

    @media (max-width: 40rem) {
        .profile {
            grid-template-columns: auto 1fr;
            grid-row-gap: 1.2rem;
        }
        .profile-image {
            grid-row: 1 / 2;
        }
        .profile-user-settings {
            display: grid;
            grid-gap: 1rem;
        }
        .profile-edit-btn,
        .profile-stats,
        .profile-bio {
            grid-column: 1 / -1;
        }
        .profile-edit-btn{
            font-size: 1rem;
        }
        .profile-user-settings,
        .profile-edit-btn,
        .profile-settings-btn,
        .profile-bio,
        .profile-stats {
            margin: 0;
        }
        .profile-user-name{
            font-size: 1.2rem;
            font-weight: 500;
        }
        .profile-settings-btn{
            font-size: 1rem;
        }
        p{
            font-size: 11pt;
            text-align: center;
        }
        .gallery-image{
            width: 90%;
            height: 90%;
        }
        .gallery-item-type{
            top: 0;
            right: 3rem;
            font-size: 2rem
        }
        .gallery-item:hover .gallery-item-info{
            width: 90%;
            height: 90%;
        }
        .gallery-item-info{
            ul{
                margin-right: 1rem;
            }
        }
    }
}
</style>