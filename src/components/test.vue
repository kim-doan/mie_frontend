<template>
  <div>
    <b-card-group deck class="m-3">
      <b-card header="POST">
        <b-form-textarea v-model="txtPost" class="mb-3"
                         placeholder="이곳에 결과 값이 나옴"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="sendPost"
                  variant="primary">전송</b-button>
      </b-card>
      <b-card header="GET">
        <b-form-textarea v-model="txtGet" class="mb-3"
                         placeholder="이곳에 결과 값이 나옴"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="sendGet"
                  variant="success">전송</b-button>
      </b-card>
      <b-card header="PUT">
        <b-form-textarea v-model="txtPut" class="mb-3"
                         placeholder="이곳에 결과 값이 나옴"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="sendPut"
                  variant="warning">전송</b-button>
      </b-card>
      <b-card header="DELETE">
        <b-form-textarea v-model="txtDelete" class="mb-3"
                         placeholder="이곳에 결과 값이 나옴"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="sendDelete"
                  variant="danger">전송</b-button>
      </b-card>
    </b-card-group>

  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      txtPost: '',
      txtGet: '',
      txtPut: '',
      txtDelete: '',
    };
  },
  methods: {
    sendPost() {
      this.txtPost = 'pppp';
    },
    sendGet() {
      this.txtGet = 'ggggg';
    },
    sendPut() {
      this.txtPut = 'uuuuu';
    },
    sendDelete() {
      this.txtDelete = 'ddddd';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
