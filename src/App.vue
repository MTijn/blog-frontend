<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div class="container-fluid">
                <router-link active-class="active" class="navbar-brand" to="/">
                    <h1>MartijnKlene.nl</h1>
                </router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link
                                active-class="active"
                                class="nav-link"
                                :to="{ name: 'archive'}"
                            >
                                Archive
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
</script>
