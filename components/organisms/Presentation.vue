<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ea sed eos, dolorum provident ipsa maxime accusantium, quaerat repellat magni commodi aut sit voluptatibus? Sunt nulla eum quaerat ullam quod.lore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, accusantium! Dolores praesentium commodi facilis unde dolorum ab natus placeat illum laboriosam accusamus non id est quia nisi nesciunt, vel repellendus.
    </p>

    <img src="@/assets/img/presentationIbook.svg" alt="Ibook Presentation" />
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>