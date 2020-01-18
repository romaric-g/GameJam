<template>
    <div>
        <ProgressBar name="Ecologie" v-bind:currentValue="60" v-bind:maxValue="100" ></ProgressBar>
        <ProgressBar name="Ecologie" v-bind:currentValue="20" v-bind:maxValue="100" ></ProgressBar>
    </div>
</template>

<script>
import ProgressBar from "./elements/ProgressBar.vue"

export default {
    components: { ProgressBar }
}
</script>