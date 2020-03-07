<template>
    <div class="text-center ma-2">
        <v-snackbar
            v-model="showSnackbar"
        >
            Successfully added.
        <v-btn
            color="pink"
            text
            @click="showSnackbar = false"
        >
            Close
        </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    props: {
        showSnackbar: Boolean
    }
}
</script>