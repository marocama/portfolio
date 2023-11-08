<template>
  <main class="h-screen flex flex-col bg-gradient-to-b from-stone-900 to-stone-950 text-white overflow-hidden">
    <div class="overflow-y-scroll">
      <div class="pt-10 mx-auto container grid lg:grid-cols-4 gap-12 overflow-y-scroll">
        <!-- Perfil -->
        <Profile />
        <!-- Conteúdo -->
        <section class="mb-10 p-7 lg:col-span-3 bg-stone-800 rounded-3xl shadow-md overflow-hidden">
          <h2 class="mb-2 text-xl font-black antialiased">Portfólio</h2>
          <h3 class="text-sm text-stone-300">Confira abaixo alguns de meus projetos e repositórios de destaque.</h3>
          <p class="text-xs text-stone-400">Você pode filtrar por tecnologia clicando nela.</p>
          <!-- Linguagens -->
          <div class="mt-4 mb-2.5 w-full flex" :class="isMobile ? 'overflow-x-scroll' : 'drag overflow-hidden'">
            <button @click="selected = selected === item.label ? '' : item.label" v-for="item in languages" :key="item" type="button" class="mr-2.5 !w-20 p-2 !pb-1 rounded-lg" :class="selected === item.label ? 'bg-white text-stone-800' : 'bg-stone-700 text-white hover:opacity-70'">
              <span v-html="item.icon" />
              <span class="text-xs">{{ item.label }}</span>
            </button>
          </div>
          <hr class="my-5 border-stone-600" />
          <!-- Cartões -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card v-for="(item, index) in filtered" :key="index" :data="item" />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
  const languages = useLanguages()
  const { isMobile } = useDevice()

  const items = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Fkazaki.jpg?alt=media&token=5e76fa89-5736-41e7-8639-34575306aad6&_gl=1*1esllha*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MTM0NTcuNTYuMC4w',
      title: 'Kazaki',
      github: '',
      link: 'https://kazaki.com.br',
      description: 'Um novo portal imobiliário completo.',
      resources: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Firebase', 'Elastic', 'REST', 'GraphQL', 'Kafka'],
    },
    {
      image: 'https://github.com/marocama/presence-laravel/blob/master/demo_pmmu.jpeg?raw=true',
      title: 'PMMU',
      github: 'https://github.com/marocama/presence-laravel',
      link: 'https://pmmu.com.br/',
      description: 'Portal de mobilidade urbana e sistema de gerenciamento.',
      resources: ['Javascript', 'PHP', 'Laravel', 'MySQL'],
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Fvw.jpeg?alt=media&token=b502df1d-95e1-45d0-91e5-aa1772c230b0&_gl=1*r79ouo*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MTIxNjMuMTYuMC4w',
      title: 'VW Soluções',
      github: '',
      link: 'https://vwsolucoes.com/',
      description: 'E-commerce e painel administrativo.',
      resources: ['Vue.js', 'Javascript', 'Firebase', 'REST'],
    },
    {
      image: 'https://media.licdn.com/dms/image/D4D2DAQFff_pn4D7SEg/profile-treasury-image-shrink_800_800/0/1698161392988?e=1700017200&v=beta&t=BAWaA5-2GqtBccF3VPu1OxWSLvWWp0AZ_xpqH-_gB30',
      title: 'Smart Monteiro',
      github: 'https://github.com/marocama/smartMonteiroVueJS',
      link: 'https://smart-monteiro.web.app/',
      description: 'Soluções inteligentes de Monteiro Lobato/SP.',
      resources: ['Vue.js', 'Javascript', 'Firebase'],
    },
    {
      image: 'https://media.licdn.com/dms/image/D4D2DAQFrRgdhGQ1b0g/profile-treasury-image-shrink_800_800/0/1698161892094?e=1700017200&v=beta&t=uKetZzl0VA0JPP7nzS8HEJXR3TdY3v4hBnfojC-BXpQ',
      title: 'Smart São Simão',
      github: 'https://github.com/marocama/smartCitySaoSimao',
      link: 'https://saosimao.web.app/',
      description: 'Soluções inteligentes de São Simão/SP.',
      resources: ['Vue.js', 'Javascript', 'Firebase'],
    },
    {
      image: 'https://github.com/marocama/fire-graphql/raw/master/demo_play.png?raw=true',
      title: 'Fire GraphQL',
      github: 'https://github.com/marocama/fire-graphql',
      link: 'https://southamerica-east1-fire-graphql-api.cloudfunctions.net/graphql',
      description: 'Aplicação utilizando serviços do Google Firebase com o GraphQL.',
      resources: ['Javascript', 'Node.js', 'Firebase', 'GraphQL'],
    },
    {
      image: 'https://github.com/marocama/vue-graphql-mongo/blob/master/demo_vue.png?raw=true',
      title: 'Vue GraphQL MongoDB',
      github: 'https://github.com/marocama/vue-graphql-mongo',
      link: '',
      description: 'Aplicação utilizando serviços do Google Firebase com o GraphQL.',
      resources: ['Javascript', 'Vue.js', 'Node.js', 'MongoDB', 'GraphQL', 'Docker'],
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Fgo.png?alt=media&token=e7ab06bb-7da3-4ed6-83c4-a2de6fef7a5b&_gl=1*bdn7sr*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MTMwNzguNTYuMC4w',
      title: 'Go Lightweight',
      github: 'https://github.com/marocama/golang-lightweight',
      link: 'https://hub.docker.com/r/marocama/fullcycle',
      description: 'Aplicação de exemplo em Go, com compilação em dois estágios.',
      resources: ['Go', 'Docker'],
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Fnginx.webp?alt=media&token=8847e79d-0681-4d3f-886c-a26cdf4409bb&_gl=1*1jozhtv*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MTI3NTAuNTguMC4w',
      title: 'Node MySQL',
      github: 'https://github.com/marocama/node-mysql',
      link: '',
      description: 'Node.js com MySQL, usando Nginx como proxy reverso.',
      resources: ['Javascript', 'Node.js', 'MySQL', 'Docker'],
    },
    {
      image: 'https://github.com/marocama/golang-graphql/raw/master/demo_play.png?raw=true',
      title: 'Go GraphQL',
      github: 'https://github.com/marocama/golang-graphql',
      link: '',
      description: 'Servidor rodando em Go, com GraphQL e SQLite.',
      resources: ['Go', 'GraphQL', 'Docker'],
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Fgrpc.png?alt=media&token=4a432cbf-ddb4-45a6-b43d-d41301b65e01&_gl=1*h437bz*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MTI5ODMuNTMuMC4w',
      title: 'Node gRPC',
      github: 'https://github.com/marocama/node-grpc',
      link: '',
      description: 'Exemplo de uso de comunicação gRPC com Node.',
      resources: ['Javascript', 'Node.js', 'gRPC'],
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Fiot.jpg?alt=media&token=dd3b44f1-6445-40a2-b679-4c3876841fb5&_gl=1*1e9uydc*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MDgwNTkuNDMuMC4w',
      title: 'VW IoT',
      github: 'https://github.com/marocama/vw-iot',
      link: 'http://vwiot.us-east-2.elasticbeanstalk.com/',
      description: 'Plataforma para IoT com automação industrial.',
      resources: ['Javascript', 'PHP', 'Laravel', 'MySQL'],
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Fwifi.jpg?alt=media&token=051bf23f-8f5c-450f-8bfc-9e1ccef4897f&_gl=1*vrly74*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MTAyNzUuNTQuMC4w',
      title: 'VW Wifi App',
      github: 'https://github.com/marocama/vwwifi_app',
      link: '',
      description: 'Gerenciamento de transmissores VW Soluções.',
      resources: ['Flutter', 'MySQL', 'REST'],
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Fsd.jpg?alt=media&token=fef7fdbf-2a89-48e1-942e-f9db5d718f09&_gl=1*edz7oq*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MDg4MjUuMjMuMC4w',
      title: 'SD Card Auth',
      github: 'https://github.com/marocama/SD_Card_Auth',
      link: '',
      description: 'Autenticação de usuários em microcontroladores.',
      resources: ['C/C++'],
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Feletronic.jpg?alt=media&token=767dd584-a5f1-4d61-93eb-8541179100a9&_gl=1*1so4xkm*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MDkxMDkuMzcuMC4w',
      title: 't4-20mA',
      github: 'https://github.com/marocama/t4-20ma',
      link: '',
      description: 'Manipulação de saída 4-20mA em microcontroladores.',
      resources: ['C/C++'],
    },
    {
      image: 'https://github.com/marocama/IPD_Display_Elevador/raw/master/images/2.gif?raw=true',
      title: 'IPD Display Elevador',
      github: 'https://github.com/marocama/IPD_Display_Elevador',
      link: '',
      description: 'Controle do IPD de Pavimento de Elevadores.',
      resources: ['C/C++'],
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Fboard.jpg?alt=media&token=9632e8a9-e748-4091-ac48-3609d9c9257d&_gl=1*l17zm4*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MTA1MjMuNTIuMC4w',
      title: 'Clp Atmega 64',
      github: 'https://github.com/marocama/Clp_Atmega_64',
      link: '',
      description: 'Biblioteca destinada a Arduino IDE para controle da CLP Atmega 64.',
      resources: ['C/C++'],
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-graphql-api.appspot.com/o/github%2Flab.jpg?alt=media&token=6315558f-7038-4b09-b039-adbe477e0caa&_gl=1*1ba1el0*_ga*MjAyNjk3NDM2MC4xNjg2MjYzODQ1*_ga_CW55HF8NVT*MTY5OTQwNzkwNS41NS4xLjE2OTk0MTAxMDEuNTQuMC4w',
      title: 'Cálculo Numérico',
      github: 'https://github.com/marocama/calculoNumerico_lab',
      link: '',
      description: 'Implementações do laboratório computacional.',
      resources: ['Javascript'],
    },
  ]

  const selected = ref('')
  const filtered = computed(() => selected.value ? items.filter(i => i.resources.includes(selected.value)) : items)

  const pointerScroll = elem => { let isDrag = false
    const toggleDrag = () => isDrag = !isDrag
    const drag = (ev) => isDrag && (elem.scrollLeft -= ev.movementX)

    elem.addEventListener('pointerdown', toggleDrag)
    addEventListener('pointerup', toggleDrag)
    addEventListener('pointermove', drag)
  }

  onMounted(() => document.querySelectorAll('.drag').forEach(pointerScroll))

  useHead({ title: 'Marcus Roberto - Dev' })
</script>