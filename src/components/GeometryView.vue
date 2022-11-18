<template>
  <Renderer width="500" height="300" :alpha=true>
    <Camera :position="{ z: 10000 }" :far=20000 />
    <Scene ref="scene">
      <PointLight color="#FF8855" :position="{ x: 4000, y:0, z: 800 }" :distance="10000" />
      <PointLight color="#3333FF" :position="{ x: -4000, y:0, z: 800 }" :distance="10000" />
      <PointLight :position="{ x: 0, y:0, z: 4000 }" :distance="100000" />
    </Scene>
  </Renderer>
</template>

<script lang="ts">
  // Inspired by https://codesandbox.io/s/9y3n2r8wv4?file=/src/components/TheCanvas.vue:345-2767
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import type Three from 'three/src/Three';
  // import TrackballControls from 'three-trackballcontrols';
  import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';

  export default {
    name: 'geometry',
    props: {
      filename: String
    },
    mounted: function() {
      this.loadGeometry();
    },
    methods: {
      async loadGeometry() {
        const loader = new GLTFLoader();
        const loadedData = await loader.loadAsync(`/geometry/${this.filename}.glb`);
        const scene = this.$refs.scene as Three.Scene;
        scene.add(loadedData.scene);
      },
    },
    components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
  };
</script>
