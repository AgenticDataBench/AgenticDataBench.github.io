<template>
  <div :class="['submission-details', { compact }]">
    <p class="submission-intro">Send your results or agent code by email. Choose the evaluation track below and include the corresponding attachment.</p>
    <div class="submission-methods">
      <article v-for="method in submissionMethods" :key="method.name" class="submission-method">
        <div class="method-heading">
          <span class="method-icon" aria-hidden="true">
            <svg v-if="method.icon === 'results'" viewBox="0 0 20 20"><path d="M5 2h7l3 3v13H5zM12 2v4h3M8 10h4M8 13h4" /></svg>
            <svg v-else viewBox="0 0 20 20"><path d="m6 6-4 4 4 4M14 6l4 4-4 4M11 4 9 16" /></svg>
          </span>
          <h3>{{ method.name }} evaluation</h3>
        </div>
        <p class="method-description">{{ method.description }}</p>
        <span class="detail-label">ATTACHMENT</span>
        <p class="attachment"><span class="attachment-dot" aria-hidden="true"></span>{{ method.attachment }}</p>
        <div class="subject-heading"><span class="detail-label">EMAIL SUBJECT</span><button type="button" class="copy-subject" :aria-label="`Copy ${method.name} email subject`" @click="copyText(method.subject, 'Email subject copied.')">Copy</button></div>
        <code class="subject-format">{{ method.subject }}</code>
        <p class="subject-hint">Replace Team, Method and Model with your details.</p>
      </article>
    </div>
    <div class="submission-recipient">
      <div><span class="detail-label">SEND TO</span><span class="recipient-email">{{ submissionEmail }}</span></div>
      <button type="button" class="copy-email" @click="copyText(submissionEmail, 'Email address copied.')"><svg viewBox="0 0 20 20" aria-hidden="true"><rect x="7" y="7" width="9" height="10" rx="1.5" /><path d="M12 7V3H3v10h4" /></svg>Copy email</button>
    </div>
    <div class="submission-bottom"><span>Reviewed within 3–5 business days.</span><a :href="submissionGuidelines" target="_blank" rel="noopener noreferrer">Submission guidelines <span aria-hidden="true">↗</span></a></div>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'
import { submissionEmail, submissionGuidelines, submissionMethods } from '../content/submission'
defineProps<{ compact?: boolean }>()

async function copyText(text: string, confirmation: string) {
  try {
    await navigator.clipboard.writeText(text)
    message.success(confirmation)
  } catch {
    message.info('Please select and copy the text directly.')
  }
}
</script>

<style scoped>
.submission-intro { color: #64738a; font-size: 13px; line-height: 1.8; margin: 6px 0 22px; }
.submission-methods { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.submission-method { border: 1px solid #e0e7f2; border-radius: 10px; padding: 20px; background: #fbfcff; min-width: 0; }
.method-heading { display: flex; align-items: center; gap: 9px; margin-bottom: 12px; }
.method-icon { display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 7px; background: #edf3ff; color: #5176b7; flex-shrink: 0; }
.method-icon svg { height: 17px; width: 17px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
h3 { font-size: 15px; font-weight: 650; color: #2d4265; margin: 0; }
.method-description { font-size: 12px; color: #718096; line-height: 1.7; margin: 0 0 18px; min-height: 42px; }
.detail-label { display: block; font-size: 9px; font-weight: 650; letter-spacing: .9px; color: #7d8da5; }
.attachment { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #486284; margin: 6px 0 20px; }
.attachment-dot { width: 5px; height: 5px; background: #6890d1; border-radius: 50%; flex-shrink: 0; }
.subject-heading { display: flex; align-items: center; justify-content: space-between; margin-bottom: 7px; gap: 8px; }
.copy-subject { border: none; background: transparent; color: #3d6cc2; font: inherit; font-size: 10px; padding: 0; cursor: pointer; }
.subject-format { display: block; background: #eef2f8; color: #516583; padding: 10px; border-radius: 6px; font-size: 10px; line-height: 1.8; overflow-wrap: anywhere; }
.subject-hint { font-size: 10px; color: #8995a8; line-height: 1.7; margin: 7px 0 0; }
.submission-recipient { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 18px 20px; margin-top: 20px; border: 1px solid #e1e8f3; border-radius: 9px; background: #f4f7fc; }
.recipient-email { display: block; font-size: 15px; font-weight: 600; color: #2d4a78; margin-top: 5px; overflow-wrap: anywhere; }
.copy-email { display: flex; align-items: center; gap: 6px; border: 1px solid #d7e2f3; border-radius: 6px; padding: 8px 11px; font: inherit; font-size: 11px; font-weight: 500; color: #3565b5; background: #fff; cursor: pointer; flex-shrink: 0; }
.copy-email svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
.copy-email:hover { border-color: #81a5e0; background: #f9fbff; }
.submission-bottom { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; color: #8a96a8; font-size: 11px; padding-top: 18px; }
.submission-bottom a { font-weight: 500; }
button:focus-visible { outline: 2px solid #729cf0; outline-offset: 3px; }
.compact .submission-methods { grid-template-columns: 1fr; gap: 12px; }
.compact .submission-method { padding: 16px; }
.compact .method-description { min-height: 0; }
.compact .submission-recipient { padding: 14px 16px; flex-wrap: wrap; gap: 12px; }
.compact .recipient-email { font-size: 13px; }
@media (max-width: 600px) {
  .submission-methods { grid-template-columns: 1fr; gap: 12px; }
  .submission-method { padding: 16px; }
  .method-description { min-height: 0; }
  .submission-recipient { flex-wrap: wrap; padding: 16px; gap: 12px; }
  .recipient-email { font-size: 14px; }
}
</style>
