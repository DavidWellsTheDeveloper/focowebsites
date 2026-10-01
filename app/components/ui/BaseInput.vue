<script setup lang="ts">
interface Props {
  modelValue: string
  type?: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number' | 'textarea'
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  error?: string | undefined
  hint?: string
  autocomplete?: string
  name?: string
  id?: string
  rows?: number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  disabled: false,
  readonly: false,
  rows: 4,
})

const emit = defineEmits<{ 'update:modelValue': [value: string]; blur: [event: FocusEvent] }>()

const inputId = computed(() => props.id || `input-${props.name || Math.random().toString(36).slice(2)}`)
const describedBy = computed(() => {
  const ids = []
  if (props.error) ids.push(`${inputId.value}-error`)
  if (props.hint) ids.push(`${inputId.value}-hint`)
  return ids.length ? ids.join(' ') : undefined
})

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

function handleBlur(event: FocusEvent) {
  emit('blur', event)
}
</script>

<template>
  <div class="base-input-wrapper">
    <label v-if="label" :for="inputId" class="base-input__label">
      {{ label }}
      <span v-if="required" class="base-input__required" aria-hidden="true">*</span>
    </label>
    <div class="base-input__control-wrapper">
      <input
        v-if="type !== 'textarea'"
        :type="type"
        :id="inputId"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :aria-invalid="!!error"
        :aria-describedby="describedBy"
        :class="['base-input', { 'base-input--error': error, 'base-input--disabled': disabled }]"
        @input="handleInput"
        @blur="handleBlur"
      />
      <textarea
        v-else
        :id="inputId"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        :rows="rows"
        :aria-invalid="!!error"
        :aria-describedby="describedBy"
        :class="['base-input', 'base-input--textarea', { 'base-input--error': error, 'base-input--disabled': disabled }]"
        @input="handleInput"
        @blur="handleBlur"
      />
    </div>
    <p v-if="error" :id="`${inputId}-error`" class="base-input__error" role="alert">
      {{ error }}
    </p>
    <p v-else-if="hint" :id="`${inputId}-hint`" class="base-input__hint">
      {{ hint }}
    </p>
  </div>
</template>

<style module>
.base-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  width: 100%;
}

.base-input__label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-background);
}

.base-input__required {
  color: var(--color-accent);
  margin-left: var(--space-1);
}

.base-input__control-wrapper {
  position: relative;
}

.base-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-on-background);
  background-color: var(--color-surface);
  border: 2px solid var(--color-outline);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.base-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 20%, transparent);
}

.base-input--error {
  border-color: var(--color-accent);
}

.base-input--error:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent);
}

.base-input--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: var(--color-background);
}

.base-input::placeholder {
  color: var(--color-on-background);
  opacity: 0.4;
}

.base-input--textarea {
  resize: vertical;
  min-height: 100px;
  font-family: var(--font-body);
}

.base-input__error {
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  margin: 0;
}

.base-input__hint {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.6;
  margin: 0;
}
</style>