<template>
  <section class="mt-24 p-5 h-min w-full bg-stone-800 text-center shadow-md rounded-3xl">
    <!-- Avatar -->
    <img class="-mt-24 mx-auto h-52 w-52 shadow-lg rounded-3xl" src="@/assets/img/avatar.jpeg" />
    <!-- Nome e atuação -->
    <h1 class="mt-5 text-2xl font-black antialiased">Marcus Roberto</h1>
    <h2 class="text-stone-300">Full Stack Developer</h2>
    <!-- Links -->
    <div class="my-5 flex justify-center space-x-3">
      <!-- Whatsapp-->
      <NuxtLink to="https://wa.me/5511920003046" target="blank" class="p-2.5 bg-stone-700 hover:opacity-70 rounded-lg">
        <svg class="h-6 w-6" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsWhatsappFill0)"><path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsWhatsappFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
      </NuxtLink>
      <!-- Linkedin -->
      <NuxtLink to="https://www.linkedin.com/in/marcus-roberto-de-carvalho/" target="blank" class="p-2.5 bg-stone-700 hover:opacity-70 rounded-lg">
        <svg class="h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"/></svg>
      </NuxtLink>
      <!-- Github -->
      <NuxtLink to="https://github.com/marocama" target="blank" class="p-2.5 bg-stone-700 hover:opacity-70 rounded-lg">
        <svg class="h-6 w-6" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581a9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"/></g></svg>
      </NuxtLink>
    </div>
    <!-- Contato -->
    <div class="p-4 bg-stone-700 space-y-3 divide-y divide-stone-600 rounded-2xl">
      <!-- Telefone -->
      <div class="flex space-x-2">
        <svg class="p-2 h-9 w-9 flex-shrink-0 bg-stone-900 rounded-lg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
        <div class="text-left truncate">
          <p class="text-xs text-stone-400">Telefone</p>
          <NuxtLink to="tel:5511920003046" class="text-sm truncate">+55 (11) 92000-3046</NuxtLink>
        </div>
      </div>
      <!-- Localização -->
      <div class="pt-3 flex space-x-2">
        <svg class="p-2 h-9 w-9 flex-shrink-0 bg-stone-900 rounded-lg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
        <div class="text-left truncate">
          <p class="text-xs text-stone-400">Localização</p>
          <p class="text-sm truncate">Bragança Pta. / SP, Brasil</p>
        </div>
      </div>
      <!-- Email -->
      <div class="pt-3 flex space-x-2 overflow-hidden">
        <svg class="p-2 h-9 w-9 flex-shrink-0 bg-stone-900 rounded-lg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
        <div class="text-left truncate">
          <p class="text-xs text-stone-400">E-mail</p>
          <NuxtLink to="mailto:marcus.rcm@outlook.com" class="text-sm truncate">marcus.rcm@outlook.com</NuxtLink>
        </div>
      </div>
    </div>
    <!-- Currículo -->
    <NuxtLink to="/curriculo.pdf" target="blank" class="mt-5 py-3 w-full flex justify-center items-center bg-gradient-to-b from-stone-100 to-stone-50 text-stone-800 hover:opacity-70 rounded-2xl">
      <svg class="h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>
      <span class="ml-3 text-lg font-semibold antialiased uppercase">Currículo</span>
    </NuxtLink>
  </section>
</template>