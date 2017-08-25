<template>
  <ol>
    <li v-for="news of list">
      <p class="title">{{ news.title }}</p>
      <p class="date">{{ news.create_at }}</p>
      <p class="author">By: {{ news.author.loginname }}</p>
    </li>
  </ol>
</template>

import reqwest from 'reqwest'
const domain = 'https://cnodejs.org/api/v1/topics'

export default {
  getList (data, callback) {
    reqwest({
      url: domain,
      data: data
    })
    .then(val => callback(null, val))
    .catch(e => callback(e))
  }
}


<style scoped>
  ol {
    margin-left: 2rem;
    list-style: outside decimal;
  }
  li {
    line-height: 1.5;
    padding: 1rem;
    border-bottom: 1px solid #b6b6b6;
  }
  .title {
    font-weight: bold;
    font-size: 1.3rem;
  }
  .date {
    font-size: .8rem;
    color: #d6d6d6;
  }
</style>