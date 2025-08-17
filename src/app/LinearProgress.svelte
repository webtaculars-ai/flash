<script>
  export let value
  export let bgColor

  $: if (value === -1 || value > 100) value = 100
</script>

<div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
  <div
    class={`absolute top-0 bottom-0 left-0 w-full transition-all ${bgColor}`}
    style="transform: translateX({value - 100}%)"
  />
</div>