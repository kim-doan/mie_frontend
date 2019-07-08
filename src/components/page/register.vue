<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>회원가입</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <form>
              <v-select
                v-validate="'required'"
                :items="form.items"
                v-model="form.select"
                :error-messages="errors.collect('select')"
                label="구성원(선택)"
                data-vv-name="select"
                required
              ></v-select>
              <v-text-field
                v-validate="'required|max:10'"
                v-model="form.name"
                :counter="10"
                :error-messages="errors.collect('name')"
                label="이름"
                data-vv-name="name"
                required
              ></v-text-field>
              <v-text-field
                v-validate="'required|min:4|max:20'"
                v-model="form.id"
                :counter="20"
                :error-messages="errors.collect('id')"
                label="아이디"
                data-vv-name="id"
                required
              ></v-text-field>
              <v-text-field
                v-validate="'required|min:6|max:40'"
                v-model="form.password"
                :counter="40"
                :error-messages="errors.collect('password')"
                label="비밀번호"
                data-vv-name="password"
                required
                type="password"
              ></v-text-field>
              <v-text-field
                v-validate="'required|email'"
                v-model="form.email"
                :error-messages="errors.collect('email')"
                label="E-mail"
                data-vv-name="email"
                required
              ></v-text-field>
              <v-text-field
                v-validate="'required|min:8|max:12'"
                v-model="form.phone"
                :counter="10"
                :error-messages="errors.collect('phone')"
                label="휴대폰"
                data-vv-name="phone"
                required
              ></v-text-field>
              <v-checkbox
                v-validate="'required'"
                v-model="checkbox"
                :error-messages="errors.collect('checkbox')"
                value="1"
                label="약관에 동의합니다."
                data-vv-name="checkbox"
                type="checkbox"
                required
              ></v-checkbox>

              <v-btn @click="submit">가입</v-btn>
              <v-btn @click="clear">초기화</v-btn>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
  v-model="sb.act"
>
  {{ sb.msg }}
  <v-btn
    :color="sb.color"
    flat
    @click="sb.act = false"
  >
    닫기
  </v-btn>
</v-snackbar>
  </v-container>
</template>

<script>

export default {
  $_veeValidate: {
    validator: 'new'
  },

  data: () => ({
    form: {
      name: '',
      id: '',
      email: '',
      password: '',
      select: null,
      items: [
        '학부생',
        '대학원생(석사)',
        '대학원생(박사)',
        '졸업생(석사)',
        '졸업생(박사)'
      ],
    },
    sb: {
        act: false,
        msg: '',
        color: 'warning'
    },
    checkbox: null,
    dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        name: {
          required: () => '이름은 필수 항목입니다.',
          max: '이름 입력란은 10자를 초과 할 수 없습니다.'
          // custom messages
        },
        id: {
          required: () => '아이디는 필수 항목입니다.',
          min: '아이디는 4자 ~ 20자를 초과 할 수 없습니다.',
          max: '아이디는 4자 ~ 20자를 초과 할 수 없습니다.'
        },
        email: {
          required: () => '이메일은 필수 항목입니다.',
        },
        select: {
          required: () => '구성원을 선택해주세요.'
        },
        checkbox: {
          required: () => '약관에 동의해주세요.'
        },
        password: {
          required: () => '비밀번호는 필수 항목입니다',
          min: '비밀번호는 6자 ~ 40자를 초과 할 수 없습니다.',
          max: '비밀번호는 6자 ~ 40자를 초과 할 수 없습니다.'
        },
        phone: {
          required: () => '휴대폰 번호는 필수 항목입니다',
          min: '휴대폰 번호 양식에 맞지 않습니다.',
          max: '휴대폰 번호 양식에 맞지 않습니다.'
        }
      }
    }
  }),

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit () {
      this.$validator.validateAll()
      .then(r => {
        if (!r) throw new Error('모두 기입해주세요')
        return this.$axios.post('/api/members', this.form)
      })
      .then(r => {
        if (!r.data.success) throw new Error('서버가 거부했습니다.')
        this.pop('가입 완료 되었습니다.', 'success')

        this.$route.push('/member/login')
      })
      .catch(e => this.pop(e.message, 'warning'))
  },
  pop(m, cl) {
    this.sb.act = true
    this.sb.msg = m
    this.sb.color = cl
  },
  clear () {
    this.form.id = ''
    this.form.password = ''
    this.form.name = ''
    this.checkbox = null
    this.form.phone = ''
    this.form.email = ''
    this.$validator.reset()
  }
}
}
</script>
