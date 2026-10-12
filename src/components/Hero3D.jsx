import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/**
 * Interactive 3D water drop with rising bubbles and ripples (Three.js).
 * Follows the mouse / finger, respects prefers-reduced-motion, and
 * falls back to a CSS drop when WebGL is unavailable.
 */
export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) {
      mount.classList.add('no-webgl');
      return undefined;
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.2, 10);

    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(3, 5, 6);
    scene.add(key);
    const rim = new THREE.PointLight(0x2fc4e8, 45, 30);
    scene.add(rim);

    const group = new THREE.Group();
    scene.add(group);

    // Teardrop profile -> LatheGeometry
    const pts = [];
    for (let i = 0; i <= 64; i += 1) {
      const t = Math.PI - (i / 64) * Math.PI;
      pts.push(new THREE.Vector2(Math.sin(t) * Math.pow(Math.sin(t / 2), 1.4) * 1.55, Math.cos(t) * 1.5));
    }
    const dropGeo = new THREE.LatheGeometry(pts, 96);
    const dropMat = new THREE.MeshPhysicalMaterial({
      color: 0x1ea7e1, metalness: 0.05, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.03,
      transparent: true, opacity: 0.84, envMapIntensity: 1.5, side: THREE.DoubleSide,
    });
    const drop = new THREE.Mesh(dropGeo, dropMat);
    group.add(drop);

    const coreMat = new THREE.MeshBasicMaterial({ color: 0x8be6ff, transparent: true, opacity: 0.28 });
    const core = new THREE.Mesh(dropGeo, coreMat);
    core.scale.set(0.8, 0.8, 0.8);
    drop.add(core);

    // Bubbles
    const bubbleGeo = new THREE.SphereGeometry(1, 28, 28);
    const bubbleMat = new THREE.MeshPhysicalMaterial({
      color: 0xc8f1ff, roughness: 0.05, clearcoat: 1, transparent: true, opacity: 0.55, envMapIntensity: 1.6,
    });
    const bubbles = [];
    for (let i = 0; i < (small ? 10 : 18); i += 1) {
      const m = new THREE.Mesh(bubbleGeo, bubbleMat);
      const s = 0.07 + Math.random() * 0.24;
      m.scale.setScalar(s);
      m.position.set((Math.random() - 0.5) * 7.5, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 3 - 0.5);
      m.userData = { speed: 0.25 + Math.random() * 0.6, wob: Math.random() * 6 };
      group.add(m);
      bubbles.push(m);
    }

    // Ripples under the drop
    const ringGeo = new THREE.RingGeometry(0.92, 1, 80);
    const ripples = [0, 1].map((k) => {
      const mat = new THREE.MeshBasicMaterial({ color: 0x7fe0ff, transparent: true, opacity: 0, side: THREE.DoubleSide });
      const r = new THREE.Mesh(ringGeo, mat);
      r.rotation.x = -Math.PI / 2;
      r.position.y = -2.55;
      r.userData.k = k;
      scene.add(r);
      return r;
    });

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onMove = (e) => {
      const r = mount.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove);

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    // Skip drawing while the hero is scrolled out of view (saves battery on phones)
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(mount);

    const clock = new THREE.Clock();
    let raf;
    const loop = () => {
      const t = reduce ? 0 : clock.getElapsedTime();
      mouse.x += (target.x - mouse.x) * 0.05;
      mouse.y += (target.y - mouse.y) * 0.05;

      group.rotation.y = mouse.x * 0.55;
      group.rotation.x = mouse.y * 0.22;
      drop.position.y = Math.sin(t * 1.2) * 0.16;
      const sq = Math.sin(t * 1.6) * 0.035;
      drop.scale.set(1 + sq, 1 - sq, 1 + sq);
      drop.rotation.z = Math.sin(t * 0.8) * 0.07;
      rim.position.set(Math.cos(t * 0.8) * 5, -1 + Math.sin(t * 0.5) * 2, 3 + Math.sin(t * 0.8) * 3);

      bubbles.forEach((b) => {
        b.position.y += b.userData.speed * 0.012 * (reduce ? 0 : 1);
        b.position.x += Math.sin(t * 1.5 + b.userData.wob) * 0.0025;
        if (b.position.y > 3.8) b.position.y = -3.8;
      });

      ripples.forEach((r) => {
        const p = ((t * 0.5 + r.userData.k * 0.5) % 1);
        r.scale.setScalar(0.9 + p * 2.4);
        r.material.opacity = (1 - p) * 0.5;
      });

      if (visible) renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      [dropGeo, bubbleGeo, ringGeo].forEach((g) => g.dispose());
      [dropMat, coreMat, bubbleMat, ...ripples.map((r) => r.material)].forEach((m) => m.dispose());
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hero3d" role="img" aria-label="Animated 3D water drop" />;
}
