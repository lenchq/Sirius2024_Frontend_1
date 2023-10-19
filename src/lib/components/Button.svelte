<script lang="ts">
    export let roundedRight: boolean = true;
    export let roundedLeft: boolean = true;
    export let slim: boolean = false;
    export let mobileHide: boolean = false;
    export let full: boolean = false;

    $: roundedRight_class = roundedRight ? "rounded-r-[15px]" : ""
    $: roundedLeft_class = roundedLeft ? "rounded-l-[15px]" : ""
    $: padding_class = (slim ? "py-3 md:!px-18" : "py-4") + " sm:px-10 md:px-20 "
    $: mobileHide_class = mobileHide ? "hidden sm:block" : ""
    $: full_class = full ? "w-full" : 'w-fit';
</script>

<div
    class=" {padding_class}
    bg-orange-accent text-white {mobileHide_class} {full_class}
    cursor-pointer text-center {roundedLeft_class} {roundedRight_class}"
>
    <slot/>
</div>