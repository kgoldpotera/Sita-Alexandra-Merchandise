<script lang="ts">
	import SocialIcon from './SocialIcon.svelte';

	export let tourLinks: Record<string, string> = {
		instagram: '#',
		tiktok: '#',
		twitter: '#',
		youtube: '#'
	};

	export let artistLinks: Record<string, string> = {
		instagram: 'https://instagram.com/sitaalexandraofficial',
		tiktok: 'https://tiktok.com/@sitaalexandra',
		twitter: 'https://twitter.com/SitaAlexandra1',
		youtube: '#' // Add specific YouTube link here
	};

	// Defined order of appearance
	const order = ['instagram', 'tiktok', 'twitter', 'youtube'] as const;

	const labels: Record<string, string> = {
		instagram: 'Instagram',
		tiktok: 'TikTok',
		twitter: 'Twitter',
		youtube: 'YouTube'
	};
</script>

<footer class="site-footer">
	<section class="container footer-grid">
		<div class="social-col">
			<h4 class="footer-heading">
				Official Socials of the Championship Stadium Concerts World Tour
			</h4>
			<ul class="social-list" role="list">
				{#each order as k (k)}
					<li>
						<a class="social-link" href={tourLinks[k]} target="_blank" rel="noopener noreferrer">
							<span class="icon"><SocialIcon name={k} /></span>
							<span class="label">{labels[k]}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="social-col">
			<h4 class="footer-heading">Official Socials of SitaAlexandra</h4>
			<ul class="social-list" role="list">
				{#each order as k ('artist-' + k)}
					<li>
						<a class="social-link" href={artistLinks[k]} target="_blank" rel="noopener noreferrer">
							<span class="icon"><SocialIcon name={k} /></span>
							<span class="label">{labels[k]}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<nav class="links-col" aria-label="Site">
			<ul class="link-list" role="list">
				<div class="footer-logo mobile-only">
					<img src="/logos/cscwt-logo.jpg" alt="Site Logo" />
				</div>
			</ul>
		</nav>
	</section>

	<div class="container footer-logo desktop-only">
		<img src="/logos/cscwt-logo.jpg" alt="Site Logo" />
	</div>

	<div class="container copyright">
		© {new Date().getFullYear()} SitaAlexandra
	</div>
</footer>

<style>
	.site-footer {
		border-top: 1px solid var(--border);
		background: var(--background);
		padding-block: clamp(16px, 3.2vw, 36px);
		overflow-x: clip;
	}

	.container {
		max-width: 1100px;
		width: 100%;
		margin-inline: auto;
		padding-inline: clamp(12px, 3vw, 24px);
		box-sizing: border-box;
	}

	.footer-grid {
		display: grid;
		gap: clamp(18px, 2.4vw, 28px);
		justify-items: center;
		align-items: start;
		text-align: center;
	}
	@media (min-width: 920px) {
		.footer-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			text-align: left;
			justify-items: start;
		}
	}

	.footer-heading {
		margin: 0 0 0.75rem 0;
		font-weight: 800;
	}

	.social-list,
	.link-list {
		display: grid;
		gap: 10px;
		padding: 0;
		margin: 0;
		list-style: none;
		justify-items: center;
		width: 100%;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.58rem 0.9rem;
		border-radius: 999px;
		border: 1px solid var(--border);
		background: var(--background);
		text-decoration: none;
		color: var(--text-color);
		font-weight: 600;
		max-width: 100%;
		flex-wrap: wrap;
	}

	.label {
		white-space: normal;
		overflow-wrap: anywhere;
	}

	.icon {
		inline-size: 1.1rem;
		block-size: 1.1rem;
		display: grid;
		place-items: center;
	}

	.social-link .icon :global(svg) {
		filter: none !important;
	}

	/* --- Brand colours --- */
	/* 1. Instagram */
	.social-list > li:nth-child(1) .icon {
		color: #e1306c;
	}
	/* 2. TikTok */
	.social-list > li:nth-child(2) .icon {
		color: #000000;
	}
	/* 3. Twitter */
	.social-list > li:nth-child(3) .icon {
		color: #1da1f2;
	}
	/* 4. YouTube */
	.social-list > li:nth-child(4) .icon {
		color: #ff0000;
	}

	/* Logo placement */
	.footer-logo {
		margin-top: 1rem;
	}
	.footer-logo img {
		max-width: 160px;
		height: auto;
	}

	.mobile-only {
		display: block;
	}
	.desktop-only {
		display: none;
		text-align: center;
		margin-top: 1rem;
	}
	@media (min-width: 920px) {
		.mobile-only {
			display: none;
		}
		.desktop-only {
			display: flex;
			justify-content: center;
		}
	}

	.copyright {
		margin-top: clamp(16px, 3vw, 28px);
		text-align: center;
	}
</style>
