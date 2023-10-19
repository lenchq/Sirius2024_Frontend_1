<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import SearchIcon from '../lib/images/search-icon.svg?raw';
</script>

<div class="w-full px-3 sm:px-12 flex gap-x-1 justify-center max-w-6xl">
    <div
        class="bg-dark-grey w-full py-4 px-5 rounded-l-3xl rounded-r-3xl sm:rounded-r-none flex place-items-center"
    >
        <div class="fill-darker-grey">
            {@html SearchIcon}
        </div>
        <div class="pl-2 sm:pl-4 w-full h-full">
            <input
                type="text"
                class="w-full h-full bg-transparent outline-none"
                placeholder="Введите название секции или кружка"
            />
        </div>
    </div>
    <Button roundedLeft={false} mobileHide={true}>Найти</Button>
</div>
