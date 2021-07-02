import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import Stats from 'stats.js';
import { isArray } from 'lodash';

import styled from 'styled-components';

let scene;
let camera;
let renderer;
let controls;
let stats;

let requestAnimation;

let step = 0;

const Main = styled.main`
`;

function Home(props) {

  const webglEl = useRef(null);
  const StatsEl = useRef(null);

  const { images, autoPlay, resourceMode } = props;

  const iniThree = () => {

    cancelAnimationFrame(requestAnimation);

    // Create renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    webglEl.current.innerHTML = '';
    webglEl.current.appendChild(renderer.domElement);

    // Createa scene
    scene = new THREE.Scene();

    // Create camera
    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    // Create camera controller
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.rotateSpeed = - 0.25;
    controls.dampingFactor = 0.8
    // controls.addEventListener("change", () => console.log(camera.position.x, camera.position.z));

    // Create axis line
    const axes = new THREE.AxesHelper(1000);
    scene.add(axes);

    // Createa stas info
    stats = new Stats();

    switch (resourceMode) {
      case 0:
        renderBitmap();
        break;
      case 1:
        renderGeometry();
        break;
      default:
        throw Error(`Unknow resource mode ${resourceMode}`);
    }

    animate();
  }

  const renderBitmap = async () => {
    let textures;
    if (isArray(images)) {
      textures = await getTexturesFromSplitFile(images);
    } else {
      textures = await getTexturesFromMergeFile(images);
    }

    const materials = [];
    textures.forEach(texture =>
      materials.push(new THREE.MeshBasicMaterial({ map: texture }))
    );

    const mesh = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50), materials);
    mesh.geometry.scale(1, 1, -1);
    scene.add(mesh);
  }

  const renderGeometry = () => {
    const texture = new THREE.TextureLoader().load(images);
    const sphereGeometry = new THREE.SphereGeometry(50, 50, 50);
    const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    // Debug line
    // sphere.material.wireframe = true;
    sphereGeometry.scale(1, 1, -1);
    scene.add(sphere);
  }

  const getTexturesFromSplitFile = (imgs = []) => {
    return Promise.all(imgs.map(img => new THREE.TextureLoader().load(img)));
  }

  const getTexturesFromMergeFile = (img, length = 6) => {
    return new Promise(resolve => {
      let textures = Array.from({ length });
      const imageObj = new Image();
      imageObj.src = img;
      imageObj.onload = () => {
        let canvas;
        let context;
        const tileWidth = imageObj.height;
        textures = textures.map((t, i) => {
          const texture = new THREE.Texture();
          canvas = document.createElement('canvas');
          context = canvas.getContext('2d');
          canvas.height = tileWidth;
          canvas.width = tileWidth;
          context.drawImage(imageObj, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth);
          texture.image = canvas;
          texture.needsUpdate = true;
          return texture;
        });
        resolve(textures);
      };
    });
  }

  const initStats = () => {
    stats.setMode(0); // 0: fps, 1: ms
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    StatsEl.current.appendChild(stats.domElement);
    return stats;
  }

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  const autoCamera = () => {
    if (autoPlay) {
      step += 0.05;
      const z = Math.sin(Math.PI / 180 * step);
      const x = Math.cos(Math.PI / 180 * step);
      camera.position.set(x, camera.position.y, z);
      // camera.lookAt(scene.position);
      if (step === 360) {
        step = 0;
      }
    }
  }

  const animate = () => {
    requestAnimation = requestAnimationFrame(animate);
    controls.update();
    stats.update();
    autoCamera();
    renderer.render(scene, camera);
  }

  useEffect(() => {
    iniThree();
    initStats();
    window.addEventListener('resize', onResize, false);
  });

  return (
    <Main>
      <div ref={webglEl} />
      <div ref={StatsEl} style={{ position: 'absolute', left: '20px', top: '15px' }} />
    </Main>
  )
}

Home.defaultProps = {
  resourceMode: 1,
}

Home.propTypes = {
  resourceMode: PropTypes.number,
  images: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
}
export default Home;
