<template>
     <div class="progressBarElement">
        <p>{{ name }}</p>
        <div class="progressBar">
            <div class="bar">
                <span :ref="id" class="progress"></span>
            </div>
            <div class="status">
                <p>{{ barValue + "/" + maxValue }}</p>
            </div>
        </div>   
    </div>   
</template>

<script>

export default {
    props: {
        name: String,
        currentValue: Number,
        maxValue: Number
    },
    data () {
        return {
            id: null,
            barValue: this.currentValue
        }
    },
    mounted () {
        this.id = this._uid
        this.$nextTick((e) => {
            this.updateBar(this.currentValue)
        })

    },
    watch: {
        barValue: function(a) {
            this.updateBar(a)
        }
    },
    methods: {
        updateBar: function (a) {  
            console.log(a)
            this.$refs[this.id].setAttribute('style', ('width: ' + a / (this.maxValue / 100) + '%') );
        }
    }
}
</script>

<style lang="scss">
    .progressBarElement {
        padding: 0 5px;
        p {
            font-size: 18px;
            color: white;
        }
        .status p {
            font-size: 0.8em;
        }
        .progressBar {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .bar {
                flex: 1;
                position: relative;
                height: 4px;
                width: 100%;
                margin-right: 15px;
                background-color: white;
                .progress {
                    position: absolute;
                    left: 0px; top: 0px; bottom: 0px;
                    height: 4px;
                    background-color: #EF476F
                }
            }
            .status {
                flex: 0;
            }
        }
    }
</style>