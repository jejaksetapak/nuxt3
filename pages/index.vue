<template>
    <div>
        <h2>wawan</h2>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mt-2">
                    <div v-for="p in prod" :key="p.id">
                        <div class="card mt-3">
                            <div class="card-body">
                                {{ p.description }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { data: prod } = await useFetch("https://fakestoreapi.com/products");
</script>