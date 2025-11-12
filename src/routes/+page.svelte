<script lang="ts">
	import { goto } from '$app/navigation';

	const CONCERT_URL = 'https://thechampionshipstadiumconcerts.com/';
	const VIDEO_URL = '/video/background.mp4';

	function enterShop() {
		goto('/shop');
	}

	function enterConcert() {
		window.location.href = CONCERT_URL;
	}
</script>

<section class="landing">
	<video class="bg-video" autoplay muted loop playsinline>
		<source src={VIDEO_URL} type="video/mp4" />
		Your browser does not support the video tag.
	</video>

	<div class="overlay"></div>

	<div class="content">
		<h1 class="title">SitaAlexandra</h1>
		<p class="tagline">Championship Stadium Concerts World Tour</p>

		<div class="buttons">
			<button class="btn primary" on:click={enterShop}>
				Enter Shop
			</button>
			<button class="btn secondary" on:click={enterConcert}>
				Enter Concert
			</button>
		</div>
	</div>
</section>

<style>
	.landing {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: grid;
		place-items: center;
	}

	.bg-video {
		position: absolute;
		top: 50%;
		left: 50%;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		transform: translate(-50%, -50%);
		object-fit: cover;
		z-index: 1;
	}

	.overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(17, 25, 45, 0.4) 0%,
			rgba(17, 25, 45, 0.6) 100%
		);
		z-index: 2;
	}

	.content {
		position: relative;
		z-index: 3;
		text-align: center;
		color: #fff;
		padding: 20px;
		max-width: 90vw;
	}

	.title {
		font-family: 'CircularStd', system-ui;
		font-size: clamp(42px, 10vw, 84px);
		font-weight: 800;
		letter-spacing: 0.02em;
		margin: 0 0 0.5rem;
		text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
	}

	.tagline {
		font-size: clamp(16px, 3vw, 22px);
		font-weight: 400;
		letter-spacing: 0.04em;
		margin: 0 0 2.5rem;
		opacity: 0.95;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	.buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 1rem 2.5rem;
		font-size: clamp(15px, 2vw, 18px);
		font-weight: 700;
		letter-spacing: 0.02em;
		border-radius: 999px;
		border: none;
		cursor: pointer;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			background 0.2s ease;
		min-width: 160px;
	}

	.btn.primary {
		background: #fff;
		color: var(--oxford, #11192d);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
	}

	.btn.primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
		background: #f8f9fa;
	}

	.btn.secondary {
		background: transparent;
		color: #fff;
		border: 2px solid rgba(255, 255, 255, 0.9);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
	}

	.btn.secondary:hover {
		transform: translateY(-2px);
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	.btn:active {
		transform: translateY(0);
	}

	@media (max-width: 480px) {
		.buttons {
			flex-direction: column;
			align-items: stretch;
		}
		.btn {
			width: 100%;
		}
	}
</style>
