<script setup></script>

<template>
  <div class="loader"></div>
</template>

<style scoped lang="scss">
.loader {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
}
.loader::before,
.loader::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  @apply bg-brand-500;
}
.loader::before {
  box-shadow: -25px 0 #641a53;
  animation: l8-1 1s infinite linear;
}
.loader::after {
  transform: rotate(0deg) translateX(25px);
  animation: l8-2 1s infinite linear;
}

@keyframes l8-1 {
  100% {
    transform: translateX(25px);
  }
}
@keyframes l8-2 {
  100% {
    transform: rotate(-180deg) translateX(25px);
  }
}
</style>
