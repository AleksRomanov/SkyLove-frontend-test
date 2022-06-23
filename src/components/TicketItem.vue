<template>
  <li>
    <span>
      <input type="checkbox">
      <strong>{{ ticket }}</strong>
      {{ticket}}
    </span>
    <button>&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: true
    }
  }
}
</script>
