<template>
  <div class="test">
    
    <!-- <div contenteditable style="width: 100px;height: 100px; border:1px solid;background: orange"> </div> -->

    <!-- <div class="editor" contenteditable="true">
      <img src="https://img2.baidu.com/it/u=1740892428,654071049&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400" alt />
    </div>-->
    
  </div>
</template>

<script>
// import * as THREE from "three";
// import { Scene } from "three";
// // import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";

// // 设置场景
// const scene = new Scene();

// // 设置相机
// const camera = new THREE.PerspectiveCamera(
//   45,
//   window.innerWidth / window.innerHeight,
//   1,
//   500
// );
// camera.position.set(0, 0, 1);
// camera.lookAt(0, 0, 0);

// // 设置渲染器
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// var test3 = function() {
//   var objloader = new OBJLoader(); //obj加载器
//   var mtlloader = new MTLLoader(); //材质文件加载器
//   var dragon;
//   console.log('>>> ', dragon);

//   mtlloader.load("dragon.mtl", function(materials) {
//     objloader.setMaterials(materials); //obj模型会和MaterialCreator包含的材质对应起来
//     objloader.load("dragon.obj", function(obj) {
//       obj.scale.x = 0.1;
//       obj.scale.y = 0.1;
//       obj.scale.set(3, 3, 3); //设置obj模型的大小
//       scene.add(obj); //将载入的obj模型添加到场景中
//       dragon = obj;

//       renderer.render(scene, camera);
//     });
//   });

//   //创建光源
//   const light = new THREE.DirectionalLight(0xffffff, 1);
//   light.position.set(-1, 2, 4);
//   scene.add(light); //将光源添加到场景中

//   function animate() {
//     if (dragon) {
//       dragon.scale.x = 0.1
//       dragon.rotation.y += 0.01;
//     }

//     // 通过渲染器，把相机和已经含有物体的场景渲染到屏幕上
//     renderer.render(scene, camera);

//     requestAnimationFrame(animate);
//   }
//   animate();
// };

// test3();

// const input = document.createElement("div");
// // 设置可编辑
// input.setAttribute("contenteditable", "true");
// // 加入样式，在网页中隐藏该元素，建议脱离文档流，防止布局混乱
// input.classList.add("draw-readclipbrdImg");
// // 防止输入干扰
// input.addEventListener("keydown", e => {
//   e.preventDefault();
// });
// document.body.appendChild(input);

/* ---- 2.该容器对剪贴板图片读取 ----*/
// 获取剪贴板内容
// const readClipbrd = () => {
//   // 清空数据，防止数据干扰
//   input.innerHTML = "";
//   // 获取焦点，并执行粘贴命令
//   input.focus();
//   document.execCommand('paste', null, null);
// };
// 读取图片
// const readImg = e => {
//   console.log(">>>: eee", e);
//   // 这里需要异步
//   setTimeout(_ => {
//     console.log("xx", _);
//     const img = input.querySelector("img");
//     if (img) {
//       // 非必须清除网页图片的样式，看实际是否需要
//       img.style = {};
//       // 返回结果
//       // resolve(img);
//       console.log(">>>: 有图片", img);
//       // do .....
//     } else {
//       // 没有图片，放弃操作
//       console.log(">>>: 没有图片");
//     }
//     input.innerHTML = "";
//   }, 200);
// };
/* ---- 3.监听粘贴事件 ----*/

// document.addEventListener("keydown", e => {
//   console.log("xx", e);
//   readClipbrd();
// });
// document.onpaste = e => {
//   console.log(">>>: eee", e.clipboardData.items[0]);
// };
// document.addEventListener("paste", readImg);

export default {
  // name: "Test",
  data() {
    return {};
  },
  methods: {}
};
</script>
 
<style lang="less">
.test {
  position: absolute;
  top: 0px;
  left: 0px;
  background: orange;
  width: 10px;
  height: 10px;
}
</style>