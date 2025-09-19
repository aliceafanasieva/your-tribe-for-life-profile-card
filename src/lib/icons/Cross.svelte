<script>
  export let size = 80;
  export let thickness = 16;
  export let color = "currentColor";
  export let center = false;
  export let x = "50%";
  export let y = "50%";
  export let className = "";
</script>

<div
  class={`cross ${center ? "is-center" : ""} ${className}`}
  style={`--x:${x};--y:${y};width:${size}px;height:${size}px;`}
  aria-hidden="true"
>
  <svg viewBox="0 0 100 100" fill={color}>
    <rect x="20" y={50 - thickness / 2} width="60" height={thickness} rx="2" />
    <rect x={50 - thickness / 2} y="20" width={thickness} height="60" rx="2" />
  </svg>
</div>

<style>
  .cross {
    display: inline-block;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.12));
    pointer-events: none;
  }
  .cross svg {
    width: 100%;
    height: 100%;
  }
  .cross.is-center {
    position: absolute;
    left: var(--x);
    top: var(--y);
    transform: translate(-50%, -50%);
  }
</style>
