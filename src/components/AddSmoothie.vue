<template>
  <div class="add-smoothie container">
    <h2 class="indigo-text center-align">Add new Smoothie recipe</h2>
    <form @submit.prevent="AddSmoothie">
      <div class="input-field title">
        <input type="text" id="title" v-model="title">
        <label for="title">Smoothie Title :</label>
      </div>
      <div class="input-field add-ingredient">
        <input type="text" id="add-ingredient">
        <label for="add-ingredient">Add an Ingredient :</label>
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    AddSmoothie() {
      console.log(this.title);
    }
  }
};
</script>

<style>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2 {
  font-size: 2.3em;
  margin: 20px auto;
}
.add-smoothie .input-field {
  margin: 40px auto;
}
</style>
