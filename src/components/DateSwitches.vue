<template>
    <div class="date-switches">
      <button class="date-switches__btn date-switches__btn_active"><i class="fas fa-circle"></i></button>
      <button class="date-switches__btn"><i class="far fa-circle"></i></button>
      <button class="date-switches__btn"><i class="far fa-circle"></i></button>
    </div>
</template>

<script>
export default {
  name: 'DateSwitches',
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
.date-switches {
  padding-bottom: 15px;
  background-color: #272727;
  border-radius: 0 0 15px 15px;
}
  .date-switches__btn {
    padding: 5px;
    border: none;
    font-size: 8px;
    color: #ffffff3b;
    background-color: transparent;
  }
  .date-switches__btn:focus {
    outline: none;
    outline-offset: 0;
  }
  .date-switches__btn_active {
    color: #fff;
  }
</style>