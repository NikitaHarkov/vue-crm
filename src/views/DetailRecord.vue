<template>
  <div>
    <Loader v-if="loading"/>
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">История</router-link>
        <a @click.prevent class="breadcrumb">
          {{ record.classText }}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card " :class="record.color">
            <div class="card-content white-text">
              <p>Описание: {{record.description}}</p>
              <p>Сумма: {{record.amount | currency('EUR')}}</p>
              <p>Категория: {{record.categoryName}}</p>

              <small>{{record.date | date('datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center" v-else>No such record</p>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data: () => ({
    record: null,
    loading: true
  }),
  async mounted() {
    const id = this.$route.params.id
    const record = await this.$store.dispatch('fetchRecordById', id)
    const category = await this.$store.dispatch('fetchCategoryById', record.categoryId)
    this.record = {
      ...record,
      categoryName: category.title,
      color: record.type === 'income' ? 'green' : 'red',
      classText: record.type === 'income' ? 'Income' : 'Outcome'
    }

    this.loading = false
  }
}
</script>
