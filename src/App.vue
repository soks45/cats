<script setup lang="ts">
    import { ref } from 'vue';
    import { Cat } from './models/cat';
    import { CatsService } from './services/cats.service';

    const cats = ref<Cat[]>([]);

    const loadSingleCat = async function (): Promise<void> {
      cats.value = await CatsService.getCat();
    }

    const load10Cats = async function (): Promise<void> {
      cats.value = await CatsService.get10Cats();
    }

    loadSingleCat();
</script>

<template>
  <div class="root">
    <div class="actions">
      <button @click="loadSingleCat()">next cat</button>
      <button @click="load10Cats()">load 10 cats</button>
    </div>
    <div class="cats">
      <img v-for="cat in cats" :src="cat.url" alt="single cat" class="cat-image">
    </div>

  </div>

</template>

<style scoped>
  .root {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
  .cats {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .cat-image {
    border-radius: 10px;
  }
  .actions {
    display: flex;
    gap: 10rem;

    button {
      transition: all ease-in-out .5s;
      background: #5E5DF0;
      border-radius: 999px;
      box-shadow: #5E5DF0 0 10px 20px -10px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      opacity: 1;
      outline: 0 solid transparent;
      padding: 8px 18px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: fit-content;
      word-break: break-word;
      border: 0;
    }

    button:hover,
    button:focus-visible {
      outline: none;
      background: #7876e8;
    }

    button:active {
      background: #7876e8;
    }

    button:focus-within {
      background: #7876e8;
    }
  }
</style>
