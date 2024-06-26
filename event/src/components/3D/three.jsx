import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';

const ThreeView = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new THREE.WebGLRenderer();
  

};

export default ThreeView;
