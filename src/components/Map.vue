<template>
    <div class="map">
        <div class="header">
            <a href="#" @click.prevent="resume()">
                <svg xmlns="http://www.w3.org/2000/svg" width="14.192" height="26.53" viewBox="0 0 14.192 26.53"><path id="Icon_metro-chevron-thin-down" data-name="Icon metro-chevron-thin-down" d="M29.437,10.965a1.074,1.074,0,0,1,1.51,0,1.049,1.049,0,0,1,0,1.495l-12.2,12.077a1.074,1.074,0,0,1-1.51,0L5.042,12.46a1.05,1.05,0,0,1,0-1.495,1.074,1.074,0,0,1,1.51,0L17.995,21.98Z" transform="translate(24.847 -4.729) rotate(90)" fill="#fff"/></svg>
                <p>Retour au jeu</p>
            </a>
        </div>

        <div class="biome-line">
            <span class="biome-element unknow danger"></span>
            <span class="biome-element unknow danger"></span>
            <span class="biome-element unknow danger"></span>
            <span class="biome-element unknow"></span>
            <span class="biome-element"></span>
            <span class="biome-element"></span>
            <span class="biome-element"></span>
            <span class="biome-element"></span>
            <span class="biome-element danger"></span>
            <span class="biome-element danger"></span>
            <span class="biome-element unknow danger"></span>
            <span class="biome-element unknow danger"></span>
        </div>

        <div class="biome-image">
            <div class="items">
                <div class="item">
                    <div class="image">
                        <img src="../images/map/plaine de nuit.png" alt="" srcset="">
                    </div>
                    <div class="slider">
                        <div class="slider-left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.859" height="20.911" viewBox="0 0 11.859 20.911"><path id="Icon_awesome-caret-left" data-name="Icon awesome-caret-left" d="M13.5,8.953V27.047a1.406,1.406,0,0,1-2.4.994L2.053,18.994a1.406,1.406,0,0,1,0-1.989L11.1,7.959a1.406,1.406,0,0,1,2.4.994Z" transform="translate(-1.641 -7.544)"/></svg>
                        </div>
                        <div class="slider-title"><p>Jungle</p></div>
                        <div class="slider-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.859" height="20.911" viewBox="0 0 11.859 20.911"><path id="Icon_awesome-caret-right" data-name="Icon awesome-caret-right" d="M0,27.047V8.953a1.406,1.406,0,0,1,2.4-.994l9.047,9.047a1.406,1.406,0,0,1,0,1.989L2.4,28.041A1.406,1.406,0,0,1,0,27.047Z" transform="translate(0 -7.544)"/> </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="biome-action">
            <div class="action">
                <svg id="Icon_ionic-ios-basket" data-name="Icon ionic-ios-basket" xmlns="http://www.w3.org/2000/svg" width="37.578" height="32.208" viewBox="0 0 37.578 32.208"><path id="Tracé_2" data-name="Tracé 2" d="M27.274,27.3H31.4l1.468-6.324H27.274Z" transform="translate(2.578 -1.323)"/><path id="Tracé_3" data-name="Tracé 3" d="M27.274,32.251h.042a3.329,3.329,0,0,0,3.212-2.474l.5-2.172H27.274Z" transform="translate(2.578 -0.044)"/><path id="Tracé_4" data-name="Tracé 4" d="M18.661,27.6h8.7v4.655h-8.7Z" transform="translate(0.916 -0.045)"/><path id="Tracé_5" data-name="Tracé 5" d="M5.511,27.3h4.11V20.974H4.043Z" transform="translate(-1.903 -1.323)"/><path id="Tracé_6" data-name="Tracé 6" d="M10.048,13.5h8.7v7.339h-8.7Z" transform="translate(-0.745 -2.764)"/><path id="Tracé_7" data-name="Tracé 7" d="M18.661,13.5h8.7v7.339h-8.7Z" transform="translate(0.916 -2.764)"/><path id="Tracé_8" data-name="Tracé 8" d="M6.094,29.762a3.31,3.31,0,0,0,3.2,2.491h.042V27.6H5.583Z" transform="translate(-1.606 -0.045)"/><path id="Tracé_9" data-name="Tracé 9" d="M10.048,27.6h8.7v4.655h-8.7Z" transform="translate(-0.745 -0.045)"/><path id="Tracé_10" data-name="Tracé 10" d="M18.661,20.974h8.7V27.3h-8.7Z" transform="translate(0.916 -1.323)"/><path id="Tracé_11" data-name="Tracé 11" d="M10.048,20.974h8.7V27.3h-8.7Z" transform="translate(-0.745 -1.323)"/><path id="Tracé_12" data-name="Tracé 12" d="M38.484,15.236H34.466V7.184A2.692,2.692,0,0,0,31.782,4.5H10.294A2.692,2.692,0,0,0,7.61,7.184v8.052H3.592A1.344,1.344,0,0,0,2.284,16.88l1.652,5.7H9.967V8.023a1.178,1.178,0,0,1,1.174-1.174H30.935a1.178,1.178,0,0,1,1.174,1.174V22.575h6.039l1.644-5.7A1.344,1.344,0,0,0,38.484,15.236Z" transform="translate(-2.249 -4.5)"/></svg>
            </div>
                <div class="action">
                <svg id="Icon_ionic-ios-basket" data-name="Icon ionic-ios-basket" xmlns="http://www.w3.org/2000/svg" width="37.578" height="32.208" viewBox="0 0 37.578 32.208"><path id="Tracé_2" data-name="Tracé 2" d="M27.274,27.3H31.4l1.468-6.324H27.274Z" transform="translate(2.578 -1.323)"/><path id="Tracé_3" data-name="Tracé 3" d="M27.274,32.251h.042a3.329,3.329,0,0,0,3.212-2.474l.5-2.172H27.274Z" transform="translate(2.578 -0.044)"/><path id="Tracé_4" data-name="Tracé 4" d="M18.661,27.6h8.7v4.655h-8.7Z" transform="translate(0.916 -0.045)"/><path id="Tracé_5" data-name="Tracé 5" d="M5.511,27.3h4.11V20.974H4.043Z" transform="translate(-1.903 -1.323)"/><path id="Tracé_6" data-name="Tracé 6" d="M10.048,13.5h8.7v7.339h-8.7Z" transform="translate(-0.745 -2.764)"/><path id="Tracé_7" data-name="Tracé 7" d="M18.661,13.5h8.7v7.339h-8.7Z" transform="translate(0.916 -2.764)"/><path id="Tracé_8" data-name="Tracé 8" d="M6.094,29.762a3.31,3.31,0,0,0,3.2,2.491h.042V27.6H5.583Z" transform="translate(-1.606 -0.045)"/><path id="Tracé_9" data-name="Tracé 9" d="M10.048,27.6h8.7v4.655h-8.7Z" transform="translate(-0.745 -0.045)"/><path id="Tracé_10" data-name="Tracé 10" d="M18.661,20.974h8.7V27.3h-8.7Z" transform="translate(0.916 -1.323)"/><path id="Tracé_11" data-name="Tracé 11" d="M10.048,20.974h8.7V27.3h-8.7Z" transform="translate(-0.745 -1.323)"/><path id="Tracé_12" data-name="Tracé 12" d="M38.484,15.236H34.466V7.184A2.692,2.692,0,0,0,31.782,4.5H10.294A2.692,2.692,0,0,0,7.61,7.184v8.052H3.592A1.344,1.344,0,0,0,2.284,16.88l1.652,5.7H9.967V8.023a1.178,1.178,0,0,1,1.174-1.174H30.935a1.178,1.178,0,0,1,1.174,1.174V22.575h6.039l1.644-5.7A1.344,1.344,0,0,0,38.484,15.236Z" transform="translate(-2.249 -4.5)"/></svg>
            </div>
            <div class="action">
                <svg id="Icon_ionic-ios-basket" data-name="Icon ionic-ios-basket" xmlns="http://www.w3.org/2000/svg" width="37.578" height="32.208" viewBox="0 0 37.578 32.208"><path id="Tracé_2" data-name="Tracé 2" d="M27.274,27.3H31.4l1.468-6.324H27.274Z" transform="translate(2.578 -1.323)"/><path id="Tracé_3" data-name="Tracé 3" d="M27.274,32.251h.042a3.329,3.329,0,0,0,3.212-2.474l.5-2.172H27.274Z" transform="translate(2.578 -0.044)"/><path id="Tracé_4" data-name="Tracé 4" d="M18.661,27.6h8.7v4.655h-8.7Z" transform="translate(0.916 -0.045)"/><path id="Tracé_5" data-name="Tracé 5" d="M5.511,27.3h4.11V20.974H4.043Z" transform="translate(-1.903 -1.323)"/><path id="Tracé_6" data-name="Tracé 6" d="M10.048,13.5h8.7v7.339h-8.7Z" transform="translate(-0.745 -2.764)"/><path id="Tracé_7" data-name="Tracé 7" d="M18.661,13.5h8.7v7.339h-8.7Z" transform="translate(0.916 -2.764)"/><path id="Tracé_8" data-name="Tracé 8" d="M6.094,29.762a3.31,3.31,0,0,0,3.2,2.491h.042V27.6H5.583Z" transform="translate(-1.606 -0.045)"/><path id="Tracé_9" data-name="Tracé 9" d="M10.048,27.6h8.7v4.655h-8.7Z" transform="translate(-0.745 -0.045)"/><path id="Tracé_10" data-name="Tracé 10" d="M18.661,20.974h8.7V27.3h-8.7Z" transform="translate(0.916 -1.323)"/><path id="Tracé_11" data-name="Tracé 11" d="M10.048,20.974h8.7V27.3h-8.7Z" transform="translate(-0.745 -1.323)"/><path id="Tracé_12" data-name="Tracé 12" d="M38.484,15.236H34.466V7.184A2.692,2.692,0,0,0,31.782,4.5H10.294A2.692,2.692,0,0,0,7.61,7.184v8.052H3.592A1.344,1.344,0,0,0,2.284,16.88l1.652,5.7H9.967V8.023a1.178,1.178,0,0,1,1.174-1.174H30.935a1.178,1.178,0,0,1,1.174,1.174V22.575h6.039l1.644-5.7A1.344,1.344,0,0,0,38.484,15.236Z" transform="translate(-2.249 -4.5)"/></svg>
            </div>
            <div class="action">
                <svg id="Icon_ionic-ios-basket" data-name="Icon ionic-ios-basket" xmlns="http://www.w3.org/2000/svg" width="37.578" height="32.208" viewBox="0 0 37.578 32.208"><path id="Tracé_2" data-name="Tracé 2" d="M27.274,27.3H31.4l1.468-6.324H27.274Z" transform="translate(2.578 -1.323)"/><path id="Tracé_3" data-name="Tracé 3" d="M27.274,32.251h.042a3.329,3.329,0,0,0,3.212-2.474l.5-2.172H27.274Z" transform="translate(2.578 -0.044)"/><path id="Tracé_4" data-name="Tracé 4" d="M18.661,27.6h8.7v4.655h-8.7Z" transform="translate(0.916 -0.045)"/><path id="Tracé_5" data-name="Tracé 5" d="M5.511,27.3h4.11V20.974H4.043Z" transform="translate(-1.903 -1.323)"/><path id="Tracé_6" data-name="Tracé 6" d="M10.048,13.5h8.7v7.339h-8.7Z" transform="translate(-0.745 -2.764)"/><path id="Tracé_7" data-name="Tracé 7" d="M18.661,13.5h8.7v7.339h-8.7Z" transform="translate(0.916 -2.764)"/><path id="Tracé_8" data-name="Tracé 8" d="M6.094,29.762a3.31,3.31,0,0,0,3.2,2.491h.042V27.6H5.583Z" transform="translate(-1.606 -0.045)"/><path id="Tracé_9" data-name="Tracé 9" d="M10.048,27.6h8.7v4.655h-8.7Z" transform="translate(-0.745 -0.045)"/><path id="Tracé_10" data-name="Tracé 10" d="M18.661,20.974h8.7V27.3h-8.7Z" transform="translate(0.916 -1.323)"/><path id="Tracé_11" data-name="Tracé 11" d="M10.048,20.974h8.7V27.3h-8.7Z" transform="translate(-0.745 -1.323)"/><path id="Tracé_12" data-name="Tracé 12" d="M38.484,15.236H34.466V7.184A2.692,2.692,0,0,0,31.782,4.5H10.294A2.692,2.692,0,0,0,7.61,7.184v8.052H3.592A1.344,1.344,0,0,0,2.284,16.88l1.652,5.7H9.967V8.023a1.178,1.178,0,0,1,1.174-1.174H30.935a1.178,1.178,0,0,1,1.174,1.174V22.575h6.039l1.644-5.7A1.344,1.344,0,0,0,38.484,15.236Z" transform="translate(-2.249 -4.5)"/></svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        resume: function(event) {
            this.$router.push('/play');
        }
    }
}
</script>

<style lang="scss">
.map {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;

    .header {
        font-size: 1.2em;
        margin: 7px 0;
        svg {
            margin: 0 15px;
            display: inline-block;
            vertical-align: middle;
        }
        
        p {
            display: inline-block;
        }

        a {
            color: white;
            text-decoration: none;
        }
    }

    .biome-line {
        display: flex;
        height: 65px;
        margin: 7px 0;

        .biome-element {
            height: 100%;
            margin: 0 1px;
            flex: 1;
            background-color: white;

            &.unknow {
                opacity: 0.4;
            }

            &.home {
                display: flex;
                align-items: center;
                justify-content: center;
                svg {
                    height: 10px;
                    width: 10px;
                }
            }

            &.danger {
                background-color: #EF476F;
            }
        }
    }

    .biome-image {
        flex: 1;
        .items {
            display: flex;
            height: 100%;
            width: 100%;
            background-color: red;


            .item {
                position: relative;
                width: 100%;
                height: 100%;

                .image {
                    position: absolute;
                    top: 0;left: 0;right: 0;bottom: 0;

                    img {
                        object-fit: cover;
                        height: 100%;
                        width: 100%;
                    }
                }

                .slider {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    padding: 20px;
                    bottom: 0;
                    left: 0;
                    right: 0;

                    .slider-title {
                        font-size: 3em;
                        flex: 1;
                        text-align: center;
                        color: white;
                    }

                    svg {
                        height: 30px;
                        width: 30px;

                        path {
                            fill: white;
                        }
                    }
                }
            }
        }
    }

    .biome-action {
        display: flex;

        .action {
            flex: 1;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            margin: 3px;

            svg {
                height: 35px;
                width: 35px;
            }
        }
    }
}
</style>