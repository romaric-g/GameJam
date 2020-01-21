<template>
     <div class="progressBarElement">
        <p>{{ name }}</p>
        <div class="progressBar">
            <div class="bar">
                <span id="environment" :ref="id" class="progress"></span>
            </div>
            <div class="status">
                <p>{{ environmentManager.environmentvalue + "/" + environmentManager.environmentLimite }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../../TodosStore.js"
import { mapState } from 'vuex'

export default {
    props: {
        name: String,
    },
    computed: {
      ...mapState(["environmentManager"])
    },
    data () {
        return {
            id: null,
        }
    },
    mounted () {
        this.id = this._uid
        this.$nextTick((e) => {
            this.updateBar(store.state.environmentManager.environmentvalue)
        })

    },
    watch: {
        barValue: function(a) {
            this.updateBar(a)
        }
    },
    methods: {
        updateBar: function (a) {
            this.$refs[this.id].setAttribute('style', ('width: ' + a / (store.state.environmentManager.environmentLimite / 100) + '%') );
        }
    }
}
</script>

<style lang="scss">
    .progressBarElement {
        font-family: 'Titillium Web', sans-serif;
        padding: 0 5px;
        p {
            font-weight: 200;
            line-height: 1em;
            margin-top: 2px;
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
