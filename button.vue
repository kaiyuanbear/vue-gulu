<template>
    <button class="g-button" :class="iconPosition">
        <g-icon class="icon" :name="iconName"></g-icon>
        <div class="slot-box">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        name: "g-button",
        props: {
            iconName: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) {
                    return value === 'left' || value === 'right'
                }
            }
        },
        data() {
            return {
                
            }
        }
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
        display: flex;
        &.left {
            .icon {
                order: 1
            }
            .slot-box {
                order: 2
            }
        }
        &.right {
            .icon {
                order: 2
            }
            .slot-box {
                order: 1
            }
        }
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