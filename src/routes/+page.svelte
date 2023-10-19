<script lang="ts">
	import SkillActiveLogo from "./SkillActiveLogo.svelte";
	import SearchBar from "./SearchBar.svelte";
	import HobbyBanner from "./HobbyBanner.svelte";
</script>

<svelte:head>
    <title>Skillactive - Хобби для ребенка</title>
    <meta name="description" content="Skillactive - хобби для ребенка" />
</svelte:head>

<section class="h-full w-full flex flex-col place-items-center">
    <SkillActiveLogo />
    <SearchBar />
    <HobbyBanner />
</section>
