<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Banner from '$lib/images/banner.svg';
    import BannerBg from '$lib/images/banner-bg.png';

    let clientWidth: number;

    $: isMobile = clientWidth < 640;
</script>

<div bind:clientWidth class="pt-10 px-3 sm:px-12 w-full flex justify-center max-w-6xl">
    {#if isMobile}
        <div
            style="background-image: url({new URL(BannerBg, import.meta.url).toString()});"
            class="mobile-banner w-full rounded-3xl p-8"
        >
            <span class="text-darker-grey font-bold text-2xl">
                Узнайте какое <br> занятие
            </span><br>
            <span class="text-black font-bold text-2xl">
                подойдет <br>
                вашему ребенку
            </span>
        </div>
    {:else}
        <div class=" shadow-banner w-full h-full rounded-3xl flex justify-between">
            <div class="p-5 md:p-12 gap-y-3 w-fit flex flex-col">
                <span class=" font-bold leading-[150%] text-2xl">
                    Узнайте какое занятие <br /> подойдет вашему ребёнку
                </span>
                <div class="w-full">
                    <Button slim={true} full={true}>Узнать</Button>
                </div>
            </div>
            <div class=" place-self-center -z-10 md:h-auto">
                <img src={Banner} alt="" />
            </div>
        </div>
    {/if}
</div>

<style>
    .mobile-banner {
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: right;
        background-color: #FFF3DD;
        object-fit: cover;
    }
</style>