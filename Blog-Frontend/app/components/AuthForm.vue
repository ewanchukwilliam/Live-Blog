<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()
const error = ref<string | null>(null)

const fields = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox'
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Login with GitHub' })
  }
}]

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  error.value = null
  try {
    // TODO: Add your auth logic here
    console.log('Submitted', payload)
  } catch (e) {
    error.value = 'Invalid email or password'
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        :providers="providers"
        title="Welcome back!"
        icon="i-lucide-lock"
        @submit="onSubmit"
      >
        <template #description>
          Don't have an account? <ULink to="/signup" class="text-primary font-medium">Sign up</ULink>.
        </template>
        <template #password-hint>
          <ULink to="/forgot-password" class="text-primary font-medium" tabindex="-1">Forgot password?</ULink>
        </template>
        <template v-if="error" #validation>
          <UAlert color="error" icon="i-lucide-info" :title="error" />
        </template>
        <template #footer>
          By signing in, you agree to our <ULink to="/terms" class="text-primary font-medium">Terms of Service</ULink>.
        </template>
      </UAuthForm>
    </UCard>
  </div>
</template>

