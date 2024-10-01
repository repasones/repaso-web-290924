<!-- Toolbar provides start, center and end properties to place content at these sections. -->

<template>
    <pv-toolbar>
        <template #start>
            <h1>{{ $t("title") }}</h1>
        </template>


        <template #end>
            <pv-button @click="changeLanguage()">{{ language }}</pv-button>
        </template>
    </pv-toolbar>
</template>

<script>
export default {
    name: 'ToolbarComponent',
    data() {
        return {
            language: 'EN'
        };
    },
    methods: {
        changeLanguage() {
            if (this.language == 'EN') {
                this.language = 'ES';
                this.$i18n.locale = 'es';
            }
            else if (this.language == 'ES') {
                this.language = 'EN';
                this.$i18n.locale = 'en';
            }
        }
    }

    //this.$i18n.locale
};
</script>

<style scoped></style>