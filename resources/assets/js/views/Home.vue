<template>
    <div style="height: inherit;">
        <canvas id="granim-canvas" style="height: inherit; width: 100%;z-index: -2; position: absolute;"></canvas>
        <div id="particles" style="height: 99%; width: 100%;z-index: -1; position: absolute;"></div>
        <div class="container-fluid h-100">
            <div class="row flex-column h-100">
                <div class="col col-auto">ALACARTI</div>
                <div class="col d-flex align-items-center">
                    <div class="row w-100 justify-content-center">
                        <div class="col-12 col-sm-10 col-md-6">
                            <h1 class="">
                                Search uniqe recipes <br/>and great foods near you<br/>
                            </h1>
                            <search-box class="mt-3"></search-box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchBox from './../components/SearchBox/SearchBox.vue';
    import Granim from 'granim';

    require('particles.js');

    export default {
        name: "Home",

        components: {
            SearchBox
        },

        mounted() {
            new Granim({
                element: '#granim-canvas',
                name: 'granim',
                opacity: [1, 1],
                isPausedWhenNotInView: true,
                states: {
                    "default-state": {
                        gradients: [
                            ['#EE7752', '#E73C7E'],
                            ['#C95924', '#CE8A04'],
                            ['#E73C7E', '#EE7752'],
                        ],
                        transitionSpeed: 20000,
                    }
                },
            });

            particlesJS.load('particles', '/particlesjs-config.json', () => {});
        }
    }
</script>