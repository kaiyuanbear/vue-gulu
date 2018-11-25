<template>
    <button class="g-button">按钮</button>
</template>

<script>
    export default {
        name: "g-button"
    }
</script>

<style scoped lang="scss">
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover {
            border-color: var(--border-color);
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }

</style>