<script>
import Header from './components/Header.vue'
import Baner from './components/Baner.vue'
import Section1 from './components/sections/Section1.vue'
import Section2 from './components/sections/Section2.vue'
import Section3 from './components/sections/Section3.vue'
import Section4 from './components/sections/Section4.vue'
import Section5 from './components/sections/Section5.vue'
import Section6 from './components/sections/Section6.vue'
import Footer from './components/Footer.vue'
import Form from './components/Form.vue'

export default {
  components: {
    Header,
    Baner,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Form,
    Footer
  },
}

</script>

<template>
  <Header id="Header"></Header>
  <div class="divide-y">
    <Baner id="Головна"></Baner>
    <Section1 id="Section1"></Section1>
    <Section2 id="Послуги"></Section2>
    <Section3 id="Приклади"></Section3>
    <Section4 id="Партнери"></Section4>
    <Section5 id="Section5"></Section5>
    <Section6 id="Статистика"></Section6>
    <Form id="Зв'язатись"></Form>
    <Footer id="Footer"></Footer>
  </div>
</template>