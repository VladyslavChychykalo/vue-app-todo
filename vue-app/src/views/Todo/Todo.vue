<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <form class="form" @submit.prevent="submitHandler">
      <div class="formItemField">
        <label for="name">Name</label>
        <input id="name" class="form__input" type="text" v-model.trim="name" />
      </div>
      <div class="formItemField">
        <label for="lastName">Last name</label>
        <input
          id="lastName"
          class="form__input"
          type="text"
          v-model.trim="lastName"
        />
      </div>
      <div class="formItemField">
        <label for="description">Description</label>
        <textarea
          v-model.trim="description"
          class="form__input"
          name=""
          id="description"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div>
        <input v-model="isChecked" class="form__input" type="checkbox" />
      </div>

      <button>Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      name: "",
      lastName: "",
      description: "",
      isChecked: false,
    };
  },
  validations: {},
  methods: {
    submitHandler() {
      // if (this.$v.$invalid) {
      //   this.$v.$touch();
      //   return;
      // }

      const formData = {
        name: this.name,
        lastName: this.lastName,
        description: this.description,
        isChecked: this.isChecked,
      };

      console.log(formData);
      this.resetForm();
    },

    resetForm() {
      this.name = "";
      this.lastName = "";
      this.description = "";
      this.isChecked = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("./Todo.scss");
</style>
