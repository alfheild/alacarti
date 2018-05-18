@extends('layouts.website')
@section('title', 'Home')
@section('content')
    <canvas id="granim-canvas" style="height: inherit; width: 100%;z-index: -2; position: absolute;"></canvas>
    <div id="particles" style="height: 99%; width: 100%;z-index: -1; position: absolute;"></div>
    <div v-bar class="full-height">
        <b-container fluid style="min-height: 100%;">
            <b-row align-v="center" class="h-100">
                <b-col>
                    <h1 class="text-center">Alacarti</h1>
                </b-col>
            </b-row>
            <b-row class="pt-5">
                <b-col>
                    <h2 class="text-center">Find your dinner</h2>
                </b-col>
            </b-row>
            <b-container class="mt-5">
                <b-card-group deck>
                    <b-card title="Title"
                            img-src="https://picsum.photos/300/300/?image=41"
                            img-alt="Img"
                            img-top>
                        <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <div slot="footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </b-card>
                    <b-card title="Title"
                            img-src="https://picsum.photos/300/300/?image=41"
                            img-alt="Img"
                            img-top>
                        <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <div slot="footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </b-card>
                </b-card-group>
            </b-container>
        </b-container>
    </div>
@endsection