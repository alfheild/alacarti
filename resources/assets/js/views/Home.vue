<template>
    <div style="height: inherit;">
        <canvas id="granim-canvas" style="height: inherit; width: 100%;z-index: -2; position: absolute;"></canvas>
        <div id="particles" style="height: 99%; width: 100%;z-index: -1; position: absolute;"></div>
        <div class="full-height">
            <b-container fluid style="height: 100%;">
                <b-row align-v="center" class="h-100">
                    <b-col>
                        <b-row>
                            <b-col>
                                <h1 class="text-center">Alacarti</h1>
                            </b-col>
                        </b-row>
                        <b-row align-h="center" class="pt-3">
                            <b-col md="6">
                                <b-form>
                                    <b-input-group prepend="&#128269">
                                        <b-form-input id="finder"
                                                      type="text"
                                                      placeholder="Search">
                                        </b-form-input>
                                    </b-input-group>
                                </b-form>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="scss">
    .full-height {
        height: 100%;
        h1, h2, h3 {
            color: #ffffff;
        }
    }
</style>