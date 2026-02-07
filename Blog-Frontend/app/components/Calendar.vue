<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const props = defineProps<{
  date?: string
}>()

const value = computed(() => {
  if (!props.date) return new CalendarDate(2025, 1, 1)
  const d = new Date(props.date)
  return new CalendarDate(d.getFullYear(), d.getMonth() + 1, d.getDate())
})
</script>

<template>
  <UCalendar v-model="value" />
</template>
