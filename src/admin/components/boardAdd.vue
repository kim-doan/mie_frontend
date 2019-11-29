<template>
  <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="게시판 이름(영어로)"
      required
    ></v-text-field>

    <v-select
      v-model="category"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="카테고리"
      required
    ></v-select>

    <v-btn
      color="white"
      @click="resetValidation"
    >
      게시판 추가
    </v-btn>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      name: '',
      email: '',
      category: null,
      items: [
        '강의자료 / 학부',
        '강의자료 / 대학원',
        '세미나자료',
        '기타자료실',
        '커뮤니티'
      ],
      checkbox: false,
    }),

    methods: {
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
