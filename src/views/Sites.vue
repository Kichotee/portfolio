<template>
	<div class="works-wrapper">
		<div class="container">
			<div class="container-box">
				<div class="works">
					<transition-group
						class="work-box-container"
						tag="div"
						name="imgAnimate"
						@enter="onEnter"
						@before-enter="beforeEnter"
						@after-leave="afterLeave"
						@leave="onLeave"
					>
						<div
							v-for="(work, index) in works"
							key="index"
							v-show="currentData === index"
							:key="index"
							class="work-box"
						>
							<div class="direction">
								<i
									@click="previousItem"
									class="fa-solid fa-arrow-left"
								></i>
								<i
									@click="nextItem"
									class="fa-solid fa-arrow-right"
								></i>
							</div>

							<a :href="work.link">
								<img :src="`${work.bg}`" alt="" />
							</a>
						</div>
					</transition-group>
					<div
						class="tool-box"
						v-for="(work, index) in works"
						key="work"
						v-show="currentData === index"
					>
						<h4>{{ work.title }}</h4>
						<div class="buttons">
							<a :href="work.link" class="btn">
								View live site
							</a>
							<a :href="work.git" class="btn">
								View repo</a
							>
						</div>
						<p class="description">{{ work.description }}</p>
						<p class="tools"> {{ work.tools }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {gsap} from "gsap";
	import TextPlugin from "gsap/TextPlugin";
	import { useDataStore } from "../store/index.js";
	import { ref, onMounted, computed } from "vue";
	gsap.registerPlugin(TextPlugin);
	const beforeEnter = (el) => {
		gsap.from(el, {
			opacity: 0,
			x: "100%",
		});
	};
	const onEnter = (el) => {
		gsap.to(el, {
			opacity: 1,
			x: "0",
			duration: 0.5,
		});
	};
	const onLeave = (el) => {
		gsap.to(el, {
			opacity: 1,
			x: "0",
			duration: 0.5,
		});
	};
	const afterLeave = (el) => {
		gsap.to(el, {
			opacity: 0,
			x: "-100%",
			duration: 0.5,
		});
	};
	const descEnter = ref(null);
	let masterTL = gsap.timeline({ yoyo: true });

	onMounted(() => {
		

	
	});

	// Declare functions

	const currentData = ref(0);

	const data = useDataStore();
	const works = data.works;
	const nextItem = () => {
		if (currentData.value + 1 < works.length) {
			currentData.value++;
		} else currentData.value = 0;
	};
	const previousItem = () => {
		if (currentData.value === 0) {
			currentData.value = 0;
		} else currentData.value--;
	};
</script>

<style lang="scss" scoped>
	@import "../assets/scss/colors.scss";
	@import "../assets/scss/utilities.scss";

	.container {
		overflow: hidden;
	}

	.container-box {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		overflow: hidden;
	}

	.style-box {
		display: none;
		position: absolute;
		right: 20%;
		bottom: 10%;
		height: 40%;
		width: 10%;
		z-index: -2;
		border-right: 3px $black solid;
		border-bottom: 3px $black solid;
	}

	.works {
		grid-column: 1/-1;
		position: relative;
		z-index: 42;
		height: 70vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5%;
		.work-box-container {
			height: 50%;
			width: 100%;
		}

		.work-box {
			margin: 0 auto;
			width: 98%;
			height: 30vh;
			border: solid;

			text-transform: capitalize;
			position: relative;
			z-index: 40;
		}

		.buttons {
			height: 100%;
			width: 100%;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;

			order: 3;
		
			// border: solid;

			gap: 2.5%;
		}

		.btn {
			width: 40%;
			height: 12%;
			font-size: 0.7em;
			font-weight: bold;
			background: $white;
			white-space: nowrap;
		}

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: -5;
			filter: blur(2px);
		}

		.tool-box {
			width: 97%;
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 35%;
			align-items: center;

			p {
				// flex-basis: 40%;
				width: 100%;
				// border: solid;
			}
		}

		.direction {
			position: absolute;
			top: 50%;
			translate: 0 -50%;
			width: 100%;
			height: 80%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			z-index: 43;
		}

		i {
			font-size: 2em;
			// box-shadow:4px 4px;
			padding: 2px 5px;

			border-radius: 50%;
			background: lighten(
				$color: $black,
				$amount: 80
			);
		}

		
		.description {
			padding: 2% 0 5%;
		}
	}

	@import "../assets/scss/desktopresponsiveness.scss";
</style>
