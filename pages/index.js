/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-nft.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a-scene
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
        >
          <a-nft
            type="nft"
            url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          >
            <a-entity
              gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
              scale="5 5 5"
              position="50 150 0"
            ></a-entity>
          </a-nft>
          <a-entity camera></a-entity>
        </a-scene>
      </main>
    </div>
  );
}
