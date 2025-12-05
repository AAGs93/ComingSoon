<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 p-6"
  >
    <UCard
      class="max-w-xl w-full text-center p-12 bg-white border border-gray-300 rounded-3xl shadow-2xl"
    >
      <div class="flex justify-center mb-8">
        <UIcon
          name="i-heroicons-rocket-launch"
          class="w-20 h-20 text-blue-500"
        />
      </div>

      <h1 class="text-5xl font-bold mb-4 tracking-tight text-gray-900">
        Manca poco.
      </h1>

      <p class="text-gray-600 text-lg leading-relaxed mb-8">
        Stiamo perfezionando ogni dettaglio per assicurarti un lancio
        impeccabile.<br />
        Il nostro sito sarà online a brevissimo.
      </p>

      <div class="mt-6 opacity-90 text-sm text-gray-500">
        <div class="flex items-center justify-center gap-2">
          <UIcon
            name="i-heroicons-wrench-screwdriver"
            class="w-6 h-6 text-gray-500"
          />
          <span>In fase di sviluppo</span>
        </div>
        <div class="flex items-center justify-center gap-2 mt-2">
          <UIcon name="i-heroicons-clock" class="w-6 h-6 text-gray-500" />
          <span>Ritorna presto per scoprire tutte le novità</span>
        </div>
      </div>
    </UCard>

    <footer class="mt-10 text-sm text-gray-500">
      © {{ new Date().getFullYear() }} Il tuo sito — Tutti i diritti riservati.
    </footer>
  </div>
</template>

<script setup lang="ts">
// Nessuna logica necessaria
</script>
