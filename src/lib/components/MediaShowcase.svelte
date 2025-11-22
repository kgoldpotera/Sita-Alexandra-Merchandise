<script lang="ts">
	// You can pass these as props if you want to reuse the component,
	// or keep them hardcoded here.
	export let imageSrc: string = '/media/promo-poster.jpg';
	export let videoSrc: string = '/media/concert-video.mp4';
	export let altText: string = 'SitaAlexandra Championship Tour Promotional Poster';
</script>

<section class="media-wrapper">
	<div class="container">
		<div class="media-item image-col">
			<div class="aspect-container">
				<img src={imageSrc} alt={altText} loading="lazy" />
			</div>
		</div>

		<div class="media-item video-col">
			<div class="aspect-container">
				<video
					controls
					autoplay
					muted
					loop
					playsinline
					aria-label="Video of concert stadium atmosphere"
				>
					<source src={videoSrc} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	</div>
</section>

<style>
	.media-wrapper {
		width: 100%;
		padding: clamp(1rem, 5vw, 3rem); /* Responsive padding */
		background-color: var(--background, #fff); /* Fallback to white */
		box-sizing: border-box;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		/* Mobile First: 1 column */
		grid-template-columns: 1fr;
		gap: 2rem;
		align-items: center;
	}

	/* Desktop View: 2 columns */
	@media (min-width: 768px) {
		.container {
			grid-template-columns: 1fr 1fr;
		}
	}

	.media-item {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	/* Styling for the visual elements */
	img,
	video {
		width: 100%;
		height: auto;
		border-radius: 12px;
		box-shadow:
			0 10px 25px -5px rgba(0, 0, 0, 0.1),
			0 8px 10px -6px rgba(0, 0, 0, 0.1); /* Soft shadow */
		display: block;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	/* Subtle hover effect for desktop */
	@media (hover: hover) {
		img:hover,
		video:hover {
			transform: scale(1.02);
		}
	}

	/* Optional: Enforce max heights so it fits nicely on screen */
	.image-col img {
		max-height: 80vh;
	}

	.video-col video {
		max-height: 80vh;
	}
</style>
