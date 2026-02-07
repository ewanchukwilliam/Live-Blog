<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
  name: v.pipe(v.string(), v.minLength(2, 'Name must be at least 2 characters')),
  email: v.pipe(v.string(), v.email('Invalid email')),
  subject: v.pipe(v.string(), v.minLength(1, 'Please select a subject')),
  message: v.pipe(v.string(), v.minLength(10, 'Message must be at least 10 characters'))
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const subjectOptions = [
  { label: 'General Inquiry', value: 'general' },
  { label: 'Collaboration', value: 'collaboration' },
  { label: 'Feedback', value: 'feedback' },
  { label: 'Bug Report', value: 'bug' },
  { label: 'Other', value: 'other' }
]

const toast = useToast()
const loading = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true
  try {
    // TODO: Send to your backend
    console.log(event.data)
    toast.add({
      title: 'Message Sent!',
      description: 'Thanks for reaching out. I\'ll get back to you soon.',
      color: 'success'
    })
    // Reset form
    state.name = ''
    state.email = ''
    state.subject = ''
    state.message = ''
  } catch (e) {
    toast.add({
      title: 'Error',
      description: 'Something went wrong. Please try again.',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UCard class="w-full max-w-lg">
      <template #header>
        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-mail" class="text-2xl" />
          <div>
            <h2 class="text-xl font-semibold">Get in Touch</h2>
            <p class="text-sm text-muted">I'd love to hear from you</p>
          </div>
        </div>
      </template>

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormField label="Name" name="name" required class="w-full">
          <UInput v-model="state.name" placeholder="Your name" icon="i-lucide-user" class="w-full" />
        </UFormField>

        <UFormField label="Email" name="email" required class="w-full">
          <UInput v-model="state.email" type="email" placeholder="your@email.com" icon="i-lucide-mail" class="w-full" />
        </UFormField>

        <UFormField label="Subject" name="subject" required class="w-full">
          <USelect v-model="state.subject" :items="subjectOptions" placeholder="Select a subject" class="w-full" />
        </UFormField>

        <UFormField label="Message" name="message" required class="w-full">
          <UTextarea v-model="state.message" placeholder="What's on your mind?" :rows="5" class="w-full" />
        </UFormField>

        <UButton type="submit" block :loading="loading" icon="i-lucide-send">
          Send Message
        </UButton>
      </UForm>

      <template #footer>
        <p class="text-center text-sm text-muted">
          Or reach me directly at <ULink to="mailto:ewanchukwilliam@gmail.com" class="text-primary font-medium">ewanchukwilliam@gmail.com</ULink>
        </p>
      </template>
    </UCard>
  </div>
</template>

